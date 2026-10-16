# Microcopy · sitio amparos

Etiquetas fijas de interfaz del sitio `amparos.estudioginefra.com.ar`. Todo lo que no vive en `src/content/` sale de acá. Voseo, etiquetas de botón de 4 palabras como máximo. Los números se toman de `estudio.mjs`; acá se muestran solo como referencia.

## 1. Global

| Elemento | Texto |
|---|---|
| Enlace "saltar al contenido" | Saltar al contenido |
| Logo (`aria-label` del enlace) | Ginefra & Asociados, ir al inicio |
| `alt` del logo | Ginefra & Asociados, abogados de amparos de salud |
| Etiqueta del `<nav>` principal (`aria-label`) | Navegación principal |
| Enlaces externos (`wa.me`), sufijo para lectores de pantalla | (se abre en una pestaña nueva) |

## 2. Header

### Desktop

| Elemento | Texto | `aria-label` |
|---|---|---|
| Desplegable de áreas (`<summary>`) | Coberturas | Ver coberturas |
| Ítems del desplegable | `tituloCorto` de cada área, en orden: Medicamentos y oncología · Discapacidad y TEA · Geriátrico y cuidados · Cirugías y prótesis | — |
| Enlace a la guía (estilo de acento) | Si la prepaga rechaza | Qué hacer si la prepaga rechaza la cobertura |
| Equipo | Equipo | — |
| Contacto | Contacto | — |
| CTA primario (WhatsApp) | Enviar rechazo | Enviar por WhatsApp el rechazo y la orden médica |
| CTA secundario (llamar) | ☎ 11 5126-1499 | Llamar al 11 5126-1499 |

### Mobile

| Elemento | Texto | `aria-label` |
|---|---|---|
| Botón WhatsApp | WhatsApp | Enviar por WhatsApp el rechazo y la orden médica |
| Menú (`<summary>`) | ☰ (ícono) · texto oculto: Menú | Abrir menú |
| Cerrar menú (si el diseño lo muestra) | Cerrar | Cerrar menú |

### Menú mobile desplegado

1. Título de grupo: **Coberturas**, con las 4 áreas (`tituloCorto`).
2. Qué hacer si la prepaga rechaza
3. Equipo
4. Contacto
5. Botones a ancho completo: **Enviar por WhatsApp** (primario) · **Llamar** (secundario, `aria-label` "Llamar al 11 5126-1499").
6. Línea de texto: Ricardo Ginefra: 11 5927-1122 (enlace `tel:`, `aria-label` "Llamar a Ricardo Ginefra al 11 5927-1122").

## 3. Barra fija mobile y botón flotante

| Elemento | Texto | `aria-label` |
|---|---|---|
| Barra · botón primario (WhatsApp) | Enviar documentación | Enviar por WhatsApp el rechazo y la orden médica |
| Barra · botón secundario | ☎ Llamar | Llamar al 11 5126-1499 |
| Botón flotante desktop (solo ícono) | — | Enviar el rechazo por WhatsApp |
| Botón flotante, `title` (tooltip nativo) | Envianos el rechazo por WhatsApp | — |

Ambos usan el `mensajeWhatsapp` de la página actual (§9) o, si no tiene, el mensaje por defecto.

## 4. Botones de contacto en el contenido (`BotonContacto`)

| Contexto | WhatsApp (primario) | Llamar (secundario) |
|---|---|---|
| Hero inicio | Enviar rechazo y orden | ☎ 11 5126-1499 (mobile: Llamar ahora) |
| Hero de área | Enviar mi caso | ☎ 11 5126-1499 (mobile: Llamar ahora) |
| Bloque de documentación (inicio y áreas) | Enviar documentación | — |
| Guía · caja de resumen | Enviar rechazo ahora | ☎ Llamar |
| Guía · después del paso 2 | Enviar lo que tengo | — |
| CTA final (todas) | Enviar por WhatsApp | ☎ Llamar |
| Formulario (terciario, solo con flag, CTA final del inicio) | o dejanos tu consulta | — |

`aria-label` del botón llamar en mobile: "Llamar al 11 5126-1499". `aria-label` de WhatsApp en todos los casos: "Enviar por WhatsApp el rechazo y la orden médica".

## 5. Sellos del hero (inicio)

| Ícono | Texto |
|---|---|
| balanza | Fuero federal |
| escudo | Medidas cautelares |
| candado | Consulta de viabilidad confidencial |

(Los textos también están en `paginas/inicio.md` → `sellos`.)

## 6. Encabezados fijos de bloques (H2 de plantilla)

### Inicio

