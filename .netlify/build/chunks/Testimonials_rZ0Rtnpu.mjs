import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment, u as unescapeHTML } from './astro/server_HJvi1lLk.mjs';
import 'kleur/colors';
import { $ as $$Headline } from './Headline_Clx8yRrO.mjs';
import { $ as $$WidgetWrapper } from './WidgetWrapper_Dt2E1TM3.mjs';
import { a as $$Button } from './PageLayout_DssI5ubI.mjs';
import { $ as $$Image } from './Logo_DouzFt2M.mjs';

const $$Astro = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonials;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    testimonials = [],
    callToAction,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"> ${testimonials && testimonials.map(({ title: title2, testimonial, name, job, image }, index) => renderTemplate`<div${addAttribute(`flex h-auto stagger-${index % 8 + 1} animate-fade-in-up`, "class")}> <div class="card flex flex-col p-6 md:p-8 rounded-2xl shadow-soft dark:card-dark hover:shadow-large hover-lift hover-glow transition-all duration-500 group cursor-pointer"> ${title2 && renderTemplate`<h2 class="text-xl font-semibold leading-6 pb-4 text-primary group-hover:text-secondary transition-all duration-300 group-hover:animate-wiggle"> ${title2} </h2>`} ${testimonial && renderTemplate`<blockquote class="flex-auto"> <p class="text-muted text-lg leading-relaxed italic group-hover:text-shimmer transition-all duration-300">
"${testimonial}"
</p> </blockquote>`} <hr class="border-gray-200 dark:border-slate-600 my-6 group-hover:border-primary transition-colors duration-300"> <div class="flex items-center"> ${image && renderTemplate`<div class="h-14 w-14 rounded-full border-2 border-primary shadow-soft group-hover:border-secondary group-hover:animate-pulse transition-all duration-300"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "h-14 w-14 rounded-full min-w-full min-h-full object-cover group-hover:scale-110 transition-transform duration-300", "width": 56, "height": 56, "widths": [400, 768], "layout": "fixed", ...image })}`} </div>`} <div class="grow ml-4 rtl:ml-0 rtl:mr-4"> ${name && renderTemplate`<p class="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-300"> ${name} </p>`} ${job && renderTemplate`<p class="text-sm text-primary font-medium group-hover:text-secondary transition-colors duration-300"> ${job} </p>`} </div> </div> </div> </div>`)} </div> ${callToAction && renderTemplate`<div class="flex justify-center mx-auto w-fit mt-8 md:mt-12 font-medium"> ${renderComponent($$result2, "Button", $$Button, { ...callToAction })} </div>`}` })}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/widgets/Testimonials.astro", void 0);

export { $$Testimonials as $ };
