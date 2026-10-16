# Estructura · arquitectura de información

Hito 2. Define páginas, navegación, plantillas, componentes y modelo de contenido de los dos sitios de **Ginefra & Asociados**. Es la base para los agentes de Diseño, Copy y Desarrollo: lo que no está acá no se construye.

- **Penal** (principal): `estudioginefra.com.ar` · `apps/penal`
- **Amparos** (secundario): `amparos.estudioginefra.com.ar` · `apps/amparos`
- Compartido: `packages/ui` (componentes, plantillas, datos del estudio, temas)

## 0. Reglas generales

| Tema | Regla |
|---|---|
| URLs | Español, minúsculas, sin acentos, palabras con guiones. Áreas y guías en la raíz (`/allanamientos`), sin carpeta `/areas`. Una sola forma de URL (con barra final): `trailingSlash: 'always'` en Astro y `"trailingSlash": true` en el `vercel.json` de cada app, para que Vercel redirija la variante sin barra. Canonical coherente. |
| Encabezados | Un solo H1 por página. H2 por bloque, H3 dentro del bloque. Nunca saltar niveles. |
| JavaScript | Cero JS para navegar o contactar. Menú mobile, desplegable de áreas, FAQ e índice con `<details>/<summary>`. Contacto con enlaces `https://wa.me/` y `tel:`. |
| Contacto | Todo el contacto funciona solo con WhatsApp + teléfono. El formulario es un bloque extra que solo se renderiza con `CONTACTO_EMAIL=true` (ver §3.7). |
| Números | WhatsApp y `tel:` en formato internacional: `wa.me/5491151261499`, `tel:+5491151261499`; Ricardo: `wa.me/5491159271122`, `tel:+5491159271122`. Mostrados al usuario como `11 5126-1499` / `11 5927-1122`. |
| Datos del estudio | Una sola fuente: `packages/ui/estudio.mjs` (nombre, dirección, teléfonos, matrículas, Instagram, horarios, URLs de ambos sitios). Ninguna plantilla escribe un teléfono a mano. |
| Normas de publicidad | Sin testimonios de clientes, sin casos identificables, sin nombres de causas. Se permite describir situaciones típicas en forma genérica. |
| Mobile | Diseño mobile first. Áreas táctiles ≥ 48 px. La barra fija inferior no tapa contenido (padding inferior en `body`). |
| Indexación | La 404 y la página de "formulario enviado" llevan `noindex`. Todo lo demás se indexa en producción (`INDEXAR=true`). |

## 1. Sitemap

### 1.1 Sitio penal (12 páginas indexables + 404)

| URL | Página | Objetivo | Keyword principal | Schema.org |
|---|---|---|---|---|
| `/` | Inicio | Que la persona en urgencia llame o escriba a la guardia en menos de 10 segundos; derivar a área o guía si está investigando. | abogado penalista 24 horas | `LegalService` + `WebSite` + `FAQPage` |
| `/detenciones-y-excarcelaciones` | Detenciones y excarcelaciones | Captar al familiar de un detenido y llevarlo a la guardia. | abogado excarcelación | `Service` + `BreadcrumbList` + `FAQPage` |
| `/allanamientos` | Allanamientos | Captar a quien tiene o tuvo un allanamiento. | abogado allanamiento | `Service` + `BreadcrumbList` + `FAQPage` |
| `/defensa-en-juicio` | Defensa en juicio | Captar al imputado con causa en trámite o citación (indagatoria, juicio oral, cambio de abogado). | abogado defensor penal | `Service` + `BreadcrumbList` + `FAQPage` |
| `/violencia-de-genero` | Violencia de género | Captar a quien enfrenta una denuncia, una restricción o una detención por violencia de género. | abogado denuncia violencia de género | `Service` + `BreadcrumbList` + `FAQPage` |
| `/estupefacientes` | Estupefacientes | Captar causas por Ley 23.737 (tenencia, comercio, cultivo). | abogado tenencia de estupefacientes | `Service` + `BreadcrumbList` + `FAQPage` |
| `/delitos-economicos` | Delitos económicos | Captar causas por estafas, defraudaciones, delitos tributarios y lavado. | abogado delitos económicos | `Service` + `BreadcrumbList` + `FAQPage` |
| `/que-hacer-si-detienen-a-un-familiar` | Guía urgente | Responder la búsqueda de pánico, dar pasos concretos y convertir en llamada. | qué hacer si detienen a un familiar | `Article` + `BreadcrumbList` + `FAQPage` |
| `/abogado-penalista-san-justo` | Página local | Posicionar por San Justo / La Matanza y mostrar presencia física. | abogado penalista San Justo | `LegalService` (con `areaServed`) + `BreadcrumbList` + `FAQPage` |
| `/equipo` | Equipo | Generar confianza: quiénes son, matrículas, trayectoria. | Ginefra abogados | `AboutPage` + `Person` ×2 |
| `/contacto` | Contacto | Concentrar todos los canales, dirección y horarios. | abogado penalista contacto guardia | `ContactPage` |
| `/privacidad` | Política de privacidad | Cumplir Ley 25.326 y dar confianza. | — | `WebPage` |
| `/404` | Página no encontrada | Recuperar al visitante perdido, sobre todo si es urgente. | — (noindex) | — |

### 1.2 Sitio amparos (9 páginas indexables + 404)

| URL | Página | Objetivo | Keyword principal | Schema.org |
|---|---|---|---|---|
| `/` | Inicio | Que el paciente o familiar envíe por WhatsApp el rechazo y la orden médica. | amparo de salud prepaga | `LegalService` + `WebSite` + `FAQPage` |
| `/medicamentos-alto-costo-y-oncologia` | Medicamentos de alto costo y oncología | Captar rechazos o demoras de medicación oncológica, biológica o importada. | amparo medicamentos oncológicos prepaga | `Service` + `BreadcrumbList` + `FAQPage` |
| `/discapacidad-tea-tgd` | Discapacidad y neurodesarrollo (TEA/TGD) | Captar familias con prestaciones de discapacidad recortadas o rechazadas. | amparo discapacidad prepaga TEA | `Service` + `BreadcrumbList` + `FAQPage` |
| `/internacion-geriatrica-y-cuidados-domiciliarios` | Internación geriátrica y cuidados domiciliarios | Captar rechazos de geriátrico o enfermería domiciliaria. | amparo internación geriátrica prepaga | `Service` + `BreadcrumbList` + `FAQPage` |
| `/cirugias-protesis-e-insumos` | Cirugías, prótesis e insumos importados | Captar autorizaciones de cirugías, prótesis e insumos retenidas. | amparo prepaga cirugía prótesis | `Service` + `BreadcrumbList` + `FAQPage` |
| `/que-hacer-si-la-prepaga-rechaza-la-cobertura` | Guía urgente | Responder la búsqueda "me rechazaron, ¿qué hago?" y convertir en envío de documentación. | prepaga rechazó cobertura qué hacer | `Article` + `BreadcrumbList` + `FAQPage` |
| `/equipo` | Equipo | Confianza: litigio federal, matrículas, trayectoria. | Ginefra abogados amparos | `AboutPage` + `Person` ×2 |
| `/contacto` | Contacto | Canales, dirección, qué documentación enviar. | abogado amparo de salud contacto | `ContactPage` |
| `/privacidad` | Política de privacidad | Igual que penal, con mención a datos de salud. | — | `WebPage` |
| `/404` | Página no encontrada | Recuperar al visitante. | — (noindex) | — |

