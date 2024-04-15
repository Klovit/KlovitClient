import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";
import db from '../../../database';
import { Response } from "node-fetch";
import config from '../../../config';
import type { Provider } from "@supabase/supabase-js";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const username = formData.get("username")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const provider = formData.get("provider")?.toString();
const auth = []
  if (config.auth.supabase.oauth2.google.enabled) {
    auth.push(...[
"google"
     ])
     }
     
     if (config.auth.supabase.oauth2.discord.enabled) {
      auth.push(...[ 
"discord"
             ])
        }
        if (config.auth.supabase.oauth2.github.enabled) {
          auth.push(...[ 
    "github"
                 ])
            }

  const validProviders = auth;
  if (provider && validProviders.includes(provider)) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider as Provider,
      options: {
        redirectTo: config.website.url + `/api/auth/callback`
      },
    });


    
    if (error) {
      cookies.delete("sb-access-token", {
        path: "/",
      });
      cookies.delete("sb-refresh-token", {
        path: "/",
      });
    
      return redirect("/signin");
    }
    

    if (error) {
      return redirect(`/signin?error="${error.message}"`);
    }


    return redirect(data.url);
    
  }

  if (!username || !password) {
    return redirect(`/register?error="Username and password are required."`);
  }
  if (!username || !email) {
    return redirect(`/register?error="Username and email is required."`);
  }
  if (!password || !email) {
    return redirect(`/register?error="Password and email is required."`);
  }
  if (!email) {
    return redirect(`/register?error="Email is required"`);
  }
  if (!password) {
    return redirect(`/register?error="Password is required"`);
  }
  if (!username) {
    return redirect(`/register?error="Username is required."`);
  }

const full_name = username

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: full_name,
        avatar: "https://i.imgur.com/zqGM5VI.png"
      },
    },
  });

  if (error) {
    return redirect(`/register?error="${error.message}"`);
}
      let genpassword = null;
      genpassword = makeid(16);
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
        let currentextra = await db.get("extra-" + username);
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
        let currentplan = await db.get("package-" + username);
        let plan;

        if (typeof currentplan == "object") {
            plan = currentplan;
        } else {
          plan = config.packages.default
        }
        let accountlist = await accountlistjson.json();
        let user = accountlist.data.filter(acc => acc.attributes.email == email);
        if (user.length == 1) {
          let usernames = await db.get("users") ? await db.get("users") : [];
          if (usernames.filter(id => id == username).length == 0) {
            usernames.push(username);
            await db.set("user-" + username, email);
            await db.get("package-" + username, config.packages.default)
          } 

          await db.set(`package-${username}`, plan)
          await db.set(`extraresources-${username}`, extra)
        } else {
          console.log(`An error has occured when attempting to create ${email}'s account account.`);
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
return redirect(`/signin?registered="true"`);
}
