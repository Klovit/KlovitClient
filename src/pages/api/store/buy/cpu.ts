import type { APIRoute } from "astro";
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
// Fetching data from SupaBase and giving it an identifier.
const {
  data: { user },
} = await supabase.auth.getUser()
const metadata = user.user_metadata
const username = metadata.full_name
const email = data?.user?.email


// Getting data from Request
const formData = await request.formData();
const amount = formData.get("amount")?.toString()
let cputype;
if (config.resource_type === "GB") {
 cputype = " Core(s)"
} else {
 cputype = "%"
}
if (amount) {
try {
    const currentinfo = await db.get("user-" + email)
    const number = Number(amount) / config.coins.store.cpu.per
    const cost = config.coins.store.cpu.cost * number
    const oldbalance = currentinfo.balance
    if (oldbalance < cost) {
        return redirect(`/store?error=You have insufficient Coins`)
    } else {
    const newbalance = oldbalance - cost
    const newextracpu = currentinfo.extraresources.cpu + amount
    const newinfo = {
      package: currentinfo.package,
      balance: newbalance,
      password: currentinfo.password,
      extraresources: {
        ram: currentinfo.ram,
        disk: currentinfo.disk,
        cpu: newextracpu,
        servers: currentinfo.servers
      }
    } 
    await db.set("user-" + email, newinfo)
    return redirect(`/store?success=You have successfully bought ${amount} ${cputype} for ${cost} Coins`)
    }
}
catch(err) {
  console.log(err)
  return redirect(`/store?error=` + err);
}
} else {
  return redirect(`/store?error=A Field is missing.`);
}
}

