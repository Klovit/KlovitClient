import { s as supabase } from '../../../chunks/supabase_Cat3wBav.mjs';
import chalk from 'chalk';
import { c as config, d as db } from '../../../chunks/config_CuAv1651.mjs';
import { E as ExpressRoute } from '../../../chunks/express-route_B6BV_o9Q.mjs';
import 'mime';
import 'statuses';
import 'cookie';
import '@tinyhttp/accepts';
import { d as doubleCsrfProtection } from '../../../chunks/middleware_DctY4RUm.mjs';
export { renderers } from '../../../renderers.mjs';

const router = new ExpressRoute();
router.use(doubleCsrfProtection);
const POST = async ({ request, cookies, redirect }) => {
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return redirect("/signin");
  }
  const { data, error } = await supabase.auth.setSession({
    refresh_token: refreshToken.value,
    access_token: accessToken.value
  });
  if (error) {
    console.log(error);
  }
  const {
    data: { user }
  } = await supabase.auth.getUser();
  const metadata = user.user_metadata;
  const username = metadata.full_name;
  const email = data?.user?.email;
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
  let accountlist = await accountlistjson.json();
  let userdata = accountlist.data.filter((acc) => acc.attributes.email == email);
  if (userdata.length != 1) {
    return redirect(`/account?error="Error while getting your account information."`);
  }
  let cacheaccount = await fetch(
    config.pterodactyl.url + "/api/application/users/" + userdata[0].attributes.id + "?include=servers",
    {
      method: "get",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${config.pterodactyl.api}` }
    }
  );
  if (await cacheaccount.statusText == "Not Found") {
    if (error) {
      console.log(chalk.red(`[KlovitClient] An error has occured on path "/server/create":`));
    }
  }
  let cacheaccountinfo = JSON.parse(await cacheaccount.text());
  const pterodactyl = cacheaccountinfo.attributes;
  function makeid(length) {
    let result2 = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+`~,.;:?/[]{}|";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result2 += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result2;
  }
  let genpassword = null;
  genpassword = makeid(16);
  const newpass = genpassword;
  const result = fetch(config.pterodactyl.url + "/api/application/users/" + pterodactyl.id, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
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
      username: pterodactyl.username
    })
  });
  if ((await result).status === 200) {
    console.log("Successfully reset password of user: " + username);
    const currentinfo = await db.get("user-" + email);
    const newinfo = {
      package: currentinfo.package,
      balance: currentinfo.balance,
      password: newpass,
      extraresources: {
        ram: currentinfo.ram,
        disk: currentinfo.disk,
        cpu: currentinfo.cpu,
        servers: currentinfo.servers
      }
    };
    await db.set("user-" + email, newinfo);
    return redirect(`/account?success=Successfully reset your account's password.&password=` + newpass);
  } else {
    console.error("Error:", (await result).status + (await result).statusText);
    return redirect(`/account?error=Unknown error occured while resetting your account's password.`);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
