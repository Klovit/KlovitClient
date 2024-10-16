import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, e as renderHead, b as addAttribute } from '../../chunks/astro/server_DVPt8aZD.mjs';
import 'kleur/colors';
/* empty css                                    */
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger } from '@radix-ui/react-navigation-menu';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { ChevronRight, Check, Circle, Sun, Moon, AlertCircle } from 'lucide-react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { d as db } from '../../chunks/config_CuAv1651.mjs';
import { $ as $$Footer } from '../../chunks/footer_Cf8FsmdQ.mjs';
export { renderers } from '../../renderers.mjs';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto h-4 w-4" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

function ModeToggle() {
  const [theme, setThemeState] = React.useState("theme-light");
  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);
  React.useEffect(() => {
    const isDark = theme === "dark" || theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "icon", children: [
      /* @__PURE__ */ jsx(Sun, { className: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" }),
      /* @__PURE__ */ jsx(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle theme" })
    ] }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setThemeState("theme-light"), children: "Light" }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setThemeState("dark"), children: "Dark" }),
      /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setThemeState("system"), children: "System" })
    ] })
  ] });
}

function NavigationMenuComponent() {
  return /* @__PURE__ */ jsxs("header", { className: "flex justify-between items-center p-4", children: [
    /* @__PURE__ */ jsx(NavigationMenu, { children: /* @__PURE__ */ jsx(NavigationMenuList, { children: /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx(NavigationMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx(
      "img",
      {
        className: "ml-4",
        src: "https://docs.klovit.tech/img/Klovit%20Logo.png",
        height: 30,
        width: 40,
        alt: "icon"
      }
    ) }) }) }) }) }),
    /* @__PURE__ */ jsx("h1", { className: "text-xl", children: "Start Installing" }),
    /* @__PURE__ */ jsx(ModeToggle, {})
  ] });
}

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Alert = React.forwardRef(({ className, variant, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    role: "alert",
    className: cn(alertVariants({ variant }), className),
    ...props
  }
));
Alert.displayName = "Alert";
const AlertTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h5",
  {
    ref,
    className: cn("mb-1 font-medium leading-none tracking-tight", className),
    ...props
  }
));
AlertTitle.displayName = "AlertTitle";
const AlertDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("text-sm [&_p]:leading-relaxed", className),
    ...props
  }
));
AlertDescription.displayName = "AlertDescription";

