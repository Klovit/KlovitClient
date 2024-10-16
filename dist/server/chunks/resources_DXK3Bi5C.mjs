import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_DVPt8aZD.mjs';
import 'kleur/colors';
import 'clsx';
import chalk from 'chalk';
import { c as config, d as db } from './config_CuAv1651.mjs';
/* empty css                         */
import { s as supabase } from './supabase_Cat3wBav.mjs';
import { r as restype } from './restype_D7TyzxY8.mjs';

const $$Astro = createAstro("http://localhost:8081");
const $$Resources = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Resources;
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
  const resconf = restype.restype;
  const pkgram = config.packages.list[info.package].ram;
  const pkgdisk = config.packages.list[info.package].disk;
  const pkgserverslimit = config.packages.list[info.package].servers;
  let extra;
  extra = "extraresources" in info && "ram" in info.extraresources && "disk" in info.extraresources && "cpu" in info.extraresources && "servers" in info.extraresources ? info.extraresources : { ram: 0, disk: 0, cpu: 0, servers: 0 };
  let ccore;
  ccore = config.packages.list[info.package].cpu + extra.cpu;
  ccore += config.resource_type === "MB" ? "%" : " Core(s)";
  const ramlimit = pkgram + extra.ram;
  const disklimit = pkgdisk + extra.disk;
  const serverslimit = pkgserverslimit + extra.servers;
  let ramused = 0;
  let diskused = 0;
  let cpuused = 0;
  if (config.resource_type === "GB") {
    for (let i = 0, len = pterodactyl.relationships.servers.data.length; i < len; i++) {
      ramused = +ramused + (typeof pterodactyl.relationships.servers.data[i].attributes.limits.memory == "number" ? pterodactyl.relationships.servers.data[i].attributes.limits.memory : 0) / 1024;
      diskused = +diskused + (typeof pterodactyl.relationships.servers.data[i].attributes.limits.disk == "number" ? pterodactyl.relationships.servers.data[i].attributes.limits.disk : 0) / 1024;
      cpuused = +cpuused + (typeof pterodactyl.relationships.servers.data[i].attributes.limits.cpu == "number" ? pterodactyl.relationships.servers.data[i].attributes.limits.cpu : 0) / 100;
    }
  } else {
    for (let i = 0, len = pterodactyl.relationships.servers.data.length; i < len; i++) {
      ramused = +ramused + (typeof pterodactyl.relationships.servers.data[i].attributes.limits.memory == "number" ? pterodactyl.relationships.servers.data[i].attributes.limits.memory : 0);
      diskused = +diskused + (typeof pterodactyl.relationships.servers.data[i].attributes.limits.disk == "number" ? pterodactyl.relationships.servers.data[i].attributes.limits.disk : 0);
      cpuused = +cpuused + (typeof pterodactyl.relationships.servers.data[i].attributes.limits.cpu == "number" ? pterodactyl.relationships.servers.data[i].attributes.limits.cpu : 0);
    }
  }
  const serversused = pterodactyl.relationships.servers.data.length;
  pterodactyl.relationships.servers.data;
  if (config.blacklisted.users.includes(email)) {
    return redirect("/signin?error=You're blacklisted from our hosting service.");
  }
  if (config.resource_type === "GB") ;
  return renderTemplate`${maybeRenderHead()}<section class="hidden md:block mt-10"> <span class="text-black dark:text-white ml-4">Resources</span> <div class="justify-center w-screen rounded-xl h-fit bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black flex items-center p-4"> <div class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black m-4 h-28 w-60 rounded-xl p-2 text-center"> <h1 class="dark:text-white text-black text-lg text-center">RAM ${resconf}</h1> <h1 class="dark:text-white text-black text-3xl text-center">${ramused} / ${ramlimit}</h1> </div> <div class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black m-4 h-28 w-60 rounded-xl p-2 text-center"> <h1 class="dark:text-white text-black text-lg text-center">Disk ${resconf}</h1> <h1 class="dark:text-white text-black text-3xl text-center">${diskused} / ${disklimit}</h1> </div> <div class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black m-4 h-28 w-60 rounded-xl p-2 text-center"> <h1 class="dark:text-white text-black text-lg text-center">CPU</h1> <h1 class="dark:text-white text-black text-3xl text-center">${cpuused} / ${ccore}</h1> </div> <div class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black m-4 h-28 w-60 rounded-xl p-2 text-center"> <h1 class="dark:text-white text-black text-lg text-center">Servers</h1> <h1 class="dark:text-white text-black text-3xl text-center">${serversused} / ${serverslimit} Slots</h1> </div> </div> </section> <section class="md:hidden mt-10"> <span class="text-amber-500 ml-4">Resources</span> <div class="justify-center w-fit rounded-xl h-fit bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black flex items-center p-4"> <div class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black m-2 h-full w-full rounded-xl text-center"> <h1 class="dark:text-white text-black text-lg text-center">RAM ${resconf}</h1> <h1 class="dark:text-white text-black text-xl text-center">${ramused} / ${ramlimit}</h1> </div> <div class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black m-2 h-full w-full rounded-xl text-center"> <h1 class="dark:text-white text-black text-lg text-center">Disk ${resconf}</h1> <h1 class="dark:text-white text-black text-xl text-center">${diskused} / ${disklimit}</h1> </div> <div class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black m-2 h-full w-full rounded-xl text-center"> <h1 class="dark:text-white text-black text-lg text-center">CPU</h1> <h1 class="dark:text-white text-black text-xl text-center">${cpuused} / ${ccore}</h1> </div> <div class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black m-2 h-full w-full rounded-xl text-center"> <h1 class="dark:text-white text-black text-lg text-center">Servers</h1> <h1 class="dark:text-white text-black text-xl text-center">${serversused} / ${serverslimit} Slots</h1> </div> </div> </section>`;
}, "D:/Klovit/KlovitCTest/src/components/resources.astro", void 0);

export { $$Resources as $ };
