import type { APIRoute } from "astro";
import { supabase } from "../../lib/supabase";
import chalk from "chalk";
import db from '../../database';
import { Response } from "node-fetch";
import config from '../../config';
import { ExpressRoute } from "@astro-utils/express-endpoints";
import doubleCsrfProtection from "../../middleware";
import restype from "src/restype";

const router = new ExpressRoute();
router.use(doubleCsrfProtection)

export const POST: APIRoute = async ({request, cookies, redirect}) => {


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
if (request.headers.get("Content-Type") === "application/json") {
  const reqbody = await request.json()
if (pterodactyl.relationships.servers.data.filter(server => server.attributes.id == reqbody.id).length == 0) return new Response(JSON.stringify({
  statustext: "Could not find server with that ID.",
  status: 422
}));

let deletionresults = await fetch(
  config.pterodactyl.url + "/api/application/servers/" + reqbody.id,
  {
    method: "delete",
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${config.pterodactyl.api}`
    }
  }
);
let ok = await deletionresults.ok;
if (ok !== true) return new Response(JSON.stringify({
  statustext: "An error has occured while deleting your server.",
  status: 422
}));
pterodactyl.relationships.servers.data = pterodactyl.relationships.servers.data.filter(server => server.attributes.id.toString() !== reqbody.id);

return new Response(JSON.stringify({
  statustext: "Successfully deleted your server.",
  status: 200
}));} else {
  return new Response(null, { 
    statusText: "Invalid content type." });
}
}