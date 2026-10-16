// POST /api/contacto/: única ruta on-demand del sitio (función de Vercel). Lógica en @ginefra/ui.
import type { APIRoute } from 'astro';
import { manejarContacto } from '@ginefra/ui/contacto-servidor.mjs';
import { opcionesTipo } from '@ginefra/ui/opciones.ts';
import { sitio } from '../../sitio.mjs';

export const prerender = false;

export const POST: APIRoute = ({ request }) =>
  manejarContacto(request, { sitio, opciones: () => opcionesTipo(sitio), dev: import.meta.env.DEV });