Amparos no lleva página local: los amparos tramitan en el fuero federal y la audiencia no busca por barrio.

### 1.3 Datos estructurados

- **`LegalService`** (uno por sitio, con `@id` = `{url}/#estudio`), emitido en todas las páginas desde el Layout: `name` "Ginefra & Asociados", `url`, `telephone` (+5491151261499), `address` (`PostalAddress`: Mariano Santamaría 2212, San Justo, Buenos Aires, AR), `geo` (a completar), `openingHoursSpecification` (penal: 24 h los 7 días), `areaServed`, `knowsAbout` (áreas del sitio), `employee` → `@id` de cada `Person`, `sameAs` (Instagram en penal, URL del otro sitio en ambos), `image`/`logo` (hito 4/7).
- **`Person`** (`@id` = `{url}/equipo#facundo-ginefra`, `#ricardo-ginefra`): `name`, `jobTitle` (Abogado titular / Abogado fundador), `worksFor` → `#estudio`, `image`, `telephone` (solo Ricardo lleva el suyo), `hasCredential` (`EducationalOccupationalCredential`, `credentialCategory` "Matrícula profesional", `identifier` "T° 13 F° 277", `recognizedBy` el colegio cuando se confirme).
- **`Service`** en cada área: `name`, `description`, `serviceType`, `provider` → `#estudio`, `areaServed`.
- **`Article`** en la guía: `headline`, `author` → `Person` Facundo Ginefra, `datePublished`, `dateModified`, `publisher` → `#estudio`.
- **`FAQPage`**: solo con las preguntas visibles en la página, mismo texto.
- **`BreadcrumbList`**: en todas las páginas internas, coincide con las migas visibles.

## 2. Navegación

### 2.1 Header

**Penal · desktop** (fijo arriba, una sola fila):

```
[Logo Ginefra & Asociados]   Áreas ▾   Si detienen a un familiar   Equipo   Contacto      [☎ Guardia 24 h · 11 5126-1499]  [WhatsApp]
```

- "Áreas ▾": `<details>` con las 6 áreas (abre con clic, sin JS). Al pie del desplegable: "Abogado penalista en San Justo" (página local).
- "Si detienen a un familiar": enlace a la guía, con estilo de acento (es la puerta de entrada urgente).
- Botón de llamada = CTA primario (muestra el número completo, porque en desktop `tel:` puede no abrir nada). WhatsApp = secundario.

**Penal · mobile** (fijo arriba, 56–64 px):

```
[Logo]                         [☎ Guardia 24 h]  [☰]
```

- "☰" es un `<details>` que despliega en pantalla completa: Áreas (6 enlaces, lista simple, sin subnivel), Guía urgente, San Justo, Equipo, Contacto, y al final los dos botones (Llamar / WhatsApp) + el número de Ricardo como texto.
- El botón "Guardia 24 h" del header es `tel:` directo.

**Amparos · desktop**:

```
[Logo]   Coberturas ▾   Si la prepaga rechaza   Equipo   Contacto        [WhatsApp: enviar rechazo]  [☎ 11 5126-1499]
```

- "Coberturas ▾": las 4 áreas. CTA primario = WhatsApp; llamada = secundario.

**Amparos · mobile**: `[Logo]  [WhatsApp]  [☰]`, mismo menú desplegado que penal con sus enlaces.

### 2.2 Pie de página (igual estructura en ambos sitios)

| Columna | Contenido |
|---|---|
| Estudio | Logo, una línea de posicionamiento, dirección completa con enlace "Cómo llegar" (Google Maps, URL de búsqueda; sin iframe). |
| Áreas | Lista completa de áreas del sitio + guía urgente + (penal) página local. |
| Contacto | WhatsApp y teléfono principal (11 5126-1499), Ricardo Ginefra (11 5927-1122), horarios: penal "Guardia penal 24 h, todos los días" + atención en el estudio con turno; amparos: horario de atención (a confirmar). Instagram solo en penal. |
| Legal (fila inferior, ancho completo) | "Facundo Ginefra · Abogado · T° 13 F° 277 {colegio}" · "Ricardo Ginefra · Abogado · T° 10 F° 254 {colegio}" · © {año} Ginefra & Asociados · Política de privacidad · Enlace cruzado. |

- **Enlace cruzado** (fila legal, tipografía chica): penal → "¿Buscás amparos de salud? amparos.estudioginefra.com.ar"; amparos → "¿Necesitás un abogado penalista? estudioginefra.com.ar". Es un `<a>` normal, sin `nofollow`.
- Mobile: columnas apiladas en el orden Contacto → Áreas → Estudio → Legal (lo urgente primero). Deja espacio inferior para la barra fija.

### 2.3 Barra fija en mobile y botón flotante

| | Penal | Amparos |
|---|---|---|
| **Mobile (< 768 px)**: barra fija inferior, 2 botones 50/50, visible en todas las páginas | `[☎ Llamar ahora]` (primario, color de acento) · `[WhatsApp]` | `[WhatsApp: enviar documentación]` (primario) · `[☎ Llamar]` |
| **Desktop (≥ 768 px)**: botón flotante WhatsApp abajo a la derecha (`wa.me`, sin widget) | Sí | Sí |

- En mobile el botón flotante **no** se muestra: la barra ya incluye WhatsApp y dos elementos fijos se pisan. Así el WhatsApp está fijo en ambos sitios en todos los tamaños.
- Ambos usan el texto prellenado de la página actual (§7.3).

## 3. Wireframes de plantillas

Convenciones: `[CTA-L]` = botón llamar (`tel:`), `[CTA-W]` = botón WhatsApp (`wa.me` con texto prellenado), `[CTA-F]` = enlace al formulario (solo si el flag está encendido). Las longitudes orientativas están en §8.

Todas las plantillas comparten: Header → contenido → Footer, más barra fija mobile / botón flotante. Las internas llevan **migas de pan** debajo del header.

### 3.1 Inicio penal (`/`)

| # | Bloque | Jerarquía | Contenido (intención) | CTA |
|---|---|---|---|---|
| 1 | **Hero con imagen** | H1 | Comodoro Py de fondo con velo oscuro. H1: abogado penalista con guardia 24 h (incluye "abogado penalista" y la promesa de atención inmediata). Bajada: atendemos ahora, vamos a la comisaría/fiscalía, San Justo y La Matanza. Debajo, sellos de confianza: "Guardia 24 h real", "Matrícula T° 13 F° 277", "Estudio en San Justo", "Atención directa del titular". | `[CTA-L]` primario grande con número visible · `[CTA-W]` secundario |
| 2 | **¿Qué está pasando?** | H2 + tarjetas (sin H3, texto de tarjeta) | Selector de situación urgente, 4 tarjetas-pregunta: "Detuvieron a un familiar" → guía; "Allanaron mi casa" → allanamientos; "Me citaron / me imputaron" → defensa en juicio; "Tengo una denuncia de violencia de género" → violencia de género. | Cada tarjeta es un enlace |
| 3 | **Áreas de práctica** | H2 + H3 por área | 6 tarjetas: ícono, nombre, resumen de una línea, "Ver más". | Enlace a cada área |
| 4 | **Cómo trabajamos** | H2 + pasos (H3) | 3 pasos: nos contactás (cualquier hora) → evaluamos y nos presentamos (comisaría, fiscalía, juzgado) → te defendemos y te mantenemos informado. | — |
| 5 | **Bloque CTA urgente** | H2 | Banda de color: "¿Está pasando ahora?" + qué datos tener a mano (nombre, DNI, dónde está). | `[CTA-L]` + `[CTA-W]` |
| 6 | **Por qué Ginefra** | H2 + H3 por diferencial | 4 diferenciales: guardia 24 h atendida por abogados, trato directo con el titular, conocimiento de los tribunales de La Matanza y del fuero federal, confidencialidad absoluta. Sin testimonios. | — |
| 7 | **Equipo (resumen)** | H2 + H3 por abogado | 2 tarjetas de abogado (foto, nombre, rol, matrícula) + frase del estudio. | Enlace "Conocé al equipo" → `/equipo` |
| 8 | **Dónde estamos** | H2 | Dirección, horario, guardia 24 h, enlace "Cómo llegar", texto corto sobre cobertura en La Matanza. | Enlace → `/abogado-penalista-san-justo` |
| 9 | **Preguntas frecuentes** | H2 + `<details>` | 5–6 preguntas generales (colección `faq`, página `inicio`). | — |
| 10 | **CTA final** | H2 | Cierre corto de guardia 24 h. | `[CTA-L]` + `[CTA-W]` |

