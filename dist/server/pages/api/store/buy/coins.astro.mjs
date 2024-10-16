import Stripe from 'stripe';
import { s as supabase } from '../../../../chunks/supabase_Cat3wBav.mjs';
import { c as config, d as db } from '../../../../chunks/config_CuAv1651.mjs';
import { E as ExpressRoute } from '../../../../chunks/express-route_B6BV_o9Q.mjs';
import 'mime';
import 'statuses';
import 'cookie';
import '@tinyhttp/accepts';
import { d as doubleCsrfProtection } from '../../../../chunks/middleware_DctY4RUm.mjs';
import '../../../../chunks/restype_D7TyzxY8.mjs';
export { renderers } from '../../../../renderers.mjs';

const router = new ExpressRoute();
router.use(doubleCsrfProtection);
const stripe = new Stripe(config.payments.gateways.stripe.key);
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
  const reqdata = await request.json();
  const amount = reqdata.amount;
  if (!config.payments.enabled) {
    return redirect("/dashboard?error=Payments Are Disabled");
  }
  if (amount || typeof amount === "number") {
    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: config.coins.store.coins.per / config.coins.store.coins.per * Number(amount),
        currency: config.payments.currency,
        confirm: true,
        payment_method_types: ["card"]
      });
      if (paymentIntent.status === "succeeded") {
        const currentinfo = await db.get("user-" + email);
        const newbal = +currentinfo.balance + +amount;
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
        };
        await db.set("user-" + email, newinfo);
        return redirect("/store?success=You successfully purchased " + amount + " coins");
      } else {
        return redirect("/store?error=Payment Unsuccessful.");
      }
    } catch (error2) {
      console.error(error2);
      return redirect(`/store?error=${error2}`);
    }
    return redirect("/store?error=Unknown Error Occured.");
  } else {
    return redirect("/store?error=Invalid Amount");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
