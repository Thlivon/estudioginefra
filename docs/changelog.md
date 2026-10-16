# Changelog

## 2026-10-16 · Hito 6 · `feat/formulario`

**Hecho**
- `@astrojs/vercel` en ambas apps: el sitio sigue estático y solo `POST /api/contacto/` corre como función (`prerender = false`). El build sale en `.vercel/output/`.
- Endpoint compartido (`packages/ui/contacto-servidor.mjs`):
  - Flag `CONTACTO_EMAIL` chequeado en runtime (404 si está apagado) y límite de 10 KB.
  - Honeypot `empresa` con éxito falso, Vercel BotID (`checkBotId`) y validación del lado del servidor (`contacto.mjs`, con test).
  - Envío por `fetch` a Resend, solo en texto plano, con el asunto saneado y `reply_to` si el visitante dejó correo.
  - Responde JSON a `fetch` (200/400/403/500) y 303 al POST nativo.
- Componente `Formulario` (campos y textos del microcopy de cada sitio; en penal, el aviso de urgencia con el botón de llamar). Mejora progresiva: un script chico, solo en `/contacto/` y solo con el flag, envía con `fetch`, marca errores por campo (`aria-invalid` + `aria-describedby`) e inicia BotID.
- `/contacto/enviado/` (noindex) y el enlace "o dejanos tu consulta" en el CTA final del inicio: solo con el flag.
- Rewrites de BotID en el `vercel.json` de cada app. `.env.example` y `README.md` explican cómo encender el formulario.
- Verificado:
  - Flag apagado: build y `npm test` (9 tests) pasan, ningún HTML carga JS, no existe `/contacto/enviado/` y `POST /api/contacto/` da 404.
  - Flag encendido en `astro dev` (penal y amparos): envío válido (log en consola + redirección), honeypot (éxito sin log), errores por campo, POST nativo (303 a enviado o a `#error-envio`) y cuerpo > 10 KB rechazado.
  - Lighthouse mobile de `/contacto/` con el flag: penal 98 / 100 / 100 y amparos 97 / 100 / 100.

