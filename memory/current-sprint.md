# Huidige Sprint — Botanical Archivist

Bijgewerkt: 25-03-2026

## ✅ Gedaan (deze sessie)

- [x] Alle pagina's gebouwd (products, cart, checkout, about, blog, contact, FAQ, legal)
- [x] Unieke product detail layouts per categorie (truffels/growkits/microdosering/accessoires)
- [x] Unsplash placeholders op alle pagina's
- [x] Floating widget: AI chat + WhatsApp + Toegankelijkheid
- [x] CartItem type refactor (flat structuur)
- [x] BTW correctie: truffels 9%, rest 21%
- [x] Professionele mappenstructuur (docs/, memory/, knowledge-base/, scripts/)
- [x] public/images/ en public/videos/ submappen aangemaakt
- [x] GitHub auto-deploy naar Vercel actief
- [x] TypeScript errors opgelost

## 🔨 Volgende Stappen (prioriteit volgorde)

### Hoog
- [ ] Eigen productfoto's toevoegen in public/images/products/
- [ ] Logo toevoegen in public/images/brand/logo.svg
- [ ] Supabase activeren (API keys invullen in .env.local + Vercel)
- [ ] Mollie activeren (Mollie account aanmaken, API key instellen)
- [ ] Resend activeren (email API key instellen)

### Middel
- [ ] GSAP ScrollTrigger animaties toevoegen
- [ ] Embla Carousel voor mobiele productweergave
- [ ] Toast notificaties (Radix Toast al geïnstalleerd)
- [ ] React Hook Form + Zod validatie in checkout
- [ ] KvK/BTW nummer toevoegen in footer

### Laag
- [ ] Admin dashboard
- [ ] Klantreviews systeem
- [ ] Loyalty programma

## 🐛 Bekende Issues

- Één Unsplash URL in BestsellersGrid gaf 404 → opgelost (vervangen)
- Dev server sluit soms af bij achtergrondtasks → opnieuw starten met `npm run dev`

## 📋 Audit Checklist (nog te doen)

- [ ] Visuele audit: alle pagina's op mobiel bekijken
- [ ] Functionele audit: cart → checkout → betaling flow
- [ ] SEO audit: meta titles, descriptions, OG images
- [ ] Toegankelijkheid audit: keyboard navigatie, contrast
- [ ] Performance audit: Lighthouse score
