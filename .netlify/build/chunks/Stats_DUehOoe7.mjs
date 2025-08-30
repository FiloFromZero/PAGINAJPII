import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './astro/server_HJvi1lLk.mjs';
import 'kleur/colors';
import { $ as $$WidgetWrapper } from './WidgetWrapper_Dt2E1TM3.mjs';
import { $ as $$Headline } from './Headline_Clx8yRrO.mjs';
import { $ as $$Icon } from './ToggleTheme_CSDC6GRN.mjs';

const $$Astro = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Stats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Stats;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    stats = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="flex flex-wrap justify-center text-center"> ${stats && stats.map(({ amount, title: title2, icon }) => renderTemplate`<div class="p-6 md:w-1/4 sm:w-1/2 w-full min-w-[220px] text-center md:border-r md:last:border-none border-gray-200 dark:md:border-slate-600 hover:bg-gradient-subtle transition-all duration-300 rounded-lg mx-2 my-2"> ${icon && renderTemplate`<div class="flex items-center justify-center mx-auto mb-6 text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "w-12 h-12" })} </div>`} ${amount && renderTemplate`<div class="font-heading bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-[3rem] font-bold lg:text-6xl xl:text-7xl animate-bounce-in hover:animate-tada cursor-pointer"> ${amount} </div>`} ${title2 && renderTemplate`<div class="text-sm font-semibold uppercase tracking-wider text-muted lg:text-base mt-2">${title2}</div>`} </div>`)} </div> ` })}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/widgets/Stats.astro", void 0);

export { $$Stats as $ };
