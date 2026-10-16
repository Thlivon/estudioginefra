import { test } from 'node:test';
import assert from 'node:assert/strict';
import { enlaceWhatsApp, enlaceTel } from './enlaces.mjs';
import { estudio } from './estudio.mjs';

test('tel: en formato internacional, sin espacios', () => {
  assert.equal(enlaceTel(estudio.telefonos.principal.internacional), 'tel:+5491151261499');
  assert.equal(enlaceTel('+54 9 11 5927-1122'), 'tel:+5491159271122');
});

test('wa.me sin "+" y con el texto codificado', () => {
  assert.equal(enlaceWhatsApp('+5491151261499'), 'https://wa.me/5491151261499');
  assert.equal(
    enlaceWhatsApp('+5491151261499', 'Hola, ¿están? Nombre: ___ · Ginefra & Asociados #1'),
    'https://wa.me/5491151261499?text=Hola%2C%20%C2%BFest%C3%A1n%3F%20Nombre%3A%20___%20%C2%B7%20Ginefra%20%26%20Asociados%20%231',
  );
});
