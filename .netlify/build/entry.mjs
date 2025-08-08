import { renderers } from './renderers.mjs';
import { manifest } from './manifest_BbHXy2pn.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_Q9RCgyL5.mjs');
const _page1 = () => import('./chunks/404_DbjJN_Lp.mjs');
const _page2 = () => import('./chunks/admisiones_CQp6ragG.mjs');
const _page3 = () => import('./chunks/contact_BikNFHJ3.mjs');
const _page4 = () => import('./chunks/contacto_BfMr5uDr.mjs');
const _page5 = () => import('./chunks/documentos-oficiales_DJhhR92-.mjs');
const _page6 = () => import('./chunks/mobile-app_xmdnGWu4.mjs');
const _page7 = () => import('./chunks/personal_C9wvDJKy.mjs');
const _page8 = () => import('./chunks/saas_Gm521MW2.mjs');
const _page9 = () => import('./chunks/startup_BQhTjjfi.mjs');
const _page10 = () => import('./chunks/click-through_2Gxci6Q-.mjs');
const _page11 = () => import('./chunks/lead-generation_DFDRYcRE.mjs');
const _page12 = () => import('./chunks/pre-launch_CVYY8tJE.mjs');
const _page13 = () => import('./chunks/product_hlaNqY0d.mjs');
const _page14 = () => import('./chunks/sales_BiBFHU3T.mjs');
const _page15 = () => import('./chunks/subscription_BuuzpSsr.mjs');
const _page16 = () => import('./chunks/nosotros_BgYi45um.mjs');
const _page17 = () => import('./chunks/privacy_C2Swu7Dn.mjs');
const _page18 = () => import('./chunks/rss_BEnAc9LH.mjs');
const _page19 = () => import('./chunks/servicios_BC_zQhQi.mjs');
const _page20 = () => import('./chunks/terms_CkGIrsZn.mjs');
const _page21 = () => import('./chunks/_.._BkK8RQfd.mjs');
const _page22 = () => import('./chunks/_.._DUhngKhY.mjs');
const _page23 = () => import('./chunks/_.._DE_p4BAP.mjs');
const _page24 = () => import('./chunks/index_DmYx3BTy.mjs');
const _page25 = () => import('./chunks/index_YnPl58T4.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/admisiones.astro", _page2],
    ["src/pages/api/contact.ts", _page3],
    ["src/pages/contacto.astro", _page4],
    ["src/pages/documentos-oficiales.astro", _page5],
    ["src/pages/homes/mobile-app.astro", _page6],
    ["src/pages/homes/personal.astro", _page7],
    ["src/pages/homes/saas.astro", _page8],
    ["src/pages/homes/startup.astro", _page9],
    ["src/pages/landing/click-through.astro", _page10],
    ["src/pages/landing/lead-generation.astro", _page11],
    ["src/pages/landing/pre-launch.astro", _page12],
    ["src/pages/landing/product.astro", _page13],
    ["src/pages/landing/sales.astro", _page14],
    ["src/pages/landing/subscription.astro", _page15],
    ["src/pages/nosotros.astro", _page16],
    ["src/pages/privacy.md", _page17],
    ["src/pages/rss.xml.ts", _page18],
    ["src/pages/servicios.astro", _page19],
    ["src/pages/terms.md", _page20],
    ["src/pages/[...blog]/[category]/[...page].astro", _page21],
    ["src/pages/[...blog]/[tag]/[...page].astro", _page22],
    ["src/pages/[...blog]/[...page].astro", _page23],
    ["src/pages/index.astro", _page24],
    ["src/pages/[...blog]/index.astro", _page25]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "15cde415-0672-4079-8893-ae9875101ea8"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