**Mobile:** el hero ocupa como máximo ~85 % del alto de pantalla; H1, bajada y los dos botones a ancho completo **arriba del pliegue** (botón llamar primero). La imagen se recorta al centro de la fachada y se sirve en tamaño mobile (es el LCP: `fetchpriority="high"`, sin lazy). Sellos de confianza en 2×2 debajo de los botones. Tarjetas en una columna; las 4 de "¿Qué está pasando?" en 2×2 compactas.

### 3.2 Inicio amparos (`/`)

| # | Bloque | Jerarquía | Contenido (intención) | CTA |
|---|---|---|---|---|
| 1 | **Hero de texto** (sin foto) | H1 | H1: amparos de salud contra prepagas y obras sociales. Bajada: medidas cautelares en el fuero federal, la prepaga cubre en días. Sellos: "Fuero federal", "Medidas cautelares", "Consulta de viabilidad confidencial". | `[CTA-W]` primario ("enviá el rechazo y la orden médica") · `[CTA-L]` secundario |
| 2 | **¿Qué te rechazaron?** | H2 + H3 por área | Las 4 áreas como tarjetas grandes: ícono, nombre, situaciones típicas (2–3 viñetas), "Ver más". | Enlace a cada área |
| 3 | **Cómo funciona el amparo** | H2 + pasos (H3) | 4 pasos: nos enviás la documentación → evaluamos viabilidad → presentamos amparo con medida cautelar → la prepaga tiene que cumplir (multas por incumplimiento). | — |
| 4 | **Qué necesitamos para empezar** | H2 + checklist | Rechazo o falta de respuesta de la prepaga, orden/prescripción médica, resumen de historia clínica, credencial, constancia de pago de cuotas. | `[CTA-W]` "Enviar documentación" |
| 5 | **Consulta y honorarios** | H2 | Consulta de viabilidad confidencial; esquema con costo de inicio accesible y cobro principal contra resultado (contenido del sitio actual). | — |
| 6 | **Litigio federal estratégico** | H2 | Posicionamiento del sitio actual: ir directo a la justicia, no perder tiempo en reclamos administrativos. | — |
| 7 | **Equipo (resumen)** | H2 + H3 por abogado | Igual que penal, con el enfoque de amparos. | Enlace → `/equipo` |
| 8 | **Preguntas frecuentes** | H2 + `<details>` | 5–6 preguntas generales de amparos. | — |
| 9 | **CTA final** | H2 | "En salud el tiempo importa" + envío de documentación. | `[CTA-W]` + `[CTA-L]` |

**Mobile:** hero sin imagen = carga instantánea; botón WhatsApp primero y a ancho completo. Checklist del bloque 4 en lista simple con íconos de tilde.

### 3.3 Área de práctica (todas las áreas de ambos sitios)

Una sola plantilla (`PlantillaArea`). El tema y el orden de CTA los define el sitio.

| # | Bloque | Jerarquía | Contenido (intención) | CTA |
|---|---|---|---|---|
| 1 | **Migas** | — | Inicio › {Área} | — |
| 2 | **Hero compacto** | H1 | H1 con la keyword del área (p. ej. "Abogado para allanamientos en La Matanza y CABA"). Bajada de 1–2 líneas: qué resolvemos y con qué rapidez. | Penal: `[CTA-L]` + `[CTA-W]` · Amparos: `[CTA-W]` + `[CTA-L]` |
| 3 | **Situaciones que atendemos** | H2 + lista | 4–8 viñetas de situaciones concretas en que se encuentra el visitante (frontmatter `situaciones`). | — |
| 4 | **Cómo te defendemos / Cómo lo resolvemos** | H2 + H3 por acción | Cuerpo Markdown del área: qué hace el estudio, recursos, plazos orientativos, qué cambia tener abogado desde el minuto cero. | — |
| 5 | **Bloque intermedio** | H2 | Penal: CTA urgente "¿Está pasando ahora?" con datos a tener a mano. Amparos: checklist de documentación específica del área (`documentacion`). | Penal: `[CTA-L]` + `[CTA-W]` · Amparos: `[CTA-W]` |
| 6 | **Paso a paso** | H2 + pasos (H3) | 3–5 pasos del proceso para esta área (`pasos`). | — |
| 7 | **Preguntas frecuentes** | H2 + `<details>` | 4–6 preguntas del área (`faq`), las que el visitante busca literalmente. | — |
| 8 | **Relacionadas** | H2 + tarjetas | 2–3 áreas relacionadas + la guía urgente del sitio + (penal) página local. | Enlaces |
| 9 | **CTA final** | H2 | Cierre del área. | Igual que bloque 2 |

**Mobile:** hero sin imagen (o un ícono grande del área), botones a ancho completo arriba del pliegue. Las situaciones (bloque 3) van **antes** del cuerpo largo para que la persona se reconozca enseguida.

### 3.4 Guía urgente (penal: detención de un familiar · amparos: rechazo de la prepaga)

| # | Bloque | Jerarquía | Contenido (intención) | CTA |
|---|---|---|---|---|
| 1 | **Migas** | — | Inicio › {Guía} | — |
| 2 | **Encabezado** | H1 | H1 = la pregunta tal como se busca. Línea de autor: "Por Facundo Ginefra, abogado · T° 13 F° 277 · Actualizado {fecha}". | — |
| 3 | **Resumen en 30 segundos** | Caja destacada (sin encabezado propio, `aria-label`) | 3–5 viñetas con lo más importante para hacer YA. | `[CTA-L]` + `[CTA-W]` (penal) / `[CTA-W]` + `[CTA-L]` (amparos) dentro de la caja |
| 4 | **Índice** | `<details>` abierto en desktop, cerrado en mobile | Enlaces ancla a cada H2. | — |
| 5 | **Paso a paso** | H2 + H3 por paso numerado | Penal: averiguar dónde está, qué datos pedir, no declarar sin abogado, llamar a un defensor, qué pasa en las primeras horas, excarcelación. Amparos: pedir el rechazo por escrito, reunir orden médica, intimar, plazos de la prepaga, amparo con cautelar. | `[CTA-W]` texto después del paso 2 |
| 6 | **Qué NO hacer** | H2 + lista con ícono ✕ | Errores frecuentes que empeoran la situación. | — |
| 7 | **Tus derechos** | H2 + H3 | Penal: derechos del detenido y de la familia. Amparos: derechos del afiliado (PMO, Ley de discapacidad, etc.). | — |
| 8 | **Qué tener a mano para llamarnos** | H2 + checklist | Penal: nombre completo y DNI del detenido, comisaría o lugar, hora, motivo que dijeron. Amparos: documentación del §3.2 bloque 4. | `[CTA-L]` + `[CTA-W]` |
| 9 | **Preguntas frecuentes** | H2 + `<details>` | 4–6 preguntas. | — |
| 10 | **Áreas relacionadas** | H2 + tarjetas | Penal: detenciones, allanamientos, violencia de género. Amparos: las 4 áreas. | Enlaces |
| 11 | **CTA final** | H2 | Cierre. | `[CTA-L]` + `[CTA-W]` |

