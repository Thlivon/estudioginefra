// Content Security Policy de ambos sitios. Astro la emite como <meta> en cada página y suma los hashes
// de los scripts y estilos que genera (script-src/style-src = 'self' + hashes). Todo es del propio origen:
// fuentes autoalojadas, BotID y Vercel Web Analytics van por rutas del mismo dominio.
// frame-ancestors no funciona en <meta>: va como cabecera en el vercel.json de cada app.
export const csp = {
  directives: [
    "default-src 'self'",
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
  ],
};
