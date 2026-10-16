import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import { site } from '@ginefra/ui/site.mjs';
import { fuentes } from '@ginefra/ui/fuentes.mjs';

export default defineConfig({
  site,
  // Estático salvo /api/contacto/ (prerender = false), que corre como función de Vercel.
  adapter: vercel(),
  trailingSlash: 'always',
  fonts: fuentes,
  // El CSS total es chico: inline evita una petición que bloquea el render.
  build: { inlineStylesheets: 'always' },
});
