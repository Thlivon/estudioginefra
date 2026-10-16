# Changelog

## 2026-10-15 · Hito 2 · `feat/estructura`

**Hecho**
- `docs/estructura.md` (agente Estructura): sitemap de ambos sitios, navegación, wireframes textuales de 9 plantillas, 20 componentes compartidos, modelo de contenido, enlazado interno, estrategia de CTA y notas para Copy.
- Penal: 12 páginas indexables + 404. Amparos: 9 + 404.

**Correcciones de revisión**
- El enlace al sitio hermano sale de Related Projects de Vercel, no de una variable manual (`URL_SITIO_HERMANO` eliminada): así cambiar dominios no requiere tocar nada.
- Analítica: Vercel Web Analytics sin cookies (el agente había asumido "sin analítica").
- Barra final de URLs garantizada en Astro y en `vercel.json`.

**Decisiones**
- Mobile: barra fija de 2 botones (llamar + WhatsApp); en desktop, WhatsApp flotante.
- CTA primario: llamar en penal (WhatsApp solo en delitos económicos), WhatsApp en amparos.
- Voseo en ambos sitios.

**Pendiente (a confirmar por el estudio)**
- Violencia de género: ¿solo defensa del denunciado o también querella?
- ¿La guardia 24 h aplica también a amparos?
- Horario de atención presencial, código postal, coordenadas y colegio de las matrículas.
- Hito 3: Copy Penal y Copy Amparos en paralelo.

## 2026-10-15 · Hito 1 · `feat/inventario`

**Hecho**
- `docs/inventario.md`: estructura, textos literales, datos del estudio, SEO actual y problemas del sitio en CardPro.
- Imágenes originales descargadas en `docs/legacy/{marca,equipo,fondos,og}/`.
- Verificado tras el merge del hito 0: `main` despliega a producción y los dominios de tl256 sirven con `noindex` y canonical propio.

**Decisiones**
- Comodoro Py (con licencia) es el hero del sitio penal.
- `og/card.jpg` es inutilizable (negra). El logo provisorio queda solo como referencia.

**Pendiente**
- Foto nueva de Facundo Ginefra (la actual no alcanza para planos grandes).
- Colegio de las matrículas.
- Hito 2: estructura (agente Estructura).

## 2026-10-15 · Hito 0 · `chore/setup`

**Hecho**
- Repo público `Thlivon/estudioginefra`, monorepo con npm workspaces: `apps/penal`, `apps/amparos`, `packages/ui`.
- Astro 7 estático en ambos sitios, con layout compartido y páginas provisorias.
- URL canónica derivada de `VERCEL_PROJECT_PRODUCTION_URL`; `noindex` mientras `INDEXAR` no sea `true`.
- Dos proyectos Vercel (team thcodex) conectados al repo, con dominios de prueba en tl256.com:
  - `estudioginefra-penal` (`prj_kXtJoj7DieC72tPjckN9vQK6sX7H`), root `apps/penal`.
  - `estudioginefra-amparos` (`prj_2UsAHMsaW0gQIlXXXt2DcdDNipVp`), root `apps/amparos`.
  - Variables: `INDEXAR=false`, `CONTACTO_EMAIL=false`. Skip de builds sin cambios activado.
- `main` protegida: solo entra por PR.
- `.gitattributes` fija finales de línea LF.

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
