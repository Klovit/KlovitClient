import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute, g as defineScriptVars } from '../chunks/astro/server_DVPt8aZD.mjs';
import 'kleur/colors';
import chalk from 'chalk';
import { c as config, d as db } from '../chunks/config_CuAv1651.mjs';
/* empty css                                 */
import { s as supabase } from '../chunks/supabase_Cat3wBav.mjs';
import { $ as $$Nav, a as $$Mobnav } from '../chunks/mobnav_9SDxq6aL.mjs';
import { r as restype } from '../chunks/restype_D7TyzxY8.mjs';
import { $ as $$Head } from '../chunks/head_DSXnzJOk.mjs';
import { $ as $$Resources } from '../chunks/resources_DXK3Bi5C.mjs';
import { $ as $$Footer } from '../chunks/footer_Cf8FsmdQ.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://localhost:8081");
const $$Store = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Store;
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
  const resconf = restype.restype;
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
  let storestatus;
  if (config.coins.store.enabled && config.coins.enabled) {
    storestatus = true;
  } else {
    storestatus = false;
  }
  const ram = config.coins.store.ram.per;
  const disk = config.coins.store.disk.per;
  const cpu = config.coins.store.cpu.per;
  const slots = config.coins.store.servers.per;
  let cputype;
  if (config.resource_type === "GB") {
    cputype = " Core(s)";
  } else {
    cputype = "%";
  }
  if (storestatus === false) {
    return Astro2.redirect(`/dashboard?error=Store is Disabled.`);
  }
  let providerenabled;
  if (config.payments.enabled && config.payments.gateways.stripe.enabled) {
    providerenabled = true;
  } else {
    providerenabled = false;
  }
  const stripecoinsph = `Amount of coins, 1 coin is ${config.coins.store.coins.cost / config.coins.store.coins.per} ${config.payments.currency}`;
  const stripepk = config.payments.gateways.stripe.pkkey;
  return renderTemplate`<html> ${renderComponent($$result, "Header", $$Head, {})}${maybeRenderHead()}<body class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black h-full min-h-screen relative"> <div class="hidden md:block animation-blob w-screen"> <div class="antialiased"> <main class="h-full"> ${renderComponent($$result, "Nav", $$Nav, {})} ${errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-8">ERROR: ${errormsg}</div>`} ${success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-8">Success: ${success}</div>`} ${renderComponent($$result, "Resources", $$Resources, {})} <section class="p-8 rounded-xl"> <div class="rounded-xl grid grid-cols-2 bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black"> <div class="p-2"> <form method="POST" action="/api/store/buy/ram"> <h1 class="dark:text-white text-black">RAM:</h1> <select class="mb-2 w-full dark:bg-zinc-900 dark:text-white duration-300 p-2 rounded-xl" name="amount"> <option${addAttribute(ram, "value")}>${config.coins.store.ram.per}${resconf} ${config.coins.store.ram.cost}</option> <option${addAttribute(ram * 2, "value")}>${config.coins.store.ram.per * 2}${resconf} ${config.coins.store.ram.cost * 2}</option> <option${addAttribute(ram * 3, "value")}>${config.coins.store.ram.per * 3}${resconf} ${config.coins.store.ram.cost * 3}</option> </select> <button class="m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" type="submit">Buy</button> </form> </div> <div class="p-2"> <form method="POST" action="/api/store/buy/disk"> <h1 class="dark:text-white text-black">Disk:</h1> <select class="mb-2 w-full dark:bg-zinc-900 dark:text-white duration-300 p-2 rounded-xl" name="amount"> <option${addAttribute(disk, "value")}>${config.coins.store.disk.per}${resconf} - ${config.coins.store.disk.cost} Coins</option> <option${addAttribute(disk * 2, "value")}>${config.coins.store.disk.per * 2}${resconf} - ${config.coins.store.disk.cost * 2} Coins</option> <option${addAttribute(disk * 3, "value")}>${config.coins.store.disk.per * 3}${resconf} - ${config.coins.store.disk.cost * 3} Coins</option> </select> <button class="m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" type="submit">Buy</button> </form> </div> <div class="p-2"> <form method="POST" action="/api/store/buy/cpu"> <h1 class="dark:text-white text-black">CPU:</h1> <select class="mb-2 w-full dark:bg-zinc-900 dark:text-white duration-300 p-2 rounded-xl" name="amount"> <option${addAttribute(cpu, "value")}>${config.coins.store.cpu.per}${cputype} - ${config.coins.store.cpu.cost} Coins</option> <option${addAttribute(cpu * 2, "value")}>${config.coins.store.cpu.per * 2}${cputype} - ${config.coins.store.cpu.cost * 2} Coins</option> <option${addAttribute(cpu * 3, "value")}>${config.coins.store.cpu.per * 3}${cputype} - ${config.coins.store.cpu.cost * 3} Coins</option> </select> <button class="m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" type="submit">Buy</button> </form> </div> <div class="p-2"> <form method="POST" action="/api/store/buy/slots"> <h1 class="dark:text-white text-black">Slots:</h1> <select class="mb-2 w-full dark:bg-zinc-900 dark:text-white duration-300 p-2 rounded-xl" name="amount"> <option${addAttribute(slots, "value")}>${config.coins.store.servers.per} - ${config.coins.store.servers.cost} Coins</option> <option${addAttribute(slots * 2, "value")}>${config.coins.store.servers.per * 2} - ${config.coins.store.servers.cost * 2} Coins</option> <option${addAttribute(slots * 3, "value")}>${config.coins.store.servers.per * 3} - ${config.coins.store.servers.cost * 3} Coins</option> </select> <button class="m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" type="submit">Buy</button> </form> </div> ${providerenabled && renderTemplate(_a || (_a = __template(['<div class="p-2"> <form id="coins-payment"> <h1 class="dark:text-white text-black">Coins:</h1> <input class="mb-2 w-full dark:bg-zinc-900 dark:text-white duration-300 p-2 rounded-xl" name="coins"', ' min="100" required type="number"> <div class="form-group"> <label for="card-element" class="text-black dark:text-white mt-2">Credit or Debit Card</label> <div id="card-element" class="text-black bg-white rounded-xl dark:text-white"></div> <div class="error text-black dark:text-white" id="card-errors"></div> </div> <button class="m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black \n" type="submit">Buy</button> </form> <script src="https://js.stripe.com/v3/"><\/script> <script>(function(){', `
  const stripe = Stripe(stripepk); // Replace with your Stripe publishable key
  const elements = stripe.elements();

  // Create an instance of the card Element
  const card = elements.create('card', {
            style: {
                base: {
                    color: '#000', // Default text color for light mode
                    fontSize: '16px',
                    '::placeholder': {
                        color: '#888', // Placeholder color
                    },
                },
                dark: {
                    base: {
                        color: '#fff', // Text color for dark mode
                        '::placeholder': {
                            color: '#aaa', // Placeholder color in dark mode
                        },
                    },
                },
                invalid: {
                    color: '#fa755a', // Color for invalid inputs
                }
            }
        });
  card.mount('#card-element');
  const amount = document.querySelector('input[name="coins"]').value;

  const form = document.getElementById('coins-payment');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: 'card',
      card: card,
    });

    if (error) {
      console.error(error);
    } else {
      // Send paymentMethod.id to your server for the purchase
      fetch('/purchase-package', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: email, // Replace with your user ID
          paymentMethodId: paymentMethod.id,
          amount: amount,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Purchase successful:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  });
})();<\/script> </div>`])), addAttribute(stripecoinsph, "placeholder"), defineScriptVars({ email, stripepk }))} </div> </section> ${renderComponent($$result, "Footer", $$Footer, {})} </main> </div> </div> <div class="md:hidden w-screen overflow-x-hidden animation-blob h-screen"> <div class="antialiased"> <main class="h-screen"> ${renderComponent($$result, "Mobnav", $$Mobnav, {})} ${errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-8">ERROR: ${errormsg}</div>`} ${success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-8">Success: ${success}</div>`} ${renderComponent($$result, "Resources", $$Resources, {})}<br><br> <section> <div class="rounded-xl grid grid-cols-2 bg-zinc-300 dark:bg-zinc-900/50"> <div class="p-2"> <form method="POST" action="/api/store/buy/ram"> <h1 class="dark:text-white text-black">RAM:</h1> <select class="bg-zinc-100 dark:bg-zinc-900/50 border mb-2 border-black w-full dark:text-white duration-300 p-2 rounded-xl" name="amount"> <option${addAttribute(ram, "value")}>${config.coins.store.ram.per}${resconf} ${config.coins.store.ram.cost}</option> <option${addAttribute(ram * 2, "value")}>${config.coins.store.ram.per * 2}${resconf} ${config.coins.store.ram.cost * 2}</option> <option${addAttribute(ram * 3, "value")}>${config.coins.store.ram.per * 3}${resconf} ${config.coins.store.ram.cost * 3}</option> </select> <button class="m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" type="submit">Buy</button> </form> </div> <div class="p-2"> <form method="POST" action="/api/store/buy/disk"> <h1 class="dark:text-white text-black">Disk:</h1> <select class="bg-zinc-100 dark:bg-zinc-900/50 border mb-2 border-black w-full dark:text-white duration-300 p-2 rounded-xl" name="amount"> <option${addAttribute(disk, "value")}>${config.coins.store.disk.per}${resconf} - ${config.coins.store.disk.cost} Coins</option> <option${addAttribute(disk * 2, "value")}>${config.coins.store.disk.per * 2}${resconf} - ${config.coins.store.disk.cost * 2} Coins</option> <option${addAttribute(disk * 3, "value")}>${config.coins.store.disk.per * 3}${resconf} - ${config.coins.store.disk.cost * 3} Coins</option> </select> <button class="m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" type="submit">Buy</button> </form> </div> <div class="p-2"> <form method="POST" action="/api/store/buy/cpu"> <h1 class="dark:text-white text-black">CPU:</h1> <select class="bg-zinc-100 dark:bg-zinc-900/50 border mb-2 border-black w-full dark:text-white duration-300 p-2 rounded-xl" name="amount"> <option${addAttribute(cpu, "value")}>${config.coins.store.cpu.per}${cputype} - ${config.coins.store.cpu.cost} Coins</option> <option${addAttribute(cpu * 2, "value")}>${config.coins.store.cpu.per * 2}${cputype} - ${config.coins.store.cpu.cost * 2} Coins</option> <option${addAttribute(cpu * 3, "value")}>${config.coins.store.cpu.per * 3}${cputype} - ${config.coins.store.cpu.cost * 3} Coins</option> </select> <button class="m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" type="submit">Buy</button> </form> </div> <div class="p-2"> <form method="POST" action="/api/store/buy/slots"> <h1 class="dark:text-white text-black">Slots:</h1> <select class="bg-zinc-100 dark:bg-zinc-900/50 border mb-2 border-black w-full dark:text-white duration-300 p-2 rounded-xl" name="amount"> <option${addAttribute(slots, "value")}>${config.coins.store.servers.per} - ${config.coins.store.servers.cost} Coins</option> <option${addAttribute(slots * 2, "value")}>${config.coins.store.servers.per * 2} - ${config.coins.store.servers.cost * 2} Coins</option> <option${addAttribute(slots * 3, "value")}>${config.coins.store.servers.per * 3} - ${config.coins.store.servers.cost * 3} Coins</option> </select> <button class="m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
" type="submit">Buy</button> </form> </div> </div> </section> <div class="text-center"> <p class="text-gray-400">
&copy;
${year} ${config.name} | Powered by <a class="text-amber-500" href="https://github.com/Klovit/KlovitClient">KlovitClient</a> </p> </div> </main></div> </div> </body></html>`;
}, "D:/Klovit/KlovitCTest/src/pages/store.astro", void 0);

const $$file = "D:/Klovit/KlovitCTest/src/pages/store.astro";
const $$url = "/store";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Store,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
