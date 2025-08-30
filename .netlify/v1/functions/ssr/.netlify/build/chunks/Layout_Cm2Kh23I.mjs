import { c as createComponent, b as addAttribute, a as renderTemplate, i as defineScriptVars, d as createAstro, r as renderComponent, F as Fragment, u as unescapeHTML, s as spreadAttributes, j as renderHead, e as renderSlot } from './astro/server_HJvi1lLk.mjs';
import 'kleur/colors';
/* empty css                                 */
import { f as getAsset, U as UI, d as getCanonical, I as I18N, S as SITE, M as METADATA } from './permalinks_CNPnO7hi.mjs';
import 'clsx';
import merge from 'lodash.merge';
import { escape } from 'html-escaper';
import { a as adaptOpenGraphImages } from './images_CTrLM9yj.mjs';

const $$CommonMeta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="sitemap"${addAttribute(getAsset("/sitemap-index.xml"), "href")}>`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/common/CommonMeta.astro", void 0);

const favIcon = new Proxy({"src":"/_astro/escudo.kRjxOe6c.png","width":512,"height":512,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/assets/favicons/favicon.png";
							}
							
							return target[name];
						}
					});

const $$Favicons = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<link rel="shortcut icon"${addAttribute(favIcon.src, "href")}><link rel="icon" type="image/svg+xml"${addAttribute(favIcon.src, "href")}><link rel="mask-icon"${addAttribute(favIcon.src, "href")} color="#8D46E7"><link rel="apple-touch-icon" sizes="180x180"${addAttribute(favIcon.src, "href")}>`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/Favicons.astro", void 0);

const $$CustomStyles = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<style>
  :root {
    --aw-font-sans: 'InterVariable';
    --aw-font-serif: 'InterVariable';
    --aw-font-heading: 'InterVariable';

    /* Professional school color palette - Dark Green Theme */
    --aw-color-primary: rgb(0 100 0); /* Dark green */
    --aw-color-secondary: rgb(34 139 34); /* Forest green */
    --aw-color-accent: rgb(46 125 50); /* Emerald green accent */
    --aw-color-success: rgb(76 175 80); /* Light green for success */
    --aw-color-warning: rgb(255 152 0); /* Orange for warnings */
    --aw-color-error: rgb(244 67 54); /* Red for errors */

    --aw-color-text-heading: rgb(17 24 39);
    --aw-color-text-default: rgb(31 41 55);
    --aw-color-text-muted: rgb(107 114 128);
    --aw-color-bg-page: rgb(255 255 255);
    --aw-color-bg-secondary: rgb(249 250 251);
    --aw-color-border: rgb(229 231 235);

    --aw-color-bg-page-dark: rgb(17 24 39);

    ::selection {
      background-color: rgba(0, 47, 108, 0.2);
      color: rgb(0 47 108);
    }
  }

  .dark {
    --aw-font-sans: 'InterVariable';
    --aw-font-serif: 'InterVariable';
    --aw-font-heading: 'InterVariable';

    /* Dark mode with professional dark green colors */
    --aw-color-primary: rgb(34 197 94); /* Bright green for dark mode */
    --aw-color-secondary: rgb(76 175 80); /* Light green for dark mode */
    --aw-color-accent: rgb(129 199 132); /* Soft green accent */
    --aw-color-success: rgb(129 199 132);
    --aw-color-warning: rgb(255 183 77);
    --aw-color-error: rgb(244 67 54);

    --aw-color-text-heading: rgb(243 244 246);
    --aw-color-text-default: rgb(229 231 235);
    --aw-color-text-muted: rgb(156 163 175);
    --aw-color-bg-page: rgb(17 24 39);
    --aw-color-bg-secondary: rgb(31 41 55);
    --aw-color-border: rgb(55 65 81);

    ::selection {
      background-color: rgba(59, 130, 246, 0.3);
      color: rgb(243 244 246);
    }
  }
