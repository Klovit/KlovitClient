import { APIRoute } from 'astro';
import Stripe from 'stripe';
import { supabase } from "../../../../lib/supabase";
import chalk from "chalk";
import db from '../../../../database';
import { Response } from "node-fetch";
import config from '../../../../config';
import { ExpressRoute } from "@astro-utils/express-endpoints";
import doubleCsrfProtection from "../../../../middleware";
import restype from "src/restype";

const router = new ExpressRoute();
router.use(doubleCsrfProtection)
const stripe = new Stripe(config.payments.gateways.stripe.key);
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

// Getting data from Request
const reqdata = await request.json();
const amount = reqdata.amount
if (!config.payments.enabled) {
  return redirect('/dashboard?error=Payments Are Disabled')
}
if (amount || typeof amount === 'number') {

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: config.coins.store.coins.per/config.coins.store.coins.per * Number(amount),
      currency: config.payments.currency,
      confirm: true,
      payment_method_types: ['card'],
    });
    if (paymentIntent.status === 'succeeded') {

    const currentinfo = await db.get("user-" + email)
    const newbal = +currentinfo.balance + +amount
    const newinfo = {
      package: currentinfo.package,
      balance: newbal,
      password: currentinfo.password,
      extraresources: {
        ram: currentinfo.ram,
        disk: currentinfo.disk,
        cpu: currentinfo.cpu,
        servers: currentinfo.servers
      }
    } 
    await db.set("user-" + email, newinfo)
    return redirect('/store?success=You successfully purchased ' + amount + " coins");
  } else {
    return redirect('/store?error=Payment Unsuccessful.')
  }
  } catch (error) {
    console.error(error);
    return redirect(`/store?error=${error}`);
  }
  return redirect('/store?error=Unknown Error Occured.')
} else {
  return redirect('/store?error=Invalid Amount')
}
};
