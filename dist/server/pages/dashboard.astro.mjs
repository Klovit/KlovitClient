import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderComponent } from '../chunks/astro/server_DVPt8aZD.mjs';
import 'kleur/colors';
import chalk from 'chalk';
import { c as config, d as db } from '../chunks/config_CuAv1651.mjs';
/* empty css                                 */
import { s as supabase } from '../chunks/supabase_Cat3wBav.mjs';
import { $ as $$Nav, a as $$Mobnav } from '../chunks/mobnav_9SDxq6aL.mjs';
import '../chunks/restype_D7TyzxY8.mjs';
import { $ as $$Head } from '../chunks/head_DSXnzJOk.mjs';
import { $ as $$Resources } from '../chunks/resources_DXK3Bi5C.mjs';
import 'clsx';
import { $ as $$Footer } from '../chunks/footer_Cf8FsmdQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("http://localhost:8081");
const $$Servers = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Servers;
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
  Astro2.url.searchParams.get("error") || "";
  Astro2.url.searchParams.get("error") || "";
  Astro2.url.searchParams.get("success") || "";
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
  let cacheaccountinfo = JSON.parse(await cacheaccount.text());
  const pterodactyl = cacheaccountinfo.attributes;
  pterodactyl.root_admin;
  const servers = pterodactyl.relationships.servers.data[0];
  const year = (/* @__PURE__ */ new Date()).getFullYear().toString();
  `${year} ${config.name}`;
  let srvs = pterodactyl.relationships.servers.data;
  let serverram;
  let serverdisk;
  let servercpu;
  if (config.resource_type === "GB") {
    serverram = "%serverram% GB(s)";
    serverdisk = "%serverdisk% GB(s)";
    servercpu = "%servercpu% Core(s)";
  } else {
    serverram = "%serverram% MB(s)";
    serverdisk = "%serverdisk% MB(s)";
    servercpu = "%servercpu%%";
  }
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
  return renderTemplate`${maybeRenderHead()}<div class="hidden md:block mb-10"> <div class="grid grid-cols-5 w-screen"> ${servers ? srvs.map((serverData, i) => renderTemplate`<div class="shadow shadow-black mt-1 mb-1 text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black h-40 w-fit shrink-0 rounded-lg mr-2" role="group"${addAttribute(`${i} + 1 / {pterodactyl.relationships.servers.data.length}`, "aria-label")}> <div class="rounded-lg p-2"> <div class="flex items-center">
