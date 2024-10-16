import Stripe from 'stripe';
import { s as supabase } from '../../../../../chunks/supabase_Cat3wBav.mjs';
import { c as config, d as db } from '../../../../../chunks/config_CuAv1651.mjs';
import { Response } from 'node-fetch';
import { E as ExpressRoute } from '../../../../../chunks/express-route_B6BV_o9Q.mjs';
import 'mime';
import 'statuses';
import 'cookie';
import '@tinyhttp/accepts';
import { d as doubleCsrfProtection } from '../../../../../chunks/middleware_DctY4RUm.mjs';
import '../../../../../chunks/restype_D7TyzxY8.mjs';
export { renderers } from '../../../../../renderers.mjs';

const router = new ExpressRoute();
router.use(doubleCsrfProtection);
const stripe = new Stripe(config.payments.gateways.stripe.key, {
  apiVersion: "2024-04-10"
});
const POST = async function POST2({ request, cookies, redirect }) {
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return redirect("/signin");
  }
  const { data, error } = await supabase.auth.setSession({
    refresh_token: refreshToken.value,
    access_token: accessToken.value
  });
  if (error) {
    console.log(error);
  }
  const {
    data: { user }
  } = await supabase.auth.getUser();
  const metadata = user.user_metadata;
  metadata.full_name;
  const email = data?.user?.email;
  const body = await request.json();
  const plan = body.plan;
  if (!config.payments.enabled) {
    return redirect("/dashboard?error=Payments Are Disabled");
  }
  if (!plan || typeof plan !== "object") {
    return redirect("/store?error=Invalid Plan");
  }
  try {
    const amount = calculatePackagePrice(plan);
    const customer = await stripe.customers.create({
      payment_method: req.body.paymentMethodId,
      email: req.body.email,
      invoice_settings: {
        default_payment_method: req.body.paymentMethodId
      }
    });
    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: plan },
            unit_amount: amount,
            recurring: { interval: "month" }
            // Recurring monthly
          }
        }
      ],
      expand: ["latest_invoice.payment_intent"]
    });
    const currentinfo = await db.get("user-" + email);
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
    return redirect("/store?success=Plan Purchased");
  } catch (error2) {
    console.error("Payment processing failed:", error2);
    return redirect("/store?error=Payment processing failed");
  }
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: config.packages.list[plan].price,
      currency: config.payments.currency,
      payment_method_types: ["card"]
    });
    const currentinfo = await db.get("user-" + email);
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
    await db.set("user-" + email, newinfo);
    return new Response(JSON.stringify(paymentIntent), {
      status: 200,
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error2) {
    console.error(error2);
    return redirect(`/store?error=${error2}`);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
