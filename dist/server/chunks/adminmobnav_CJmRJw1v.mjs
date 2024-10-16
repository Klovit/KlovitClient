import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, m as maybeRenderHead } from './astro/server_DVPt8aZD.mjs';
import 'kleur/colors';
import 'clsx';
import chalk from 'chalk';
import { c as config, d as db } from './config_CuAv1651.mjs';
/* empty css                         */
import { s as supabase } from './supabase_Cat3wBav.mjs';
import './restype_D7TyzxY8.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$1 = createAstro("http://localhost:8081");
const $$Adminnav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Adminnav;
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
  Astro2.url.searchParams.get("error") || "";
  Astro2.url.searchParams.get("error") || "";
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
  Astro2.url.pathname;
  let coinstatus;
  if (config.coins.store.enabled || config.coins.enabled) {
    coinstatus = true;
  } else {
    coinstatus = false;
  }
  const info = await db.get("user-" + email);
  const balance = info.balance;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="hidden md:block"> <div class="h-12 w-full flex"> <img class="mt-2 ml-3"', ' height="30px" width="40px" alt="icon"> <div class="mt-2 h-12 w-full flex justify-center"> <nav class="inline-flex items-center justify-center rounded-lg w-fit text-sm font-medium text-white"> <div class="ml-1 mr-1"> <ul class="relative rounded-lg bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-fit py-3 flex justify-center"> <li class="hover:shadow-md rounded-2xl px-4 py-2"> <a href="/admin/home" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-home" class="fa-solid fa-home"></i></a> <div id="tooltip-nav-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white transition-opacity duration-300 bg-gray-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-950">\nHome\n<div class="tooltip-arrow" data-popper-arrow></div> </div> </li> <li class="hover:shadow-md rounded-2xl px-4 py-2"> <a href="/admin/resources" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-resources" class="fa-solid fa-plus"></i></a> <div id="tooltip-nav-resources" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white transition-opacity duration-300 bg-gray-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-950">\nResources\n<div class="tooltip-arrow" data-popper-arrow></div> </div> </li> ', ' <button type="button" class="flex text-sm items-right rounded-full md:mr-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="profile-dd" data-dropdown-placement="bottom"> <span class="sr-only">Open user menu</span> <img class="w-8 h-8 rounded-full"', '> </button> <div class="hidden z-50 w-56  list-none bg-zinc-300/50 dark:bg-zinc-900/50 divide-y divide-gray-600 rounded-xl" id="profile-dd"> <div class="py-3 px-4"> <span class="block text-sm font-semibold dark:text-white text-left"> ', ' </span> <span class="block text-sm dark:text-white text-left">', " - ", '</span> <span class="block text-sm dark:text-white text-left">Balance - ', '</span> </div> <ul class="py-1" aria-labelledby="dropdown"> <li> <a href="/account" class="block py-2 px-4 text-sm dark:text-white">My\n          Account</a> </li> ', ` </ul> <ul class="py-1 text-rose-500" aria-labelledby="dropdown"> <li> <a href="/api/auth/signout" class="block my-0 py-2 px-4 text-sm hover:text-red-600">Sign
          out</a> </li> </ul> </div> <li class="hover:shadow-md rounded-2xl px-4 py-2"> <a href="/admin/packages" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-packages" class="fa-solid fa-box"></i></a> <div id="tooltip-nav-packages" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white transition-opacity duration-300 bg-gray-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-950">
