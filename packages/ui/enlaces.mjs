// Única forma de armar enlaces de contacto. `numero` admite cualquier formato: se queda con los dígitos.
const digitos = (numero) => String(numero).replace(/\D/g, '');

export const enlaceWhatsApp = (numero, texto) =>
  `https://wa.me/${digitos(numero)}${texto ? `?text=${encodeURIComponent(texto)}` : ''}`;

export const enlaceTel = (numero) => `tel:+${digitos(numero)}`;

// Props de los botones de contacto de un contexto (header, menu, barra, contenido) en el orden del sitio:
// el primero es el primario. Las etiquetas viven en el sitio.mjs de cada app (microcopy).
export function botones(sitio, contexto, mensaje = sitio.mensajeWhatsappPorDefecto, orden = sitio.ordenCtas) {
  const tipos = orden === 'whatsapp-primero' ? ['whatsapp', 'llamar'] : ['llamar', 'whatsapp'];
  return tipos.map((tipo, i) => ({
    tipo,
    variante: i === 0 ? 'primario' : 'secundario',
    ariaLabel: sitio.aria[tipo],
    mensaje: tipo === 'whatsapp' ? mensaje : undefined,
    ...sitio.textos[contexto][tipo],
  }));
}
