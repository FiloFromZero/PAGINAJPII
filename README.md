# 🏫 Instituto Psicopedagógico Juan Pablo II

> **Plataforma Web Institucional**  
> Formando líderes con valores humanos, excelencia académica y sentido social en Soacha, Cundinamarca.

![Astro](https://img.shields.io/badge/Astro-4.x-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![License](https://img.shields.io/badge/Licencia-Institucional-0A5C36?style=for-the-badge)

---

## 📖 Descripción General

Este repositorio alberga el sitio web oficial del **Instituto Psicopedagógico Juan Pablo II**, diseñado para ofrecer a padres de familia, estudiantes, docentes y a toda la comunidad educativa una experiencia digital moderna, rápida, accesible e interactiva.

El portal centraliza la información académica, procesos de admisión en línea, proyectos pedagógicos transversales (incluyendo la Granja Pedagógica), descarga de documentación oficial y múltiples canales de atención y contacto en tiempo real.

---

## ✨ Características Principales

- 🎨 **Identidad Visual Institucional:**
  - Paleta de color corporativa basada en el verde institucional (`#0A5C36`), tonos esmeralda y acentos complementarios.
  - Soporte completo para **Modo Claro** y **Modo Oscuro** con sincronización automática de preferencias y almacenamiento local persistente.
  - Tipografía moderna, legible y optimizada mediante `@fontsource-variable/inter` y `@fontsource-variable/plus-jakarta-sans`.

- 🧭 **Navegación Fluida y Adaptable:**
  - Barra de navegación (*Navbar*) con diseño limpio, microinteracciones suaves y menús desplegables adaptados tanto a escritorio como a pantallas táctiles móviles.
  - Indicador de sección activa visual sin saltos bruscos de peso tipográfico (*font-weight* estable).
  - Migas de pan (*Breadcrumbs*) dinámicas y accesibles para facilitar la orientación dentro de secciones multinivel.

- 🌿 **Granja Pedagógica:**
  - Espacio dedicado al proyecto agroecológico y vivencial, destacando las experiencias de aprendizaje práctico de los estudiantes en contacto con la naturaleza.

- 📝 **Módulo Integral de Admisiones:**
  - Información detallada y formularios para **Estudiantes Nuevos** y **Estudiantes Antiguos**.
  - Programación y pautas para entrevistas de ingreso y consulta del prospecto institucional.

- 📂 **Centro de Documentación Oficial:**
  - Acceso directo y estructurado a documentos institucionales (PEI, manual de convivencia, decretos).
  - Trámites de secretaría académica (solicitud de certificados, constancias, paz y salvos).
  - Sección para notificaciones judiciales y términos legales.

- 💬 **Canales de Comunicación & Atención al Usuario:**
  - **Chatbot Asistente Virtual:** Componente interactivo para responder preguntas frecuentes sobre admisiones, horarios, costos y requisitos.
  - **Botón Flotante de WhatsApp:** Conexión directa y rápida con las líneas de atención del colegio.
  - **Formulario de Contacto Funcional:** Envío automatizado de mensajes a través de un endpoint API (`/api/contact`) con backend en [Nodemailer](https://nodemailer.com/).

- ⚡ **Rendimiento & SEO de Alto Nivel:**
  - Generación de sitios estáticos (SSG) ultrarrápidos combinados con rutas dinámicas mediante Astro.
  - Optimización automática de imágenes (`.webp`, `.avif`).
  - Metadatos estructurados, OpenGraph, Twitter Cards y generación automática de `sitemap-index.xml` y `robots.txt`.

---

## 🛠️ Tecnologías y Herramientas

| Componente | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Núcleo / Framework** | [Astro 4](https://astro.build/) | Generador de sitios moderno, rápido y con carga mínima de JavaScript |
| **Estilos & UI** | [Tailwind CSS 3](https://tailwindcss.com/) | Diseño utilitario, responsive y sistema de diseño cohesivo |
| **Componentes Dinámicos** | [React 19](https://react.dev/) / Vanilla JS | Interactividad para asistentes virtuales y formularios |
| **Tipografía** | Fontsource (Inter & Plus Jakarta Sans) | Fuentes web optimizadas y locales |
| **Iconografía** | `astro-icon` + Iconify (Tabler, Flat Icons) | Íconos SVG nítidos y ligeros |
| **Sliders & Galerías** | Swiper.js | Carruseles interactivos y transiciones visuales |
| **Envío de Correo** | Nodemailer + Dotenv | Notificaciones del formulario de contacto |
| **Despliegue** | Netlify / Vercel | Alojamiento en la nube con funciones serverless |

---

## 📁 Estructura del Proyecto

```plaintext
PAGINAJPII/
├── public/                     # Archivos estáticos públicos (logos, imágenes, favicon, robots.txt)
├── src/
│   ├── assets/                 # Imágenes procesadas, estilos globales y estilos móviles
│   │   ├── images/             # Fotografías institucionales y recursos gráficos
│   │   └── styles/             # Archivos CSS personalizados (tailwind.css, menu-mobile.css)
│   ├── components/             # Componentes modulares y reutilizables
│   │   ├── blog/               # Componentes del blog y noticias
│   │   ├── common/             # Scripts base, SEO, metadatos y selector de tema
│   │   ├── ui/                 # Elementos básicos (botones, títulos, tarjetas)
│   │   ├── widgets/            # Encabezado (Header), pie de página (Footer), Hero, etc.
│   │   ├── Carousel.astro      # Carrusel principal de la página de inicio
│   │   ├── Chatbot.astro       # Asistente virtual institucional
│   │   ├── Logo.astro          # Logotipo con lema institucional
│   │   └── WhatsAppButton.astro # Botón de chat directo por WhatsApp
│   ├── layouts/                # Plantillas maestras de página (PageLayout, Layout)
│   ├── pages/                  # Rutas y páginas del sitio
│   │   ├── api/                # Endpoints de API (contact.ts para envío de correos)
│   │   ├── admisiones/         # Rutas de admisiones (nuevos, antiguos, entrevista, etc.)
│   │   ├── documentos-oficiales/# Documentos de secretaría, institucionales y reglamento
│   │   ├── Granja.astro        # Sección de la Granja Pedagógica
│   │   ├── nosotros.astro      # Misión, visión, valores e historia
│   │   ├── servicios.astro     # Servicios educativos y extracurriculares
│   │   ├── contacto.astro      # Formulario y mapa de ubicación
│   │   └── index.astro         # Página principal de bienvenida
│   ├── utils/                  # Funciones de utilidad (fechas, permalinks, blog, imágenes)
│   └── config.yaml             # Configuración general del sitio y metadatos
├── vendor/                     # Integración interna del sistema de configuración
├── astro.config.mjs            # Configuración principal de Astro y plugins Vite
├── tailwind.config.cjs         # Configuración de colores, fuentes y plugins de Tailwind
└── package.json                # Dependencias y scripts de ejecución
```

---

## 🚀 Instalación y Puesta en Marcha

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

### 1. Requisitos Previos

- [Node.js](https://nodejs.org/) (versión `18.17.1`, `20.3.0` o superior).
- Gestor de paquetes `npm` (incluido con Node.js).

### 2. Clonar o acceder al directorio del proyecto

```bash
cd PAGINAJPII
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Configuración de Variables de Entorno

Para habilitar el envío real de mensajes desde el formulario de contacto, crea un archivo `.env` en la raíz del proyecto tomando como referencia las siguientes variables:

```env
# Configuración del servicio SMTP para envío de correos (Nodemailer)
EMAIL_USER=tu-correo@gmail.com
EMAIL_PASS=tu-contraseña-de-aplicacion-o-smtp
EMAIL_TO=destinatario-colegio@colegiojuanpabloii.edu.co
```

> 💡 **Nota sobre Gmail:** Si utilizas Gmail como proveedor, debes generar una **Contraseña de Aplicación** desde la configuración de seguridad de tu cuenta de Google (2FA requerido).

### 5. Iniciar el Servidor de Desarrollo

```bash
npm run dev
```

Una vez iniciado, abre tu navegador en [http://localhost:4321](http://localhost:4321) (o el puerto indicado en la terminal) para visualizar el sitio.

---

## 📦 Scripts Disponibles

En el archivo `package.json` encontrarás los siguientes comandos:

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local con recarga en caliente (*Hot Module Replacement*) |
| `npm run build` | Compila y empaqueta el sitio optimizado para despliegue en producción |
| `npm run preview` | Ejecuta un servidor local para previsualizar la compilación de producción |
| `npm run format` | Aplica formato automático al código fuente con Prettier |
| `npm run lint:eslint` | Analiza el código en busca de posibles errores de sintaxis y buenas prácticas |

---

## 🌐 Despliegue en Producción

El proyecto está preparado para desplegarse fácilmente en plataformas de alojamiento estático o serverless como **Netlify** o **Vercel**:

1. **Netlify:**
   - Comando de compilación: `npm run build`
   - Directorio de publicación: `dist`
   - Configura las variables de entorno (`EMAIL_USER`, `EMAIL_PASS`, `EMAIL_TO`) en el panel de *Site Configuration > Environment Variables*.

2. **Vercel:**
   - Detecta automáticamente Astro como framework.
   - Agrega las variables de entorno en los ajustes del proyecto.

---

## 🏛️ Información Institucional

**Instituto Psicopedagógico Juan Pablo II**  
- 📍 **Ubicación:** Soacha, Cundinamarca, Colombia  
- 📱 **Canal de Admisiones:** WhatsApp Institucional  
- 🌐 **Sitio Web:** [https://colegiojuanpabloii.edu.co](https://colegiojuanpabloii.edu.co)  
- 📧 **Contacto General:** Consulta el directorio en la sección de [Contacto](http://localhost:4321/contacto)

---

*Desarrollado y mantenido con dedicación para la comunidad educativa del Instituto Psicopedagógico Juan Pablo II.*
