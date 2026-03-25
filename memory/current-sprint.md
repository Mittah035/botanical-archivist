# Huidige Sprint — Botanical Archivist

Bijgewerkt: 25-03-2026 — **SESSIE OPGESLAGEN, VEILIG OM TE WISSELEN**

---

## ✅ Alles gedaan en gepushed (lokaal + GitHub + Vercel)

### Pagina's
- [x] Homepage (7 secties: Hero, TrustBadges, Bestsellers, FeaturedCategories, Microdose, Testimonials, Newsletter)
- [x] Producten overzicht (/products) met filter, zoek, sort
- [x] Product detail (/products/[slug]) — unieke layout per categorie
- [x] Cart (/cart)
- [x] Checkout (/checkout) — 3 stappen
- [x] Order success (/order-success)
- [x] About (/about)
- [x] Blog (/blog + /blog/[slug])
- [x] Contact (/contact)
- [x] FAQ (/faq)
- [x] Privacy (/privacy)
- [x] Algemene Voorwaarden (/terms)
- [x] Disclaimer (/disclaimer)
- [x] Cookiebeleid (/cookies)
- [x] 404, error, loading pagina's

### Componenten
- [x] Navbar met cart drawer
- [x] Footer met alle links
- [x] 18+ leeftijdsverificatie (uitgeschakeld in development)
- [x] FloatingWidget: AI chat + WhatsApp + Toegankelijkheid (rechtsonder)
- [x] ProductCard met per-product afbeeldingen
- [x] CartDrawer

### Unieke product detail layouts
- [x] Truffels: full-width hero + sticky sidebar + emerald thema
- [x] Growkits: split layout + amber thema + 4-stappen balk
- [x] Microdosering: donker indigo banner + protocol info kaarten
- [x] Accessoires: clean minimaal

### Technisch
- [x] BTW correctie: truffels 9%, rest 21%
- [x] CartItem flat structuur
- [x] Unsplash placeholders op alle pagina's
- [x] next.config.ts: Unsplash remotePatterns
- [x] sitemap.ts + robots.ts
- [x] API routes: /api/contact, /api/payments/create, /api/payments/webhook
- [x] Supabase schema SQL klaar (nog niet geactiveerd)
- [x] tsconfig.json: scripts/ uitgesloten van TypeScript build

### Mappenstructuur
- [x] public/images/products/{truffels,growkits,microdosering,accessoires}/
- [x] public/videos/{hero,products,testimonials}/
- [x] docs/ (architectuur, API referentie, deployment, design system)
- [x] memory/ (huidige sprint, beslissingen log)
- [x] knowledge-base/ (legal, producten, marketing)
- [x] scripts/ (seed-products.ts, validate-env.ts)

### Afbeeldingen toegevoegd
- [x] public/images/products/growkits/golden-teacher.jpg
- [x] public/images/products/microdosering/starter-kit.jpg

### Build
- [x] Lokale build slaagt (npm run build)
- [x] Vercel deploy werkt (laatste fix: scripts/ uitgesloten van tsconfig)

---

## 🔨 Volgende stappen (prioriteit volgorde)

### Hoog — Eigen content toevoegen
- [ ] Eigen productfoto's toevoegen voor alle 16 producten
  - Gebruik: `public/images/products/{categorie}/{slug}.jpg`
  - Daarna: regel toevoegen in `src/components/ui/product-card.tsx` → `productImages`
  - Daarna: regel updaten in `src/app/products/[slug]/ProductDetailClient.tsx` → `productImages`
- [ ] Logo toevoegen: `public/images/brand/logo.svg`
- [ ] Logo verwerken in Navbar en Footer

### Hoog — Backend activeren
- [ ] Supabase project aanmaken op supabase.com
  - `.env.local` aanmaken met NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY
  - Schema deployen: `supabase/schema.sql` uitvoeren
  - Seed script draaien: `npx tsx scripts/seed-products.ts`
- [ ] Mollie account aanmaken → API key in .env.local + Vercel
- [ ] Resend account aanmaken → API key in .env.local + Vercel
- [ ] KvK/BTW nummer invullen in `src/config/index.ts` + footer

### Middel — Extra features
- [ ] GSAP ScrollTrigger animaties
- [ ] Embla Carousel voor mobiele productweergave
- [ ] Toast notificaties (Radix Toast al geïnstalleerd)
- [ ] React Hook Form + Zod validatie in checkout

### Laag
- [ ] Admin dashboard
- [ ] Klantreviews systeem
- [ ] Volledige audit (visueel, functioneel, SEO, toegankelijkheid, performance)

---

## 🚨 Sessiewisseling instructies

**Voor nieuwe sessie:**
1. Open Claude Code in map: `C:\Users\Mitta\Desktop\botanical-archivist`
2. Vertel Claude: "Lees memory/current-sprint.md voor de huidige status"
3. Vertel wat je wilt doen

**Belangrijke bestanden voor context:**
- `memory/current-sprint.md` — dit bestand
- `memory/decisions-log.md` — waarom welke keuzes
- `docs/architecture.md` — mappenstructuur + tech stack
- `CLAUDE.md` — project instructies voor AI

**GitHub:** https://github.com/Mittah035/botanical-archivist
**Live site:** https://botanical-archivist.vercel.app
**Lokaal:** http://localhost:3000 (start met `npm run dev`)

---

## ⚠️ Bekende zaken

- Afbeeldingen toevoegen: Windows maakt soms dubbele extensies (`.jpg.png`) → Claude hernoemt dit automatisch
- 18+ verificatie is uitgeschakeld op localhost (development mode), wel actief op live site
- Dev server starten: `npm run dev` vanuit `C:\Users\Mitta\Desktop\botanical-archivist`
