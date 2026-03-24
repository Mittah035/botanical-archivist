# Botanical Archivist — CLAUDE.md
> Kennisbasis voor AI-assistenten. Lees dit volledig voor je begint met werken.

---

## 🏪 Project Overzicht

**Naam:** Botanical Archivist (ook: MYCO Archive)
**Type:** Premium e-commerce webshop
**Producten:** Truffels, paddenstoelen growkits, microdosering producten, bijbehorende accessoires
**Doelgroep:** Premium Nederlandse/Europese markt, bewuste consumenten
**Toon:** Luxe, editoraal, botanisch, wetenschappelijk maar toegankelijk
**Talen:** Nederlands (primair) + Engels

---

## 🛠 Tech Stack

| Laag | Technologie | Versie |
|------|-------------|--------|
| Framework | Next.js | 15 (App Router) |
| UI Library | React | 19 |
| Taal | TypeScript | 5+ |
| Styling | Tailwind CSS | v4 |
| Animaties | Framer Motion + GSAP | Latest |
| Components | shadcn/ui + Radix UI | Latest |
| State | Zustand | Latest |
| Data Fetching | TanStack Query | v5 |
| Icons | Lucide React | Latest |
| Database | Supabase (PostgreSQL) | Latest |
| Auth | Supabase Auth | Latest |
| Payments | Mollie (iDEAL + Cards) | Latest |
| Email | Resend | Latest |
| Deployment | Vercel | Latest |
| Testing | Playwright | Latest |
| Package Manager | npm | 11+ |

---

## 📁 Mappenstructuur

```
botanical-archivist/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── products/           # Product listing
│   │   ├── cart/               # Winkelwagen
│   │   ├── checkout/           # Checkout flow
│   │   ├── order-success/      # Bestelling bevestiging
│   │   ├── about/              # Over ons
│   │   ├── blog/               # Kennisbank/blog
│   │   └── contact/            # Contact
│   ├── components/
│   │   ├── ui/                 # shadcn/ui basis componenten
│   │   ├── layout/             # Nav, Footer, PageWrapper
│   │   ├── sections/           # Homepage secties (Hero, Features, etc.)
│   │   ├── shop/               # ProductCard, Cart, etc.
│   │   └── animations/         # Herbruikbare animatie wrappers
│   ├── lib/
│   │   ├── utils/              # Hulpfuncties (cn, formatPrice, etc.)
│   │   ├── hooks/              # Custom React hooks
│   │   ├── store/              # Zustand stores (cart, ui)
│   │   └── api/                # API client functies
│   ├── types/                  # TypeScript type definities
│   ├── styles/                 # Globale stijlen
│   └── config/                 # Site config, navigatie, producten
├── .claude/
│   └── skills/                 # Skill MD files per domein
├── public/                     # Statische bestanden
├── CLAUDE.md                   # Dit bestand
└── AGENTS.md                   # Next.js agent instructies
```

---

## 🎨 Design Systeem

### Kleurenpalet (uit bestaande designs)
```css
--primary: #012d1d           /* Donker groen - hoofdkleur */
--primary-container: #1b4332  /* Medium groen */
--secondary: #54442d          /* Warm bruin */
--tertiary: #3b1f00           /* Diep amber */
--background: #f9f9f8         /* Bijna wit */
--surface: #f9f9f8
--on-primary: #ffffff
--outline: #717973
```

### Typografie
- **Headings:** Manrope (400, 700, 800)
- **Body:** Inter (400, 500, 600)
- **Accent:** Manrope 800 voor grote display tekst

### Animatie Principes
- **Entree:** fade-in + slight translateY (0 naar 1 opacity, 20px naar 0)
- **Hover:** subtle scale (1.02) + shadow
- **Page transitions:** fade via Framer Motion AnimatePresence
- **Scroll effects:** GSAP ScrollTrigger voor parallax en reveal
- **Timing:** ease-out, 300-600ms voor UI, 800-1200ms voor hero

---

## 🛒 E-commerce Architectuur

### Productcategorieën
1. **Truffels** - Psilocybe tampanensis, Mexicana, etc.
2. **Growkits** - Complete paddenstoelen kweeksets
3. **Microdosering** - Capsules, stripjes
4. **Accessoires** - Supplementen, tools, boeken

