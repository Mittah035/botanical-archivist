# Magicmushies — CLAUDE.md

## Gedrag (ALTIJD volgen)
- Antwoord altijd in **Nederlands**
- **Doe dingen direct** — niet vragen wat te doen, gewoon uitvoeren
- Korte antwoorden, geen lange uitleg tenzij gevraagd
- Nooit terminal/CMD openen — gebruik MCP tools en bestandsedits
- Browser automation: altijd **Brave** via `mcp__Claude_in_Chrome__*`
- Gebruiker logt zelf in — Claude neemt daarna over
- Nooit bestanden aanmaken op het bureaublad

## Sessie starten
1. Neem screenshot van Brave (http://localhost:3000) om huidige staat te zien
2. Lees de takenlijst hieronder
3. Ga direct aan de slag met de eerste openstaande taak — niet vragen

---

## Project
- **Naam:** Magicmushies
- **Type:** Nederlandse webshop voor functionele paddenstoelen
- **Domein:** magicmushies.nl (bij TransIP)
- **Repo:** https://github.com/Mittah035/botanical-archivist (branch: master)
- **Projectmap:** `C:\Users\Mitta\Desktop\botanical-archivist`
- **Business email:** info@magicmushies.nl (nog aanmaken in TransIP)
- **Dev server:** http://localhost:3000

## Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + framer-motion + GSAP + ScrollTrigger
- Supabase (database + auth) — nog niet gekoppeld
- Mollie (iDEAL + creditcard) — testmodus, geen KVK nog
- Resend (transactionele email) — package geïnstalleerd
- SendCloud (verzending) — gebruiker heeft al account
- Vercel (hosting) — nog deployen

## Wat al af is
- Homepage volledig: Hero (GSAP scroll-video), TrustBadges, BestsellersGrid, FeaturedCategories, MicrodoseSection, Testimonials, Newsletter
- Navbar: brand klik scrollt naar boven
- Newsletter API (`/api/newsletter`) — Resend integratie
- Contact API (`/api/contact`) — Resend integratie
- HeroSection: GSAP ScrollTrigger, scroll-driven video, 2.5 viewports pinned
- Videos: `public/videos/hero/hero.mp4` + `scroll-source.mp4`
- `.env.local` aangemaakt met lege placeholders

## Takenlijst (prioriteit volgorde)

### Infra
- [ ] TransIP DNS: A record `@` → `76.76.21.21` + CNAME `www` → `cname.vercel-dns.com`
- [ ] TransIP: Mailbox `info@magicmushies.nl` aanmaken
- [ ] Vercel: Project deployen + domein magicmushies.nl koppelen

### API keys ophalen + .env.local vullen
- [ ] Supabase: Project aanmaken (EU region "magicmushies") → URL + ANON_KEY + SERVICE_ROLE_KEY
- [ ] Supabase: Personal access token → toevoegen aan claude_desktop_config.json
- [ ] Resend: Account + domein magicmushies.nl → RESEND_API_KEY
- [ ] Mollie: Account (testmodus) → MOLLIE_API_KEY + NEXT_PUBLIC_MOLLIE_PROFILE_ID
- [ ] SendCloud: API keys ophalen (bestaand account) → SENDCLOUD_PUBLIC_KEY + SENDCLOUD_SECRET_KEY
- [ ] reCAPTCHA v3: Site registreren → NEXT_PUBLIC_RECAPTCHA_SITE_KEY + RECAPTCHA_SECRET_KEY
- [ ] Anthropic: API key voor website AI chatbot → ANTHROPIC_API_KEY

### Backend code
- [ ] Supabase SQL schema: users, products, orders, order_items + RLS + triggers
- [ ] Auth routes: signup, login, profile
- [ ] Checkout flow: cart → adres → betaling → bevestiging
- [ ] Mollie webhook handler
- [ ] SendCloud webhook (track & trace)
- [ ] reCAPTCHA v3 op contact + newsletter + checkout
- [ ] Leeftijdsverificatie middleware (18+)

### Frontend
- [ ] Checkout pagina's: cart, adres, betaling, bevestiging
- [ ] Account pagina's: login, registreren, bestellingen, profiel
- [ ] Leeftijdsverificatie gate

### Copy & Marketing
- [ ] Concurrent analyse (Nederlandse/EU concurrenten)
- [ ] Alle paginateksten herschrijven (krachtig Nederlands, sales-gericht)
- NOTE: Nog niet aanpassen — eerst analyseren en rapporteren

### GitHub
- [ ] Multi-repo structuur plannen en uitvoeren

---

## .env.local (huidige staat — alles leeg)
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
MOLLIE_API_KEY=
NEXT_PUBLIC_MOLLIE_PROFILE_ID=
RESEND_API_KEY=
EMAIL_FROM=Magicmushies <info@magicmushies.nl>
SENDCLOUD_PUBLIC_KEY=
SENDCLOUD_SECRET_KEY=
NEXT_PUBLIC_SITE_URL=https://magicmushies.nl
ANTHROPIC_API_KEY=
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=
RECAPTCHA_SECRET_KEY=
```

## MCP config: `C:\Users\Mitta\AppData\Roaming\Claude\claude_desktop_config.json`
- `supabase`: SUPABASE_ACCESS_TOKEN nog invullen (ophalen op supabase.com/dashboard/account/tokens)
- `vercel`: VERCEL_TOKEN nog invullen
- `github`: GITHUB_PERSONAL_ACCESS_TOKEN nog invullen

## Design systeem
```css
--primary: #012d1d           /* Donker groen */
--background: #f9f9f8        /* Bijna wit */
--secondary: #54442d         /* Warm bruin */
```
- Font display: Manrope (bold)
- Font body: Inter

## Bronmateriaal (originele HTML designs)
`C:\Users\Mitta\Desktop\stitch_source_github\`
