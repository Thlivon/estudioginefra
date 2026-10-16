// Config del sitio amparos (provisoria hasta el hito 5). Textos de docs/copy/microcopy-amparos.md.
import { estudio } from '@ginefra/ui/estudio.mjs';

const tel = estudio.telefonos.principal.visible;
const telRicardo = estudio.telefonos.ricardo.visible;
const guia = { texto: 'Si la prepaga rechaza', href: '/que-hacer-si-la-prepaga-rechaza-la-cobertura/' };
const equipo = { texto: 'Equipo', href: '/equipo/' };
const contacto = { texto: 'Contacto', href: '/contacto/' };

export const sitio = {
  id: 'amparos',
  ordenCtas: 'whatsapp-primero',
  mensajeWhatsappPorDefecto:
    'Hola, quiero consultar por un amparo de salud. Les envío el rechazo de mi prepaga u obra social y la orden médica. (Web amparos)',
  mostrarInstagram: false,
  guardia24: false,
  areaServed: ['Argentina'],

  nav: {
    desplegable: 'Coberturas',
    enlaces: [{ ...guia, acento: true }, equipo, contacto],
    tituloAreasMovil: 'Coberturas',
    enlacesMovil: [{ texto: 'Qué hacer si la prepaga rechaza', href: guia.href }, equipo, contacto],
  },

  aria: {
    llamar: `Llamar al ${tel}`,
    whatsapp: 'Enviar por WhatsApp el rechazo y la orden médica',
    ricardo: `Llamar a Ricardo Ginefra al ${telRicardo}`,
  },
  textos: {
    header: { whatsapp: { etiqueta: 'Enviar rechazo', etiquetaMovil: 'WhatsApp' }, llamar: { etiqueta: tel } },
    menu: { whatsapp: { etiqueta: 'Enviar por WhatsApp' }, llamar: { etiqueta: 'Llamar' } },
    barra: { whatsapp: { etiqueta: 'Enviar documentación' }, llamar: { etiqueta: 'Llamar' } },
    contenido: { whatsapp: { etiqueta: 'Enviar rechazo y orden' }, llamar: { etiqueta: tel, etiquetaMovil: 'Llamar ahora' } },
  },
  flotante: { aria: 'Enviar el rechazo por WhatsApp', titulo: 'Envianos el rechazo por WhatsApp' },

  footer: {
    titulos: { estudio: 'Estudio', areas: 'Coberturas', contacto: 'Contacto' },
    posicionamiento: 'Amparos de salud y medidas cautelares contra prepagas y obras sociales, en el fuero federal.',
    etiquetaPrincipal: 'WhatsApp y teléfono',
    mostrarCorreo: true,
    horarios: ['Atención: {A CONFIRMAR: días y horario de atención}', 'En el estudio, con turno previo'],
    areasExtra: [{ texto: 'Qué hacer si la prepaga rechaza', href: guia.href }],
    enlaceCruzado: '¿Necesitás un abogado penalista?',
  },
};
