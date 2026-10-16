# estudioginefra

Sitios del estudio Ginefra & Asociados. Un repo, dos sitios Astro, dos proyectos Vercel.

| Sitio | Carpeta | Pruebas | Producción |
|---|---|---|---|
| Defensa penal | `apps/penal` | estudioginefra.tl256.com | estudioginefra.com.ar |
| Amparos de salud | `apps/amparos` | estudioginefra-amparos.tl256.com | amparos.estudioginefra.com.ar |

`packages/ui` tiene lo compartido (layout, componentes, config de build).

## Desarrollo local

Requiere Node 22.12 o superior.

```bash
npm install
npm run dev:penal      # http://localhost:4321
npm run dev:amparos
npm run build          # build de ambos sitios
```

## Flujo de trabajo

- `main` es producción: cada merge despliega ambos sitios en Vercel.
- Cada cambio va en su rama (`feat/...`, `chore/...`) y entra por PR; cada rama genera dos previews.
- Variables de entorno: ver `.env.example`. Los secretos solo en Vercel.
- Historial de decisiones: `docs/changelog.md`.
