import { test } from 'node:test';
import assert from 'node:assert/strict';
import { manejarContacto } from './contacto-servidor.mjs';

const config = { sitio: { plantillas: { formulario: { errorGeneral: 'error' } } }, opciones: async () => [], dev: true };
const pedido = (origin) =>
  new Request('https://estudioginefra.com.ar/api/contacto/', {
    method: 'POST',
    headers: { accept: 'application/json', 'content-type': 'application/json', ...(origin && { origin }) },
    body: '{}',
  });

test('con el flag apagado el endpoint no existe', async () => {
  delete process.env.CONTACTO_EMAIL;
  assert.equal((await manejarContacto(pedido(), config)).status, 404);
});

test('rechaza envíos desde otro origen', async () => {
  process.env.CONTACTO_EMAIL = 'true';
  assert.equal((await manejarContacto(pedido('https://otro-sitio.com'), config)).status, 403);
});
