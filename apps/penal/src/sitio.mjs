// Config del sitio penal. Textos de interfaz tal cual docs/copy/microcopy-penal.md; números desde estudio.mjs.
import { estudio } from '@ginefra/ui/estudio.mjs';

const tel = estudio.telefonos.principal.visible;
const telRicardo = estudio.telefonos.ricardo.visible;
const guia = { texto: 'Si detienen a un familiar', href: '/que-hacer-si-detienen-a-un-familiar/' };
const local = { texto: 'Abogado penalista en San Justo', href: '/abogado-penalista-san-justo/' };
const equipo = { texto: 'Equipo', href: '/equipo/' };
const contacto = { texto: 'Contacto', href: '/contacto/' };

export const sitio = {
  id: 'penal',
  ordenCtas: 'llamar-primero',
  mensajeWhatsappPorDefecto:
    'Hola, escribo desde la web de Ginefra & Asociados. Necesito hablar con un abogado penalista, es urgente.',
  mostrarInstagram: true,
  guardia24: true,
  areaServed: ['Partido de La Matanza', 'Ciudad Autónoma de Buenos Aires', 'Provincia de Buenos Aires'],

  nav: {
    desplegable: 'Áreas',
    pieDesplegable: local,
    enlaces: [{ ...guia, acento: true }, equipo, contacto],
    tituloAreasMovil: 'Áreas de práctica',
    enlacesMovil: [guia, local, equipo, contacto],
  },

  aria: {
    llamar: `Llamar a la guardia penal 24 horas al ${tel}`,
    whatsapp: 'Escribir por WhatsApp a la guardia penal',
    ricardo: `Llamar a Ricardo Ginefra al ${telRicardo}`,
  },
  // Etiquetas visibles de los botones por contexto (ver enlaces.mjs → botones()).
  textos: {
    header: { llamar: { etiqueta: `Guardia 24 h · ${tel}`, etiquetaMovil: 'Guardia 24 h' }, whatsapp: { etiqueta: 'WhatsApp' } },
    menu: { llamar: { etiqueta: 'Llamar ahora' }, whatsapp: { etiqueta: 'WhatsApp' } },
    barra: { llamar: { etiqueta: 'Llamar ahora' }, whatsapp: { etiqueta: 'WhatsApp' } },
    contenido: { llamar: { etiqueta: tel, etiquetaMovil: 'Llamar ahora' }, whatsapp: { etiqueta: 'Escribir por WhatsApp' } },
  },
  flotante: { aria: 'Escribir por WhatsApp a la guardia penal', titulo: 'Escribinos por WhatsApp' },

  footer: {
    titulos: { estudio: 'Estudio', areas: 'Áreas', contacto: 'Contacto' },
    posicionamiento: 'Defensa penal con guardia 24 h. San Justo, La Matanza, CABA y fuero federal.',
    etiquetaPrincipal: 'WhatsApp y llamadas',
    mostrarCorreo: false,
    horarios: ['Guardia penal 24 h, todos los días', 'Atención en el estudio con turno previo'],
    areasExtra: [guia, local],
    enlaceCruzado: '¿Buscás amparos de salud?',
  },
};
