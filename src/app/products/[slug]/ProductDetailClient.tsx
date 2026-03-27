"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, ChevronLeft, ChevronDown, Check, Truck, Shield, Clock, Eye } from "lucide-react"
import { type Product } from "@/lib/data/products"
import { ProductCard } from "@/components/ui/product-card"
import { useCartStore } from "@/lib/store/cartStore"
import { formatPrice } from "@/lib/utils"

const productImages: Record<string, string> = {
  "hollandia-truffels": "/images/products/truffels/hollandia.jpg",
  "atlantis-truffels": "/images/products/truffels/atlantis.jpg",
  "valhalla-truffels": "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=900&q=85",
  "mokum-truffels": "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?w=900&q=85",
  "high-hawaiians-truffels": "/images/products/truffels/high-hawaiians.jpg",
  "mexicana-truffels": "/images/products/truffels/mexicana.jpg",
  "golden-teacher-growkit": "/images/products/growkits/golden-teacher.jpg",
  "b-plus-growkit": "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=900&q=85",
  "ecuador-growkit": "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=900&q=85",
  "mckennaii-growkit": "https://images.unsplash.com/photo-1542601906897-edc9d08c7283?w=900&q=85",
  "microdose-starter-kit": "/images/products/microdosering/starter-kit.jpg",
  "microdose-focus-blend": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=900&q=85",
  "microdose-evening-blend": "https://images.unsplash.com/photo-1476136236990-838240be4859?w=900&q=85",
  "microdose-journal": "https://images.unsplash.com/photo-1517842645767-c639042777db?w=900&q=85",
  "precision-scale": "https://images.unsplash.com/photo-1585670286880-4e6f78e7d8a0?w=900&q=85",
  "capsule-machine": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&q=85",
  "integration-guide-nl": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=85",
  "mushroom-supplement-pack": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85",
}

const categoryFallback: Record<string, string> = {
  truffels: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=900&q=85",
  growkits: "https://images.unsplash.com/photo-1630563451961-ac2ff27616ab?w=900&q=85",
  microdosering: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900&q=85",
  accessoires: "https://images.unsplash.com/photo-1585670286880-4e6f78e7d8a0?w=900&q=85",
}

const categoryLabel: Record<string, string> = {
  truffels: "Magic Truffels",
  growkits: "Growkits",
  microdosering: "Microdosering",
  accessoires: "Accessoires",
}

const faqs = [
  {
    q: "Is dit product legaal in Nederland?",
    a: "Ja, volledig legaal. Verse psilocybine truffels vallen niet onder de Opiumwet en zijn vrij te kopen voor mensen van 18+. Growkits zijn ook legaal.",
  },
  {
    q: "Wat is de minimumleeftijd om te bestellen?",
    a: "Je moet minimaal 18 jaar oud zijn om bij ons te bestellen.",
  },
  {
    q: "Hoe wordt mijn bestelling verpakt en bezorgd?",
    a: "We versturen altijd in neutrale bruine dozen — geen logo's, geen productvermelding. Bezorging via PostNL binnen 1–3 werkdagen. Gratis bij bestellingen boven €50.",
  },
  {
    q: "Kan ik het product retourneren?",
    a: "Vanwege de versheid van de producten is retourneren helaas niet mogelijk. Heb je een beschadigd pakket ontvangen? Stuur een mail naar info@magicmushies.nl.",
  },
]

