import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, b as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_DVPt8aZD.mjs';
import 'kleur/colors';
import { c as config } from '../chunks/config_CuAv1651.mjs';
/* empty css                                 */
import { $ as $$Head } from '../chunks/head_DSXnzJOk.mjs';
import { $ as $$Footer } from '../chunks/footer_Cf8FsmdQ.mjs';
import dotenv from 'dotenv';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://localhost:8081");
const $$Signin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  dotenv.config();
  const { cookies, redirect } = Astro2;
  if (process.env.INSTALLED === "false") {
    return Astro2.redirect(`/installer/start`);
  }
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  const googleauth = config.auth.supabase.oauth2.google.enabled;
  const githubauth = config.auth.supabase.oauth2.github.enabled;
  const discordauth = config.auth.supabase.oauth2.discord.enabled;
  if (accessToken && refreshToken) {
    return redirect("/dashboard");
  }
  const registered = Astro2.url.searchParams.get("registered") || "";
  const errorstate = Astro2.url.searchParams.get("error") || "";
  const errormsg = Astro2.url.searchParams.get("error") || "";
  (/* @__PURE__ */ new Date()).getFullYear();
  let oauth;
  if (googleauth || discordauth || githubauth) {
    oauth = true;
  } else {
    oauth = false;
  }
  return renderTemplate(_a || (_a = __template(["<html> ", "", '<body class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black h-full min-h-screen relative"> <div class="hidden md:block animation-blob h-screen w-screen"> <div class="antialiased"> <main class="h-screen"> <div class="h-12 w-full flex"> <img class="mt-2"', ` height="30px" width="40px" alt="icon"> <div class="mt-2 h-12 w-full flex justify-center"> <nav class="inline-flex items-center justify-center rounded-lg w-fit text-sm font-medium text-white"> <div class="ml-1 mr-1"> <ul class="relative rounded-lg bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-fit py-3 flex justify-center"> <li class="hover:shadow-md rounded-2xl"> <a href="/" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-home" class="fa-solid fa-house"></i></a> <div id="tooltip-nav-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Home
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> <li class="hover:shadow-md rounded-2xl"> <a href="/panel" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-panel" class="fa-solid fa-gamepad"></i></a> <div id="tooltip-nav-panel" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Panel
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> <li class="hover:shadow-md rounded-2xl"> <a href="/signin" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-login" class="fa-solid fa-right-to-bracket"></i></a> <div id="tooltip-nav-login" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Login
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> <li class="hover:shadow-md rounded-2xl"> <a href="/register" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-register" class="fa-solid fa-user-plus"></i></a> <div id="tooltip-nav-register" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Register
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> </ul> </div> </nav></div> <button aria-label="theme-switcher" id="theme-toggleb" type="button" class="text-gray-500 dark:text-gray-400 rounded-lg text-sm p-2.5"> <svg id="theme-toggle-dark-iconb" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> <svg id="theme-toggle-light-iconb" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path> </svg> </button> </div> <script>

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
                  <\/script> `, " ", ' <section class="min-h-screen flex justify-center mt-16"> <div class="w-fit bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black rounded-2xl h-fit p-2 "> <div class="sm:mx-auto sm:w-full sm:max-w-md grid grid-cols-1 items-center"><br> <h2 class="text-center text-2xl text-black dark:text-white">Login to ', `</h2> <span class="text-center text-xs text-black dark:text-white">Don't have a account? <a href="/register" class="text-red-500">Register now</a></span> </div><br> <div class="flex justify-center"> <form action="/api/auth/signin" method="post" class="w-fit"> <label class="ml-8 text-black dark:text-white" for="email" for="email">Email&nbsp;&nbsp;</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input class="rounded-xl bg-zinc-200 border-black border-solid border-2 dark:bg-zinc-900/50 test-size-xs px-2 py-1 mb-1" type="email" name="email" id="email"><br> <label class="ml-8 text-black dark:text-white" for="password">Password</label> <input class="rounded-xl bg-zinc-200 border-black border-solid border-2 dark:bg-zinc-900/50 test-size-xs px-2 py-1 mb-5" type="password" name="password" id="password"> <div class="flex justify-center"> <button class="relative rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 font-semibold hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black px-5 py-1"> Login </button><br> </div> <div class="flex w-full justify-center mt-2 mb-2"> `, ' </div> <div class="flex justify-center"> ', " ", " ", " </div> </form> </div> </div> </section> ", ' </main></div> </div> <div class="md:hidden w-screen overflow-x-hidden h-screen"> <div class="antialiased"> <main class="h-screen"> <div class="h-12 w-full flex"> <img class="mt-2"', ` height="30px" width="40px" alt="icon"> <div class="mt-2 h-12 w-full flex justify-center"> <nav class="inline-flex items-center justify-center rounded-lg w-fit text-sm font-medium text-white"> <div class="ml-1 mr-1"> <ul class="relative rounded-lg bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 w-fit py-3 flex justify-center"> <li class="hover:shadow-md rounded-2xl"> <a href="/" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-home" class="fa-solid fa-house"></i></a> <div id="tooltip-nav-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Home
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> <li class="hover:shadow-md rounded-2xl"> <a href="/panel" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-panel" class="fa-solid fa-gamepad"></i></a> <div id="tooltip-nav-panel" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Panel
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> <li class="hover:shadow-md rounded-2xl"> <a href="/signin" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-login" class="fa-solid fa-right-to-bracket"></i></a> <div id="tooltip-nav-login" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Login
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> <li class="hover:shadow-md rounded-2xl"> <a href="/register" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-register" class="fa-solid fa-user-plus"></i></a> <div id="tooltip-nav-register" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Register
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> </ul> </div> </nav></div> <button aria-label="theme-switcher" id="theme-toggleb" type="button" class="text-gray-500 dark:text-gray-400 rounded-lg text-sm p-2.5"> <svg id="theme-toggle-dark-iconb" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> <svg id="theme-toggle-light-iconb" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path> </svg> </button> </div> <script>
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
                    <\/script> <section class="min-h-screen flex justify-center mt-16"> <div class="w-fit bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black rounded-2xl h-fit p-2"> <div class="sm:mx-auto sm:w-full sm:max-w-md grid grid-cols-1 items-center"> <h2 class="text-center text-2xl text-black dark:text-white">Login to `, `</h2> <span class="text-center text-xs text-black dark:text-white">Don't have a account? <a href="/register" class="text-red-500">Register now</a></span> </div><br><br> <div class="flex justify-center"> <form action="/api/auth/signin" method="post" class="w-fit"> <label class="ml-8 text-black dark:text-white" for="email" for="email">Email&nbsp;&nbsp;</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input class="rounded-xl bg-zinc-200 border-black border-solid border-2 dark:bg-white test-size-xs px-2 py-1 mb-1" type="email" name="email" id="email"><br> <label class="ml-8 text-black dark:text-white" for="password">Password</label> <input class="rounded-xl bg-zinc-200 border-black border-solid border-2 dark:bg-white test-size-xs px-2 py-1 mb-5" type="password" name="password" id="password"> <div class="flex justify-center"> <button class="relative rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 font-semibold hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black px-5 py-1"> Login </button><br> </div> <div class="flex w-full justify-center mt-2 mb-2"> `, ' </div> <div class="flex justify-center"> ', " ", " ", " </div> </form> </div> </div> </section><br><br> ", " </main></div> </div> </body></html>"], ["<html> ", "", '<body class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black h-full min-h-screen relative"> <div class="hidden md:block animation-blob h-screen w-screen"> <div class="antialiased"> <main class="h-screen"> <div class="h-12 w-full flex"> <img class="mt-2"', ` height="30px" width="40px" alt="icon"> <div class="mt-2 h-12 w-full flex justify-center"> <nav class="inline-flex items-center justify-center rounded-lg w-fit text-sm font-medium text-white"> <div class="ml-1 mr-1"> <ul class="relative rounded-lg bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-fit py-3 flex justify-center"> <li class="hover:shadow-md rounded-2xl"> <a href="/" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-home" class="fa-solid fa-house"></i></a> <div id="tooltip-nav-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Home
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> <li class="hover:shadow-md rounded-2xl"> <a href="/panel" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-panel" class="fa-solid fa-gamepad"></i></a> <div id="tooltip-nav-panel" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Panel
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> <li class="hover:shadow-md rounded-2xl"> <a href="/signin" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-login" class="fa-solid fa-right-to-bracket"></i></a> <div id="tooltip-nav-login" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Login
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> <li class="hover:shadow-md rounded-2xl"> <a href="/register" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-register" class="fa-solid fa-user-plus"></i></a> <div id="tooltip-nav-register" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Register
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> </ul> </div> </nav></div> <button aria-label="theme-switcher" id="theme-toggleb" type="button" class="text-gray-500 dark:text-gray-400 rounded-lg text-sm p-2.5"> <svg id="theme-toggle-dark-iconb" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> <svg id="theme-toggle-light-iconb" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path> </svg> </button> </div> <script>

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
                  <\/script> `, " ", ' <section class="min-h-screen flex justify-center mt-16"> <div class="w-fit bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black rounded-2xl h-fit p-2 "> <div class="sm:mx-auto sm:w-full sm:max-w-md grid grid-cols-1 items-center"><br> <h2 class="text-center text-2xl text-black dark:text-white">Login to ', `</h2> <span class="text-center text-xs text-black dark:text-white">Don't have a account? <a href="/register" class="text-red-500">Register now</a></span> </div><br> <div class="flex justify-center"> <form action="/api/auth/signin" method="post" class="w-fit"> <label class="ml-8 text-black dark:text-white" for="email" for="email">Email&nbsp;&nbsp;</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input class="rounded-xl bg-zinc-200 border-black border-solid border-2 dark:bg-zinc-900/50 test-size-xs px-2 py-1 mb-1" type="email" name="email" id="email"><br> <label class="ml-8 text-black dark:text-white" for="password">Password</label> <input class="rounded-xl bg-zinc-200 border-black border-solid border-2 dark:bg-zinc-900/50 test-size-xs px-2 py-1 mb-5" type="password" name="password" id="password"> <div class="flex justify-center"> <button class="relative rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 font-semibold hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black px-5 py-1"> Login </button><br> </div> <div class="flex w-full justify-center mt-2 mb-2"> `, ' </div> <div class="flex justify-center"> ', " ", " ", " </div> </form> </div> </div> </section> ", ' </main></div> </div> <div class="md:hidden w-screen overflow-x-hidden h-screen"> <div class="antialiased"> <main class="h-screen"> <div class="h-12 w-full flex"> <img class="mt-2"', ` height="30px" width="40px" alt="icon"> <div class="mt-2 h-12 w-full flex justify-center"> <nav class="inline-flex items-center justify-center rounded-lg w-fit text-sm font-medium text-white"> <div class="ml-1 mr-1"> <ul class="relative rounded-lg bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 w-fit py-3 flex justify-center"> <li class="hover:shadow-md rounded-2xl"> <a href="/" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-home" class="fa-solid fa-house"></i></a> <div id="tooltip-nav-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Home
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> <li class="hover:shadow-md rounded-2xl"> <a href="/panel" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-panel" class="fa-solid fa-gamepad"></i></a> <div id="tooltip-nav-panel" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Panel
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> <li class="hover:shadow-md rounded-2xl"> <a href="/signin" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-login" class="fa-solid fa-right-to-bracket"></i></a> <div id="tooltip-nav-login" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Login
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> <li class="hover:shadow-md rounded-2xl"> <a href="/register" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-register" class="fa-solid fa-user-plus"></i></a> <div id="tooltip-nav-register" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Register
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> </ul> </div> </nav></div> <button aria-label="theme-switcher" id="theme-toggleb" type="button" class="text-gray-500 dark:text-gray-400 rounded-lg text-sm p-2.5"> <svg id="theme-toggle-dark-iconb" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> <svg id="theme-toggle-light-iconb" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path> </svg> </button> </div> <script>
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
                    <\/script> <section class="min-h-screen flex justify-center mt-16"> <div class="w-fit bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black rounded-2xl h-fit p-2"> <div class="sm:mx-auto sm:w-full sm:max-w-md grid grid-cols-1 items-center"> <h2 class="text-center text-2xl text-black dark:text-white">Login to `, `</h2> <span class="text-center text-xs text-black dark:text-white">Don't have a account? <a href="/register" class="text-red-500">Register now</a></span> </div><br><br> <div class="flex justify-center"> <form action="/api/auth/signin" method="post" class="w-fit"> <label class="ml-8 text-black dark:text-white" for="email" for="email">Email&nbsp;&nbsp;</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<input class="rounded-xl bg-zinc-200 border-black border-solid border-2 dark:bg-white test-size-xs px-2 py-1 mb-1" type="email" name="email" id="email"><br> <label class="ml-8 text-black dark:text-white" for="password">Password</label> <input class="rounded-xl bg-zinc-200 border-black border-solid border-2 dark:bg-white test-size-xs px-2 py-1 mb-5" type="password" name="password" id="password"> <div class="flex justify-center"> <button class="relative rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 font-semibold hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black px-5 py-1"> Login </button><br> </div> <div class="flex w-full justify-center mt-2 mb-2"> `, ' </div> <div class="flex justify-center"> ', " ", " ", " </div> </form> </div> </div> </section><br><br> ", " </main></div> </div> </body></html>"])), renderComponent($$result, "Header", $$Head, {}), maybeRenderHead(), addAttribute(config.website.icon, "src"), registered && renderTemplate`<div class="bg-green-400 h-8 w-full text-white">
Success fully registered
</div>`, errorstate && renderTemplate`<div class="bg-red-400 h-8 w-full text-white">
Error: ${errormsg} </div>`, config.name, oauth && renderTemplate`<span class="text-black dark:text-white col-span-3 text-lg text-center">login with</span>`, googleauth && renderTemplate`<button value="google" name="provider" type="submit" class="text-black dark:text-white relative font-medium rounded-full text-lg p-2 text-center"><i class="fa-brands fa-google"></i></button>`, githubauth && renderTemplate`<button value="github" name="provider" type="submit" class="text-black dark:text-white relative font-medium rounded-full text-lg p-2 text-center"><i class="fa-brands fa-github"></i></button>`, discordauth && renderTemplate`<button value="discord" name="provider" type="submit" class="text-black dark:text-white relative font-medium rounded-full text-lg p-2 text-center"><i class="fa-brands fa-discord"></i></button>`, renderComponent($$result, "Footer", $$Footer, {}), addAttribute(config.website.icon, "src"), config.name, oauth && renderTemplate`<span class="text-black dark:text-white col-span-3 text-lg text-center">login with</span>`, googleauth && renderTemplate`<button value="google" name="provider" type="submit" class="text-black dark:text-white relative font-medium rounded-full text-lg p-2 text-center"><i class="fa-brands fa-google"></i></button>`, githubauth && renderTemplate`<button value="github" name="provider" type="submit" class="text-black dark:text-white relative font-medium rounded-full text-lg p-2 text-center"><i class="fa-brands fa-github"></i></button>`, discordauth && renderTemplate`<button value="discord" name="provider" type="submit" class="text-black dark:text-white relative font-medium rounded-full text-lg p-2 text-center"><i class="fa-brands fa-discord"></i></button>`, renderComponent($$result, "Footer", $$Footer, {}));
}, "D:/Klovit/KlovitCTest/src/pages/signin.astro", void 0);

const $$file = "D:/Klovit/KlovitCTest/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Signin,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
