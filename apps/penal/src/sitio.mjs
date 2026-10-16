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
    contactoCanal: { llamar: { etiqueta: 'Llamar ahora' }, whatsapp: { etiqueta: 'Abrir WhatsApp' } },
    contactoRicardo: { llamar: { etiqueta: 'Llamar' }, whatsapp: { etiqueta: 'WhatsApp' } },
    // Delitos económicos: WhatsApp primero (ordenCtas en el frontmatter).
    invertido: {
      contenido: { whatsapp: { etiqueta: 'Consultar por WhatsApp' }, llamar: { etiqueta: 'Llamar' } },
      barra: { whatsapp: { etiqueta: 'WhatsApp' }, llamar: { etiqueta: 'Llamar' } },
    },
  },
  // Botones de Ricardo: mismo mensaje de la página, dirigido a él.
  mensajeRicardo: (mensaje) => mensaje.replace(/^Hola,/, 'Hola Ricardo,'),
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

  // Títulos y etiquetas fijas de las plantillas (microcopy-penal.md §5 y §6).
  plantillas: {
    migas: { equipo: 'Equipo', contacto: 'Contacto', privacidad: 'Política de privacidad', local: local.texto },
    area: {
      situaciones: 'Situaciones que atendemos',
      cuerpo: 'Cómo te defendemos',
      pasos: 'Paso a paso',
      faq: 'Preguntas frecuentes',
      relacionadas: 'También te puede servir',
      extrasRelacionadas: [guia, local],
      verCanales: 'Ver todos los canales',
    },
    guia: {
      migas: guia.texto,
      autor: ({ nombre, tomo, folio, fecha }) => `Por ${nombre}, abogado · T° ${tomo} F° ${folio} · Actualizado ${fecha}`,
      resumen: 'Lo urgente, en 30 segundos',
      indice: 'En esta guía',
      pasos: 'Paso a paso',
      ctaPaso2: { etiqueta: 'Mandanos los datos por WhatsApp', variante: 'texto' },
      noHacer: 'Qué NO hacer',
      derechos: 'Tus derechos',
      tenerAMano: 'Qué tener a mano para llamarnos',
      faq: 'Preguntas frecuentes',
      relacionadas: 'Áreas relacionadas',
      extrasRelacionadas: [local],
    },
    equipo: {
      trayectoria: 'Trayectoria',
      areas: 'Áreas que atiende',
      comoTrabajamos: 'Cómo trabajamos',
      botones: (nombre) => ({ llamar: { etiqueta: `Llamar a ${nombre}` }, whatsapp: { etiqueta: `WhatsApp a ${nombre}` } }),
      cruzado: { texto: 'También atendemos amparos de salud →' },
    },
    contacto: {
      canales: 'Hablá con un abogado',
      titulosCanales: { whatsapp: 'WhatsApp', llamar: 'Llamar a la guardia', ricardo: 'Ricardo Ginefra', instagram: 'Instagram' },
      verInstagram: 'Ver Instagram',
      primerMensaje: 'Qué contarnos en el primer mensaje',
      visitanos: 'Visitanos',
      faq: 'Preguntas frecuentes',
    },
    // Formulario de contacto (hito 6, solo con CONTACTO_EMAIL=true). microcopy-penal.md §8.
    formulario: {
      sitioAsunto: 'Defensa penal',
      titulo: 'Preferís escribirnos',
      bajada: 'Para consultas que pueden esperar. Te contactamos al teléfono que nos dejes.',
      aviso: { texto: 'Si es urgente, no uses el formulario: llamá ahora a la guardia.', destacado: true, boton: 'Llamar a la guardia' },
      leyenda: 'Los campos con * son obligatorios.',
      campos: {
        nombre: { etiqueta: 'Nombre y apellido', placeholder: 'Ej.: Juan Pérez', error: 'Escribí tu nombre.' },
        telefono: {
          etiqueta: 'Teléfono o WhatsApp',
          placeholder: 'Ej.: 11 2345-6789',
          ayuda: 'Te llamamos o escribimos a este número.',
          error: 'Escribí un teléfono para que podamos contactarte.',
          errorFormato: 'Revisá el número: usá solo números, espacios o guiones.',
        },
        email: { etiqueta: 'Correo electrónico (opcional)', placeholder: 'nombre@correo.com', error: 'Revisá el correo: parece que falta la @ o el dominio.' },
        tipo: { etiqueta: '¿Sobre qué es tu consulta?', vacio: 'Elegí una opción', otra: 'Otra', obligatorio: false, error: 'Elegí una opción de la lista.' },
        mensaje: { etiqueta: 'Contanos qué pasó', placeholder: 'Qué pasó, dónde y cuándo. Si hay una citación, la fecha.', error: 'Contanos brevemente tu consulta.' },
        privacidad: { etiqueta: 'Leí y acepto la [política de privacidad](/privacidad/).', error: 'Para enviar la consulta, aceptá la política de privacidad.' },
        trampa: { etiqueta: 'No completes este campo' },
      },
      enviar: 'Enviar consulta',
      nota: 'Tu consulta es confidencial. Si es urgente, llamá a la guardia.',
      errorGeneral: 'No pudimos enviar tu consulta. Si es urgente, llamá a la guardia o escribinos por WhatsApp.',
      enlaceTerciario: 'o dejanos tu consulta',
    },
    enviado: {
      title: 'Consulta enviada | Ginefra & Asociados',
      h1: 'Recibimos tu consulta',
      texto:
        'Gracias por escribirnos. Un abogado del estudio la va a leer y te va a contactar al teléfono que nos dejaste. Si es urgente, no esperes: llamá ahora a la guardia.',
      botones: { llamar: { etiqueta: 'Llamar a la guardia' } },
      volver: 'Volver al inicio',
    },
    error404: {
      atajos: 'Quizás buscabas',
      campoArea: 'tituloCorto',
      guia,
      contacto,
    },
  },
};
