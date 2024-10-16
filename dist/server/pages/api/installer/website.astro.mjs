import { d as db } from '../../../chunks/config_CuAv1651.mjs';
import { E as ExpressRoute } from '../../../chunks/express-route_B6BV_o9Q.mjs';
import 'mime';
import 'statuses';
import 'cookie';
import '@tinyhttp/accepts';
import { d as doubleCsrfProtection } from '../../../chunks/middleware_DctY4RUm.mjs';
export { renderers } from '../../../renderers.mjs';

const router = new ExpressRoute();
router.use(doubleCsrfProtection);
const POST = async function POST2({ request, cookies, redirect }) {
  const formData = await request.formData();
  const token = formData.get("token")?.toString();
  const kcname = formData.get("kcname")?.toString();
  const resource_type = formData.get("resource_type")?.toString();
  const website_url = formData.get("website_url")?.toString();
  const website_description = formData.get("website_description")?.toString();
  const website_logo = formData.get("website_logo")?.toString();
  const pterodactyl_url = formData.get("pterodactyl_url")?.toString();
  const pterodactyl_api = formData.get("pterodactyl_api")?.toString();
  const pterodactyl_client_api = formData.get("pterodactyl_client_api")?.toString();
  const supabase_url = formData.get("supabase_url")?.toString();
  const supabase_key = formData.get("supabase_key")?.toString();
  const google_oauth = formData.get("google_oauth")?.toString() ?? false;
  const github_oauth = formData.get("github_oauth")?.toString() ?? false;
  const discord_oauth = formData.get("discord_oauth")?.toString() ?? false;
  if (await db.get("installed") === true) {
    return redirect(`/?error=KlovitClient is already installed.`);
  }
  const starttoken = await db.get("starttoken");
  if (token != starttoken) {
    return redirect("/installer/start?error=Invalid Token");
  }
  function makeid(length) {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  let website_secret = null;
  website_secret = makeid(8);
  const blacklisted_users = [];
  const config_website = {
    "name": kcname,
    "resource_type": resource_type,
    "website": {
      "secret": website_secret,
      "url": website_url,
      "description": website_description,
      "icon": website_logo
    },
    "pterodactyl": {
      "url": pterodactyl_url,
      "api": pterodactyl_api,
      "client_api": pterodactyl_client_api
    },
    "blacklisted": {
      "users": blacklisted_users
    },
    "auth": {
      "supabase": {
        "supabase_url": supabase_url,
        "supabase_anon_key": supabase_key,
        "oauth2": {
          "google": {
            "enabled": google_oauth
          },
          "github": {
            "enabled": github_oauth
          },
          "discord": {
            "enabled": discord_oauth
          }
        }
      }
    }
  };
  await db.set("config_website", config_website);
  return redirect(`/installer/packages?token=${token}`);
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
