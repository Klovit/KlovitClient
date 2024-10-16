import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DVPt8aZD.mjs';
import 'kleur/colors';
import chalk from 'chalk';
import { c as config } from '../../chunks/config_CuAv1651.mjs';
import { s as supabase } from '../../chunks/supabase_Cat3wBav.mjs';
import { $ as $$Adminnav, a as $$Adminmobnav } from '../../chunks/adminmobnav_CJmRJw1v.mjs';
import '../../chunks/restype_D7TyzxY8.mjs';
import { $ as $$Head } from '../../chunks/head_DSXnzJOk.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("http://localhost:8081");
const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Home;
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
  const errorstate = Astro2.url.searchParams.get("error") || "";
  const errormsg = Astro2.url.searchParams.get("error") || "";
  const success = Astro2.url.searchParams.get("success") || "";
  Astro2.url.searchParams.get("password") || "";
  if (Astro2.url.searchParams.get("password")) ;
  const {
    data: { user }
  } = await supabase.auth.getUser();
  const metadata = user.user_metadata;
  const username = metadata.full_name;
  const email = data?.user?.email;
  const avatar = metadata.avatar_url;
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
  if (adminstatus === false) {
    Astro2.redirect("/dashboard?error=FORBIDDEN");
  }
  const vercdnraw = await fetch("https://docs.klovit.tech/version.json");
  const vercdn = await vercdnraw.json();
  const currentver = config.version;
  const latestver = vercdn.version;
  let outdated;
  if (currentver < latestver) {
    outdated = true;
  }
  if (currentver === latestver) {
    outdated = false;
  }
  return renderTemplate`<html data-astro-cid-jih5gapu> ${renderComponent($$result, "Header", $$Head, { "data-astro-cid-jih5gapu": true })}${maybeRenderHead()}<body class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black h-full min-h-screen relative" data-astro-cid-jih5gapu> <div class="hidden md:block animation-blob h-screen w-screen" data-astro-cid-jih5gapu> <div class="antialiased" data-astro-cid-jih5gapu> <main class="h-screen" data-astro-cid-jih5gapu> ${renderComponent($$result, "Adminnav", $$Adminnav, { "data-astro-cid-jih5gapu": true })} ${errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-8" data-astro-cid-jih5gapu>ERROR: ${errormsg}</div>`} ${success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-8" data-astro-cid-jih5gapu>Success: ${success}</div>`} <br data-astro-cid-jih5gapu><br data-astro-cid-jih5gapu> <section data-astro-cid-jih5gapu> <h1 class="dark:text-white text-black text-[15px] lg:text-2xl" data-astro-cid-jih5gapu>Admin | Home</h1> <div class="rounded-xl bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black px-2.5 py-2" data-astro-cid-jih5gapu> <div class="row" data-astro-cid-jih5gapu><img class="h-32 w-full object-cover lg:h-48 rounded-xl" src="https://wallpaperaccess.com/full/4650672.jpg" alt="" data-astro-cid-jih5gapu></div> <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8" data-astro-cid-jih5gapu> <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5" data-astro-cid-jih5gapu> <div class="flex" data-astro-cid-jih5gapu> <img class="h-24 w-24 rounded-full ring-2 ring-zinc-700 sm:h-32 sm:w-32"${addAttribute(avatar, "src")} alt="useravatar" data-astro-cid-jih5gapu> </div> <div class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1" data-astro-cid-jih5gapu> <div class="mt-6 min-w-0 flex-1 sm:hidden md:block" data-astro-cid-jih5gapu> <h1 class="text-black truncate text-2xl font-bold dark:text-white" data-astro-cid-jih5gapu>${username}</h1> </div> </div> </div> </div> </div><br data-astro-cid-jih5gapu> <div class="rounded-xl h-fit bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black shadow shadow-black px-2.5 py-2" data-astro-cid-jih5gapu> <h1 class="text-black dark:text-white text-xl" data-astro-cid-jih5gapu>KlovitClient's Information</h1> <div class="grid grid-cols-1 lg:grid-cols-2 col-span-4" data-astro-cid-jih5gapu> <div class="w-fit h-fit rounded-xl" data-astro-cid-jih5gapu> <h1 class="text-black dark:text-white" data-astro-cid-jih5gapu>Version</h1> ${outdated ? renderTemplate`<div class="m-2 w-full shadow shadow-black rounded-lg bg-gradient-to-b from-gray-400 text-red-400 to-white dark:from-zinc-950 dark:to-zinc-900" data-astro-cid-jih5gapu> <h1 data-astro-cid-jih5gapu>Latest version - V${latestver}</h1> </div><br data-astro-cid-jih5gapu>
                                      <div class="m-2 w-full shadow shadow-black rounded-lg bg-gradient-to-b from-gray-400 text-red-400 to-white dark:from-zinc-950 dark:to-zinc-900" data-astro-cid-jih5gapu> <h1 data-astro-cid-jih5gapu>Your KlovitClient instance is outdated. Please update to the latest version ( V${latestver} )</h1> </div>` : renderTemplate`<div class="m-2 w-full shadow shadow-black rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" data-astro-cid-jih5gapu> <h1 data-astro-cid-jih5gapu>Latest version - V${latestver}</h1> </div><br data-astro-cid-jih5gapu>
                                      <div class="m-2 w-full shadow shadow-black rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" data-astro-cid-jih5gapu> <h1 data-astro-cid-jih5gapu>Your KlovitClient instance is up-to-date.</h1> </div>`} </div> <div class="w-fit h-fit rounded-xl" data-astro-cid-jih5gapu> <h1 class="dark:text-white text-black" data-astro-cid-jih5gapu>Social</h1> <div class="m-2 w-full shadow shadow-black rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" data-astro-cid-jih5gapu> <a href="https://github.com/klovit/klovitclient" data-astro-cid-jih5gapu><i class="fa-brands fa-github" data-astro-cid-jih5gapu> GitHub</i></a> </div><br data-astro-cid-jih5gapu> <div class="m-2 w-full shadow shadow-black rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" data-astro-cid-jih5gapu> <a href="https://discord.gg/JJzHzQkFpr" data-astro-cid-jih5gapu><i class="fa-brands fa-discord" data-astro-cid-jih5gapu> Discord</i></a> </div> </div> </div> </div> </section> </main> </div> </div> <div class="md:hidden w-screen overflow-x-hidden animation-blob h-screen w-screen" data-astro-cid-jih5gapu> <div class="antialiased" data-astro-cid-jih5gapu> <main data-astro-cid-jih5gapu> ${renderComponent($$result, "Adminmobnav", $$Adminmobnav, { "data-astro-cid-jih5gapu": true })} ${errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-8" data-astro-cid-jih5gapu>ERROR: ${errormsg}</div>`} ${success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-8" data-astro-cid-jih5gapu>Success: ${success}</div>`} <br data-astro-cid-jih5gapu><br data-astro-cid-jih5gapu> <section data-astro-cid-jih5gapu> <h1 class="text-black dark:text-white text-[15px] lg:text-2xl" data-astro-cid-jih5gapu>Admin | Home</h1> <div class="rounded-xl px-2.5 py-2" data-astro-cid-jih5gapu> <div class="row" data-astro-cid-jih5gapu><img class="h-32 w-full object-cover lg:h-48 rounded-xl" src="https://wallpaperaccess.com/full/4650672.jpg" alt="" data-astro-cid-jih5gapu></div> <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8" data-astro-cid-jih5gapu> <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5" data-astro-cid-jih5gapu> <div class="flex" data-astro-cid-jih5gapu> <img class="h-24 w-24 rounded-full ring-2 ring-zinc-700 sm:h-32 sm:w-32"${addAttribute(avatar, "src")} alt="useravatar" data-astro-cid-jih5gapu> </div> <div class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1" data-astro-cid-jih5gapu> <div class="mt-6 min-w-0 flex-1 sm:hidden md:block" data-astro-cid-jih5gapu> <h1 class="truncate text-2xl font-bold text-black dark:text-white" data-astro-cid-jih5gapu>${username}</h1> </div> </div> </div> </div> </div><br data-astro-cid-jih5gapu> <div class="rounded-xl h-fit bg-zinc-300 dark:bg-zinc-950 px-2.5 py-2" data-astro-cid-jih5gapu> <h1 class="text-black dark:text-white text-xl" data-astro-cid-jih5gapu>KlovitClient's Information</h1> <div class="grid grid-cols-1 lg:grid-cols-2 col-span-4" data-astro-cid-jih5gapu> <div class="w-fit h-fit rounded-xl" data-astro-cid-jih5gapu> <h1 class="text-black dark:text-white" data-astro-cid-jih5gapu>Version</h1> ${outdated ? renderTemplate`<div class="m-2 w-full rounded-lg bg-gradient-to-b from-gray-400 text-red-400 to-white dark:from-zinc-950 dark:to-zinc-900" data-astro-cid-jih5gapu> <h1 data-astro-cid-jih5gapu>Latest version - V${latestver}</h1> </div><br data-astro-cid-jih5gapu>
                                      <div class="m-2 w-full rounded-lg bg-gradient-to-b from-gray-400 text-red-400 to-white dark:from-zinc-950 dark:to-zinc-900" data-astro-cid-jih5gapu> <h1 data-astro-cid-jih5gapu>Your KlovitClient instance is outdated. Please update to the latest version ( V${latestver} )</h1> </div>` : renderTemplate`<div class="m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" data-astro-cid-jih5gapu> <h1 data-astro-cid-jih5gapu>Latest version - V${latestver}</h1> </div><br data-astro-cid-jih5gapu>
                                      <div class="m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" data-astro-cid-jih5gapu> <h1 data-astro-cid-jih5gapu>Your KlovitClient instance is up-to-date.</h1> </div>`} </div> <div class="w-fit h-fit rounded-xl" data-astro-cid-jih5gapu> <h1 class="dark:text-white text-black" data-astro-cid-jih5gapu>Social</h1> <div class="m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" data-astro-cid-jih5gapu> <a href="https://github.com/klovit/klovitclient" data-astro-cid-jih5gapu><i class="fa-brands fa-github" data-astro-cid-jih5gapu> GitHub</i></a> </div><br data-astro-cid-jih5gapu> <div class="m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" data-astro-cid-jih5gapu> <a href="https://discord.gg/JJzHzQkFpr" data-astro-cid-jih5gapu><i class="fa-brands fa-discord" data-astro-cid-jih5gapu> Discord</i></a> </div> </div> </div> </div> </section> </main></div> </div> </body></html>`;
}, "D:/Klovit/KlovitCTest/src/pages/admin/home.astro", void 0);

const $$file = "D:/Klovit/KlovitCTest/src/pages/admin/home.astro";
const $$url = "/admin/home";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Home,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
