import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, sharpImageService } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';

import jpiiIntegration from './vendor/integration';
import netlify from '@astrojs/netlify';

// Importar la integración de React
import react from '@astrojs/react';

import {
  readingTimeRemarkPlugin,
  responsiveTablesRehypePlugin,
  lazyImagesRehypePlugin,
} from './src/utils/frontmatter.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  adapter: netlify(),
  output: 'hybrid',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
  server: {
    port: 3000, // Cambia este número por el puerto que desees
    host: true  // Permite conexiones desde cualquier IP
  },
  integrations: [
    // Agregar la integración de React
    react(),

    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    mdx(),
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
          'graduation-cap'
        ],
        'vscode-icons':[
          'file-type-pdf2',
          'file-type-video',
        ]
      },
    }),
    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),
    compress({
      CSS: true,
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),
    jpiiIntegration({
      config: './src/config.yaml',
    }),
  ],

  image: {
    service: sharpImageService(),
    domains: ['cdn.pixabay.com'],
    remotePatterns: [{ protocol: "https" }],
    formats: ['avif', 'webp', 'jpeg'],
    quality: 80,
    densities: [1, 2],
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [responsiveTablesRehypePlugin, lazyImagesRehypePlugin],
  },

  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
    build: {
      cssCodeSplit: true,
      minify: 'esbuild',
      assetsInlineLimit: 4096,
    },
  },
});
