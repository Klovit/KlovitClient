import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DVPt8aZD.mjs';
import 'kleur/colors';
import chalk from 'chalk';
import { c as config } from '../chunks/config_CuAv1651.mjs';
/* empty css                                 */
import { s as supabase } from '../chunks/supabase_Cat3wBav.mjs';
import { $ as $$Nav, a as $$Mobnav } from '../chunks/mobnav_9SDxq6aL.mjs';
import { r as restype } from '../chunks/restype_D7TyzxY8.mjs';
import { $ as $$Head } from '../chunks/head_DSXnzJOk.mjs';
import { $ as $$Resources } from '../chunks/resources_DXK3Bi5C.mjs';
import { $ as $$Footer } from '../chunks/footer_Cf8FsmdQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("http://localhost:8081");
const $$Gift = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Gift;
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
  const errorstate = Astro2.url.searchParams.get("error") || "";
  const errormsg = Astro2.url.searchParams.get("error") || "";
  const success = Astro2.url.searchParams.get("success") || "";
  Astro2.url.searchParams.get("success") || "";
  const {
    data: { user }
  } = await supabase.auth.getUser();
  const metadata = user.user_metadata;
  metadata.full_name;
  const email = data?.user?.email;
  metadata.avatar_url;
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
      console.log(chalk.red(`[KlovitClient] An error has occured on path ${Astro2.url.pathname}:`));
    }
  }
  let cacheaccountinfo = JSON.parse(await cacheaccount.text());
  const pterodactyl = cacheaccountinfo.attributes;
  pterodactyl.root_admin;
  pterodactyl.relationships.servers.data[0];
  const year = (/* @__PURE__ */ new Date()).getFullYear().toString();
  `${year} ${config.name}`;
  pterodactyl.relationships.servers.data.length;
  pterodactyl.relationships.servers.data;
  const resconf = restype.restype;
  let cputype;
  if (config.resource_type === "GB") {
    cputype = " Core(s)";
  } else {
    cputype = "%";
  }
  if (config.gifting.enabled === false) {
    return Astro2.redirect(`/dashboard?error=Gifting is Disabled.`);
  }
  return renderTemplate`<html> ${renderComponent($$result, "Header", $$Head, {})}${maybeRenderHead()}<body class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black h-full min-h-screen relative"> <div class="hidden md:block animation-blob w-screen"> <div class="antialiased"> <main class="h-full"> ${renderComponent($$result, "Nav", $$Nav, {})} ${errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-8">ERROR: ${errormsg}</div>`} ${success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-8">Success: ${success}</div>`} ${renderComponent($$result, "Resources", $$Resources, {})} <section class="p-8 rounded-xl"> <div class="rounded-xl grid grid-cols-2 bg-zinc-300 dark:bg-zinc-900/50 dark:bg-zinc-900/50"> <div class="p-2"> <form method="POST" action="/api/user/gift"> <h1 class="dark:text-white text-black">Email of the receiver:</h1> <input class="bg-zinc-100 dark:bg-zinc-900/50 border mb-2 border-black w-full dark:text-white duration-300 p-2 rounded-xl" name="receiver" placeholder="Eg. example@example.com"> <h1 class="dark:text-white text-black">RAM:</h1> <input class="bg-zinc-100 dark:bg-zinc-900/50 border mb-2 border-black w-full dark:text-white duration-300 p-2 rounded-xl" name="giftram" placeholder="RAM"><span class="text-black ml-1 dark:text-white">${resconf}</span> <h1 class="dark:text-white text-black">Disk:</h1> <input class="bg-zinc-100 dark:bg-zinc-900/50 border mb-2 border-black w-full dark:text-white duration-300 p-2 rounded-xl" name="giftdisk" placeholder="Disk"><span class="text-black ml-1 dark:text-white">${resconf}</span> <h1 class="dark:text-white text-black">CPU:</h1> <input class="bg-zinc-100 dark:bg-zinc-900/50 border mb-2 border-black w-full dark:text-white duration-300 p-2 rounded-xl" name="giftcpu" placeholder="CPU"><span class="text-black ml-1 dark:text-white">${cputype}</span> <h1 class="dark:text-white text-black">Slots:</h1> <input class="bg-zinc-100 dark:bg-zinc-900/50 border mb-2 border-black w-full dark:text-white duration-300 p-2 rounded-xl" name="giftslots" placeholder="Slots"><span class="text-black ml-1 dark:text-white">Slots</span> <h1 class="dark:text-white text-black">Coins:</h1> <input class="bg-zinc-100 dark:bg-zinc-900/50 border mb-2 border-black w-full dark:text-white duration-300 p-2 rounded-xl" name="giftcoins" placeholder="Coins"> <button class="m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" type="submit">Gift</button> </form> </div> </div> </section> ${renderComponent($$result, "Footer", $$Footer, {})} </main> </div> </div> <div class="md:hidden w-screen overflow-x-hidden animation-blob h-screen"> <div class="antialiased"> <main class="h-screen"> ${renderComponent($$result, "Mobnav", $$Mobnav, {})} ${errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-8">ERROR: ${errormsg}</div>`} ${success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-8">Success: ${success}</div>`} ${renderComponent($$result, "Resources", $$Resources, {})}<br><br> <section> <div class="rounded-xl grid grid-cols-2 bg-zinc-300 dark:bg-zinc-900/50"> <div class="p-2"> <form method="POST" action="/api/user/gift"> <h1 class="dark:text-white text-black">Email of the receiver:</h1> <input class="bg-zinc-100 dark:bg-zinc-900/50 border mb-2 border-black w-full dark:text-white duration-300 p-2 rounded-xl" name="receiver" placeholder="Eg. example@example.com"> <h1 class="dark:text-white text-black">RAM:</h1> <input class="bg-zinc-100 dark:bg-zinc-900/50 border mb-2 border-black w-full dark:text-white duration-300 p-2 rounded-xl" name="giftram" placeholder="RAM"><span class="text-black ml-1 dark:text-white">${resconf}</span> <h1 class="dark:text-white text-black">Disk:</h1> <input class="bg-zinc-100 dark:bg-zinc-900/50 border mb-2 border-black w-full dark:text-white duration-300 p-2 rounded-xl" name="giftdisk" placeholder="Disk"><span class="text-black ml-1 dark:text-white">${resconf}</span> <h1 class="dark:text-white text-black">CPU:</h1> <input class="bg-zinc-100 dark:bg-zinc-900/50 border mb-2 border-black w-full dark:text-white duration-300 p-2 rounded-xl" name="giftcpu" placeholder="CPU"><span class="text-black ml-1 dark:text-white">${cputype}</span> <h1 class="dark:text-white text-black">Slots:</h1> <input class="bg-zinc-100 dark:bg-zinc-900/50 border mb-2 border-black w-full dark:text-white duration-300 p-2 rounded-xl" name="giftslots" placeholder="Slots"><span class="text-black ml-1 dark:text-white">Slots</span> <h1 class="dark:text-white text-black">Coins:</h1> <input class="bg-zinc-100 dark:bg-zinc-900/50 border mb-2 border-black w-full dark:text-white duration-300 p-2 rounded-xl" name="giftcoins" placeholder="Coins"> <button class="m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" type="submit">Gift</button> </form> </div> </div> </section> <div class="text-center"> <p class="text-gray-400">
&copy;
${year} ${config.name} | Powered by <a class="text-amber-500" href="https://github.com/Klovit/KlovitClient">KlovitClient</a> </p> </div> </main></div> </div> </body></html>`;
}, "D:/Klovit/KlovitCTest/src/pages/gift.astro", void 0);

const $$file = "D:/Klovit/KlovitCTest/src/pages/gift.astro";
const $$url = "/gift";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gift,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
