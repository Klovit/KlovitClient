import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, b as addAttribute, e as renderHead } from '../../chunks/astro/server_DVPt8aZD.mjs';
import 'kleur/colors';
import { d as db } from '../../chunks/config_CuAv1651.mjs';
import { $ as $$Footer } from '../../chunks/footer_Cf8FsmdQ.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://localhost:8081");
const $$Packages = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Packages;
  const installed = await db.get("installed");
  if (installed === true) {
    return Astro2.redirect(`/?error=KlovitClient is already installed.`);
  }
  const inputstarttoken = Astro2.url.searchParams.get("token") || "";
  const starttoken = await db.get("starttoken");
  if (inputstarttoken != starttoken) {
    return Astro2.redirect("/installer/start?error=Invalid Token");
  }
  const error = Astro2.url.searchParams.get("error") || "";
  (/* @__PURE__ */ new Date()).getFullYear().toString();
  const config_website = await db.get("config_website");
  const restype = config_website.resource_type;
  let ramph;
  let diskph;
  let cpuph;
  let slotph;
  if (restype === "GB") {
    ramph = `1 GB`;
    diskph = `2 GB`;
    cpuph = `1 Core`;
    slotph = `1 Slot`;
  } else {
    ramph = `1024 MB`;
    diskph = `2048 MB`;
    cpuph = `100%`;
    slotph = `1 slot`;
  }
  const config_packages = await db.get("config_packages") || {};
  const ramvalue = config_packages.packages?.list?.["default"]?.ram ?? "";
  const cpuvalue = config_packages.packages?.list?.["default"]?.cpu ?? "";
  const storagevalue = config_packages.packages?.list?.["default"]?.disk ?? "";
  const slotsvalue = config_packages.packages?.list?.["default"]?.servers ?? "";
  const paymentsvalue = config_packages.payments?.enabled ?? "";
  const currencyvalue = config_packages.payments?.currency ?? "";
  const paypalintvalue = config_packages.payments?.paypal?.enabled ?? "";
  const paypalemailvalue = config_packages.payments?.paypal?.email ?? "";
  return renderTemplate(_a || (_a = __template(['<html> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><meta name="description"', '><meta name="keywords"', '><meta name="author"', '><meta name="copyright"', '><meta property="og:type"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta name="twitter:card"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:image:src"', '><title>KlovitClient | Step 2</title><link href="https://docs.klovit.tech/img/Klovit%20Logo.png" rel="icon"><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"><script src="https://kit.fontawesome.com/cf4342c927.js" crossorigin="anonymous"><\/script>', `</head> <body class="h-full min-h-screen relative"> <div class="hidden md:block animation-blob h-screen w-screen"> <div class="antialiased"> <main class="h-full"> <div class="absolute h-12 w-full z-10 bg-[#6473e1] dark:bg-[#10143c] grid grid-cols-2"> <div><img class="mt-2 ml-4" src="https://docs.klovit.tech/img/Klovit%20Logo.png" height="30px" width="40px" alt="icon"></div> <div class="grid place-items-end"><button aria-label="theme-switcher" id="theme-toggleb" type="button" class="text-white dark:text-white rounded-lg aligh-right text-sm p-2.5"> <svg id="theme-toggle-dark-iconb" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> <svg id="theme-toggle-light-iconb" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path> </svg> </button></div> </div> <script>
      
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
                        <\/script> `, ' <section class="min-h-screen"> <!-- Container for top colored section --> <div class="grid min-h-screen min-w-screen grid-cols-1 grid-rows-2"> <!-- Top colored section --> <div class="bg-[#6473e1] dark:bg-[#10143c] p-8"></div> <!-- Centered box that overlaps the top section --> <div class="absolute bg-white h-[350px] min-w-fit dark:bg-[#181c44] overflow-y-scroll shadow-lg p-8 ml-[430px] mt-18 self-center rounded-xl z-10"> <form class="grid grid-cols-1" action="/api/installer/packages" method="POST"> <input type="hidden"', ' name="inputtoken"> <h1 class="text-black text-center dark:text-white text-2xl font-bold">Step 2 - Package and Payment Settings</h1> <h1 class="text-black text-center dark:text-white text-xl font-bold">Default Package</h1> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">RAM: </h1> <input required', ' name="ram" type="number" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]"', '> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">CPU: </h1> <input required', ' name="cpu" type="number" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]"', '> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">Storage: </h1> <input required', ' name="storage" type="number" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]"', '> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">Server slots: </h1> <input required', ' name="slots" type="number" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]"', '> </div> <h2 class="text-black text-center dark:text-white text-xl font-bold">Payment Settings</h2> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">Enable Payment Settings: </h1> ', ' <span class="checkmark"></span> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">Currency Short Code: </h1> <input name="currency_code"', ' class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]" maxlength="3" placeholder="USD"> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">Enable PayPal integration: </h1> ', ' <span class="checkmark"></span> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">PayPal Email: </h1> <input name="paypal_email"', ' class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]" placeholder="email@example.com"> </div> <input hidden type="text" name="token" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]" required', '> <button type="submit" class="mt-2 bg-[#6473e1] dark:bg-[#10143c] p-2 rounded-xl text-white">Next</button> </form> </div> <!-- Bottom white section --> <div class="bg-white dark:bg-[#181c44] p-8"></div> </div> </section> ', ` </main></div> </div> <div class="md:hidden overflow-x-hidden h-screen w-screen"> <div class="antialiased"> <main class="h-full"> <div class="absolute h-12 w-full z-50 bg-[#6473e1] dark:bg-[#10143c] grid grid-cols-2"> <img class="mt-2" src="https://docs.klovit.tech/img/Klovit%20Logo.png" height="30px" width="40px" alt="icon"> <div class="grid place-items-end"><button aria-label="theme-switcher" id="theme-togglea" type="button" class="mr-4 text-white rounded-lg text-sm p-2.5"> <svg id="theme-toggle-dark-icona" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> <svg id="theme-toggle-light-icona" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path> </svg> </button></div> </div> <script>
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
                        <\/script> `, ' <section class="min-h-screen"> <!-- Container for top colored section --> <div class="grid min-h-screen min-w-screen grid-cols-1 grid-rows-2"> <!-- Top colored section --> <div class="bg-[#6473e1] dark:bg-[#10143c] p-8"></div> <!-- Centered box that overlaps the top section --> <div class="absolute bg-white min-w-fit dark:bg-[#181c44] overflow-y-scroll shadow-lg p-8 mt-4 self-center rounded-xl z-10"> <form class="grid grid-cols-1" action="/api/installer/packages" method="POST"> <input type="hidden"', ' name="inputtoken"> <h1 class="text-black text-center dark:text-white text-2xl font-bold">Step 2 - Package and Payment Settings</h1> <h1 class="text-black text-center dark:text-white text-xl font-bold">Default Package</h1> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">RAM: </h1> <input required', ' name="ram" type="number" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]"', '> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">CPU: </h1> <input required', ' name="cpu" type="number" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]"', '> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">Storage: </h1> <input required', ' name="storage" type="number" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]"', '> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">Server slots: </h1> <input required', ' name="slots" type="number" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]"', '> </div> <h2 class="text-black text-center dark:text-white text-xl font-bold">Payment Settings</h2> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">Enable Payment Settings: </h1> ', ' <span class="checkmark"></span> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">Currency Short Code: </h1> <input name="currency_code"', ' class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]" maxlength="3" placeholder="USD"> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">Enable PayPal integration: </h1> ', ' <span class="checkmark"></span> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">PayPal Email: </h1> <input name="paypal_email"', ' class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]" placeholder="email@example.com"> </div> <input hidden type="text" name="token" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]" required', '> <button type="submit" class="mt-2 bg-[#6473e1] dark:bg-[#10143c] p-2 rounded-xl text-white">Next</button> </form> </div> <!-- Bottom white section --> <div class="bg-white dark:bg-[#181c44] p-8"></div> </div> </section> ', " </main></div> </div> </body></html>"], ['<html> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><meta name="description"', '><meta name="keywords"', '><meta name="author"', '><meta name="copyright"', '><meta property="og:type"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta name="twitter:card"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:image:src"', '><title>KlovitClient | Step 2</title><link href="https://docs.klovit.tech/img/Klovit%20Logo.png" rel="icon"><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"><script src="https://kit.fontawesome.com/cf4342c927.js" crossorigin="anonymous"><\/script>', `</head> <body class="h-full min-h-screen relative"> <div class="hidden md:block animation-blob h-screen w-screen"> <div class="antialiased"> <main class="h-full"> <div class="absolute h-12 w-full z-10 bg-[#6473e1] dark:bg-[#10143c] grid grid-cols-2"> <div><img class="mt-2 ml-4" src="https://docs.klovit.tech/img/Klovit%20Logo.png" height="30px" width="40px" alt="icon"></div> <div class="grid place-items-end"><button aria-label="theme-switcher" id="theme-toggleb" type="button" class="text-white dark:text-white rounded-lg aligh-right text-sm p-2.5"> <svg id="theme-toggle-dark-iconb" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> <svg id="theme-toggle-light-iconb" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path> </svg> </button></div> </div> <script>
      
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
                        <\/script> `, ' <section class="min-h-screen"> <!-- Container for top colored section --> <div class="grid min-h-screen min-w-screen grid-cols-1 grid-rows-2"> <!-- Top colored section --> <div class="bg-[#6473e1] dark:bg-[#10143c] p-8"></div> <!-- Centered box that overlaps the top section --> <div class="absolute bg-white h-[350px] min-w-fit dark:bg-[#181c44] overflow-y-scroll shadow-lg p-8 ml-[430px] mt-18 self-center rounded-xl z-10"> <form class="grid grid-cols-1" action="/api/installer/packages" method="POST"> <input type="hidden"', ' name="inputtoken"> <h1 class="text-black text-center dark:text-white text-2xl font-bold">Step 2 - Package and Payment Settings</h1> <h1 class="text-black text-center dark:text-white text-xl font-bold">Default Package</h1> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">RAM: </h1> <input required', ' name="ram" type="number" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]"', '> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">CPU: </h1> <input required', ' name="cpu" type="number" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]"', '> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">Storage: </h1> <input required', ' name="storage" type="number" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]"', '> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">Server slots: </h1> <input required', ' name="slots" type="number" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]"', '> </div> <h2 class="text-black text-center dark:text-white text-xl font-bold">Payment Settings</h2> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">Enable Payment Settings: </h1> ', ' <span class="checkmark"></span> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">Currency Short Code: </h1> <input name="currency_code"', ' class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]" maxlength="3" placeholder="USD"> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">Enable PayPal integration: </h1> ', ' <span class="checkmark"></span> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">PayPal Email: </h1> <input name="paypal_email"', ' class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]" placeholder="email@example.com"> </div> <input hidden type="text" name="token" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]" required', '> <button type="submit" class="mt-2 bg-[#6473e1] dark:bg-[#10143c] p-2 rounded-xl text-white">Next</button> </form> </div> <!-- Bottom white section --> <div class="bg-white dark:bg-[#181c44] p-8"></div> </div> </section> ', ` </main></div> </div> <div class="md:hidden overflow-x-hidden h-screen w-screen"> <div class="antialiased"> <main class="h-full"> <div class="absolute h-12 w-full z-50 bg-[#6473e1] dark:bg-[#10143c] grid grid-cols-2"> <img class="mt-2" src="https://docs.klovit.tech/img/Klovit%20Logo.png" height="30px" width="40px" alt="icon"> <div class="grid place-items-end"><button aria-label="theme-switcher" id="theme-togglea" type="button" class="mr-4 text-white rounded-lg text-sm p-2.5"> <svg id="theme-toggle-dark-icona" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> <svg id="theme-toggle-light-icona" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path> </svg> </button></div> </div> <script>
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
                        <\/script> `, ' <section class="min-h-screen"> <!-- Container for top colored section --> <div class="grid min-h-screen min-w-screen grid-cols-1 grid-rows-2"> <!-- Top colored section --> <div class="bg-[#6473e1] dark:bg-[#10143c] p-8"></div> <!-- Centered box that overlaps the top section --> <div class="absolute bg-white min-w-fit dark:bg-[#181c44] overflow-y-scroll shadow-lg p-8 mt-4 self-center rounded-xl z-10"> <form class="grid grid-cols-1" action="/api/installer/packages" method="POST"> <input type="hidden"', ' name="inputtoken"> <h1 class="text-black text-center dark:text-white text-2xl font-bold">Step 2 - Package and Payment Settings</h1> <h1 class="text-black text-center dark:text-white text-xl font-bold">Default Package</h1> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">RAM: </h1> <input required', ' name="ram" type="number" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]"', '> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">CPU: </h1> <input required', ' name="cpu" type="number" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]"', '> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">Storage: </h1> <input required', ' name="storage" type="number" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]"', '> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">Server slots: </h1> <input required', ' name="slots" type="number" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]"', '> </div> <h2 class="text-black text-center dark:text-white text-xl font-bold">Payment Settings</h2> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">Enable Payment Settings: </h1> ', ' <span class="checkmark"></span> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">Currency Short Code: </h1> <input name="currency_code"', ' class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]" maxlength="3" placeholder="USD"> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">Enable PayPal integration: </h1> ', ' <span class="checkmark"></span> </div> <div class="w-full grid grid-cols-2 mb-1"> <h1 class="text-black dark:text-white ml-1">PayPal Email: </h1> <input name="paypal_email"', ' class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]" placeholder="email@example.com"> </div> <input hidden type="text" name="token" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]" required', '> <button type="submit" class="mt-2 bg-[#6473e1] dark:bg-[#10143c] p-2 rounded-xl text-white">Next</button> </form> </div> <!-- Bottom white section --> <div class="bg-white dark:bg-[#181c44] p-8"></div> </div> </section> ', " </main></div> </div> </body></html>"])), addAttribute(`KlovitClient installer`, "content"), addAttribute(`KlovitClient, Hosting, Klovit, Freemium Minecraft Hosting, Installer, Cloud, Minecraft, Servers, Free Servers, Hostings that use KlovitClient`, "content"), addAttribute(`Klovit`, "content"), addAttribute(`KlovitClient`, "content"), addAttribute(`website`, "content"), addAttribute(`KlovitClient`, "content"), addAttribute(`KlovitClient installer`, "content"), addAttribute(`https://docs.klovit.tech/img/Klovit%20Logo.png`, "content"), addAttribute(`https://docs.klovit.tech/img/Klovit%20Logo.png`, "content"), addAttribute(`KlovitClient`, "content"), addAttribute(`KlovitClient installer`, "content"), addAttribute(`https://docs.klovit.tech/img/Klovit%20Logo.png`, "content"), addAttribute(`https://docs.klovit.tech/img/Klovit%20Logo.png`, "content"), renderHead(), error && renderTemplate`<div class="flex justify-center"> <div class="absolute mt-14 bg-[#6473e1] dark:bg-[#10143c] w-fit z-10"> <div class="p-4 rounded-xl bg-red-700 text-white self-center mr-6 ml-4">
ERROR: ${error} </div> </div> </div>`, addAttribute(inputstarttoken, "value"), addAttribute(ramvalue, "value"), addAttribute(ramph, "placeholder"), addAttribute(cpuvalue, "value"), addAttribute(cpuph, "placeholder"), addAttribute(storagevalue, "value"), addAttribute(diskph, "placeholder"), addAttribute(slotsvalue, "value"), addAttribute(slotph, "placeholder"), paymentsvalue ? renderTemplate`<input name="payments" checked type="checkbox" value="true" class="w-5 h-5 appearance-none border cursor-pointer border-gray-800  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:bg-[#6473e1] dark:checked:bg-[#10143c]">` : renderTemplate`<input name="payments" type="checkbox" value="true" class="w-5 h-5 appearance-none border cursor-pointer border-gray-800  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:bg-[#6473e1] dark:checked:bg-[#10143c]">`, addAttribute(currencyvalue, "value"), paypalintvalue ? renderTemplate`<input checked name="paypal_integration" type="checkbox" value="true" class="w-5 h-5 appearance-none border cursor-pointer border-gray-800  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:bg-[#6473e1] dark:checked:bg-[#10143c]">` : renderTemplate`<input name="paypal_integration" type="checkbox" value="true" class="w-5 h-5 appearance-none border cursor-pointer border-gray-800  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:bg-[#6473e1] dark:checked:bg-[#10143c]">`, addAttribute(paypalemailvalue, "value"), addAttribute(inputstarttoken, "value"), renderComponent($$result, "Footer", $$Footer, {}), error && renderTemplate`<div class="flex justify-center"> <div class="absolute mt-14 bg-[#6473e1] dark:bg-[#10143c] w-fit z-10"> <div class="p-4 rounded-xl bg-red-700 text-white self-center mr-6 ml-4">
ERROR: ${error} </div> </div> </div>`, addAttribute(inputstarttoken, "value"), addAttribute(ramvalue, "value"), addAttribute(ramph, "placeholder"), addAttribute(cpuvalue, "value"), addAttribute(cpuph, "placeholder"), addAttribute(storagevalue, "value"), addAttribute(diskph, "placeholder"), addAttribute(slotsvalue, "value"), addAttribute(slotph, "placeholder"), paymentsvalue ? renderTemplate`<input name="payments" checked type="checkbox" value="true" class="w-5 h-5 appearance-none border cursor-pointer border-gray-800  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:bg-[#6473e1] dark:checked:bg-[#10143c]">` : renderTemplate`<input name="payments" type="checkbox" value="true" class="w-5 h-5 appearance-none border cursor-pointer border-gray-800  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:bg-[#6473e1] dark:checked:bg-[#10143c]">`, addAttribute(currencyvalue, "value"), paypalintvalue ? renderTemplate`<input checked name="paypal_integration" type="checkbox" value="true" class="w-5 h-5 appearance-none border cursor-pointer border-gray-800  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:bg-[#6473e1] dark:checked:bg-[#10143c]">` : renderTemplate`<input name="paypal_integration" type="checkbox" value="true" class="w-5 h-5 appearance-none border cursor-pointer border-gray-800  rounded-md mr-2 hover:border-indigo-500 hover:bg-indigo-100 checked:bg-no-repeat checked:bg-center checked:bg-[#6473e1] dark:checked:bg-[#10143c]">`, addAttribute(paypalemailvalue, "value"), addAttribute(inputstarttoken, "value"), renderComponent($$result, "Footer", $$Footer, {}));
}, "D:/Klovit/KlovitCTest/src/pages/installer/packages.astro", void 0);

const $$file = "D:/Klovit/KlovitCTest/src/pages/installer/packages.astro";
const $$url = "/installer/packages";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Packages,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
