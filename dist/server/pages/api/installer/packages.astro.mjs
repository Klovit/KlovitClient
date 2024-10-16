import { d as db } from '../../../chunks/config_CuAv1651.mjs';
import { E as ExpressRoute } from '../../../chunks/express-route_B6BV_o9Q.mjs';
import 'mime';
import 'statuses';
import 'cookie';
import '@tinyhttp/accepts';
import { d as doubleCsrfProtection } from '../../../chunks/middleware_DctY4RUm.mjs';
export { renderers } from '../../../renderers.mjs';

const router = new ExpressRoute();
router.use(doubleCsrfProtection);
const POST = async function POST2({ request, cookies, redirect }) {
  const formData = await request.formData();
  const token = formData.get("token")?.toString();
  const ram = formData.get("ram")?.toString();
  const cpu = formData.get("cpu")?.toString();
  const storage = formData.get("storage")?.toString();
  const slots = formData.get("slots")?.toString();
  const payments = formData.get("payments")?.toString() ?? false;
  const paypal_integration = formData.get("paypal_integration")?.toString() ?? false;
  const paypal_email = formData.get("paypal_email")?.toString();
  const currency_code = formData.get("currency_code")?.toString();
  if (await db.get("installed") === true) {
    return redirect(`/?error=KlovitClient is already installed.`);
  }
  const starttoken = await db.get("starttoken");
  if (token != starttoken) {
    return redirect("/installer/start?error=Invalid Token");
  }
  const config_packages = {
    "packages": {
      "default": "default",
      "list": {
        "default": {
          "ram": ram,
          "disk": storage,
          "cpu": cpu,
          "servers": slots,
          "buyable": false,
          "price": 0
        }
      }
    },
    "payments": {
      "enabled": payments,
      "currency": currency_code,
      "gateways": {
        "paypal": {
          "enabled": paypal_integration,
          "email": paypal_email
        }
      }
    }
  };
  await db.set("config_packages", config_packages);
  return redirect(`/installer/currency?token=${token}`);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
