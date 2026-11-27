// Config del sitio ART y accidentes. Misma forma que amparos; números desde estudio.mjs.
import { estudio } from '@ginefra/ui/estudio.mjs';

const tel = estudio.telefonos.principal.visible;
const telRicardo = estudio.telefonos.ricardo.visible;
const guia = { texto: 'Si tuviste un accidente', href: '/que-hacer-despues-de-un-accidente-de-trabajo/' };
const guiaLarga = { texto: 'Qué hacer después de un accidente de trabajo', href: guia.href };
const equipo = { texto: 'Equipo', href: '/equipo/' };
const contacto = { texto: 'Contacto', href: '/contacto/' };
const llamarCorto = { etiqueta: 'Llamar' };
const llamarNumero = { etiqueta: tel, etiquetaMovil: 'Llamar ahora' };

export const sitio = {
  id: 'art',
  colorTema: '#142030', // barra del navegador en mobile (--tinta)
  ordenCtas: 'whatsapp-primero',
  mensajeWhatsappPorDefecto: 'Hola, tuve un accidente y quiero consultar por mi reclamo. Les cuento qué pasó. (Web ART)',
  mostrarInstagram: false,
  guardia24: true,
  areaServed: ['Argentina'],

  nav: {
    desplegable: 'Accidentes',
    enlaces: [{ ...guia, acento: true }, equipo, contacto],
    tituloAreasMovil: 'Accidentes',
    enlacesMovil: [guiaLarga, equipo, contacto],
  },

  aria: {
    llamar: `Llamar al ${tel}`,
    whatsapp: 'Contar el accidente por WhatsApp',
    ricardo: `Llamar a Ricardo Ginefra al ${telRicardo}`,
  },
  // Etiquetas visibles de los botones por contexto (ver enlaces.mjs → botones()).
  textos: {
    header: { whatsapp: { etiqueta: 'Contar mi caso', etiquetaMovil: 'WhatsApp' }, llamar: { etiqueta: tel } },
    menu: { whatsapp: { etiqueta: 'Escribir por WhatsApp' }, llamar: llamarCorto },
    barra: { whatsapp: { etiqueta: 'Contar mi accidente' }, llamar: llamarCorto },
    contenido: { whatsapp: { etiqueta: 'Escribir por WhatsApp' }, llamar: llamarCorto },
    heroInicio: { whatsapp: { etiqueta: 'Contar mi accidente' }, llamar: llamarNumero },
    heroArea: { whatsapp: { etiqueta: 'Evaluar mi caso' }, llamar: llamarNumero },
    documentacion: { whatsapp: { etiqueta: 'Enviar lo que tengo' } },
    guiaResumen: { whatsapp: { etiqueta: 'Consultar ahora' }, llamar: llamarCorto },
    error404: { whatsapp: { etiqueta: 'Contar mi caso' }, llamar: llamarCorto },
    contactoCanal: { whatsapp: { etiqueta: 'Escribir por WhatsApp' }, llamar: llamarCorto },
    contactoRicardo: { whatsapp: { etiqueta: 'WhatsApp' }, llamar: llamarCorto },
  },
  mensajeRicardo: (_mensaje, pagina = 'Equipo') =>
    `Hola Ricardo, tuve un accidente y quiero consultarte por mi reclamo. (Web ART · ${pagina})`,
  flotante: { aria: 'Contar el accidente por WhatsApp', titulo: 'Contanos tu accidente por WhatsApp' },

  footer: {
    titulos: { estudio: 'Estudio', areas: 'Accidentes', contacto: 'Contacto' },
    posicionamiento: 'Reclamos a ART y aseguradoras: accidentes de trabajo, enfermedades profesionales y accidentes de tránsito.',
    etiquetaPrincipal: 'WhatsApp y teléfono',
    mostrarCorreo: true,
    horarios: ['Consultas por WhatsApp: 24 h, todos los días', 'En el estudio, con turno previo'],
    areasExtra: [guiaLarga],
    // Sin enlaceCruzado: ART no enlaza a ningún otro sitio (footer, 404, equipo ni schema).
  },

  plantillas: {
    migas: { equipo: 'Equipo', contacto: 'Contacto', privacidad: 'Política de privacidad' },
    inicio: {
      areas: { titulo: '¿Qué te pasó?', texto: 'Elegí tu caso y mirá cómo reclamamos lo que te corresponde.' },
      pasos: 'Cómo funciona tu reclamo',
      documentacion: { titulo: 'Qué necesitamos para empezar', texto: 'Si te falta algo, escribinos igual: te decimos cómo conseguirlo.' },
      equipo: { titulo: 'Quiénes llevan tu caso', texto: 'Abogados que pelean cada punto de incapacidad.' },
      faq: 'Preguntas frecuentes sobre accidentes y ART',
      ctaFinal: {
        titulo: 'Tu indemnización no se negocia sola',
        texto:
          'La ART y la aseguradora tienen abogados desde el primer día. Vos también. Contanos tu accidente por WhatsApp y te decimos cuánto podés reclamar.',
      },
    },
    area: {
      situaciones: '¿Te pasa algo de esto?',
      cuerpo: 'Cómo lo reclamamos',
      documentacion: { titulo: 'Qué documentación necesitamos', texto: 'Con estos papeles evaluamos tu caso. Una foto de cada uno alcanza.' },
      pasos: 'Paso a paso',
      faq: 'Preguntas frecuentes',
      relacionadas: 'También te puede servir',
      extrasRelacionadas: [guiaLarga],
      verCanales: 'Ver todos los canales',
      ctaFinal: {
        'accidentes-de-trabajo': {
          titulo: 'Te lesionaste trabajando: cobrá lo que te corresponde',
          texto: 'Contanos qué pasó y mandanos lo que tengas de la ART. Calculamos tu indemnización y la reclamamos completa.',
        },
        'enfermedades-profesionales': {
          titulo: 'Tu trabajo te enfermó: eso también se indemniza',
          texto: 'Columna, hernias, audición, túnel carpiano. Mandanos tus estudios y el rechazo de la ART, y vamos por tu reclamo.',
        },
        'accidentes-de-transito': {
          titulo: 'Chocaste o te atropellaron: la aseguradora tiene que pagar',
          texto: 'Mandanos la denuncia, las fotos y los datos del otro vehículo. Reclamamos tus lesiones, tus gastos y los daños de tu vehículo.',
        },
        'rechazos-de-art-y-comisiones-medicas': {
          titulo: 'Un rechazo de la ART no es la última palabra',
          texto: 'Mandanos el rechazo, el alta o el dictamen de la Comisión Médica. Lo revisamos y te decimos cómo darlo vuelta.',
        },
      },
    },
    guia: {
      migas: 'Después de un accidente de trabajo',
      autor: ({ nombre, tomo, folio, fecha }) => `Por ${nombre}, abogado · T° ${tomo} F° ${folio} · Actualizado el ${fecha}`,
      resumen: 'Lo que tenés que hacer ya',
      indice: 'En esta guía',
      pasos: 'Paso a paso: qué hacer después del accidente',
      ctaPaso2: {
        texto: '¿Ya hiciste la denuncia? Mandanos el número de siniestro y lo que te dio la ART, y evaluamos tu caso.',
        etiqueta: 'Enviar lo que tengo',
        variante: 'primario',
      },
      noHacer: 'Qué no tenés que hacer',
      derechos: 'Tus derechos como trabajador',
      tenerAMano: 'Qué tener a mano para escribirnos',
      faq: 'Preguntas frecuentes',
      relacionadas: 'Casos que reclamamos',
      extrasRelacionadas: [],
      ctaFinal: {
        titulo: 'No firmes nada sin asesorarte',
        texto: 'Contanos tu accidente por WhatsApp. Evaluamos tu caso en forma confidencial y te decimos cuánto te corresponde.',
      },
    },
    equipo: {
      trayectoria: 'Trayectoria',
      areas: 'Áreas',
      comoTrabajamos: 'Cómo trabajamos',
      botones: (nombre) => ({ llamar: { etiqueta: `Llamar a ${nombre}` }, whatsapp: { etiqueta: `Escribir a ${nombre}` } }),
      ctaFinal: {
        titulo: 'Contanos qué te pasó',
        texto: 'Escribinos por WhatsApp y hablás directo con el abogado que va a llevar tu reclamo.',
      },
    },
    contacto: {
      canales: 'Hablá con un abogado',
      titulosCanales: { whatsapp: 'WhatsApp', llamar: 'Teléfono', ricardo: 'Ricardo Ginefra' },
      textosCanales: {
        whatsapp: 'La forma más rápida: contanos qué pasó y mandanos fotos de lo que tengas.',
        llamar: 'Si preferís contarnos tu caso de viva voz antes de enviar papeles.',
        ricardo: 'Contacto directo con el abogado fundador del estudio, por WhatsApp o llamada.',
      },
      primerMensaje: 'Qué contarnos en el primer mensaje',
      primerMensajeTexto: 'Con esto te respondemos más rápido y con una evaluación concreta.',
      documentacion: 'Documentación que suma',
      visitanos: 'Visitanos',
      faq: 'Preguntas frecuentes',
    },
    // Formulario de contacto (solo con CONTACTO_EMAIL=true).
    formulario: {
      sitioAsunto: 'ART y accidentes',
      titulo: 'Preferís escribirnos',
      bajada:
        'Dejanos tus datos y una breve descripción, y te contactamos. Para evaluar el caso con documentos, lo más rápido sigue siendo WhatsApp.',
      aviso: { texto: 'Si la ART te dio el alta o te citó a la Comisión Médica, escribinos directo por WhatsApp.', destacado: false },
      leyenda: 'Los campos con * son obligatorios.',
      campos: {
        nombre: { etiqueta: 'Nombre y apellido', placeholder: 'Ej.: Juan Pérez', error: 'Escribí tu nombre para que sepamos a quién responder.' },
        telefono: {
          etiqueta: 'Teléfono',
          placeholder: 'Ej.: 11 5555-5555',
          ayuda: 'Preferentemente con WhatsApp.',
          error: 'Necesitamos un teléfono para contactarte.',
        },
        email: { etiqueta: 'Correo electrónico (opcional)', placeholder: 'tu@correo.com', error: 'Revisá el formato del correo: falta la @ o el dominio.' },
        tipo: {
          etiqueta: '¿Qué tipo de accidente fue?',
          vacio: 'Elegí una opción',
          otra: 'Otra consulta',
          obligatorio: true,
          error: 'Elegí el tipo de consulta.',
        },
        mensaje: {
          etiqueta: 'Contanos tu caso',
          placeholder: 'Qué pasó, cuándo, qué lesión tenés y qué te respondió la ART o la aseguradora.',
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
      caja: '¿La ART te dio el alta o tenés fecha en la Comisión Médica? Escribinos ya por WhatsApp.',
      botones: { whatsapp: { etiqueta: 'Escribir por WhatsApp' }, llamar: { etiqueta: 'Llamar' } },
      mensajeWhatsapp: 'Hola, ya envié una consulta por el formulario y quiero agregar información de mi accidente. (Web ART · Formulario)',
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
