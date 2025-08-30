import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, a as renderTemplate } from './astro/server_HJvi1lLk.mjs';
import 'kleur/colors';
import 'clsx';
import { twMerge } from 'tailwind-merge';

const $$Astro = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Headline = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Headline;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    classes = {}
  } = Astro2.props;
  const {
    container: containerClass = "max-w-3xl",
    title: titleClass = "text-3xl md:text-4xl ",
    subtitle: subtitleClass = "text-xl"
  } = classes;
  return renderTemplate`${(title || subtitle || tagline) && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge("mb-4 md:mx-auto md:mb-6 text-center", containerClass), "class")}>${tagline && renderTemplate`<p class="text-base text-secondary dark:text-blue-200 font-bold tracking-wide uppercase animate-text-hover">${unescapeHTML(tagline)}</p>`}${title && renderTemplate`<h2${addAttribute(twMerge("font-bold leading-tighter tracking-tighter font-heading text-heading text-3xl animate-text-hover", titleClass), "class")}>${unescapeHTML(title)}</h2>`}${subtitle && renderTemplate`<p${addAttribute(twMerge("mt-2 text-muted animate-text-hover", subtitleClass), "class")}>${unescapeHTML(subtitle)}</p>`}</div>`}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/ui/Headline.astro", void 0);

export { $$Headline as $ };