| Bloque | H2 | Texto auxiliar |
|---|---|---|
| ¿Qué te rechazaron? | ¿Qué te rechazó tu prepaga? | Elegí tu caso y mirá cómo lo resolvemos. |
| Tarjetas de área | Título: `titulo` del área · Viñetas: las 3 primeras `situaciones` del área · Enlace: Ver más (`aria-label` "Ver más sobre {titulo}") | — |
| Cómo funciona el amparo | Cómo funciona el amparo de salud | — |
| Qué necesitamos | Qué necesitamos para empezar | Si te falta algo, escribinos igual: te decimos cómo conseguirlo. Enlace: Qué hacer si la prepaga rechaza la cobertura |
| Honorarios / Litigio federal | (vienen como H2 en el cuerpo de `paginas/inicio.md`) | — |
| Equipo (resumen) | Quiénes llevan tu caso | Abogados que van directo a la Justicia. Enlace: Conocé al equipo |
| FAQ | Preguntas frecuentes sobre amparos de salud | — |
| CTA final | En salud, el tiempo importa | Cada día sin tratamiento cuenta. Envianos hoy el rechazo de tu prepaga y la orden médica, y empezamos a trabajar en tu amparo. |

### Área de práctica

| Bloque | H2 |
|---|---|
| Situaciones | ¿Te pasa algo de esto? |
| Cuerpo | Cómo lo resolvemos |
| Bloque intermedio | Qué documentación necesitamos · Texto: Con estos papeles evaluamos tu caso. Una foto de cada uno alcanza. |
| Paso a paso | Paso a paso |
| FAQ | Preguntas frecuentes |
| Relacionadas | También te puede servir (incluye tarjeta de la guía: "Qué hacer si la prepaga rechaza la cobertura") · enlace de texto: Ver todos los canales → `/contacto/` |

**CTA final por área**

| Área | Título | Texto |
|---|---|---|
| Medicamentos y oncología | Tu tratamiento no puede esperar | Envianos el rechazo y la receta por WhatsApp. Evaluamos tu caso y pedimos la medida cautelar para que la prepaga entregue la medicación. |
| Discapacidad y TEA | Las terapias de tu hijo no se cortan | Mandanos el CUD, el plan de tratamiento y la respuesta de la prepaga. Vamos a la Justicia por la cobertura total que fija la ley. |
| Geriátrico y cuidados | Tu familiar necesita cuidado hoy | Envianos la indicación médica y el rechazo. Pedimos al juez que la prepaga cubra la residencia o los cuidados en casa, sin demoras. |
| Cirugías y prótesis | Que tu cirugía tenga fecha | Mandanos la orden de cirugía, el pedido de materiales y la respuesta de la auditoría. Pedimos la cautelar para que autoricen ya. |

### Guía urgente

| Elemento | Texto |
|---|---|
| Línea de autor | Por Facundo Ginefra, abogado · T° 13 F° 277 · Actualizado el {fecha, formato "15 de octubre de 2026"} |
| Caja de resumen (`aria-label`) | Resumen en 30 segundos |
| Título visible de la caja | Lo que tenés que hacer ya |
| Índice (`<summary>`) | En esta guía |
| CTA después del paso 2 | ¿Ya tenés el rechazo y la orden médica? Mandánoslos por WhatsApp y evaluamos tu caso. · Botón: Enviar lo que tengo |
| H2 Paso a paso | Paso a paso: qué hacer si la prepaga rechaza |
| H2 Qué NO hacer | Qué no tenés que hacer |
| H2 Tus derechos | Tus derechos como afiliado |
| H2 Qué tener a mano | Qué tener a mano para escribirnos |
| H2 FAQ | Preguntas frecuentes |
| H2 Áreas relacionadas | Coberturas que reclamamos |
| CTA final · título | No dejes que la prepaga decida por tu médico |
| CTA final · texto | Envianos el rechazo y la orden médica por WhatsApp. Evaluamos tu caso en forma confidencial y te decimos cómo vamos a avanzar. |

### Equipo

| Elemento | Texto |
|---|---|
| H3 en cada tarjeta | Trayectoria · Áreas |
| Etiqueta de matrícula | Matrícula: T° {tomo} F° {folio} |
| Facundo · botones | Escribir a Facundo (WhatsApp, número principal) · Llamar a Facundo (`tel:` principal) |
| Ricardo · botones | Escribir a Ricardo (WhatsApp 11 5927-1122) · Llamar a Ricardo (`tel:` 11 5927-1122) |
| `alt` de fotos | Lo define `fotoAlt` en el archivo de equipo compartido. |
| Línea de enlace cruzado al final de la bio | También atendemos defensa penal: [estudioginefra.com.ar](URL del sitio penal) |
| H2 Cómo trabajamos | Cómo trabajamos (H3 en el cuerpo de `paginas/equipo.md`) |
| CTA final · título | Contanos qué te rechazaron |
| CTA final · texto | Envianos el rechazo y la orden médica por WhatsApp y hablás directo con nosotros. |

