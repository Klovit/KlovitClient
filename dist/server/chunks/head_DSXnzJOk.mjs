import { c as createAstro, a as createComponent, r as renderTemplate, e as renderHead, b as addAttribute } from './astro/server_DVPt8aZD.mjs';
import 'kleur/colors';
import 'clsx';
import { d as db, c as config } from './config_CuAv1651.mjs';
/* empty css                         */
import dotenv from 'dotenv';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://localhost:8081");
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Head;
  dotenv.config();
  const installed = await db.get("installed");
  if (installed != true) {
    return Astro2.redirect(`/installer/start`);
  }
  const year = (/* @__PURE__ */ new Date()).getFullYear().toString();
  `${year} ${config.name}`;
  let PAGE;
  const pagepath = Astro2.url.pathname;
  if (pagepath === "/dashboard") {
    PAGE = "Dashboard";
  }
  if (pagepath === "/create") {
    PAGE = "Create";
  }
  if (pagepath === "/edit") {
    PAGE = "Edit";
  }
  if (pagepath === "/store") {
    PAGE = "Store";
  }
  if (pagepath === "/economy") {
    PAGE = "Economy";
  }
  if (pagepath === "/account") {
    PAGE = "Account";
  }
  if (pagepath === "/gift") {
    PAGE = "Gift";
  }
  if (pagepath === "/buy") {
    PAGE = "Buy";
  }
  if (pagepath === "/admin/home") {
    PAGE = "Admin | Home";
  }
  if (pagepath === "/admin/coins") {
    PAGE = "Admin | Coins";
  }
  if (pagepath === "/admin/resources") {
    PAGE = "Admin | Resources";
  }
  if (pagepath === "/admin/packages") {
    PAGE = "Admin | Packages";
  }
  if (pagepath === "/") {
    PAGE = "Home";
  }
  if (pagepath === "/signin") {
    PAGE = "Login";
  }
  if (pagepath === "/register") {
    PAGE = "Register";
  }
  if (pagepath === "/delete") {
    PAGE = "Delete Server";
  }
  return renderTemplate(_a || (_a = __template(['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><meta name="description"', '><meta name="keywords"', '><meta name="author"', '><meta name="copyright"', '><meta property="og:type"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta name="twitter:card"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:image:src"', "><title>", " | ", '</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"><link', ' rel="icon"><script rel="preconnect" src="https://cdn.tailwindcss.com"><\/script><script rel="preconnect" src="https://kit.fontawesome.com/24f3705531.js" crossorigin="anonymous"><\/script><script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/flowbite.min.js"><\/script>', "</head>"])), addAttribute(`${config.website.description} | Powered by KlovitClient.`, "content"), addAttribute(`KlovitClient, Hosting, Klovit, Freemium Minecraft Hosting, ${config.name}, Cloud, Minecraft, Servers, Free Servers, Hostings that use KlovitClient`, "content"), addAttribute(`Klovit`, "content"), addAttribute(`${config.name}`, "content"), addAttribute(`website`, "content"), addAttribute(`${config.name}`, "content"), addAttribute(`${config.website.description} | Powered by KlovitClient`, "content"), addAttribute(`${config.website.icon}`, "content"), addAttribute(`${config.website.icon}`, "content"), addAttribute(`${config.name}`, "content"), addAttribute(`${config.website.description} | Powered by KlovitClient`, "content"), addAttribute(`${config.website.icon}`, "content"), addAttribute(`${config.website.icon}`, "content"), config.name, PAGE, addAttribute(config.website.icon, "href"), renderHead());
}, "D:/Klovit/KlovitCTest/src/components/head.astro", void 0);

export { $$Head as $ };