const ErrorAlert = () => {
  const [error, setError] = useState(null);
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const errorMessage = searchParams.get("error");
    setError(errorMessage);
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: error && /* @__PURE__ */ jsxs(Alert, { className: "ml-4 p-4", variant: "destructive", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx(AlertTitle, { children: "Error" })
    ] }),
    /* @__PURE__ */ jsxs(AlertDescription, { children: [
      error,
      "."
    ] })
  ] }) });
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://localhost:8081");
const $$Start = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Start;
  const installed = await db.get("installed");
  if (installed === true) {
    return Astro2.redirect(`/?error=KlovitClient is already installed.`);
  }
  function makeid(length) {
    let result = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#";
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  let newstarttoken = null;
  newstarttoken = makeid(8);
  let starttoken;
  const oldstarttoken = await db.get("starttoken");
  if (oldstarttoken) {
    starttoken = oldstarttoken;
  } else {
    starttoken = newstarttoken;
  }
  await db.set("starttoken", starttoken);
  console.log(`Your token to start the installation is: ${starttoken}`);
  const error = Astro2.url.searchParams.get("error") || "";
  (/* @__PURE__ */ new Date()).getFullYear().toString();
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><meta name="description"', '><meta name="keywords"', '><meta name="author"', '><meta name="copyright"', '><meta property="og:type"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta name="twitter:card"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:image:src"', '><title>KlovitClient | Start Installation</title><link href="https://docs.klovit.tech/img/Klovit%20Logo.png" rel="icon"><script rel="preconnect" src="https://kit.fontawesome.com/cf4342c927.js" crossorigin="anonymous"><\/script>', '</head> <body class="h-full min-h-screen relative"> <div class="hidden md:block animation-blob h-screen w-screen"> <div class="antialiased"> <main class="h-full"> ', ` <script>
                        const getThemePreference = () => {
                            if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                                return localStorage.getItem('theme');
                            }
                            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                        };
                        const isDark = getThemePreference() === 'dark';
                        document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
                     
                        if (typeof localStorage !== 'undefined') {
                            const observer = new MutationObserver(() => {
                                const isDark = document.documentElement.classList.contains('dark');
                                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                            });
                            observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
                        }
                    <\/script> <div class="mr-10"> `, ' </div> <section class="min-h-screen"> <!-- Container for top colored section --> <div class="grid min-h-screen min-w-screen grid-cols-1 grid-rows-2"> <!-- Top colored section --> <!-- Centered box that overlaps the top section --> <!-- Bottom white section --> </div> </section> ', ` </main></div> </div> <div class="md:hidden overflow-x-hidden h-screen w-screen"> <div class="antialiased"> <main class="h-full"> <div class="absolute h-12 w-full z-10 bg-[#6473e1] dark:bg-[#10143c] grid grid-cols-2"> <img class="mt-2" src="https://docs.klovit.tech/img/Klovit%20Logo.png" height="30px" width="40px" alt="icon"> <div class="grid place-items-end"><button aria-label="theme-switcher" id="theme-togglea" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"> <svg id="theme-toggle-dark-icona" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> <svg id="theme-toggle-light-icona" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path> </svg> </button></div> </div> <script>
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
                          <\/script> `, ' <section class="min-h-screen"> <!-- Container for top colored section --> <div class="grid min-h-screen min-w-screen grid-cols-1 grid-rows-2"> <!-- Top colored section --> <div class="bg-[#6473e1] dark:bg-[#10143c]"></div> <!-- Centered box that overlaps the top section --> <div class="absolute bg-white dark:bg-[#181c44] shadow-xl shadow-gray-400 dark:shadow-gray-900 self-center rounded-lg z-10"> <form class="grid grid-cols-1 p-1" action="/installer/website" method="GET"> <h2 class="text-black text-center dark:text-white text-2xl font-bold">Start Installing KlovitClient</h2> <h1 class="text-black dark:text-white text-md ">Check your console for a token to start the installation.</h1> <input id="token" name="token" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]" placeholder="Input your token."> <button type="submit" class="mt-2 bg-[#6473e1] dark:bg-[#10143c] p-2 rounded-xl text-white">Start!</button> </form> </div> <!-- Bottom white section --> <div class="bg-white dark:bg-[#181c44] p-8"></div> </div> </section> ', " </main></div> </div> </body></html>"], ['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"><meta name="description"', '><meta name="keywords"', '><meta name="author"', '><meta name="copyright"', '><meta property="og:type"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta name="twitter:card"', '><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><meta name="twitter:image:src"', '><title>KlovitClient | Start Installation</title><link href="https://docs.klovit.tech/img/Klovit%20Logo.png" rel="icon"><script rel="preconnect" src="https://kit.fontawesome.com/cf4342c927.js" crossorigin="anonymous"><\/script>', '</head> <body class="h-full min-h-screen relative"> <div class="hidden md:block animation-blob h-screen w-screen"> <div class="antialiased"> <main class="h-full"> ', ` <script>
                        const getThemePreference = () => {
                            if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                                return localStorage.getItem('theme');
                            }
                            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                        };
                        const isDark = getThemePreference() === 'dark';
                        document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
                     
                        if (typeof localStorage !== 'undefined') {
                            const observer = new MutationObserver(() => {
                                const isDark = document.documentElement.classList.contains('dark');
                                localStorage.setItem('theme', isDark ? 'dark' : 'light');
                            });
                            observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
                        }
                    <\/script> <div class="mr-10"> `, ' </div> <section class="min-h-screen"> <!-- Container for top colored section --> <div class="grid min-h-screen min-w-screen grid-cols-1 grid-rows-2"> <!-- Top colored section --> <!-- Centered box that overlaps the top section --> <!-- Bottom white section --> </div> </section> ', ` </main></div> </div> <div class="md:hidden overflow-x-hidden h-screen w-screen"> <div class="antialiased"> <main class="h-full"> <div class="absolute h-12 w-full z-10 bg-[#6473e1] dark:bg-[#10143c] grid grid-cols-2"> <img class="mt-2" src="https://docs.klovit.tech/img/Klovit%20Logo.png" height="30px" width="40px" alt="icon"> <div class="grid place-items-end"><button aria-label="theme-switcher" id="theme-togglea" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"> <svg id="theme-toggle-dark-icona" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path> </svg> <svg id="theme-toggle-light-icona" class="w-5 h-5 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path> </svg> </button></div> </div> <script>
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
                          <\/script> `, ' <section class="min-h-screen"> <!-- Container for top colored section --> <div class="grid min-h-screen min-w-screen grid-cols-1 grid-rows-2"> <!-- Top colored section --> <div class="bg-[#6473e1] dark:bg-[#10143c]"></div> <!-- Centered box that overlaps the top section --> <div class="absolute bg-white dark:bg-[#181c44] shadow-xl shadow-gray-400 dark:shadow-gray-900 self-center rounded-lg z-10"> <form class="grid grid-cols-1 p-1" action="/installer/website" method="GET"> <h2 class="text-black text-center dark:text-white text-2xl font-bold">Start Installing KlovitClient</h2> <h1 class="text-black dark:text-white text-md ">Check your console for a token to start the installation.</h1> <input id="token" name="token" class="text-white placeholder-gray-300 rounded-xl p-2 bg-[#6473e1] dark:bg-[#10143c]" placeholder="Input your token."> <button type="submit" class="mt-2 bg-[#6473e1] dark:bg-[#10143c] p-2 rounded-xl text-white">Start!</button> </form> </div> <!-- Bottom white section --> <div class="bg-white dark:bg-[#181c44] p-8"></div> </div> </section> ', " </main></div> </div> </body></html>"])), addAttribute(`KlovitClient installer`, "content"), addAttribute(`KlovitClient, Hosting, Klovit, Freemium Minecraft Hosting, Installer, Cloud, Minecraft, Servers, Free Servers, Hostings that use KlovitClient`, "content"), addAttribute(`Klovit`, "content"), addAttribute(`KlovitClient`, "content"), addAttribute(`website`, "content"), addAttribute(`KlovitClient`, "content"), addAttribute(`KlovitClient installer`, "content"), addAttribute(`https://docs.klovit.tech/img/Klovit%20Logo.png`, "content"), addAttribute(`https://docs.klovit.tech/img/Klovit%20Logo.png`, "content"), addAttribute(`KlovitClient`, "content"), addAttribute(`KlovitClient installer`, "content"), addAttribute(`https://docs.klovit.tech/img/Klovit%20Logo.png`, "content"), addAttribute(`https://docs.klovit.tech/img/Klovit%20Logo.png`, "content"), renderHead(), renderComponent($$result, "NavigationMenuComponent", NavigationMenuComponent, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/installer/NavigationMenu", "client:component-export": "default" }), renderComponent($$result, "ErrorAlert", ErrorAlert, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/ErrorAlert", "client:component-export": "default" }), renderComponent($$result, "Footer", $$Footer, {}), error && renderTemplate`<div class="flex justify-center"> <div class="absolute mt-14 bg-[#6473e1] dark:bg-[#10143c] w-fit z-10"> <div class="p-4 rounded-xl bg-red-700 text-white self-center mr-6 ml-4">
ERROR: ${error} </div> </div> </div>`, renderComponent($$result, "Footer", $$Footer, {}));
}, "D:/Klovit/KlovitCTest/src/pages/installer/start.astro", void 0);

const $$file = "D:/Klovit/KlovitCTest/src/pages/installer/start.astro";
const $$url = "/installer/start";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Start,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
