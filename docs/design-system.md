# Design Systeem

## Kleuren

Gedefinieerd in `src/app/globals.css` als CSS custom properties.

| Token | Waarde | Gebruik |
|---|---|---|
| `--primary` | Donkergroen | CTA knoppen, accenten |
| `--background` | Bijna wit | Pagina achtergrond |
| `--foreground` | Donker | Bodytekst |
| `--card` | Wit | Productkaarten |
| `--muted` | Lichtgrijs | Subtekst, borders |

### Categorie Kleuren

| Categorie | Kleur | Tailwind class |
|---|---|---|
| Truffels | Emerald | `emerald-*` |
| Growkits | Amber | `amber-*` |
| Microdosering | Indigo | `indigo-*` |
| Accessoires | Grijs | `gray-*` |

## Typografie

```css
--font-inter    → Bodytekst, UI elementen
--font-manrope  → Headings, titels
```

## Schaduwen

```css
shadow-card      → Productkaarten (rust)
shadow-elevated  → Productkaarten (hover)
```

## Animaties

Alle animaties via Framer Motion:

```tsx
// Basis fade-in
<FadeIn>...</FadeIn>

// Stagger children (lijst items)
<StaggerChildren>
  <StaggerItem>...</StaggerItem>
</StaggerChildren>
```

**Regel:** Gebruik `ease: "easeOut"` (string), niet array — TypeScript fout anders.

## Afbeeldingen

Altijd `next/image` gebruiken:

```tsx
import Image from "next/image"

<Image
  src="/images/products/truffels/hollandia.jpg"
  alt="Beschrijving"
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 50vw"
/>
```

## Mobiel-first

Breakpoints (Tailwind standaard):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

**Altijd beginnen met mobiele layout**, dan uitbreiden met `md:` en `lg:` classes.
