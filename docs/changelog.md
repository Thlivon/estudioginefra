# Changelog

## 2026-10-15 · Hito 4 · `feat/diseno`

**Hecho**
- Sistema de diseño (`docs/diseno.md`): tokens en `packages/ui/estilos/` (base + tema penal y amparos), Source Serif 4 e Inter autoalojadas con la Fonts API.
- Tres propuestas de logo en SVG (`packages/ui/marca/`) y página temporal `/propuestas-logo/` (noindex). El header usa la propuesta 2 provisoriamente.
- Datos únicos en `packages/ui/estudio.mjs`; enlaces en `enlaces.mjs` con test (`npm test`). Enlace al sitio hermano por Related Projects (`@vercel/related-projects`).
- Content Collections del sitio penal con todos los campos del copy; fotos del equipo y Comodoro Py movidas a su ubicación definitiva.
- Componentes compartidos en `packages/ui/componentes/` y portada penal completa (10 bloques, sin JS de cliente). Lighthouse mobile: 99 / 100 / 100 / 66 (SEO 100 con `INDEXAR=true`; baja solo por el noindex de pruebas).
- `trailingSlash` en Astro y `vercel.json` de ambas apps.

**Decisiones**
- Hero con dirección de arte vía `getImage` (recorte vertical en mobile): `<Picture>` no admite fuentes por media query.
- Amparos: `--acento-sobre-tinta: #6FBFB8` porque el petróleo sobre tinta no llega a 3:1.
- Botones: si el aria-label del microcopy no contiene el texto visible, se agrega como texto oculto (WCAG 2.5.3).

**Revisión del líder**
- Revisé la portada en mobile (375 px) y desktop (1440 px), y la página de logos: sin problemas de diseño ni de contraste.
- Lighthouse mobile repetido de forma independiente: 99 / 100 / 100 / 66, LCP 2,3 s, CLS 0, TBT 10 ms.
- HTML: un solo H1, sin JS de cliente (solo JSON-LD), canonical y noindex correctos.
- Cerré un servidor de preview que el agente dejó corriendo.

**Pendiente (hito 5)**
- Resto de páginas y plantillas (áreas, guía, local, equipo con `TarjetaAbogado` completa, contacto, privacidad, 404, Migas, BloqueContacto) e inicio de amparos con su `content.config.ts`.
- Elegir logo y borrar `/propuestas-logo/`. Favicon e imagen OG definitivos (hito 7).
- Las FAQ del inicio muestran marcadores `{A CONFIRMAR}` del copy.

## 2026-10-15 · Hito 3 · `feat/copy`

**Hecho**
- Copy Penal: 6 áreas, guía "qué hacer si detienen a un familiar", FAQ, páginas (inicio, local, equipo, contacto, privacidad, 404), bios del equipo y `docs/copy/microcopy-penal.md`.
- Copy Amparos: 4 áreas reescritas desde el sitio actual, guía "qué hacer si la prepaga rechaza la cobertura", FAQ, páginas (inicio, equipo, contacto, privacidad, 404) y `docs/copy/microcopy-amparos.md`.
- ~24.000 palabras en total. 27 archivos de contenido con YAML válido; ambos sitios compilan.

**Revisión**
- Integré los campos de amparos de cada abogado (`enfoque.amparos`, `areas.amparos`) en `packages/ui/contenido/equipo/` y eliminé el archivo intermedio.
- Verifiqué las citas legales de amparos (Leyes 26.682, 24.901, 26.396, 23.660/23.661, PMO oncológico) y la guía penal: correctas. No hay hechos inventados (años, casos, títulos, testimonios).
- Sin cambios de tono: el copy mantiene los claims del sitio actual (48/72 h, 100 % confidencial) con el apego flexible elegido.

**Para el hito 4/5 (Constructor)**
- Los agentes agregaron campos al modelo de §5: `ctaIntermedio`, `ctaFinal`, `equipoFrase`, `dondeEstamos` (inicio penal); `estudio`, `areasLocal` (local); `canales`, `visitanos`, `confidencialidad` (contacto); `urgencia` (404). El cuerpo de `local.md` trae dos H2 que la plantilla separa. Algunos textos llevan enlaces Markdown en línea.
- Sección del formulario en privacidad marcada con `<!-- solo-con-formulario -->`.

**Pendiente: datos del estudio (`{A CONFIRMAR}`)**
- Colegio de las matrículas; horario de atención presencial; costo de la primera consulta y formas de pago.
- Bios: universidad, egreso, matriculación, posgrados, trayectoria de ambos; año de fundación del estudio; qué áreas atiende Ricardo.
- Cómo llegar al estudio y tiempo habitual de llegada a comisarías.
- Plazo de conservación de consultas del formulario.

**Pendiente: validación jurídica del abogado (`{VERIFICAR}`)**
- Plazos de aprehensión, detención, art. 308 y prisión preventiva (CPP PBA).
- Horario del allanamiento (CPP PBA y federal); estado del sistema acusatorio federal en Comodoro Py; juicio por jurados (Ley 14.543).
- Régimen Penal Tributario (montos y extinción por pago); sedes penales de La Matanza.
- Plazos de respuesta de prepagas según la Superintendencia de Servicios de Salud.

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