### Contacto

| Elemento | Texto |
|---|---|
| H2 canales | Hablá con un abogado |
| H3 WhatsApp | WhatsApp · 11 5126-1499 — La forma más rápida: mandanos fotos del rechazo y de la orden médica. · Botón: Enviar por WhatsApp |
| H3 Llamar | Teléfono · 11 5126-1499 — Si preferís contarnos tu caso de viva voz antes de enviar papeles. · Botón: ☎ Llamar |
| H3 Ricardo | Ricardo Ginefra · 11 5927-1122 — Contacto directo con el abogado fundador del estudio, por WhatsApp o llamada. · Botones: WhatsApp · ☎ Llamar |
| H2 documentación / primer mensaje | Qué enviarnos en el primer mensaje · Texto: Con esto te respondemos más rápido y con una evaluación concreta. (Lista: `primerMensaje`; debajo, "Documentación que suma": `documentacion`) |
| H2 Visitanos | Visitanos (texto en el cuerpo de `paginas/contacto.md`) · Enlace: Cómo llegar |
| Horario | Urgencias de salud: 24 h, todos los días |
| Confidencialidad | (párrafo en el cuerpo de `paginas/contacto.md`) |

### 404

| Elemento | Texto |
|---|---|
| Caja de urgencia | (texto en el cuerpo de `paginas/404.md`) · Botones: Enviar rechazo · ☎ Llamar |
| H2 atajos | Quizás buscabas |
| Atajos | Inicio · las 4 áreas (`titulo`) · Qué hacer si la prepaga rechaza la cobertura · Contacto · ¿Necesitás un abogado penalista? estudioginefra.com.ar |

## 7. Migas de pan

| Elemento | Texto |
|---|---|
| `aria-label` del `<nav>` | Estás en |
| Primer ítem | Inicio |
| Área | `titulo` del área |
| Guía | Si la prepaga rechaza la cobertura |
| Equipo / Contacto / Privacidad | Equipo · Contacto · Política de privacidad |

## 8. Footer

| Columna / elemento | Texto |
|---|---|
| Estudio · posicionamiento | Amparos de salud y medidas cautelares contra prepagas y obras sociales, en el fuero federal. |
| Estudio · dirección | Mariano Santamaría 2212, San Justo, Pcia. de Buenos Aires · Enlace: Cómo llegar (`aria-label` "Cómo llegar al estudio en Google Maps") |
| Título columna áreas | Coberturas |
| Columna áreas | Las 4 áreas (`titulo`) + Qué hacer si la prepaga rechaza |
| Título columna contacto | Contacto |
| Contacto · líneas | WhatsApp y teléfono: 11 5126-1499 · Ricardo Ginefra: 11 5927-1122 · Correo: estudiolosdefensores@hotmail.com |
| Horario | Urgencias de salud: 24 h, todos los días · En el estudio, con turno previo |
| Legal · matrículas | Facundo Ginefra · Abogado · T° 13 F° 277 · Ricardo Ginefra · Abogado · T° 10 F° 254 |
| Legal · copyright | © {año} Ginefra & Asociados |
| Legal · privacidad | Política de privacidad |
| Enlace cruzado | ¿Necesitás un abogado penalista? estudioginefra.com.ar |

## 9. Formulario de contacto (solo con `CONTACTO_EMAIL=true`)

| Elemento | Texto |
|---|---|
| H2 | Preferís escribirnos |
| Texto introductorio | Dejanos tus datos y una breve descripción, y te contactamos. Para evaluar el caso con documentos, lo más rápido sigue siendo WhatsApp. |
| Aviso (no destacado: `avisoUrgencia=false`) | Si tenés una cirugía o un tratamiento con fecha cercana, escribinos directo por WhatsApp. |