### Conversie Flow
```
Homepage → Categorie/Collectie → Product Detail → Cart → Checkout → Order Success
```

### Checkout Stappen
1. Cart overzicht
2. Verzendgegevens (naam, adres)
3. Leeftijdsverificatie (18+)
4. Betaalmethode (iDEAL, creditcard, Klarna)
5. Bevestiging

### Compliance
- **Leeftijdsverificatie:** 18+ verplicht, cookie-based na verificatie
- **Wetgeving:** Truffels zijn legaal in NL, growkits ook
- **Privacy:** GDPR-compliant, cookiebanner, privacy policy
- **Disclaimer:** Medische claims vermijden

---

## 🔌 MCPs & Integraties

### Geconfigureerde MCPs (in Claude Desktop config)
- **Playwright** - Browser automation, E2E tests
- **GitHub** - Repo management (token vereist: maak aan op github.com/settings/tokens)

### Omgevingsvariabelen (vereist in .env.local)
```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
MOLLIE_API_KEY=
RESEND_API_KEY=
NEXT_PUBLIC_SITE_URL=https://botanical-archivist.vercel.app
```

---

## 📋 Workflows

### Dagelijkse Ontwikkel Workflow
1. `npm run dev` — lokale server starten op localhost:3000
2. Aanpassingen maken met Claude Code
3. Claude pusht automatisch naar GitHub na aanpassingen
4. Vercel detecteert push en deployt automatisch
5. Live bekijken op telefoon via Vercel URL

### Commit Conventions
```
feat: nieuwe functionaliteit
fix: bugfix
style: styling aanpassingen
refactor: code herstructurering
docs: documentatie
test: tests toevoegen/aanpassen
```

### Component Aanmaken
1. Maak file aan in juiste map onder `src/components/`
2. Gebruik TypeScript interfaces voor props
3. Voeg Framer Motion animaties toe via `animations/` wrappers
4. Export via barrel file (index.ts)

---

## 🤖 Team Create Protocol

**Team Create** = intern overleg waarbij rollen samenwerken voor optimaal resultaat.
Geen sub-agents, maar één AI die meerdere expertperspectieven combineert.

### Rollen
- **Architect** — Tech beslissingen, architectuur
- **UI/UX Expert** — Design, animaties, user experience
- **E-commerce Specialist** — Conversie, checkout, payments
- **DevOps** — Vercel, CI/CD, performance
- **QA Lead** — Testing, audit, security

### Model Allocatie (token efficiëntie)
- **Opus 4.6** → Architectuur, strategie, audit, complexe beslissingen (~9 taken)
- **Sonnet 4.6** → Code generatie, component bouwen, routine taken (~30 taken)

---

## 📚 Tech Keuzes & Waarom

| Keuze | Alternatief | Reden |
|-------|-------------|-------|
| Supabase | Medusa.js | Eenvoudiger, PostgreSQL, realtime, gratis tier |
| Mollie | Stripe | Betere iDEAL, Nederlandse markt focus |
| Framer Motion | CSS animations | React-native, declaratief, krachtig |
| GSAP | Anime.js | Industrie standaard, ScrollTrigger |
| shadcn/ui | Chakra/MUI | Geen vendor lock-in, copy-paste, aanpasbaar |
| Zustand | Redux/Context | Simpel, performant, TypeScript-first |

---

## 🚀 Deployment

### Vercel Setup
- **Project naam:** botanical-archivist
- **Framework:** Next.js
- **Branch:** main (auto-deploy bij elke push)
- **Preview:** elke PR krijgt eigen preview URL

### Auto-push Flow
```
Aanpassing gemaakt → git add + commit → git push → Vercel build (2-3 min) → Live
```

---

## 📝 Bronmateriaal

Originele HTML designs staan op:
`C:\Users\Mitta\Desktop\stitch_source_github\`

Belangrijkste pagina's:
- `homepage/` — Basis homepage design
- `home_page_1/` `home_page_2/` — Uitgebreide homepage varianten
- `product_listing_truffles/` — Product overzicht
- `product_detail_growkit/` — Product detail pagina
- `checkout_flow_1/` — Checkout
- `shopping_cart_1/` — Winkelwagen

---

*Laatste update: 2026-03-24 | Gemaakt met Team Create*
