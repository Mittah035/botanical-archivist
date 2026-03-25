/**
 * Valideert of alle vereiste environment variables aanwezig zijn.
 * Gebruik: npx tsx scripts/validate-env.ts
 */

const required = [
  "NEXT_PUBLIC_SUPABASE_URL",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "SUPABASE_SERVICE_ROLE_KEY",
  "RESEND_API_KEY",
  "MOLLIE_API_KEY",
]

let allGood = true

for (const key of required) {
  if (!process.env[key]) {
    console.error(`❌ Ontbreekt: ${key}`)
    allGood = false
  } else {
    console.log(`✅ ${key}`)
  }
}

if (!allGood) {
  console.error("\n⚠️  Voeg ontbrekende variabelen toe aan .env.local")
  process.exit(1)
} else {
  console.log("\n✨ Alle environment variables zijn ingesteld!")
}
