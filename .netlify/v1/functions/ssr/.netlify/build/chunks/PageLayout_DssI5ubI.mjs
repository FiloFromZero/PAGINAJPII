import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, e as renderSlot, a as renderTemplate, s as spreadAttributes, r as renderComponent, F as Fragment, u as unescapeHTML } from './astro/server_HJvi1lLk.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_Cm2Kh23I.mjs';
import { $ as $$Icon, a as $$ToggleTheme } from './ToggleTheme_CSDC6GRN.mjs';
import { a as $$Logo, $ as $$Image } from './Logo_DouzFt2M.mjs';
import 'clsx';
import { twMerge } from 'tailwind-merge';
import { t as trimSlash, g as getHomePermalink, f as getAsset, a as getPermalink } from './permalinks_CNPnO7hi.mjs';
/* empty css                                 */

const $$Astro$4 = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$ToggleMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ToggleMenu;
  const {
    label = "Toggle Menu",
    class: className = "flex flex-col h-12 w-12 rounded justify-center items-center cursor-pointer group"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button type="button"${addAttribute(className, "class")}${addAttribute(label, "aria-label")} data-aw-toggle-menu> <span class="sr-only">${label}</span> ${renderSlot($$result, $$slots["default"], renderTemplate` <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:rotate-45 group-[.expanded]:translate-y-2.5"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:opacity-0"></span> <span aria-hidden="true" class="h-0.5 w-6 my-1 rounded-full bg-black dark:bg-white transition ease transform duration-200 opacity-80 group-[.expanded]:-rotate-45 group-[.expanded]:-translate-y-2.5"></span> `)} </button>`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/common/ToggleMenu.astro", void 0);

const $$Astro$3 = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "secondary",
    target,
    text = Astro2.slots.render("default"),
    icon = "",
    class: className = "",
    type,
    ...rest
  } = Astro2.props;
  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    tertiary: "btn btn-tertiary",
    link: "cursor-pointer hover:text-primary"
  };
  return renderTemplate`${type === "button" || type === "submit" || type === "reset" ? renderTemplate`${maybeRenderHead()}<button${addAttribute(type, "type")}${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(rest)}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</button>` : renderTemplate`<a${addAttribute(twMerge(variants[variant] || "", className), "class")}${spreadAttributes(target ? { target, rel: "noopener noreferrer" } : {})}${spreadAttributes(rest)}>${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })}${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5 ml-1 -mr-1.5 rtl:mr-1 rtl:-ml-1.5 inline-block" })}`}</a>`}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/ui/Button.astro", void 0);

const $$Astro$2 = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const {
    id = "header",
    links = [],
    actions = [],
    isSticky = false,
    isDark = false,
    isFullWidth = false,
    showToggleTheme = false,
    showRssFeed = false,
    position = "center"
  } = Astro2.props;
  const currentPath = `/${trimSlash(new URL(Astro2.url).pathname)}`;
  return renderTemplate`${maybeRenderHead()}<header${addAttribute([
    { sticky: isSticky, relative: !isSticky, dark: isDark },
    "top-0 z-40 flex-none mx-auto w-full border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-dark"
  ], "class:list")}${spreadAttributes(isSticky ? { "data-aw-sticky-header": true } : {})}${spreadAttributes(id ? { id } : {})}> <div class="absolute inset-0"></div> <div${addAttribute([
    "relative text-default py-2 px-3 md:px-6 mx-auto w-full",
    {
      "md:flex md:justify-between": position !== "center"
    },
    {
      "md:grid md:grid-cols-[auto,1fr,auto] md:items-center": position === "center"
    },
    {
      "max-w-7xl": !isFullWidth
    }
  ], "class:list")}> <div${addAttribute([{ "mr-auto rtl:mr-0 rtl:ml-auto": position === "right" }, "flex justify-between items-center min-h-[80px]"], "class:list")}> <a class="flex items-center"${addAttribute(getHomePermalink(), "href")}> ${renderComponent($$result, "Logo", $$Logo, {})} </a> <div class="flex items-center md:hidden ml-4 mr-2"> ${renderComponent($$result, "ToggleMenu", $$ToggleMenu, {})} </div> </div> <nav class="items-center w-full md:w-auto hidden md:flex md:mx-5 text-default overflow-y-auto overflow-x-hidden md:overflow-y-visible md:overflow-x-auto md:justify-self-center" aria-label="Main navigation"> <ul class="flex flex-col md:flex-row md:self-center w-full md:w-auto text-xl md:text-[0.9375rem] tracking-[0.01rem] font-medium md:justify-center"> ${links.map(({ text, href, links: links2 }) => renderTemplate`<li${addAttribute(links2?.length ? "dropdown" : "", "class")}> ${links2?.length ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <button type="button" class="hover:text-link dark:hover:text-white px-4 py-3 flex items-center"> ${text}${" "} ${renderComponent($$result2, "Icon", $$Icon, { "name": "tabler:chevron-down", "class": "w-3.5 h-3.5 ml-0.5 rtl:ml-0 rtl:mr-0.5 hidden md:inline" })} </button> <ul class="dropdown-menu dark:md:bg-dark rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white md:min-w-[200px] drop-shadow-xl"> ${links2.map(({ text: text2, href: href2 }) => renderTemplate`<li> <a${addAttribute([
    "first:rounded-t last:rounded-b md:hover:bg-gray-100 hover:text-link dark:hover:text-white dark:hover:bg-gray-700 py-2 px-5 block whitespace-no-wrap",
    { "aw-link-active": href2 === currentPath }
  ], "class:list")}${addAttribute(href2, "href")}> ${text2} </a> </li>`)} </ul> ` })}` : renderTemplate`<a${addAttribute([
    "hover:text-link dark:hover:text-white px-4 py-3 flex items-center",
    { "aw-link-active": href === currentPath }
  ], "class:list")}${addAttribute(href, "href")}> ${text} </a>`} </li>`)} </ul> </nav> <div${addAttribute([
    { "ml-auto rtl:ml-0 rtl:mr-auto": position === "left" },
    "hidden md:self-center md:flex items-center md:mb-0 fixed w-full md:w-auto md:static justify-end left-0 rtl:left-auto rtl:right-0 bottom-0 p-3 md:p-0 md:justify-self-end"
  ], "class:list")}> <div class="items-center flex justify-between w-full md:w-auto"> <div class="flex"> ${showToggleTheme && renderTemplate`${renderComponent($$result, "ToggleTheme", $$ToggleTheme, { "iconClass": "w-6 h-6 md:w-5 md:h-5 md:inline-block" })}`} ${showRssFeed && renderTemplate`<a class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center" aria-label="RSS Feed"${addAttribute(getAsset("/rss.xml"), "href")}> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:rss", "class": "w-5 h-5" })} </a>`} </div> ${actions?.length ? renderTemplate`<span class="ml-4 rtl:ml-0 rtl:mr-4"> ${actions.map((btnProps) => renderTemplate`${renderComponent($$result, "Button", $$Button, { ...btnProps, "class": "ml-2 py-2.5 px-5.5 md:px-6 font-semibold shadow-none text-sm w-auto" })}`)} </span>` : ""} </div> </div> </div> </header>`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/widgets/Header.astro", void 0);

const $$Astro$1 = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  const { socialLinks = [], links = [], footNote = "", theme = "light" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer${addAttribute([{ dark: theme === "dark" }, "relative border-t border-gray-200 dark:border-slate-800 not-prose"], "class:list")}> <div class="dark:bg-dark absolute inset-0 pointer-events-none" aria-hidden="true"></div> <div class="relative max-w-7xl mx-auto px-4 sm:px-6 dark:text-slate-300"> <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-2 md:py-4"> <div class="col-span-12 lg:col-span-4"> <div class="flex flex-col items-center justify-center mb-2"> <p class="inline-block font-bold text-lg">Instituto Psicopedagógico</p> <p class="inline-block font-bold text-lg">Juan Pablo II</p> ${renderComponent($$result, "Image", $$Image, { "class": "!w-24 h-auto mt-4", "src": "~/assets/images/escudo.png", "alt": "Escudo JPII" })} <p class="inline-block text-sm mt-2">Carrera 7 No. 13 - 34 Soacha, Colombia</p> </div> </div> ${links.map(({ title, links: links2 }) => renderTemplate`<div class="col-span-6 md:col-span-3 lg:col-span-2"> <div class="dark:text-gray-300 font-medium mb-2">${title}</div> ${links2 && Array.isArray(links2) && links2.length > 0 && renderTemplate`<ul class="text-sm"> ${links2.map(({ text, href, ariaLabel }) => renderTemplate`<li class="mb-2"> <a class="text-muted hover:text-gray-700 hover:underline dark:text-gray-400 transition duration-150 ease-in-out animate-text-hover"${addAttribute(href, "href")}${addAttribute(ariaLabel, "aria-label")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a> </li>`)} </ul>`} </div>`)} <div class="col-span-6 md:col-span-6 lg:col-span-6"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.5841763805913!2d-74.23544426806374!3d4.5637367982907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f7544462db7cf%3A0x506e6a0b8f7f5a6e!2sCra.%207%20%2313-34%2C%20Soacha%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1726751001799!5m2!1ses!2sco" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> </div> <div class="md:flex md:items-center md:justify-between py-6 md:py-8"> ${socialLinks?.length ? renderTemplate`<ul class="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0 rtl:ml-0 rtl:-mr-2 rtl:md:ml-0 rtl:md:mr-4"> ${socialLinks.map(({ ariaLabel, href, text, icon }) => renderTemplate`<li> <a class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"${addAttribute(ariaLabel, "aria-label")}${addAttribute(href, "href")} target="_blank"> ${icon && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-5 h-5" })}`} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(text)}` })} </a> </li>`)} </ul>` : ""} <div class="text-sm mr-4 dark:text-muted"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(footNote)}` })} </div> </div> </div> </footer>`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/widgets/Footer.astro", void 0);

const rootMenu = [
  {
    text: 'Inicio',
    href: getPermalink('/'),
  },
  {
    text: 'Servicios',
    href: getPermalink('/servicios'),
  },
  {
    text: 'Nosotros',
    href: getPermalink('/nosotros'),
  },
  {
    text: 'Contacto',
    href: getPermalink('/contacto'),
  },
  {
    text: 'Documentos Oficiales',
    href: getPermalink('/documentos-oficiales'),
  },
  {
    text: 'Admisiones',
    href: getPermalink('/admisiones'),
  },
];

const headerData = {
  links: rootMenu,
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

const footerData = {
  links: [
    {
      title: 'Website',
      links: rootMenu,
    },
  ],
  /* secondaryLinks: [
    { text: 'Terminos', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ], */
  socialLinks: [
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://www.facebook.com/institutopsicopedagogicojuanpabloii' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/ipjp2' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://tiktok.com/@ipjuanpabloii' },
  ],
  /*footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" alt="onWidget logo" loading="lazy"></img>
    Made by <a class="text-blue-600 underline dark:text-muted" >Bindisoft</a> · All rights reserved.
  `,*/
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$PageLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { metadata } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "metadata": metadata, "data-astro-cid-3zbxo6iv": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(["", "", "<main data-astro-cid-3zbxo6iv>", "</main>", "<script>\n    const initHoverAnimations = () => {\n      const main = document.querySelector('main');\n      if (!main) return;\n\n      const candidates = main.querySelectorAll('h1,h2,h3,h4,h5,h6,p,li,a,blockquote,figcaption,span,em,strong');\n      candidates.forEach((el) => {\n        if (el.closest('nav,header,footer')) return;\n        // Remove render animation attributes/classes\n        el.removeAttribute('data-animate');\n        el.removeAttribute('data-animate-delay');\n        el.classList.remove('animate-fade-in-up', 'animate-fade-in-down');\n        // Keep only hover animation\n        if (!el.classList.contains('animate-text-hover')) {\n          el.classList.add('animate-text-hover');\n        }\n      });\n    };\n\n    document.addEventListener('DOMContentLoaded', initHoverAnimations);\n    document.addEventListener('astro:after-swap', initHoverAnimations);\n  <\/script>"])), renderSlot($$result2, $$slots["header"], renderTemplate`${renderComponent($$result2, "Header", $$Header, { ...headerData, "showToggleTheme": true, "isSticky": true, "data-astro-cid-3zbxo6iv": true })}`), maybeRenderHead(), renderSlot($$result2, $$slots["default"]), renderSlot($$result2, $$slots["footer"], renderTemplate`${renderComponent($$result2, "Footer", $$Footer, { ...footerData, "data-astro-cid-3zbxo6iv": true })}`)) })}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/layouts/PageLayout.astro", void 0);

export { $$PageLayout as $, $$Button as a, $$Header as b, headerData as h };
