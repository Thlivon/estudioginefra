// Formulario de contacto: validación y armado del email. Funciones puras (se testean con node --test).
// La validación del servidor es la frontera de confianza: el HTML valida igual, pero no se confía en él.

export const LIMITE_BYTES = 10 * 1024;
// Campo trampa: nombre creíble para que los bots lo completen; las personas no lo ven.
export const CAMPO_TRAMPA = 'empresa';

const digitos = (s) => s.replace(/\D/g, '');
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const TELEFONO = /^[0-9\s()+.-]+$/;

/**
 * @param {Record<string, unknown>} campos lo que llegó del formulario
 * @param {{ opciones: string[], tipoObligatorio?: boolean, mensajes: Record<string, string> }} reglas
 */
export function validar(campos, { opciones, tipoObligatorio = false, mensajes }) {
  const v = (k) => String(campos[k] ?? '').trim();
  const datos = {
    nombre: v('nombre'),
    telefono: v('telefono'),
    email: v('email'),
    tipo: v('tipo'),
    mensaje: v('mensaje'),
    privacidad: v('privacidad'),
  };
  const errores = {};
  if (datos.nombre.length < 2 || datos.nombre.length > 100) errores.nombre = mensajes.nombre;
  const tel = digitos(datos.telefono);
  if (!datos.telefono) errores.telefono = mensajes.telefono;
  else if (!TELEFONO.test(datos.telefono) || tel.length < 8 || tel.length > 15)
    errores.telefono = mensajes.telefonoFormato ?? mensajes.telefono;
  if (datos.email && (datos.email.length > 254 || !EMAIL.test(datos.email))) errores.email = mensajes.email;
  if (datos.tipo ? !opciones.includes(datos.tipo) : tipoObligatorio) errores.tipo = mensajes.tipo;
  if (datos.mensaje.length < 10 || datos.mensaje.length > 2000) errores.mensaje = mensajes.mensaje;
  if (!datos.privacidad) errores.privacidad = mensajes.privacidad;
  return { ok: Object.keys(errores).length === 0, errores, datos: { ...datos, telefono: tel } };
}

export const esTrampa = (campos) => String(campos[CAMPO_TRAMPA] ?? '').trim() !== '';

// Una sola línea, sin saltos ni caracteres de control (evita inyectar encabezados en el asunto).
export const unaLinea = (s, max = 150) =>
  String(s ?? '')
    .replace(/[\u0000-\u001f\u007f]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, max);

export const asunto = (sitio, tipo) => unaLinea(`Consulta web (${sitio})${tipo ? ` · ${tipo}` : ''}`);

// Cuerpo del email en texto plano: nada de HTML con datos del visitante.
export const textoEmail = (d, sitio) =>
  [
    `Nueva consulta desde la web (${sitio}).`,
    '',
    `Nombre: ${unaLinea(d.nombre, 100)}`,
    `Teléfono: ${d.telefono}`,
    `Correo: ${d.email ? unaLinea(d.email, 254) : '(no indicó)'}`,
    `Consulta sobre: ${d.tipo ? unaLinea(d.tipo, 100) : '(no indicó)'}`,
    '',
    'Mensaje:',
    d.mensaje,
  ].join('\n');
