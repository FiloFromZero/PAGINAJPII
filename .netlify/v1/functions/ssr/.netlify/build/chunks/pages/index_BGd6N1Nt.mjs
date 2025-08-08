import { d as createAstro, e as createComponent, m as maybeRenderHead, g as addAttribute, i as renderComponent, r as renderTemplate, u as unescapeHTML, j as Fragment } from '../astro_CfJRq3Yt.mjs';
import 'kleur/colors';
import { d as $$Icon, $ as $$Button, a as $$Image, b as $$PageLayout, f as $$WhatsAppButton } from './admisiones_DsFyNX6Q.mjs';
import { $ as $$WidgetWrapper, a as $$Headline, b as $$Hero2 } from './click-through_D7_kWT5P.mjs';
import { twMerge } from 'tailwind-merge';
import { c as getPermalink } from './404_Dw-3UrCo.mjs';
import 'clsx';

const $$Astro$5 = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$ItemGrid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ItemGrid;
  const { items = [], columns, defaultIcon = "", classes = {} } = Astro2.props;
  const {
    container: containerClass = "",
    panel: panelClass = "",
    title: titleClass = "",
    description: descriptionClass = "",
    icon: defaultIconClass = "text-primary",
    action: actionClass = ""
  } = classes;
  return renderTemplate`${items && renderTemplate`${maybeRenderHead()}<div${addAttribute(twMerge(
    `grid mx-auto gap-8 md:gap-y-12 ${columns === 4 ? "lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2" : columns === 3 ? "lg:grid-cols-3 sm:grid-cols-2" : columns === 2 ? "sm:grid-cols-2 " : ""}`,
    containerClass
  ), "class")}>${items.map(({ title, description, icon, callToAction, classes: itemClasses = {} }, index) => renderTemplate`<div data-animate="animate-fade-in-up"${addAttribute(index * 100, "data-animate-delay")}><div${addAttribute(twMerge("flex flex-row max-w-md", panelClass, itemClasses?.panel), "class")}><div class="flex justify-center">${(icon || defaultIcon) && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": icon || defaultIcon, "class": twMerge("w-7 h-7 mr-2 rtl:mr-0 rtl:ml-2 animate-fade-in-up", defaultIconClass, itemClasses?.icon) })}`}</div><div class="mt-0.5">${title && renderTemplate`<h3${addAttribute(twMerge("text-xl font-bold animate-text-hover", titleClass, itemClasses?.title), "class")}>${title}</h3>`}${description && renderTemplate`<p${addAttribute(twMerge(`${title ? "mt-3" : ""} text-muted animate-text-hover`, descriptionClass, itemClasses?.description), "class")}>${unescapeHTML(description)}</p>`}${callToAction && renderTemplate`<div${addAttribute(twMerge(`${title || description ? "mt-3" : ""}`, actionClass, itemClasses?.actionClass), "class")}>${renderComponent($$result, "Button", $$Button, { "variant": "link", ...callToAction })}</div>`}</div></div></div>`)}</div>`}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/ui/ItemGrid.astro", void 0);

