# BTW Tarieven — Botanical Archivist

## Overzicht

| Categorie | BTW % | Grondslag |
|---|---|---|
| Truffels | **9%** | Voedingsmiddel (Wet OB 1968, Tabel I) |
| Growkits | **21%** | Algemeen tarief |
| Microdosering | **21%** | Algemeen tarief |
| Accessoires | **21%** | Algemeen tarief |

## Implementatie in Code

```typescript
// src/lib/utils/index.ts
export function getVatRate(category: string): number {
  if (category === "truffels") return 0.09
  return 0.21
}

export function calculateVat(priceIncl: number, vatRate: number): number {
  return Math.round(priceIncl * (vatRate / (1 + vatRate)))
}
```

## Wettelijke Basis

Psilocybine truffels (Sclerotia) vallen onder de categorie **voedingsmiddelen** in Nederland, vergelijkbaar met paddenstoelen. Dit betekent het verlaagde BTW-tarief van 9% (Wet op de Omzetbelasting 1968, Tabel I, post a.1).

## Factuur Weergave

Op facturen moet altijd het BTW-bedrag apart vermeld worden:
- Prijs incl. BTW tonen aan klant
- BTW-bedrag en percentage apart vermelden
- KvK- en BTW-nummer verplicht op factuur (invullen zodra beschikbaar)
