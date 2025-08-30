import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_HJvi1lLk.mjs';
import 'kleur/colors';
import { $ as $$Icon } from './ToggleTheme_CSDC6GRN.mjs';
import { $ as $$Image } from './Logo_DouzFt2M.mjs';
import { $ as $$Headline } from './Headline_Clx8yRrO.mjs';
import { $ as $$WidgetWrapper } from './WidgetWrapper_Dt2E1TM3.mjs';

const $$Astro = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Brands = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Brands;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    icons = [],
    images = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-6 items-center justify-items-center"> ${icons && icons.map((icon, index) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": `py-4 lg:py-6 w-14 h-auto mx-auto sm:mx-0 text-primary hover:text-secondary transition-all duration-300 icon-bounce icon-glow stagger-${index % 8 + 1} animate-fade-in-up` })}`)} ${images && images.map(
    (image, index) => image.src && renderTemplate`<div${addAttribute(`card flex items-center justify-center p-4 rounded-xl dark:card-dark cursor-pointer h-full hover-lift hover-glow micro-bounce stagger-${index % 8 + 1} animate-bounce-in`, "class")}> ${renderComponent($$result2, "Image", $$Image, { "src": image.src, "alt": image.alt || "", "width": 100, "height": 56, "layout": "constrained", "loading": "lazy", "sizes": "(max-width: 768px) 50px, 100px", "widths": [50, 100], "class": "max-h-14 hover:brightness-110 hover:animate-pulse transition-all duration-300", "onclick": image.onclick })} </div>`
  )} </div> ` })}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/widgets/Brands.astro", void 0);

export { $$Brands as $ };