const $$Astro$4 = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Content = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Content;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    content = await Astro2.slots.render("content"),
    callToAction,
    items = [],
    columns,
    image = await Astro2.slots.render("image"),
    isReversed = false,
    isAfterContent = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${isAfterContent ? "pt-0 md:pt-0 lg:pt-0" : ""} ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "max-w-xl sm:mx-auto lg:max-w-2xl",
    title: "text-4xl md:text-5xl font-bold tracking-tighter mb-4 font-heading",
    subtitle: "max-w-3xl mx-auto sm:text-center text-xl text-muted dark:text-slate-400"
  } })} ${maybeRenderHead()}<div class="mx-auto max-w-7xl p-4 md:px-8"> <div${addAttribute(`md:flex ${isReversed ? "md:flex-row-reverse" : ""} md:gap-16`, "class")}> <div class="md:basis-1/2 self-center"> ${content && renderTemplate`<div class="mb-12 text-lg dark:text-slate-400 animate-text-hover">${unescapeHTML(content)}</div>`} ${callToAction && renderTemplate`<div class="mt-[-40px] mb-8 text-primary"> ${renderComponent($$result2, "Button", $$Button, { "variant": "link", ...callToAction })} </div>`} ${renderComponent($$result2, "ItemGrid", $$ItemGrid, { "items": items, "columns": columns, "defaultIcon": "tabler:check", "classes": {
    container: `gap-y-4 md:gap-y-8`,
    panel: "max-w-none",
    title: "text-lg font-medium leading-6 dark:text-white ml-2 rtl:ml-0 rtl:mr-2",
    description: "text-muted dark:text-slate-400 ml-2 rtl:ml-0 rtl:mr-2",
    action: "text-lg font-medium leading-6 dark:text-white ml-2 rtl:ml-0 rtl:mr-2"
  } })} </div> <div aria-hidden="true" class="mt-10 md:mt-0 md:basis-1/2"> ${image && renderTemplate`<div class="relative m-auto max-w-4xl"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "mx-auto w-full rounded-lg bg-gray-500 shadow-lg", "width": 500, "height": 500, "widths": [400, 768], "sizes": "(max-width: 768px) 100vw, 432px", "layout": "responsive", ...image, "data-animate": "animate-fade-in-up" })}`} </div>`} </div> </div> </div> ` })}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/widgets/Content.astro", void 0);

const $$Astro$3 = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
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
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${testimonials && testimonials.map(({ title: title2, testimonial, name, job, image }) => renderTemplate`<div class="flex h-auto"> <div class="flex flex-col p-4 md:p-6 rounded-md shadow-xl dark:shadow-none dark:border dark:border-slate-600"> ${title2 && renderTemplate`<h2 class="text-lg font-medium leading-6 pb-4">${title2}</h2>`} ${testimonial && renderTemplate`<blockquote class="flex-auto"> <p class="text-muted">${testimonial}</p> </blockquote>`} <hr class="border-slate-200 dark:border-slate-600 my-4"> <div class="flex items-center"> ${image && renderTemplate`<div class="h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600"> ${typeof image === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(image)}` })}` : renderTemplate`${renderComponent($$result2, "Image", $$Image, { "class": "h-10 w-10 rounded-full border border-slate-200 dark:border-slate-600 min-w-full min-h-full", "width": 40, "height": 40, "widths": [400, 768], "layout": "fixed", ...image })}`} </div>`} <div class="grow ml-3 rtl:ml-0 rtl:mr-3"> ${name && renderTemplate`<p class="text-base font-semibold">${name}</p>`} ${job && renderTemplate`<p class="text-xs text-muted">${job}</p>`} </div> </div> </div> </div>`)} </div> ${callToAction && renderTemplate`<div class="flex justify-center mx-auto w-fit mt-8 md:mt-12 font-medium"> ${renderComponent($$result2, "Button", $$Button, { ...callToAction })} </div>`}` })}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/widgets/Testimonials.astro", void 0);

const $$Astro$2 = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Stats = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
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
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="flex flex-wrap justify-center -m-4 text-center"> ${stats && stats.map(({ amount, title: title2, icon }) => renderTemplate`<div class="p-4 md:w-1/4 sm:w-1/2 w-full min-w-[220px] text-center md:border-r md:last:border-none dark:md:border-slate-500"> ${icon && renderTemplate`<div class="flex items-center justify-center mx-auto mb-4 text-primary"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "w-10 h-10" })} </div>`} ${amount && renderTemplate`<div class="font-heading text-primary text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl"> ${amount} </div>`} ${title2 && renderTemplate`<div class="text-sm font-medium uppercase tracking-widest text-gray-800 dark:text-slate-400 lg:text-base"> ${title2} </div>`} </div>`)} </div> ` })}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/widgets/Stats.astro", void 0);

const $$Astro$1 = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Brands = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
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
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="flex flex-wrap justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24"> ${icons && icons.map((icon) => renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "py-3 lg:py-5 w-12 h-auto mx-auto sm:mx-0 text-gray-500" })}`)} ${images && images.map(
    (image) => image.src && renderTemplate`<div class="flex justify-center col-span-1 py-1 px-3 rounded-md dark:bg-gray-200 cursor-pointer"> ${renderComponent($$result2, "Image", $$Image, { "src": image.src, "alt": image.alt || "", "class": "max-h-12", "width": 120, "height": 60, "layout": "fixed", "onclick": image.onclick })} </div>`
  )} </div> ` })}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/widgets/Brands.astro", void 0);

