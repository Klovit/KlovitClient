import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_DVPt8aZD.mjs';
import 'kleur/colors';
import chalk from 'chalk';
import { c as config } from '../../chunks/config_CuAv1651.mjs';
import { s as supabase } from '../../chunks/supabase_Cat3wBav.mjs';
import { $ as $$Adminnav, a as $$Adminmobnav } from '../../chunks/adminmobnav_CJmRJw1v.mjs';
import { r as restype } from '../../chunks/restype_D7TyzxY8.mjs';
import { $ as $$Head } from '../../chunks/head_DSXnzJOk.mjs';
/* empty css                                        */
export { renderers } from '../../renderers.mjs';

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
  let cputype;
  if (config.resource_type === "GB") {
    cputype = "Core(s)";
  } else {
    cputype = "%";
  }
  const resconf = restype.restype;
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
  if (adminstatus === false) {
    Astro2.redirect("/dashboard");
  }
  const vercdnraw = await fetch("https://klovit.com/kcv.json");
  const vercdn = await vercdnraw.json();
  config.version;
  vercdn.version;
  return renderTemplate`<html data-astro-cid-jcs5hkjn> ${renderComponent($$result, "Header", $$Head, { "data-astro-cid-jcs5hkjn": true })}${maybeRenderHead()}<body class="ml-1 min-w-screen bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black h-full min-h-screen relative" data-astro-cid-jcs5hkjn> <div class="hidden md:block animation-blob h-screen w-screen" data-astro-cid-jcs5hkjn> <div class="antialiased" data-astro-cid-jcs5hkjn> <main data-astro-cid-jcs5hkjn> ${renderComponent($$result, "Adminnav", $$Adminnav, { "data-astro-cid-jcs5hkjn": true })} ${errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-8" data-astro-cid-jcs5hkjn>ERROR: ${errormsg}</div>`} ${success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-8" data-astro-cid-jcs5hkjn>Success: ${success}</div>`} <br data-astro-cid-jcs5hkjn><br data-astro-cid-jcs5hkjn> <section class="ml-2" data-astro-cid-jcs5hkjn> <h1 class="dark:text-white text-black text-[25px] lg:text-2xl" data-astro-cid-jcs5hkjn>Admin | Resources</h1> <h1 class="dark:text-white text-black text-[20px]" data-astro-cid-jcs5hkjn>This is only for extra resources</h1> <h1 class="dark:text-white text-black text-xl" data-astro-cid-jcs5hkjn>&nbsp;Add Resources</h1> <div class="rounded-xl bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black px-2.5 py-2" data-astro-cid-jcs5hkjn> <form class="p-4" method="POST" action="/api/admin/addres" data-astro-cid-jcs5hkjn> <div class="h-max shadow shadow-black p-4 rounded-xl" data-astro-cid-jcs5hkjn> <div class="w-full" data-astro-cid-jcs5hkjn> <h1 class="dark:text-white text-black ml-1" data-astro-cid-jcs5hkjn>Email: </h1> <input class="bg-transparent border w-80 h-6 dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="email" placeholder="Eg. support@example.com"${addAttribute(50, "maxlength")} data-astro-cid-jcs5hkjn> </div> <div class="w-fit " data-astro-cid-jcs5hkjn> <h1 class="dark:text-white text-black ml-1" data-astro-cid-jcs5hkjn>RAM: </h1> <input class="bg-transparent border w-40 dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="ram" placeholder="Amount of RAM in "${addAttribute(30, "maxlength")} data-astro-cid-jcs5hkjn><span class="text-black ml-1 dark:text-white" data-astro-cid-jcs5hkjn>${resconf}</span> </div> <div class="w-fit " data-astro-cid-jcs5hkjn> <h1 class="dark:text-white text-black ml-1" data-astro-cid-jcs5hkjn>Disk: </h1> <input class="bg-transparent border w-40 dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="disk" placeholder="Amount of Disk in"${addAttribute(30, "maxlength")} data-astro-cid-jcs5hkjn><span class="text-black ml-1 dark:text-white" data-astro-cid-jcs5hkjn>${resconf}</span> </div> <div class="w-fit " data-astro-cid-jcs5hkjn> <h1 class="dark:text-white text-black ml-1" data-astro-cid-jcs5hkjn>CPU: </h1> <input class="bg-transparent border w-40 dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="cpu" placeholder="Amount of CPU in"${addAttribute(30, "maxlength")} data-astro-cid-jcs5hkjn><span class="text-black ml-1 dark:text-white" data-astro-cid-jcs5hkjn>${cputype}</span> </div> <div class="w-fit " data-astro-cid-jcs5hkjn> <h1 class="dark:text-white text-black ml-1" data-astro-cid-jcs5hkjn>Slots: </h1> <input class="bg-transparent border w-40 dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="slots" placeholder="Amount of slots"${addAttribute(30, "maxlength")} data-astro-cid-jcs5hkjn><span class="text-black ml-1 dark:text-white" data-astro-cid-jcs5hkjn>Slots</span> </div> <button class="m-2 shadow shadow-black w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
                        " type="submit" data-astro-cid-jcs5hkjn>Add Resources</button> </div> </form> </div><br data-astro-cid-jcs5hkjn> <h1 class="dark:text-white text-black text-xl" data-astro-cid-jcs5hkjn>&nbsp;Remove Resources</h1> <div class="rounded-xl shadow shadow-black px-2.5 py-2" data-astro-cid-jcs5hkjn> <form method="POST" action="/api/admin/removeres" data-astro-cid-jcs5hkjn> <div class="h-max p-4 rounded-xl" data-astro-cid-jcs5hkjn> <div class="w-full" data-astro-cid-jcs5hkjn> <h1 class="dark:text-white text-black ml-1" data-astro-cid-jcs5hkjn>Email: </h1> <input class="bg-transparent border w-80 h-6 text-black dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="email" placeholder="Eg. support@example.com"${addAttribute(50, "maxlength")} data-astro-cid-jcs5hkjn> </div> <div class="w-fit " data-astro-cid-jcs5hkjn> <h1 class="dark:text-white text-black ml-1" data-astro-cid-jcs5hkjn>RAM: </h1> <input class="bg-transparent border w-40 text-black dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="ram" placeholder="Amount of RAM in "${addAttribute(30, "maxlength")} data-astro-cid-jcs5hkjn><span class="text-black ml-1 dark:text-white" data-astro-cid-jcs5hkjn>${resconf}</span> </div> <div class="w-fit " data-astro-cid-jcs5hkjn> <h1 class="dark:text-white text-black ml-1" data-astro-cid-jcs5hkjn>Disk: </h1> <input class="bg-transparent border w-40 text-black dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="disk" placeholder="Amount of Disk in"${addAttribute(30, "maxlength")} data-astro-cid-jcs5hkjn><span class="text-black ml-1 dark:text-white" data-astro-cid-jcs5hkjn>${resconf}</span> </div> <div class="w-fit " data-astro-cid-jcs5hkjn> <h1 class="dark:text-white text-black ml-1" data-astro-cid-jcs5hkjn>CPU: </h1> <input class="bg-transparent border w-40 text-black dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="cpu" placeholder="Amount of CPU in"${addAttribute(30, "maxlength")} data-astro-cid-jcs5hkjn><span class="text-black ml-1 dark:text-white" data-astro-cid-jcs5hkjn>${cputype}</span> </div> <div class="w-fit " data-astro-cid-jcs5hkjn> <h1 class="dark:text-white text-black ml-1" data-astro-cid-jcs5hkjn>Slots: </h1> <input class="bg-transparent border w-40 text-black dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="slots" placeholder="Amount of slots"${addAttribute(30, "maxlength")} data-astro-cid-jcs5hkjn><span class="text-black ml-1 dark:text-white" data-astro-cid-jcs5hkjn>Slots</span> </div> </div> <button class="m-2 shadow shadow-black w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" type="submit" data-astro-cid-jcs5hkjn>Remove Resources</button> </form> </div><br data-astro-cid-jcs5hkjn> </section> </main></div> </div> <div class="md:hidden w-screen overflow-x-hidden animation-blob h-screen" data-astro-cid-jcs5hkjn> <div class="antialiased" data-astro-cid-jcs5hkjn> <main data-astro-cid-jcs5hkjn> ${renderComponent($$result, "Adminmobnav", $$Adminmobnav, { "data-astro-cid-jcs5hkjn": true })} ${errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-8" data-astro-cid-jcs5hkjn>ERROR: ${errormsg}</div>`} ${success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-8" data-astro-cid-jcs5hkjn>Success: ${success}</div>`} <br data-astro-cid-jcs5hkjn><br data-astro-cid-jcs5hkjn> <section data-astro-cid-jcs5hkjn> <h1 class="dark:text-white text-black text-[15px] lg:text-2xl" data-astro-cid-jcs5hkjn>Admin | Resources</h1> <h1 class="dark:text-white text-black text-[10px]" data-astro-cid-jcs5hkjn>This is only for extra resources</h1> <h1 class="dark:text-white text-black text-xl" data-astro-cid-jcs5hkjn>&nbsp;Add Resources</h1> <div class="rounded-xl bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black px-2.5 py-2" data-astro-cid-jcs5hkjn> <form class="p-4" method="POST" action="/api/admin/addres" data-astro-cid-jcs5hkjn> <div class="shadow shadow-black h-max p-4 rounded-l-xl" data-astro-cid-jcs5hkjn> <div class="w-full" data-astro-cid-jcs5hkjn> <h1 class="dark:text-white text-black ml-1" data-astro-cid-jcs5hkjn>Email: </h1> <input class="bg-transparent text-black dark:text-white border w-80 h-6 duration-300 border-zinc-800 rounded-xl" type="text" name="email" placeholder="Email of the user eg. support@example.com"${addAttribute(50, "maxlength")} data-astro-cid-jcs5hkjn> </div> <div class="w-fit " data-astro-cid-jcs5hkjn> <h1 class="dark:text-white text-black ml-1" data-astro-cid-jcs5hkjn>RAM: </h1> <input class="bg-transparent text-black dark:text-white border w-40 duration-300 border-zinc-800 rounded-xl" type="text" name="ram" placeholder="Amount of RAM in "${addAttribute(30, "maxlength")} data-astro-cid-jcs5hkjn><span class="text-black dark:text-white" data-astro-cid-jcs5hkjn>${resconf}</span> </div> <div class="w-fit " data-astro-cid-jcs5hkjn> <h1 class="dark:text-white text-black ml-1" data-astro-cid-jcs5hkjn>Disk: </h1> <input class="bg-transparent text-black dark:text-white border w-40 duration-300 border-zinc-800 rounded-xl" type="text" name="disk" placeholder="Amount of Disk in"${addAttribute(30, "maxlength")} data-astro-cid-jcs5hkjn><span class="text-black dark:text-white" data-astro-cid-jcs5hkjn>${resconf}</span> </div> <div class="w-fit " data-astro-cid-jcs5hkjn> <h1 class="dark:text-white text-black ml-1" data-astro-cid-jcs5hkjn>CPU: </h1> <input class="bg-transparent text-black dark:text-white border w-40 duration-300 border-zinc-800 rounded-xl" type="text" name="cpu" placeholder="Amount of CPU in"${addAttribute(30, "maxlength")} data-astro-cid-jcs5hkjn><span class="text-black dark:text-white" data-astro-cid-jcs5hkjn>${cputype}</span> </div> <div class="w-fit " data-astro-cid-jcs5hkjn> <h1 class="dark:text-white text-black ml-1" data-astro-cid-jcs5hkjn>Slots: </h1> <input class="bg-transparent text-black dark:text-white border w-40duration-300 border-zinc-800 rounded-xl" type="text" name="slots" placeholder="Amount of slots"${addAttribute(30, "maxlength")} data-astro-cid-jcs5hkjn> </div> <button class="dark:text-white text-black w-full relative bg-blue-400 shadow-md font-medium rounded-full text-lg p-2 text-center" type="submit" data-astro-cid-jcs5hkjn>Add Resources</button> </div> </form> </div><br data-astro-cid-jcs5hkjn> <h1 class="dark:text-white text-black text-xl" data-astro-cid-jcs5hkjn>&nbsp;Remove Resources</h1> <div class="rounded-xl bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black px-2.5 py-2" data-astro-cid-jcs5hkjn> <form method="POST" action="/api/admin/removeres" data-astro-cid-jcs5hkjn> <div class="shadow shadow-black h-max p-4 rounded-l-xl" data-astro-cid-jcs5hkjn> <div class="w-full" data-astro-cid-jcs5hkjn> <h1 class="text-black dark:text-white ml-1" data-astro-cid-jcs5hkjn>Email: </h1> <input class="bg-transparent border w-80 h-6 dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="email" placeholder="Email of the user eg. support@example.com"${addAttribute(50, "maxlength")} data-astro-cid-jcs5hkjn> </div> <div class="w-fit " data-astro-cid-jcs5hkjn> <h1 class="text-black dark:text-white ml-1" data-astro-cid-jcs5hkjn>RAM: </h1> <input class="bg-transparent border w-40 dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="ram" placeholder="Amount of RAM in "${addAttribute(30, "maxlength")} data-astro-cid-jcs5hkjn><span class="text-black dark:text-white" data-astro-cid-jcs5hkjn>${resconf}</span> </div> <div class="w-fit " data-astro-cid-jcs5hkjn> <h1 class="text-black dark:text-white ml-1" data-astro-cid-jcs5hkjn>Disk: </h1> <input class="bg-transparent border w-40 dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="disk" placeholder="Amount of Disk in"${addAttribute(30, "maxlength")} data-astro-cid-jcs5hkjn><span class="text-black dark:text-white" data-astro-cid-jcs5hkjn>${resconf}</span> </div> <div class="w-fit " data-astro-cid-jcs5hkjn> <h1 class="text-black dark:text-white ml-1" data-astro-cid-jcs5hkjn>CPU: </h1> <input class="bg-transparent border w-40 dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="cpu" placeholder="Amount of CPU in"${addAttribute(30, "maxlength")} data-astro-cid-jcs5hkjn><span class="text-black dark:text-white" data-astro-cid-jcs5hkjn>${cputype}</span> </div> <div class="w-fit " data-astro-cid-jcs5hkjn> <h1 class="text-black dark:text-white ml-1" data-astro-cid-jcs5hkjn>Slots: </h1> <input class="bg-transparent border w-40 dark:text-white duration-300 border-zinc-800 rounded-xl" type="text" name="slots" placeholder="Amount of slots"${addAttribute(30, "maxlength")} data-astro-cid-jcs5hkjn> </div> <button class="shadow shadow-black dark:text-white w-full relative bg-blue-400 text-black font-medium rounded-full text-lg p-2 text-center" type="submit" data-astro-cid-jcs5hkjn>Remove Resources</button> </div> </form> </div><br data-astro-cid-jcs5hkjn> </section> </main></div> </div> </body></html>`;
}, "D:/Klovit/KlovitCTest/src/pages/admin/resources.astro", void 0);

const $$file = "D:/Klovit/KlovitCTest/src/pages/admin/resources.astro";
const $$url = "/admin/resources";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Resources,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
