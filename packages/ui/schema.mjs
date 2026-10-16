// Generadores de datos estructurados (docs/estructura.md §1.3).
import { estudio } from './estudio.mjs';
import { plano } from './texto.mjs';

const contexto = 'https://schema.org';
export const slug = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\s+/g, '-');
const raiz = (site) => new URL('/', site).href;
const absoluta = (site, ruta) => new URL(ruta, site).href;
const dias = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const estudioRef = (site) => ({ '@id': `${raiz(site)}#estudio` });
export const personaId = (site, idPersona) => `${raiz(site)}equipo/#${idPersona}`;

export function legalService({ site, sitio, areas, sitioHermano }) {
  const url = raiz(site);
  const d = estudio.direccion;
  return {
    '@context': contexto,
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
    geo: { '@type': 'GeoCoordinates', latitude: d.geo.latitud, longitude: d.geo.longitud },
    hasMap: estudio.mapa,
    image: absoluta(site, '/og.jpg'),
    logo: absoluta(site, '/favicon.svg'),
    ...(sitio.guardia24 && {
      openingHoursSpecification: { '@type': 'OpeningHoursSpecification', dayOfWeek: dias, opens: '00:00', closes: '23:59' },
    }),
    areaServed: sitio.areaServed,
    knowsAbout: areas.map((a) => a.titulo),
    employee: estudio.matriculas.map((m) => ({ '@id': personaId(site, slug(m.nombre)) })),
    sameAs: [sitio.mostrarInstagram && estudio.instagram.url, sitioHermano].filter(Boolean),
  };
}

export const webSite = ({ site }) => ({
  '@context': contexto,
  '@type': 'WebSite',
  '@id': `${raiz(site)}#sitio`,
  url: raiz(site),
  name: estudio.nombre,
  inLanguage: 'es-AR',
  publisher: estudioRef(site),
});

export const faqPage = (items) => ({
  '@context': contexto,
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({
    '@type': 'Question',
    name: i.pregunta,
    acceptedAnswer: { '@type': 'Answer', text: plano(i.respuesta) },
  })),
});

// items: [{ nombre, href }] sin "Inicio" (se agrega acá, igual que en las migas visibles).
export const breadcrumbList = (site, items) => ({
  '@context': contexto,
  '@type': 'BreadcrumbList',
  itemListElement: [{ nombre: 'Inicio', href: '/' }, ...items].map((i, n) => ({
    '@type': 'ListItem',
    position: n + 1,
    name: i.nombre,
    item: absoluta(site, i.href),
  })),
});

export const service = ({ site, area, url, areaServed }) => ({
  '@context': contexto,
  '@type': 'Service',
  name: area.titulo,
  description: area.resumen,
  serviceType: area.titulo,
  url: absoluta(site, url),
  provider: estudioRef(site),
  areaServed,
});

export const article = ({ site, guia, url, autorId }) => ({
  '@context': contexto,
  '@type': 'Article',
  headline: guia.h1,
  description: guia.seo.description,
  url: absoluta(site, url),
  mainEntityOfPage: absoluta(site, url),
  inLanguage: 'es-AR',
  author: { '@id': personaId(site, autorId) },
  datePublished: guia.publicado.toISOString().slice(0, 10),
  dateModified: guia.actualizado.toISOString().slice(0, 10),
  publisher: estudioRef(site),
});

export const person = ({ site, id, persona, imagen }) => ({
  '@context': contexto,
  '@type': 'Person',
  '@id': personaId(site, id),
  name: persona.nombre,
  jobTitle: persona.rol,
  worksFor: estudioRef(site),
  image: absoluta(site, imagen),
  ...(persona.telefono === 'ricardo' && { telephone: estudio.telefonos.ricardo.internacional }),
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    credentialCategory: 'Matrícula profesional',
    identifier: `T° ${persona.matricula.tomo} F° ${persona.matricula.folio}`,
    ...(estudio.matriculas.find((m) => m.nombre === persona.nombre)?.colegio && {
      recognizedBy: { '@type': 'Organization', name: estudio.matriculas.find((m) => m.nombre === persona.nombre).colegio },
    }),
  },
});

// AboutPage, ContactPage o WebPage.
export const pagina = ({ site, tipo, url, nombre, descripcion }) => ({
  '@context': contexto,
  '@type': tipo,
  url: absoluta(site, url),
  name: nombre,
  description: descripcion,
  inLanguage: 'es-AR',
  isPartOf: { '@id': `${raiz(site)}#sitio` },
  about: estudioRef(site),
});
