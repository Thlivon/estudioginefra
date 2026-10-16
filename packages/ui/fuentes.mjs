// Solo para astro.config.mjs: importar astro/config desde código de páginas lo mete en el bundle.
import { fontProviders } from 'astro/config';

// Fuentes autoalojadas (Fonts API + Fontsource). Variables: los rangos son los del archivo variable de cada familia.
export const fuentes = [
  {
    provider: fontProviders.fontsource(),
    name: 'Source Serif 4',
    cssVariable: '--fuente-titulos',
    weights: ['200 900'],
    styles: ['normal'],
    subsets: ['latin'],
    fallbacks: ['Georgia', 'serif'],
  },
  {
    provider: fontProviders.fontsource(),
    name: 'Inter',
    cssVariable: '--fuente-texto',
    weights: ['100 900'],
    styles: ['normal'],
    subsets: ['latin'],
    fallbacks: ['system-ui', 'sans-serif'],
  },
];
