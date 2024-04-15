import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";
import chalk from "chalk";
import db from '../../../database';
import { Response } from "node-fetch";
import config from '../../../config';
import { ExpressRoute } from "@astro-utils/express-endpoints";
import doubleCsrfProtection from "../../../middleware";
import restype from "src/restype";
import { mdiHeadHeart } from "@mdi/js";

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
if (userdata.length != 1) {
    return redirect(`/account?error="Error while getting your account information."`)
}

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
function makeid(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+`~,.;:?/\[]{}|';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;  
    }
let genpassword = null;
genpassword = makeid(16);
const newpass = genpassword

// Making a request to reset the password.
const result = fetch(config.pterodactyl.url + "/api/application/users/" + pterodactyl.id, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
    "Authorization": `Bearer ${config.pterodactyl.api}`
  },
  body: JSON.stringify({
    email: pterodactyl.email,
    external_id: pterodactyl.external_id,
    first_name: pterodactyl.first_name,
    language: pterodactyl.language,
    last_name: pterodactyl.last_name,
    password: newpass,
    root_admin: pterodactyl.root_admin,
    username: pterodactyl.username  }),
})
// Checking response status and redirecting on successful and unsuccessful response.
if((await result).status === 200) {
  console.log("Successfully reset password of user: " + username)
  db.set("password-" + email, newpass)
  return redirect(`/account?success="Successfully reset your account's password."&password=` + newpass)
} else {
  console.error('Error:', (await result).status + (await result).statusText);
  return redirect(`/account?error="Unknown error occured while resetting your account's password."`)
}
}