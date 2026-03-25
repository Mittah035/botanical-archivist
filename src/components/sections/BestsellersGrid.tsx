"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/FadeIn"
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"

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
            <div className="bg-white rounded-2xl overflow-hidden flex flex-col md:flex-row h-full shadow-card hover:shadow-elevated transition-shadow duration-300">
              <div className="md:w-3/5 overflow-hidden relative h-64 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=800&q=80"
                  alt="Microdose starter kit — Magicmushies"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
              </div>
              <div className="p-8 md:w-2/5 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-[#c1ecd4] text-primary text-[10px] uppercase tracking-widest">
                      Starter Kit
                    </Badge>
                    <span className="text-primary font-bold text-lg">
                      {formatPrice(3495)}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3 text-primary">
                    Microdose Starter Kit
                  </h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-6">
                    30-daags Fadiman protocol. Alles wat je nodig hebt om te beginnen
                    met verantwoord microdoseren. Lab-getest, gecalibreerd.
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full bg-primary text-white hover:bg-primary/90 rounded-xl transition-all"
                >
                  <Link href="/products/microdose-starter-kit">
                    Bekijk product
                  </Link>
                </Button>
              </div>
            </div>
          </StaggerItem>

          {/* Small card 1 — Atlantis */}
          <StaggerItem className="md:col-span-4 group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 cursor-pointer">
            <Link href="/products/atlantis-truffels">
              <div className="aspect-square overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500&q=80"
                  alt="Atlantis Truffels"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-lg font-bold text-white">Atlantis Truffels</h3>
                  <span className="text-white/70 text-xs">Euforisch & Visueel</span>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-primary font-bold">{formatPrice(1795)}</span>
                <span className="text-xs text-foreground/40 bg-primary/5 px-2 py-1 rounded-full">Sterkte ●●●○○</span>
              </div>
            </Link>
          </StaggerItem>

          {/* Small card 2 — Growkit */}
          <StaggerItem className="md:col-span-4 group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 cursor-pointer">
            <Link href="/products/golden-teacher-growkit">
              <div className="aspect-square overflow-hidden relative">
                <Image
                  src="/images/products/growkits/golden-teacher.jpg"
                  alt="Golden Teacher Growkit"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-display text-lg font-bold text-white">Golden Teacher</h3>
                  <span className="text-white/70 text-xs">Growkit — Thuis kweken</span>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-primary font-bold">{formatPrice(2995)}</span>
                <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">Bestseller</span>
              </div>
            </Link>
          </StaggerItem>

          {/* Editorial guide card */}
          <StaggerItem className="md:col-span-8 bg-surface-low rounded-2xl overflow-hidden flex flex-col md:flex-row gap-0 items-stretch">
            <div className="flex-1 p-8 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.2em] text-secondary font-medium mb-2 block">
                Educatieve Gids
              </span>
              <h3 className="font-display text-2xl font-bold mb-4 text-primary">
                Nieuw bij mycologie?
              </h3>
              <p className="text-foreground/60 mb-6 leading-relaxed text-sm">
                Lees onze complete beginnersgids over veiligheid, dosering,
                set & setting en het Fadiman microdoseer protocol.
              </p>
              <Link
                href="/blog/wat-zijn-psilocybine-truffels"
                className="flex items-center gap-2 text-primary font-bold text-sm group w-fit"
              >
                Lees de Gids
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="md:w-2/5 relative h-48 md:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80"
                alt="Educatieve kennisbank Magicmushies"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 30vw"
              />
            </div>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  )
}
