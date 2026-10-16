// Config del sitio amparos. Textos de interfaz tal cual docs/copy/microcopy-amparos.md; números desde estudio.mjs.
import { estudio } from '@ginefra/ui/estudio.mjs';

const tel = estudio.telefonos.principal.visible;
const telRicardo = estudio.telefonos.ricardo.visible;
const guia = { texto: 'Si la prepaga rechaza', href: '/que-hacer-si-la-prepaga-rechaza-la-cobertura/' };
const guiaLarga = { texto: 'Qué hacer si la prepaga rechaza la cobertura', href: guia.href };
const equipo = { texto: 'Equipo', href: '/equipo/' };
const contacto = { texto: 'Contacto', href: '/contacto/' };
const llamarCorto = { etiqueta: 'Llamar' };
const llamarNumero = { etiqueta: tel, etiquetaMovil: 'Llamar ahora' };

export const sitio = {
  id: 'amparos',
  colorTema: '#10232a', // barra del navegador en mobile (--tinta)
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
    enlacesMovil: [guiaLarga, equipo, contacto],
  },

  aria: {
    llamar: `Llamar al ${tel}`,
    whatsapp: 'Enviar por WhatsApp el rechazo y la orden médica',
    ricardo: `Llamar a Ricardo Ginefra al ${telRicardo}`,
  },
  // Etiquetas visibles de los botones por contexto (ver enlaces.mjs → botones()).
  textos: {
    header: { whatsapp: { etiqueta: 'Enviar rechazo', etiquetaMovil: 'WhatsApp' }, llamar: { etiqueta: tel } },
    menu: { whatsapp: { etiqueta: 'Enviar por WhatsApp' }, llamar: llamarCorto },
    barra: { whatsapp: { etiqueta: 'Enviar documentación' }, llamar: llamarCorto },
    contenido: { whatsapp: { etiqueta: 'Enviar por WhatsApp' }, llamar: llamarCorto },
    heroInicio: { whatsapp: { etiqueta: 'Enviar rechazo y orden' }, llamar: llamarNumero },
    heroArea: { whatsapp: { etiqueta: 'Enviar mi caso' }, llamar: llamarNumero },
    documentacion: { whatsapp: { etiqueta: 'Enviar documentación' } },
    guiaResumen: { whatsapp: { etiqueta: 'Enviar rechazo ahora' }, llamar: llamarCorto },
    error404: { whatsapp: { etiqueta: 'Enviar rechazo' }, llamar: llamarCorto },
    contactoCanal: { whatsapp: { etiqueta: 'Enviar por WhatsApp' }, llamar: llamarCorto },
    contactoRicardo: { whatsapp: { etiqueta: 'WhatsApp' }, llamar: llamarCorto },
  },
  // Botones de Ricardo: mensaje propio (microcopy §10), con la página de origen.
  mensajeRicardo: (_mensaje, pagina = 'Equipo') =>
    `Hola Ricardo, quiero consultarte por un amparo de salud. Te envío el rechazo de mi prepaga u obra social y la orden médica. (Web amparos · ${pagina})`,
  flotante: { aria: 'Enviar el rechazo por WhatsApp', titulo: 'Envianos el rechazo por WhatsApp' },

  footer: {
    titulos: { estudio: 'Estudio', areas: 'Coberturas', contacto: 'Contacto' },
    posicionamiento: 'Amparos de salud y medidas cautelares contra prepagas y obras sociales, en el fuero federal.',
    etiquetaPrincipal: 'WhatsApp y teléfono',
    mostrarCorreo: true,
    horarios: ['Atención: {A CONFIRMAR: días y horario de atención}', 'En el estudio, con turno previo'],
    areasExtra: [guiaLarga],
    enlaceCruzado: '¿Necesitás un abogado penalista?',
  },

  // Títulos y etiquetas fijas de las plantillas (microcopy-amparos.md §6 y §7).
  plantillas: {
    migas: { equipo: 'Equipo', contacto: 'Contacto', privacidad: 'Política de privacidad' },
    inicio: {
      areas: { titulo: '¿Qué te rechazó tu prepaga?', texto: 'Elegí tu caso y mirá cómo lo resolvemos.' },
      pasos: 'Cómo funciona el amparo de salud',
      documentacion: { titulo: 'Qué necesitamos para empezar', texto: 'Si te falta algo, escribinos igual: te decimos cómo conseguirlo.' },
      equipo: { titulo: 'Quiénes llevan tu caso', texto: 'Abogados que van directo a la Justicia.' },
      faq: 'Preguntas frecuentes sobre amparos de salud',
      ctaFinal: {
        titulo: 'En salud, el tiempo importa',
        texto:
          'Cada día sin tratamiento cuenta. Envianos hoy el rechazo de tu prepaga y la orden médica, y empezamos a trabajar en tu amparo.',
      },
    },
    area: {
      situaciones: '¿Te pasa algo de esto?',
      cuerpo: 'Cómo lo resolvemos',
      documentacion: { titulo: 'Qué documentación necesitamos', texto: 'Con estos papeles evaluamos tu caso. Una foto de cada uno alcanza.' },
      pasos: 'Paso a paso',
      faq: 'Preguntas frecuentes',
      relacionadas: 'También te puede servir',
      extrasRelacionadas: [guiaLarga],
      verCanales: 'Ver todos los canales',
      ctaFinal: {
        'medicamentos-alto-costo-y-oncologia': {
          titulo: 'Tu tratamiento no puede esperar',
          texto: 'Envianos el rechazo y la receta por WhatsApp. Evaluamos tu caso y pedimos la medida cautelar para que la prepaga entregue la medicación.',
        },
        'discapacidad-tea-tgd': {
          titulo: 'Las terapias de tu hijo no se cortan',
          texto: 'Mandanos el CUD, el plan de tratamiento y la respuesta de la prepaga. Vamos a la Justicia por la cobertura total que fija la ley.',
        },
        'internacion-geriatrica-y-cuidados-domiciliarios': {
          titulo: 'Tu familiar necesita cuidado hoy',
          texto: 'Envianos la indicación médica y el rechazo. Pedimos al juez que la prepaga cubra la residencia o los cuidados en casa, sin demoras.',
        },
        'cirugias-protesis-e-insumos': {
          titulo: 'Que tu cirugía tenga fecha',
          texto: 'Mandanos la orden de cirugía, el pedido de materiales y la respuesta de la auditoría. Pedimos la cautelar para que autoricen ya.',
        },
      },
    },
    guia: {
      migas: 'Si la prepaga rechaza la cobertura',
      autor: ({ nombre, tomo, folio, fecha }) => `Por ${nombre}, abogado · T° ${tomo} F° ${folio} · Actualizado el ${fecha}`,
      resumen: 'Lo que tenés que hacer ya',
      indice: 'En esta guía',
      pasos: 'Paso a paso: qué hacer si la prepaga rechaza',
      ctaPaso2: {
        texto: '¿Ya tenés el rechazo y la orden médica? Mandánoslos por WhatsApp y evaluamos tu caso.',
        etiqueta: 'Enviar lo que tengo',
        variante: 'primario',
      },
      noHacer: 'Qué no tenés que hacer',
      derechos: 'Tus derechos como afiliado',
      tenerAMano: 'Qué tener a mano para escribirnos',
      faq: 'Preguntas frecuentes',
      relacionadas: 'Coberturas que reclamamos',
      extrasRelacionadas: [],
      ctaFinal: {
        titulo: 'No dejes que la prepaga decida por tu médico',
        texto: 'Envianos el rechazo y la orden médica por WhatsApp. Evaluamos tu caso en forma confidencial y te decimos cómo vamos a avanzar.',
      },
    },
    equipo: {
      trayectoria: 'Trayectoria',
      areas: 'Áreas',
      comoTrabajamos: 'Cómo trabajamos',
      botones: (nombre) => ({ llamar: { etiqueta: `Llamar a ${nombre}` }, whatsapp: { etiqueta: `Escribir a ${nombre}` } }),
      cruzado: { antes: 'También atendemos defensa penal: ' },
      ctaFinal: {
        titulo: 'Contanos qué te rechazaron',
        texto: 'Envianos el rechazo y la orden médica por WhatsApp y hablás directo con nosotros.',
      },
    },
    contacto: {
      canales: 'Hablá con un abogado',
      titulosCanales: { whatsapp: 'WhatsApp', llamar: 'Teléfono', ricardo: 'Ricardo Ginefra' },
      textosCanales: {
        whatsapp: 'La forma más rápida: mandanos fotos del rechazo y de la orden médica.',
        llamar: 'Si preferís contarnos tu caso de viva voz antes de enviar papeles.',
        ricardo: 'Contacto directo con el abogado fundador del estudio, por WhatsApp o llamada.',
      },
      primerMensaje: 'Qué enviarnos en el primer mensaje',
      primerMensajeTexto: 'Con esto te respondemos más rápido y con una evaluación concreta.',
      documentacion: 'Documentación que suma',
      visitanos: 'Visitanos',
      faq: 'Preguntas frecuentes',
    },
    // Formulario de contacto (hito 6, solo con CONTACTO_EMAIL=true). microcopy-amparos.md §9.
    formulario: {
      sitioAsunto: 'Amparos de salud',
      titulo: 'Preferís escribirnos',
      bajada:
        'Dejanos tus datos y una breve descripción, y te contactamos. Para evaluar el caso con documentos, lo más rápido sigue siendo WhatsApp.',
      aviso: { texto: 'Si tenés una cirugía o un tratamiento con fecha cercana, escribinos directo por WhatsApp.', destacado: false },
      leyenda: 'Los campos con * son obligatorios.',
      campos: {
        nombre: { etiqueta: 'Nombre y apellido', placeholder: 'Ej.: María González', error: 'Escribí tu nombre para que sepamos a quién responder.' },
        telefono: {
          etiqueta: 'Teléfono',
          placeholder: 'Ej.: 11 5555-5555',
          ayuda: 'Preferentemente con WhatsApp.',
          error: 'Necesitamos un teléfono para contactarte.',
        },
        email: { etiqueta: 'Correo electrónico (opcional)', placeholder: 'tu@correo.com', error: 'Revisá el formato del correo: falta la @ o el dominio.' },
        tipo: {
          etiqueta: '¿Qué te rechazó la prepaga u obra social?',
          vacio: 'Elegí una opción',
          otra: 'Otra consulta',
          obligatorio: true,
          error: 'Elegí el tipo de consulta.',
        },
        mensaje: {
          etiqueta: 'Contanos tu caso',
          placeholder: 'Qué indicó tu médico, qué respondió la prepaga y si hay una fecha límite.',
          ayuda: 'No incluyas datos médicos detallados: los documentos te los pedimos después.',
          error: 'Contanos brevemente qué pasó.',
        },
        privacidad: {
          etiqueta: 'Leí y acepto la [política de privacidad](/privacidad/) y autorizo el uso de mis datos para responder esta consulta.',
          error: 'Para enviar la consulta tenés que aceptar la política de privacidad.',
        },
        trampa: { etiqueta: 'No completes este campo' },
      },
      enviar: 'Enviar consulta',
      errorGeneral: 'No pudimos enviar tu consulta. Escribinos por WhatsApp o llamanos.',
      enlaceTerciario: 'o dejanos tu consulta',
    },
    enviado: {
      title: 'Consulta enviada · Ginefra & Asociados',
      h1: 'Recibimos tu consulta',
      texto: 'Gracias por escribirnos. Vamos a revisar tu mensaje y te contactamos al teléfono que nos dejaste.',
      caja: '¿Tenés una fecha límite o el tratamiento no puede esperar? Mandanos ya el rechazo y la orden médica por WhatsApp.',
      botones: { whatsapp: { etiqueta: 'Enviar por WhatsApp' }, llamar: { etiqueta: 'Llamar' } },
      mensajeWhatsapp:
        'Hola, ya envié una consulta por el formulario y quiero agregar documentación de mi caso. (Web amparos · Formulario)',
      volver: 'Volver al inicio',
    },
    error404: {
      atajos: 'Quizás buscabas',
      campoArea: 'titulo',
      guia: guiaLarga,
      contacto,
    },
  },
};
