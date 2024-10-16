import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DVPt8aZD.mjs';
import 'kleur/colors';
import chalk from 'chalk';
import { c as config, d as db } from '../chunks/config_CuAv1651.mjs';
/* empty css                                 */
import { s as supabase } from '../chunks/supabase_Cat3wBav.mjs';
import { $ as $$Nav, a as $$Mobnav } from '../chunks/mobnav_9SDxq6aL.mjs';
import '../chunks/restype_D7TyzxY8.mjs';
import { $ as $$Head } from '../chunks/head_DSXnzJOk.mjs';
import { $ as $$Resources } from '../chunks/resources_DXK3Bi5C.mjs';
import { $ as $$Footer } from '../chunks/footer_Cf8FsmdQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("http://localhost:8081");
const $$Create = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Create;
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
  const info = await db.get("user-" + email);
  config.packages.list.pkg;
  info.package;
  const pkgram = config.packages.list[info.package].ram;
  const pkgdisk = config.packages.list[info.package].disk;
  const pkgserverslimit = config.packages.list[info.package].servers;
  let ccore;
  ccore = config.packages.list[info.package].cpu + info.extraresources.cpu;
  ccore += config.resource_type === "MB" ? "%" : " Core(s)";
  pkgram + info.extraresources.ram;
  pkgdisk + info.extraresources.disk;
  pkgserverslimit + info.extraresources.servers;
  let ramused = 0;
  let diskused = 0;
  let cpuused = 0;
  if (config.resource_type === "GB") {
    for (let i = 0, len = pterodactyl.relationships.servers.data.length; i < len; i++) {
      ramused = ramused + (typeof pterodactyl.relationships.servers.data[i].attributes.limits.memory == "number" ? pterodactyl.relationships.servers.data[i].attributes.limits.memory : 0) / 1024;
      diskused = diskused + (typeof pterodactyl.relationships.servers.data[i].attributes.limits.disk == "number" ? pterodactyl.relationships.servers.data[i].attributes.limits.disk : 0) / 1024;
      cpuused = cpuused + (typeof pterodactyl.relationships.servers.data[i].attributes.limits.cpu == "number" ? pterodactyl.relationships.servers.data[i].attributes.limits.cpu : 0) / 100;
    }
  } else {
    for (let i = 0, len = pterodactyl.relationships.servers.data.length; i < len; i++) {
      ramused = ramused + (typeof pterodactyl.relationships.servers.data[i].attributes.limits.memory == "number" ? pterodactyl.relationships.servers.data[i].attributes.limits.memory : 0);
      diskused = diskused + (typeof pterodactyl.relationships.servers.data[i].attributes.limits.disk == "number" ? pterodactyl.relationships.servers.data[i].attributes.limits.disk : 0);
      cpuused = cpuused + (typeof pterodactyl.relationships.servers.data[i].attributes.limits.cpu == "number" ? pterodactyl.relationships.servers.data[i].attributes.limits.cpu : 0);
    }
  }
  return renderTemplate`<html> ${renderComponent($$result, "Header", $$Head, {})}${maybeRenderHead()}<body class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black h-full min-h-screen relative"> <div class="hidden md:block animation-blob w-screen"> <div class="antialiased"> <main class="h-screen"> ${renderComponent($$result, "Nav", $$Nav, {})} ${errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-8">ERROR: ${errormsg}</div>`} ${success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-8">Success: ${success}</div>`} ${renderComponent($$result, "Resources", $$Resources, {})} <section class="flex justify-center"> <div class="w-fit flex justify-center"> <form method="POST" action="/server/create"> <div class="grid grid-cols-3 mt-8 w-full p-2 shadow shadow-black rounded-xl"> <div class="grid grid-cols-1 w-full col-span-2 rounded-xl"> <div class="h-fit p-4 bg-transparent backdrop-blur-xl rounded-l-xl"> <div class="w-full space-y-1"> <h1 class="dark:text-white text-black ml-1">Server Name: </h1> <input class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" type="text" name="srvname"${addAttribute(30, "maxlength")}> </div> <div class="grid grid-cols-2 w-full col-span-2"> <div class="w-30 space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">RAM: </h1> <input class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" type="number" name="ram"${addAttribute(30, "maxlength")}> </div> <div class="ml-1 w-30 space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">Disk: </h1> <input class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" type="number" name="disk"${addAttribute(30, "maxlength")}> </div> <div class="w-30 space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">CPU: </h1> <input class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" type="number" name="cpu"${addAttribute(30, "maxlength")}> </div> <div class="ml-1 w-full space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">Server Software: </h1> <select class="bg-transparent bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" name="egg"${addAttribute(true, "required")}> ${Object.keys(config.eggs).map((egg) => renderTemplate`<option${addAttribute(egg, "value")} class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl">${config.eggs[egg].display}</option>`)} </select> </div> </div> </div> </div> <div class="h-full rounded-r-xl bg-transparent p-4 backdrop-blur-xl"> <div class="h-full w-full"> <h1 class="dark:text-gray-200 text-black ml-8">Server Location: </h1> <select class="bg-transparent bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" name="location"> ${Object.keys(config.locations).map((location) => renderTemplate`<option${addAttribute(location, "value")}>${config.locations[location].name}</option>`)} </select><br> <button class="shadow shadow-black m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" type="submit">Create</button> </div> </div> </div> </form></div> </section> ${renderComponent($$result, "Footer", $$Footer, {})} </main> </div> </div> <div class="md:hidden w-screen overflow-x-hidden animation-blob h-screen"> <div class="antialiased"> <main class="h-screen"> ${renderComponent($$result, "Mobnav", $$Mobnav, {})} ${errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-8">ERROR: ${errormsg}</div>`} ${success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-8">Success: ${success}</div>`} ${renderComponent($$result, "Resources", $$Resources, {})}<br><br> <section class="flex justify-center"> <div class="w-fit flex justify-center"> <form class="p-4" method="POST" action="/server/create"> <div class="shadow-black shadow grid grid-cols-3 p-2 mt-8 w-full rounded-xl"> <div class="grid grid-cols-1 w-full col-span-2 rounded-xl"> <div class="h-fit backdrop-blur-xl rounded-l-xl"> <div class="w-full space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">Server Name: </h1> <input class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" type="text" name="srvname"${addAttribute(30, "maxlength")} required> </div> <div class="grid grid-cols-2 w-full col-span-2"> <div class="w-30 space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">RAM: </h1> <input class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" type="number" name="ram"${addAttribute(30, "maxlength")} required> </div> <div class="ml-1 w-30 space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">Disk: </h1> <input class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" type="number" name="disk"${addAttribute(30, "maxlength")} required> </div> <div class="w-30 space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">CPU: </h1> <input class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" type="number" name="cpu"${addAttribute(30, "maxlength")} required> </div> <div class="ml-1 w-full space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">Server Software: </h1> <select class="bg-transparent bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" name="egg"${addAttribute(true, "required")}> ${Object.keys(config.eggs).map((egg) => renderTemplate`<option${addAttribute(egg, "value")}>${config.eggs[egg].display}</option>`)} </select> </div> </div> </div> </div> <div class="h-full rounded-r-xl backdrop-blur-xl"> <div class="w-full space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">Server Location: </h1> <select class="bg-transparent bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" name="location" required> ${Object.keys(config.locations).map((location) => renderTemplate`<option${addAttribute(location, "value")}>${config.locations[location].name}</option>`)} </select> <button class="shadow shadow-black m-2 w-relative ml-2 pr-4 pl-4 rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" type="submit">Create</button> </div> </div> </div> </form></div> </section> <div class="text-center"> <p class="text-gray-400">
&copy;
${year} ${config.name} | Powered by <a class="text-amber-500" href="https://github.com/Klovit/KlovitClient">KlovitClient</a> </p> </div> </main></div> </div> </body></html>`;
}, "D:/Klovit/KlovitCTest/src/pages/create.astro", void 0);

const $$file = "D:/Klovit/KlovitCTest/src/pages/create.astro";
const $$url = "/create";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Create,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