**Mobile:** la caja de resumen con los botones queda arriba del pliegue (H1 corto, línea de autor en una línea). El índice va cerrado. Pasos con número grande a la izquierda y texto en una columna.

### 3.5 Página local (solo penal: `/abogado-penalista-san-justo`)

| # | Bloque | Jerarquía | Contenido (intención) | CTA |
|---|---|---|---|---|
| 1 | **Migas** | — | Inicio › Abogado penalista en San Justo | — |
| 2 | **Hero compacto** | H1 | H1: "Abogado penalista en San Justo, La Matanza". Bajada: estudio en San Justo, guardia 24 h, llegamos a cualquier comisaría del partido. | `[CTA-L]` + `[CTA-W]` |
| 3 | **El estudio en San Justo** | H2 | Dirección, referencias para llegar (a confirmar por el estudio), horarios, guardia, enlace "Cómo llegar". | Enlace Maps |
| 4 | **Dónde actuamos** | H2 + H3 | Departamento Judicial La Matanza (fiscalías, juzgados de garantías, tribunales orales), comisarías del partido, fuero federal (Comodoro Py) y CABA, resto del conurbano oeste. Lista de localidades del partido (frontmatter `localidades`). | — |
| 5 | **Áreas en La Matanza** | H2 + tarjetas | Las 6 áreas con una línea con contexto local. | Enlaces a áreas |
| 6 | **Por qué un penalista de la zona** | H2 | Cercanía, tiempos de llegada, conocimiento de los juzgados locales. | — |
| 7 | **Preguntas frecuentes locales** | H2 + `<details>` | 3–5 preguntas (colección `faq`, página `local`). | — |
| 8 | **CTA final** | H2 | Guardia 24 h en La Matanza. | `[CTA-L]` + `[CTA-W]` |

**Mobile:** localidades en lista de 2 columnas compactas.

### 3.6 Equipo (`/equipo`, ambos sitios)

| # | Bloque | Jerarquía | Contenido (intención) | CTA |
|---|---|---|---|---|
| 1 | **Migas** | — | Inicio › Equipo | — |
| 2 | **Intro** | H1 | H1: el equipo de Ginefra & Asociados. Bajada: posicionamiento del estudio en el área del sitio (penal: defensa penal con guardia; amparos: litigio federal estratégico). | — |
| 3 | **Facundo Ginefra** | H2 (nombre) + H3 (Trayectoria, Áreas) | Tarjeta completa: foto (máx. ~450 px de ancho, ver inventario), rol "Abogado titular", matrícula, bio común + enfoque del sitio, áreas que atiende. | `[CTA-W]` y `[CTA-L]` al número principal |
| 4 | **Ricardo Ginefra** | H2 + H3 | Igual: "Abogado fundador", matrícula, bio. | `[CTA-W]` y `[CTA-L]` a **su** número (11 5927-1122) |
| 5 | **Cómo trabajamos** | H2 | Valores y método: trato directo, confidencialidad, disponibilidad. | — |
| 6 | **CTA final** | H2 | — | `[CTA-L]` + `[CTA-W]` (orden del sitio) |

**Mobile:** foto arriba (cuadrada, 100 % ancho hasta 360 px), texto abajo. Desktop: foto a la izquierda, texto a la derecha, alternando lado entre los dos abogados.

### 3.7 Contacto (`/contacto`, ambos sitios)

**Variante A · flag apagado (`CONTACTO_EMAIL=false`, por defecto)**

| # | Bloque | Jerarquía | Contenido (intención) | CTA |
|---|---|---|---|---|
| 1 | **Migas** | — | Inicio › Contacto | — |
| 2 | **Encabezado** | H1 | H1 + bajada: penal "Guardia penal 24 h, respondemos ahora"; amparos "Envianos el rechazo y la orden médica". | — |
| 3 | **Canales** (BloqueContacto) | H2 "Hablá con un abogado" + H3 por canal | Tarjetas grandes en el orden del sitio: WhatsApp (11 5126-1499), Llamar (11 5126-1499), Ricardo Ginefra (11 5927-1122, WhatsApp y llamada), Instagram (solo penal). Cada tarjeta: acción + para qué conviene ese canal. | `[CTA-W]`, `[CTA-L]` |
| 4 | **Qué contarnos en el primer mensaje** | H2 + checklist | Penal: qué pasó, dónde está la persona, nombre y DNI, si hay fecha de audiencia. Amparos: documentación del §3.2. Acelera la respuesta. | — |
| 5 | **Visitanos** | H2 | Dirección, horarios, guardia, enlace "Cómo llegar". Atención presencial con turno previo. | Enlace Maps |
| 6 | **Confidencialidad** | Párrafo corto (sin H2) | La consulta es confidencial y protegida por el secreto profesional. Enlace a privacidad. | — |

**Variante B · flag encendido (`CONTACTO_EMAIL=true`)**: igual a la A, más:

| # | Bloque | Jerarquía | Contenido (intención) | CTA |
|---|---|---|---|---|
| 3b | **Formulario** (después de Canales, antes de "Qué contarnos") | H2 "Preferís escribirnos" | Aviso arriba del formulario (penal, destacado): "Si es urgente, no uses el formulario: llamá a la guardia" con `[CTA-L]`. Campos: nombre (req.), teléfono (req.), email (opcional), tipo de consulta (select con las áreas del sitio + "Otra"), mensaje (req.), casilla de aceptación de la política de privacidad (req.), honeypot oculto. Botón "Enviar consulta". | `[CTA-F]` |

- Envío: `<form method="post">` nativo al endpoint que defina el hito 6 (funciona sin JS). Validación con atributos HTML (`required`, `type="tel"`, `type="email"`). Al enviar, redirige a `/contacto/enviado` (página `noindex`, solo existe con el flag encendido: confirmación + `[CTA-L]` por si es urgente).
- Con el flag encendido, el header y las páginas internas **no** cambian: el formulario vive solo en `/contacto`. `[CTA-F]` aparece únicamente como enlace terciario en el bloque CTA final del Inicio ("o dejanos tu consulta").
- **Mobile:** canales como botones a ancho completo, uno debajo del otro. Formulario a una columna, campos de 48 px de alto, teclado adecuado por tipo (`inputmode`).

### 3.8 Política de privacidad (`/privacidad`)