</style>`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/CustomStyles.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$ApplyColorMode = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$2 || (_a$2 = __template$2(["<script>(function(){", "\n  function applyTheme(theme) {\n    if (theme === 'dark') {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n    const matches = document.querySelectorAll('[data-aw-toggle-color-scheme] > input');\n\n    if (matches && matches.length) {\n      matches.forEach((elem) => {\n        elem.checked = theme !== 'dark';\n      });\n    }\n  }\n\n  if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {\n    applyTheme(defaultTheme.replace(':only', ''));\n  } else if (\n    localStorage.theme === 'dark' ||\n    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n  ) {\n    applyTheme('dark');\n  } else {\n    applyTheme('light');\n  }\n})();<\/script>"])), defineScriptVars({ defaultTheme: UI.theme }));
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/common/ApplyColorMode.astro", void 0);

const createMetaTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<meta ${attrs} />`;
};
const createLinkTag = (attributes) => {
  const attrs = Object.entries(attributes).map(([key, value]) => `${key}="${escape(value)}"`).join(" ");
  return `<link ${attrs} />`;
};
const createOpenGraphTag = (property, content) => {
  return createMetaTag({ property: `og:${property}`, content });
};
const buildOpenGraphMediaTags = (mediaType, media) => {
  let tags = "";
  const addTag = (tag) => {
    tags += tag + "\n";
  };
  media.forEach((medium) => {
    addTag(createOpenGraphTag(mediaType, medium.url));
    if (medium.alt) {
      addTag(createOpenGraphTag(`${mediaType}:alt`, medium.alt));
    }
    if (medium.secureUrl) {
      addTag(createOpenGraphTag(`${mediaType}:secure_url`, medium.secureUrl));
    }
    if (medium.type) {
      addTag(createOpenGraphTag(`${mediaType}:type`, medium.type));
    }
    if (medium.width) {
      addTag(createOpenGraphTag(`${mediaType}:width`, medium.width.toString()));
    }
    if (medium.height) {
      addTag(createOpenGraphTag(`${mediaType}:height`, medium.height.toString()));
    }
  });
  return tags;
};
const buildTags = (config) => {
  let tagsToRender = "";
  const addTag = (tag) => {
    tagsToRender += tag + "\n";
  };
  if (config.title) {
    const formattedTitle = config.titleTemplate ? config.titleTemplate.replace("%s", config.title) : config.title;
    addTag(`<title>${escape(formattedTitle)}</title>`);
  }
  if (config.description) {
    addTag(createMetaTag({ name: "description", content: config.description }));
  }
  let robotsContent = [];
  if (typeof config.noindex !== "undefined") {
    robotsContent.push(config.noindex ? "noindex" : "index");
  }
  if (typeof config.nofollow !== "undefined") {
    robotsContent.push(config.nofollow ? "nofollow" : "follow");
  }
  if (config.robotsProps) {
    const { nosnippet, maxSnippet, maxImagePreview, noarchive, unavailableAfter, noimageindex, notranslate } = config.robotsProps;
    if (nosnippet) robotsContent.push("nosnippet");
    if (maxSnippet) robotsContent.push(`max-snippet:${maxSnippet}`);
    if (maxImagePreview) robotsContent.push(`max-image-preview:${maxImagePreview}`);
    if (noarchive) robotsContent.push("noarchive");
    if (unavailableAfter) robotsContent.push(`unavailable_after:${unavailableAfter}`);
    if (noimageindex) robotsContent.push("noimageindex");
    if (notranslate) robotsContent.push("notranslate");
  }
  if (robotsContent.length > 0) {
    addTag(createMetaTag({ name: "robots", content: robotsContent.join(",") }));
  }
  if (config.canonical) {
    addTag(createLinkTag({ rel: "canonical", href: config.canonical }));
  }
  if (config.mobileAlternate) {
    addTag(createLinkTag({ rel: "alternate", media: config.mobileAlternate.media, href: config.mobileAlternate.href }));
  }
  if (config.languageAlternates && config.languageAlternates.length > 0) {
    config.languageAlternates.forEach((languageAlternate) => {
      addTag(createLinkTag({ rel: "alternate", hrefLang: languageAlternate.hrefLang, href: languageAlternate.href }));
    });
  }
  if (config.openGraph) {
    const title = config.openGraph?.title || config.title;
    if (title) {
      addTag(createOpenGraphTag("title", title));
    }
    const description = config.openGraph?.description || config.description;
    if (description) {
      addTag(createOpenGraphTag("description", description));
    }
    if (config.openGraph.url) {
      addTag(createOpenGraphTag("url", config.openGraph.url));
    }
    if (config.openGraph.type) {
      addTag(createOpenGraphTag("type", config.openGraph.type));
    }
    if (config.openGraph.images && config.openGraph.images.length) {
      addTag(buildOpenGraphMediaTags("image", config.openGraph.images));
    }
    if (config.openGraph.videos && config.openGraph.videos.length) {
      addTag(buildOpenGraphMediaTags("video", config.openGraph.videos));
    }
    if (config.openGraph.locale) {
      addTag(createOpenGraphTag("locale", config.openGraph.locale));
    }
    if (config.openGraph.site_name) {
      addTag(createOpenGraphTag("site_name", config.openGraph.site_name));
    }
    if (config.openGraph.profile) {
      if (config.openGraph.profile.firstName) {
        addTag(createOpenGraphTag("profile:first_name", config.openGraph.profile.firstName));
      }
      if (config.openGraph.profile.lastName) {
        addTag(createOpenGraphTag("profile:last_name", config.openGraph.profile.lastName));
      }
      if (config.openGraph.profile.username) {
        addTag(createOpenGraphTag("profile:username", config.openGraph.profile.username));
      }
      if (config.openGraph.profile.gender) {
        addTag(createOpenGraphTag("profile:gender", config.openGraph.profile.gender));
      }
    }
    if (config.openGraph.book) {
      if (config.openGraph.book.authors && config.openGraph.book.authors.length) {
        config.openGraph.book.authors.forEach((author) => {
          addTag(createOpenGraphTag("book:author", author));
        });
      }
      if (config.openGraph.book.isbn) {
        addTag(createOpenGraphTag("book:isbn", config.openGraph.book.isbn));
      }
      if (config.openGraph.book.releaseDate) {
        addTag(createOpenGraphTag("book:release_date", config.openGraph.book.releaseDate));
      }
      if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
        config.openGraph.book.tags.forEach((tag) => {
          addTag(createOpenGraphTag("book:tag", tag));
        });
      }
    }
    if (config.openGraph.article) {
      if (config.openGraph.article.publishedTime) {
        addTag(createOpenGraphTag("article:published_time", config.openGraph.article.publishedTime));
      }
      if (config.openGraph.article.modifiedTime) {
        addTag(createOpenGraphTag("article:modified_time", config.openGraph.article.modifiedTime));
      }
      if (config.openGraph.article.expirationTime) {
        addTag(createOpenGraphTag("article:expiration_time", config.openGraph.article.expirationTime));
      }
      if (config.openGraph.article.authors && config.openGraph.article.authors.length) {
        config.openGraph.article.authors.forEach((author) => {
          addTag(createOpenGraphTag("article:author", author));
        });
      }
      if (config.openGraph.article.section) {
        addTag(createOpenGraphTag("article:section", config.openGraph.article.section));
      }
      if (config.openGraph.article.tags && config.openGraph.article.tags.length) {
        config.openGraph.article.tags.forEach((tag) => {
          addTag(createOpenGraphTag("article:tag", tag));
        });
      }
    }
    if (config.openGraph.video) {
      if (config.openGraph.video.actors && config.openGraph.video.actors.length) {
        config.openGraph.video.actors.forEach((actor) => {
          addTag(createOpenGraphTag("video:actor", actor.profile));
          if (actor.role) {
            addTag(createOpenGraphTag("video:actor:role", actor.role));
          }
        });
      }
      if (config.openGraph.video.directors && config.openGraph.video.directors.length) {
        config.openGraph.video.directors.forEach((director) => {
          addTag(createOpenGraphTag("video:director", director));
        });
      }
      if (config.openGraph.video.writers && config.openGraph.video.writers.length) {
        config.openGraph.video.writers.forEach((writer) => {
          addTag(createOpenGraphTag("video:writer", writer));
        });
      }
      if (config.openGraph.video.duration) {
        addTag(createOpenGraphTag("video:duration", config.openGraph.video.duration.toString()));
      }
      if (config.openGraph.video.releaseDate) {
        addTag(createOpenGraphTag("video:release_date", config.openGraph.video.releaseDate));
      }
      if (config.openGraph.video.tags && config.openGraph.video.tags.length) {
        config.openGraph.video.tags.forEach((tag) => {
          addTag(createOpenGraphTag("video:tag", tag));
        });
      }
      if (config.openGraph.video.series) {
        addTag(createOpenGraphTag("video:series", config.openGraph.video.series));
      }
    }
  }
  if (config.facebook && config.facebook.appId) {
    addTag(createMetaTag({ property: "fb:app_id", content: config.facebook.appId }));
  }
  if (config.twitter) {
    if (config.twitter.cardType) {
      addTag(createMetaTag({ name: "twitter:card", content: config.twitter.cardType }));
    }
    if (config.twitter.site) {
      addTag(createMetaTag({ name: "twitter:site", content: config.twitter.site }));
    }
    if (config.twitter.handle) {
      addTag(createMetaTag({ name: "twitter:creator", content: config.twitter.handle }));
    }
  }
  if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
    config.additionalMetaTags.forEach((metaTag) => {
      const attributes = {
        content: metaTag.content
      };
      if ("name" in metaTag && metaTag.name) {
        attributes.name = metaTag.name;
      } else if ("property" in metaTag && metaTag.property) {
        attributes.property = metaTag.property;
      } else if ("httpEquiv" in metaTag && metaTag.httpEquiv) {
        attributes["http-equiv"] = metaTag.httpEquiv;
      }
      addTag(createMetaTag(attributes));
    });
  }
  if (config.additionalLinkTags && config.additionalLinkTags.length > 0) {
    config.additionalLinkTags.forEach((linkTag) => {
      const attributes = {
        rel: linkTag.rel,
        href: linkTag.href
      };
      if (linkTag.sizes) {
        attributes.sizes = linkTag.sizes;
      }
      if (linkTag.media) {
        attributes.media = linkTag.media;
      }
      if (linkTag.type) {
        attributes.type = linkTag.type;
      }
      if (linkTag.color) {
        attributes.color = linkTag.color;
      }
      if (linkTag.as) {
        attributes.as = linkTag.as;
      }
      if (linkTag.crossOrigin) {
        attributes.crossorigin = linkTag.crossOrigin;
      }
      addTag(createLinkTag(attributes));
    });
  }
  return tagsToRender.trim();
};

