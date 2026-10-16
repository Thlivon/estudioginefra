# Lanzamiento · checklist (hito 9)

Pasar de pruebas (`*.tl256.com`) a producción (`estudioginefra.com.ar`) sin tocar código: dominios en Vercel, DNS en Cloudflare y variables de entorno.

| Sitio | Hoy (pruebas) | Producción |
|---|---|---|
| Penal | estudioginefra.tl256.com | **estudioginefra.com.ar** (+ `www.` y `penal.` redirigen al apex) |
| Amparos | estudioginefra-amparos.tl256.com | **amparos.estudioginefra.com.ar** |

---

## 1. Lo que tiene que resolver el estudio (Facundo y Ricardo)

Todo esto aparece hoy en los sitios como `{A CONFIRMAR}` o `{VERIFICAR}`. Con las respuestas, actualizo el contenido en un PR.

**Para completarlo**: página «Lanzamiento Ginefra» (claude.ai/artifact/CTvoyQuHXirapDTNFJjBWV). Las respuestas se guardan solas si el estudio la abre invitado por email como Editor; si no, tiene un botón para copiarlas y mandarlas por WhatsApp.

### 1.1 Datos

| # | Dato | Dónde aparece |
|---|---|---|
| 1 | **Colegio de las matrículas** (T° 13 F° 277 y T° 10 F° 254): ¿La Matanza, CPACF, federal? | Pie de página de ambos sitios, equipo, datos estructurados |
| 2 | **Horario de atención presencial** (días y horas) | Contacto de ambos sitios, pie de amparos |
| 3 | **¿La primera consulta tiene costo?** ¿Formas de pago? | Penal: detenciones y preguntas frecuentes del inicio |
| 4 | **Cómo llegar al estudio**: colectivos, estación, calles de referencia | Penal: página de San Justo |
| 5 | **Tiempo habitual de llegada** a una comisaría del partido | Penal: preguntas de San Justo |
| 6 | **Facundo**: universidad, año de egreso y de matriculación, posgrados o cursos, trayectoria previa | Equipo de ambos sitios |
| 7 | **Ricardo**: universidad, egreso, matriculación, trayectoria, año de fundación del estudio | Equipo de ambos sitios |
| 8 | **Ricardo**: ¿atiende todas las áreas (penales y de amparos) o solo algunas? | Equipo |
| 9 | **Plazo de conservación** de las consultas del formulario que no se convierten en casos (p. ej. 6 o 12 meses) | Privacidad de ambos sitios |

### 1.2 Validación jurídica (`{VERIFICAR}`)

Textos informativos que el abogado tiene que confirmar o corregir antes de publicar:

| # | Punto | Página |
|---|---|---|
| 1 | Plazos de aprehensión, pedido de detención, declaración (art. 308) y prisión preventiva en el CPP bonaerense | Penal: guía "qué hacer si detienen a un familiar" (2 lugares) |
| 2 | Horario en que se puede allanar una vivienda (CPP bonaerense y federal) | Penal: allanamientos |
| 3 | Alcance del juicio por jurados en PBA (Ley 14.543) | Penal: defensa en juicio |
| 4 | Estado de implementación del sistema acusatorio federal (CPPF) en Comodoro Py | Penal: defensa en juicio |
| 5 | Montos y condiciones del Régimen Penal Tributario (Ley 27.430 y reformas) | Penal: delitos económicos |
| 6 | Extinción de la acción por pago en el Régimen Penal Tributario | Penal: delitos económicos |
| 7 | Direcciones de las sedes penales del Departamento Judicial La Matanza | Penal: preguntas de San Justo |
| 8 | Plazos de respuesta de prepagas y obras sociales según la Superintendencia de Servicios de Salud | Amparos: guía "qué hacer si la prepaga rechaza la cobertura" |

### 1.3 Decisiones de contenido

1. **Violencia de género**: hoy está escrita solo como defensa de la persona denunciada. ¿También patrocinan víctimas (querella)?
2. **Guardia 24 h en amparos**: ¿la línea atiende urgencias de salud a cualquier hora? Hoy amparos no promete "24 h".
3. **Claims del sitio actual que se mantienen**: "resoluciones en 48/72 horas", "100 % confidencial", "atención directa del titular". ¿Los confirman?
4. **Foto de Facundo**: la actual (900×900) alcanza para tarjetas; para planos grandes conviene una foto nueva (opcional).

### 1.4 Aprobación

- Recorrer los dos sitios de pruebas desde el celular: estudioginefra.tl256.com y estudioginefra-amparos.tl256.com.
- Dar el OK final a textos, fotos y logo.

---

## 2. Lo que necesito de vos

