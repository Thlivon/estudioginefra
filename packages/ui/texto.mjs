// Utilidades de texto para plantillas (solo en build).

const escapar = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// Markdown en línea de los textos del frontmatter: **negrita** y [enlace](url).
export const enLinea = (s = '') =>
  escapar(s)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');

// Lo mismo, como texto plano (para JSON-LD).
export const plano = (s = '') => s.replace(/\*\*(.+?)\*\*/g, '$1').replace(/\[([^\]]+)\]\([^)\s]+\)/g, '$1');

// Bloque del cuerpo marcado con <!-- bloque: nombre --> … <!-- /bloque: nombre -->.
export function bloque(html = '', nombre) {
  const m = html.match(new RegExp(String.raw`<!--\s*bloque: ${nombre}\s*-->([\s\S]*?)<!--\s*/bloque: ${nombre}\s*-->`));
  return m ? m[1].trim() : '';
}

// Quita la sección <!-- solo-con-formulario --> … <!-- /solo-con-formulario --> si el formulario está apagado.
export const conFormulario = (html = '', activo) =>
  html.replace(/<!--\s*solo-con-formulario\s*-->([\s\S]*?)<!--\s*\/solo-con-formulario\s*-->/g, activo ? '$1' : '');

// Parte el HTML en secciones que empiezan en cada <h2>.
export const secciones = (html = '') => html.split(/(?=<h2[\s>])/).filter((s) => s.trim());

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
// "15 de octubre de 2026" (fechas del frontmatter, en UTC).
export const fecha = (d) => `${d.getUTCDate()} de ${meses[d.getUTCMonth()]} de ${d.getUTCFullYear()}`;
