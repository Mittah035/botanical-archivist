# Botanical Archivist — Stappenplan Morgen
> Gegenereerd op basis van Team Create audit + legal research
> Prioriteit: Mobiele weergave eerst, dan premium visual layer, dan backend

---

## STATUS NA VANDAAG ✅

### Gebouwd & Gepusht naar GitHub:
- ✅ Homepage (Hero, TrustBadges, Bestsellers, Categories, Microdose, Testimonials, Newsletter)
- ✅ Products listing (/products) met filters, zoeken, sorteer
- ✅ Product detail (/products/[slug]) met FAQ, gerelateerde producten
- ✅ Cart page + Cart Drawer (slide-out)
- ✅ Checkout (3-stap: gegevens → bezorging → betaling)
- ✅ Order success pagina
- ✅ About, Blog (6 posts), Contact, FAQ
- ✅ Privacy, Terms, Disclaimer, Cookiebeleid
- ✅ Age Verification overlay (18+)
- ✅ SEO: sitemap.ts, robots.ts, metadata
- ✅ Error handling: 404, error.tsx, loading.tsx
- ✅ API routes: /api/contact, /api/payments/create, /api/payments/webhook
- ✅ Supabase schema SQL (klaar om te deployen)
- ✅ 16 producten met volledige data
- ✅ 6 blog artikelen

---

## MORGEN STAP 1 — VISUELE PLACEHOLDERS (Unsplash images)

### Doel: Alle emoji placeholders vervangen door echte Unsplash foto's

**Unsplash URLs to use (free, no API key needed for display):**

| Component | URL | Trefwoord |
|-----------|-----|-----------|
| HeroSection achtergrond | `https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=80` | forest mushroom dark |
| Product kaarten (truffels) | `https://images.unsplash.com/photo-1604143042226-d02c2c29d91e?w=400&q=80` | mushroom macro |
| Product kaarten (growkits) | `https://images.unsplash.com/photo-1630563451961-ac2ff27616ab?w=400&q=80` | mycelium grow |
| MicrodoseSection | `https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=80` | capsules supplement |
| About pagina hero | `https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&q=80` | forest botanical |
| Blog posts default | `https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80` | book knowledge |

**Implementatie:**
- Vervang emoji containers door `next/image` componenten
- Alle images: `width`, `height`, `alt`, `priority` (voor above-fold)
- Blur placeholder: `placeholder="blur"` met base64 data URL
- Mobile: `sizes="(max-width: 768px) 100vw, 50vw"`

---

## MORGEN STAP 2 — MOBILE-FIRST OPTIMALISATIES

### PRIORITEIT: Dit is de primaire weergave

**A. HeroSection — Mobile fixes:**
- [ ] Tekst grootte verkleinen op mobile (text-3xl i.p.v. text-5xl)
- [ ] CTA knoppen full-width op mobile
- [ ] Achtergrondafbeelding met `object-cover` en `aspect-[9/16]` op mobile
- [ ] Sticky "Shop nu" knop onderaan viewport op mobile

**B. ProductCard — Mobile fixes:**
- [ ] 2-kolom grid op mobile (al goed)
- [ ] Grotere tap-targets voor knoppen (min 44px)
- [ ] Swipe-to-add-to-cart gesture (optioneel)
- [ ] Bottom sheet modal voor product quick view

**C. Navbar — Mobile:**
- [ ] Hamburger menu animatie verfijnen
- [ ] Cart counter animatie
- [ ] Zoekbalk als full-screen overlay op mobile

**D. Checkout — Mobile:**
- [ ] Elk form veld: `autocomplete` attributen toevoegen
- [ ] Numeric keyboard voor postcode (`inputmode="numeric"`)
- [ ] Order summary collapsible op mobile
- [ ] Sticky "Betalen" knop onderaan screen

**E. Homepage carousel voor mobile:**
- [ ] Bestsellers sectie: horizontale scroll op mobile
- [ ] Testimonials: swipeable carousel
- [ ] Product carousel met Embla Carousel

---

## MORGEN STAP 3 — PREMIUM ANIMATIES & EFFECTEN

### Beschikbare technieken (we gebruiken al Framer Motion + GSAP):

**A. GSAP ScrollTrigger (nog niet geïmplementeerd):**
```typescript
// In HeroSection of een dedicated ScrollSection
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

// Parallax effect
gsap.to(".hero-image", {
  yPercent: -20,
  ease: "none",
  scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true }
})
```

**B. Framer Motion — Nog te implementeren:**
- `useInView` + stagger voor product grids
- `AnimatePresence` voor route transitions
- `useScroll` + `useTransform` voor hero parallax
- `motion.path` voor SVG tekening animaties
- Shared layout animations tussen pagina's (`layoutId`)

**C. CSS-only effecten (geen extra bundle size):**
- Glassmorphism cards: `backdrop-filter: blur(20px)` ✅ (al gebruikt in Navbar)
- Gradient text: `background-clip: text`
- Smooth scroll: `scroll-behavior: smooth`
- CSS container queries voor responsive
- `@keyframes` shimmer voor skeleton loaders

**D. Premium libraries te installeren:**
```bash
npm install embla-carousel-react  # Beste carousel voor performance
npm install @radix-ui/react-toast  # Toast notifications (al als dep aanwezig)
npm install react-hook-form @hookform/resolvers zod  # Form validatie
```

**E. Visuele stijl bibliotheek (sla op):**
```
DESIGN PRINCIPLES (voor consistent gebruik):
- Primaire kleur: #012d1d (donker groen)
- Animatie timing: 0.3-0.5s met easeOut
- Border radius: 12px (cards), 20px (grote containers)
- Shadow: shadow-card (licht) / shadow-elevated (hover)
- Spacing: 24px padding op mobile, 80px op desktop
- Typography: Manrope (display/headings) + Inter (body)
- Max-width: 1280px (max-w-7xl)
- Glassmorphism: bg-white/85 + backdrop-blur-[20px]
```

