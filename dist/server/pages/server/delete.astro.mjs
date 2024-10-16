import { s as supabase } from '../../chunks/supabase_Cat3wBav.mjs';
import chalk from 'chalk';
import { c as config } from '../../chunks/config_CuAv1651.mjs';
import { E as ExpressRoute } from '../../chunks/express-route_B6BV_o9Q.mjs';
import 'mime';
import 'statuses';
import 'cookie';
import '@tinyhttp/accepts';
import { d as doubleCsrfProtection } from '../../chunks/middleware_DctY4RUm.mjs';
export { renderers } from '../../renderers.mjs';

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
  metadata.full_name;
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
  if (request.headers.get("Content-Type") === "application/json") {
    const reqbody = await request.json();
    if (pterodactyl.relationships.servers.data.filter((server) => server.attributes.id == reqbody.id).length == 0) return redirect("/dashboard?error=Could not find server with that ID.");
    let deletionresults = await fetch(
      config.pterodactyl.url + "/api/application/servers/" + reqbody.id,
      {
        method: "delete",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${config.pterodactyl.api}`
        }
      }
    );
    let ok = await deletionresults.ok;
    if (ok !== true) return redirect("/dashboard?error=An error has occured while deleting your server.");
    return redirect("/dashboard?success=Successfully deleted your server.");
  } else {
    return redirect("/dashboard?error=Unknown Error Occured.");
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
