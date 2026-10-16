# Microcopy · sitio penal

Etiquetas fijas de interfaz de `estudioginefra.com.ar`. Las plantillas toman estos textos tal cual. Números, dirección y matrículas salen siempre de `estudio.mjs`: acá aparecen entre llaves (`{telPrincipal}` = `11 5126-1499`, `{telRicardo}` = `11 5927-1122`).

Regla para enlaces de WhatsApp e Instagram (`target="_blank"`): al `aria-label` se le suma " (se abre en una pestaña nueva)".

## 1. Header

### Desktop

| Elemento | Texto visible | `aria-label` |
|---|---|---|
| Logo | — | Ginefra & Asociados, ir al inicio |
| `<nav>` principal | — | Navegación principal |
| Desplegable de áreas (`<summary>`) | Áreas | — |
| Ítems del desplegable | `tituloCorto` de cada área, por `orden` | — |
| Pie del desplegable | Abogado penalista en San Justo | — |
| Enlace a la guía (acento) | Si detienen a un familiar | — |
| Enlace | Equipo | — |
| Enlace | Contacto | — |
| Botón llamar (primario) | ☎ Guardia 24 h · {telPrincipal} | Llamar a la guardia penal 24 horas al {telPrincipal} |
| Botón WhatsApp (secundario) | WhatsApp | Escribir por WhatsApp a la guardia penal |

### Mobile

| Elemento | Texto visible | `aria-label` |
|---|---|---|
| Botón llamar del header | ☎ Guardia 24 h | Llamar a la guardia penal 24 horas al {telPrincipal} |
| Menú (`<summary>`) | ☰ Menú | — |
| Título de la lista de áreas | Áreas de práctica | — |
| Enlaces | `tituloCorto` de cada área · Si detienen a un familiar · Abogado penalista en San Justo · Equipo · Contacto | — |
| Botón llamar | Llamar ahora | Llamar a la guardia penal 24 horas al {telPrincipal} |
| Botón WhatsApp | WhatsApp | Escribir por WhatsApp a la guardia penal |
| Línea de Ricardo (texto) | Ricardo Ginefra: {telRicardo} | Llamar a Ricardo Ginefra al {telRicardo} |

## 2. Barra fija mobile y botón flotante

| Elemento | Texto visible | `aria-label` |
|---|---|---|
| Contenedor de la barra (`<nav>`) | — | Contacto rápido |
| Botón 1 (primario) | ☎ Llamar ahora | Llamar a la guardia penal 24 horas al {telPrincipal} |
| Botón 2 | WhatsApp | Escribir por WhatsApp a la guardia penal |
| Delitos económicos (orden invertido) | WhatsApp · ☎ Llamar | mismos `aria-label` |
| Botón flotante desktop | — (solo ícono) | Escribir por WhatsApp a la guardia penal |
| Tooltip del flotante (`title`) | Escribinos por WhatsApp | — |

## 3. Botones de CTA en el contenido

| Contexto | Llamar | WhatsApp |
|---|---|---|
| Hero y bloques CTA, desktop | ☎ {telPrincipal} | Escribir por WhatsApp |
| Hero y bloques CTA, mobile | Llamar ahora | Escribir por WhatsApp |
| Delitos económicos (WhatsApp primero) | Llamar | Consultar por WhatsApp |
| Guía, después del paso 2 (`[CTA-W]` texto) | — | Mandanos los datos por WhatsApp |
| Tarjeta de Facundo (equipo) | Llamar a Facundo | WhatsApp a Facundo |
| Tarjeta de Ricardo (equipo) | Llamar a Ricardo | WhatsApp a Ricardo |
| Enlace al formulario (CTA final del inicio, solo con flag) | — | o dejanos tu consulta |

`aria-label` de los botones de cada abogado: "Llamar a Facundo Ginefra al {telPrincipal}", "Escribir por WhatsApp a Facundo Ginefra", "Llamar a Ricardo Ginefra al {telRicardo}", "Escribir por WhatsApp a Ricardo Ginefra".

## 4. Sellos de confianza (hero del inicio)

Contenedor: `aria-label="Por qué confiar en nosotros"`. Textos (vienen de `paginas/inicio.md`):

- Guardia 24 h real
- Matrícula T° 13 F° 277
- Estudio en San Justo
- Atención directa del titular

## 5. Migas, enlaces y etiquetas sueltas

