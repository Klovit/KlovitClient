import { c as createAstro, a as createComponent, r as renderTemplate, g as defineScriptVars, b as addAttribute, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DVPt8aZD.mjs';
import 'kleur/colors';
import chalk from 'chalk';
import { c as config } from '../chunks/config_CuAv1651.mjs';
/* empty css                                 */
import { s as supabase } from '../chunks/supabase_Cat3wBav.mjs';
import { a as $$Mobnav, $ as $$Nav } from '../chunks/mobnav_9SDxq6aL.mjs';
import { r as restype } from '../chunks/restype_D7TyzxY8.mjs';
import { $ as $$Head } from '../chunks/head_DSXnzJOk.mjs';
import { $ as $$Resources } from '../chunks/resources_DXK3Bi5C.mjs';
import { $ as $$Footer } from '../chunks/footer_Cf8FsmdQ.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://localhost:8081");
const $$Delete = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Delete;
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
  cacheaccountinfo.attributes;
  return renderTemplate(_a || (_a = __template(["<html> ", "<script>\n   // On page load or when changing themes, best to add inline in `head` to avoid FOUC\n   if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {\n      document.documentElement.classList.add('dark');\n   } else {\n      document.documentElement.classList.remove('dark')\n   }\n   var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');\n   var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');\n                   \n    // Change the icons inside the button based on previous settings\n    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {\n      themeToggleLightIcon.classList.remove('hidden');\n    } else {\n      themeToggleDarkIcon.classList.remove('hidden');\n    }\n            \n    var themeToggleBtn = document.getElementById('theme-toggle');\n\n    themeToggleBtn.addEventListener('click', function() {\n\n      // toggle icons inside button\n      themeToggleDarkIcon.classList.toggle('hidden');\n      themeToggleLightIcon.classList.toggle('hidden');\n\n      // if set via local storage previously\n      if (localStorage.getItem('color-theme')) {\n          if (localStorage.getItem('color-theme') === 'light') {\n              document.documentElement.classList.add('dark');\n              localStorage.setItem('color-theme', 'dark');\n          } else {\n              document.documentElement.classList.remove('dark');\n              localStorage.setItem('color-theme', 'light');\n          }\n\n      // if NOT set via local storage previously\n      } else {\n          if (document.documentElement.classList.contains('dark')) {\n              document.documentElement.classList.remove('dark');\n              localStorage.setItem('color-theme', 'light');\n          } else {\n             document.documentElement.classList.add('dark');\n              localStorage.setItem('color-theme', 'dark');\n          }\n      }\n    \n    });\n    // It's best to inline this in `head` to avoid FOUC (flash of unstyled content) when changing pages or themes\n        if (\n      localStorage.getItem('color-theme') === 'dark' ||\n      (!('color-theme' in localStorage) &&\n        window.matchMedia('(prefers-color-scheme: dark)').matches)\n    ) {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n<\/script>", '<body class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black flex items-center justify-center h-screen"> <div class="hidden md:block animation-blob h-screen w-screen"> <div class="antialiased"> <main> <div class="h-12 w-full"> ', " ", " ", ` <br> <section class="flex justify-center"> <div class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black mt-40 text-center justify-center mr-20 ml-20 text-black dark:text-white h-full w-full rounded-xl"> <h1>THIS IS AN IRREVERSIBLE ACTION, YOU CANNOT RECOVER YOUR DATA ONCE YOUR SERVER IS DELETED!</h1> <div class="justify-center items-center"> <button class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black rounded-xl w-fit text-xl" onclick="window.location.href = '/dashboard'"><p class="m-2">Cancel</p></button> <button class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black rounded-xl w-fit text-xl ml-4" id="delete"><p class="m-2">DELETE</p></button> </div> </div> </section> `, ' </div> </main> </div> </div> <div class="md:hidden w-screen overflow-x-hidden animation-blob h-screen"> <div class="antialiased"> <main> ', " ", " ", " ", `<br> <section class="flex justify-center"> <div class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black mt-40 text-center justify-center mr-20 ml-20 dark:text-white h-full w-full rounded-xl"> <h1>THIS IS AN IRREVERSIBLE ACTION, YOU CANNOT RECOVER YOUR DATA ONCE YOUR SERVER IS DELETED!</h1> <div class="justify-center items-center"> <button class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black rounded-xl w-fit text-xl" onclick="window.location.href = '/dashboard'"><p class="m-2">Cancel</p></button> <button class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black rounded-xl w-fit text-xl ml-4"`, '><p class="m-2">DELETE</p></button> </div> </div> </section> <div class="text-center"> <p class="text-gray-400">\n&copy;\n', " ", ' | Powered by <a class="text-amber-500" href="https://github.com/Klovit/KlovitClient">KlovitClient</a> </p> </div> </main></div> </div> <script>(function(){', "\n          const delbutton = document.querySelectorAll(`#delete`);\n\ndelbutton.forEach((button) => {\nbutton.addEventListener('click', () => {\ndeleteserver()\n});\n});\n        function deleteserver() {\n        const options = {\n        method: 'POST',\n        url: '/server/delete',\n        headers: {\n        'Content-Type': 'application/json',\n        },\n        body: `{\"id\":${srvid}}`,\n        };\n        fetch('/server/delete', options)\n        .then((response)=>{\n        if(response.status==200){\n        window.location.href = \"/dashboard?success=Successfully deleted your server.\"\n        } \n        else {\n        if (response.status==422) {\n        window.location.href = `/dashboard?error=${response.statusText}`\n        } else {\n        window.location.href = \"/dashboard?error=UNDEFINED ERROR\" }\n        }\n        });\n            }\n    })();<\/script> </body> </html>"], ["<html> ", "<script>\n   // On page load or when changing themes, best to add inline in \\`head\\` to avoid FOUC\n   if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {\n      document.documentElement.classList.add('dark');\n   } else {\n      document.documentElement.classList.remove('dark')\n   }\n   var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');\n   var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');\n                   \n    // Change the icons inside the button based on previous settings\n    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {\n      themeToggleLightIcon.classList.remove('hidden');\n    } else {\n      themeToggleDarkIcon.classList.remove('hidden');\n    }\n            \n    var themeToggleBtn = document.getElementById('theme-toggle');\n\n    themeToggleBtn.addEventListener('click', function() {\n\n      // toggle icons inside button\n      themeToggleDarkIcon.classList.toggle('hidden');\n      themeToggleLightIcon.classList.toggle('hidden');\n\n      // if set via local storage previously\n      if (localStorage.getItem('color-theme')) {\n          if (localStorage.getItem('color-theme') === 'light') {\n              document.documentElement.classList.add('dark');\n              localStorage.setItem('color-theme', 'dark');\n          } else {\n              document.documentElement.classList.remove('dark');\n              localStorage.setItem('color-theme', 'light');\n          }\n\n      // if NOT set via local storage previously\n      } else {\n          if (document.documentElement.classList.contains('dark')) {\n              document.documentElement.classList.remove('dark');\n              localStorage.setItem('color-theme', 'light');\n          } else {\n             document.documentElement.classList.add('dark');\n              localStorage.setItem('color-theme', 'dark');\n          }\n      }\n    \n    });\n    // It's best to inline this in \\`head\\` to avoid FOUC (flash of unstyled content) when changing pages or themes\n        if (\n      localStorage.getItem('color-theme') === 'dark' ||\n      (!('color-theme' in localStorage) &&\n        window.matchMedia('(prefers-color-scheme: dark)').matches)\n    ) {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n<\/script>", '<body class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black flex items-center justify-center h-screen"> <div class="hidden md:block animation-blob h-screen w-screen"> <div class="antialiased"> <main> <div class="h-12 w-full"> ', " ", " ", ` <br> <section class="flex justify-center"> <div class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black mt-40 text-center justify-center mr-20 ml-20 text-black dark:text-white h-full w-full rounded-xl"> <h1>THIS IS AN IRREVERSIBLE ACTION, YOU CANNOT RECOVER YOUR DATA ONCE YOUR SERVER IS DELETED!</h1> <div class="justify-center items-center"> <button class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black rounded-xl w-fit text-xl" onclick="window.location.href = '/dashboard'"><p class="m-2">Cancel</p></button> <button class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black rounded-xl w-fit text-xl ml-4" id="delete"><p class="m-2">DELETE</p></button> </div> </div> </section> `, ' </div> </main> </div> </div> <div class="md:hidden w-screen overflow-x-hidden animation-blob h-screen"> <div class="antialiased"> <main> ', " ", " ", " ", `<br> <section class="flex justify-center"> <div class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black mt-40 text-center justify-center mr-20 ml-20 dark:text-white h-full w-full rounded-xl"> <h1>THIS IS AN IRREVERSIBLE ACTION, YOU CANNOT RECOVER YOUR DATA ONCE YOUR SERVER IS DELETED!</h1> <div class="justify-center items-center"> <button class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black rounded-xl w-fit text-xl" onclick="window.location.href = '/dashboard'"><p class="m-2">Cancel</p></button> <button class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black rounded-xl w-fit text-xl ml-4"`, '><p class="m-2">DELETE</p></button> </div> </div> </section> <div class="text-center"> <p class="text-gray-400">\n&copy;\n', " ", ' | Powered by <a class="text-amber-500" href="https://github.com/Klovit/KlovitClient">KlovitClient</a> </p> </div> </main></div> </div> <script>(function(){', "\n          const delbutton = document.querySelectorAll(\\`#delete\\`);\n\ndelbutton.forEach((button) => {\nbutton.addEventListener('click', () => {\ndeleteserver()\n});\n});\n        function deleteserver() {\n        const options = {\n        method: 'POST',\n        url: '/server/delete',\n        headers: {\n        'Content-Type': 'application/json',\n        },\n        body: \\`{\"id\":\\${srvid}}\\`,\n        };\n        fetch('/server/delete', options)\n        .then((response)=>{\n        if(response.status==200){\n        window.location.href = \"/dashboard?success=Successfully deleted your server.\"\n        } \n        else {\n        if (response.status==422) {\n        window.location.href = \\`/dashboard?error=\\${response.statusText}\\`\n        } else {\n        window.location.href = \"/dashboard?error=UNDEFINED ERROR\" }\n        }\n        });\n            }\n    })();<\/script> </body> </html>"])), renderComponent($$result, "Header", $$Head, {}), maybeRenderHead(), renderComponent($$result, "Nav", $$Nav, {}), errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-1">ERROR: ${errormsg} ${limit}</div>`, success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-1">Success: ${success}</div>`, renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "Mobnav", $$Mobnav, {}), errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-1">ERROR: ${errormsg} ${limit}</div>`, success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-1">Success: ${success}</div>`, renderComponent($$result, "Resources", $$Resources, {}), addAttribute(`deleteserver(${srvid})`, "onclick"), year, config.name, defineScriptVars({ srvid }));
}, "D:/Klovit/KlovitCTest/src/pages/delete.astro", void 0);

const $$file = "D:/Klovit/KlovitCTest/src/pages/delete.astro";
const $$url = "/delete";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Delete,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
