import { test } from 'node:test';
import assert from 'node:assert/strict';
import { enLinea, bloque, conFormulario, secciones, fecha } from './texto.mjs';

test('markdown en línea, escapado', () => {
  assert.equal(enLinea('Leé la [política](/privacidad/) <b> **ya**'), 'Leé la <a href="/privacidad/">política</a> &lt;b&gt; <strong>ya</strong>');
});

test('bloques, formulario y secciones', () => {
  const html = '<p>a</p><!-- bloque: x --><p>b</p><!-- /bloque: x --><h2>Uno</h2><p>1</p><!-- solo-con-formulario --><h2>F</h2><!-- /solo-con-formulario --><h2>Dos</h2>';
  assert.equal(bloque(html, 'x'), '<p>b</p>');
  assert.ok(!conFormulario(html, false).includes('<h2>F</h2>'));
  assert.ok(conFormulario(html, true).includes('<h2>F</h2>'));
  assert.equal(secciones('<p>i</p><h2>Uno</h2><p>1</p><h2 id="d">Dos</h2>').length, 3);
  assert.equal(fecha(new Date('2026-10-15')), '15 de octubre de 2026');
});
