import type { APIRoute } from 'astro';
import { robotsTxt } from '@ginefra/ui/site.mjs';

export const GET: APIRoute = ({ site }) => new Response(robotsTxt(site!), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