Server Name: ${serverData.attributes.name.length > 30 ? serverData.attributes.name.slice(0, 30) + "..." : serverData.attributes.name}<br>
RAM: ${serverram.includes("GB") ? serverram.replace("%serverram%", serverData.attributes.limits.memory / 1024) : serverram.replace("%serverram%", serverData.attributes.limits.memory)}<br>
Disk: ${serverdisk.includes("GB") ? serverdisk.replace("%serverdisk%", serverData.attributes.limits.disk / 1024) : serverdisk.replace("%serverdisk%", serverData.attributes.limits.disk)}<br>
CPU: ${servercpu.includes("Core") ? servercpu.replace("%servercpu%", serverData.attributes.limits.cpu / 100) : servercpu.replace("%servercpu%", serverData.attributes.limits.cpu)}<br> </div> <div class="text-black dark:text-white">
Actions <button class="text-black dark:text-white shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black rounded-xl text-xs"${addAttribute(`window.location.href = '/delete?id=' + ${serverData.attributes.id}`, "onclick")}><span class="p-1">Delete Server</span></button> | <button class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black rounded-xl btn btn-danger btn-lg text-xs text-black dark:text-white"${addAttribute(`window.location.href = '/edit?id=' + ${serverData.attributes.id}`, "onclick")}><span class="p-1">Edit Server</span></button> </div> </div> </div>`) : renderTemplate`<div class="grid grid-cols-1"> <div> <p class="text-black dark:text-white"> You don't have a server yet, create one here.</p><br> </div> <div> <button onclick="location.href='/create'" class="shadow shadow-black relative rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black px-5 py-1">Create</button> </div> </div>`} </div> </div> <div class="md:hidden w-max h-fit"> ${servers ? srvs.map((serverData, i) => renderTemplate`<div class="shadow shadow-black mt-1 mb-1 text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black h-40 w-100 shrink-0 rounded-lg" role="group"${addAttribute(`${i} + 1 / {pterodactyl.relationships.servers.data.length}`, "aria-label")} style="margin-right: 16px;"> <div class="grid grid-cols-1 rounded-lg p-2"> <div class="flex items-center">
Server Name: ${serverData.attributes.name.length > 40 ? serverData.attributes.name.slice(0, 40) + "..." : serverData.attributes.name}<br>
RAM: ${serverram.includes("GB") ? serverram.replace("%serverram%", serverData.attributes.limits.memory / 1024) : serverram.replace("%serverram%", serverData.attributes.limits.memory)}<br>
Disk: ${serverdisk.includes("GB") ? serverdisk.replace("%serverdisk%", serverData.attributes.limits.disk / 1024) : serverdisk.replace("%serverdisk%", serverData.attributes.limits.disk)}<br>
CPU: ${servercpu.includes("Core") ? servercpu.replace("%servercpu%", serverData.attributes.limits.cpu / 100) : servercpu.replace("%servercpu%", serverData.attributes.limits.cpu)}<br> </div> <div class="text-black dark:text-white">
Actions <button class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black rounded-xl text-xs"${addAttribute(`window.location.href = '/delete?id=' + ${serverData.attributes.id}`, "onclick")}><span class="p-1">Delete Server</span></button> | <button class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black rounded-xl btn btn-danger btn-lg text-xs"${addAttribute(`window.location.href = '/edit?id=' + ${serverData.attributes.id}`, "onclick")}><span class="p-1">Edit Server</span></button> </div> </div> </div>`) : renderTemplate`<div class="grid grid-cols-1"> <div> <p class="text-black dark:text-white"> You don't have a server yet, create one here.</p><br> </div> <div> <button onclick="location.href='/create'" class="shadow shadow-black relative rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black px-5 py-1">Create</button> </div> </div>`} </div>`;
}, "D:/Klovit/KlovitCTest/src/components/servers.astro", void 0);

const $$Astro = createAstro("http://localhost:8081");
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
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
  pterodactyl.relationships.servers.data.length;
  pterodactyl.relationships.servers.data;
  if (config.resource_type === "GB") ;
  if (config.coins.store.enabled || config.coins.enabled) ;
  if (config.coins.enabled) ;
  if (config.gifting.enabled) ;
  if (config.payments.enabled) ;
  return renderTemplate`<html> ${renderComponent($$result, "Header", $$Head, {})}${maybeRenderHead()}<body class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black h-full min-h-screen relative"> <div class="hidden md:block animation-blob w-screen"> <div class="antialiased"> <main class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black h-screen"> ${renderComponent($$result, "Nav", $$Nav, {})} ${errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-8">ERROR: ${errormsg}</div>`} ${success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-8">Success: ${success}</div>`} ${renderComponent($$result, "Resources", $$Resources, {})}<br><br> <section> <span class="text-black dark:text-white ml-4">Your Servers</span> <div class="grid grid-cols-4 ml-2">${renderComponent($$result, "Servers", $$Servers, {})}</div> </section> ${renderComponent($$result, "Footer", $$Footer, {})} </main></div> </div> <div class="md:hidden w-screen overflow-x-hidden animation-blob h-screen"> <div class="antialiased"> <main class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black h-screen"> ${renderComponent($$result, "Mobnav", $$Mobnav, {})} ${errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-8">ERROR: ${errormsg}</div>`} ${success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-8">Success: ${success}</div>`} ${renderComponent($$result, "Resources", $$Resources, {})}<br><br> <section> <span class="text-black dark:text-white ml-4">Your Servers</span> <div class="grid grid-cols-4 ml-6">${renderComponent($$result, "Servers", $$Servers, {})}</div> </section> ${renderComponent($$result, "Footer", $$Footer, {})} </main></div> </div> </body></html>`;
}, "D:/Klovit/KlovitCTest/src/pages/dashboard.astro", void 0);

const $$file = "D:/Klovit/KlovitCTest/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
