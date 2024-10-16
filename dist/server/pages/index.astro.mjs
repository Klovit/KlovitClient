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
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  dotenv.config();
  if (process.env.INSTALLED === "false") {
    return Astro2.redirect(`/installer/start`);
  }
  const year = (/* @__PURE__ */ new Date()).getFullYear().toString();
  `${year} ${config.name}`;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> ', "", '<body class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black h-full min-h-screen relative"> <div class="hidden md:block animation-blob h-screen w-screen"> <div class="antialiased"> <main class="h-screen"> <div class="h-12 w-full flex"> <img class="mt-2"', ` height="30px" width="40px" alt="icon"> <div class="mt-2 h-12 w-full flex justify-center"> <nav class="inline-flex items-center justify-center rounded-lg w-fit text-sm font-medium text-white"> <div class="ml-1 mr-1"> <ul class="relative rounded-lg bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-fit py-3 flex justify-center"> <li class="hover:shadow-md rounded-2xl"> <a href="/" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-home" class="fa-solid fa-house"></i></a> <div id="tooltip-nav-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
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
                  <\/script> <section class="mt-2 min-h-screen flex justify-center"> <div class="text-center mt-20"> <h1 class="text-[80px] text-black dark:text-white"> `, ' </h1> <h2 class="text-[50px] dark:text-white text-black"> ', ' </h2> <div class="mt-4 flex justify-center"> <a href="/dashboard" class="relative mr-2 inline-flex items-center justify-center rounded-lg p-[1px] text-sm font-medium text-white"> <span class="relative rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 font-semibold hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black px-5 py-1"> Get Started </span> </a> </div> </div> </section> <section class="py-16 flex items-center justify-center"> <div class="text-center dark:text-white text-black  max-w-4xl"> <h1 class="text-4xl font-bold mb-4">Power Your Games with Reliable Hosting</h1> <p class="text-lg mb-6">Experience unparalleled performance and 24/7 support with our dedicated game server hosting.</p> <a href="#features" class="text-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 px-6 py-3 rounded-lg font-semibold hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black dark:text-white">Learn More</a> </div> </section> <section class="py-16 flex items-center justify-center"> <div class="text-center max-w-5xl"> <h2 class="text-3xl dark:text-white text-black font-bold mb-6">Why Choose Us?</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black dark:text-white text-black p-6 rounded-lg shadow-lg"> <h3 class="text-xl font-semibold mb-4">High Performance</h3> <p>Enjoy fast and reliable game server performance with our top-of-the-line hardware.</p> </div> <div class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black dark:text-white text-black p-6 rounded-lg shadow-lg"> <h3 class="text-xl font-semibold mb-4">24/7 Support</h3> <p>Get assistance anytime with our dedicated support team available around the clock.</p> </div> <div class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black dark:text-white text-black p-6 rounded-lg shadow-lg"> <h3 class="text-xl font-semibold mb-4">Scalable Solutions</h3> <p>Scale your server resources as your needs grow with our flexible hosting plans.</p> </div> </div> </div> </section> ', ' </main></div> </div> <div class="md:hidden overflow-x-hidden bg-zinc-100 dark:bg-gray-950 animation-blob h-screen w-screen"> <div class="antialiased"> <main class="h-screen"> <div class="h-12 w-full flex"> <img class="mt-2"', ` height="30px" width="40px" alt="icon"> <div class="mt-2 h-12 w-full flex justify-center"> <nav class="inline-flex items-center justify-center rounded-lg w-fit text-sm font-medium text-white"> <div class="ml-1 mr-1"> <ul class="relative rounded-lg bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-fit py-3 flex justify-center"> <li class="hover:shadow-md rounded-2xl"> <a href="/" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-mob-nav-home" class="fa-solid fa-house"></i></a> <div id="tooltip-mob-nav-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Home
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> <li class="hover:shadow-md rounded-2xl"> <a href="/panel" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-mob-nav-panel" class="fa-solid fa-gamepad"></i></a> <div id="tooltip-mob-nav-panel" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Panel
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> <li class="hover:shadow-md rounded-2xl"> <a href="/signin" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-mob-nav-login" class="fa-solid fa-right-to-bracket"></i></a> <div id="tooltip-mob-nav-login" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Login
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> <li class="hover:shadow-md rounded-2xl"> <a href="/register" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-mob-nav-register" class="fa-solid fa-user-plus"></i></a> <div id="tooltip-mob-nav-register" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Register
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> </ul> </div> </nav></div> <button aria-label="theme-switcher" id="theme-togglea" type="button" class="text-gray-500 dark:text-gray-400 rounded-lg text-sm p-2.5"> <svg id="theme-toggle-dark-icona" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> <svg id="theme-toggle-light-icona" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path> </svg> </button> </div> <script>
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
                    <\/script> <section class="mt-2 min-h-screen flex justify-center"> <div class="text-center mt-20"> <h1 class="text-[60px] text-black dark:text-white"> `, ' </h1> <h2 class="text-[30px] dark:text-white text-black"> ', ' </h2> <div class="mt-4 flex justify-center"> <a href="/dashboard" class="relative rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 font-semibold hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 px-5 py-1"> Get Started </a> </div> </div> </section> <section class="py-16 flex items-center justify-center"> <div class="text-center dark:text-white text-black  max-w-4xl"> <h1 class="text-4xl font-bold mb-4">Power Your Games with Reliable Hosting</h1> <p class="text-lg mb-6">Experience unparalleled performance and 24/7 support with our dedicated game server hosting.</p> <a href="#features" class="text-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 px-6 py-3 rounded-lg font-semibold hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">Learn More</a> </div> </section> <section class="py-16 flex items-center justify-center"> <div class="text-center max-w-5xl"> <h2 class="text-3xl dark:text-white text-black font-bold mb-6">Why Choose Us?</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black dark:text-white text-black p-6 rounded-lg shadow-lg"> <h3 class="text-xl font-semibold mb-4">High Performance</h3> <p>Enjoy fast and reliable game server performance with our top-of-the-line hardware.</p> </div> <div class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black dark:text-white text-black p-6 rounded-lg shadow-lg"> <h3 class="text-xl font-semibold mb-4">24/7 Support</h3> <p>Get assistance anytime with our dedicated support team available around the clock.</p> </div> <div class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black dark:text-white text-black p-6 rounded-lg shadow-lg"> <h3 class="text-xl font-semibold mb-4">Scalable Solutions</h3> <p>Scale your server resources as your needs grow with our flexible hosting plans.</p> </div> </div> </div> </section> ', " </main></div> </div> </body></html>"], ['<html lang="en"> ', "", '<body class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black h-full min-h-screen relative"> <div class="hidden md:block animation-blob h-screen w-screen"> <div class="antialiased"> <main class="h-screen"> <div class="h-12 w-full flex"> <img class="mt-2"', ` height="30px" width="40px" alt="icon"> <div class="mt-2 h-12 w-full flex justify-center"> <nav class="inline-flex items-center justify-center rounded-lg w-fit text-sm font-medium text-white"> <div class="ml-1 mr-1"> <ul class="relative rounded-lg bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-fit py-3 flex justify-center"> <li class="hover:shadow-md rounded-2xl"> <a href="/" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-nav-home" class="fa-solid fa-house"></i></a> <div id="tooltip-nav-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
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
                  <\/script> <section class="mt-2 min-h-screen flex justify-center"> <div class="text-center mt-20"> <h1 class="text-[80px] text-black dark:text-white"> `, ' </h1> <h2 class="text-[50px] dark:text-white text-black"> ', ' </h2> <div class="mt-4 flex justify-center"> <a href="/dashboard" class="relative mr-2 inline-flex items-center justify-center rounded-lg p-[1px] text-sm font-medium text-white"> <span class="relative rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 font-semibold hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black px-5 py-1"> Get Started </span> </a> </div> </div> </section> <section class="py-16 flex items-center justify-center"> <div class="text-center dark:text-white text-black  max-w-4xl"> <h1 class="text-4xl font-bold mb-4">Power Your Games with Reliable Hosting</h1> <p class="text-lg mb-6">Experience unparalleled performance and 24/7 support with our dedicated game server hosting.</p> <a href="#features" class="text-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 px-6 py-3 rounded-lg font-semibold hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black dark:text-white">Learn More</a> </div> </section> <section class="py-16 flex items-center justify-center"> <div class="text-center max-w-5xl"> <h2 class="text-3xl dark:text-white text-black font-bold mb-6">Why Choose Us?</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black dark:text-white text-black p-6 rounded-lg shadow-lg"> <h3 class="text-xl font-semibold mb-4">High Performance</h3> <p>Enjoy fast and reliable game server performance with our top-of-the-line hardware.</p> </div> <div class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black dark:text-white text-black p-6 rounded-lg shadow-lg"> <h3 class="text-xl font-semibold mb-4">24/7 Support</h3> <p>Get assistance anytime with our dedicated support team available around the clock.</p> </div> <div class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black dark:text-white text-black p-6 rounded-lg shadow-lg"> <h3 class="text-xl font-semibold mb-4">Scalable Solutions</h3> <p>Scale your server resources as your needs grow with our flexible hosting plans.</p> </div> </div> </div> </section> ', ' </main></div> </div> <div class="md:hidden overflow-x-hidden bg-zinc-100 dark:bg-gray-950 animation-blob h-screen w-screen"> <div class="antialiased"> <main class="h-screen"> <div class="h-12 w-full flex"> <img class="mt-2"', ` height="30px" width="40px" alt="icon"> <div class="mt-2 h-12 w-full flex justify-center"> <nav class="inline-flex items-center justify-center rounded-lg w-fit text-sm font-medium text-white"> <div class="ml-1 mr-1"> <ul class="relative rounded-lg bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-fit py-3 flex justify-center"> <li class="hover:shadow-md rounded-2xl"> <a href="/" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-mob-nav-home" class="fa-solid fa-house"></i></a> <div id="tooltip-mob-nav-home" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Home
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> <li class="hover:shadow-md rounded-2xl"> <a href="/panel" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-mob-nav-panel" class="fa-solid fa-gamepad"></i></a> <div id="tooltip-mob-nav-panel" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Panel
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> <li class="hover:shadow-md rounded-2xl"> <a href="/signin" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-mob-nav-login" class="fa-solid fa-right-to-bracket"></i></a> <div id="tooltip-mob-nav-login" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Login
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> <li class="hover:shadow-md rounded-2xl"> <a href="/register" class="p-2 text-black dark:text-white"><i data-tooltip-target="tooltip-mob-nav-register" class="fa-solid fa-user-plus"></i></a> <div id="tooltip-mob-nav-register" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip">
Register
<div class="tooltip-arrow" data-popper-arrow></div> </div></li> </ul> </div> </nav></div> <button aria-label="theme-switcher" id="theme-togglea" type="button" class="text-gray-500 dark:text-gray-400 rounded-lg text-sm p-2.5"> <svg id="theme-toggle-dark-icona" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> <svg id="theme-toggle-light-icona" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path> </svg> </button> </div> <script>
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
                    <\/script> <section class="mt-2 min-h-screen flex justify-center"> <div class="text-center mt-20"> <h1 class="text-[60px] text-black dark:text-white"> `, ' </h1> <h2 class="text-[30px] dark:text-white text-black"> ', ' </h2> <div class="mt-4 flex justify-center"> <a href="/dashboard" class="relative rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 font-semibold hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 px-5 py-1"> Get Started </a> </div> </div> </section> <section class="py-16 flex items-center justify-center"> <div class="text-center dark:text-white text-black  max-w-4xl"> <h1 class="text-4xl font-bold mb-4">Power Your Games with Reliable Hosting</h1> <p class="text-lg mb-6">Experience unparalleled performance and 24/7 support with our dedicated game server hosting.</p> <a href="#features" class="text-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 px-6 py-3 rounded-lg font-semibold hover:from-teal-400 hover:via-blue-500 hover:to-purple-400 dark:bg-gradient-to-r dark:from-gray-900 dark:via-gray-800 dark:to-black dark:text-white">Learn More</a> </div> </section> <section class="py-16 flex items-center justify-center"> <div class="text-center max-w-5xl"> <h2 class="text-3xl dark:text-white text-black font-bold mb-6">Why Choose Us?</h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <div class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black dark:text-white text-black p-6 rounded-lg shadow-lg"> <h3 class="text-xl font-semibold mb-4">High Performance</h3> <p>Enjoy fast and reliable game server performance with our top-of-the-line hardware.</p> </div> <div class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black dark:text-white text-black p-6 rounded-lg shadow-lg"> <h3 class="text-xl font-semibold mb-4">24/7 Support</h3> <p>Get assistance anytime with our dedicated support team available around the clock.</p> </div> <div class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black dark:text-white text-black p-6 rounded-lg shadow-lg"> <h3 class="text-xl font-semibold mb-4">Scalable Solutions</h3> <p>Scale your server resources as your needs grow with our flexible hosting plans.</p> </div> </div> </div> </section> ', " </main></div> </div> </body></html>"])), renderComponent($$result, "Header", $$Head, {}), maybeRenderHead(), addAttribute(config.website.icon, "src"), config.name, config.website.description, renderComponent($$result, "Footer", $$Footer, {}), addAttribute(config.website.icon, "src"), config.name, config.website.description, renderComponent($$result, "Footer", $$Footer, {}));
}, "D:/Klovit/KlovitCTest/src/pages/index.astro", void 0);

const $$file = "D:/Klovit/KlovitCTest/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
