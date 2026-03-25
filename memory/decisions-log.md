# Beslissingen Log

Chronologisch overzicht van architectuurbeslissingen en waarom ze genomen zijn.

---

## Next.js 15 App Router (ipv Pages Router)
**Beslissing:** App Router
**Reden:** Betere performance door React Server Components, eenvoudigere data fetching, toekomstbestendig

## Tailwind CSS v4 (ipv v3)
**Beslissing:** v4 met CSS-gebaseerde config via globals.css
**Reden:** Geen tailwind.config.js nodig, snellere builds, CSS custom properties werken naadloos samen

## Zustand (ipv Redux/Context)
**Beslissing:** Zustand voor cart state
**Reden:** Minimale boilerplate, localStorage persistentie ingebouwd, TypeScript-friendly

## CartItem flat structuur
**Beslissing:** `{ id, name, price, quantity, image }` ipv `{ product: Product, quantity }`
**Reden:** Eenvoudiger te serialiseren naar localStorage, minder nesting in components

## Mollie (ipv Stripe)
**Beslissing:** Mollie voor betalingen
**Reden:** Nederlandse aanbieder, iDEAL ondersteuning, geen extra kosten voor NL betalingen

## Supabase (ipv Prisma/MySQL)
**Beslissing:** Supabase
**Reden:** Ingebouwde auth, row-level security, realtime, gratis tier ruim voldoende

## Unsplash placeholders
**Beslissing:** Unsplash URLs als tijdelijke placeholders
**Reden:** Gratis, hoge kwaliteit, passende sfeerbeelden, makkelijk te vervangen

## BTW tarieven
**Beslissing:** Truffels 9%, rest 21%
**Reden:** Truffels = voedingsmiddel (Wet OB 1968 Tabel I), growkits/microdosering/accessoires = algemeen tarief

## src/ structuur bewaren
**Beslissing:** Alle Next.js broncode in src/, root folders alleen voor documentatie/scripts
**Reden:** tsconfig.json path alias `@/*` → `./src/*`, verplaatsen breekt alle imports