const $$Note = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-blue-50 dark:bg-slate-800 not-prose"> <div class="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-md text-center font-medium"> <span class="font-bold"> ${renderComponent($$result, "Icon", $$Icon, { "name": "tabler:info-square", "class": "w-5 h-5 inline-block align-text-bottom" })} Filosofía: </span> La Educación Compromiso De Todos.
</div> </section>`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/widgets/Note.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { images } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div id="carousel" class="relative w-full overflow-hidden rounded-xl shadow-2xl my-12 group"> <div id="carousel-inner" class="flex transition-transform duration-700 ease-in-out h-[350px]"> ', ' </div> <button id="prevBtn" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75" aria-label="Anterior"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button id="nextBtn" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75" aria-label="Siguiente"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> <div id="pagination-dots" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2"> ', " </div> </div> <script type=\"module\">\n  const inner = document.getElementById('carousel-inner');\n  const prevBtn = document.getElementById('prevBtn');\n  const nextBtn = document.getElementById('nextBtn');\n  const paginationDotsContainer = document.getElementById('pagination-dots');\n  const dots = Array.from(paginationDotsContainer.children);\n  const totalImages = inner.children.length;\n  let current = 0;\n  let autoSlideInterval;\n\n  const updateCarousel = () => {\n    inner.style.transform = `translateX(-${current * 100}%)`;\n    dots.forEach((dot, index) => {\n      if (index === current) {\n        dot.classList.add('bg-white');\n        dot.classList.remove('bg-white/50');\n      } else {\n        dot.classList.remove('bg-white');\n        dot.classList.add('bg-white/50');\n      }\n    });\n  };\n\n  const startAutoSlide = () => {\n    clearInterval(autoSlideInterval); // Clear any existing interval\n    autoSlideInterval = setInterval(() => {\n      current = (current + 1) % totalImages;\n      updateCarousel();\n    }, 4000);\n  };\n\n  // Event Listeners\n  prevBtn.onclick = () => {\n    current = (current - 1 + totalImages) % totalImages;\n    updateCarousel();\n    startAutoSlide(); // Reset auto-slide on manual interaction\n  };\n\n  nextBtn.onclick = () => {\n    current = (current + 1) % totalImages;\n    updateCarousel();\n    startAutoSlide(); // Reset auto-slide on manual interaction\n  };\n\n  dots.forEach(dot => {\n    dot.onclick = (e) => {\n      current = parseInt(e.target.dataset.index);\n      updateCarousel();\n      startAutoSlide(); // Reset auto-slide on manual interaction\n    };\n  });\n\n  // Initialize carousel and start auto-slide\n  updateCarousel();\n  startAutoSlide();\n\n  // Pause auto-slide on hover\n  const carousel = document.getElementById('carousel');\n  carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));\n  carousel.addEventListener('mouseleave', startAutoSlide);\n<\/script>"], ["", '<div id="carousel" class="relative w-full overflow-hidden rounded-xl shadow-2xl my-12 group"> <div id="carousel-inner" class="flex transition-transform duration-700 ease-in-out h-[350px]"> ', ' </div> <button id="prevBtn" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75" aria-label="Anterior"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button id="nextBtn" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-sm text-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white/50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75" aria-label="Siguiente"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> <div id="pagination-dots" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2"> ', " </div> </div> <script type=\"module\">\n  const inner = document.getElementById('carousel-inner');\n  const prevBtn = document.getElementById('prevBtn');\n  const nextBtn = document.getElementById('nextBtn');\n  const paginationDotsContainer = document.getElementById('pagination-dots');\n  const dots = Array.from(paginationDotsContainer.children);\n  const totalImages = inner.children.length;\n  let current = 0;\n  let autoSlideInterval;\n\n  const updateCarousel = () => {\n    inner.style.transform = \\`translateX(-\\${current * 100}%)\\`;\n    dots.forEach((dot, index) => {\n      if (index === current) {\n        dot.classList.add('bg-white');\n        dot.classList.remove('bg-white/50');\n      } else {\n        dot.classList.remove('bg-white');\n        dot.classList.add('bg-white/50');\n      }\n    });\n  };\n\n  const startAutoSlide = () => {\n    clearInterval(autoSlideInterval); // Clear any existing interval\n    autoSlideInterval = setInterval(() => {\n      current = (current + 1) % totalImages;\n      updateCarousel();\n    }, 4000);\n  };\n\n  // Event Listeners\n  prevBtn.onclick = () => {\n    current = (current - 1 + totalImages) % totalImages;\n    updateCarousel();\n    startAutoSlide(); // Reset auto-slide on manual interaction\n  };\n\n  nextBtn.onclick = () => {\n    current = (current + 1) % totalImages;\n    updateCarousel();\n    startAutoSlide(); // Reset auto-slide on manual interaction\n  };\n\n  dots.forEach(dot => {\n    dot.onclick = (e) => {\n      current = parseInt(e.target.dataset.index);\n      updateCarousel();\n      startAutoSlide(); // Reset auto-slide on manual interaction\n    };\n  });\n\n  // Initialize carousel and start auto-slide\n  updateCarousel();\n  startAutoSlide();\n\n  // Pause auto-slide on hover\n  const carousel = document.getElementById('carousel');\n  carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));\n  carousel.addEventListener('mouseleave', startAutoSlide);\n<\/script>"])), maybeRenderHead(), images.map(({ src, alt }) => renderTemplate`<img${addAttribute(src, "src")}${addAttribute(alt, "alt")} class="flex-shrink-0 w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-105" data-animate="animate-fade-in-up">`), images.map((_, index) => renderTemplate`<button${addAttribute(index, "data-index")} class="w-3 h-3 bg-white/50 rounded-full transition-all duration-300 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75"></button>`));
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/Carousel.astro", void 0);

const imgPagoEnLinea = new Proxy({"src":"/_astro/pagoEnLinea.BmObUZgm.png","width":952,"height":1052,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/pagoEnLinea.png";
							}
							
							return target[name];
						}
					});

const pagoEnLinea = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: imgPagoEnLinea
}, Symbol.toStringTag, { value: 'Module' }));

const imgCalidad = new Proxy({"src":"/_astro/Externado.DEZl9vC-.jpg","width":1052,"height":780,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/Externado.jpg";
							}
							
							return target[name];
						}
					});

const Externado = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: imgCalidad
}, Symbol.toStringTag, { value: 'Module' }));

const imgValores = new Proxy({"src":"/_astro/ISAIAS.BGp9dB__.jpeg","width":2304,"height":4096,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/ISAIAS.jpeg";
							}
							
							return target[name];
						}
					});

const ISAIAS = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: imgValores
}, Symbol.toStringTag, { value: 'Module' }));

const imgDocentes = new Proxy({"src":"/_astro/IZADABANDERA.DRFj5v2H.jpeg","width":4096,"height":2304,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/IZADABANDERA.jpeg";
							}
							
							return target[name];
						}
					});

const IZADABANDERA = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: imgDocentes
}, Symbol.toStringTag, { value: 'Module' }));

const imgVirtualidad = new Proxy({"src":"/_astro/inicio_virtualidad.BWVrbwhk.png","width":1223,"height":740,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/inicio_virtualidad.png";
							}
							
							return target[name];
						}
					});

const inicio_virtualidad = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: imgVirtualidad
}, Symbol.toStringTag, { value: 'Module' }));

const FeriaU1 = new Proxy({"src":"/_astro/FeriaUniversitaria.BcGpF_qM.jpeg","width":3280,"height":2464,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/FeriaUniversitaria.jpeg";
							}
							
							return target[name];
						}
					});

const FeriaUniversitaria = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: FeriaU1
}, Symbol.toStringTag, { value: 'Module' }));

const FeriaU2 = new Proxy({"src":"/_astro/FeriaUniversitaria2.D3NcBsAz.jpeg","width":4096,"height":2304,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/FeriaUniversitaria2.jpeg";
							}
							
							return target[name];
						}
					});

const FeriaUniversitaria2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: FeriaU2
}, Symbol.toStringTag, { value: 'Module' }));

const Regional = new Proxy({"src":"/_astro/Regional.AvK5veip.jpg","width":2304,"height":4096,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/Regional.jpg";
							}
							
							return target[name];
						}
					});

const Regional$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Regional
}, Symbol.toStringTag, { value: 'Module' }));

const Memoria = new Proxy({"src":"/_astro/Memoria.xm1Ta-qz.jpeg","width":1156,"height":520,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/images/Memoria.jpeg";
							}
							
							return target[name];
						}
					});

const Memoria$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: Memoria
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Colegio Juan Pablo II - Inicio",
    ignoreTitleTemplate: true
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Carousel", $$Carousel, { "images": [
    { src: FeriaU1.src, alt: "Calidad Educativa" },
    { src: FeriaU2.src, alt: "Valores Institucionales" },
    { src: Memoria.src, alt: "Docentes" },
    { src: Regional.src, alt: "Virtualidad" }
  ] })} ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "Nueva Web!!", "actions": [
    { variant: "primary", target: "_blank", text: "Contacto", href: getPermalink("/contacto") },
    { text: "Nuestros servicios", href: getPermalink("/servicios") }
  ], "image": {
    class: "cursor-pointer md:pl-20 hover:scale-[0.95] transition-transform duration-300",
    src: imgPagoEnLinea,
    alt: "Pago en Linea",
    onclick: 'window.open("https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/StartPayment?id=4672&searchedCategoryId=&searchedAgreementName=INSTITUTO%20PSICOPEDAGOGICO%20JUAN%20PABLO%20II")'
  }, "data-animate": "animate-fade-in-up" }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle", "data-animate": "animate-fade-in-up", "data-animate-delay": "300" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="hidden sm:inline">
Prepara a tu hijo para el futuro: <span class="font-semibold">Juntos para existir, convivir y aprender</span>.
</span> ` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title", "data-animate": "animate-fade-in-up" }, { "default": ($$result4) => renderTemplate`
Evolucionamos para ti: <br> Descubre la nueva web del <span class="text-green-800 dark:text-white highlight">Juan Pablo II</span>.
` })}` })} ${renderComponent($$result2, "Note", $$Note, { "data-animate": "animate-fade-in-up" })} ${renderComponent($$result2, "Brands", $$Brands, { "title": "Accesos R\xE1pidos", "subtitle": "Accede r\xE1pidamente a plataformas educativas y recursos digitales. Simplifica tu navegaci\xF3n con estos enlaces a las herramientas m\xE1s utilizadas.", "icons": [], "images": [
    {
      src: "~/assets/images/Tools_ZigmaDatos.png",
      alt: "Zigma Datos",
      onclick: 'window.open("https://www.iejuanpabloii.zigmadatos.org")'
    },
    {
      src: "~/assets/images/Tools_Biblored.png",
      alt: "Biblored",
      onclick: 'window.open("https://www.biblored.gov.co")'
    },
    {
      src: "~/assets/images/Tools_BibliotecaNacional.png",
      alt: "Biblioteca Nacional",
      onclick: 'window.open("https://bibliotecanacional.gov.co/es-co")'
    },
    {
      src: "~/assets/images/Tools_BancoRepublica.png",
      alt: "Red Cultural Banco de la Republica",
      onclick: 'window.open("https://www.banrepcultural.org/biblioteca-virtual")'
    },
    {
      src: "~/assets/images/Tools_ColombiaAprende.png",
      alt: "Colombia Aprende",
      onclick: 'window.open("https://colombiaaprende.edu.co")'
    }
  ], "data-animate": "animate-fade-in-up" })} ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "tagline": "Nuestra Oferta", "title": "Formaci\xF3n de Alto Nivel para un Futuro Brillante!", "items": [
    { title: "El mejor colegio privado de la comuna uno." },
    { title: "Estamos dentro de los mejores colegios privados del municipio de Soacha." },
    { title: "Altos indicadores en las pruebas SABER." }
  ], "image": { src: imgCalidad, alt: "Calidad Educativa" }, "data-animate": "animate-fade-in-up" }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Calidad Educativa Desde 1992</h3>
