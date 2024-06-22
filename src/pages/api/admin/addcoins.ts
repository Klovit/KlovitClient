import type { APIRoute } from "astro";
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

// Fetching data from Pterodactyl
let accountlistjson = await fetch(
    config.pterodactyl.url + "/api/application/users?include=servers&filter[email]=" + encodeURIComponent(email),
    {
        method: "get",
        headers: {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${config.pterodactyl.api}`
        }
    }
  );
let accountlist = await accountlistjson.json();
let userdata = accountlist.data.filter(acc => acc.attributes.email == email);

let cacheaccount = await fetch(config.pterodactyl.url + "/api/application/users/" + userdata[0].attributes.id + "?include=servers",
 {
  method: "get",
  headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${config.pterodactyl.api}` }
 });
if (await cacheaccount.statusText == "Not Found") {
  if (error) {
    console.log(chalk.red(`[KlovitClient] An error has occured on path "/server/create":`));
  };};
let cacheaccountinfo = JSON.parse(await cacheaccount.text());
    
const pterodactyl = cacheaccountinfo.attributes;
if (!pterodactyl.root_admin) {
    return redirect(`/dashboard?error=Forbidden`)
}
if (!config.coins.enabled) {
 return redirect(`/admin?error=Coins are disabled.`)
}

// Getting data from Request
const formData = await request.formData();
const usremail = formData.get("email")?.toString()
const amount = formData.get("amount")?.toString()

if (amount && usremail) {
try {
    const addbal = amount
    const currentinfo = await db.get("user-" + email)
    const newbal = +currentinfo.balance + +addbal
    const newinfo = {
      package: currentinfo.package,
      balance: newbal,
      password: currentinfo.password,
      extraresources: {
        ram: currentinfo.extraresources.ram,
        disk: currentinfo.extraresources.disk,
        cpu: currentinfo.extraresources.cpu,
        servers: currentinfo.extraresources.servers
      }
    }    
    await db.set("user-" + usremail, newinfo)
}
catch (err) {
    console.log(err)
    return redirect("/admin/coins?error=" + err)
}
return redirect(`/admin/coins?success=Successfully added ${amount} coins to the user with the email: ${email}`)
} else {
  return redirect(`/admin/coins?error=Missing fields.`);
}
}

