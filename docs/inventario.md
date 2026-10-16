# Inventario del sitio actual

Fuente: https://estudioginefra.com.ar/ (CardPro), relevado el 2026-10-15.
Es un sitio de **una sola página**, orientado a amparos de salud. Todo su contenido pasa al sitio de amparos; el sitio penal es nuevo.

## Estructura

| # | Sección (ancla) | Contenido | Destino en el sitio nuevo |
|---|---|---|---|
| 1 | Menú | Áreas de práctica · Nuestro Equipo · Contacto · botón "Evaluar mi caso ahora" (WhatsApp) | Navegación de ambos sitios |
| 2 | Hero | Marca + bajada + CTA WhatsApp, fondo Comodoro Py | Hero amparos (texto) · Hero penal (imagen) |
| 3 | Áreas de práctica (`#practica`) | 4 áreas de amparos de salud | Páginas de área del sitio amparos |
| 4 | Nuestro Equipo (`#equipo`) | Texto de posicionamiento + 2 abogados | Equipo (compartido en ambos sitios) |
| 5 | Contacto (`#contacto`) | Texto, correos, teléfonos, WhatsApp, dirección | Contacto de ambos sitios |
| 6 | Pie | © 2026 · GINEFRA & ASOCIADOS | Pie con matrículas |

## Textos (literales)

### Hero
- Título: GINEFRA & ASOCIADOS
- Bajada: Abogados Especialistas en Amparos de Salud y Medidas Cautelares Federales
- CTA: Evaluar mi caso ahora

### Áreas de práctica

**Medicamentos de Alto Costo y Oncología**
Si su prepaga le rechaza o dilata la entrega de drogas importadas, biológicas o tratamientos oncológicos, interponemos un amparo urgente para que reciba la medicación en días, no en meses.

**Discapacidad Integral y Neurodesarrollo (TEA / TGD)**
Logramos la cobertura al 100% de colegios integradores, centros de rehabilitación, fonoaudiología, psicología y acompañantes terapéuticos (CABA). Protegemos el tratamiento de su hijo frente a los recortes corporativos.

**Internación Geriátrica y Cuidados Domiciliarios**
Frente a la negativa de cubrir residencias de la tercera edad o enfermería 24 hs en domicilio para pacientes con patologías complejas (Alzheimer, demencia), ejecutamos las medidas judiciales correspondientes.

**Cirugías, Prótesis e Insumos Importados**
Destrabamos las autorizaciones para cirugías programadas, prótesis importadas y materiales de alta complejidad que las auditorías médicas de las empresas retienen para cuidar su caja.

### Nuestro Equipo
- Título: Litigio Federal Estratégico.
- Texto: Sabemos que en salud el tiempo es vida. Nuestro estudio se destaca por no perder tiempo en eternos reclamos administrativos que las prepagas archivan. Vamos directo a la justicia. Diseñamos amparos robustos con medidas cautelares que tramitan en el Fuero Civil y Comercial Federal, logrando resoluciones en 48/72 horas bajo apercibimiento de multas diarias a los directores de las compañías.
- Facundo Ginefra · Abogado Titular
- Ricardo Ginefra · Abogado Fundador

### Contacto
- Título: Inicie su reclamo hoy mismo
- Texto: La consulta inicial de viabilidad es 100% confidencial. Si su caso es factible, nuestro esquema de honorarios incluye un costo de inicio accesible y el cobro principal contra los resultados del proceso.
- Correo: estudiolosdefensores@hotmail.com · ginefra@hotmail.com
- Teléfono Urgencias: 11-5126-1499 · 11-5927-1122
- WhatsApp Guardia: "Hacé clic aquí para enviarnos la foto del rechazo de tu prepaga y la orden médica."
- Dirección: Mariano Santamaría 2212, San Justo, Pcia. de Buenos Aires

## Datos del estudio (confirmados para el sitio nuevo)

| Dato | Valor |
|---|---|
| Marca | Ginefra & Asociados (ambos sitios) |
| Dirección | Mariano Santamaría 2212, San Justo, Pcia. de Buenos Aires |
| WhatsApp y llamadas (principal) | +54 9 11 5126-1499 |
| Ricardo Ginefra | +54 9 11 5927-1122 |
| Formulario (cuando se active) | estudiolosdefensores@hotmail.com |
| Matrícula Facundo Ginefra | T° 13 F° 277 (colegio a confirmar) |
| Matrícula Ricardo Ginefra | T° 10 F° 254 (colegio a confirmar) |
| Guardia | 24 h |
| Instagram | https://www.instagram.com/ginefra.abogadopenalista/ |

## Imágenes

Originales descargadas en `docs/legacy/`; las que se usan en el sitio se movieron a su ubicación definitiva (hito 4). Son originales: en el sitio nuevo se usan convertidas a AVIF/WebP en el build, nunca estos archivos directo.

| Archivo | Tamaño | Peso | Veredicto |
|---|---|---|---|
| `apps/penal/src/assets/comodoro-py.png` | 2747×1177 | 7,2 MB | **Usable.** Licencia confirmada. Fachada de Comodoro Py (tribunales federales penales): hero del sitio penal. En pantallas retina anchas queda algo justa; recortar en lugar de estirar. |
| `packages/ui/contenido/equipo/ricardo-ginefra.png` | 1005×1121 | 1,8 MB | **Usable.** Buena calidad, plano medio. Pesa mucho por ser PNG: se convierte en el build. |
| `packages/ui/contenido/equipo/facundo-ginefra.jpg` | 900×900 | 72 KB | **Usable con límite.** Alcanza para tarjetas de hasta ~450 px; **no sirve para hero ni plano grande**. Aspecto retocado. Conviene una foto nueva. |
| `docs/legacy/marca/logo-provisorio.png` | 1551×1472 | 2,8 MB | **Solo referencia.** Logo provisorio en raster con fondo negro. Se rediseña en SVG (hito 4). |
| `docs/legacy/og/card.jpg` | 1280×800 | 8 KB | **Inutilizable.** Es un rectángulo negro. Se crean imágenes OG nuevas (hito 7). |

## SEO actual

- `<title>`: Amparos de Salud y Medidas Cautelares | Ginefra & Asociados
- Hay **dos** `description` y dos juegos de `og:*` en conflicto.
- `keywords`: amparo de salud, prepaga, medicamentos, oncología, cobertura médica, medidas cautelares, Ginefra & Asociados, San Justo
- `geo.region` AR-B · `geo.placename` San Justo, Buenos Aires, Argentina
- Sin datos estructurados (JSON-LD). Sitemap con una sola URL. `robots.txt` permite todo.

## Problemas detectados (a corregir en el sitio nuevo)

- Una sola página: no posiciona por área ni por localidad.
- Metadatos duplicados y imagen OG negra.
- Enlace de WhatsApp con formato `wa.me/+549…` (el formato correcto va sin "+").
- Teléfonos sin prefijo internacional en los `tel:`.
- Logo pesado (2,8 MB) y foto de fondo de 7,2 MB servidas sin optimizar.
- Alt genéricos ("Logo") y sin JSON-LD.
- Ninguna mención a derecho penal, aunque el Instagram es `ginefra.abogadopenalista`.
