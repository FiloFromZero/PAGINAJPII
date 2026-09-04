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
    text: 'Granja',
    href: getPermalink('/Granja'),
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
};

export const footerData = {
  links: [
    {
      title: 'Website',
      links: rootMenu,
    },
    {
      title: 'Notificaciones Judiciales',
      links: [
        {
          text: '📋 Información y Buzones',
          href: getPermalink('/notificaciones-judiciales'),
          ariaLabel: 'Información sobre notificaciones judiciales',
        },
        {
          text: '✉️ notificacionesjudiciales@iejuanpabloiisoacha.edu.co',
          href: getPermalink('/notificaciones-judiciales'),
          ariaLabel: 'Ver información de noticaciones judiciales',
        },
        {
          text: '✉️ pqrs@iejuanpabloiisoacha.edu.co',
          href: getPermalink('/notificaciones-judiciales'),
          ariaLabel: 'Ver información de PQRS',
        },
      ],
    },
  ],
  /* secondaryLinks: [
    { text: 'Terminos', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ], */
  socialLinks: [
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/institutopsicopedagogicojuanpabloii',
    },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/ipjp2' },
    { ariaLabel: 'TikTok', icon: 'tabler:brand-tiktok', href: 'https://tiktok.com/@ipjuanpabloii' },
  ],
  footNote: `
    <span class="text-sm text-gray-500 dark:text-gray-400">© ${new Date().getFullYear()} Instituto Psicopedagógico Juan Pablo II. Todos los derechos reservados.</span>
  `,
};
