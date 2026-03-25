/**
 * Seed script: importeert alle producten uit src/lib/data/products.ts
 * naar de Supabase 'products' tabel.
 *
 * Gebruik:
 *   npx tsx scripts/seed-products.ts
 *
 * Vereist:
 *   .env.local met NEXT_PUBLIC_SUPABASE_URL en SUPABASE_SERVICE_ROLE_KEY
 */

import { createClient } from "@supabase/supabase-js"
import { products } from "../src/lib/data/products"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseKey) {
  console.error("❌ Supabase env vars ontbreken. Maak .env.local aan.")
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function seed() {
  console.log(`🌱 Seeding ${products.length} producten...`)

  for (const product of products) {
    const { error } = await supabase.from("products").upsert({
      id: product.id,
      name: product.name,
      slug: product.slug,
      description: product.description,
      price: product.price,
      category: product.category,
      image: product.image,
      in_stock: product.inStock,
      strength: product.strength ?? null,
      weight: product.weight ?? null,
      rating: product.rating,
      review_count: product.reviewCount,
      is_featured: product.featured ?? false,
    })

    if (error) {
      console.error(`❌ Fout bij ${product.name}:`, error.message)
    } else {
      console.log(`✅ ${product.name}`)
    }
  }

  console.log("✨ Seed compleet!")
}

seed()
