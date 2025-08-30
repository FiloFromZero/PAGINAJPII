import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment, u as unescapeHTML } from '../../chunks/astro/server_HJvi1lLk.mjs';
import 'kleur/colors';
import { a as $$Button, $ as $$PageLayout, b as $$Header, h as headerData } from '../../chunks/PageLayout_DssI5ubI.mjs';
import { $ as $$Hero2 } from '../../chunks/Hero2_CP7C6zQV.mjs';
import { $ as $$Features } from '../../chunks/Features_DJOyuRPf.mjs';
import { $ as $$Icon } from '../../chunks/ToggleTheme_CSDC6GRN.mjs';
import { $ as $$WidgetWrapper } from '../../chunks/WidgetWrapper_Dt2E1TM3.mjs';
import { $ as $$Headline } from '../../chunks/Headline_Clx8yRrO.mjs';
import { $ as $$Content } from '../../chunks/Content_BXo_rjjC.mjs';
import { $ as $$FAQs } from '../../chunks/FAQs_DZfABG8z.mjs';
import { $ as $$BlogLatestPosts } from '../../chunks/BlogLatestPosts_B4PFDkog.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$2 = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Steps2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Steps2;
  const {
    title = await Astro2.slots.render("title"),
    subtitle = await Astro2.slots.render("subtitle"),
    tagline,
    callToAction = await Astro2.slots.render("callToAction"),
    items = [],
    isReversed = false,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-6xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div${addAttribute(`flex flex-col gap-8 md:gap-12 md:flex-row ${isReversed ? "md:flex-row-reverse" : ""}`, "class")}> <div${addAttribute(`w-full lg:w-1/2 gap-8 md:gap-12 ${isReversed ? "lg:ml-16 md:ml-8 ml-0" : "lg:mr-16 md:mr-8 mr-0"}`, "class")}> ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline, "classes": {
    container: "text-center md:text-left rtl:md:text-right mb-4 md:mb-8",
    title: "mb-4 text-3xl lg:text-4xl font-bold font-heading",
    subtitle: "mb-8 text-xl text-muted dark:text-slate-400"
    // ...((classes?.headline as {}) ?? {}),
  } })} <div class="w-full text-center md:text-left rtl:md:text-right"> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(callToAction)}` })}` : callToAction && callToAction.text && callToAction.href && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "variant": "primary", ...callToAction, "class": "mb-12 w-auto" })}`} </div> </div> <div class="w-full lg:w-1/2 px-0"> <ul class="space-y-10"> ${items && items.length ? items.map(({ title: title2, description, icon }, index) => renderTemplate`<li class="flex md:-mx-4"> <div class="pr-4 sm:pl-4 rtl:pr-0 rtl:pl-4 rtl:sm:pl-0 rtl:sm:pr-4"> <span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold rounded-full bg-blue-100 text-primary"> ${icon ? renderTemplate`${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "w-6 h-6 icon-bold" })}` : index + 1} </span> </div> <div class="pl-4 rtl:pl-0 rtl:pr-4"> <h3 class="mb-4 text-xl font-semibold font-heading">${unescapeHTML(title2)}</h3> <p class="text-muted dark:text-gray-400">${unescapeHTML(description)}</p> </div> </li>`) : ""} </ul> </div> </div> ` })}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/widgets/Steps2.astro", void 0);