const $$Astro$4 = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$AstroSeo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AstroSeo;
  const {
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(buildTags({
    title,
    titleTemplate,
    noindex,
    nofollow,
    robotsProps,
    description,
    canonical,
    mobileAlternate,
    languageAlternates,
    openGraph,
    facebook,
    twitter,
    additionalMetaTags,
    additionalLinkTags
  }))}` })}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/node_modules/@astrolib/seo/src/AstroSeo.astro", void 0);

const $$Astro$3 = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Metadata = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Metadata;
  const {
    title,
    ignoreTitleTemplate = false,
    canonical = String(getCanonical(String(Astro2.url.pathname))),
    robots = {},
    description,
    openGraph = {},
    twitter = {}
  } = Astro2.props;
  const seoProps = merge(
    {
      title: "",
      titleTemplate: "%s",
      canonical,
      noindex: true,
      nofollow: true,
      description: void 0,
      openGraph: {
        url: canonical,
        site_name: SITE?.name,
        images: [],
        locale: I18N?.language,
        type: "website"
      },
      twitter: {
        cardType: openGraph?.images?.length ? "summary_large_image" : "summary"
      }
    },
    {
      title: METADATA?.title?.default,
      titleTemplate: METADATA?.title?.template,
      noindex: false ,
      nofollow: false ,
      description: METADATA?.description,
      openGraph: METADATA?.openGraph,
      twitter: METADATA?.twitter
    },
    {
      title,
      titleTemplate: ignoreTitleTemplate ? "%s" : void 0,
      canonical,
      noindex: typeof robots?.index !== "undefined" ? !robots.index : void 0,
      nofollow: typeof robots?.follow !== "undefined" ? !robots.follow : void 0,
      description,
      openGraph: { url: canonical, ...openGraph },
      twitter
    }
  );
  return renderTemplate`${renderComponent($$result, "AstroSeo", $$AstroSeo, { ...{ ...seoProps, openGraph: await adaptOpenGraphImages(seoProps?.openGraph, Astro2.site) } })}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/common/Metadata.astro", void 0);