---

## MORGEN STAP 4 — BACKEND ACTIVATIE

### Benodigde API keys (vraag om te registreren):

**A. Supabase (database + auth):**
1. Ga naar supabase.com → New project
2. Kopieer `SUPABASE_URL` + `SUPABASE_ANON_KEY`
3. Voer `supabase/schema.sql` uit in SQL editor
4. Voeg toe aan `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
   SUPABASE_SERVICE_ROLE_KEY=eyJ...
   ```

**B. Mollie (betalingen):**
1. Ga naar mollie.com → registreer bedrijf
2. Vul KvK-nummer in (verplicht voor live modus)
3. Test API key: `test_xxx`
4. Live API key: `live_xxx` (na goedkeuring)
5. Voeg toe aan `.env.local`:
   ```
   MOLLIE_API_KEY=test_xxx
   NEXT_PUBLIC_MOLLIE_PROFILE_ID=pfl_xxx
   ```

**C. Resend (email):**
1. Ga naar resend.com → registreer
2. Voeg domein toe: `botanical-archivist.nl` (DNS records)
3. API key aanmaken
4. Voeg toe: `RESEND_API_KEY=re_xxx`

**D. Dependencies installeren:**
```bash
npm install @supabase/supabase-js @supabase/ssr
npm install @mollie/api-client
npm install resend @react-email/components @react-email/render
npm install react-hook-form @hookform/resolvers zod
npm install embla-carousel-react
```

---

## MORGEN STAP 5 — SEO OPTIMALISATIES

### Top keywords implementeren in metadata:

**Target keywords (onderzoek):**
- Primary: "magic truffels kopen" (5-8k/mo), "microdoseren" (3-5k/mo)
- Long-tail: "hollandia truffels kopen", "fadiman protocol microdosering"

**Implementatie:**
- [ ] Elke productpagina: title = `{product.name} kopen | Botanical Archivist`
- [ ] description met keyword-rijke tekst
- [ ] Open Graph images (1200x630px) per product
- [ ] JSON-LD Product schema op product detail pages
- [ ] JSON-LD Organization schema op homepage
- [ ] FAQ schema op /faq pagina

---

## MORGEN STAP 6 — AUDIT CHECKLIST (A tot Z)

### Visueel:
- [ ] Alle pagina's op mobile (375px)
- [ ] Alle pagina's op tablet (768px)
- [ ] Alle pagina's op desktop (1440px)
- [ ] Dark mode checken (als toegevoegd)
- [ ] Geen layout shifts (CLS)
- [ ] Alle hover states werken
- [ ] Loading states aanwezig

### Functioneel:
- [ ] Add to cart → cart teller updatet
- [ ] Cart drawer → items correct
- [ ] Checkout → alle velden valideren
- [ ] Age verification → verschijnt bij eerste bezoek
- [ ] Blog posts → alle 6 laden
- [ ] Product filters → werken correct
- [ ] 404 pagina werkt

### Legal & Compliance:
- [ ] 18+ overlay aanwezig
- [ ] Geen medische claims in productteksten
- [ ] Privacy, Terms, Disclaimer, Cookies in footer
- [ ] KvK/BTW nummer in footer (toevoegen als beschikbaar)
- [ ] Enkel NL verzending in checkout (land selector)
- [ ] BTW correctie: truffels 9%, rest 21%

### Performance:
- [ ] Lighthouse score > 90 op mobile
- [ ] Images geoptimaliseerd (next/image)
- [ ] Core Web Vitals groen

---

## TECHNOLOGIE STACK VOOR "MEEST PROFESSIONEEL & SOEPEL"

**Momenteel actief:**
- Framer Motion — animaties ✅
- GSAP — scroll effects (geïnstalleerd, niet gebruikt)
- shadcn/ui — componenten ✅
- Tailwind v4 — styling ✅
- Zustand — cart state ✅

**Toe te voegen morgen:**
- Embla Carousel — beste touch-friendly carousel
- Radix Toast — notificaties
- React Hook Form + Zod — form validatie
- next/image — geoptimaliseerde afbeeldingen

**Niet nodig (houdt het schoon):**
- ❌ Bootstrap / MUI (conflict met Tailwind)
- ❌ jQuery (verouderd)
- ❌ Three.js/WebGL (te zwaar voor dit project)
- ❌ Extra animatielibraries (GSAP + Framer Motion is genoeg)

---

## NOTITIES VOOR VOLGENDE SESSIE

- Dev server starten: `cd /c/Users/Mitta/Desktop/botanical-archivist && npm run dev`
- GitHub: `git add -A && git commit -m "..." && git push origin master`
- Vercel: auto-deploy na elke push naar master
- Preview URL: https://botanical-archivist.vercel.app
- Local: http://localhost:3000

**Team Create voor morgen:**
Na alle bovenstaande stappen → Team Create sessie (Opus 4.6) voor:
1. Volledige code audit
2. Conversie-optimalisatie aanbevelingen
3. SEO content strategie uitwerken
4. UX/accessibility verbeteringen

**Juridische aandachtspunten (uit onderzoek):**
- Truffels: 9% BTW (voedingsmiddel)
- Growkits/supplements: 21% BTW
- Geen medische claims toegestaan
- Verzending alleen Nederland (en eventueel België voor growkits)
- Leeftijdsverificatie: niet wettelijk verplicht maar sterk aanbevolen (branche standaard)
- NVWA houdt toezicht op etikettering
- EU export risicovol — aanbevolen alleen NL
