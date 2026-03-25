# API Referentie

Alle API routes zitten in `src/app/api/`.

---

## POST /api/contact

Verwerkt het contactformulier. Stuurt een email via Resend.

**Request body:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

**Response:**
```json
{ "success": true }
```

**Bestand:** `src/app/api/contact/route.ts`
**TODO:** Resend API key instellen in `.env.local` → `RESEND_API_KEY`

---

## POST /api/payments/create

Maakt een Mollie betaalopdracht aan.

**Request body:**
```json
{
  "amount": 29.99,
  "orderId": "string",
  "description": "string",
  "redirectUrl": "string"
}
```

**Response:**
```json
{
  "checkoutUrl": "https://www.mollie.com/checkout/...",
  "paymentId": "tr_xxx"
}
```

**Bestand:** `src/app/api/payments/create/route.ts`
**TODO:** Mollie API key instellen → `MOLLIE_API_KEY`

---

## POST /api/payments/webhook

Ontvangt Mollie webhook na betaalstatus update.

**Mollie stuurt:** `id=tr_xxx` (form-encoded)

**Actie:** Status opvragen bij Mollie → order status updaten in Supabase

**Bestand:** `src/app/api/payments/webhook/route.ts`

---

## Vereiste Environment Variables

```bash
# .env.local (nooit committen naar git)
RESEND_API_KEY=re_xxx
MOLLIE_API_KEY=live_xxx
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxx
SUPABASE_SERVICE_ROLE_KEY=eyJxxx
```
