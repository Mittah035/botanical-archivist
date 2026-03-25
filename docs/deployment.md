# Deployment

## Vercel (automatisch)

Elke push naar de `master` branch triggert automatisch een Vercel deploy.

- **Live URL**: https://botanical-archivist.vercel.app
- **GitHub**: https://github.com/Mittah035/botanical-archivist
- **Vercel project**: mittah035s-projects/botanical-archivist

## Workflow

```bash
# Lokaal testen
npm run dev

# TypeScript check voor push
node_modules/.bin/tsc --noEmit

# Pushen → Vercel deploy start automatisch
git add -A
git commit -m "feat: beschrijving"
git push origin master
```

## Environment Variables instellen in Vercel

1. Ga naar https://vercel.com/mittah035s-projects/botanical-archivist/settings/environment-variables
2. Voeg toe:

| Variabele | Omgeving |
|---|---|
| `RESEND_API_KEY` | Production |
| `MOLLIE_API_KEY` | Production |
| `NEXT_PUBLIC_SUPABASE_URL` | All |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | All |
| `SUPABASE_SERVICE_ROLE_KEY` | Production |

## Lokale .env.local

Maak `/.env.local` aan (staat in `.gitignore`, wordt NOOIT gecommit):

```bash
RESEND_API_KEY=re_xxx
MOLLIE_API_KEY=test_xxx
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx
SUPABASE_SERVICE_ROLE_KEY=eyJxxx
```
