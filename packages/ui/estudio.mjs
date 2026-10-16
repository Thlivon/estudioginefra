// Única fuente de los datos del estudio. Ninguna plantilla escribe un teléfono, dirección o matrícula a mano.
const direccion = {
  calle: 'Mariano Santamaría 2212',
  localidad: 'San Justo',
  partido: 'La Matanza',
  provincia: 'Buenos Aires',
  visible: 'Mariano Santamaría 2212, San Justo, Pcia. de Buenos Aires',
  codigoPostal: null, // A CONFIRMAR
  pais: 'AR',
};

export const estudio = {
  nombre: 'Ginefra & Asociados',
  direccion,
  // Google Maps por URL de búsqueda (sin iframe).
  mapa: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${direccion.calle}, ${direccion.localidad}, ${direccion.provincia}, Argentina`)}`,
  telefonos: {
    principal: { internacional: '+5491151261499', visible: '11 5126-1499' },
    ricardo: { internacional: '+5491159271122', visible: '11 5927-1122' },
  },
  correo: 'estudiolosdefensores@hotmail.com',
  instagram: { usuario: 'ginefra.abogadopenalista', url: 'https://www.instagram.com/ginefra.abogadopenalista/' },
  matriculas: [
    { nombre: 'Facundo Ginefra', tomo: 13, folio: 277, colegio: null }, // colegio A CONFIRMAR
    { nombre: 'Ricardo Ginefra', tomo: 10, folio: 254, colegio: null },
  ],
  guardia: { horas: 24, texto: 'Guardia penal 24 h, todos los días' },
};
