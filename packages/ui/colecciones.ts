// Content Collections compartidas por los dos sitios. Las rutas son relativas a la raíz de cada app.
import { defineCollection, reference } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const seo = z.object({ title: z.string().max(60), description: z.string().max(155) });
const paso = z.object({ titulo: z.string(), texto: z.string() });
const pregunta = z.object({ pregunta: z.string(), respuesta: z.string() });
const cta = z.object({ titulo: z.string(), texto: z.string() });

const areas = defineCollection({
  loader: glob({ base: './src/content/areas', pattern: '*.md' }),
  schema: z.object({
    titulo: z.string(),
    tituloCorto: z.string(),
    orden: z.number(),
    icono: z.string(),
    resumen: z.string().max(140),
    h1: z.string(),
    bajada: z.string(),
    keyword: z.string(),
    keywordsSecundarias: z.array(z.string()),
    seo,
    situaciones: z.array(z.string()),
    ctaIntermedio: cta.optional(), // penal
    documentacion: z.array(z.string()).optional(), // amparos
    pasos: z.array(paso),
    faq: z.array(pregunta),
    relacionadas: z.array(reference('areas')),
    mensajeWhatsapp: z.string(),
    ordenCtas: z.enum(['llamar-primero', 'whatsapp-primero']).optional(),
    ctaFinal: cta.optional(),
  }),
});

const guias = defineCollection({
  loader: glob({ base: './src/content/guias', pattern: '*.md' }),
  schema: z.object({
    h1: z.string(),
    keyword: z.string(),
    seo,
    autor: reference('equipo'),
    publicado: z.coerce.date(),
    actualizado: z.coerce.date(),
    resumen: z.array(z.string()),
    pasos: z.array(paso),
    noHacer: z.array(z.string()),
    tenerAMano: z.array(z.string()),
    faq: z.array(pregunta),
    areasRelacionadas: z.array(reference('areas')),
    mensajeWhatsapp: z.string(),
    ctaFinal: cta.optional(),
  }),
});

const faq = defineCollection({
  loader: file('./src/content/faq.yaml'),
  schema: z.object({
    pregunta: z.string(),
    respuesta: z.string(),
    paginas: z.array(z.enum(['inicio', 'local', 'contacto'])),
    orden: z.number(),
  }),
});

const paginas = defineCollection({
  loader: glob({ base: './src/content/paginas', pattern: '*.md' }),
  schema: z.object({
    h1: z.string(),
    bajada: z.string(),
    keyword: z.string().optional(),
    seo,
    sellos: z.array(z.string()).optional(),
    situaciones: z.array(z.object({ texto: z.string(), href: z.string() })).optional(),
    pasos: z.array(paso).optional(),
    ctaIntermedio: cta.optional(),
    diferenciales: z.array(paso).optional(),
    equipoFrase: z.string().optional(),
    dondeEstamos: z.string().optional(),
    ctaFinal: cta.optional(),
    // local
    estudio: z.string().optional(),
    localidades: z.array(z.string()).optional(),
    areasLocal: z.array(z.object({ area: reference('areas'), texto: z.string() })).optional(),
    // contacto
    canales: z
      .object({ whatsapp: z.string(), llamar: z.string(), ricardo: z.string(), instagram: z.string() })
      .optional(),
    primerMensaje: z.array(z.string()).optional(),
    documentacion: z.array(z.string()).optional(),
    visitanos: z.string().optional(),
    confidencialidad: z.string().optional(),
    // 404
    urgencia: z.string().optional(),
    // privacidad
    actualizado: z.coerce.date().optional(),
    mensajeWhatsapp: z.string().optional(),
  }),
});

// Compartida con amparos: vive en packages/ui.
const equipo = defineCollection({
  loader: glob({ base: '../../packages/ui/contenido/equipo', pattern: '*.md' }),
  schema: ({ image }) =>
    z.object({
      nombre: z.string(),
      rol: z.string(),
      matricula: z.object({ tomo: z.number(), folio: z.number(), colegio: z.string().nullable().optional() }),
      telefono: z.enum(['principal', 'ricardo']),
      foto: image(),
      fotoAlt: z.string(),
      orden: z.number(),
      enfoque: z.object({ penal: z.string(), amparos: z.string() }),
      areas: z.object({ penal: z.array(z.string()), amparos: z.array(z.string()) }),
    }),
});

export const colecciones = { areas, guias, faq, paginas, equipo };
