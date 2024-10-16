import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DVPt8aZD.mjs';
import 'kleur/colors';
import chalk from 'chalk';
import { c as config, d as db } from '../chunks/config_CuAv1651.mjs';
/* empty css                                 */
import { s as supabase } from '../chunks/supabase_Cat3wBav.mjs';
import { $ as $$Nav, a as $$Mobnav } from '../chunks/mobnav_9SDxq6aL.mjs';
import '../chunks/restype_D7TyzxY8.mjs';
import { $ as $$Head } from '../chunks/head_DSXnzJOk.mjs';
import { $ as $$Resources } from '../chunks/resources_DXK3Bi5C.mjs';
import { $ as $$Footer } from '../chunks/footer_Cf8FsmdQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("http://localhost:8081");
const $$Account = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Account;
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
  const errorstate = Astro2.url.searchParams.get("error") || "";
  const errormsg = Astro2.url.searchParams.get("error") || "";
  const success = Astro2.url.searchParams.get("success") || "";
  const newpass = Astro2.url.searchParams.get("password") || "";
  let newpassword;
  if (Astro2.url.searchParams.get("password")) {
    newpassword = "Password is " + newpass;
  }
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
  const userinfo = await db.get("user-" + email);
  const password = userinfo.password;
  const usernamev = ` ${username} `;
  const emailv = ` ${email}`;
  return renderTemplate`<html> ${renderComponent($$result, "Header", $$Head, {})}${maybeRenderHead()}<body class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black h-full min-h-screen relative"> <div class="hidden md:block animation-blob w-screen"> <div class="antialiased"> <main class="h-fit"> ${renderComponent($$result, "Nav", $$Nav, {})} ${errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-8">ERROR: ${errormsg}</div>`} ${success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-8">Success: ${success} ${newpassword}</div>`} ${renderComponent($$result, "Resources", $$Resources, {})} <section class="justify-center grid grid-cols-1 ml-2 mr-2 mb-8"> <div class="rounded-xl px-2.5 py-2"> <div class="row"><img class="h-32 w-full object-cover lg:h-48 rounded-xl" src="https://wallpaperaccess.com/full/4650672.jpg" alt=""></div> <div class="mx-auto max-w"> <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5"> <div class="flex"> <img class="h-24 w-24 rounded-full ring-2 ring-zinc-700 sm:h-32 sm:w-32"${addAttribute(avatar, "src")} alt="useravatar"> </div> <div class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"> <div class="mt-6 min-w-0 flex-1 sm:hidden md:block"> <h1 class="truncate text-2xl text-black font-bold dark:text-white">${username}</h1> </div> <div class="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"> ${adminstatus ? renderTemplate`<span class="px-2 py-1 m-1 bg-red-500 text-white rounded-lg">
Admin
</span>` : renderTemplate`<span class="px-2 py-1 m-1 bg-blue-500 text-white rounded-lg">
Member
</span>`} </div> </div> </div> </div> </div><br> <div class="flex items-center justify-between"> <form action="/api/user/passwordreset" method="POST" class="border w-full text-black dark:text-white duration-300 border-zinc-900 p-2 rounded-xl"> <div class="text-black dark:text-white justify-between"> <span>Username </span> <span class="mr-8"> <input class="form-input shadow-black shadow peer w-fit rounded-xl relative bg-transparent"${addAttribute(usernamev, "value")} disabled> </span><br> <span>Email </span> <span class="mr-8"> <input class="form-input shadow shadow-black peer min-w-90 max-w-sm rounded-xl relative bg-transparent"${addAttribute(emailv, "value")} disabled> </span> </div><br> <p>Hover to see your password</p> <div class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black w-full text-black dark:text-white duration-300 p-2 rounded-xl"> <input class="bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black opacity-0 hover:opacity-100 w-full text-black dark:text-white duration-300 p-2 rounded-xl"${addAttribute(password, "value")} disabled> </div> <button class="shadow shadow-black m-2 w-full rounded-lg text-black dark:text-white bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black 
">Click me if the password is wrong.</button> </form> </div> </section> ${renderComponent($$result, "Footer", $$Footer, {})} </main> </div> </div> <div class="md:hidden w-screen overflow-x-hidden animation-blob h-screen"> <div class="antialiased"> <main class="h-screen"> ${renderComponent($$result, "Mobnav", $$Mobnav, {})} ${errorstate && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-2 bg-red-700 alert mr-3 ml-3 mt-8">ERROR: ${errormsg}</div>`} ${success && renderTemplate`<div style="border-radius: 15px; color: white; height: 50px; text-align: center; font-size: large;" style="border-radius: 15px;" class="rounded-xl mb-1 bg-green-700 alert mr-3 ml-3 mt-8">Success: ${success}</div>`} ${renderComponent($$result, "Resources", $$Resources, {})}<br><br> <section class="flex justify-center grid grid-cols-1 m-4"> <div class="rounded-xl bg-zinc-300 dark:bg-zinc-900/50 px-2.5 py-2"> <div class="row"><img class="h-32 w-full object-cover lg:h-48 rounded-xl" src="https://wallpaperaccess.com/full/4650672.jpg" alt=""></div> <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"> <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5"> <div class="flex"> <img class="h-24 w-24 rounded-full ring-2 ring-zinc-700 sm:h-32 sm:w-32"${addAttribute(avatar, "src")} alt="useravatar"> </div> <div class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1"> <div class="mt-6 min-w-0 flex-1 sm:hidden md:block"> <h1 class="truncate text-2xl font-bold dark:text-white">${username}</h1> </div> <div class="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"> ${adminstatus ? renderTemplate`<span class="px-2 py-1 m-1 bg-red-500 dark:text-white rounded-lg">
Admin
</span>` : renderTemplate`<span class="px-2 py-1 m-1 bg-blue-500 dark:text-white rounded-lg">
Member
</span>`} </div> </div> </div> </div> </div><br> <div class="flex items-center justify-between"> <form action="/api/user/passwordreset" method="POST" class="bg-zinc-300 dark:bg-zinc-900/50w-full dark:text-white duration-300 border-zinc-900 p-2 rounded-xl"> <div class="dark:text-white justify-between"> <span>Username </span> <span class="mr-8"> <input class="form-input shadow shadow-black peer w-fit rounded-xl bg-transparent"${addAttribute(usernamev, "value")} disabled> </span><br> <span>Email </span> <span class="mr-8"> <input class="form-input shadow shadow-black peer min-w-70 max-w-sm rounded-xl bg-transparent"${addAttribute(emailv, "value")} disabled> </span> </div><br> <p>Hover to see your password</p> <div class="shadow shadow-black bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black  w-full dark:text-white duration-300 p-2 rounded-xl"> <input class="opacity-0 hover:opacity-100 bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black pb-2 w-full dark:text-white duration-300 p-2 rounded-xl"${addAttribute(password, "value")} disabled> </div> <button class="shadow shadow-black text-white w-full relative bg-gradient-to-r from-teal-300 via-blue-400 to-purple-300 dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-zinc-700 dark:via-zinc-900 dark:to-black font-medium rounded-full text-lg p-2 text-center">Click me if the password is wrong.</button> </form> </div> </section> ${renderComponent($$result, "Footer", $$Footer, {})} </main></div> </div> </body></html>`;
}, "D:/Klovit/KlovitCTest/src/pages/account.astro", void 0);

const $$file = "D:/Klovit/KlovitCTest/src/pages/account.astro";
const $$url = "/account";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Account,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
