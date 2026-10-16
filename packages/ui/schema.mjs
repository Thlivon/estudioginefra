// Generadores de datos estructurados (docs/estructura.md §1.3).
import { estudio } from './estudio.mjs';

const slug = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\s+/g, '-');
const raiz = (site) => new URL('/', site).href;
const dias = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function legalService({ site, sitio, areas, sitioHermano }) {
  const url = raiz(site);
  const d = estudio.direccion;
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    '@id': `${url}#estudio`,
    name: estudio.nombre,
    url,
    telephone: estudio.telefonos.principal.internacional,
    email: estudio.correo,
    address: {
      '@type': 'PostalAddress',
      streetAddress: d.calle,
      addressLocality: d.localidad,
      addressRegion: d.provincia,
      addressCountry: d.pais,
      ...(d.codigoPostal && { postalCode: d.codigoPostal }),
    },
    ...(sitio.guardia24 && {
      openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: dias, opens: '00:00', closes: '23:59' },
    }),
    areaServed: sitio.areaServed,
    knowsAbout: areas.map((a) => a.titulo),
    employee: estudio.matriculas.map((m) => ({ '@id': `${url}equipo/#${slug(m.nombre)}` })),
    sameAs: [sitio.mostrarInstagram && estudio.instagram.url, sitioHermano].filter(Boolean),
  };
}

export const webSite = ({ site }) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${raiz(site)}#sitio`,
  url: raiz(site),
  name: estudio.nombre,
  inLanguage: 'es-AR',
  publisher: { '@id': `${raiz(site)}#estudio` },
});

export const faqPage = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.pregunta,
    acceptedAnswer: { '@type': 'Answer', text: i.respuesta },
  })),
});
