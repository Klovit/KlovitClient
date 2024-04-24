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
const resconf = restype.restype
 
// Getting data from Request
const formData = await request.formData();
const amount = formData.get("amount")?.toString()
if (amount) {
try {
    const number = Number(amount) / config.coins.store.disk.per
    const cost = config.coins.store.disk.cost * number
    const oldbalance = await db.get("balance-" + email)
    if (oldbalance < cost) {
        return redirect(`/store?error=You have insufficient Coins`)
    } else {
    const newbalance = oldbalance - cost
    const oldextra = await db.get("extraresources-" + email)
    const oldextradisk = oldextra.disk
    const newextradisk = oldextradisk + amount
    const newextra = {
        ram: oldextra.ram,
        disk: newextradisk,
        cpu: oldextra.cpu,
        servers: oldextra.servers
      };
    await db.set("extraresources-" + email, newextra)
    await db.set("balance-" + email, newbalance)
    return redirect(`/store?success=You have successfully bought ${amount} ${resconf} Disk for ${cost} Coins`)
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