Packages
<div class="tooltip-arrow" data-popper-arrow></div> </div> </li> <li class="hover:shadow-md rounded-2xl px-4 py-2"> <a href="/panel" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-panel" class="fa-solid fa-gamepad"></i></a> <div id="tooltip-nav-panel" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white transition-opacity duration-300 bg-gray-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-950">
Panel
<div class="tooltip-arrow" data-popper-arrow></div> </div> </li> </ul> </div> </nav> </div> <button aria-label="theme-switcher" id="theme-toggleb" type="button" class="mr-1 text-black dark:text-white rounded-lg text-sm p-2.5"> <svg id="theme-toggle-dark-iconb" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> <svg id="theme-toggle-light-iconb" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path> </svg> </button> </div> <script>
  
      // On page load or when changing themes, best to add inline in \`head\` to avoid FOUC
      if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
      } else {
          document.documentElement.classList.remove('dark')
      }
      var themeToggleDarkIconb = document.getElementById('theme-toggle-dark-iconb');
      var themeToggleLightIconb = document.getElementById('theme-toggle-light-iconb');
    
      // Change the icons inside the button based on previous settings
      if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          themeToggleLightIconb.classList.remove('hidden');
      } else {
          themeToggleDarkIconb.classList.remove('hidden');
      }
      
      var themeToggleBtnb = document.getElementById('theme-toggleb');
      
      themeToggleBtnb.addEventListener('click', function() {
      
        // toggle icons inside button
        themeToggleDarkIconb.classList.toggle('hidden');
        themeToggleLightIconb.classList.toggle('hidden');
      
        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
      
        // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
        
      });
      // It's best to inline this in \`head\` to avoid FOUC (flash of unstyled content) when changing pages or themes
      if (
          localStorage.getItem('color-theme') === 'dark' ||
          (!('color-theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
    <\/script></div>`], ["", '<div class="hidden md:block"> <div class="h-12 w-full flex"> <img class="mt-2 ml-3"', ' height="30px" width="40px" alt="icon"> <div class="mt-2 h-12 w-full flex justify-center"> <nav class="inline-flex items-center justify-center rounded-lg w-fit text-sm font-medium text-white"> <div class="ml-1 mr-1"> <ul class="relative rounded-lg bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-fit py-3 flex justify-center"> <li class="hover:shadow-md rounded-2xl px-4 py-2"> <a href="/admin/home" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-home" class="fa-solid fa-home"></i></a> <div id="tooltip-nav-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white transition-opacity duration-300 bg-gray-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-950">\nHome\n<div class="tooltip-arrow" data-popper-arrow></div> </div> </li> <li class="hover:shadow-md rounded-2xl px-4 py-2"> <a href="/admin/resources" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-resources" class="fa-solid fa-plus"></i></a> <div id="tooltip-nav-resources" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white transition-opacity duration-300 bg-gray-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-950">\nResources\n<div class="tooltip-arrow" data-popper-arrow></div> </div> </li> ', ' <button type="button" class="flex text-sm items-right rounded-full md:mr-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="profile-dd" data-dropdown-placement="bottom"> <span class="sr-only">Open user menu</span> <img class="w-8 h-8 rounded-full"', '> </button> <div class="hidden z-50 w-56  list-none bg-zinc-300/50 dark:bg-zinc-900/50 divide-y divide-gray-600 rounded-xl" id="profile-dd"> <div class="py-3 px-4"> <span class="block text-sm font-semibold dark:text-white text-left"> ', ' </span> <span class="block text-sm dark:text-white text-left">', " - ", '</span> <span class="block text-sm dark:text-white text-left">Balance - ', '</span> </div> <ul class="py-1" aria-labelledby="dropdown"> <li> <a href="/account" class="block py-2 px-4 text-sm dark:text-white">My\n          Account</a> </li> ', ` </ul> <ul class="py-1 text-rose-500" aria-labelledby="dropdown"> <li> <a href="/api/auth/signout" class="block my-0 py-2 px-4 text-sm hover:text-red-600">Sign
          out</a> </li> </ul> </div> <li class="hover:shadow-md rounded-2xl px-4 py-2"> <a href="/admin/packages" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-packages" class="fa-solid fa-box"></i></a> <div id="tooltip-nav-packages" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white transition-opacity duration-300 bg-gray-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-950">
Packages
<div class="tooltip-arrow" data-popper-arrow></div> </div> </li> <li class="hover:shadow-md rounded-2xl px-4 py-2"> <a href="/panel" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-panel" class="fa-solid fa-gamepad"></i></a> <div id="tooltip-nav-panel" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white transition-opacity duration-300 bg-gray-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-950">
Panel
<div class="tooltip-arrow" data-popper-arrow></div> </div> </li> </ul> </div> </nav> </div> <button aria-label="theme-switcher" id="theme-toggleb" type="button" class="mr-1 text-black dark:text-white rounded-lg text-sm p-2.5"> <svg id="theme-toggle-dark-iconb" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> <svg id="theme-toggle-light-iconb" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path> </svg> </button> </div> <script>
  
      // On page load or when changing themes, best to add inline in \\\`head\\\` to avoid FOUC
      if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark');
      } else {
          document.documentElement.classList.remove('dark')
      }
      var themeToggleDarkIconb = document.getElementById('theme-toggle-dark-iconb');
      var themeToggleLightIconb = document.getElementById('theme-toggle-light-iconb');
    
      // Change the icons inside the button based on previous settings
      if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          themeToggleLightIconb.classList.remove('hidden');
      } else {
          themeToggleDarkIconb.classList.remove('hidden');
      }
      
      var themeToggleBtnb = document.getElementById('theme-toggleb');
      
      themeToggleBtnb.addEventListener('click', function() {
      
        // toggle icons inside button
        themeToggleDarkIconb.classList.toggle('hidden');
        themeToggleLightIconb.classList.toggle('hidden');
      
        // if set via local storage previously
        if (localStorage.getItem('color-theme')) {
            if (localStorage.getItem('color-theme') === 'light') {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            }
      
        // if NOT set via local storage previously
        } else {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('color-theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('color-theme', 'dark');
            }
        }
        
      });
      // It's best to inline this in \\\`head\\\` to avoid FOUC (flash of unstyled content) when changing pages or themes
      if (
          localStorage.getItem('color-theme') === 'dark' ||
          (!('color-theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
    <\/script></div>`])), maybeRenderHead(), addAttribute(config.website.icon, "src"), coinstatus && renderTemplate`<li class="hover:shadow-md rounded-2xl px-4 py-2"> <a href="/admin/coins" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-coins" class="fa-solid fa-coins"></i></a> <div id="tooltip-nav-coins" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white transition-opacity duration-300 bg-gray-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-950">
Coins
<div class="tooltip-arrow" data-popper-arrow></div> </div> </li>`, addAttribute(avatar, "src"), username, username, email, balance, adminstatus && renderTemplate`<li> <a href="/dashboard" class="block py-2 px-4 text-sm dark:text-white">Exit Admin Section</a> </li>`);
}, "D:/Klovit/KlovitCTest/src/components/adminnav.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://localhost:8081");
const $$Adminmobnav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Adminmobnav;
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
  Astro2.url.searchParams.get("error") || "";
  Astro2.url.searchParams.get("error") || "";
  Astro2.url.searchParams.get("success") || "";
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
  pterodactyl.relationships.servers.data[0];
  const info = await db.get("user-" + email);
  const balance = info.balance;
  let coinstatus;
  if (config.coins.store.enabled || config.coins.enabled) {
    coinstatus = true;
  } else {
    coinstatus = false;
  }
  return renderTemplate(_a || (_a = __template(["", '<div class="md:hidden"> <div class="h-12 w-full flex"> <img class="mt-2 ml-3"', ' height="30px" width="40px" alt="icon"> <div class="mt-2 h-12 w-full flex justify-center"> <nav class="inline-flex items-center justify-center rounded-lg w-fit text-sm font-medium text-white"> <div class="ml-1 mr-1"> <ul class="relative rounded-lg bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-fit py-3 flex justify-center"> <li class="hover:shadow-md rounded-2xl"> <a href="/admin/home" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-home" class="fa-solid fa-home"></i></a> <div id="tooltip-nav-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white transition-opacity duration-300 bg-gray-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-950">\nHome\n<div class="tooltip-arrow" data-popper-arrow></div> </div> </li> <li class="hover:shadow-md rounded-2xl"> <a href="/admin/resources" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-resources" class="fa-solid fa-plus"></i></a> <div id="tooltip-nav-resources" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white transition-opacity duration-300 bg-gray-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-950">\nResources\n<div class="tooltip-arrow" data-popper-arrow></div> </div> </li> ', ' <button type="button" class="flex text-sm items-right rounded-full md:mr-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="profile-dd" data-dropdown-placement="bottom"> <span class="sr-only">Open user menu</span> <img class="w-8 h-8 rounded-full"', '> </button> <div class="hidden z-50 w-56  list-none bg-zinc-300/50 dark:bg-zinc-900/50 divide-y divide-gray-600 rounded-xl" id="profile-dd"> <div class="py-3 px-4"> <span class="block text-sm font-semibold dark:text-white text-left"> ', ' </span> <span class="block text-sm dark:text-white text-left">', " - ", '</span> <span class="block text-sm dark:text-white text-left">Balance - ', '</span> </div> <ul class="py-1" aria-labelledby="dropdown"> <li> <a href="/account" class="block py-2 px-4 text-sm dark:text-white">My\n          Account</a> </li> ', ` </ul> <ul class="py-1 text-rose-500" aria-labelledby="dropdown"> <li> <a href="/api/auth/signout" class="block my-0 py-2 px-4 text-sm hover:text-red-600">Sign
          out</a> </li> </ul> </div> <li class="hover:shadow-md rounded-2xl"> <a href="/admin/packages" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-packages" class="fa-solid fa-box"></i></a> <div id="tooltip-nav-packages" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white transition-opacity duration-300 bg-gray-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-950">
Packages
<div class="tooltip-arrow" data-popper-arrow></div> </div> </li> <li class="hover:shadow-md rounded-2xl"> <a href="/panel" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-panel" class="fa-solid fa-gamepad"></i></a> <div id="tooltip-nav-panel" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white transition-opacity duration-300 bg-gray-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-950">
Panel
<div class="tooltip-arrow" data-popper-arrow></div> </div> </li> </ul> </div> </nav> </div> <button aria-label="theme-switcher" id="theme-togglea" type="button" class="mr-1 text-black dark:text-white rounded-lg text-sm p-2.5"> <svg id="theme-toggle-dark-icona" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> <svg id="theme-toggle-light-icona" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path> </svg> </button> </div> <script>
    // On page load or when changing themes, best to add inline in \`head\` to avoid FOUC
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }
    var themeToggleDarkIcona = document.getElementById('theme-toggle-dark-icona');
  var themeToggleLightIcona = document.getElementById('theme-toggle-light-icona');
  
  // Change the icons inside the button based on previous settings
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      themeToggleLightIcona.classList.remove('hidden');
  } else {
      themeToggleDarkIcona.classList.remove('hidden');
  }
  
  var themeToggleBtna = document.getElementById('theme-togglea');
  
  themeToggleBtna.addEventListener('click', function() {
  
      // toggle icons inside button
      themeToggleDarkIcona.classList.toggle('hidden');
      themeToggleLightIcona.classList.toggle('hidden');
  
      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          } else {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          }
  
      // if NOT set via local storage previously
      } else {
          if (document.documentElement.classList.contains('dark')) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          }
      }
      
  });
   <\/script> <script>
      // It's best to inline this in \`head\` to avoid FOUC (flash of unstyled content) when changing pages or themes
      if (
        localStorage.getItem('color-theme') === 'dark' ||
        (!('color-theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    <\/script></div>`], ["", '<div class="md:hidden"> <div class="h-12 w-full flex"> <img class="mt-2 ml-3"', ' height="30px" width="40px" alt="icon"> <div class="mt-2 h-12 w-full flex justify-center"> <nav class="inline-flex items-center justify-center rounded-lg w-fit text-sm font-medium text-white"> <div class="ml-1 mr-1"> <ul class="relative rounded-lg bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-fit py-3 flex justify-center"> <li class="hover:shadow-md rounded-2xl"> <a href="/admin/home" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-home" class="fa-solid fa-home"></i></a> <div id="tooltip-nav-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white transition-opacity duration-300 bg-gray-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-950">\nHome\n<div class="tooltip-arrow" data-popper-arrow></div> </div> </li> <li class="hover:shadow-md rounded-2xl"> <a href="/admin/resources" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-resources" class="fa-solid fa-plus"></i></a> <div id="tooltip-nav-resources" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white transition-opacity duration-300 bg-gray-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-950">\nResources\n<div class="tooltip-arrow" data-popper-arrow></div> </div> </li> ', ' <button type="button" class="flex text-sm items-right rounded-full md:mr-0" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="profile-dd" data-dropdown-placement="bottom"> <span class="sr-only">Open user menu</span> <img class="w-8 h-8 rounded-full"', '> </button> <div class="hidden z-50 w-56  list-none bg-zinc-300/50 dark:bg-zinc-900/50 divide-y divide-gray-600 rounded-xl" id="profile-dd"> <div class="py-3 px-4"> <span class="block text-sm font-semibold dark:text-white text-left"> ', ' </span> <span class="block text-sm dark:text-white text-left">', " - ", '</span> <span class="block text-sm dark:text-white text-left">Balance - ', '</span> </div> <ul class="py-1" aria-labelledby="dropdown"> <li> <a href="/account" class="block py-2 px-4 text-sm dark:text-white">My\n          Account</a> </li> ', ` </ul> <ul class="py-1 text-rose-500" aria-labelledby="dropdown"> <li> <a href="/api/auth/signout" class="block my-0 py-2 px-4 text-sm hover:text-red-600">Sign
          out</a> </li> </ul> </div> <li class="hover:shadow-md rounded-2xl"> <a href="/admin/packages" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-packages" class="fa-solid fa-box"></i></a> <div id="tooltip-nav-packages" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white transition-opacity duration-300 bg-gray-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-950">
Packages
<div class="tooltip-arrow" data-popper-arrow></div> </div> </li> <li class="hover:shadow-md rounded-2xl"> <a href="/panel" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-panel" class="fa-solid fa-gamepad"></i></a> <div id="tooltip-nav-panel" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white transition-opacity duration-300 bg-gray-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-950">
Panel
<div class="tooltip-arrow" data-popper-arrow></div> </div> </li> </ul> </div> </nav> </div> <button aria-label="theme-switcher" id="theme-togglea" type="button" class="mr-1 text-black dark:text-white rounded-lg text-sm p-2.5"> <svg id="theme-toggle-dark-icona" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> <svg id="theme-toggle-light-icona" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path> </svg> </button> </div> <script>
    // On page load or when changing themes, best to add inline in \\\`head\\\` to avoid FOUC
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark')
    }
    var themeToggleDarkIcona = document.getElementById('theme-toggle-dark-icona');
  var themeToggleLightIcona = document.getElementById('theme-toggle-light-icona');
  
  // Change the icons inside the button based on previous settings
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      themeToggleLightIcona.classList.remove('hidden');
  } else {
      themeToggleDarkIcona.classList.remove('hidden');
  }
  
  var themeToggleBtna = document.getElementById('theme-togglea');
  
  themeToggleBtna.addEventListener('click', function() {
  
      // toggle icons inside button
      themeToggleDarkIcona.classList.toggle('hidden');
      themeToggleLightIcona.classList.toggle('hidden');
  
      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          } else {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          }
  
      // if NOT set via local storage previously
      } else {
          if (document.documentElement.classList.contains('dark')) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          }
      }
      
  });
   <\/script> <script>
      // It's best to inline this in \\\`head\\\` to avoid FOUC (flash of unstyled content) when changing pages or themes
      if (
        localStorage.getItem('color-theme') === 'dark' ||
        (!('color-theme' in localStorage) &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    <\/script></div>`])), maybeRenderHead(), addAttribute(config.website.icon, "src"), coinstatus && renderTemplate`<li class="hover:shadow-md rounded-2xl"> <a href="/admin/coins" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-coins" class="fa-solid fa-coins"></i></a> <div id="tooltip-nav-coins" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white transition-opacity duration-300 bg-gray-300 rounded-lg shadow-sm opacity-0 tooltip dark:bg-zinc-950">
Coins
<div class="tooltip-arrow" data-popper-arrow></div> </div> </li>`, addAttribute(avatar, "src"), username, username, email, balance, adminstatus && renderTemplate`<li> <a href="/dashboard" class="block py-2 px-4 text-sm dark:text-white">Exit Admin Section</a> </li>`);
}, "D:/Klovit/KlovitCTest/src/components/adminmobnav.astro", void 0);

export { $$Adminnav as $, $$Adminmobnav as a };
