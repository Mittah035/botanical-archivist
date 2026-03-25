# Botanical Archivist — Documentatie

Welkom bij de projectdocumentatie. Gebruik de links hieronder om snel te navigeren.

## Overzicht

| Document | Inhoud |
|---|---|
| [Architectuur](./architecture.md) | Tech stack, mappenstructuur, data flow |
| [API Referentie](./api-reference.md) | Alle API routes gedocumenteerd |
| [Database](./database.md) | Supabase schema, tabellen, RLS policies |
| [Deployment](./deployment.md) | Vercel setup, env vars, CI/CD |
| [Ontwikkeling](./development.md) | Lokale setup, commando's, workflow |
| [Design Systeem](./design-system.md) | Kleuren, typografie, componenten |
| [Features](./features/) | Per-feature documentatie |

## Quick Start

```bash
# Lokaal starten
npm run dev          # http://localhost:3000

# Type check
node_modules/.bin/tsc --noEmit

# Builden
npm run build
```

## Tech Stack

| Laag | Technologie |
|---|---|
| Framework | Next.js 15 (App Router) |
| Taal | TypeScript |
| Styling | Tailwind CSS v4 |
| Animaties | Framer Motion |
| State | Zustand + localStorage |
| UI Componenten | shadcn/ui + Radix UI |
| Database | Supabase (PostgreSQL) |
| Betaling | Mollie |
| Email | Resend |
| Hosting | Vercel |

## Links

- **GitHub**: https://github.com/Mittah035/botanical-archivist
- **Live site**: https://botanical-archivist.vercel.app
- **Vercel dashboard**: https://vercel.com/mittah035s-projects/botanical-archivist
