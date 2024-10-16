import { a as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_DVPt8aZD.mjs';
import 'kleur/colors';
import 'clsx';
import { c as config } from './config_CuAv1651.mjs';
/* empty css                         */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const website = config.website ?? {};
  website.icon ?? "https://docs.klovit.tech/img/Klovit%20Logo.png";
  website.description ?? "KlovitClient";
  const hostname = website.name ?? "KlovitClient";
  const year = (/* @__PURE__ */ new Date()).getFullYear().toString();
  const yearWithTitle = `${year} ${hostname}`;
  return renderTemplate(_a || (_a = __template(["", '<footer class="mt-5 text-black dark:text-white hidden md:flex fixed bottom-0 w-screen px-4 py-2 items-center justify-between"> <div class="copyright text-start">\n&copy; Copyright ', ' | Powered by <a class="text-red-500" href="https://github.com/klovit/klovitlclient">KlovitClient</a> </div> <div class="text-end"> <span id="loadtime"></span> </div> </footer> <script type="text/javascript">  \n                        var before_loadtime = new Date().getTime();  \n                        window.onload = Pageloadtime;  \n                        function Pageloadtime() {  \n                            var aftr_loadtime = new Date().getTime();  \n                            // Time calculating in seconds  \n                            pgloadtime = (aftr_loadtime - before_loadtime) / 1000  \n                            document.getElementById("loadtime").innerHTML = pgloadtime + "s";\n                        }  \n                   <\/script>'])), maybeRenderHead(), yearWithTitle);
}, "D:/Klovit/KlovitCTest/src/components/footer.astro", void 0);

export { $$Footer as $ };
