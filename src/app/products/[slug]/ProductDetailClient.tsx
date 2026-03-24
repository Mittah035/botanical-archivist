"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Star, ShoppingCart, ChevronLeft, Shield, Truck, Leaf, Info, ChevronDown } from "lucide-react"
import { type Product } from "@/lib/data/products"
import { ProductCard } from "@/components/ui/product-card"
import { useCartStore } from "@/lib/store/cartStore"
import { formatPrice } from "@/lib/utils"

const strengthLabels = ["", "Mild", "Licht", "Gemiddeld", "Krachtig", "Extreem"]

const faqs = [
  {
    q: "Is dit product legaal in Nederland?",
    a: "Ja. Verse psilocybine truffels zijn volledig legaal in Nederland. Ze vallen niet onder de Opiumwet. Growkits zijn ook legaal. Gedroogde paddenstoelen zijn NIET legaal.",
  },
  {
    q: "Wat is de minimumleeftijd?",
    a: "Wij verkopen uitsluitend aan personen van 18 jaar of ouder. Bij levering kan een leeftijdsverificatie worden gevraagd.",
  },
  {
    q: "Hoe wordt het product verzonden?",
    a: "Alle producten worden discreet verpakt. De afzender op het pakket geeft niet de inhoud aan. Verzending via PostNL, 1-3 werkdagen.",
  },
  {
    q: "Mag ik het product retourneren?",
    a: "Vanwege de aard van het product (bederfelijk / persoonlijk gebruik) is retour niet mogelijk. Bij beschadiging of fout neem contact op.",
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

  function handleAddToCart() {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: qty,
      image: product.emoji,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <main className="min-h-screen bg-surface-low pt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-10">
        {/* Breadcrumb */}
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-primary mb-8 transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Terug naar producten
        </Link>

        {/* Product grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square rounded-2xl overflow-hidden relative shadow-card"
          >
            <Image
              src={
                product.category === "truffels"
                  ? "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=85"
                  : product.category === "growkits"
                  ? "https://images.unsplash.com/photo-1630563451961-ac2ff27616ab?w=800&q=85"
                  : product.category === "microdosering"
                  ? "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=85"
                  : "https://images.unsplash.com/photo-1585670286880-4e6f78e7d8a0?w=800&q=85"
              }
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            <div className="absolute bottom-6 left-6 text-5xl">{product.emoji}</div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-1">
              <span className="text-xs uppercase tracking-widest text-secondary font-medium">
                {product.category}
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-3">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map((i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i <= Math.round(product.rating) ? "fill-amber-400 text-amber-400" : "text-foreground/20"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">{product.rating}</span>
              <span className="text-sm text-foreground/40">({product.reviews} reviews)</span>
            </div>

            <p className="text-foreground/70 leading-relaxed mb-6">{product.longDescription}</p>

            {/* Strength */}
            {product.strength && (
              <div className="mb-6">
                <span className="text-xs uppercase tracking-wider text-foreground/50 block mb-2">
                  Sterkte: {strengthLabels[product.strength]}
                </span>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map((i) => (
                    <div
                      key={i}
                      className={`h-2 flex-1 rounded-full ${i <= product.strength! ? "bg-primary" : "bg-primary/10"}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Effects */}
            {product.effects && (
              <div className="flex flex-wrap gap-2 mb-6">
                {product.effects.map((effect) => (
                  <span
                    key={effect}
                    className="px-3 py-1 bg-primary/8 text-primary text-xs rounded-full font-medium"
                  >
                    {effect}
                  </span>
                ))}
              </div>
            )}

            {/* Contents */}
            {product.contents && (
              <div className="bg-surface-low rounded-xl p-4 mb-6">
                <p className="text-xs uppercase tracking-wider text-foreground/50 mb-2 font-medium">Inhoud</p>
                <ul className="space-y-1">
                  {product.contents.map((item) => (
                    <li key={item} className="text-sm text-foreground/70 flex items-start gap-2">
                      <span className="text-primary mt-0.5">•</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Usage */}
            {product.usage && (
              <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                <Info className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">{product.usage}</p>
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-display font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-foreground/40 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {product.weight && (
                <span className="text-sm text-foreground/40">{product.weight}</span>
              )}
            </div>

            {/* Add to cart */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center border border-foreground/20 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="px-4 py-3 hover:bg-foreground/5 transition-colors font-bold"
                >
                  −
                </button>
                <span className="px-4 py-3 font-medium text-sm min-w-[40px] text-center">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="px-4 py-3 hover:bg-foreground/5 transition-colors font-bold"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all ${
                  added
                    ? "bg-green-500 text-white"
                    : "bg-primary text-white hover:bg-primary/90"
                } disabled:opacity-40 disabled:cursor-not-allowed`}
              >
                <ShoppingCart className="w-4 h-4" />
                {added ? "Toegevoegd!" : product.inStock ? "In winkelwagen" : "Uitverkocht"}
              </button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Shield, text: "100% Legaal" },
                { icon: Truck, text: "Discreet bezorgd" },
                { icon: Leaf, text: "Lab-getest" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex flex-col items-center gap-1 bg-surface-low rounded-xl p-3 text-center">
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-xs text-foreground/60">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="font-display text-2xl font-bold text-primary mb-6">Veelgestelde vragen</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-card">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-sm text-primary">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-foreground/40 flex-shrink-0 ml-4 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-foreground/60 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <h2 className="font-display text-2xl font-bold text-primary mb-6">
              Gerelateerde producten
            </h2>
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