| Campo | Etiqueta | Placeholder | Ayuda | Error |
|---|---|---|---|---|
| Nombre (req.) | Nombre y apellido | Ej.: María González | — | Escribí tu nombre para que sepamos a quién responder. |
| Teléfono (req., `type="tel"`, `inputmode="tel"`) | Teléfono | Ej.: 11 5555-5555 | Preferentemente con WhatsApp. | Necesitamos un teléfono para contactarte. |
| Email (opcional, `type="email"`) | Correo electrónico (opcional) | tu@correo.com | — | Revisá el formato del correo: falta la @ o el dominio. |
| Tipo de consulta (select) | ¿Qué te rechazó la prepaga u obra social? | Elegí una opción | — | Elegí el tipo de consulta. |
| Opciones del select | Medicamentos y oncología · Discapacidad y TEA · Geriátrico y cuidados · Cirugías y prótesis · Otra consulta | — | — | — |
| Mensaje (req., `<textarea>`) | Contanos tu caso | Qué indicó tu médico, qué respondió la prepaga y si hay una fecha límite. | No incluyas datos médicos detallados: los documentos te los pedimos después. | Contanos brevemente qué pasó. |
| Aceptación (req., casilla) | Leí y acepto la [política de privacidad](/privacidad/) y autorizo el uso de mis datos para responder esta consulta. | — | — | Para enviar la consulta tenés que aceptar la política de privacidad. |
| Honeypot (oculto) | No completes este campo | — | — | — |
| Botón de envío | Enviar consulta | — | — | — |

Los mensajes de error se usan donde la validación nativa lo permita (`title` en campos con `pattern`); si no, quedan los mensajes nativos del navegador.

### Página `/contacto/enviado` (`noindex`)

| Elemento | Texto |
|---|---|
| `<title>` | Consulta enviada · Ginefra & Asociados |
| H1 | Recibimos tu consulta |
| Texto | Gracias por escribirnos. Vamos a revisar tu mensaje y te contactamos al teléfono que nos dejaste. |
| Caja | ¿Tenés una fecha límite o el tratamiento no puede esperar? Mandanos ya el rechazo y la orden médica por WhatsApp. · Botones: Enviar por WhatsApp · ☎ Llamar |
| Enlace | Volver al inicio |

## 10. Textos prellenados de WhatsApp (finales)

Máximo ~200 caracteres. `___` es el hueco que completa la persona. El cierre entre paréntesis identifica la página de origen. Los mensajes de cada página también están en el campo `mensajeWhatsapp` de su archivo de contenido; esta tabla es la referencia completa.

| Página | Texto |
|---|---|
| **Por defecto** (sitio, barra fija, flotante y páginas sin mensaje propio) | Hola, quiero consultar por un amparo de salud. Les envío el rechazo de mi prepaga u obra social y la orden médica. (Web amparos) |
| Inicio | Hola, quiero consultar por un amparo de salud. Les envío el rechazo de mi prepaga u obra social y la orden médica. (Web amparos · Inicio) |
| Medicamentos y oncología | Hola, consulto por un amparo de medicamentos. Mi prepaga u obra social es: ___. Les envío el rechazo y la orden médica. (Web amparos · Medicamentos y oncología) |
| Discapacidad y TEA | Hola, consulto por un amparo por discapacidad (prestaciones de TEA/TGD). Mi prepaga u obra social es: ___. Les envío el rechazo, el CUD y la orden médica. (Web amparos · Discapacidad) |
| Geriátrico y cuidados | Hola, consulto por un amparo para geriátrico o cuidados domiciliarios de un familiar. Su prepaga u obra social es: ___. Les envío el rechazo y la orden médica. (Web amparos · Geriátrico) |
| Cirugías y prótesis | Hola, consulto por un amparo para una cirugía, prótesis o insumos. Mi prepaga u obra social es: ___. Les envío el rechazo y la orden médica. (Web amparos · Cirugías y prótesis) |
| Guía urgente | Hola, mi prepaga u obra social rechazó (o no responde) una cobertura. Pedí: ___. Fecha del pedido: ___. Les envío el rechazo y la orden médica. (Web amparos · Guía rechazo) |
| Equipo | Hola, quiero consultar por un amparo de salud. Les envío el rechazo de mi prepaga u obra social y la orden médica. (Web amparos · Equipo) |
| Equipo · botones de Ricardo | Hola Ricardo, quiero consultarte por un amparo de salud. Te envío el rechazo de mi prepaga u obra social y la orden médica. (Web amparos · Equipo) |
| Contacto | Hola, quiero consultar por un amparo de salud. Les envío el rechazo de mi prepaga u obra social y la orden médica. (Web amparos · Contacto) |
| Privacidad | (usa el mensaje por defecto) |
| 404 | Hola, quiero consultar por un amparo de salud. Les envío el rechazo de mi prepaga u obra social y la orden médica. (Web amparos · 404) |
| `/contacto/enviado` | Hola, ya envié una consulta por el formulario y quiero agregar documentación de mi caso. (Web amparos · Formulario) |
