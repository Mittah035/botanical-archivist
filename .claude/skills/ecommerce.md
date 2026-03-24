# Skill: E-commerce Functionaliteit

## Cart Store (Zustand)
Winkelwagen staat in `src/lib/store/cartStore.ts`

Acties: addItem, removeItem, updateQuantity, clearCart, getTotal

## Producttypen
```typescript
interface Product {
  id: string
  slug: string
  name: string
  category: 'truffels' | 'growkits' | 'microdosering' | 'accessoires'
  price: number          // in eurocenten
  images: string[]
  description: string
  stock: number
  ageRestricted: boolean // altijd true voor truffels/microdosering
}
```

## Compliance Regels
- ALTIJD 18+ verificatie bij checkout
- NOOIT medische claims maken
- Leeftijdsverificatie opslaan als cookie (30 dagen)
- Truffels en growkits zijn legaal in Nederland

## Betaalflow (Mollie)
1. POST /api/payments/create → Mollie payment aanmaken
2. Redirect naar Mollie betaalpagina
3. Webhook → /api/payments/webhook → order status updaten
4. Redirect naar /order-success of /checkout?error=failed

## Prijzen Tonen
Altijd `formatPrice(price)` gebruiken uit `@/lib/utils`:
```typescript
export function formatPrice(cents: number): string {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR'
  }).format(cents / 100)
}
```
