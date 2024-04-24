import type { APIRoute } from "astro";
import { supabase } from "../../../../../lib/supabase";
import chalk from "chalk";
import db from '../../../../../database';
import { Response } from "node-fetch";
import config from '../../../../../config';
import { ExpressRoute } from "@astro-utils/express-endpoints";
import doubleCsrfProtection from "../../../../../middleware";
import restype from "src/restype";

const router = new ExpressRoute();
router.use(doubleCsrfProtection)

export const POST: APIRoute = async function POST({ request, cookies, redirect }) {
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
const resconf = restype.restype
 
try {
    const cooldowns = {};
    const atgcodes = {};
    function generateUserCode() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let code = '';
      for (let i = 0; i < 8; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return code;
    }
    const userCode = generateUserCode();
    atgcodes[email] = {
      code: userCode,
      generated: Date.now(),
      redeemed: false,
    };
    await db.set("atgcodes-" + email, atgcodes)
    let rawreferer = request.headers.get("referer")
    var arr = rawreferer.split('/economy');
    arr.pop();
    console.log(arr[0]);
    let referer = arr[0]
    if (!referer) return redirect('/economy?error=An error occured with your browser!')
      referer = referer.toLowerCase()


    const link =  referer + `/api/economy/links/redeem/atglinks/${userCode}`;
    const api = config.coins.earn.links.atglinks.api
    console.log(referer)
    try {
      const response = await fetch(`https://atglinks.com/api?api=${api}&url=${encodeURIComponent(link)}`);
      const data = await response.json();
      console.log(data)
      if (response.ok) {
        console.log(`${email} generated a ATGLinks link: `, data.shortenedUrl);
        return redirect(data.shortenedUrl);
      } else {
        console.error('Error generating ATGLinks link:', data);
        return redirect('/economy?error=An error occured while generating a link')
      }
    } catch (error) {
      console.error('Error generating atglinks link:', error);
      return redirect('/economy?error=' + error)
    }
  }
catch(err) {
  console.log(err)
  return redirect(`/economy?error=` + err);
}
}

