import { s as supabase } from '../../../chunks/supabase_Cat3wBav.mjs';
import { c as config, d as db } from '../../../chunks/config_CuAv1651.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const username = formData.get("username")?.toString();
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const provider = formData.get("provider")?.toString();
  const auth = [];
  if (config.auth.supabase.oauth2.google.enabled) {
    auth.push(...[
      "google"
    ]);
  }
  if (config.auth.supabase.oauth2.discord.enabled) {
    auth.push(...[
      "discord"
    ]);
  }
  if (config.auth.supabase.oauth2.github.enabled) {
    auth.push(...[
      "github"
    ]);
  }
  const validProviders = auth;
  if (provider && validProviders.includes(provider)) {
    const { data, error: error2 } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: config.website.url + `/api/auth/callback`
      }
    });
    if (error2) {
      cookies.delete("sb-access-token", {
        path: "/"
      });
      cookies.delete("sb-refresh-token", {
        path: "/"
      });
      return redirect("/signin");
    }
    if (error2) {
      return redirect(`/signin?error="${error2.message}"`);
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
  const full_name = username;
  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name,
        avatar: "https://i.imgur.com/zqGM5VI.png"
      }
    }
  });
  if (error) {
    return redirect(`/register?error=${error.message}`);
  }
  let genpassword = null;
  genpassword = makeid(16);
  await fetch(
    config.pterodactyl.url + "/api/application/users",
    {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${config.pterodactyl.api}`
      },
      body: JSON.stringify({
        username,
        email,
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
        "Content-Type": "application/json",
        "Authorization": `Bearer ${config.pterodactyl.api}`
      }
    }
  );
  let currentinfo = await db.get("user-" + email);
  let info;
  if (typeof currentinfo == "object") {
    info = currentinfo;
  } else {
    info = {
      package: config.packages.default,
      balance: 0,
      password: genpassword,
      extraresources: {
        ram: 0,
        disk: 0,
        cpu: 0,
        servers: 0
      }
    };
  }
  let accountlist = await accountlistjson.json();
  let user = accountlist.data.filter((acc) => acc.attributes.email == email);
  if (user.length == 1) {
    await db.set("user-" + email, info);
  } else {
    console.log(`An error has occured when attempting to create ${email}'s account account.`);
  }
  function makeid(length) {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  return redirect(`/signin?registered="true"`);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
