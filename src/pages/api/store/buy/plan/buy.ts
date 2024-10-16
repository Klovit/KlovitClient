import { APIRoute } from 'astro';
import Stripe from 'stripe';
import { supabase } from "../../../../../lib/supabase";
import chalk from "chalk";
import db from '../../../../../database';
import { Response } from "node-fetch";
import config from '../../../../../config';
import { ExpressRoute } from "@astro-utils/express-endpoints";
import doubleCsrfProtection from "../../../../../middleware";
import restype from "src/restype";

const router = new ExpressRoute();
router.use(doubleCsrfProtection)
const stripe = new Stripe(config.payments.gateways.stripe.key as string, {
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
  const plan = body.plan
if (!config.payments.enabled) {
  return redirect('/dashboard?error=Payments Are Disabled')
}
  if (!plan || typeof plan !== 'object') {
    return redirect('/store?error=Invalid Plan')
  }

  try {
    const amount = calculatePackagePrice(plan);

    const customer = await stripe.customers.create({
        payment_method: req.body.paymentMethodId,
        email: req.body.email,
        invoice_settings: {
            default_payment_method: req.body.paymentMethodId,
        },
    });

    const subscription = await stripe.subscriptions.create({
        customer: customer.id,
        items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: { name: plan },
                    unit_amount: amount,
                    recurring: { interval: 'month' }, // Recurring monthly
                },
            },
        ],
        expand: ['latest_invoice.payment_intent'],
    });
    const currentinfo = await db.get("user-" + email)
    const newinfo = {
        package: plan,
        balance: currentinfo.balance,
        password: currentinfo.password,
        extraresources: {
          ram: currentinfo.ram,
          disk: currentinfo.disk,
          cpu: currentinfo.cpu,
          servers: currentinfo.servers
        }
    };

    await db.set(`user-` + email, newinfo);

    return redirect('/store?success=Plan Purchased');
} catch (error) {
    console.error('Payment processing failed:', error);

    return redirect('/store?error=Payment processing failed');
}
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: config.packages.list[plan].price,
      currency: config.payments.currency,
      payment_method_types: ['card'],
    });

    const currentinfo = await db.get("user-" + email)
    const newinfo = {
      package: plan,
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
    return redirect(`/store?error=${error}`);
  }
};
