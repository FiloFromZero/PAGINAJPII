import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_B5KEd8sc.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/admisiones.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/contacto.astro.mjs');
const _page5 = () => import('./pages/documentos-oficiales.astro.mjs');
const _page6 = () => import('./pages/homes/mobile-app.astro.mjs');
const _page7 = () => import('./pages/homes/personal.astro.mjs');
const _page8 = () => import('./pages/homes/saas.astro.mjs');
const _page9 = () => import('./pages/homes/startup.astro.mjs');
const _page10 = () => import('./pages/landing/click-through.astro.mjs');
const _page11 = () => import('./pages/landing/lead-generation.astro.mjs');
const _page12 = () => import('./pages/landing/pre-launch.astro.mjs');
const _page13 = () => import('./pages/landing/product.astro.mjs');
const _page14 = () => import('./pages/landing/sales.astro.mjs');
const _page15 = () => import('./pages/landing/subscription.astro.mjs');
const _page16 = () => import('./pages/nosotros.astro.mjs');
const _page17 = () => import('./pages/privacy.astro.mjs');
const _page18 = () => import('./pages/rss.xml.astro.mjs');
const _page19 = () => import('./pages/servicios.astro.mjs');
const _page20 = () => import('./pages/terms.astro.mjs');
const _page21 = () => import('./pages/_---blog_/_category_/_---page_.astro.mjs');
const _page22 = () => import('./pages/_---blog_/_tag_/_---page_.astro.mjs');
const _page23 = () => import('./pages/_---blog_/_---page_.astro.mjs');
const _page24 = () => import('./pages/index.astro.mjs');
const _page25 = () => import('./pages/_---blog_.astro.mjs');

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
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "3e0cf5f0-ccef-428f-8885-5b691176414d"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
