import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DVPt8aZD.mjs';
import 'kleur/colors';
import chalk from 'chalk';
import { c as config } from '../chunks/config_CuAv1651.mjs';
/* empty css                                 */
import { s as supabase } from '../chunks/supabase_Cat3wBav.mjs';
import { $ as $$Nav, a as $$Mobnav } from '../chunks/mobnav_9SDxq6aL.mjs';
import { $ as $$Head } from '../chunks/head_DSXnzJOk.mjs';
import { $ as $$Resources } from '../chunks/resources_DXK3Bi5C.mjs';
import { $ as $$Footer } from '../chunks/footer_Cf8FsmdQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("http://localhost:8081");
const $$Edit = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Edit;
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
  const srvid = Astro2.url.searchParams.get("id") || "";
  let pterorelationshipsserverdata = pterodactyl.relationships.servers.data.filter((name) => name.attributes.id.toString() === srvid);
  if (pterorelationshipsserverdata.length !== 1) return redirect("/dashboard?error=Server Not Found");
  let numramph = 0;
  let numdiskph = 0;
  let numcpuph = 0;
  if (config.resource_type === "GB") {
    for (let i = 0, len = pterorelationshipsserverdata.length; i < len; i++) {
      numramph = numramph + pterorelationshipsserverdata[i].attributes.limits.memory / 1024;
      numdiskph = numdiskph + pterorelationshipsserverdata[i].attributes.limits.disk / 1024;
      numcpuph = numcpuph + pterorelationshipsserverdata[i].attributes.limits.cpu / 100;
    }
  } else {
    for (let i = 0, len = pterorelationshipsserverdata.length; i < len; i++) {
      numramph = numramph + pterorelationshipsserverdata[i].attributes.limits.memory;
      numdiskph = numdiskph + pterorelationshipsserverdata[i].attributes.limits.disk;
      numcpuph = numcpuph + pterorelationshipsserverdata[i].attributes.limits.cpu;
    }
  }
  let ramph = numramph.toString();
  let diskph = numdiskph.toString();
  let cpuph = numcpuph.toString();
  let nameph = pterorelationshipsserverdata[0].attributes.name;
  return renderTemplate`<html> ${renderComponent($$result, "Header", $$Head, {})}${maybeRenderHead()}<body class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black h-full min-h-screen relative"> <div class="hidden md:block animation-blob w-screen"> <div class="antialiased"> <main class="h-screen"> ${renderComponent($$result, "Nav", $$Nav, {})} ${errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-8">ERROR: ${errormsg}</div>`} ${success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-8">Success: ${success}</div>`} ${renderComponent($$result, "Resources", $$Resources, {})} <section class="flex justify-center"> <div class="w-fit flex justify-center"> <form method="POST" action="/server/edit"> <div class="grid grid-cols-3 mt-8 w-full dark:shadow border border-zinc-800/80 rounded-xl"> <div class="grid grid-cols-1 w-full col-span-2 rounded-xl"> <div class="h-fit bg-zinc-300 p-4 dark:bg-zinc-900/50 backdrop-blur-xl rounded-l-xl"> <div class="w-full space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">Server Name: </h1> <input disabled class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" type="text" name="srvname"${addAttribute(nameph, "placeholder")}${addAttribute(30, "maxlength")}> <input class="hidden"${addAttribute(srvid, "value")} type="text" name="srvid"${addAttribute(30, "maxlength")}> </div> <div class="grid grid-cols-2 w-full col-span-2"> <div class="w-30 space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">RAM: </h1> <input class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" type="number" name="ram"${addAttribute(ramph, "placeholder")}${addAttribute(30, "maxlength")}> </div> <div class="ml-1 w-30 space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">Disk: </h1> <input class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" type="number" name="disk"${addAttribute(diskph, "placeholder")}${addAttribute(30, "maxlength")}> </div> <div class="w-30 space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">CPU: </h1> <input class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" type="number" name="cpu"${addAttribute(cpuph, "placeholder")}${addAttribute(30, "maxlength")}> </div> <div class="ml-1 w-full space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">Server Software: </h1> <select disabled class="bg-transparent bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" name="egg"${addAttribute(true, "required")}> ${Object.keys(config.eggs).map((egg) => renderTemplate`<option${addAttribute(egg, "value")}>${config.eggs[egg].display}</option>`)} </select> </div> </div> </div> </div> <div class="h-full rounded-r-xl bg-zinc-300 p-4 dark:bg-zinc-900/50 backdrop-blur-xl"> <div class="h-full w-full"> <h1 class="dark:text-gray-200 text-black ml-8">Server Location: </h1> <select disabled class="bg-transparent bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" name="location"> ${Object.keys(config.locations).map((location) => renderTemplate`<option${addAttribute(location, "value")}>${config.locations[location].name}</option>`)} </select><br> <button class="m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" type="submit">Edit</button> </div> </div> </div> </form></div> </section> ${renderComponent($$result, "Footer", $$Footer, {})} </main> </div> </div> <div class="md:hidden w-screen overflow-x-hidden animation-blob h-screen"> <div class="antialiased"> <main class="h-screen"> ${renderComponent($$result, "Mobnav", $$Mobnav, {})} ${errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-8">ERROR: ${errormsg}</div>`} ${success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-8">Success: ${success}</div>`} ${renderComponent($$result, "Resources", $$Resources, {})}<br><br> <section class="flex justify-center"> <div class="w-fit flex justify-center"> <form class="p-4" method="POST" action="/server/edit"> <div class="grid grid-cols-3 mt-8 w-full dark:shadow border border-zinc-800/80 rounded-xl"> <div class="grid grid-cols-1 w-full col-span-2 rounded-xl"> <div class="h-fit bg-zinc-300 p-4 dark:bg-zinc-900/50 backdrop-blur-xl rounded-l-xl"> <div class="w-full space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">Server Name: </h1> <input disabled class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" type="text" name="srvname"${addAttribute(30, "maxlength")} required> </div> <div class="grid grid-cols-2 w-full col-span-2"> <div class="w-30 space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">RAM: </h1> <input class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" type="number" name="ram"${addAttribute(30, "maxlength")} required> </div> <div class="ml-1 w-30 space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">Disk: </h1> <input class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" type="number" name="disk"${addAttribute(30, "maxlength")} required> </div> <div class="w-30 space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">CPU: </h1> <input class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" type="number" name="cpu"${addAttribute(30, "maxlength")} required> </div> <div class="ml-1 w-full space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">Server Software: </h1> <select disabled class="bg-transparent bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" name="egg"${addAttribute(true, "required")}> ${Object.keys(config.eggs).map((egg) => renderTemplate`<option${addAttribute(egg, "value")}>${config.eggs[egg].display}</option>`)} </select> </div> </div> </div> </div> <div class="h-full rounded-r-xl bg-zinc-300 p-4 dark:bg-zinc-900/50 backdrop-blur-xl"> <div class="w-full space-y-1"> <h1 class="dark:text-gray-200 text-black ml-1">Server Location: </h1> <select disabled class="bg-transparent bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full dark:text-white duration-300 p-2 rounded-xl" name="location" required> ${Object.keys(config.locations).map((location) => renderTemplate`<option${addAttribute(location, "value")}>${config.locations[location].name}</option>`)} </select> <button class="m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" type="submit">Edit</button> </div> </div> </div> </form></div> </section> ${renderComponent($$result, "Footer", $$Footer, {})} </main></div> </div> </body></html>`;
}, "D:/Klovit/KlovitCTest/src/pages/edit.astro", void 0);

const $$file = "D:/Klovit/KlovitCTest/src/pages/edit.astro";
const $$url = "/edit";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Edit,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
