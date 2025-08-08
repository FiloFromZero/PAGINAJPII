import { d as createAstro, e as createComponent, m as maybeRenderHead, g as addAttribute, i as renderComponent, r as renderTemplate, u as unescapeHTML } from '../astro_CfJRq3Yt.mjs';
import 'kleur/colors';
import { d as $$Icon, $ as $$Button, b as $$PageLayout, e as $$HeroText, f as $$WhatsAppButton } from './admisiones_DsFyNX6Q.mjs';
import { $ as $$WidgetWrapper, a as $$Headline } from './click-through_D7_kWT5P.mjs';
import { twMerge } from 'tailwind-merge';
/* empty css                             */

const $$Astro$1 = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$ItemGrid2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ItemGrid2;
  const { items = [], columns, defaultIcon = "", classes = {} } = Astro2.props;
  const {
    container: containerClass = "",
    // container: containerClass = "sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary"
  } = classes;
  return renderTemplate`${items && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge(
    `grid gap-8 gap-x-12 sm:gap-y-8 ${columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2 " : ""}`,
    containerClass
  ), "class")}>${items.map(({ title, description, icon, callToAction, classes: itemClasses = {} }) => renderTemplate`<div${addAttribute(twMerge("relative flex flex-col", panelClass, itemClasses?.panel), "class")}>${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge("mb-2 w-10 h-10", defaultIconClass, itemClasses?.icon) })}`}<div${addAttribute(twMerge("text-xl font-bold", titleClass, itemClasses?.title), "class")}>${title}</div>${description && renderTemplate`<p${addAttribute(twMerge("text-muted mt-2", descriptionClass, itemClasses?.description), "class")}>${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div class="mt-2">${renderComponent($$result, "Button", $$Button, { ...callToAction })}</div>`}</div>`)}</div>`}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/ui/ItemGrid2.astro", void 0);

const $$Astro = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Features2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Features2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline = await Astro2.slots.render("tagline"),
    items = [],
    columns = 3,
    defaultIcon,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": classes?.headline })} ${renderComponent($$result2, "ItemGrid2", $$ItemGrid2, { "items": items, "columns": columns, "defaultIcon": defaultIcon, "classes": {
    container: "gap-4 md:gap-6",
    panel: "rounded-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur border border-[#ffffff29] bg-white dark:bg-slate-900 p-6",
    // panel:
    //   "text-center bg-page items-center md:text-left rtl:md:text-right md:items-start p-6 p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-800",
    icon: "w-12 h-12 mb-6 text-primary",
    ...classes?.items ?? {}
  } })} ` })}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/widgets/Features2.astro", void 0);

const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const metadata = {
    title: "Contacto"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata, "data-astro-cid-2mxdoeuz": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroText", $$HeroText, { "tagline": "Contacto", "title": "Trabaja Con Nosotros", "data-astro-cid-2mxdoeuz": true })} ${maybeRenderHead()}<section class="px-4 py-16 sm:px-6 lg:px-8 lg:py-20 bg-gray-50 dark:bg-slate-900" data-astro-cid-2mxdoeuz> <div class="max-w-2xl mx-auto" data-astro-cid-2mxdoeuz> <div class="text-center mb-10" data-astro-cid-2mxdoeuz> <h2 class="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 dark:text-white" data-astro-cid-2mxdoeuz>
Estamos a un mensaje de distancia
</h2> <p class="mt-4 text-lg text-gray-600 dark:text-slate-400" data-astro-cid-2mxdoeuz>
En el Instituto Psicopedagógico Juan Pablo II, valoramos la comunicación. ¡No dudes en contactarnos!
</p> </div> <form id="contact-form" class="space-y-6 bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg" novalidate data-astro-cid-2mxdoeuz> <div data-astro-cid-2mxdoeuz> <label for="name" class="block text-sm font-semibold text-gray-700 dark:text-gray-300" data-astro-cid-2mxdoeuz>Nombre</label> <input type="text" name="name" id="name" required class="input-field" data-astro-cid-2mxdoeuz> </div> <div data-astro-cid-2mxdoeuz> <label for="email" class="block text-sm font-semibold text-gray-700 dark:text-gray-300" data-astro-cid-2mxdoeuz>Correo Electrónico</label> <input type="email" name="email" id="email" required class="input-field" data-astro-cid-2mxdoeuz> </div> <div data-astro-cid-2mxdoeuz> <label for="message" class="block text-sm font-semibold text-gray-700 dark:text-gray-300" data-astro-cid-2mxdoeuz>Mensaje</label> <textarea id="message" name="message" rows="4" required class="input-field" data-astro-cid-2mxdoeuz></textarea> </div> <div data-astro-cid-2mxdoeuz> <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-2mxdoeuz>Adjunta tu Hoja de Vida</label> <div id="drop-area" data-astro-cid-2mxdoeuz> <div class="drop-content" data-astro-cid-2mxdoeuz> <svg class="upload-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2mxdoeuz> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-2mxdoeuz></path> <path d="M14 3v4a1 1 0 0 0 1 1h4" data-astro-cid-2mxdoeuz></path> <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" data-astro-cid-2mxdoeuz></path> <path d="M12 11v6" data-astro-cid-2mxdoeuz></path> <path d="M9 14l3 -3l3 3" data-astro-cid-2mxdoeuz></path> </svg> <p class="font-semibold" data-astro-cid-2mxdoeuz>Arrastra y suelta tu archivo PDF aquí</p> <p class="text-sm text-gray-500 dark:text-slate-400" data-astro-cid-2mxdoeuz>o</p> <button type="button" id="select-btn" data-astro-cid-2mxdoeuz>Selecciona un archivo</button> </div> <input type="file" name="cv" id="cv" accept="application/pdf" class="hidden" required data-astro-cid-2mxdoeuz> </div> <div id="feedback-container" class="mt-3 text-sm" data-astro-cid-2mxdoeuz></div> </div> <div class="pt-4" data-astro-cid-2mxdoeuz> <button type="submit" class="btn-submit w-full" data-astro-cid-2mxdoeuz>Enviar Mensaje</button> </div> </form> </div> </section> ${renderComponent($$result2, "Features2", $$Features2, { "title": "\xA1Estamos aqu\xED para ayudar!", "columns": 3, "items": [
    { title: "Tel\xE9fono", description: "(+57) 8545966", icon: "tabler:headset" },
    { title: "Whatsapp", description: "(+57) 319 6721410", icon: "tabler:brand-whatsapp" },
    {
      title: "Ubicaci\xF3n",
      description: "Carrera 7# 13 \u2013 34 | Soacha \u2013 Cundinamarca | Barrio Villa Flor",
      icon: "tabler:map-pin"
    }
  ], "data-astro-cid-2mxdoeuz": true })} ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, { "phoneNumber": "573196721410", "message": "Hola, estoy interesado en sus servicios.", "data-astro-cid-2mxdoeuz": true })} ` })}  `;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/pages/contacto.astro";
const $$url = "/contacto";

const contacto = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Features2 as $, contacto as c };
