"use client"

import Image from "next/image"
import Link from "next/link"
import { formatPrice } from "@/lib/utils"

const products = [
  {
    slug: "atlantis-truffels",
    name: "Atlantis Truffels — 15 gram (Nic 2%)",
    image: "/images/products/truffels/atlantis.jpg",
    price: 1795,
    originalPrice: 2495,
  },
  {
    slug: "microdose-starter-kit",
    name: "Microdose Starter Kit — 30 Capsules",
    image: "/images/products/microdosering/starter-kit.jpg",
    price: 3495,
    originalPrice: 4995,
  },
  {
    slug: "golden-teacher-growkit",
    name: "Golden Teacher Growkit",
    image: "/images/products/growkits/golden-teacher.jpg",
    price: 2995,
    originalPrice: null,
  },
  {
    slug: "hollandia-truffels",
    name: "Hollandia Truffels — 15 gram",
    image: "/images/products/truffels/hollandia.jpg",
    price: 1995,
    originalPrice: 2795,
  },
  {
    slug: "mexicana-truffels",
    name: "Mexicana Magic Truffels – 15 gram",
    image: "/images/products/truffels/mexicana.jpg",
    price: 2195,
    originalPrice: null,
  },
  {
    slug: "high-hawaiians-truffels",
    name: "High Hawaiians Magic Truffles – 15 gram",
    image: "https://images.unsplash.com/photo-1447710441604-5bdc41bc6517?w=400&q=80",
    price: 1895,
    originalPrice: 2595,
  },
]

export function NewArrivalsCarousel() {
  return (
    <section className="py-8 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display text-xl font-bold text-gray-900">Nieuw Binnen</h2>
          <Link
            href="/products?sort=newest"
            className="text-sm text-primary font-semibold hover:underline underline-offset-2"
          >
            Bekijk alles
          </Link>
        </div>

        {/* Horizontal scroll */}
        <div
          className="flex gap-4 overflow-x-auto pb-3 -mx-4 px-4 lg:mx-0 lg:px-0 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="snap-start shrink-0 w-[175px] lg:w-[200px] bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow group"
            >
              {/* Image */}
              <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="200px"
                />
              </div>
              {/* Info */}
              <div className="p-3">
                <h3 className="text-xs font-medium text-gray-800 line-clamp-2 leading-snug mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-bold text-red-500">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-400 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