El Instituto Psicopedagógico Juan Pablo II, se caracteriza por entregar educación de la más alta calidad en los niveles
      de preescolar, básica primaria, básica secundaria y media técnica.
` })}` })} ${renderComponent($$result2, "Content", $$Content, { "isAfterContent": true, "items": [
    { title: "Respeto" },
    { title: "Tolerancia" },
    { title: "Compromiso" },
    { title: "Solidaridad" },
    { title: "Servicio a la comunidad" }
  ], "image": { src: imgValores, alt: "Valores Institucionales" }, "data-animate": "animate-fade-in-up" }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Valores institucionales</h3>
El Instituto Psicopedagógico Juan Pablo II, se caracteriza por fomentar en toda la comunidad Juanpablina los siguientes
      valores que fortalecen y dignificar al ser humano.
` })}` })} ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    { title: "Docentes con destacada experiencia laboral." },
    { title: "Egresados Juanpablinos." },
    { title: "Alto sentido humano." }
  ], "image": { src: imgDocentes, alt: "Docentes" }, "data-animate": "animate-fade-in-up" }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Nuestros Docentes</h3>
Nuestro cuerpo directivo y docente siempre atento a acompañar los procesos institucionales, son profesionales con altos
      conocimientos y sentido humano que nos permiten promover en nuestros educandos. Educación de calidad y con visión de
      servicio al municipio de Soacha y al país.
