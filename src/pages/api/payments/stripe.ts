import { APIRoute } from 'astro';
import Stripe from 'stripe';
import { supabase } from "../../../lib/supabase";
import chalk from "chalk";
import db from '../../../database';
import { Response } from "node-fetch";
import config from '../../../config';
import { ExpressRoute } from "@astro-utils/express-endpoints";
import doubleCsrfProtection from "../../../middleware";
import restype from "src/restype";

const router = new ExpressRoute();
router.use(doubleCsrfProtection)
const stripe = new Stripe(config.paymets.stripe.key as string, {
    apiVersion: '2024-04-10',
  });
export const POST: APIRoute = async function POST({ request, cookies, redirect }) {
  // Session Validation.
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return redirect("/signin");
  }
  const { data, error } = await supabase.auth.setSession({
    refresh_token: refreshToken.value,
    access_token: accessToken.value,
  });
  if (error) {
  console.log(error)
  }
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const metadata = user.user_metadata
  const username = metadata.full_name
  const email = data?.user?.email
  const resconf = restype.restype

  const body = await request.json();
  const amount = body.amount

  if (!amount || typeof amount !== 'number') {
    return new Response(JSON.stringify({ error: 'Invalid amount' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: config.payments.stripe.price/100 * amount,
      currency: config.payments.stripe.currency,
      payment_method_types: ['card'],
    });

    const currentinfo = await db.get("user-" + email)
    const newbal = +currentinfo.balance + +amount
    const newinfo = {
      package: currentinfo.package,
      balance: currentinfo.balance,
      password: currentinfo.password,
      extraresources: {
        ram: currentinfo.ram,
        disk: currentinfo.disk,
        cpu: currentinfo.cpu,
        servers: currentinfo.servers
      }
    } 
    await db.set("user-" + email, newinfo)
    return new Response(JSON.stringify(paymentIntent), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error(error);
    return redirect(`/payments?error=${error}`);
  }
};