| # | Bloque | Jerarquía | Contenido (intención) |
|---|---|---|---|
| 1 | Migas | — | Inicio › Política de privacidad |
| 2 | Encabezado | H1 | Título + "Última actualización: {fecha}". |
| 3 | Cuerpo | H2 por sección | Responsable (Ginefra & Asociados, dirección, correo); qué datos se recaban (el sitio no recaba datos: el contacto ocurre en WhatsApp/teléfono; registros técnicos del hosting); finalidad; WhatsApp y Meta como terceros; hosting (Vercel); analítica (Vercel Web Analytics, sin cookies ni datos personales identificables); cookies (no se usan); derechos de acceso, rectificación y supresión (Ley 25.326, AAIP); datos de salud (solo amparos: tratamiento confidencial de la documentación médica enviada); cambios a la política. |
| 4 | Sección condicional | H2 "Formulario de contacto" | Solo con el flag encendido: qué datos pide, a dónde llegan, plazo de conservación. |

Sin CTA de venta; solo el footer y la barra fija. Texto corrido, ancho de lectura ~70 caracteres.

### 3.9 Página 404

| # | Bloque | Jerarquía | Contenido (intención) | CTA |
|---|---|---|---|---|
| 1 | Encabezado | H1 | "No encontramos esta página" + una línea. | — |
| 2 | Urgencia | Caja destacada | Penal: "Si es urgente, la guardia atiende 24 h". Amparos: "Si tenés un rechazo de tu prepaga, envianoslo". | `[CTA-L]` + `[CTA-W]` |
| 3 | Atajos | H2 "Quizás buscabas" | Inicio, áreas del sitio, guía urgente, contacto. | Enlaces |

`noindex`, sin migas. Mobile: igual, una columna.

## 4. Componentes compartidos (`packages/ui`)

Todos los componentes son `.astro` sin JS de cliente. El aspecto lo definen tokens CSS por sitio (`temas/penal.css`, `temas/amparos.css`: colores, tipografías, radios). La columna "Solo tema" indica que el markup es idéntico y la diferencia entre sitios es puramente visual.

| Componente | Propósito | Props / variantes clave | Solo tema |
|---|---|---|---|
| `Layout` (existe) | Esqueleto HTML, meta, canonical, `noindex`, JSON-LD, Header/Footer/barra | `title`, `description`, `ogImage?`, `noindex?`, `schema?` (array de nodos extra), `mensajeWhatsapp?` (texto prellenado de la página) | Sí |
| `Header` | Navegación principal | `nav` (items, con `hijos?` para el desplegable), `ctas` (orden: `['llamar','whatsapp']` o al revés) | Sí (el orden de CTA viene por prop) |
| `Footer` | Pie con contacto, áreas, matrículas, legales, enlace cruzado | `areas`, `mostrarInstagram`, `horarios`, `enlaceCruzado {texto, url}` | Sí |
| `BarraContactoMovil` | Barra fija inferior < 768 px | `orden` (`llamar-primero` / `whatsapp-primero`), `mensajeWhatsapp` | Sí |
| `BotonWhatsAppFlotante` | Botón flotante ≥ 768 px | `mensaje` | Sí |
| `BotonContacto` | Botón/enlace atómico de contacto; arma `wa.me` y `tel:` desde `estudio.mjs` | `tipo` (`whatsapp` / `llamar` / `formulario`), `numero` (`principal` / `ricardo`), `mensaje?`, `variante` (`primario` / `secundario` / `texto`), `mostrarNumero?`, `etiqueta?` | Sí |
| `Hero` | Cabecera de página | `variante` (`imagen` = inicio penal, `texto` = inicio amparos, `compacto` = internas), `h1`, `bajada`, `ctas`, `imagen?`, `sellos?` | Sí |
| `Sellos` | Fila de señales de confianza | `items[] {icono, texto}` | Sí |
| `TarjetaArea` | Tarjeta de área o de situación | `variante` (`area` / `situacion` / `relacionada`), `titulo`, `resumen`, `href`, `icono`, `vinetas?`, `nivelTitulo` (`h3` por defecto) | Sí |
| `Pasos` | Proceso numerado | `items[] {titulo, texto}`, `variante` (`corto` = horizontal en desktop / `guia` = vertical con H3 y texto largo) | Sí |
| `Checklist` | Lista con íconos | `items[]`, `variante` (`si` ✓ / `no` ✕ / `destacado` = caja de resumen de la guía), `titulo?` | Sí |
| `FAQ` | Preguntas en `<details>` | `items[] {pregunta, respuesta}`, `nivelTitulo`, `schema` (bool: emite `FAQPage`) | Sí |
| `TarjetaAbogado` | Persona del equipo | `persona` (entrada de `equipo`), `sitio`, `variante` (`resumen` / `completa`) | Sí |
| `BloqueCTA` | Banda de llamada a la acción | `titulo`, `texto?`, `variante` (`urgente` / `suave`), `ctas` | Sí |
| `BloqueContacto` | Canales de contacto de la página de contacto | `orden`, `mostrarRicardo`, `mostrarInstagram`, `mensajeWhatsapp` | Sí |
| `Formulario` | Formulario de contacto (solo con flag) | `accion` (endpoint), `opciones` (áreas del sitio), `avisoUrgencia` (bool, true en penal) | Sí |
| `Migas` | Migas de pan + `BreadcrumbList` | `items[] {nombre, href}` | Sí |
| `Icono` | SVG inline desde un sprite propio | `nombre`, `tamano` | Sí |
| `JsonLd` | Imprime un `<script type="application/ld+json">` | `datos` | — |

**Plantillas compartidas** (`packages/ui/plantillas/`): `PlantillaArea`, `PlantillaGuia`, `PlantillaEquipo`, `PlantillaContacto`, `PlantillaPrivacidad`, `Plantilla404`. Reciben la entrada de contenido + la config del sitio. Inicio penal, inicio amparos y la página local son propias de cada app (no se repiten).

**Módulos JS de build** (no llegan al navegador):
- `estudio.mjs`: datos del estudio (§0).
- `enlaces.mjs`: `enlaceWhatsApp(numero, texto)` y `enlaceTel(numero)`. Única forma de armar enlaces de contacto.
- `schema.mjs`: generadores de los nodos de §1.3.

**Config por sitio** (`apps/{sitio}/src/sitio.mjs`): `id` (`penal` / `amparos`), `nav`, `ordenCtas`, `mensajeWhatsappPorDefecto`, `enlaceCruzado`, `mostrarInstagram`, `horarios`, `knowsAbout`. La URL del sitio hermano **no** se configura a mano: sale de *Related Projects* de Vercel (`relatedProjects` en el `vercel.json` de cada app → variable `VERCEL_RELATED_PROJECTS` en el build). Así, en producción cada sitio enlaza al dominio de producción del otro, en pruebas al de pruebas y en una preview a la preview de la misma rama, sin tocar código ni variables al cambiar dominios. En local, sin esa variable, el enlace apunta a `http://localhost:4321`.

## 5. Modelo de contenido

Content Collections con `glob()`/`file()` loaders, esquemas en `src/content.config.ts` de cada app. Todo el texto editable vive en Markdown/YAML; las plantillas no contienen copy salvo microcopy fijo de interfaz (etiquetas de botones, "Ver más").

### 5.1 `areas` (cada app: `src/content/areas/*.md`)

