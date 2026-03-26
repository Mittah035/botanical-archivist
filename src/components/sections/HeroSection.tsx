"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1400&q=80",
    badge: "Bestseller",
    title: "Verse Psilocybine Truffels",
    subtitle: "Lab-getest & discreet bezorgd in heel Nederland",
    cta: { label: "Shop Truffels", href: "/products?category=truffels" },
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=1400&q=80",
    badge: "Nieuw",
    title: "Microdoseer Starter Kit",
    subtitle: "Alles voor jouw eerste 30 dagen — capsules, protocol & dagboek",
    cta: { label: "Bekijk Kit", href: "/products/microdose-starter-kit" },
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=1400&q=80",
    badge: "Populair",
    title: "Growkits — Kweek Thuis",
    subtitle: "Gegarandeerd resultaat, ook voor beginners",
    cta: { label: "Shop Growkits", href: "/products?category=growkits" },
  },
]

export function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[current]

  return (
    <section className="px-4 lg:px-8 py-3">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-2xl h-[260px] sm:h-[360px] lg:h-[460px] bg-gray-100">
        {/* Slides */}
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="(max-width: 768px) 100vw, 90vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-transparent" />
          </div>
        ))}

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-10">
          <span className="inline-block bg-white text-primary text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
            {slide.badge}
          </span>
          <h1 className="font-display font-black text-white text-2xl sm:text-3xl lg:text-5xl mb-2 leading-tight">
            {slide.title}
          </h1>
          <p className="text-white/80 text-sm lg:text-base mb-5 max-w-md">{slide.subtitle}</p>
          <Link
            href={slide.cta.href}
            className="inline-flex items-center bg-white text-primary font-bold text-sm px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors w-fit"
          >
            {slide.cta.label}
          </Link>
        </div>

        {/* Dots */}
        <div className="absolute bottom-5 right-6 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-white" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
