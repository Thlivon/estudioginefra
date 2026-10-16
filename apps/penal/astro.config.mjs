import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import { site } from '@ginefra/ui/site.mjs';
import { fuentes } from '@ginefra/ui/fuentes.mjs';

export default defineConfig({
  site,
  // Estático salvo /api/contacto/ (prerender = false), que corre como función de Vercel.
  adapter: vercel(),
  trailingSlash: 'always',
  fonts: fuentes,
  // La confirmación del formulario no se indexa.
  integrations: [sitemap({ filter: (pagina) => !pagina.endsWith('/contacto/enviado/') })],
  // El CSS total es chico: inline evita una petición que bloquea el render.
  build: { inlineStylesheets: 'always' },
});
