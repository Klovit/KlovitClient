import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";
import config from '../../../config';
import db from '../../../database';
export const GET: APIRoute = async ({ url, cookies, redirect }) => {
  const authCode = url.searchParams.get("code");

  if (!authCode) {
    return redirect(`/signin?error="No Code Provided."`);
  }

  const { data, error } = await supabase.auth.exchangeCodeForSession(authCode);
  const { data: { user }, } = await supabase.auth.getUser()
  const metadata = user.user_metadata
  const email = data?.user?.email
  const username = user.user_metadata.full_name
  const { access_token, refresh_token } = data.session;
  // Creating a account on Pterodactyl Panel.
  let genpassword = null;
  genpassword = makeid(16);

  try {
    let accountlistjson2 = await fetch(
      config.pterodactyl.url + "/api/application/users?include=servers&filter[email]=" + encodeURIComponent(email),
      {
          method: "get",
          headers: {
              'Content-Type': 'application/json',
              "Authorization": `Bearer ${config.pterodactyl.api}`
          }
      });
      let accountlist2 = await accountlistjson2.json();
      let userdata = accountlist2.data.filter(acc => acc.attributes.email == email);
    if(!userdata) {
    let accountjson = await fetch(
      config.pterodactyl.url + "/api/application/users",
      {
        method: "post",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": `Bearer ${config.pterodactyl.api}`
        },
        body: JSON.stringify({
          username: username,
          email: email,
          first_name: username,
          last_name: username,
          password: genpassword
        })
      }
    );
    }
  }
  catch(err) {
console.log(err)
  }
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
    let currentextra = await db.get("extra-" + email);
    let extra;

    if (typeof currentextra == "object") {
        extra = currentextra;
    } else {
        extra = {
            ram: 0,
            disk: 0,
            cpu: 0,
            servers: 0
        }
    }
    let currentplan = await db.get("package-" + email);
    let currentbalance = await db.get("balance-" + email);
    let plan;

    if (typeof currentplan == "object") {
        plan = currentplan;
    } else {
      plan = config.packages.default
    }
    let coins;
    if (typeof currentbalance == "object") {
      coins = currentbalance;
    } else {
      coins = 0
    }

    let accountlist = await accountlistjson.json();
    let usere = accountlist.data.filter(acc => acc.attributes.email == email);
    if (usere.length == 1) {
      let usernames = await db.get("users") ? await db.get("users") : [];
      if (usernames.filter(id => id == username).length == 0) {
        usernames.push(username);
        await db.set("user-" + email, username);
      } 
        await db.set(`package-${email}`, plan)
        await db.set("balance-" + email, coins);
        await db.set(`extraresources-${email}`, extra)
    } else {
      console.log(`An error has occured when attempting to create ${email}'s account.`);
    };



function makeid(length) {
let result = '';
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let charactersLength = characters.length;
for (let i = 0; i < length; i++) {
result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
return result;  
}
  if (error) {
    return redirect(`/signin?error="${error.message}"`);
  } 

  cookies.set("sb-access-token", access_token, {
    path: "/",
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
  });

  return redirect("/dashboard");
};