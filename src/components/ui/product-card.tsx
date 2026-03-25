"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingCart, Star } from "lucide-react"
import { type Product } from "@/lib/data/products"
import { useCartStore } from "@/lib/store/cartStore"
import { formatPrice } from "@/lib/utils"

const badgeLabels = {
  bestseller: "Bestseller",
  nieuw: "Nieuw",
  sale: "Sale",
  uitverkocht: "Uitverkocht",
}

const badgeColors = {
  bestseller: "bg-amber-500 text-white",
  nieuw: "bg-primary text-white",
  sale: "bg-red-500 text-white",
  uitverkocht: "bg-foreground/40 text-white",
}

// Per-product lokale afbeeldingen (public/images/products/...)
const productImages: Record<string, string> = {
  "golden-teacher-growkit": "/images/products/growkits/golden-teacher.jpg",
  "microdose-starter-kit": "/images/products/microdosering/starter-kit.jpg",
}

// Fallback Unsplash images per category
const categoryImages: Record<string, string> = {
  truffels: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&q=75",
  growkits: "https://images.unsplash.com/photo-1630563451961-ac2ff27616ab?w=400&q=75",
  microdosering: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=75",
  accessoires: "https://images.unsplash.com/photo-1585670286880-4e6f78e7d8a0?w=400&q=75",
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem)

  function handleAddToCart(e: React.MouseEvent) {
    e.preventDefault()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.emoji,
    })
  }

  const imgSrc = productImages[product.slug] ?? categoryImages[product.category]

  return (
    <Link href={`/products/${product.slug}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 group cursor-pointer"
      >
        {/* Image area */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={imgSrc}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          {product.badge && (
            <span
              className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${badgeColors[product.badge]}`}
            >
              {badgeLabels[product.badge]}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-display font-bold text-primary text-sm leading-tight">
              {product.name}
            </h3>
            {product.weight && (
              <span className="text-[10px] text-foreground/40 whitespace-nowrap">{product.weight}</span>
            )}
          </div>

          <p className="text-xs text-foreground/60 leading-relaxed mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Strength indicator */}
          {product.strength && (
            <div className="flex gap-0.5 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className={`h-1 w-4 rounded-full ${i <= product.strength! ? "bg-primary" : "bg-primary/10"}`}
                />
              ))}
            </div>
          )}

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="text-xs font-medium text-foreground/70">{product.rating}</span>
            <span className="text-xs text-foreground/40">({product.reviews})</span>
          </div>

          {/* Price + Add to cart */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-base font-bold text-primary">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-foreground/40 line-through ml-1">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-9 h-9 bg-primary text-white rounded-xl flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
