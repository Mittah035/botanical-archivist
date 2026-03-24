"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/FadeIn"
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"

const featuredProducts = [
  {
    id: "1",
    name: "Precision Microdose Stack",
    category: "Starter Kit",
    price: 4500,
    description:
      "Ons flagship 30-dag protocol met gedehydrateerde Golden Teacher truffels, vermengd met Lion's Mane en Niacin.",
    tag: "Bestseller",
    colSpan: "md:col-span-8",
    imageClass: "h-64 md:h-80",
  },
  {
    id: "2",
    name: "Atlantis Truffels",
    category: "Euforisch & Visueel",
    price: 2200,
    description: "Krachtige psilocybe atlantis voor een intense, kleurrijke ervaring.",
    tag: null,
    colSpan: "md:col-span-4",
    imageClass: "aspect-square",
  },
  {
    id: "3",
    name: "B+ Mycelium Kit",
    category: "All-in-one Groei",
    price: 5500,
    description: "Complete growkit voor thuis kweken van paddenstoelen.",
    tag: "Nieuw",
    colSpan: "md:col-span-4",
    imageClass: "aspect-square",
  },
]

export function BestsellersGrid() {
  return (
    <section className="py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-secondary font-medium mb-2 block">
              Curation 01
            </span>
            <h2 className="font-display text-3xl font-bold text-primary">
              Archivale Bestsellers
            </h2>
          </div>
          <Link
            href="/products"
            className="text-sm text-primary font-semibold border-b border-primary/20 hover:border-primary transition-all pb-1 flex items-center gap-1"
          >
            Bekijk alle variëteiten
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>

        {/* Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Large featured card */}
          <StaggerItem className="md:col-span-8 group">
            <div className="bg-white rounded-xl overflow-hidden flex flex-col md:flex-row h-full shadow-card hover:shadow-elevated transition-shadow duration-300">
              <div className="md:w-3/5 overflow-hidden bg-surface-container h-64 md:h-auto">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary-container/20 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                  <span className="text-6xl">🍄</span>
                </div>
              </div>
              <div className="p-8 md:w-2/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-[#c1ecd4] text-primary-container text-[10px] uppercase tracking-widest">
                      Starter Kit
                    </Badge>
                    <span className="text-primary font-bold text-lg">
                      {formatPrice(4500)}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3">
                    Precision Microdose Stack
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                    Ons flagship 30-dag protocol met gedehydrateerde Golden Teacher
                    truffels, vermengd met Lion's Mane en Niacin.
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full bg-primary text-white hover:bg-primary-container rounded-md transition-all"
                >
                  <Link href="/products/precision-microdose-stack">
                    Voeg toe aan Archief
                  </Link>
                </Button>
              </div>
            </div>
          </StaggerItem>

          {/* Small card 1 */}
          <StaggerItem className="md:col-span-4 group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 cursor-pointer">
            <Link href="/products/atlantis-truffels">
              <div className="aspect-square overflow-hidden bg-surface-container">
                <div className="w-full h-full bg-gradient-to-br from-tertiary/10 to-secondary/20 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center text-5xl">
                  🌿
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-display text-lg font-bold">Atlantis Truffels</h3>
                  <span className="text-primary font-bold">{formatPrice(2200)}</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.15em] text-foreground/50">
                  Euforisch &amp; Visueel
                </span>
              </div>
            </Link>
          </StaggerItem>

          {/* Small card 2 */}
          <StaggerItem className="md:col-span-4 group bg-white rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 cursor-pointer">
            <Link href="/products/b-plus-mycelium-kit">
              <div className="aspect-square overflow-hidden bg-surface-container">
                <div className="w-full h-full bg-gradient-to-br from-primary-container/20 to-primary/10 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center text-5xl">
                  🧫
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-1">
                  <h3 className="font-display text-lg font-bold">B+ Mycelium Kit</h3>
                  <span className="text-primary font-bold">{formatPrice(5500)}</span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.15em] text-foreground/50">
                  All-in-one Groei
                </span>
              </div>
            </Link>
          </StaggerItem>

          {/* Editorial guide card */}
          <StaggerItem className="md:col-span-8 bg-surface-container rounded-xl p-8 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-medium mb-2 block">
                Educatieve Gids
              </span>
              <h3 className="font-display text-2xl font-bold mb-4">
                Nieuw bij mycologie?
              </h3>
              <p className="text-foreground/60 mb-6 leading-relaxed text-sm">
                Download onze &ldquo;Eerste Reis&rdquo; gids — een uitgebreid
                40-pagina digitaal handboek over veiligheid, dosering en intentie.
              </p>
              <Link
                href="/blog/eerste-reis-gids"
                className="flex items-center gap-2 text-primary font-bold text-sm group"
              >
                Lees de Gids
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="flex-1 h-48 rounded-lg bg-gradient-to-br from-primary/5 to-primary-container/10 flex items-center justify-center text-6xl">
              📚
            </div>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  )
}
