import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DcrRC_yJ.mjs';
import { manifest } from './manifest_DMi0HWeQ.mjs';
import { onRequest } from './_astro-internal_middleware.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/account.astro.mjs');
const _page3 = () => import('./pages/admin/coins.astro.mjs');
const _page4 = () => import('./pages/admin/home.astro.mjs');
const _page5 = () => import('./pages/admin/packages.astro.mjs');
const _page6 = () => import('./pages/admin/resources.astro.mjs');
const _page7 = () => import('./pages/api/admin/addcoins.astro.mjs');
const _page8 = () => import('./pages/api/admin/addres.astro.mjs');
const _page9 = () => import('./pages/api/admin/removecoins.astro.mjs');
const _page10 = () => import('./pages/api/admin/removeres.astro.mjs');
const _page11 = () => import('./pages/api/admin/setcoins.astro.mjs');
const _page12 = () => import('./pages/api/admin/setpackage.astro.mjs');
const _page13 = () => import('./pages/api/auth/callback.astro.mjs');
const _page14 = () => import('./pages/api/auth/register.astro.mjs');
const _page15 = () => import('./pages/api/auth/signin.astro.mjs');
const _page16 = () => import('./pages/api/auth/signout.astro.mjs');
const _page17 = () => import('./pages/api/economy/links/generate/atglinks.astro.mjs');
const _page18 = () => import('./pages/api/economy/links/redeem/atglinks/_code_.astro.mjs');
const _page19 = () => import('./pages/api/installer/finish.astro.mjs');
const _page20 = () => import('./pages/api/installer/packages.astro.mjs');
const _page21 = () => import('./pages/api/installer/website.astro.mjs');
const _page22 = () => import('./pages/api/store/buy/coins.astro.mjs');
const _page23 = () => import('./pages/api/store/buy/cpu.astro.mjs');
const _page24 = () => import('./pages/api/store/buy/disk.astro.mjs');
const _page25 = () => import('./pages/api/store/buy/plan/buy.astro.mjs');
const _page26 = () => import('./pages/api/store/buy/plan/cancel.astro.mjs');
const _page27 = () => import('./pages/api/store/buy/ram.astro.mjs');
const _page28 = () => import('./pages/api/store/buy/slots.astro.mjs');
const _page29 = () => import('./pages/api/user/gift.astro.mjs');
const _page30 = () => import('./pages/api/user/passwordreset.astro.mjs');
const _page31 = () => import('./pages/create.astro.mjs');
const _page32 = () => import('./pages/dashboard.astro.mjs');
const _page33 = () => import('./pages/delete.astro.mjs');
const _page34 = () => import('./pages/economy.astro.mjs');
const _page35 = () => import('./pages/edit.astro.mjs');
const _page36 = () => import('./pages/gift.astro.mjs');
const _page37 = () => import('./pages/installer/currency.astro.mjs');
const _page38 = () => import('./pages/installer/packages.astro.mjs');
const _page39 = () => import('./pages/installer/start.astro.mjs');
const _page40 = () => import('./pages/installer/website.astro.mjs');
const _page41 = () => import('./pages/panel.astro.mjs');
const _page42 = () => import('./pages/register.astro.mjs');
const _page43 = () => import('./pages/server/create.astro.mjs');
const _page44 = () => import('./pages/server/delete.astro.mjs');
const _page45 = () => import('./pages/server/edit.astro.mjs');
const _page46 = () => import('./pages/server/manage/console.astro.mjs');
const _page47 = () => import('./pages/signin.astro.mjs');
const _page48 = () => import('./pages/store.astro.mjs');
const _page49 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/account.astro", _page2],
    ["src/pages/admin/coins.astro", _page3],
    ["src/pages/admin/home.astro", _page4],
    ["src/pages/admin/packages.astro", _page5],
    ["src/pages/admin/resources.astro", _page6],
    ["src/pages/api/admin/addcoins.ts", _page7],
    ["src/pages/api/admin/addres.ts", _page8],
    ["src/pages/api/admin/removecoins.ts", _page9],
    ["src/pages/api/admin/removeres.ts", _page10],
    ["src/pages/api/admin/setcoins.ts", _page11],
    ["src/pages/api/admin/setpackage.ts", _page12],
    ["src/pages/api/auth/callback.ts", _page13],
    ["src/pages/api/auth/register.ts", _page14],
    ["src/pages/api/auth/signin.ts", _page15],
    ["src/pages/api/auth/signout.ts", _page16],
    ["src/pages/api/economy/links/generate/atglinks.ts", _page17],
    ["src/pages/api/economy/links/redeem/atglinks/[code].astro", _page18],
    ["src/pages/api/installer/finish.ts", _page19],
    ["src/pages/api/installer/packages.ts", _page20],
    ["src/pages/api/installer/website.ts", _page21],
    ["src/pages/api/store/buy/coins.ts", _page22],
    ["src/pages/api/store/buy/cpu.ts", _page23],
    ["src/pages/api/store/buy/disk.ts", _page24],
    ["src/pages/api/store/buy/plan/buy.ts", _page25],
    ["src/pages/api/store/buy/plan/cancel.ts", _page26],
    ["src/pages/api/store/buy/ram.ts", _page27],
    ["src/pages/api/store/buy/slots.ts", _page28],
    ["src/pages/api/user/gift.ts", _page29],
    ["src/pages/api/user/passwordreset.ts", _page30],
    ["src/pages/create.astro", _page31],
    ["src/pages/dashboard.astro", _page32],
    ["src/pages/delete.astro", _page33],
    ["src/pages/economy.astro", _page34],
    ["src/pages/edit.astro", _page35],
    ["src/pages/gift.astro", _page36],
    ["src/pages/installer/currency.astro", _page37],
    ["src/pages/installer/packages.astro", _page38],
    ["src/pages/installer/start.astro", _page39],
    ["src/pages/installer/website.astro", _page40],
    ["src/pages/panel.astro", _page41],
    ["src/pages/register.astro", _page42],
    ["src/pages/server/create.ts", _page43],
    ["src/pages/server/delete.ts", _page44],
    ["src/pages/server/edit.ts", _page45],
    ["src/pages/server/manage/console.astro", _page46],
    ["src/pages/signin.astro", _page47],
    ["src/pages/store.astro", _page48],
    ["src/pages/index.astro", _page49]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "mode": "standalone",
    "client": "file:///D:/Klovit/KlovitCTest/dist/client/",
    "server": "file:///D:/Klovit/KlovitCTest/dist/server/",
    "host": true,
    "port": 8081,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
