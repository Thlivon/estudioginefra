// Opciones del select "tipo de consulta": áreas del sitio (por orden) + "Otra". Las usan el formulario y el endpoint.
import { getCollection } from 'astro:content';

export const opcionesTipo = async (sitio: any): Promise<string[]> => [
  ...(await getCollection('areas')).sort((a, b) => a.data.orden - b.data.orden).map((a) => a.data.tituloCorto),
  sitio.plantillas.formulario.campos.tipo.otra,
];
