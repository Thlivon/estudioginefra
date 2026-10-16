// Endpoint POST /api/contacto/ (compartido): flag, tamaño, honeypot, BotID, validación y envío por Resend.
// Responde JSON si el cliente lo pide (fetch) y 303 si es un POST nativo sin JS.
// Nunca devuelve detalles internos ni la respuesta de Resend; los logs no llevan datos personales.
import { checkBotId } from 'botid/server';
import { LIMITE_BYTES, asunto, esTrampa, textoEmail, validar } from './contacto.mjs';

const RESEND = 'https://api.resend.com/emails';

/**
 * @param {Request} request
 * @param {{ sitio: any, opciones: () => Promise<string[]>, dev: boolean }} config
 */
export async function manejarContacto(request, { sitio, opciones, dev }) {
  const env = process.env;
  // El flag se mira en runtime: con el formulario apagado, el endpoint no existe.
  if (env.CONTACTO_EMAIL !== 'true') return new Response('Not found', { status: 404 });

  const f = sitio.plantillas.formulario;
  const json = (request.headers.get('accept') ?? '').includes('application/json');
  const responder = (estado, cuerpo) =>
    json
      ? Response.json(cuerpo, { status: estado })
      : new Response(null, {
          status: 303,
          headers: { Location: cuerpo.ok ? '/contacto/enviado/' : '/contacto/?error=1#error-envio' },
        });
  const fallo = (estado) => responder(estado, { ok: false, errores: { general: f.errorGeneral } });

  // Solo se aceptan envíos desde el propio sitio: un formulario ajeno que postee acá trae otro Origin.
  const origen = request.headers.get('origin');
  if (origen && origen !== new URL(request.url).origin) return fallo(403);

  if (Number(request.headers.get('content-length') ?? 0) > LIMITE_BYTES) return fallo(400);
  const texto = await request.text();
  if (new TextEncoder().encode(texto).length > LIMITE_BYTES) return fallo(400);

  let campos;
  try {
    campos = (request.headers.get('content-type') ?? '').includes('application/json')
      ? JSON.parse(texto)
      : Object.fromEntries(new URLSearchParams(texto));
    if (!campos || typeof campos !== 'object') throw new Error();
  } catch {
    return fallo(400);
  }

  // Honeypot: éxito falso, sin enviar y sin pistas.
  if (esTrampa(campos)) return responder(200, { ok: true });

  // BotID: en Vercel lee los encabezados del contexto de la función; en local devuelve humano.
  const bot = await checkBotId({ advancedOptions: { headers: Object.fromEntries(request.headers) } });
  if (bot.isBot) {
    console.warn('[contacto] rechazado por BotID');
    return fallo(403);
  }

  const c = f.campos;
  const { ok, errores, datos } = validar(campos, {
    opciones: await opciones(),
    tipoObligatorio: c.tipo.obligatorio,
    mensajes: {
      nombre: c.nombre.error,
      telefono: c.telefono.error,
      telefonoFormato: c.telefono.errorFormato,
      email: c.email.error,
      tipo: c.tipo.error,
      mensaje: c.mensaje.error,
      privacidad: c.privacidad.error,
    },
  });
  if (!ok) return responder(400, { ok: false, errores });

  const email = {
    from: env.CONTACTO_REMITENTE || 'onboarding@resend.dev',
    to: [env.CONTACTO_DESTINO || 'estudiolosdefensores@hotmail.com'],
    subject: asunto(f.sitioAsunto, datos.tipo),
    text: textoEmail(datos, f.sitioAsunto),
    ...(datos.email && { reply_to: datos.email }),
  };

  if (!env.RESEND_API_KEY) {
    if (dev) {
      console.info(`[contacto] modo de prueba (sin RESEND_API_KEY): no se envía.\n${JSON.stringify(email, null, 2)}`);
      return responder(200, { ok: true });
    }
    console.error('[contacto] falta RESEND_API_KEY');
    return fallo(500);
  }

  try {
    const r = await fetch(RESEND, {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(email),
    });
    if (!r.ok) {
      console.error(`[contacto] Resend respondió ${r.status}`);
      return fallo(500);
    }
  } catch {
    console.error('[contacto] no se pudo conectar con Resend');
    return fallo(500);
  }
  console.info(`[contacto] consulta enviada (${sitio.id}, ${datos.tipo || 'sin tipo'})`);
  return responder(200, { ok: true });
}
