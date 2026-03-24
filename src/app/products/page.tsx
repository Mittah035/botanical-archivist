"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { SlidersHorizontal, Search, X } from "lucide-react"
import { products, type Product } from "@/lib/data/products"
import { ProductCard } from "@/components/ui/product-card"
import { FadeIn } from "@/components/animations/FadeIn"

const categories = [
  { slug: "all", label: "Alles", emoji: "✨" },
  { slug: "truffels", label: "Truffels", emoji: "🍄" },
  { slug: "growkits", label: "Growkits", emoji: "🧫" },
  { slug: "microdosering", label: "Microdosering", emoji: "⚗️" },
  { slug: "accessoires", label: "Accessoires", emoji: "📦" },
]

const sortOptions = [
  { value: "popular", label: "Meest populair" },
  { value: "price-asc", label: "Prijs: laag-hoog" },
  { value: "price-desc", label: "Prijs: hoog-laag" },
  { value: "rating", label: "Best beoordeeld" },
]

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const [activeCategory, setActiveCategory] = useState(searchParams.category || "all")
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("popular")

  const filtered = useMemo(() => {
    let list: Product[] = products

    if (activeCategory !== "all") {
      list = list.filter((p) => p.category === activeCategory)
    }

    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    }

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price)
        break
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating)
        break
      default:
        list = [...list].sort((a, b) => b.reviews - a.reviews)
    }

    return list
  }, [activeCategory, search, sort])

  return (
    <main className="min-h-screen bg-surface-low pt-24">
      {/* Hero banner */}
      <section className="bg-primary text-white py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c1ecd4] mb-3 block font-medium">
              Het Archief
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4">
              Alle Producten
            </h1>
            <p className="text-white/60 max-w-xl text-base">
              Lab-geteste truffels, complete growkits en gestandaardiseerde
              microdoseer producten — nauwkeurig geselecteerd voor de moderne psychonaut.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-20 py-10">
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
            <input
              type="text"
              placeholder="Zoek product..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-foreground/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground/60"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-foreground/40" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="py-3 px-4 rounded-xl border border-foreground/10 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.slug
                  ? "bg-primary text-white"
                  : "bg-white text-foreground/60 hover:text-primary border border-foreground/10"
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-sm text-foreground/40 mb-6">
          {filtered.length} product{filtered.length !== 1 ? "en" : ""} gevonden
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-4xl mb-3">🔍</div>
            <p className="text-foreground/60">Geen producten gevonden voor je zoekopdracht.</p>
            <button
              onClick={() => { setSearch(""); setActiveCategory("all") }}
              className="mt-4 text-primary text-sm font-medium underline-offset-2 hover:underline"
            >
              Filters wissen
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
    </main>
  )
}
