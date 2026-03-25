# Architectuur

## Mappenstructuur

```
botanical-archivist/
│
├── docs/                    ← Projectdocumentatie (dit bestand)
├── memory/                  ← AI-sessie context, sprint planning
├── knowledge-base/          ← Domeinkennis (producten, wet, SEO)
├── scripts/                 ← Utility scripts (seed, validatie)
├── supabase/                ← Database schema SQL
├── .claude/                 ← Claude AI skills
├── public/                  ← Statische bestanden (afbeeldingen, video's)
│   ├── images/
│   │   ├── products/{truffels,growkits,microdosering,accessoires}/
│   │   ├── blog/
│   │   ├── brand/           ← Logo's (SVG)
│   │   ├── og/              ← Open Graph afbeeldingen (1200×630px)
│   │   └── team/
│   └── videos/
│       ├── hero/            ← Homepage achtergrondvideo
│       ├── products/
│       └── testimonials/
│
└── src/                     ← Alle Next.js broncode (NIET verplaatsen)
    ├── app/                 ← Next.js App Router (pagina's + API routes)
    │   ├── api/
    │   │   ├── contact/route.ts
    │   │   └── payments/{create,webhook}/route.ts
    │   ├── products/[slug]/
    │   ├── blog/[slug]/
    │   ├── cart/
    │   ├── checkout/
    │   ├── order-success/
    │   ├── about/, contact/, faq/
    │   ├── privacy/, terms/, disclaimer/, cookies/
    │   ├── layout.tsx        ← Root layout
    │   ├── page.tsx          ← Homepage
    │   ├── globals.css       ← Tailwind CSS v4 + custom properties
    │   ├── sitemap.ts        ← Dynamische sitemap
    │   └── robots.ts
    ├── components/
    │   ├── ui/               ← shadcn/ui primitives + custom UI
    │   ├── layout/           ← Navbar, Footer
    │   ├── sections/         ← Homepage secties
    │   ├── shop/             ← Shop-specifieke componenten
    │   └── animations/       ← FadeIn, StaggerChildren (Framer Motion)
    ├── lib/
    │   ├── api/              ← Fetch helpers
    │   ├── data/             ← Statische productdata + blogdata
    │   ├── hooks/            ← useMediaQuery, useIsMobile
    │   ├── store/            ← Zustand cartStore
    │   └── utils/            ← formatPrice, BTW berekeningen
    ├── config/               ← siteConfig (naam, URL, verzendkosten)
    ├── styles/               ← Extra CSS
    └── types/                ← TypeScript interfaces
```

## Data Flow

```
Gebruiker
  ↓
Next.js Page (src/app/)
  ↓
Zustand Store (cart) / Static Data (products.ts)
  ↓  [toekomstig: Supabase]
API Route (src/app/api/)
  ↓
Mollie (betaling) / Resend (email) / Supabase (database)
```

## Belangrijke Regels

1. **`src/` nooit verplaatsen** — alle imports gebruiken `@/*` alias die naar `./src/*` wijst
2. **`src/app/` nooit herstructureren** — dit is het Next.js routing systeem
3. **`public/` = statische bestanden** — alles hier is publiek toegankelijk via `/`
4. **Root folders** (`docs/`, `memory/`, etc.) = voor mensen en AI, niet gecompileerd

## Import Alias

```typescript
// tsconfig.json: "@/*" → "./src/*"

import { ProductCard } from "@/components/ui/product-card"  // ✅
import { useCartStore } from "@/lib/store/cartStore"         // ✅
import { siteConfig } from "@/config"                        // ✅
```

## BTW Regels

```typescript
// src/lib/utils/index.ts
truffels    → 9%  BTW (voedingsmiddel, Wet OB 1968 Tabel I)
growkits    → 21% BTW
microdosering → 21% BTW
accessoires → 21% BTW
```
