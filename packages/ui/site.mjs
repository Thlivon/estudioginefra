// Config de cada build, leída de variables de entorno: pasar de pruebas a producción
// es cambiar dominios en Vercel, nunca este archivo.
import relacionados from '@vercel/related-projects';

const env = process.env;

// Vercel completa VERCEL_PROJECT_PRODUCTION_URL con el dominio de producción más corto del proyecto.
export const site =
  env.SITE_URL ||
  (env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:4321');

// Solo producción real lleva INDEXAR=true; en pruebas todo sale con noindex.
export const indexar = env.INDEXAR === 'true';

// URL del sitio hermano, desde Related Projects de Vercel (`relatedProjects` en el vercel.json de cada app).
// Cada app declara un solo proyecto relacionado: producción → su dominio, preview → la preview de la misma rama.
const hermano = relacionados.relatedProjects({ noThrow: true })[0];
const hostHermano = hermano
  ? relacionados.withRelatedProject({ projectName: hermano.project.name, defaultHost: '' })
  : '';
export const sitioHermano = hostHermano ? `${hostHermano}/` : 'http://localhost:4321/';
