"use client"

import Image from "next/image"
import Link from "next/link"
import { Star } from "lucide-react"
import { formatPrice } from "@/lib/utils"

const products = [
  {
    slug: "microdose-starter-kit",
    name: "Microdose Starter Kit — 30 Capsules",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=600&q=80",
    price: 3495,
    originalPrice: 4995,
    rating: 4.9,
    reviews: 87,
    discount: 30,
    savings: 1500,
  },
  {
    slug: "atlantis-truffels",
    name: "Atlantis Truffels — 15 gram",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&q=80",
    price: 1795,
    originalPrice: 2495,
    rating: 4.8,
    reviews: 143,
    discount: 28,
    savings: 700,
  },
  {
    slug: "golden-teacher-growkit",
    name: "Golden Teacher Growkit",
    image: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=600&q=80",
    price: 2995,
    originalPrice: 3995,
    rating: 5.0,
    reviews: 62,
    discount: 25,
    savings: 1000,
  },
  {
    slug: "hollandia-truffels",
    name: "Hollandia Truffels — 15 gram",
    image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?w=600&q=80",
    price: 1995,
    originalPrice: 2795,
    rating: 4.7,
    reviews: 211,
    discount: 29,
    savings: 800,
  },
]

function StarRating({ rating, count }: { rating: number; count: number }) {
  return (
    <div className="flex items-center gap-1 mt-2">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-3 h-3 ${
            i <= Math.round(rating)
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
      <span className="text-xs text-gray-500 ml-0.5">({count})</span>
    </div>
  )
}

export function BestsellersGrid() {
  return (
    <section className="py-8 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display text-xl font-bold text-gray-900">Bestsellers</h2>
          <Link
            href="/products"
            className="text-sm text-primary font-semibold hover:underline underline-offset-2"
          >
            Bekijk meer
          </Link>
        </div>

        {/* 2-col mobile / 4-col desktop grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow group"
            >
              {/* Image + discount badge */}
              <div className="relative aspect-square bg-gray-50 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                {/* Discount ribbon */}
                <div className="absolute top-0 right-0">
                  <div className="bg-red-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-bl-lg rounded-tr-xl">
                    {product.discount}% KORTING
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-3">
                <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-snug">
                  {product.name}
                </h3>
                <StarRating rating={product.rating} count={product.reviews} />
                <div className="mt-2 flex items-center gap-2 flex-wrap">
                  <span className="text-base font-bold text-red-500">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                </div>
                <div className="mt-1.5">
                  <span className="inline-block bg-green-50 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-md">
                    Bespaar {formatPrice(product.savings)}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
