import type { APIRoute } from "astro";
import { supabase } from "../../../lib/supabase";
import type { Provider } from "@supabase/supabase-js";
import config from '../../../config';
import db from '../../../database';
export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
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

  if (!email || !password) {
    return new Response("Email and password are required", { status: 400 });
  }
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect(`/signin?error="${error.message}"`);
  }

  const { access_token, refresh_token } = data.session;
  

  cookies.set("sb-access-token", access_token, {
    path: "/",
  });
  cookies.set("sb-refresh-token", refresh_token, {
    path: "/",
  });

  return redirect("/dashboard");
};