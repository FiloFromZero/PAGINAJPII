import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_HJvi1lLk.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_DssI5ubI.mjs';
import { $ as $$HeroText } from '../chunks/HeroText_3ynMsYKk.mjs';
import { $ as $$Features2 } from '../chunks/Features2_DFgPp2nM.mjs';
import { $ as $$WhatsAppButton } from '../chunks/WhatsAppButton_VNND6H6S.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(async ($$result, $$props, $$slots) => {
  const metadata = {
    title: "Contacto"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata, "data-astro-cid-2mxdoeuz": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroText", $$HeroText, { "tagline": "Contacto", "title": "Trabaja Con Nosotros", "data-astro-cid-2mxdoeuz": true })} ${maybeRenderHead()}<section class="px-4 py-16 sm:px-6 lg:px-8 lg:py-20 bg-gradient-subtle" data-astro-cid-2mxdoeuz> <div class="max-w-2xl mx-auto" data-astro-cid-2mxdoeuz> <div class="text-center mb-10" data-astro-cid-2mxdoeuz> <h2 class="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" data-astro-cid-2mxdoeuz>
Estamos a un mensaje de distancia
</h2> <p class="mt-4 text-lg text-muted" data-astro-cid-2mxdoeuz>
En el Instituto Psicopedagógico Juan Pablo II, valoramos la comunicación. ¡No dudes en contactarnos!
</p> </div> <form id="contact-form" class="space-y-6 bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-soft hover:shadow-large transition-all duration-300" novalidate data-astro-cid-2mxdoeuz> <div data-astro-cid-2mxdoeuz> <label for="name" class="block text-sm font-semibold text-gray-700 dark:text-gray-300" data-astro-cid-2mxdoeuz>Nombre</label> <input type="text" name="name" id="name" required class="input-field" data-astro-cid-2mxdoeuz> </div> <div data-astro-cid-2mxdoeuz> <label for="email" class="block text-sm font-semibold text-gray-700 dark:text-gray-300" data-astro-cid-2mxdoeuz>Correo Electrónico</label> <input type="email" name="email" id="email" required class="input-field" data-astro-cid-2mxdoeuz> </div> <div data-astro-cid-2mxdoeuz> <label for="message" class="block text-sm font-semibold text-gray-700 dark:text-gray-300" data-astro-cid-2mxdoeuz>Mensaje</label> <textarea id="message" name="message" rows="4" required class="input-field" data-astro-cid-2mxdoeuz></textarea> </div> <div data-astro-cid-2mxdoeuz> <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2" data-astro-cid-2mxdoeuz>Adjunta tu Hoja de Vida</label> <div id="drop-area" data-astro-cid-2mxdoeuz> <div class="drop-content" data-astro-cid-2mxdoeuz> <svg class="upload-icon" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-2mxdoeuz> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-2mxdoeuz></path> <path d="M14 3v4a1 1 0 0 0 1 1h4" data-astro-cid-2mxdoeuz></path> <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" data-astro-cid-2mxdoeuz></path> <path d="M12 11v6" data-astro-cid-2mxdoeuz></path> <path d="M9 14l3 -3l3 3" data-astro-cid-2mxdoeuz></path> </svg> <p class="font-semibold" data-astro-cid-2mxdoeuz>Arrastra y suelta tu archivo PDF aquí</p> <p class="text-sm text-gray-500 dark:text-slate-400" data-astro-cid-2mxdoeuz>o</p> <button type="button" id="select-btn" data-astro-cid-2mxdoeuz>Selecciona un archivo</button> </div> <input type="file" name="cv" id="cv" accept="application/pdf" class="hidden" required data-astro-cid-2mxdoeuz> </div> <div id="feedback-container" class="mt-3 text-sm" data-astro-cid-2mxdoeuz></div> </div> <div class="pt-4" data-astro-cid-2mxdoeuz> <button type="submit" class="btn-submit w-full" data-astro-cid-2mxdoeuz>Enviar Mensaje</button> </div> </form> </div> </section>  <div id="toast-container" class="fixed top-4 right-4 z-50 space-y-2" data-astro-cid-2mxdoeuz></div> ${renderComponent($$result2, "Features2", $$Features2, { "title": "\xA1Estamos aqu\xED para ayudar!", "columns": 3, "items": [
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
