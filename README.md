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

## Formulario de contacto

Apagado por defecto: el sitio funciona solo con WhatsApp y teléfono, sin JS. Para encenderlo:

1. En Vercel (cada proyecto): `CONTACTO_EMAIL=true`, `RESEND_API_KEY`, `CONTACTO_DESTINO` y `CONTACTO_REMITENTE` (ver `.env.example`). El flag se lee en el build y en el endpoint: cambiarlo requiere redeploy.
2. Para el remitente, verificar el dominio en Resend; sin eso, Resend solo envía desde `onboarding@resend.dev` a la casilla de la cuenta.
3. Vercel BotID protege `POST /api/contacto/` (rewrites en `vercel.json`); conviene activar *BotID Deep Analysis* en Firewall si el plan lo permite.

En local, las variables van en la consola (Astro no las pasa del `.env` a la config):

```bash
CONTACTO_EMAIL=true npm run dev:penal            # bash
$env:CONTACTO_EMAIL='true'; npm run dev:penal    # PowerShell
```

Sin `RESEND_API_KEY`, en local el envío no sale: el email se muestra en la consola del servidor.

## Flujo de trabajo

- `main` es producción: cada merge despliega ambos sitios en Vercel.
- Cada cambio va en su rama (`feat/...`, `chore/...`) y entra por PR; cada rama genera dos previews.
- Variables de entorno: ver `.env.example`. Los secretos solo en Vercel.
- Historial de decisiones: `docs/changelog.md`.
