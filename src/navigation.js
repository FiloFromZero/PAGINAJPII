import { getPermalink } from './utils/permalinks';

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

export const headerData = {
  links: rootMenu,
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
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
