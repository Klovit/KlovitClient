import { c as createAstro, a as createComponent, r as renderTemplate } from '../../../../../../chunks/astro/server_DVPt8aZD.mjs';
import 'kleur/colors';
import 'clsx';
import { d as db, c as config } from '../../../../../../chunks/config_CuAv1651.mjs';
import { s as supabase } from '../../../../../../chunks/supabase_Cat3wBav.mjs';
export { renderers } from '../../../../../../renderers.mjs';

const $$Astro = createAstro("http://localhost:8081");
const $$code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$code;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken || !refreshToken) {
    return redirect("/signin");
  }
  const refresh_token = refreshToken.value;
  const access_token = accessToken.value;
  const { data, error } = await supabase.auth.setSession({
    refresh_token,
    access_token
  });
  if (error) {
    cookies.delete("sb-access-token", {
      path: "/"
    });
    cookies.delete("sb-refresh-token", {
      path: "/"
    });
    return redirect("/signin");
  }
  await supabase.auth.getUser();
  const email = data?.user?.email;
  const atgcodes = await db.get("atgcodes-" + email);
  const rawcode = Astro2.params;
  const code = rawcode.code;
  console.log(atgcodes, code);
  try {
    if (!atgcodes[email]) return Astro2.redirect(`/economy?error=The code does not exist.`);
    if (atgcodes[email].code !== code) return Astro2.redirect(`/economy?error=Invalid code.`);
    await db.delete("atgcodes-" + email);
    if ((Date.now() - atgcodes.generated) / 1e3 < config.coins.earn.links.atglinks.minimumtime) {
      return Astro2.redirect(`/economy?error=Our systems detected something going on! Please make sure you are not using an ad blocker (or ATGLinks bypasser)`);
    }
    const currentinfo = await db.get("user-" + email);
    let extra;
    extra = "extraresources" in currentinfo && "ram" in currentinfo.extraresources && "disk" in currentinfo.extraresources && "cpu" in currentinfo.extraresources && "servers" in currentinfo.extraresources ? currentinfo.extraresources : { ram: 0, disk: 0, cpu: 0, servers: 0 };
    const newinfo = {
      package: currentinfo.package,
      balance: config.coins.earn.links.atglinks.amount,
      password: currentinfo.password,
      extraresources: extra
    };
    await db.set("user-" + email, newinfo);
    return Astro2.redirect(`/economy?success=You have successfully completed an ATGLinks link and you have earned ${config.coins.earn.links.atglinks.amount} Coins.`);
  } catch {
    console.log(error);
    return new Response(`/economy?error=${error}`);
  }
  return renderTemplate``;
}, "D:/Klovit/KlovitCTest/src/pages/api/economy/links/redeem/atglinks/[code].astro", void 0);

const $$file = "D:/Klovit/KlovitCTest/src/pages/api/economy/links/redeem/atglinks/[code].astro";
const $$url = "/api/economy/links/redeem/atglinks/[code]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$code,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
