import { s as supabase } from '../../../../../chunks/supabase_Cat3wBav.mjs';
import { d as db, c as config } from '../../../../../chunks/config_CuAv1651.mjs';
import { E as ExpressRoute } from '../../../../../chunks/express-route_B6BV_o9Q.mjs';
import 'mime';
import 'statuses';
import 'cookie';
import '@tinyhttp/accepts';
import { d as doubleCsrfProtection } from '../../../../../chunks/middleware_DctY4RUm.mjs';
import '../../../../../chunks/restype_D7TyzxY8.mjs';
export { renderers } from '../../../../../renderers.mjs';

const router = new ExpressRoute();
router.use(doubleCsrfProtection);
const POST = async function POST2({ request, cookies, redirect }) {
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
  try {
    let generateUserCode = function() {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let code = "";
      for (let i = 0; i < 8; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return code;
    };
    const cooldowns = {};
    const atgcodes = {};
    const userCode = generateUserCode();
    atgcodes[email] = {
      code: userCode,
      generated: Date.now(),
      redeemed: false
    };
    await db.set("atgcodes-" + email, atgcodes);
    let rawreferer = request.headers.get("referer");
    var arr = rawreferer.split("/economy");
    arr.pop();
    let referer = arr[0];
    if (!referer) return redirect("/economy?error=An error occured with your browser!");
    referer = referer.toLowerCase();
    const link = referer + `/api/economy/links/redeem/atglinks/${userCode}`;
    const api = config.coins.earn.links.atglinks.api;
    try {
      const response = await fetch(`https://atglinks.com/api?api=${api}&url=${encodeURIComponent(link)}`);
      const data2 = await response.json();
      if (response.ok) {
        console.log(`${email} generated a ATGLinks link: `, data2.shortenedUrl);
        return redirect(data2.shortenedUrl);
      } else {
        console.error("Error generating ATGLinks link:", data2);
        return redirect("/economy?error=An error occured while generating a link");
      }
    } catch (error2) {
      console.error("Error generating atglinks link:", error2);
      return redirect("/economy?error=" + error2);
    }
  } catch (err) {
    console.log(err);
    return redirect(`/economy?error=` + err);
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
