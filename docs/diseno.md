# Diseño · sistema visual

Hito 4. Estética sobria de estudio penal: tipografía protagonista, mucho aire, contraste alto, filetes de 1 px y rótulos en versalitas con tracking. Mobile first. Sin martillos, balanzas ni clip-art.

## Dónde vive

| Qué | Dónde |
|---|---|
| Reset, escala, espaciado, utilidades | `packages/ui/estilos/base.css` |
| Colores de cada sitio | `packages/ui/estilos/penal.css`, `amparos.css` (los importa cada app) |
| Fuentes | `packages/ui/fuentes.mjs` (Fonts API de Astro + Fontsource, autoalojadas) |
| Componentes | `packages/ui/componentes/` |
| Logos | `packages/ui/marca/` |

## Paleta y contrastes (WCAG 2.1, medidos)

| Token | Penal | Amparos | Uso |
|---|---|---|---|
| `--tinta` | `#0E1726` | `#10232A` | Hero, header, bandas oscuras, footer |
| `--papel` | `#F7F5F0` | `#F7F5F0` | Fondo general |
| `--superficie` | `#FFFFFF` | `#FFFFFF` | Tarjetas |
| `--texto` | `#1A1F2B` | `#1A1F2B` | Texto |
| `--texto-suave` | `#4A5263` | `#4A5263` | Bajadas, texto secundario |
| `--linea` | `#D9D4C7` | `#D9D4C7` | Filetes y bordes (decorativos) |
| `--acento` | `#B8893B` latón | `#1F6F6B` petróleo | Fondo del CTA principal; acento sobre tinta (penal) |
| `--acento-texto` | `#7A5A1E` | `#175451` | Acento como texto/ícono sobre papel |
| `--acento-sobre-tinta` | = `--acento` | `#6FBFB8` | Acento sobre fondo oscuro |
| `--sobre-tinta-suave` | `#B9BFCB` | `#B9C4C7` | Texto secundario sobre tinta |

| Combinación | Ratio | AA |
|---|---|---|
| Penal · texto / papel | 15,1 | ✔ |
| Penal · texto-suave / papel | 7,2 | ✔ |
| Penal · acento-texto / papel | 5,8 | ✔ |
| Penal · papel / tinta | 16,5 | ✔ |
| Penal · acento / tinta (enlaces, íconos, foco) | 5,7 | ✔ |
| Penal · tinta / acento (CTA principal) | 5,7 | ✔ |
| Penal · sobre-tinta-suave / tinta | 9,7 | ✔ |
| Penal · acento / papel | 2,9 | ✘ → por eso sobre papel se usa `--acento-texto` |
| Amparos · papel / acento (CTA principal) | 5,4 | ✔ |
| Amparos · acento-texto / papel | 8,0 | ✔ |
| Amparos · papel / tinta | 14,9 | ✔ |
| Amparos · acento `#1F6F6B` / tinta | 2,7 | ✘ → se agregó `--acento-sobre-tinta: #6FBFB8` (7,6) |
| Amparos · sobre-tinta-suave / tinta | 9,1 | ✔ |

`--linea` (1,4:1 sobre papel) es solo decorativa: los campos del formulario (hito 6) necesitan un borde de ≥ 3:1. El hero lleva un velo de `--tinta` (80–95 % en mobile, 94→60 % de izquierda a derecha en desktop) para que el texto mantenga el contraste sobre cualquier zona de la foto.

Las secciones oscuras usan la clase `.sobre-tinta`, que redefine los colores de contexto (`--c-texto`, `--c-suave`, `--c-borde`, `--c-enlace`, `--c-icono`, `--foco`); los componentes usan esos tokens y funcionan en los dos fondos. `.sobre-papel` vuelve al contexto claro.

## Tipografía

- **Títulos:** Source Serif 4, variable, peso 600 (500 en numerales). `--fuente-titulos`.
- **Texto e interfaz:** Inter, variable, 400–600. `--fuente-texto`.
- Solo subconjunto `latin` (cubre español, `°`, `·`, `›`). Ambas se precargan: las dos están arriba del pliegue. Astro genera fuentes de respaldo con métricas ajustadas (CLS 0).
- Rótulos (`.rotulo`, títulos de footer, rol del abogado): versalitas con `letter-spacing: .14–.16em`, 600.

Escala fluida (`clamp`, 360 → 1280 px):