| # | Qué | Por qué | Cuándo |
|---|---|---|---|
| 1 | **Vercel Pro** (u$s 20/mes por miembro): en el team `thcodex` o en un team nuevo del estudio al que se transfieren los dos proyectos | El plan Hobby no admite uso comercial; los dominios de producción van con Pro | Antes del lanzamiento |
| 2 | **Acceso a la zona `estudioginefra.com.ar` en Cloudflare** (vos cargás los registros que te paso, o me das un token de API con permiso DNS solo para esa zona) | Apuntar el dominio a Vercel | El día del lanzamiento |
| 3 | **Resend** (si se usa el formulario): cuenta, dominio `estudioginefra.com.ar` verificado (registros DNS que da Resend, en Cloudflare) y la API key cargada **por vos** en Vercel como variable *Sensitive* `RESEND_API_KEY` en ambos proyectos | Enviar las consultas desde `web@estudioginefra.com.ar` | Cuando quieras encender el formulario |
| 4 | **Web Analytics**: confirmar en la pestaña *Analytics* de cada proyecto que figure habilitado | El script ya responde; el interruptor está en el panel | Antes del lanzamiento |
| 5 | **Google Search Console**: crear la propiedad de dominio `estudioginefra.com.ar` (te da un registro TXT para Cloudflare) | Indexación y sitemaps | El día del lanzamiento |
| 6 | **Google Business Profile** (en tu cuenta de Gmail): sitio web → `https://estudioginefra.com.ar`, teléfono +54 9 11 5126-1499, categoría principal "Abogado penalista" | Es lo que más pesa en búsquedas locales | Después del lanzamiento |
| 7 | **Instagram** (`ginefra.abogadopenalista`): enlace de la bio → `https://estudioginefra.com.ar` | Tráfico directo | Después del lanzamiento |
| 8 | **CardPro**: no darlo de baja hasta que el sitio nuevo lleve 2 semanas estable | Plan de vuelta atrás | 2 semanas después |

---

## 3. Lo que hago yo el día del lanzamiento

1. **PR de contenido** con las respuestas de la sección 1 (sin marcadores pendientes) → lo probás en local y mergeás.
2. **Dominios en Vercel**:
   - Penal: `estudioginefra.com.ar` (principal), `www.estudioginefra.com.ar` → 308 al apex, `penal.estudioginefra.com.ar` → 308 al apex.
   - Amparos: `amparos.estudioginefra.com.ar`.
   - Te paso los registros exactos que indique Vercel (A del apex y CNAME de los subdominios) para cargar en Cloudflare **sin proxy** (nube gris).
3. **Variables**: `INDEXAR=true` en producción de ambos proyectos. Si se enciende el formulario: `CONTACTO_EMAIL=true`, `CONTACTO_REMITENTE=Ginefra & Asociados <web@estudioginefra.com.ar>`, `CONTACTO_DESTINO=estudiolosdefensores@hotmail.com`.
4. **Redeploy** de producción de ambos proyectos (las URLs canónicas y el `robots.txt` se fijan en el build).
5. **Dominios de prueba** (`*.tl256.com`) → redirección 308 a los de producción, para que no compitan en buscadores.
6. **Limpieza**: borrar las variables `CONTACTO_EMAIL` por rama que quedaron de las pruebas (`feat/formulario`, `feat/seguridad`).

### Verificación (antes de avisarte que está listo)

- [ ] `https://estudioginefra.com.ar/` y `https://amparos.estudioginefra.com.ar/` responden 200 con certificado válido.
- [ ] `www.` y `penal.` redirigen (308) al apex; los dominios de tl256 redirigen a producción.
- [ ] Canonical, `og:url` y sitemap con el dominio `.com.ar` (si no, se fija `SITE_URL` en Vercel).
- [ ] Sin `noindex`; `robots.txt` con `Allow` y la línea `Sitemap:`.
- [ ] El enlace cruzado del pie lleva al otro sitio de producción.
- [ ] Cabeceras de seguridad: nota A o superior en securityheaders.com.
- [ ] Lighthouse mobile ≥ 95 en inicio, un área y contacto de cada sitio.
- [ ] Datos estructurados válidos en la Prueba de resultados enriquecidos de Google.
- [ ] WhatsApp y llamar desde un celular real en ambos sitios.
- [ ] Formulario (si está encendido): un envío real llega a la casilla.
- [ ] Search Console: propiedad verificada y sitemaps enviados.

### Vuelta atrás

Si algo falla, se vuelven a poner en Cloudflare los registros DNS anteriores (los de CardPro): el sitio actual vuelve en minutos. Por eso CardPro sigue activo hasta 2 semanas después.
