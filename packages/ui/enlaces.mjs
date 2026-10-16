// Única forma de armar enlaces de contacto. `numero` admite cualquier formato: se queda con los dígitos.
const digitos = (numero) => String(numero).replace(/\D/g, '');

export const enlaceWhatsApp = (numero, texto) =>
  `https://wa.me/${digitos(numero)}${texto ? `?text=${encodeURIComponent(texto)}` : ''}`;

export const enlaceTel = (numero) => `tel:+${digitos(numero)}`;

// Props de los botones de contacto de un contexto (header, menu, barra, contenido, ctaFinal…) en el orden pedido:
// el primero es el primario. Las etiquetas viven en el sitio.mjs de cada app (microcopy). Si el contexto no existe se
// usa `contenido`; si la página invierte el orden del sitio, `textos.invertido[contexto]` pisa las etiquetas.
export function botones(sitio, contexto, mensaje = sitio.mensajeWhatsappPorDefecto, orden = sitio.ordenCtas) {
  const tipos = orden === 'whatsapp-primero' ? ['whatsapp', 'llamar'] : ['llamar', 'whatsapp'];
  const clave = sitio.textos[contexto] ? contexto : 'contenido';
  const textos = (orden !== sitio.ordenCtas && sitio.textos.invertido?.[clave]) || sitio.textos[clave];
  return tipos.map((tipo, i) => ({
    tipo,
    variante: i === 0 ? 'primario' : 'secundario',
    ariaLabel: sitio.aria[tipo],
    mensaje: tipo === 'whatsapp' ? mensaje : undefined,
    ...textos[tipo],
  }));
}
