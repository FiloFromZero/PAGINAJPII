import { d as createAstro, e as createComponent, m as maybeRenderHead, i as renderComponent, r as renderTemplate, u as unescapeHTML, j as Fragment } from '../astro_CfJRq3Yt.mjs';
import 'kleur/colors';
import { a as $$Image, b as $$PageLayout, f as $$WhatsAppButton } from './admisiones_DsFyNX6Q.mjs';
import { $ as $$WidgetWrapper } from './click-through_D7_kWT5P.mjs';
import { a as $$Content } from './index_BGd6N1Nt.mjs';
import { $ as $$Features2 } from './contacto_CDR0Thhx.mjs';
import { $ as $$Hero } from './lead-generation_DrrgmZlO.mjs';

const $$Astro$2 = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$GridItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$GridItem;
  const { image, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="mb-6 transition"> <div class="relative md:h-64 bg-gray-400 dark:bg-slate-700 rounded shadow-lg mb-6"> ${image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "class": "w-full md:h-full rounded shadow-lg bg-gray-400 dark:bg-slate-700", "widths": [400, 900], "width": 400, "sizes": "(max-width: 900px) 400px, 900px", "alt": title, "aspectRatio": "16:9", "layout": "cover", "loading": "lazy", "decoding": "async" })}`} </div> <h3 class="text-xl sm:text-2xl font-bold leading-tight mb-2 font-heading dark:text-slate-300"> ${title} </h3> <p class="text-muted dark:text-slate-400 text-lg">${description}</p> </article>`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/common/GridItem.astro", void 0);

const $$Astro$1 = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Grid = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Grid;
  const { items } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid gap-6 row-gap-5 md:grid-cols-2 lg:grid-cols-4 -mb-6"> ${items.map((item) => renderTemplate`${renderComponent($$result, "Item", $$GridItem, { ...item })}`)} </div>`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/common/Grid.astro", void 0);

const $$Astro = createAstro("https://iejuanpabloiisoacha.edu.co");
const $$Classrooms = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Classrooms;
  const {
    title = await Astro2.slots.render("title"),
    information = await Astro2.slots.render("information"),
    items,
    id,
    isDark = false,
    classes = {},
    bg = await Astro2.slots.render("bg")
  } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "WidgetWrapper", $$WidgetWrapper, { "id": id, "isDark": isDark, "containerClass": classes?.container, "bg": bg }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col lg:justify-between lg:flex-row mb-8"> ${title && renderTemplate`<div class="md:max-w-sm"> <h2 class="text-3xl font-bold tracking-tight sm:text-4xl sm:leading-none group font-heading mb-2">${unescapeHTML(title)}</h2> </div>`} ${information && renderTemplate`<p class="text-muted dark:text-slate-400 lg:text-sm lg:max-w-md">${unescapeHTML(information)}</p>`} </div> ${renderComponent($$result2, "Grid", $$Grid, { "items": items })} ` })}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/components/widgets/Classrooms.astro", void 0);

