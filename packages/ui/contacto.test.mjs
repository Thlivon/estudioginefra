import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validar, esTrampa, asunto, unaLinea, textoEmail, CAMPO_TRAMPA } from './contacto.mjs';

const reglas = {
  opciones: ['Allanamientos', 'Otra'],
  mensajes: {
    nombre: 'nombre',
    telefono: 'telefono',
    telefonoFormato: 'formato',
    email: 'email',
    tipo: 'tipo',
    mensaje: 'mensaje',
    privacidad: 'privacidad',
  },
};
const valido = {
  nombre: 'Juan Pérez',
  telefono: '11 2345-6789',
  email: 'juan@correo.com',
  tipo: 'Allanamientos',
  mensaje: 'Allanaron la casa de mi hermano anoche.',
  privacidad: 'on',
};
const errores = (cambios, r = reglas) => validar({ ...valido, ...cambios }, r).errores;

test('acepta un envío válido y normaliza el teléfono', () => {
  const r = validar(valido, reglas);
  assert.equal(r.ok, true);
  assert.equal(r.datos.telefono, '1123456789');
  assert.equal(validar({ ...valido, email: '', tipo: '' }, reglas).ok, true); // opcionales
});

test('rechaza cada campo inválido con su mensaje', () => {
  assert.deepEqual(errores({ nombre: 'J' }), { nombre: 'nombre' });
  assert.deepEqual(errores({ nombre: 'x'.repeat(101) }), { nombre: 'nombre' });
  assert.deepEqual(errores({ telefono: '' }), { telefono: 'telefono' });
  assert.deepEqual(errores({ telefono: '1234 567' }), { telefono: 'formato' }); // 7 dígitos
  assert.deepEqual(errores({ telefono: '1'.repeat(16) }), { telefono: 'formato' });
  assert.deepEqual(errores({ telefono: '11 2345 abc6789' }), { telefono: 'formato' });
  assert.deepEqual(errores({ email: 'juan@correo' }), { email: 'email' });
  assert.deepEqual(errores({ tipo: 'Inventado' }), { tipo: 'tipo' });
  assert.deepEqual(errores({ tipo: '' }, { ...reglas, tipoObligatorio: true }), { tipo: 'tipo' });
  assert.deepEqual(errores({ mensaje: 'corto' }), { mensaje: 'mensaje' });
  assert.deepEqual(errores({ mensaje: 'x'.repeat(2001) }), { mensaje: 'mensaje' });
  assert.deepEqual(errores({ privacidad: '' }), { privacidad: 'privacidad' });
});

test('detecta el honeypot', () => {
  assert.equal(esTrampa(valido), false);
  assert.equal(esTrampa({ ...valido, [CAMPO_TRAMPA]: 'ACME SA' }), true);
});

test('el asunto y los datos de una línea no admiten saltos ni caracteres de control', () => {
  const s = asunto('Defensa penal', 'Otra\r\nBcc: spam@x.com');
  assert.ok(!/[\r\n]/.test(s));
  assert.equal(s, 'Consulta web (Defensa penal) · Otra Bcc: spam@x.com');
  assert.equal(unaLinea('a\u0000b\tc'), 'a b c');
  assert.ok(textoEmail({ ...valido, nombre: 'Juan\nFalso: dato' }, 'Penal').includes('Nombre: Juan Falso: dato'));
});
