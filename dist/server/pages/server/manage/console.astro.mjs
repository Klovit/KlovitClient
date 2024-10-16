import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../../../chunks/astro/server_DVPt8aZD.mjs';
import 'kleur/colors';
import chalk from 'chalk';
import { c as config } from '../../../chunks/config_CuAv1651.mjs';
import { s as supabase } from '../../../chunks/supabase_Cat3wBav.mjs';
import { a as $$Mobnav, $ as $$Nav } from '../../../chunks/mobnav_9SDxq6aL.mjs';
import { r as restype } from '../../../chunks/restype_D7TyzxY8.mjs';
import { $ as $$Head } from '../../../chunks/head_DSXnzJOk.mjs';
import { $ as $$Footer } from '../../../chunks/footer_Cf8FsmdQ.mjs';
import { pterosocket } from 'pterosocket';
/* empty css                                         */
export { renderers } from '../../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://localhost:8081");
const $$Console = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Console;
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
  const resconf = restype.restype;
  const errorstate = Astro2.url.searchParams.get("error") || "";
  const errormsg = Astro2.url.searchParams.get("error") || "";
  const success = Astro2.url.searchParams.get("success") || "";
  const srvid = Astro2.url.searchParams.get("id") || "";
  const year = (/* @__PURE__ */ new Date()).getFullYear().toString();
  `${year} ${config.name}`;
  const limitint = Astro2.url.searchParams.get("limit") || "";
  let limit;
  if (Astro2.url.searchParams.get("limit")) {
    limit = "Limit is " + limitint + ` ${resconf}`;
  }
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
  if (pterodactyl.relationships.servers.data.filter((server) => server.attributes.id == srvid).length == 0) return redirect("/dashboard?error=Could not find server with that ID.");
  const srvinfo = pterodactyl.relationships.servers.data.filter((server) => server.attributes.id == srvid);
  const origin = config.pterodactyl.url;
  const api_key = config.pterodactyl.client_api;
  const server_uuid = srvinfo[0].attributes.uuid;
  const socket = new pterosocket(origin, api_key, server_uuid);
  socket.on("start", () => {
    console.log("Connected!");
  });
  let consoleoutput;
  socket.on("console_output", (output) => {
    consoleoutput = output;
  });
  return renderTemplate(_a || (_a = __template(["<html data-astro-cid-m2puiqoj> ", "<script>\n   // On page load or when changing themes, best to add inline in `head` to avoid FOUC\n   if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {\n      document.documentElement.classList.add('dark');\n   } else {\n      document.documentElement.classList.remove('dark')\n   }\n   var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');\n   var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');\n                   \n    // Change the icons inside the button based on previous settings\n    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {\n      themeToggleLightIcon.classList.remove('hidden');\n    } else {\n      themeToggleDarkIcon.classList.remove('hidden');\n    }\n            \n    var themeToggleBtn = document.getElementById('theme-toggle');\n\n    themeToggleBtn.addEventListener('click', function() {\n\n      // toggle icons inside button\n      themeToggleDarkIcon.classList.toggle('hidden');\n      themeToggleLightIcon.classList.toggle('hidden');\n\n      // if set via local storage previously\n      if (localStorage.getItem('color-theme')) {\n          if (localStorage.getItem('color-theme') === 'light') {\n              document.documentElement.classList.add('dark');\n              localStorage.setItem('color-theme', 'dark');\n          } else {\n              document.documentElement.classList.remove('dark');\n              localStorage.setItem('color-theme', 'light');\n          }\n\n      // if NOT set via local storage previously\n      } else {\n          if (document.documentElement.classList.contains('dark')) {\n              document.documentElement.classList.remove('dark');\n              localStorage.setItem('color-theme', 'light');\n          } else {\n             document.documentElement.classList.add('dark');\n              localStorage.setItem('color-theme', 'dark');\n          }\n      }\n    \n    });\n    // It's best to inline this in `head` to avoid FOUC (flash of unstyled content) when changing pages or themes\n        if (\n      localStorage.getItem('color-theme') === 'dark' ||\n      (!('color-theme' in localStorage) &&\n        window.matchMedia('(prefers-color-scheme: dark)').matches)\n    ) {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n<\/script>", '<body class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black flex items-center justify-center h-screen" data-astro-cid-m2puiqoj> <div class="hidden md:block animation-blob h-screen w-screen" data-astro-cid-m2puiqoj> <div class="antialiased" data-astro-cid-m2puiqoj> <main data-astro-cid-m2puiqoj> <div class="h-12 w-full" data-astro-cid-m2puiqoj> ', " ", " ", ' <section class="flex justify-center" data-astro-cid-m2puiqoj> <p data-astro-cid-m2puiqoj>', "</p> </section> ", ' </div> </main> </div> </div> <div class="md:hidden w-screen overflow-x-hidden animation-blob h-screen" data-astro-cid-m2puiqoj> <div class="antialiased" data-astro-cid-m2puiqoj> <main data-astro-cid-m2puiqoj> ', " ", " ", ' <section class="flex justify-center" data-astro-cid-m2puiqoj></section> ', " </main></div> </div> </body></html>"], ["<html data-astro-cid-m2puiqoj> ", "<script>\n   // On page load or when changing themes, best to add inline in \\`head\\` to avoid FOUC\n   if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {\n      document.documentElement.classList.add('dark');\n   } else {\n      document.documentElement.classList.remove('dark')\n   }\n   var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');\n   var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');\n                   \n    // Change the icons inside the button based on previous settings\n    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {\n      themeToggleLightIcon.classList.remove('hidden');\n    } else {\n      themeToggleDarkIcon.classList.remove('hidden');\n    }\n            \n    var themeToggleBtn = document.getElementById('theme-toggle');\n\n    themeToggleBtn.addEventListener('click', function() {\n\n      // toggle icons inside button\n      themeToggleDarkIcon.classList.toggle('hidden');\n      themeToggleLightIcon.classList.toggle('hidden');\n\n      // if set via local storage previously\n      if (localStorage.getItem('color-theme')) {\n          if (localStorage.getItem('color-theme') === 'light') {\n              document.documentElement.classList.add('dark');\n              localStorage.setItem('color-theme', 'dark');\n          } else {\n              document.documentElement.classList.remove('dark');\n              localStorage.setItem('color-theme', 'light');\n          }\n\n      // if NOT set via local storage previously\n      } else {\n          if (document.documentElement.classList.contains('dark')) {\n              document.documentElement.classList.remove('dark');\n              localStorage.setItem('color-theme', 'light');\n          } else {\n             document.documentElement.classList.add('dark');\n              localStorage.setItem('color-theme', 'dark');\n          }\n      }\n    \n    });\n    // It's best to inline this in \\`head\\` to avoid FOUC (flash of unstyled content) when changing pages or themes\n        if (\n      localStorage.getItem('color-theme') === 'dark' ||\n      (!('color-theme' in localStorage) &&\n        window.matchMedia('(prefers-color-scheme: dark)').matches)\n    ) {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n<\/script>", '<body class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black flex items-center justify-center h-screen" data-astro-cid-m2puiqoj> <div class="hidden md:block animation-blob h-screen w-screen" data-astro-cid-m2puiqoj> <div class="antialiased" data-astro-cid-m2puiqoj> <main data-astro-cid-m2puiqoj> <div class="h-12 w-full" data-astro-cid-m2puiqoj> ', " ", " ", ' <section class="flex justify-center" data-astro-cid-m2puiqoj> <p data-astro-cid-m2puiqoj>', "</p> </section> ", ' </div> </main> </div> </div> <div class="md:hidden w-screen overflow-x-hidden animation-blob h-screen" data-astro-cid-m2puiqoj> <div class="antialiased" data-astro-cid-m2puiqoj> <main data-astro-cid-m2puiqoj> ', " ", " ", ' <section class="flex justify-center" data-astro-cid-m2puiqoj></section> ', " </main></div> </div> </body></html>"])), renderComponent($$result, "Header", $$Head, { "data-astro-cid-m2puiqoj": true }), maybeRenderHead(), renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-m2puiqoj": true }), errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-1" data-astro-cid-m2puiqoj>ERROR: ${errormsg} ${limit}</div>`, success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-1" data-astro-cid-m2puiqoj>Success: ${success}</div>`, consoleoutput, renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-m2puiqoj": true }), renderComponent($$result, "Mobnav", $$Mobnav, { "data-astro-cid-m2puiqoj": true }), errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-1" data-astro-cid-m2puiqoj>ERROR: ${errormsg} ${limit}</div>`, success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-1" data-astro-cid-m2puiqoj>Success: ${success}</div>`, renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-m2puiqoj": true }));
}, "D:/Klovit/KlovitCTest/src/pages/server/manage/console.astro", void 0);

const $$file = "D:/Klovit/KlovitCTest/src/pages/server/manage/console.astro";
const $$url = "/server/manage/console";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Console,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