const $$Servicios = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Servicios"
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$PageLayout, { "metadata": metadata }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "Hero", $$Hero, { "tagline": "Servicios", "title": "Servicios para Crecer y Aprender", "subtitle": "En el Instituto Psicopedag\xF3gico Juan Pablo II, contamos con aulas especiales que nos permiten brindar formaci\xF3n integral a nuestros educandos, a trav\xE9s de la l\xFAdica, la interacci\xF3n y el desarrollo de sus habilidades en diferentes campos.", "image": {
    src: "~/assets/images/SERVICIOS.png",
    alt: "servicios",
    layout: "cover"
  } })}  ${renderComponent($$result2, "Classrooms", $$Classrooms, { "title": "M\xE1s All\xE1 del Aula", "information": "En el Instituto Psicopedag\xF3gico Juan Pablo II, ofrecemos un entorno de aprendizaje enriquecedor con aulas especialmente dise\xF1adas para fomentar el desarrollo integral de nuestros estudiantes. A trav\xE9s del juego, la interacci\xF3n y la exploraci\xF3n, cultivamos sus habilidades en diversas \xE1reas, brind\xE1ndoles una educaci\xF3n completa y personalizada.", "items": [
    {
      image: "~/assets/images/servicios_biblioteca.jpg",
      title: "Biblioteca",
      description: "Nuestra biblioteca cuenta con una amplia variedad de libros y recursos educativos para fomentar la lectura y el aprendizaje en nuestros estudiantes."
    },
    {
      image: "~/assets/images/servicios_laboratorio.jpg",
      title: "Laboratorio",
      description: "Nuestro laboratorio est\xE1 equipado con herramientas y materiales especializados para que los estudiantes puedan realizar experimentos y explorar conceptos cient\xEDficos de forma pr\xE1ctica."
    },
    {
      image: "~/assets/images/servicios_ludoteca.jpg",
      title: "Ludoteca",
      description: "En nuestra ludoteca, los estudiantes pueden disfrutar de juegos y actividades l\xFAdicas que fomentan el aprendizaje, la creatividad y el desarrollo de habilidades sociales."
    },
    {
      image: "~/assets/images/servicios_sistemas.jpg",
      title: "Sala de sistemas",
      description: "Nuestra sala de sistemas est\xE1 equipada con computadoras y software especializado para que los estudiantes puedan desarrollar habilidades digitales y explorar el mundo de la tecnolog\xEDa."
    }
  ] }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` ${maybeRenderHead()}<div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}` })}  ${renderComponent($$result2, "Features2", $$Features2, { "title": "Grados y Asignaturas", "subtitle": "En el Instituto Psicopedag\xF3gico Juan Pablo II, ofrecemos una formaci\xF3n integral y personalizada para estudiantes con necesidades educativas especiales. Nuestros grados abarcan desde preescolar hasta bachillerato, con un enfoque en el desarrollo de habilidades acad\xE9micas, socioemocionales y de autonom\xEDa.", "columns": 3, "items": [
    {
      title: "PRE ESCOLAR",
      description: "En esta etapa inicial, sentamos las bases para el aprendizaje a trav\xE9s del juego, la exploraci\xF3n y la estimulaci\xF3n temprana. Trabajamos \xE1reas como lenguaje, motricidad, socializaci\xF3n y desarrollo cognitivo, preparando a los ni\xF1os para los desaf\xEDos futuros.",
      icon: "tabler:baby-carriage"
    },
    {
      title: "PRIMARIA (1\xB0 - 5\xB0)",
      description: "Durante la primaria, consolidamos los conocimientos b\xE1sicos en \xE1reas clave como matem\xE1ticas, lectura, escritura, ciencias sociales y naturales. Fomentamos el pensamiento l\xF3gico, la creatividad y la curiosidad, preparando a los estudiantes para los siguientes niveles educativos.",
      icon: "tabler:book"
    },
    {
      title: "BACHILLERATO (6\xB0 - 11\xB0)",
      description: "En el bachillerato, profundizamos en las \xE1reas acad\xE9micas, preparando a los estudiantes para la educaci\xF3n superior y el mundo laboral. Impulsamos el pensamiento cr\xEDtico, la investigaci\xF3n y la resoluci\xF3n de problemas, brindando una formaci\xF3n integral en diversas disciplinas.",
      icon: "tabler:school"
    }
  ] })}  ${renderComponent($$result2, "Content", $$Content, { "classes": {
    container: "mt-[-120px]"
  }, "isReversed": true, "items": [
    {
      title: "Matem\xE1ticas",
      description: "Desarrollamos habilidades de razonamiento l\xF3gico, resoluci\xF3n de problemas y pensamiento abstracto a trav\xE9s del estudio de n\xFAmeros, operaciones, geometr\xEDa y \xE1lgebra.",
      icon: "tabler:calculator"
    },
    {
      title: "Lectura",
      description: "Fomentamos el amor por la lectura y la comprensi\xF3n de textos, ampliando el vocabulario y desarrollando habilidades de interpretaci\xF3n y an\xE1lisis cr\xEDtico.",
      icon: "tabler:book-2"
    },
    {
      title: "Escritura",
      description: "Cultivamos la expresi\xF3n escrita, la creatividad y la comunicaci\xF3n efectiva a trav\xE9s de la producci\xF3n de textos claros, coherentes y persuasivos.",
      icon: "tabler:pencil"
    },
    {
      title: "Ingl\xE9s",
      description: "Abrimos las puertas a la comunicaci\xF3n global y el acceso a nuevas culturas y oportunidades a trav\xE9s del aprendizaje del idioma ingl\xE9s, tanto en su forma oral como escrita.",
      icon: "tabler:language"
    },
    {
      title: "Historia",
      description: "Exploramos el pasado para comprender el presente y construir el futuro, analizando eventos, personajes y procesos hist\xF3ricos que han moldeado nuestra sociedad.",
      icon: "tabler:history"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    alt: "Asignaturas 1"
  } })}  ${renderComponent($$result2, "Content", $$Content, { "classes": {
    container: "mt-[-60px]"
  }, "isAfterContent": true, "items": [
    {
      title: "Lenguaje",
      description: "Dominamos las herramientas de la comunicaci\xF3n oral y escrita, desarrollando habilidades de expresi\xF3n, comprensi\xF3n y an\xE1lisis cr\xEDtico del lenguaje en todas sus formas.",
      icon: "tabler:message-2"
    },
    {
      title: "Artes",
      description: "Despertamos la creatividad, la sensibilidad y la expresi\xF3n art\xEDstica a trav\xE9s de la exploraci\xF3n de diversas disciplinas como la m\xFAsica, la pintura, el teatro y la danza.",
      icon: "tabler:palette"
    },
    {
      title: "Biolog\xEDa",
      description: "Descubrimos los secretos de la vida y la naturaleza, estudiando los seres vivos, sus procesos y su interacci\xF3n con el entorno.",
      icon: "tabler:leaf"
    },
    {
      title: "Qu\xEDmica",
      description: "Analizamos la composici\xF3n, estructura y propiedades de la materia, comprendiendo las reacciones qu\xEDmicas y su impacto en el mundo que nos rodea.",
      icon: "tabler:flask"
    },
    {
      title: "\xC9tica",
      description: "Reflexionamos sobre los valores, principios morales y dilemas \xE9ticos que gu\xEDan nuestras acciones, fomentando la toma de decisiones responsables y el respeto hacia los dem\xE1s.",
      icon: "tabler:mood-heart"
    }
  ], "image": {
    src: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    alt: "Asignaturas 2"
  } })}  ${renderComponent($$result2, "Content", $$Content, { "isReversed": true, "isAfterContent": true, "items": [
    {
      title: "Docentes con destacada experiencia laboral."
    },
    {
      title: "Egresados Juanpablinos."
    },
    {
      title: "Alto sentido humano."
    }
  ], "image": {
    src: "~/assets/images/inicio_docentes.jpeg",
    alt: "Docentes"
  } }, { "bg": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "bg" }, { "default": ($$result4) => renderTemplate` <div class="absolute inset-0 bg-blue-50 dark:bg-transparent"></div> ` })}`, "content": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "slot": "content" }, { "default": ($$result4) => renderTemplate` <h3 class="text-2xl font-bold tracking-tight dark:text-white sm:text-3xl mb-2">Nuestros Docentes</h3>
Nuestro cuerpo directivo y docente siempre atento a acompañar los procesos institucionales, son profesionales con altos
      conocimientos y sentido humano que nos permiten promover en nuestros educandos. Educación de calidad y con visión de
      servicio al municipio de Soacha y al país.
` })}` })} ${renderComponent($$result2, "WhatsAppButton", $$WhatsAppButton, { "phoneNumber": "573196721410", "message": "Hola, estoy interesado en sus servicios." })} ` })}`;
}, "C:/Users/user/Desktop/JUANPABLO/P\xC1GINA WEB/Colegio_JPII/src/pages/servicios.astro", void 0);

const $$file = "C:/Users/user/Desktop/JUANPABLO/PÁGINA WEB/Colegio_JPII/src/pages/servicios.astro";
const $$url = "/servicios";

export { $$Servicios as default, $$file as file, $$url as url };