| Campo | Tipo | Uso |
|---|---|---|
| (nombre de archivo) | — | Slug de la URL (`allanamientos.md` → `/allanamientos`) |
| `titulo` | string | Nombre completo del área (tarjetas, migas, footer) |
| `tituloCorto` | string | Menú y tarjetas chicas |
| `orden` | number | Orden en grillas, menú y footer |
| `icono` | string | Nombre del ícono del sprite |
| `resumen` | string (≤ 140 car.) | Texto de la tarjeta |
| `h1` | string | H1 de la página |
| `bajada` | string | Bajada del hero |
| `keyword` | string | Keyword principal (referencia para copy/SEO, no se renderiza) |
| `keywordsSecundarias` | string[] | Ídem |
| `seo.title` | string (≤ 60 car.) | `<title>` |
| `seo.description` | string (≤ 155 car.) | Meta description |
| `situaciones` | string[] | Bloque "Situaciones que atendemos" |
| `pasos` | `{titulo, texto}[]` | Bloque "Paso a paso" |
| `documentacion` | string[]? | Amparos: checklist del bloque intermedio |
| `faq` | `{pregunta, respuesta}[]` | FAQ del área |
| `relacionadas` | `reference('areas')[]` | Bloque "Relacionadas" |
| `mensajeWhatsapp` | string | Texto prellenado de WhatsApp de la página |
| `ordenCtas` | `llamar-primero` o `whatsapp-primero` (opcional) | Pisa el orden de CTA del sitio (penal: solo delitos económicos) |
| cuerpo Markdown | — | Bloque "Cómo te defendemos / Cómo lo resolvemos" (H2 ya lo pone la plantilla; el cuerpo usa H3) |

### 5.2 `guias` (cada app: `src/content/guias/*.md`)

| Campo | Tipo | Uso |
|---|---|---|
| (nombre de archivo) | — | Slug |
| `h1`, `seo.title`, `seo.description`, `keyword` | string | Igual que áreas |
| `autor` | `reference('equipo')` | Línea de autor y `Article.author` |
| `publicado`, `actualizado` | date | Línea de autor y `Article` |
| `resumen` | string[] | Caja "Resumen en 30 segundos" |
| `pasos` | `{titulo, texto}[]` | Bloque "Paso a paso" |
| `noHacer` | string[] | Bloque "Qué NO hacer" |
| `tenerAMano` | string[] | Bloque "Qué tener a mano" |
| `faq` | `{pregunta, respuesta}[]` | FAQ |
| `areasRelacionadas` | `reference('areas')[]` | Bloque "Áreas relacionadas" |
| `mensajeWhatsapp` | string | Texto prellenado |
| cuerpo Markdown | — | Bloque "Tus derechos" (H3 dentro) |

### 5.3 `equipo` (compartida: `packages/ui/contenido/equipo/*.md`, cargada por ambas apps)

| Campo | Tipo | Uso |
|---|---|---|
| (nombre de archivo) | — | `facundo-ginefra`, `ricardo-ginefra` (ancla y `@id`) |
| `nombre`, `rol` | string | Tarjetas, schema |
| `matricula` | `{tomo, folio, colegio?}` | Tarjeta, footer, `hasCredential` |
| `telefono` | `'principal' \| 'ricardo'` | A qué número apuntan sus botones |
| `foto` | `image()` | Tarjeta (Astro la convierte a AVIF/WebP) |
| `fotoAlt` | string | Texto alternativo descriptivo |
| `orden` | number | Orden de aparición |
| `enfoque.penal`, `enfoque.amparos` | string | 1–2 frases específicas de cada sitio |
| `areas.penal`, `areas.amparos` | string[] | Áreas que atiende en cada sitio |
| cuerpo Markdown | — | Bio común (trayectoria, formación) |

### 5.4 `faq` (cada app: `src/content/faq.yaml`, loader `file()`)

Preguntas generales que no son de un área. Campos: `id`, `pregunta`, `respuesta`, `paginas` (`inicio` / `local` / `contacto`), `orden`.

### 5.5 `paginas` (cada app: `src/content/paginas/*.md`)

Una entrada por página única: `inicio`, `local` (solo penal), `equipo`, `contacto`, `privacidad`, `404`.

| Campo | Tipo | Uso |
|---|---|---|
| `h1`, `bajada`, `seo.title`, `seo.description`, `keyword?` | string | Encabezado y meta |
| `sellos?` | string[] | Hero del inicio |
| `situaciones?` | `{texto, href}[]` | Inicio penal: "¿Qué está pasando?" |
| `pasos?` | `{titulo, texto}[]` | Inicio: "Cómo trabajamos" / "Cómo funciona el amparo" |
| `diferenciales?` | `{titulo, texto}[]` | Inicio penal: "Por qué Ginefra" |
| `documentacion?` | string[] | Inicio amparos y contacto amparos |
| `primerMensaje?` | string[] | Contacto: "Qué contarnos en el primer mensaje" |
| `localidades?` | string[] | Página local |
| `mensajeWhatsapp?` | string | Texto prellenado |
| `actualizado?` | date | Privacidad |
| cuerpo Markdown | — | Bloques de texto largo (honorarios y litigio federal en inicio amparos; "Dónde actuamos" y "Por qué un penalista de la zona" en local; cuerpo completo de privacidad, con la sección del formulario marcada para mostrarse solo con el flag) |

### 5.6 Qué colección alimenta cada página

| Página | Colecciones |
|---|---|
| Inicio penal / amparos | `paginas/inicio`, `areas` (grilla), `equipo` (resumen), `faq` (`inicio`) |
| Área | `areas/{slug}` (+ `areas` relacionadas, `guias` para el enlace) |
| Guía | `guias/{slug}`, `equipo` (autor), `areas` (relacionadas) |
| Local (penal) | `paginas/local`, `areas`, `faq` (`local`) |
| Equipo | `paginas/equipo`, `equipo` |
| Contacto | `paginas/contacto`, `faq` (`contacto`, opcional) |
| Privacidad | `paginas/privacidad` |
| 404 | `paginas/404`, `areas` (atajos) |
| Header / Footer | `areas` (ordenadas por `orden`), `guias`, `estudio.mjs`, `sitio.mjs` |

Rutas: un único `src/pages/[slug].astro` por app genera áreas y guías (une `areas` + `guias` en `getStaticPaths` y elige la plantilla). El resto son archivos fijos: `index.astro`, `abogado-penalista-san-justo.astro` (penal), `equipo.astro`, `contacto.astro`, `contacto/enviado.astro` (solo se genera con el flag), `privacidad.astro`, `404.astro`.

## 6. Enlazado interno

### 6.1 Penal

| Desde | Enlaza a |
|---|---|
| Header (todas) | 6 áreas, guía, local, equipo, contacto |
| Footer (todas) | 6 áreas, guía, local, privacidad, sitio amparos |
| Inicio | Guía y 3 áreas (bloque "¿Qué está pasando?"), 6 áreas (grilla), equipo, local, contacto (CTA final, solo con flag) |
| Cada área | 2–3 áreas relacionadas, guía, local, contacto (texto "Ver todos los canales") |
| Guía | Detenciones y excarcelaciones (enlace en el cuerpo del paso de excarcelación), allanamientos, violencia de género, local, contacto |
| Local | 6 áreas, guía, contacto, equipo |
| Equipo | Áreas que atiende cada abogado, contacto |
| Contacto | Privacidad, local ("Cómo llegar" a la sección del estudio) |
| 404 | Inicio, áreas, guía, contacto |

