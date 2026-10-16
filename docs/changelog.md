# Changelog

## 2026-10-15 · Hito 0 · `chore/setup`

**Hecho**
- Repo público `Thlivon/estudioginefra`, monorepo con npm workspaces: `apps/penal`, `apps/amparos`, `packages/ui`.
- Astro 7 estático en ambos sitios, con layout compartido y páginas provisorias.
- URL canónica derivada de `VERCEL_PROJECT_PRODUCTION_URL`; `noindex` mientras `INDEXAR` no sea `true`.
- Dos proyectos Vercel (team thcodex) conectados al repo, con dominios de prueba en tl256.com.

**Decisiones**
- Producción: `estudioginefra.com.ar` sirve penal; `amparos.estudioginefra.com.ar` sirve amparos; `www.` y `penal.` redirigen (308) al apex.
- Formulario de contacto detrás del flag `CONTACTO_EMAIL` (apagado). Destino: estudiolosdefensores@hotmail.com.
- WhatsApp y llamadas: +54 9 11 5126-1499. También se muestra a Ricardo Ginefra: +54 9 11 5927-1122.
- Matrículas: Facundo Ginefra T° 13 F° 277; Ricardo Ginefra T° 10 F° 254.
- Normas de publicidad: apego flexible. Sin CMS: el contenido se edita en Markdown.

**Pendiente**
- Colegio de las matrículas.
- Registros CNAME en Cloudflare para los dominios de prueba.
- Hito 1: inventario del sitio actual e imágenes.
