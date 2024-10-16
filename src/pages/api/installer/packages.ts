import { APIRoute } from 'astro';
import chalk from "chalk";
import db from '../../../database';
import { Response } from "node-fetch";
import { ExpressRoute } from "@astro-utils/express-endpoints";
import doubleCsrfProtection from "../../../middleware";

const router = new ExpressRoute();
router.use(doubleCsrfProtection)
export const POST: APIRoute = async function POST({ request, cookies, redirect }) {
// Getting data from Request
const formData = await request.formData();
const token = formData.get("token")?.toString()
const ram = formData.get("ram")?.toString()
const cpu = formData.get("cpu")?.toString()
const storage = formData.get("storage")?.toString()
const slots = formData.get("slots")?.toString()
const payments = formData.get("payments")?.toString() ?? false
const paypal_integration = formData.get("paypal_integration")?.toString() ?? false
const paypal_email = formData.get("paypal_email")?.toString()
const currency_code = formData.get("currency_code")?.toString()


if (await db.get("installed") === true) {
    return redirect(`/?error=KlovitClient is already installed.`)
}

// Verifying token
const starttoken = await db.get("starttoken")
if (token != starttoken) {
    return redirect("/installer/start?error=Invalid Token")
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
            "email": paypal_email,
          }
        }
      }
}
await db.set("config_packages",config_packages)

return redirect(`/installer/currency?token=${token}`)
};