const $$Astro$1 = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Pricing = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pricing;
  const {
    title = "",
    subtitle = "",
    tagline = "",
    prices = [],
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": `max-w-7xl mx-auto ${classes?.container ?? ""}`, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Headline", $$Headline, { "title": title, "subtitle": subtitle, "tagline": tagline })} ${maybeRenderHead()}<div class="flex items-stretch justify-center"> <div class="grid grid-cols-3 gap-4 dark:text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"> ${prices && prices.map(({ title: title2, subtitle: subtitle2, price, period, items, callToAction, hasRibbon = false, ribbonTitle }) => renderTemplate`<div class="col-span-3 mx-auto flex w-full sm:col-span-1 md:col-span-1 lg:col-span-1 xl:col-span-1"> ${price && period && renderTemplate`<div class="rounded-lg backdrop-blur border border-gray-200 dark:border-gray-700 bg-white dark:bg-slate-900 shadow px-6 py-8 flex w-full max-w-sm flex-col justify-between text-center"> ${hasRibbon && ribbonTitle && renderTemplate`<div class="absolute right-[-5px] 2xl:right-[-8px] rtl:right-auto rtl:left-[-8px] rtl:2xl:left-[-10px] top-[-5px] 2xl:top-[-10px] z-[1] h-[100px] w-[100px] overflow-hidden text-right"> <span class="absolute top-[19px] right-[-21px] rtl:right-auto rtl:left-[-21px] block w-full rotate-45 rtl:-rotate-45 bg-green-700 text-center text-[10px] font-bold uppercase leading-5 text-white shadow-[0_3px_10px_-5px_rgba(0,0,0,0.3)] before:absolute before:left-0 before:top-full before:z-[-1] before:border-[3px] before:border-r-transparent before:border-b-transparent before:border-l-green-800 before:border-t-green-800 before:content-[''] after:absolute after:right-0 after:top-full after:z-[-1] after:border-[3px] after:border-l-transparent after:border-b-transparent after:border-r-green-800 after:border-t-green-800 after:content-['']"> ${ribbonTitle} </span> </div>`} <div class="px-2 py-0"> ${title2 && renderTemplate`<h3 class="text-center text-xl font-semibold uppercase leading-6 tracking-wider mb-2">${title2}</h3>`} ${subtitle2 && renderTemplate`<p class="font-light sm:text-lg text-gray-600 dark:text-slate-400">${subtitle2}</p>`} <div class="my-8"> <div class="flex items-center justify-center text-center mb-1"> <span class="text-5xl">$</span> <span class="text-6xl font-extrabold">${price}</span> </div> <span class="text-base leading-6 lowercase text-gray-600 dark:text-slate-400">${period}</span> </div> ${items && renderTemplate`<ul class="my-8 md:my-10 space-y-2 text-left"> ${items.map(
    ({ description, icon }) => description && renderTemplate`<li class="mb-1.5 flex items-start space-x-3 leading-7"> <div class="rounded-full bg-primary mt-1"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon ? icon : "tabler:check", "class": "w-5 h-5 font-bold p-1 text-white" })} </div> <span>${description}</span> </li>`
  )} </ul>`} </div> ${callToAction && renderTemplate`<div${addAttribute(`flex justify-center`, "class")}> ${typeof callToAction === "string" ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(callToAction)}` })}` : callToAction && callToAction.href && renderTemplate`${renderComponent($$result2, "Button", $$Button, { ...hasRibbon ? { variant: "primary" } : {}, ...callToAction })}`} </div>`} </div>`} </div>`)} </div> </div> ` })}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/widgets/Pricing.astro", void 0);

const $$Astro = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Saas = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Saas;
  const metadata = {
    title: "SaaS Landing Page"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "Hero2", $$Hero2, { "tagline": "SaaS Web Demo", "actions": [
    { variant: "primary", target: "_blank", text: "Get Started", href: "https://github.com/onwidget/astrowind" },
    { text: "Learn more", href: "#features" }
  ], "image": {
    src: "https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "AstroWind Hero Image"
  } }, { "subtitle": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "subtitle" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<span class="hidden sm:inline">
Elevate your website creation process with <span class="font-semibold">AstroWind</span>'s SaaS solutions.</span>
Seamlessly blend the power of Astro 4.0 and Tailwind CSS to craft websites that resonate with your brand and audience.
` })}`, "title": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "title" }, { "default": ($$result4) => renderTemplate`
Simplify web design with Astrowind: <br> your ultimate <span class="text-accent dark:text-white highlight">SaaS</span> companion<br> ` })}` })}  ${renderComponent($$result2, "Features", $$Features, { "id": "features", "title": "Why choose AstroWind?", "subtitle": "Each of the following features enhances AstroWind's value proposition.", "columns": 2, "items": [
    {
      title: "Integration of Astro 4.0 and Tailwind CSS",
      description: "Offers a powerful combination that enhances both the development process and the end-user experience. Also, allows to build dynamic and visually stunning websites with optimized performance.",
      icon: "tabler:layers-union"
    },
    {
      title: "Versatile design for startups, small businesses, and more",
      description: `Easily customize AstroWind to harmonize with the unique branding and identity of your venture. AstroWind's versatile design adapts to suit your needs.`,
      icon: "tabler:artboard"
    },
    {
      title: "Effortless customization for portfolios and marketing sites",
      description: "With intuitive customization, easily showcase portfolio pieces, case studies, project highlights, and relevant content. Ideal for creative professionals and businesses looking to highlight their expertise.",
      icon: "tabler:writing"
    },
    {
      title: "Optimized landing pages and engaging blogs",
      description: `Landing pages are strategically designed to captivate visitors and prompt specific actions. Additionally, the blog creation feature empowers sharing insights, engaging the audience.`,
      icon: "tabler:podium"
    },
    {
      title: "Fast loading times and production-ready code",
      description: `Using Astro 4.0 ensures fast loading and seamless rendering, enhancing browsing. The code follows best practices, improving user experience, SEO, and reducing bounce rates.`,
      icon: "tabler:rocket"
    },
    {
      title: "SEO-optimized structure for enhanced visibility",
      description: `Follows SEO best practices with clean code, semantic HTML markup, and fast loading, enhancing search engine rankings. AstroWind's SEO structure ensures visibility to potential customers and clients.`,
      icon: "tabler:eyeglass"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "title": "Use cases", "subtitle": "Discover how AstroWind's versatile template serves as the ideal solution for various use cases, providing tailored solutions to drive success.", "isReversed": true, "items": [
    {
      title: "Description:",
      description: "Are you a startup with big dreams? AstroWind propels your success. Our template forges a seamless online presence, attracting investors and customers from day one. Astro 4.0 and Tailwind CSS ensure striking, responsive sites, leaving lasting impressions. Countless startups leverage AstroWind to kickstart their journey and resonate with audiences."
    },
    {
      title: "Benefits:",
      description: `Allow startups to quickly create professional websites without investing extensive time and resources. <br /> Make a memorable first impression with visually appealing design elements that highlight your startup's unique value proposition. <br /> Ensures your website looks stunning and works well on all devices. <br /> Engage potential investors and customers with engaging content, clear messaging, and intuitive navigation.`
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1620558138198-cfb9b4f3c294?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1671&q=80",
    alt: "Startup Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Startup success stories: <br><span class="text-2xl">Launching with AstroWind</span> </h3> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isAfterContent": true, "items": [
    {
      title: "Description:",
      description: `For SaaS businesses, user experience is key. AstroWind enhances showcasing SaaS solutions intuitively. The template's Astro 4.0 and Tailwind CSS integration guarantees user-friendly experience, mirroring your software's efficiency. Customize pages to communicate SaaS value and solutions for your audience.`
    },
    {
      title: "Benefits:",
      description: `Ensuring a cohesive and user-centric design for your SaaS website. <br /> Effectively communicate complex SaaS features through visual aids, animations, and interactive elements. <br /> Prioritize user needs and pain points through well-structured layouts and clear navigation. <br /> Encourage visitors to take action with strategically placed CTAs. <br /> Ensures your SaaS website works seamlessly across all devices.`
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1531973486364-5fa64260d75b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1658&q=80",
    alt: "SaaS Businesses Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
SaaS showcase: <br><span class="text-2xl">Streamlining user experience</span> </h3> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    {
      title: "Description:",
      description: `Your portfolio is your masterpiece, and AstroWind is your canvas. Whether you're a designer, photographer, artist, or any other creative professional, AstroWind empowers you to showcase your work with elegance and sophistication. Tailored to highlight your creative projects, AstroWind's templates offer a visually immersive experience that lets your portfolio shine.`
    },
    {
      title: "Benefits:",
      description: `Serve as a captivating backdrop to showcase your creative work, capturing attention and leaving a lasting impression. <br /> Tailor your portfolio to reflect your unique style and artistic vision. <br /> Prioritizes visuals, allowing you to present your work in high-resolution detail that draws viewers into your creations. <br /> Enables seamless navigation for effortless portfolio exploration.`
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Portfolio Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Creative portfolios: <br><span class="text-2xl">Highlighting your work</span> </h3> ` })}` })}  ${renderComponent($$result2, "Content", $$Content, { "items": [
    {
      title: "Description:",
      description: `For small businesses, a well-crafted website can be a game-changer. AstroWind empowers small businesses to not only establish a credible online presence but also convert visitors into loyal customers. The template's thoughtful design and optimization features ensure that your website doesn't just attract attention but also guides visitors through a seamless journey, ultimately leading to conversions.`
    },
    {
      title: "Benefits:",
      description: `Present your small business with a professional and polished website that instills confidence and trust among visitors. <br /> Strategically placed CTAs, user-friendly forms, and optimized layouts work together to drive user engagement and conversions. <br /> Ensure a smooth browsing experience, reducing bounce rates and encouraging interaction.`
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1514621166532-aa7eb1a3a2f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    alt: "Small Business Image"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">
Small business growth: <br><span class="text-2xl">Converting visitors into customers</span> </h3> ` })}` })}  ${renderComponent($$result2, "Pricing", $$Pricing, { "title": "Flexible pricing plans", "prices": [
    {
      title: "free",
      subtitle: "Access to core features and a wide range of templates",
      price: "0",
      period: "/ month",
      callToAction: {
        target: "_blank",
        text: "Get Started for Free",
        href: "#"
      }
    },
    {
      title: "pro",
      subtitle: "Premium templates and advanced customization",
      price: 15,
      period: "/ Month",
      callToAction: {
        target: "_blank",
        text: "Upgrade to Pro",
        href: "#"
      },
      hasRibbon: true,
      ribbonTitle: "popular"
    },
    {
      title: "Enterprise",
      subtitle: "Tailored solutions for large-scale projects",
      price: 45,
      period: "/ Month",
      callToAction: {
        target: "_blank",
        text: "Unlock Enterprise Features",
        href: "#"
      }
    }
  ] })}  ${renderComponent($$result2, "FAQs", $$FAQs, { "title": "Frequently Asked Questions", "items": [
    {
      title: "Is AstroWind compatible with the latest versions of Astro and Tailwind CSS?",
      description: "Yes, AstroWind is designed to be compatible with the latest versions of both Astro and Tailwind CSS. This ensures that you can harness the full capabilities of these technologies while benefiting from the features offered by AstroWind.",
      icon: "tabler:chevrons-right"
    },
    {
      title: "Can I use AstroWind for both personal and commercial projects?",
      description: `Certainly! AstroWind is versatile and can be used for a wide range of projects, including both personal and commercial endeavors. Whether you're building a professional portfolio, launching a startup, or creating a marketing website, AstroWind has you covered.`,
      icon: "tabler:chevrons-right"
    },
    {
      title: "What level of coding knowledge is required to use AstroWind?",
      description: "While some familiarity with HTML, CSS, and web development concepts is helpful, the user-friendly interface and customization options allow those with limited coding experience to create impressive websites. For more advanced users, AstroWind offers extensive customization capabilities.",
      icon: "tabler:chevrons-right"
    },
    {
      title: "Is customer support available for AstroWind users seeking guidance?",
      description: `Absolutely, our dedicated customer support team is here to assist you with any questions or challenges you may encounter. Feel free to reach out to us through our support channels, and we'll be happy to provide the help you need.`,
      icon: "tabler:chevrons-right"
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Steps2", $$Steps2, { "title": "Reach out to us", "subtitle": "Have questions? Feel free to contact us using the form below. We're here to help!", "callToAction": {
    text: "Contact us",
    href: "/"
  }, "items": [
    {
      title: "Email us",
      description: "contact@support.com",
      icon: "tabler:mail"
    },
    {
      title: "Call us",
      description: "+1 (234) 567-890",
      icon: "tabler:headset"
    },
    {
      title: "Follow us",
      description: "@example",
      icon: "tabler:brand-twitter"
    }
  ] })}  ${renderComponent($$result2, "BlogLatestPosts", $$BlogLatestPosts, { "id": "blog", "title": "Stay informed with AstroWind's blog", "information": `Explore our collection of articles, guides, and tutorials on web development, design trends, and using AstroWind effectively for your projects.` }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })} `, "header": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "header" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Header", $$Header, { ...headerData, "actions": [
    {
      variant: "secondary",
      text: "Login",
      href: "#"
    },
    {
      variant: "primary",
      text: "Sign Up",
      href: "#"
    }
  ], "isSticky": true })} ` })}` })}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/pages/homes/saas.astro", void 0);

const $$file = "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/pages/homes/saas.astro";
const $$url = "/homes/saas";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Saas,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
