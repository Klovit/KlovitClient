import { c as createAstro, a as createComponent } from '../chunks/astro/server_DVPt8aZD.mjs';
import 'kleur/colors';
import 'clsx';
import { c as config } from '../chunks/config_CuAv1651.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("http://localhost:8081");
const $$Panel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Panel;
  config.pterodactyl.url ?? "/404";
  return Astro2.redirect(config.pterodactyl.url);
}, "D:/Klovit/KlovitCTest/src/pages/panel.astro", void 0);

const $$file = "D:/Klovit/KlovitCTest/src/pages/panel.astro";
const $$url = "/panel";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Panel,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