` })}` })} ${renderComponent($$result2, "Stats", $$Stats, { "subtitle": "Datos hist\xF3ricos de la prestaci\xF3n del servicio Juanpablino:", "stats": [
    { title: "Graduados", amount: "+1200" },
    { title: "A\xF1os de experiencia", amount: "30" }
  ], "data-animate": "animate-fade-in-up" })} ${renderComponent($$result2, "Content", $$Content, { "id": "about", "columns": 3, "image": { src: imgVirtualidad, alt: "Virtualidad", loading: "eager" }, "data-animate": "animate-fade-in-up" }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h2 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Virtualidad</h2> <p>
Adaptándonos a esta coyuntura que vivimos a nivel mundial, desde el Instituto Psicopedagógico Juan Pablo II,
        hemos ratificado nuestro compromiso con la transformación de la sociedad a través de la mejor oferta educativa
        virtual, recibiendo reconocimiento por parte de la secretaría de Educación y Cultura de Soacha.
</p> <br> <p>
Contamos con equipo humano idóneo y herramientas tecnológicas implementadas desde el año 2006, con la
        implementación de Zigma datos, página web institucional, Dropbox, redes sociales, WhatsApp Juanpablino,
        Business, y que fortalecimos durante el 2020 con la implementación de correos institucionales y G Suite For
        Education, para ofrecer y garantizar formación bajo el esquema de la virtualidad, con los estándares académicos
        que destacan al Juan Pablo II.
</p> ` })}` })} ${renderComponent($$result2, "Testimonials", $$Testimonials, { "title": "Testimonios y Experiencias", "testimonials": [
    {
      testimonial: "Nixon Andr\xE9s Meneses fue uno de los veinte colombianos beneficiados con la Beca Fulbright...",
      name: "\xA1Juanpablino de talla internacional!",
      job: "Estudiante"
    },
    {
      testimonial: `La marca de Juanpablina se lleva para toda la vida...`,
      name: "\xA1Orgullosamente Juanpablina!",
      job: "Estudiante"
    },
    {
      testimonial: `El Instituto Psicopedag\xF3gico Juan Pablo II, fue mi segundo hogar...`,
      name: "Luz \xC1ngela P\xE9rez Castiblanco",
      job: "Estudiante"
    }
  ], "data-animate": "animate-fade-in-up" })} ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, { "phoneNumber": "573196721410", "message": "Hola, estoy interesado en sus servicios." })} ` })}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/pages/index.astro", void 0);

const $$file = "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ItemGrid as $, Externado as E, FeriaUniversitaria as F, ISAIAS as I, Memoria$1 as M, Regional$1 as R, $$Content as a, $$Stats as b, $$Testimonials as c, $$Brands as d, IZADABANDERA as e, FeriaUniversitaria2 as f, index as g, inicio_virtualidad as i, pagoEnLinea as p };