const $$SiteVerification = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${SITE.googleSiteVerificationId}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/common/SiteVerification.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$2 = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$GoogleAnalytics = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GoogleAnalytics;
  const { id = "GA_MEASUREMENT_ID", partytown = false } = Astro2.props;
  const attrs = partytown ? { type: "text/partytown" } : {};
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<script async", "", "><\/script><script", ">(function(){", '\n  window.dataLayer = window.dataLayer || [];\n  function gtag() {\n    window.dataLayer.push(arguments);\n  }\n  gtag("js", new Date());\n  gtag("config", id);\n})();<\/script>'])), addAttribute(`https://www.googletagmanager.com/gtag/js?id=${id}`, "src"), spreadAttributes(attrs), spreadAttributes(attrs), defineScriptVars({ id }));
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/node_modules/@astrolib/analytics/src/GoogleAnalytics.astro", void 0);

const $$Analytics = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${null}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/common/Analytics.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$BasicScripts = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["<script>(function(){", "\n  if (window.basic_script) {\n    return;\n  }\n\n  window.basic_script = true;\n\n  function applyTheme(theme) {\n    if (theme === 'dark') {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n  }\n\n  const initTheme = function () {\n    if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {\n      applyTheme(defaultTheme.replace(':only', ''));\n    } else if (\n      localStorage.theme === 'dark' ||\n      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n    ) {\n      applyTheme('dark');\n    } else {\n      applyTheme('light');\n    }\n  };\n  initTheme();\n\n  function attachEvent(selector, event, fn) {\n    const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;\n    if (matches && matches.length) {\n      matches.forEach((elem) => {\n        elem.addEventListener(event, (e) => fn(e, elem), false);\n      });\n    }\n  }\n\n  const onLoad = function () {\n\n    attachEvent('#header nav', 'click', function () {\n      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n      document.body.classList.remove('overflow-hidden');\n      document.getElementById('header')?.classList.remove('h-screen');\n      document.getElementById('header')?.classList.remove('expanded');\n      document.getElementById('header')?.classList.remove('bg-page');\n      document.querySelector('#header nav')?.classList.add('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');\n    });\n\n    attachEvent('[data-aw-toggle-menu]', 'click', function (_, elem) {\n      elem.classList.toggle('expanded');\n      document.body.classList.toggle('overflow-hidden');\n      document.getElementById('header')?.classList.toggle('h-screen');\n      document.getElementById('header')?.classList.toggle('expanded');\n      document.getElementById('header')?.classList.toggle('bg-page');\n      document.querySelector('#header nav')?.classList.toggle('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.toggle('hidden');\n    });\n\n    attachEvent('[data-aw-toggle-color-scheme]', 'click', function () {\n      if (defaultTheme.endsWith(':only')) {\n        return;\n      }\n      document.documentElement.classList.toggle('dark');\n      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';\n    });\n\n    attachEvent('[data-aw-social-share]', 'click', function (_, elem) {\n      const network = elem.getAttribute('data-aw-social-share');\n      const url = encodeURIComponent(elem.getAttribute('data-aw-url'));\n      const text = encodeURIComponent(elem.getAttribute('data-aw-text'));\n\n      let href;\n      switch (network) {\n        case 'facebook':\n          href = `https://www.facebook.com/sharer.php?u=${url}`;\n          break;\n        case 'twitter':\n          href = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;\n          break;\n        case 'linkedin':\n          href = `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`;\n          break;\n        case 'whatsapp':\n          href = `https://wa.me/?text=${text}%20${url}`;\n          break;\n        case 'mail':\n          href = `mailto:?subject=%22${text}%22&body=${text}%20${url}`;\n          break;\n\n        default:\n          return;\n      }\n\n      const newlink = document.createElement('a');\n      newlink.target = '_blank';\n      newlink.href = href;\n      newlink.click();\n    });\n\n    const screenSize = window.matchMedia('(max-width: 767px)');\n    screenSize.addEventListener('change', function () {\n      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n      document.body.classList.remove('overflow-hidden');\n      document.getElementById('header')?.classList.remove('h-screen');\n      document.getElementById('header')?.classList.remove('expanded');\n      document.getElementById('header')?.classList.remove('bg-page');\n      document.querySelector('#header nav')?.classList.add('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');\n    });\n\n    // Scroll functionality removed to make navbar static\n  };\n  const onPageShow = function () {\n    document.documentElement.classList.add('motion-safe:scroll-smooth');\n    const elem = document.querySelector('[data-aw-toggle-menu]');\n    if (elem) {\n      elem.classList.remove('expanded');\n    }\n    document.body.classList.remove('overflow-hidden');\n    document.getElementById('header')?.classList.remove('h-screen');\n    document.getElementById('header')?.classList.remove('expanded');\n    document.querySelector('#header nav')?.classList.add('hidden');\n  };\n\n  window.onload = onLoad;\n  window.onpageshow = onPageShow;\n\n  document.addEventListener('astro:after-swap', () => {\n    initTheme();\n    onLoad();\n    onPageShow();\n  });\n})();<\/script>"], ["<script>(function(){", "\n  if (window.basic_script) {\n    return;\n  }\n\n  window.basic_script = true;\n\n  function applyTheme(theme) {\n    if (theme === 'dark') {\n      document.documentElement.classList.add('dark');\n    } else {\n      document.documentElement.classList.remove('dark');\n    }\n  }\n\n  const initTheme = function () {\n    if ((defaultTheme && defaultTheme.endsWith(':only')) || (!localStorage.theme && defaultTheme !== 'system')) {\n      applyTheme(defaultTheme.replace(':only', ''));\n    } else if (\n      localStorage.theme === 'dark' ||\n      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)\n    ) {\n      applyTheme('dark');\n    } else {\n      applyTheme('light');\n    }\n  };\n  initTheme();\n\n  function attachEvent(selector, event, fn) {\n    const matches = typeof selector === 'string' ? document.querySelectorAll(selector) : selector;\n    if (matches && matches.length) {\n      matches.forEach((elem) => {\n        elem.addEventListener(event, (e) => fn(e, elem), false);\n      });\n    }\n  }\n\n  const onLoad = function () {\n\n    attachEvent('#header nav', 'click', function () {\n      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n      document.body.classList.remove('overflow-hidden');\n      document.getElementById('header')?.classList.remove('h-screen');\n      document.getElementById('header')?.classList.remove('expanded');\n      document.getElementById('header')?.classList.remove('bg-page');\n      document.querySelector('#header nav')?.classList.add('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');\n    });\n\n    attachEvent('[data-aw-toggle-menu]', 'click', function (_, elem) {\n      elem.classList.toggle('expanded');\n      document.body.classList.toggle('overflow-hidden');\n      document.getElementById('header')?.classList.toggle('h-screen');\n      document.getElementById('header')?.classList.toggle('expanded');\n      document.getElementById('header')?.classList.toggle('bg-page');\n      document.querySelector('#header nav')?.classList.toggle('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.toggle('hidden');\n    });\n\n    attachEvent('[data-aw-toggle-color-scheme]', 'click', function () {\n      if (defaultTheme.endsWith(':only')) {\n        return;\n      }\n      document.documentElement.classList.toggle('dark');\n      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';\n    });\n\n    attachEvent('[data-aw-social-share]', 'click', function (_, elem) {\n      const network = elem.getAttribute('data-aw-social-share');\n      const url = encodeURIComponent(elem.getAttribute('data-aw-url'));\n      const text = encodeURIComponent(elem.getAttribute('data-aw-text'));\n\n      let href;\n      switch (network) {\n        case 'facebook':\n          href = \\`https://www.facebook.com/sharer.php?u=\\${url}\\`;\n          break;\n        case 'twitter':\n          href = \\`https://twitter.com/intent/tweet?url=\\${url}&text=\\${text}\\`;\n          break;\n        case 'linkedin':\n          href = \\`https://www.linkedin.com/shareArticle?mini=true&url=\\${url}&title=\\${text}\\`;\n          break;\n        case 'whatsapp':\n          href = \\`https://wa.me/?text=\\${text}%20\\${url}\\`;\n          break;\n        case 'mail':\n          href = \\`mailto:?subject=%22\\${text}%22&body=\\${text}%20\\${url}\\`;\n          break;\n\n        default:\n          return;\n      }\n\n      const newlink = document.createElement('a');\n      newlink.target = '_blank';\n      newlink.href = href;\n      newlink.click();\n    });\n\n    const screenSize = window.matchMedia('(max-width: 767px)');\n    screenSize.addEventListener('change', function () {\n      document.querySelector('[data-aw-toggle-menu]')?.classList.remove('expanded');\n      document.body.classList.remove('overflow-hidden');\n      document.getElementById('header')?.classList.remove('h-screen');\n      document.getElementById('header')?.classList.remove('expanded');\n      document.getElementById('header')?.classList.remove('bg-page');\n      document.querySelector('#header nav')?.classList.add('hidden');\n      document.querySelector('#header > div > div:last-child')?.classList.add('hidden');\n    });\n\n    // Scroll functionality removed to make navbar static\n  };\n  const onPageShow = function () {\n    document.documentElement.classList.add('motion-safe:scroll-smooth');\n    const elem = document.querySelector('[data-aw-toggle-menu]');\n    if (elem) {\n      elem.classList.remove('expanded');\n    }\n    document.body.classList.remove('overflow-hidden');\n    document.getElementById('header')?.classList.remove('h-screen');\n    document.getElementById('header')?.classList.remove('expanded');\n    document.querySelector('#header nav')?.classList.add('hidden');\n  };\n\n  window.onload = onLoad;\n  window.onpageshow = onPageShow;\n\n  document.addEventListener('astro:after-swap', () => {\n    initTheme();\n    onLoad();\n    onPageShow();\n  });\n})();<\/script>"])), defineScriptVars({ defaultTheme: UI.theme }));
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/common/BasicScripts.astro", void 0);

const $$Astro$1 = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { metadata = {} } = Astro2.props;
  const { language, textDirection } = I18N;
  return renderTemplate`<html${addAttribute(language, "lang")}${addAttribute(textDirection, "dir")} class="2xl:text-[20px]"> <head>${renderComponent($$result, "CommonMeta", $$CommonMeta, {})}${renderComponent($$result, "Favicons", $$Favicons, {})}${renderComponent($$result, "CustomStyles", $$CustomStyles, {})}${renderComponent($$result, "ApplyColorMode", $$ApplyColorMode, {})}${renderComponent($$result, "Metadata", $$Metadata, { ...metadata })}${renderComponent($$result, "SiteVerification", $$SiteVerification, {})}${renderComponent($$result, "Analytics", $$Analytics, {})}<!-- Performance optimizations --><link rel="dns-prefetch" href="//fonts.googleapis.com"><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- Comment the line below to disable View Transitions -->${renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "fallback": "swap" })}${renderHead()}</head> <body class="antialiased text-default bg-page tracking-tight"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "BasicScripts", $$BasicScripts, {})}  </body> </html>`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