Relaciones entre áreas sugeridas (`relacionadas`): detenciones ↔ allanamientos ↔ estupefacientes; violencia de género ↔ detenciones ↔ defensa en juicio; delitos económicos ↔ allanamientos ↔ defensa en juicio; defensa en juicio ↔ detenciones.

### 6.2 Amparos

| Desde | Enlaza a |
|---|---|
| Header / Footer | 4 áreas, guía, equipo, contacto, privacidad, sitio penal (footer) |
| Inicio | 4 áreas, guía (desde "Qué necesitamos para empezar"), equipo |
| Cada área | Las otras áreas relevantes, guía, contacto |
| Guía | 4 áreas, contacto |

Relaciones sugeridas: medicamentos ↔ cirugías; discapacidad ↔ internación geriátrica (ambas son prestaciones continuas).

### 6.3 Enlace cruzado entre sitios

- Solo en el footer de todas las páginas (texto discreto, §2.2) y en el H2 "Quizás buscabas" de la 404.
- En la página de equipo de cada sitio, una línea al final de la bio: "También atendemos {defensa penal / amparos de salud}" con enlace al otro sitio.
- Ambos `LegalService` incluyen la URL del otro sitio en `sameAs`.

## 7. Estrategia de CTA y microcopy

### 7.1 Jerarquía por contexto

| Contexto | Primario | Secundario | Terciario | Por qué |
|---|---|---|---|---|
| Penal (todas las páginas) | Llamar a la guardia | WhatsApp | Formulario (solo `/contacto` con flag) | Urgencia: una persona detenida necesita una voz ya; la llamada transmite que hay alguien del otro lado. |
| Penal · guía urgente y detenciones | Llamar | WhatsApp con datos para completar | — | Máxima urgencia. |
| Penal · delitos económicos | WhatsApp | Llamar | — | Menos urgente, más consultas planificadas; el visitante prefiere escribir. Se invierte el orden solo en esta área (`ordenCtas` en el frontmatter, campo opcional). |
| Amparos (todas las páginas) | WhatsApp ("enviá el rechazo y la orden médica") | Llamar | Formulario (solo `/contacto` con flag) | El caso se evalúa con documentos: una foto por WhatsApp resuelve el primer paso. |
| Equipo (ambos) | Botones por abogado al número de cada uno | — | — | Contacto directo con la persona. |

Frecuencia: CTA en el hero, uno intermedio y uno al cierre, más la barra fija. Nunca dos bloques CTA seguidos.

### 7.2 Estados y comportamiento

- **`tel:`**: en mobile, un toque abre el marcador. En desktop el botón muestra siempre el número completo ("☎ 11 5126-1499"), así sirve aunque el equipo no pueda llamar. En mobile la etiqueta es corta ("Llamar ahora") con el número en `aria-label`.
- **WhatsApp**: `https://wa.me/5491151261499?text={texto codificado}`. Abre la app en mobile y WhatsApp Web en desktop. Lleva `target="_blank" rel="noopener"` para no perder la página en desktop.
- Estados visuales: normal, `:hover`, `:focus-visible` (anillo bien visible), `:active`. Sin estados de carga (no hay JS).
- Guardia: el texto "Guardia 24 h" es fijo (no hay estado "cerrado"). En amparos no se muestra "24 h" salvo confirmación (ver supuestos).
- Formulario: estados nativos de validación HTML; página `/contacto/enviado` como confirmación.

### 7.3 Texto prellenado de WhatsApp (intención, no texto final)

Regla: saludo + qué necesita + **huecos para completar** (en penal) o **invitación a adjuntar** (en amparos). Máximo ~200 caracteres. Siempre identifica de qué página viene para que el estudio sepa el contexto.

| Página | Intención del mensaje |
|---|---|
| Penal · por defecto (inicio, equipo, contacto, 404) | Necesito hablar con un abogado penalista, es urgente. |
| Penal · guía y detenciones | Detuvieron a un familiar; huecos: nombre, comisaría/lugar, desde cuándo. |
| Penal · allanamientos | Hubo (o hay) un allanamiento; hueco: dónde y cuándo. |
| Penal · defensa en juicio | Tengo una causa penal / me citaron; hueco: fecha de audiencia si la hay. |
| Penal · violencia de género | Tengo una denuncia o restricción por violencia de género y necesito asesoramiento. |
| Penal · estupefacientes | Consulta por una causa de estupefacientes; hueco: si hay detenido. |
| Penal · delitos económicos | Quiero una consulta por una causa económica; hueco: breve descripción. |
| Penal · local | Necesito un abogado penalista en La Matanza; hueco: localidad. |
| Amparos · por defecto | Quiero consultar por un amparo de salud; aviso de que va a adjuntar el rechazo y la orden médica. |
| Amparos · cada área | Igual, nombrando el área (medicación / prestaciones de discapacidad / geriátrico o cuidados / cirugía o prótesis) y la prepaga u obra social (hueco). |
| Amparos · guía | Mi prepaga rechazó (o no responde) una cobertura; hueco: qué pidió y cuándo. |
| Botones de Ricardo (equipo) | Mismo mensaje del sitio, dirigido a Ricardo Ginefra. |

## 8. Notas para los agentes de Copy

**Voz:** voseo rioplatense en ambos sitios ("llamá", "escribinos"). Penal: directo, calmo, firme; frases cortas; la persona tiene miedo y lee desde el celular. Amparos: empático, claro y técnico a la vez; la persona está cansada de la burocracia de la prepaga. Copy persuasivo permitido. Sin testimonios inventados ni casos identificables. Contenido del sitio actual (inventario) reutilizable en amparos, adaptado al voseo.

**Longitudes:** H1 ≤ 70 caracteres. Bajada de hero 1–2 oraciones (≤ 160 car.). Respuesta de FAQ 40–90 palabras. `seo.title` ≤ 60 car., `seo.description` ≤ 155 car. Etiquetas de botón ≤ 4 palabras.

### 8.1 Inicio penal

| Bloque | Preguntas que responde | Largo |
|---|---|---|
| Hero | ¿Me atienden ahora? ¿Son penalistas? ¿Están cerca? | H1 + bajada + 4 sellos de 2–4 palabras |
| ¿Qué está pasando? | ¿Este sitio es para mi situación? | 4 tarjetas de 3–6 palabras |
| Áreas | ¿Atienden mi tipo de causa? | 6 resúmenes de 15–25 palabras |
| Cómo trabajamos | ¿Qué pasa después de que llamo? | 3 pasos de 15–25 palabras |
| CTA urgente | ¿Qué hago ahora mismo? | 1 título + 20–30 palabras |
| Por qué Ginefra | ¿Por qué ellos y no otro? | 4 diferenciales de 20–35 palabras |
| Equipo | ¿Quién me va a defender? | 1 frase + datos de tarjeta |
| Dónde estamos | ¿Dónde quedan? ¿Llegan a mi zona? | 30–50 palabras |
| FAQ | ¿Cuánto cuesta la consulta? ¿Pueden ir a la comisaría ahora? ¿Atienden fines de semana? ¿Qué pasa si ya tengo abogado? ¿Es confidencial? | 5–6 preguntas |
| CTA final | — | Título + 15–25 palabras |

### 8.2 Inicio amparos