**Decisiones**
- La ruta es `/api/contacto/`, con barra final (`trailingSlash: 'always'`; el adapter redirige con 308 la variante sin barra). BotID protege esa ruta exacta.
- BotID en Astro: `initBotId` de `botid/client/core` en el script del formulario. `checkBotId` lee los encabezados del contexto de la función de Vercel; además le pasamos los del request (`advancedOptions.headers`), que la librería usa fuera de Vercel. En `astro dev` el cliente no se inicia: sin el proxy de `vercel.json`, el fetch protegido fallaría.
- El error del POST nativo vuelve a `/contacto/?error=1#error-envio` (en lugar de `#formulario`): la caja de error se muestra con `:target` porque, sin JS, la página estática no puede leer el parámetro.
- En amparos el tipo de consulta es obligatorio (el microcopy trae mensaje de error); en penal es opcional.
- Tokens nuevos: `--error` (#A3261C, 7,4:1) y `--borde-campo` (#767D8C, 4,1:1 sobre blanco).

**Revisión del líder**
- Revisé el endpoint: validación en servidor, texto plano, asunto saneado, sin datos personales en logs y flag chequeado en runtime. Correcto.
- Agregué un control de origen: un POST desde otro dominio (`Origin` distinto) recibe 403. Test nuevo en `contacto-servidor.test.mjs` (flag apagado → 404; otro origen → 403). Total: 11 tests.
- `CONTACTO_EMAIL=true` activado **solo** en las previews de la rama `feat/formulario` (ambos proyectos) para probar en Vercel; producción sigue apagada.
- Sin rate limiting propio: BotID + honeypot + límite diario de Resend. Si aparece spam humano, se agrega una regla de rate limit en el firewall de Vercel.

- Probado en la preview de Vercel con el flag encendido: `/contacto/` muestra el formulario; POST desde otro origen → 403 (control de origen); POST del mismo origen por curl → 403 por BotID (log "rechazado por BotID"); el challenge de BotID responde 200 a través de las rewrites; `/contacto/enviado/` existe.

**Pendiente**
- Configurar Resend (cuenta, dominio verificado, `RESEND_API_KEY`, `CONTACTO_REMITENTE`) y probar un envío real desde un navegador: confirma que BotID deja pasar a una persona y que el correo llega.
- Con el flag apagado, el JS del formulario igual se genera en `_astro/`, pero ninguna página lo carga.

## 2026-10-16 · Hito 5 · `feat/paginas`

**Hecho**
- Logo definitivo: propuesta 2 (wordmark) en `packages/ui/marca/logo-{horizontal,simbolo}.svg`; propuestas 1 y 3 y `/propuestas-logo/` eliminadas. `favicon.svg` en `public/` de cada app (tinta del sitio; papel en pestañas oscuras).
- Penal: 13 páginas. Se suman 6 áreas y la guía (`[slug].astro`), página local, equipo, contacto, privacidad y 404.
- Amparos: 10 páginas. Inicio completo (§3.2), 4 áreas, guía, equipo, contacto, privacidad y 404.
- Colecciones compartidas en `packages/ui/colecciones.ts` (cada `content.config.ts` las reexporta). Plantillas en `packages/ui/plantillas/` (área, guía, equipo, contacto, privacidad, 404). Componentes nuevos: `Migas` (con `BreadcrumbList`), `BloqueContacto`, `DatosEstudio` y `TarjetaAbogado` completa.
- JSON-LD: `Service` (áreas), `Article` (guías), `BreadcrumbList` (internas), `FAQPage` (solo preguntas visibles), `AboutPage` + `Person` (equipo), `ContactPage`, `WebPage` (privacidad), `LegalService` con localidades (página local).
- Delitos económicos con el orden de CTA invertido y sus etiquetas ("Consultar por WhatsApp" · "Llamar"), también en la barra fija.
- `CONTACTO_EMAIL` se lee en build (`site.mjs` → `contactoEmail`): en privacidad oculta la sección `solo-con-formulario`; en contacto reserva el lugar del formulario (`#formulario`).
- Verificado: build sin advertencias, `npm test` (5 tests), sin JS de cliente, un H1 por página, jerarquía sin saltos, migas en todas las internas y ningún enlace interno ni ancla rota en los dos sitios. Lighthouse mobile 99 / 100 / 100 en área, guía y contacto penal y en inicio, área y guía de amparos; SEO 63–66 solo por el noindex de pruebas.

**Decisiones**
- Títulos fijos de bloque y etiquetas de botón por sitio en `sitio.plantillas` / `sitio.textos` (microcopy), para que las plantillas sean una sola.
- Los cuerpos con marcas (`<!-- bloque: … -->`, dos H2 en `local.md`) se parten sobre el HTML que renderiza Astro (`texto.mjs`, con test).
- El índice de la guía (`<details>`) arranca cerrado en todos los tamaños: sin JS no se puede abrir solo en desktop.
- La primera foto de la página de equipo se carga sin lazy (es el LCP).

**Pendiente**
- Hito 6: formulario de contacto, endpoint y `/contacto/enviado`; enlace terciario "o dejanos tu consulta" en el CTA final del inicio.
- Hito 7: imágenes OG, `robots.txt`/sitemap, `geo` y código postal en `LegalService`.
- Siguen visibles los marcadores `{A CONFIRMAR}` y `{VERIFICAR}` del copy (FAQ, bios, horarios de amparos, plazos de la guía penal) y el colegio de las matrículas.

**Revisión del líder**
- Revisé en navegador (375 px): inicio de amparos, área de allanamientos, guía penal, contacto penal y menú mobile sin JS. Sin problemas.
- Chequeo propio sobre `dist/`: 13 páginas penal y 10 amparos, 0 enlaces internos rotos, 0 scripts de cliente, un H1 por página.
- Sin dependencias nuevas.
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
