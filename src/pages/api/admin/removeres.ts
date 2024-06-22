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

// Getting data from Request
const formData = await request.formData();
const usremail = formData.get("email")?.toString()
const ram = formData.get("ram")?.toString()
const disk = formData.get("disk")?.toString()
const cpu = formData.get("cpu")?.toString()
const slots = formData.get("slots")?.toString()

if (ram && disk && cpu && slots && usremail) {
try {
  const currentinfo = await db.get("user-" + usremail)
  const newram = +ram - +currentinfo.extraresources.ram
  const newdisk = +disk - +currentinfo.extraresources.disk
  const newcpu = +cpu - +currentinfo.extraresources.cpu
  const newslots = +slots - +currentinfo.extraresources.servers
    const newinfo = {
      package: currentinfo.package,
      balance: currentinfo.balance,
      password: currentinfo.password,
      extraresources: {
        ram: newram,
        disk: newdisk,
        cpu: newcpu,
        servers: newslots
      }
    }  
    await db.set("user-" + usremail, newinfo)
}
catch (err) {
    console.log(err)
    return redirect("/admin/resources?error=" + err)
}
return redirect(`/admin/resources?success=Successfully removed the resources from the user with the email: ${usremail}`)
} else {
  return redirect(`/admin/resources?error=Missing fields.`);
}
}

