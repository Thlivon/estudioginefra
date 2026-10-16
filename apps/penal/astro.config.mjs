import { defineConfig } from 'astro/config';
import { site } from '@ginefra/ui/site.mjs';
import { fuentes } from '@ginefra/ui/fuentes.mjs';

export default defineConfig({
  site,
  trailingSlash: 'always',
  fonts: fuentes,
  // El CSS total es chico: inline evita una petición que bloquea el render.
  build: { inlineStylesheets: 'always' },
});
