import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_HJvi1lLk.mjs';
import 'kleur/colors';
import { $ as $$PageLayout } from '../chunks/PageLayout_DssI5ubI.mjs';
import { $ as $$HeroText } from '../chunks/HeroText_3ynMsYKk.mjs';
import { $ as $$Icon } from '../chunks/ToggleTheme_CSDC6GRN.mjs';
import { $ as $$WhatsAppButton } from '../chunks/WhatsAppButton_VNND6H6S.mjs';
export { renderers } from '../renderers.mjs';

const $$Admisiones = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Admisiones"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeroText", $$HeroText, { "tagline": "2026", "title": "Admisiones" })}  ${maybeRenderHead()}<div class="flex flex-col backdrop-blur bg-white border dark:bg-slate-900 rounded-lg border-gray-200 dark:border-gray-700 lg:p-8 max-w-[80vw] mx-auto p-4 shadow sm:p-6 w-full mb-8"> <div class="flex flex-col gap-8"> <div> <h2 class="text-2xl font-bold mb-4 text-center">Prospecto Institucional 2026</h2> <div style="position: relative; width: 100%; padding-bottom: 141.4%; /* A4 Aspect Ratio */"> <iframe src="/files/PROSPECTO_INSTITUCIONAL_2026.pdf#toolbar=0&navpanes=0" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" loading="lazy" class="border rounded-lg"></iframe> </div> <div class="flex justify-center mt-4"> <a href="/files/PROSPECTO_INSTITUCIONAL_2026.pdf" download="PROSPECTO_INSTITUCIONAL_2026.pdf" class="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:download", "class": "w-6 h-6" })}
Descargar PDF
</a> </div> </div> <div class="flex flex-row gap-4 items-center justify-center"> ${renderComponent($$result2, "Icon", $$Icon, { "name": "flat-color-icons:graduation-cap", "class": "w-10 h-10" })} <a href="https://www.iejuanpabloii.notas.zigmadatos.org/index.php/admisiones-2024" title="PROGRAMA DE NOTAS" class="text-blue-500 hover:underline">FORMULARIO PARA ESTUDIANTES NUEVOS (ZIGMA)</a> </div> </div> </div> ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, { "phoneNumber": "573196721410", "message": "Hola, estoy interesado en sus servicios." })} ` })}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/pages/admisiones.astro", void 0);

const $$file = "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/pages/admisiones.astro";
const $$url = "/admisiones";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admisiones,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
