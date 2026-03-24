"use client"

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

const strengthLabels = ["", "Mild", "Licht", "Gemiddeld", "Krachtig", "Extreem"]

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

  return (
    <Link href={`/products/${product.slug}`}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 group cursor-pointer"
      >
        {/* Image area */}
        <div className="relative aspect-square bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center text-6xl">
          {product.badge && (
            <span
              className={`absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${badgeColors[product.badge]}`}
            >
              {badgeLabels[product.badge]}
            </span>
          )}
          {product.emoji}
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
            <div className="flex items-center gap-1.5 mb-3">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`h-1.5 w-4 rounded-full ${
                      i <= product.strength! ? "bg-primary" : "bg-primary/15"
                    }`}
                  />
                ))}
              </div>
              <span className="text-[10px] text-foreground/40 uppercase tracking-wider">
                {strengthLabels[product.strength]}
              </span>
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