| Token | Mín → máx | Uso |
|---|---|---|
| `--paso--1` | 13,4 → 14,4 px | Rótulos, footer, sellos |
| `--paso-0` | 16 → 17,8 px | Texto |
| `--paso-1` | 18,7 → 22,4 px | Bajadas, H3 |
| `--paso-2` | 22,4 → 30,4 px | — |
| `--paso-3` | 27,2 → 41,6 px | H2 |
| `--paso-4` | 32,8 → 57,6 px | H1 |

## Espaciado, radios, sombras

- `--esp-1…7`: 4, 8, 12, 16, 24, 32, 48 px. `--esp-seccion`: 56 → 112 px entre bloques.
- Contenedor: `--ancho` 74rem con margen fluido `--margen` (16 → 40 px). Texto: `--ancho-texto` 42rem.
- Radios chicos: `--radio-1` 2 px (botones), `--radio-2` 4 px (tarjetas).
- Sombras sutiles solo en hover y desplegables (`--sombra-1`, `--sombra-2`).
- Áreas táctiles: `--tactil` 48 px en botones, enlaces de menú y footer.
- Foco: anillo de 3 px en `--foco` con separación de 3 px. Animaciones solo con `prefers-reduced-motion: no-preference`.

## Componentes (`packages/ui/componentes/`)

Todos `.astro`, sin JS de cliente. Menú mobile, desplegable de áreas y FAQ con `<details>`.

| Componente | Notas |
|---|---|
| `Layout` | Meta, canonical, `noindex`, fuentes, favicon, JSON-LD `LegalService`, Header, Footer, barra y flotante, slot `head`. Recibe la config del sitio (`apps/*/src/sitio.mjs`) y las áreas. Cada app lo usa a través de su envoltorio (`layouts/LayoutPenal.astro`, `layouts/LayoutAmparos.astro`: tema + áreas). |
| `Header` | < 68em: logo, botón primario corto y menú; ≥ 68em: una fila con desplegable y los dos CTA. |
| `Footer` | Contacto → Áreas → Estudio en el DOM (lo urgente primero); en desktop se ordena Estudio · Áreas · Contacto. Fila legal con matrículas, privacidad y enlace al sitio hermano. |
| `BarraContactoMovil` / `BotonWhatsAppFlotante` | Barra 50/50 en < 768 px; flotante en ≥ 768 px. |
| `BotonContacto` | Arma `tel:`/`wa.me` desde `estudio.mjs`. Si el `aria-label` del microcopy no contiene el texto visible, lo agrega como texto oculto (WCAG 2.5.3). |
| `Hero` | `imagen` (dirección de arte con `getImage`: recorte 2:3 en mobile, foto completa en desktop, AVIF/WebP, `fetchpriority="high"`), `texto`, `compacto`. |
| `Migas` | Migas visibles + `BreadcrumbList` con los mismos ítems. |
| `BloqueContacto` | Tarjetas de canal de la página de contacto (H3, dato, para qué sirve, botones). |
| `DatosEstudio` | Dirección, horarios y "Cómo llegar" (inicio penal, página local, contacto). |
| `Sellos`, `TarjetaArea` (`area` / `situacion` / `relacionada`), `Pasos` (`corto` / `guia`), `Checklist` (`si` / `no` / `destacado`), `BloqueCTA` (`urgente` / `suave`), `TarjetaAbogado` (`resumen` / `completa`), `FAQ` (opción `schema`), `Icono` + `Sprite`, `JsonLd` | Según `docs/estructura.md` §4. |

Íconos: sprite propio de trazo fino (1,5 px en caja de 24). El nombre `balanza` del frontmatter (defensa en juicio) se dibuja como fachada de tribunal, sin balanza.

## Plantillas (`packages/ui/plantillas/`)

`PlantillaArea`, `PlantillaGuia`, `PlantillaEquipo`, `PlantillaContacto`, `PlantillaPrivacidad` y `Plantilla404`. Reciben la entrada de contenido y la config del sitio; los títulos fijos de bloque y las etiquetas de botón salen de `sitio.plantillas` y `sitio.textos` de cada app (microcopy). Inicio y página local son propios de cada app. Las colecciones de contenido se definen una vez en `packages/ui/colecciones.ts`.

## Logo

Elegido en el hito 5: **wordmark** ("GINEFRA" en versalitas espaciadas, filete y "& ASOCIADOS"). Letras dibujadas a mano como trazados (sin fuentes externas), con `currentColor`.

- `packages/ui/marca/logo-horizontal.svg`: header y footer (se importa como componente SVG).
- `packages/ui/marca/logo-simbolo.svg`: "G" sobre filete, para espacios chicos.
- `apps/*/public/favicon.svg`: el símbolo recortado, con color fijo (tinta de cada sitio) y papel en pestañas oscuras (`prefers-color-scheme`).
