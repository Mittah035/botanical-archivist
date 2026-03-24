"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren"
import { FadeIn } from "@/components/animations/FadeIn"

const categories = [
  {
    slug: "truffels",
    name: "Truffels",
    description: "Premium psilocybe specimens, nauwkeurig gewogen en lab-getest.",
    emoji: "🌿",
    bg: "from-primary/5 to-primary-container/15",
    count: "12 variëteiten",
  },
  {
    slug: "growkits",
    name: "Growkits",
    description: "Alles wat je nodig hebt om thuis je eigen paddenstoelen te kweken.",
    emoji: "🧫",
    bg: "from-secondary/10 to-tertiary/10",
    count: "8 kits",
  },
  {
    slug: "microdosering",
    name: "Microdosering",
    description: "Gestandaardiseerde protocollen voor dagelijks, sub-perceptueel gebruik.",
    emoji: "⚗️",
    bg: "from-tertiary/5 to-secondary/15",
    count: "6 producten",
  },
  {
    slug: "accessoires",
    name: "Accessoires",
    description: "Supplementen, boeken en tools ter ondersteuning van je praktijk.",
    emoji: "📦",
    bg: "from-outline/5 to-surface-container",
    count: "20+ items",
  },
]

export function FeaturedCategories() {
  return (
    <section className="py-24 px-6 md:px-20 bg-surface-low">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-secondary font-medium mb-2 block">
            Het Archief
          </span>
          <h2 className="font-display text-3xl font-bold text-primary">
            Alle Categorieën
          </h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <StaggerItem key={cat.slug}>
              <Link href={`/products?category=${cat.slug}`}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white rounded-xl p-6 h-full shadow-card hover:shadow-elevated transition-shadow duration-300 cursor-pointer group"
                >
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cat.bg} flex items-center justify-center text-2xl mb-5`}
                  >
                    {cat.emoji}
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                    {cat.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-foreground/40 uppercase tracking-wider">
                      {cat.count}
                    </span>
                    <ArrowRight className="w-4 h-4 text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}
