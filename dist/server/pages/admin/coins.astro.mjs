import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DVPt8aZD.mjs';
import 'kleur/colors';
import chalk from 'chalk';
import { c as config } from '../../chunks/config_CuAv1651.mjs';
import { s as supabase } from '../../chunks/supabase_Cat3wBav.mjs';
import { $ as $$Adminnav, a as $$Adminmobnav } from '../../chunks/adminmobnav_CJmRJw1v.mjs';
import '../../chunks/restype_D7TyzxY8.mjs';
import { $ as $$Head } from '../../chunks/head_DSXnzJOk.mjs';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("http://localhost:8081");
const $$Coins = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Coins;
  const { cookies, redirect } = Astro2;
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
    cookies.delete("sb-access-token", {
      path: "/"
    });
    cookies.delete("sb-refresh-token", {
      path: "/"
    });
    return redirect("/signin");
  }
  if (config.resource_type === "GB") ;
  const errorstate = Astro2.url.searchParams.get("error") || "";
  const errormsg = Astro2.url.searchParams.get("error") || "";
  const success = Astro2.url.searchParams.get("success") || "";
  Astro2.url.searchParams.get("password") || "";
  if (Astro2.url.searchParams.get("password")) ;
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
  const adminstatus = pterodactyl.root_admin;
  pterodactyl.relationships.servers.data[0];
  if (adminstatus === false) {
    Astro2.redirect("/dashboard");
  }
  const vercdnraw = await fetch("https://klovit.com/kcv.json");
  const vercdn = await vercdnraw.json();
  config.version;
  vercdn.version;
  return renderTemplate`<html data-astro-cid-fmx3d2kj> ${renderComponent($$result, "Header", $$Head, { "data-astro-cid-fmx3d2kj": true })}${maybeRenderHead()}<body class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black h-full min-h-screen relative" data-astro-cid-fmx3d2kj> <div class="hidden md:block animation-blob h-screen w-screen" data-astro-cid-fmx3d2kj> <div class="antialiased" data-astro-cid-fmx3d2kj> <main data-astro-cid-fmx3d2kj> ${renderComponent($$result, "Adminnav", $$Adminnav, { "data-astro-cid-fmx3d2kj": true })} ${errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-8" data-astro-cid-fmx3d2kj>ERROR: ${errormsg}</div>`} ${success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-8" data-astro-cid-fmx3d2kj>Success: ${success}</div>`} <br data-astro-cid-fmx3d2kj><br data-astro-cid-fmx3d2kj> <section class="ml-2" data-astro-cid-fmx3d2kj> <h1 class="text-black dark:text-white text-[25px] lg:text-2xl" data-astro-cid-fmx3d2kj>Admin | Coins</h1> <h1 class="text-black dark:text-white text-xl" data-astro-cid-fmx3d2kj>&nbsp;Set coins</h1> <div class="rounded-xl px-2.5 py-2" data-astro-cid-fmx3d2kj> <form method="POST" action="/api/admin/setcoins" data-astro-cid-fmx3d2kj> <div class="shadow shadow-black h-max p-4 rounded-l-xl" data-astro-cid-fmx3d2kj> <div class="w-full" data-astro-cid-fmx3d2kj> <h1 class="text-black dark:text-white ml-1" data-astro-cid-fmx3d2kj>Email: </h1> <input class="shadow shadow-black bg-transparent border w-80 h-6 text-black dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="email" placeholder="Email of the user eg. support@example.com"${addAttribute(50, "maxlength")} data-astro-cid-fmx3d2kj> </div> <div class="w-fit " data-astro-cid-fmx3d2kj> <h1 class="text-black dark:text-white ml-1" data-astro-cid-fmx3d2kj>Amount: </h1> <input class="shadow shadow-black bg-transparent border w-40 text-black dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="amount" placeholder="Amount of coins"${addAttribute(30, "maxlength")} data-astro-cid-fmx3d2kj> </div> <button class="shadow shadow-black m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
 " type="submit" data-astro-cid-fmx3d2kj>Set Coins</button> </div> </form> </div><br data-astro-cid-fmx3d2kj> <h1 class="text-black dark:text-white text-xl" data-astro-cid-fmx3d2kj>&nbsp;Add coins</h1> <div class="rounded-xl px-2.5 py-2" data-astro-cid-fmx3d2kj> <form method="POST" action="/api/admin/addcoins" data-astro-cid-fmx3d2kj> <div class="shadow shadow-black h-max p-4 rounded-l-xl" data-astro-cid-fmx3d2kj> <div class="w-full" data-astro-cid-fmx3d2kj> <h1 class="text-black dark:text-white ml-1" data-astro-cid-fmx3d2kj>Email: </h1> <input class="shadow shadow-black bg-transparent border w-80 h-6 duration-300 border-zinc-800 rounded-xl" type="text" name="email" placeholder="Email of the user eg. support@example.com"${addAttribute(50, "maxlength")} data-astro-cid-fmx3d2kj> </div> <div class="w-fit " data-astro-cid-fmx3d2kj> <h1 class="text-black dark:text-white ml-1" data-astro-cid-fmx3d2kj>Amount: </h1> <input class="shadow shadow-black bg-transparent border w-40 duration-300 border-zinc-800 rounded-xl" type="text" name="amount" placeholder="Amount of coins"${addAttribute(30, "maxlength")} data-astro-cid-fmx3d2kj> </div> <button class="shadow shadow-black m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
 " type="submit" data-astro-cid-fmx3d2kj>Add Coins</button> </div> </form> </div><br data-astro-cid-fmx3d2kj> <h1 class="text-black dark:text-white text-xl" data-astro-cid-fmx3d2kj>&nbsp;Remove coins</h1> <div class="rounded-xl px-2.5 py-2" data-astro-cid-fmx3d2kj> <form method="POST" action="/api/admin/removecoins" data-astro-cid-fmx3d2kj> <div class="shadow shadow-black h-max p-4 rounded-l-xl" data-astro-cid-fmx3d2kj> <div class="w-full" data-astro-cid-fmx3d2kj> <h1 class="text-black dark:text-white ml-1" data-astro-cid-fmx3d2kj>Email: </h1> <input class="shadow shadow-black bg-transparent border w-80 h-6 text-black dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="email" placeholder="Email of the user eg. support@example.com"${addAttribute(50, "maxlength")} data-astro-cid-fmx3d2kj> </div> <div class="w-fit " data-astro-cid-fmx3d2kj> <h1 class="text-black dark:text-white ml-1" data-astro-cid-fmx3d2kj>Amount: </h1> <input class="shadow shadow-black bg-transparent border w-40 text-black dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="amount" placeholder="Amount of coins"${addAttribute(30, "maxlength")} data-astro-cid-fmx3d2kj> </div> <button class="shadow shadow-black m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
                            " type="submit" data-astro-cid-fmx3d2kj>Remove Coins</button> </div> </form> </div><br data-astro-cid-fmx3d2kj> </section></main></div> </div> <div class="md:hidden w-screen overflow-x-hidden animation-blob h-screen" data-astro-cid-fmx3d2kj> <div class="antialiased" data-astro-cid-fmx3d2kj> <main data-astro-cid-fmx3d2kj> <main data-astro-cid-fmx3d2kj> <div class="h-12 w-full" data-astro-cid-fmx3d2kj> ${renderComponent($$result, "Adminmobnav", $$Adminmobnav, { "data-astro-cid-fmx3d2kj": true })} ${errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-8" data-astro-cid-fmx3d2kj>ERROR: ${errormsg}</div>`} ${success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-8" data-astro-cid-fmx3d2kj>Success: ${success}</div>`} <br data-astro-cid-fmx3d2kj><br data-astro-cid-fmx3d2kj> <section data-astro-cid-fmx3d2kj> <h1 class="text-black dark:text-white text-[25px] lg:text-2xl" data-astro-cid-fmx3d2kj>Admin | Coins</h1> <h1 class="text-black dark:text-white text-xl" data-astro-cid-fmx3d2kj>&nbsp;Set coins</h1> <div class="rounded-xl px-2.5 py-2" data-astro-cid-fmx3d2kj> <form method="POST" action="/api/admin/setcoins" data-astro-cid-fmx3d2kj> <div class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black h-max p-4 rounded-l-xl" data-astro-cid-fmx3d2kj> <div class="w-full" data-astro-cid-fmx3d2kj> <h1 class="text-black dark:text-white ml-1" data-astro-cid-fmx3d2kj>Email: </h1> <input class="shadow shadow-black bg-transparent border w-80 h-6 text-black dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="email" placeholder="Email of the user eg. support@example.com"${addAttribute(50, "maxlength")} data-astro-cid-fmx3d2kj> </div> <div class="w-fit " data-astro-cid-fmx3d2kj> <h1 class="text-black dark:text-white ml-1" data-astro-cid-fmx3d2kj>Amount: </h1> <input class="shadow shadow-black bg-transparent border w-40 text-black dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="amount" placeholder="Amount of coins"${addAttribute(30, "maxlength")} data-astro-cid-fmx3d2kj> </div> <button class="shadow shadow-black m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
 " type="submit" data-astro-cid-fmx3d2kj>Set Coins</button> </div> </form> </div><br data-astro-cid-fmx3d2kj> <h1 class="text-black dark:text-white text-xl" data-astro-cid-fmx3d2kj>&nbsp;Add coins</h1> <div class="rounded-xl px-2.5 py-2" data-astro-cid-fmx3d2kj> <form method="POST" action="/api/admin/addcoins" data-astro-cid-fmx3d2kj> <div class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black h-max p-4 rounded-l-xl" data-astro-cid-fmx3d2kj> <div class="w-full" data-astro-cid-fmx3d2kj> <h1 class="text-black dark:text-white ml-1" data-astro-cid-fmx3d2kj>Email: </h1> <input class="shadow shadow-black bg-transparent border w-80 h-6 duration-300 border-zinc-800 rounded-xl" type="text" name="email" placeholder="Email of the user eg. support@example.com"${addAttribute(50, "maxlength")} data-astro-cid-fmx3d2kj> </div> <div class="w-fit " data-astro-cid-fmx3d2kj> <h1 class="text-black dark:text-white ml-1" data-astro-cid-fmx3d2kj>Amount: </h1> <input class="shadow shadow-black bg-transparent border w-40 duration-300 border-zinc-800 rounded-xl" type="text" name="amount" placeholder="Amount of coins"${addAttribute(30, "maxlength")} data-astro-cid-fmx3d2kj> </div> <button class="shadow shadow-black m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
 " type="submit" data-astro-cid-fmx3d2kj>Add Coins</button> </div> </form> </div><br data-astro-cid-fmx3d2kj> <h1 class="text-black dark:text-white text-xl" data-astro-cid-fmx3d2kj>&nbsp;Remove coins</h1> <div class="rounded-xl px-2.5 py-2" data-astro-cid-fmx3d2kj> <form method="POST" action="/api/admin/removecoins" data-astro-cid-fmx3d2kj> <div class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black h-max p-4 rounded-l-xl" data-astro-cid-fmx3d2kj> <div class="w-full" data-astro-cid-fmx3d2kj> <h1 class="text-black dark:text-white ml-1" data-astro-cid-fmx3d2kj>Email: </h1> <input class="shadow shadow-black bg-transparent border w-80 h-6 text-black dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="email" placeholder="Email of the user eg. support@example.com"${addAttribute(50, "maxlength")} data-astro-cid-fmx3d2kj> </div> <div class="w-fit " data-astro-cid-fmx3d2kj> <h1 class="text-black dark:text-white ml-1" data-astro-cid-fmx3d2kj>Amount: </h1> <input class="shadow shadow-black bg-transparent border w-40 text-black dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="amount" placeholder="Amount of coins"${addAttribute(30, "maxlength")} data-astro-cid-fmx3d2kj> </div> <button class="shadow shadow-black m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
 " type="submit" data-astro-cid-fmx3d2kj>Remove Coins</button> </div> </form> </div><br data-astro-cid-fmx3d2kj> </section></div> </main></main></div> </div> </body></html>`;
}, "D:/Klovit/KlovitCTest/src/pages/admin/coins.astro", void 0);

const $$file = "D:/Klovit/KlovitCTest/src/pages/admin/coins.astro";
const $$url = "/admin/coins";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Coins,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