| Elemento | Texto |
|---|---|
| `<nav>` de migas | `aria-label`: Estás en |
| Primer ítem | Inicio |
| Separador | › (con `aria-hidden="true"`) |
| Migas de la página local | Inicio › Abogado penalista en San Justo |
| Migas de privacidad | Inicio › Política de privacidad |
| "Ver más" en tarjetas de área | Ver más · `aria-label`: Ver más sobre {titulo del área} |
| Enlace del bloque Equipo (inicio) | Conocé al equipo |
| Enlace del bloque Dónde estamos (inicio) | Atendemos en todo La Matanza |
| Enlace a Google Maps | Cómo llegar · `aria-label`: Cómo llegar al estudio en Google Maps |
| Enlace a contacto desde cada área | Ver todos los canales |
| Línea de autor de la guía | Por {nombre}, abogado · T° {tomo} F° {folio} · Actualizado {fecha} |
| Formato de fecha | 15 de octubre de 2026 |
| Caja de resumen de la guía | `aria-label`: Resumen en 30 segundos · título visible: Lo urgente, en 30 segundos |
| Índice de la guía (`<summary>`) | En esta guía |
| Pie de la bio en equipo (enlace cruzado) | También atendemos amparos de salud → |

## 6. Títulos fijos de bloque (H2/H3 que pone la plantilla)

| Plantilla | Títulos |
|---|---|
| Inicio | ¿Qué está pasando? · Áreas de práctica · Cómo trabajamos · Por qué Ginefra · Nuestro equipo · Dónde estamos · Preguntas frecuentes (el CTA urgente y el final toman el título del frontmatter) |
| Área | Situaciones que atendemos · Cómo te defendemos · Paso a paso · Preguntas frecuentes · También te puede servir |
| Guía | Paso a paso · Qué NO hacer · Tus derechos · Qué tener a mano para llamarnos · Preguntas frecuentes · Áreas relacionadas |
| Local | El estudio en San Justo · Áreas en La Matanza · Preguntas frecuentes (los H2 "Dónde actuamos" y "Por qué un penalista de la zona" vienen en el cuerpo) |
| Equipo | H3 por abogado: Trayectoria · Áreas que atiende — Bloque: Cómo trabajamos |
| Contacto | Hablá con un abogado · Preferís escribirnos (solo con flag) · Qué contarnos en el primer mensaje · Visitanos · Preguntas frecuentes |
| 404 | Quizás buscabas |

Tarjetas de canal en contacto (H3 + botón):

| Canal | H3 | Botón |
|---|---|---|
| WhatsApp | WhatsApp | Abrir WhatsApp |
| Llamada | Llamar a la guardia | Llamar ahora |
| Ricardo | Ricardo Ginefra | Llamar · WhatsApp |
| Instagram | Instagram | Ver Instagram |

Atajos de la 404: Inicio · las 6 áreas (`tituloCorto`) · Si detienen a un familiar · Contacto · enlace cruzado "¿Buscás amparos de salud?".

## 7. Footer

| Elemento | Texto |
|---|---|
| `<footer>` | `aria-label`: Información del estudio |
| Línea de posicionamiento | Defensa penal con guardia 24 h. San Justo, La Matanza, CABA y fuero federal. |
| Títulos de columna | Estudio · Áreas · Contacto |
| Columna Áreas, extras | Si detienen a un familiar · Abogado penalista en San Justo |
| Columna Contacto | WhatsApp y llamadas: {telPrincipal} · Ricardo Ginefra: {telRicardo} · Instagram: @ginefra.abogadopenalista |
| Horarios | Guardia penal 24 h, todos los días · Atención en el estudio con turno previo |
| Enlace Maps | Cómo llegar |
| Fila legal | Facundo Ginefra · Abogado · T° 13 F° 277 {colegio} · Ricardo Ginefra · Abogado · T° 10 F° 254 {colegio} · © {año} Ginefra & Asociados · Política de privacidad |
| Enlace cruzado | ¿Buscás amparos de salud? {host del sitio amparos} |

## 8. Formulario de contacto (solo con `CONTACTO_EMAIL=true`)

**Aviso de urgencia** (caja destacada, arriba del formulario): "Si es urgente, no uses el formulario: llamá ahora a la guardia." · Botón: ☎ Llamar a la guardia.

**Bajada del bloque** (debajo del H2 "Preferís escribirnos"): "Para consultas que pueden esperar. Te contactamos al teléfono que nos dejes."