export function ProductDetailClient({
  product,
  related,
}: {
  product: Product
  related: Product[]
}) {
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const addItem = useCartStore((s) => s.addItem)
  const imgSrc = productImages[product.slug] || categoryFallback[product.category]

  function handleAddToCart() {
    addItem({ id: product.id, name: product.name, price: product.price, quantity: qty, image: product.emoji })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const features = product.contents && product.contents.length > 0
    ? product.contents
    : [
        "100% Legaal in Nederland",
        "Discreet & anoniem bezorgd",
        "Lab-getest op kwaliteit",
        "Gratis verzending vanaf €50",
      ]

  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Producten</Link>
          <span>/</span>
          <Link href={`/products?cat=${product.category}`} className="hover:text-primary transition-colors">
            {categoryLabel[product.category]}
          </Link>
          <span>/</span>
          <span className="text-gray-600 truncate max-w-[200px]">{product.name}</span>
        </nav>

        {/* Main product grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

          {/* LEFT: Product afbeelding */}
          <div className="relative">
            {product.badge && (
              <div className="absolute top-4 left-4 z-10 bg-amber-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                {product.badge}
              </div>
            )}
            <div className="rounded-2xl overflow-hidden aspect-square bg-gray-50 relative shadow-sm border border-gray-100">
              <Image
                src={imgSrc}
                alt={product.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* RIGHT: Product info */}
          <div className="flex flex-col">

            {/* Titel */}
            <h1 className="font-display text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 leading-tight">
              {product.name}
            </h1>

            {/* Sterren */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className={`w-4 h-4 ${i <= Math.round(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-200"}`} />
                ))}
              </div>
              <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>

            {/* Prijs */}
            <div className="flex items-baseline gap-3 mb-5">
              <span className="text-4xl font-bold text-gray-900">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
              )}
              {product.weight && <span className="text-sm text-gray-400">{product.weight}</span>}
            </div>

            {/* Beschrijving */}
            <p className="text-gray-600 leading-relaxed mb-5 text-sm">{product.longDescription || product.description}</p>

            {/* Groene vinkjes */}
            <ul className="space-y-2 mb-6">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <span className="w-5 h-5 rounded flex items-center justify-center bg-green-100 flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-green-600 stroke-[3]" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            {/* Hoeveelheid + knop */}
            <div className="flex gap-3 mb-4">
              <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3.5 hover:bg-gray-50 font-bold text-gray-700 transition-colors">−</button>
                <span className="px-5 py-3.5 font-semibold text-gray-900 min-w-[3rem] text-center">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-4 py-3.5 hover:bg-gray-50 font-bold text-gray-700 transition-colors">+</button>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all shadow-sm ${
                  added ? "bg-green-500 text-white" : "bg-primary text-white hover:bg-primary/90"
                } disabled:opacity-40`}
              >
                <ShoppingCart className="w-4 h-4" />
                {added ? "Toegevoegd!" : "Toevoegen aan winkelwagen"}
              </button>
            </div>

            {/* Betaalmethoden */}
            <div className="flex items-center gap-2 mb-5 flex-wrap">
              {["iDEAL", "Visa", "Mastercard", "Bancontact", "PayPal"].map((method) => (
                <span key={method} className="text-xs border border-gray-200 rounded px-2.5 py-1 text-gray-500 font-medium bg-gray-50">
                  {method}
                </span>
              ))}
            </div>

            {/* Verzendinfo */}
            <div className="border border-gray-100 rounded-xl p-4 space-y-2.5 bg-gray-50">
              <div className="flex items-center gap-2.5 text-sm text-gray-600">
                <Truck className="w-4 h-4 text-green-600 flex-shrink-0" />
                Gratis verzending vanaf €50
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-600">
                <Clock className="w-4 h-4 text-green-600 flex-shrink-0" />
                Voor 17:00 besteld, vandaag verzonden*
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-600">
                <Eye className="w-4 h-4 text-green-600 flex-shrink-0" />
                Discreet & anoniem geleverd
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-600">
                <Shield className="w-4 h-4 text-green-600 flex-shrink-0" />
                100% Legaal in Nederland
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-16 max-w-3xl">
          <h2 className="font-display text-xl font-bold text-gray-900 mb-4">Veelgestelde vragen</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden bg-white">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left"
                >
                  <span className="font-medium text-sm text-gray-800">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-400 flex-shrink-0 ml-4 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4">
                    <p className="text-sm text-gray-500 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Gerelateerde producten */}
        {related.length > 0 && (
          <div>
            <h2 className="font-display text-xl font-bold text-gray-900 mb-6">Vaak samen gekocht</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
