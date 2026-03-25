# Media Gids — Botanical Archivist

Alle afbeeldingen en video's horen in de `public/` map.
In de code gebruik je altijd een relatief pad vanaf `public/`, bijv:
```tsx
<Image src="/images/products/truffels/hollandia.jpg" ... />
<video src="/videos/hero/intro.mp4" />
```

---

## 📁 Mappenstructuur

```
public/
├── images/
│   ├── products/
│   │   ├── truffels/          ← Productfoto's truffels (JPG/WebP, ~900×900px)
│   │   │   ├── hollandia.jpg
│   │   │   ├── atlantis.jpg
│   │   │   ├── valhalla.jpg
│   │   │   ├── mokum.jpg
│   │   │   ├── tampanensis.jpg
│   │   │   └── mexicana.jpg
│   │   ├── growkits/          ← Productfoto's growkits (JPG/WebP, ~900×900px)
│   │   │   ├── golden-teacher.jpg
│   │   │   ├── b-plus.jpg
│   │   │   ├── ecuador.jpg
│   │   │   └── mckennaii.jpg
│   │   ├── microdosering/     ← Productfoto's microdosering (JPG/WebP, ~900×900px)
│   │   │   ├── starter-kit.jpg
│   │   │   ├── focus-blend.jpg
│   │   │   ├── evening-blend.jpg
│   │   │   └── journal.jpg
│   │   └── accessoires/       ← Productfoto's accessoires (JPG/WebP, ~900×900px)
│   │       ├── precision-scale.jpg
│   │       ├── capsule-machine.jpg
│   │       ├── integration-guide.jpg
│   │       └── supplement-pack.jpg
│   ├── blog/                  ← Blog bannerfoto's (JPG/WebP, ~1600×900px)
│   │   ├── psilocybine-truffels.jpg
│   │   ├── microdosering-gids.jpg
│   │   ├── growkit-handleiding.jpg
│   │   └── wetgeving-2024.jpg
│   ├── team/                  ← Teamfoto's (JPG, ~600×600px, vierkant)
│   │   └── placeholder.jpg
│   ├── brand/                 ← Logo's en merkafbeeldingen
│   │   ├── logo.svg           ← Primair logo (SVG)
│   │   ├── logo-dark.svg      ← Logo voor donkere achtergrond
│   │   ├── logo-icon.svg      ← Alleen het icoontje (favicon-variant)
│   │   └── wordmark.svg       ← Alleen de tekstnaam
│   └── og/                    ← Open Graph / social share afbeeldingen (1200×630px)
│       ├── default.jpg        ← Standaard OG afbeelding
│       ├── truffels.jpg
│       ├── growkits.jpg
│       └── microdosering.jpg
├── videos/
│   ├── hero/                  ← Achtergrondvideo homepage (MP4 + WebM, max 8MB)
│   │   ├── hero-bg.mp4
│   │   └── hero-bg.webm       ← WebM voor betere compressie
│   ├── products/              ← Product demonstratievideo's (MP4, max 30MB)
│   │   ├── growkit-tutorial.mp4
│   │   └── microdose-protocol.mp4
│   └── testimonials/          ← Klantreview video's (optioneel)
│       └── placeholder.mp4
├── icons/                     ← Custom SVG iconen (buiten Lucide React om)
│   ├── truffle.svg
│   └── mushroom.svg
└── fonts/                     ← Eigen lettertypen (als je niet Google Fonts gebruikt)
    └── README.txt
```

---

## 📐 Aanbevolen afmetingen

| Type             | Formaat  | Afmeting     | Max grootte |
|------------------|----------|--------------|-------------|
| Productfoto      | WebP/JPG | 900 × 900px  | 200 KB      |
| Blog banner      | WebP/JPG | 1600 × 900px | 300 KB      |
| OG afbeelding    | JPG      | 1200 × 630px | 200 KB      |
| Logo             | SVG      | —            | 20 KB       |
| Hero video       | MP4+WebM | 1920 × 1080  | 8 MB        |
| Productvideo     | MP4      | 1280 × 720   | 30 MB       |

---

## 💡 Tips

- Gebruik altijd **WebP** voor afbeeldingen — tot 30% kleiner dan JPG, zelfde kwaliteit
- Comprimeer afbeeldingen via [squoosh.app](https://squoosh.app) of [tinypng.com](https://tinypng.com)
- Comprimeer video's via [handbrake.fr](https://handbrake.fr) (gratis)
- Next.js `<Image>` component comprimeert en optimaliseert automatisch on-the-fly
- Vervang de Unsplash placeholders in de code zodra je eigen foto's hebt:
  - `src/components/ui/product-card.tsx` — productkaart afbeelding
  - `src/app/products/[slug]/ProductDetailClient.tsx` — productdetail afbeeldingen
  - `src/components/sections/HeroSection.tsx` — hero achtergrond