| Campo | Etiqueta | Placeholder | Ayuda | Error |
|---|---|---|---|---|
| Nombre (req., `autocomplete="name"`) | Nombre y apellido | Ej.: Juan Pérez | — | Escribí tu nombre. |
| Teléfono (req., `type="tel"`, `inputmode="tel"`) | Teléfono o WhatsApp | Ej.: 11 2345-6789 | Te llamamos o escribimos a este número. | Escribí un teléfono para que podamos contactarte. |
| Teléfono, formato inválido | — | — | — | Revisá el número: usá solo números, espacios o guiones. |
| Email (opcional, `type="email"`) | Correo electrónico (opcional) | nombre@correo.com | — | Revisá el correo: parece que falta la @ o el dominio. |
| Tipo de consulta (select, opcional) | ¿Sobre qué es tu consulta? | Opción vacía: Elegí una opción | — | — |
| Opciones del select | `tituloCorto` de las 6 áreas + "Otra" | — | — | — |
| Mensaje (req., `<textarea>`) | Contanos qué pasó | Qué pasó, dónde y cuándo. Si hay una citación, la fecha. | — | Contanos brevemente tu consulta. |
| Aceptación (req., checkbox) | Leí y acepto la [política de privacidad](/privacidad/). | — | — | Para enviar la consulta, aceptá la política de privacidad. |
| Honeypot (oculto, `tabindex="-1"`, `autocomplete="off"`) | No completes este campo | — | — | — |

- Botón de envío: **Enviar consulta**
- Nota debajo del botón: "Tu consulta es confidencial. Si es urgente, llamá a la guardia."
- Marca de obligatorio: `*` con texto oculto "obligatorio"; leyenda arriba de los campos: "Los campos con * son obligatorios."
- Sin JS, el navegador muestra sus propios mensajes de validación. Los errores de la tabla aplican si se usan con `title`/`pattern` o en un paso posterior con JS mínimo.

### Página `/contacto/enviado` (`noindex`)

| Elemento | Texto |
|---|---|
| `seo.title` | Consulta enviada \| Ginefra & Asociados |
| H1 | Recibimos tu consulta |
| Texto | Gracias por escribirnos. Un abogado del estudio la va a leer y te va a contactar al teléfono que nos dejaste. Si es urgente, no esperes: llamá ahora a la guardia. |
| Botón | ☎ Llamar a la guardia |
| Enlace | Volver al inicio |

## 9. Texto prellenado de WhatsApp (final)

Formato: saludo + página de origen entre paréntesis + qué necesita + huecos `___`. Todos ≤ 200 caracteres.

| Página | Texto |
|---|---|
| Por defecto (`mensajeWhatsappPorDefecto` en `sitio.mjs`; privacidad y cualquier página sin mensaje propio) | Hola, escribo desde la web de Ginefra & Asociados. Necesito hablar con un abogado penalista, es urgente. |
| Inicio | Hola, escribo desde la web (Inicio). Necesito hablar con un abogado penalista, es urgente. |
| Equipo (botones de Facundo y generales) | Hola, escribo desde la web (Equipo). Necesito hablar con un abogado penalista, es urgente. |
| Equipo · botones de Ricardo | Hola Ricardo, escribo desde la web (Equipo). Necesito hablar con un abogado penalista, es urgente. |
| Contacto | Hola, escribo desde la web (Contacto). Necesito hablar con un abogado penalista, es urgente. |
| Contacto · tarjeta de Ricardo | Hola Ricardo, escribo desde la web (Contacto). Necesito hablar con un abogado penalista, es urgente. |
| 404 | Hola, escribo desde la web (página no encontrada). Necesito hablar con un abogado penalista, es urgente. |
| Guía | Hola, escribo desde la web (Guía: detuvieron a un familiar). Detuvieron a un familiar. Nombre: ___ · Dónde está / comisaría: ___ · Desde cuándo: ___ |
| Detenciones y excarcelaciones | Hola, escribo desde la web (Detenciones). Detuvieron a un familiar. Nombre: ___ · Dónde está / comisaría: ___ · Desde cuándo: ___ |
| Allanamientos | Hola, escribo desde la web (Allanamientos). Hubo un allanamiento. Dónde: ___ · Cuándo: ___ · ¿Hay detenidos?: ___ |
| Defensa en juicio | Hola, escribo desde la web (Defensa en juicio). Tengo una causa penal / me citaron. Fecha de audiencia: ___ · Juzgado o fiscalía: ___ |
| Violencia de género | Hola, escribo desde la web (Violencia de género). Tengo una denuncia o una restricción por violencia de género y necesito asesoramiento. Fecha de notificación: ___ |
| Estupefacientes | Hola, escribo desde la web (Estupefacientes). Quiero consultar por una causa de estupefacientes. ¿Hay alguien detenido?: ___ · Dónde: ___ |
| Delitos económicos | Hola, escribo desde la web (Delitos económicos). Quiero una consulta por una causa económica. Breve descripción: ___ |
| Local (San Justo) | Hola, escribo desde la web (San Justo / La Matanza). Necesito un abogado penalista en La Matanza. Localidad: ___ |

Los textos de cada página viven en el campo `mensajeWhatsapp` de su archivo de contenido; esta tabla es la referencia completa. Los de Ricardo los arma la plantilla reemplazando "Hola," por "Hola Ricardo,".