| Bloque | Preguntas que responde | Largo |
|---|---|---|
| Hero | ¿Pueden obligar a mi prepaga? ¿Cuánto tarda? | H1 + bajada + 3 sellos |
| ¿Qué te rechazaron? | ¿Mi caso entra? | 4 tarjetas con 2–3 viñetas de 5–10 palabras |
| Cómo funciona el amparo | ¿Qué es un amparo y qué pasos tiene? | 4 pasos de 20–30 palabras |
| Qué necesitamos | ¿Qué tengo que mandar? | 5–6 ítems de checklist |
| Consulta y honorarios | ¿Cuánto me va a costar? | 60–90 palabras |
| Litigio federal | ¿Por qué ir directo a la justicia? | 80–120 palabras |
| FAQ | ¿Sirve si soy de obra social y no de prepaga? ¿Tengo que reclamar antes a la prepaga? ¿Qué pasa si la prepaga no cumple? ¿Puedo seguir con mi médico? ¿Me pueden dar de baja por reclamar? | 5–6 preguntas |

### 8.3 Área de práctica (cada área, ambos sitios)

| Bloque | Preguntas que responde | Largo |
|---|---|---|
| Hero | ¿Este abogado se ocupa de lo que me pasa? | H1 con keyword + bajada |
| Situaciones | ¿Mi situación está acá? | 4–8 viñetas de 6–15 palabras |
| Cómo te defendemos | ¿Qué hacen concretamente? ¿Qué puedo esperar? ¿Qué plazos hay? | 300–600 palabras en 2–4 H3 |
| Bloque intermedio | ¿Qué hago ahora? / ¿Qué documentos junto? | 20–40 palabras o 4–6 ítems |
| Paso a paso | ¿Cómo sigue el proceso? | 3–5 pasos de 20–40 palabras |
| FAQ | Las preguntas literales que se buscan del área (p. ej. "¿cuánto tarda una excarcelación?", "¿pueden allanar sin orden?", "¿la prepaga tiene que cubrir el 100 % por discapacidad?") | 4–6 preguntas |
| CTA final | — | Título + 15–25 palabras |

Total orientativo por área: 800–1.200 palabras.

### 8.4 Guía urgente

| Bloque | Preguntas que responde | Largo |
|---|---|---|
| H1 + autor | ¿Esta página responde lo que busco? ¿Quién lo escribe? | H1 = búsqueda literal |
| Resumen | ¿Qué hago en los próximos 10 minutos? | 3–5 viñetas de 8–15 palabras |
| Paso a paso | Penal: ¿dónde está?, ¿cuánto tiempo lo pueden tener?, ¿puedo verlo?, ¿tiene que declarar?, ¿cuándo sale? Amparos: ¿el rechazo tiene que ser por escrito?, ¿cuánto tiene la prepaga para responder?, ¿cuándo conviene el amparo? | 5–7 pasos de 60–120 palabras |
| Qué NO hacer | ¿Qué errores empeoran todo? | 4–6 ítems de 8–20 palabras |
| Tus derechos | ¿Qué derechos tenemos? | 150–250 palabras |
| Qué tener a mano | ¿Qué datos necesita el abogado? | 4–6 ítems |
| FAQ | Preguntas que no entraron en los pasos | 4–6 preguntas |

Total orientativo: 1.200–1.800 palabras. Lenguaje simple, sin jerga sin explicar.

### 8.5 Página local

| Bloque | Preguntas que responde | Largo |
|---|---|---|
| Hero | ¿Hay un penalista cerca de mí? | H1 + bajada |
| El estudio en San Justo | ¿Dónde queda exactamente? ¿Cuándo puedo ir? | 40–70 palabras + datos |
| Dónde actuamos | ¿Van a mi comisaría / juzgado? ¿Atienden fuera de La Matanza? | 120–200 palabras + lista de localidades |
| Áreas en La Matanza | ¿Atienden mi tipo de causa acá? | 6 líneas de 10–20 palabras |
| Por qué un penalista de la zona | ¿Qué gano con un abogado local? | 80–120 palabras |
| FAQ | ¿Cuánto tardan en llegar? ¿Dónde están los tribunales de La Matanza? ¿Atienden en Ramos Mejía / Laferrere / González Catán? | 3–5 preguntas |

Total orientativo: 600–900 palabras. No copiar párrafos de las áreas (contenido duplicado).

### 8.6 Equipo

| Bloque | Preguntas que responde | Largo |
|---|---|---|
| Intro | ¿Quiénes son? | 40–70 palabras |
| Cada abogado | ¿Qué experiencia tiene? ¿Está matriculado? ¿En qué se especializa? | Bio común 120–200 palabras + enfoque del sitio 1–2 oraciones |
| Cómo trabajamos | ¿Cómo me van a tratar? | 3 ideas de 20–30 palabras |

Solo hechos que el estudio confirme (años de ejercicio, formación, cargos). Si falta un dato, dejar `{A CONFIRMAR}` en vez de inventarlo.

### 8.7 Contacto

| Bloque | Preguntas que responde | Largo |
|---|---|---|
| Encabezado | ¿Me responden ya? | H1 + 1 oración |
| Canales | ¿Por dónde me conviene contactar? | 1 línea de 8–15 palabras por canal |
| Qué contarnos | ¿Qué digo en el primer mensaje? | 4–6 ítems |
| Visitanos | ¿Puedo ir en persona? | Datos + 1 oración |
| Confidencialidad | ¿Lo que cuento queda entre nosotros? | 1–2 oraciones |
| Formulario (flag) | ¿Qué pasa si escribo acá? ¿Cuándo me responden? | Aviso de urgencia 1 oración + etiquetas de campo + texto de aceptación |

### 8.8 Privacidad y 404

- **Privacidad**: texto legal claro, 500–800 palabras, sin lenguaje de venta. Preguntas: ¿quién es responsable de mis datos?, ¿qué guardan?, ¿con quién lo comparten?, ¿cómo pido que los borren?
- **404**: H1 + 1 oración + caja de urgencia (1 oración) + atajos. Preguntas: ¿dónde estoy?, ¿cómo sigo?, ¿y si es urgente?

## 9. Supuestos (a confirmar por el estudio)

1. **Violencia de género**: el área se orienta a la defensa de la persona denunciada (restricciones, detención, juicio). Si el estudio también patrocina víctimas (querella), se agrega como una sección más dentro de la misma página.
2. **Guardia 24 h en amparos**: se asume que la línea principal también recibe urgencias de salud, pero el sitio de amparos no promete "24 h" hasta que se confirme; muestra horario de atención.
3. **Horario presencial**: atención en el estudio con turno previo; días y horas a confirmar. La guardia 24 h es telefónica / WhatsApp y con presencia del abogado donde haga falta.
4. **Instagram** (`ginefra.abogadopenalista`) solo en el sitio penal.
5. **Voseo** en ambos sitios (el sitio actual usa "usted" en los textos y voseo en el CTA de WhatsApp).
6. **Coordenadas geográficas, código postal y colegio de las matrículas**: pendientes; se completan en `estudio.mjs`.
7. **Analítica**: Vercel Web Analytics (definido en el stack), sin cookies, así que no hay banner de consentimiento. Los eventos personalizados (clic en WhatsApp/llamar, envío de formulario) requieren plan Pro; hasta entonces solo se miden páginas vistas.
8. **Formulario**: el endpoint y el servicio de envío se definen en el hito 6. Esta estructura solo fija campos, ubicación y comportamiento sin JS.
