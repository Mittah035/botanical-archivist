"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/FadeIn"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"

// Gedeelde frosted card stijl
const frosted = "bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl overflow-hidden hover:bg-white/15 transition-colors duration-300"

export function BestsellersGrid() {
  return (
    <section className="py-24 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <FadeIn className="flex flex-col sm:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-400 font-medium mb-2 block">
              Meest gekozen
            </span>
            <h2 className="font-display text-3xl font-bold text-white">
              Onze Bestsellers
            </h2>
          </div>
          <Link
            href="/products"
            className="text-sm text-white/70 font-semibold border-b border-white/20 hover:border-white hover:text-white transition-all pb-1 flex items-center gap-1 shrink-0"
          >
            Bekijk alle producten
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>

        {/* ── MOBIEL: horizontale carousel ── */}
        <div
          className="md:hidden flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {/* Card 1 — Microdose Starter Kit */}
          <div className={`${frosted} snap-start shrink-0 w-[82vw] flex flex-col`}>
            <div className="relative h-48 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=800&q=80"
                alt="Microdose Starter Kit"
                fill
                className="object-cover"
                sizes="82vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <Badge className="absolute top-3 left-3 bg-emerald-400/20 text-emerald-300 border-emerald-400/30 text-[10px] uppercase tracking-widest">
                Starter Kit
              </Badge>
            </div>
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-lg font-bold text-white">Microdose Starter Kit</h3>
                  <span className="text-white font-bold ml-2">{formatPrice(3495)}</span>
                </div>
                <p className="text-white/60 text-xs leading-relaxed mb-4">
                  30 capsules, protocol en dagboek. Direct klaar voor gebruik.
                </p>
              </div>
              <Button asChild className="w-full bg-emerald-500/80 hover:bg-emerald-500 text-white rounded-xl border border-emerald-400/30">
                <Link href="/products/microdose-starter-kit">Bekijk product</Link>
              </Button>
            </div>
          </div>

          {/* Card 2 — Atlantis */}
          <Link href="/products/atlantis-truffels" className={`${frosted} snap-start shrink-0 w-[82vw] block`}>
            <div className="relative h-48 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500&q=80"
                alt="Atlantis Truffels"
                fill
                className="object-cover"
                sizes="82vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="font-display text-lg font-bold text-white">Atlantis Truffels</h3>
                <span className="text-white/70 text-xs">Euforisch & Visueel</span>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <span className="text-white font-bold">{formatPrice(1795)}</span>
              <span className="text-xs text-white/50 bg-white/10 px-2 py-1 rounded-full">Sterkte ●●●○○</span>
            </div>
          </Link>

          {/* Card 3 — Golden Teacher */}
          <Link href="/products/golden-teacher-growkit" className={`${frosted} snap-start shrink-0 w-[82vw] block`}>
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/images/products/growkits/golden-teacher.jpg"
                alt="Golden Teacher Growkit"
                fill
                className="object-cover"
                sizes="82vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="font-display text-lg font-bold text-white">Golden Teacher</h3>
                <span className="text-white/70 text-xs">Growkit — Thuis kweken</span>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <span className="text-white font-bold">{formatPrice(2995)}</span>
              <span className="text-xs text-emerald-300 font-medium bg-emerald-400/15 px-2 py-1 rounded-full">Bestseller</span>
            </div>
          </Link>

          {/* Card 4 — Gids */}
          <div className={`${frosted} snap-start shrink-0 w-[82vw] flex flex-col`}>
            <div className="relative h-48 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80"
                alt="Educatieve kennisbank"
                fill
                className="object-cover"
                sizes="82vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <Badge className="absolute top-3 left-3 bg-white/10 text-white/80 border-white/20 text-[10px] uppercase tracking-widest">
                Educatieve Gids
              </Badge>
            </div>
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-display text-lg font-bold text-white mb-2">Eerste keer? Begin hier.</h3>
                <p className="text-white/60 text-xs leading-relaxed mb-4">
                  Dosering, veiligheid, set & setting en het Fadiman protocol.
                </p>
              </div>
              <Link
                href="/blog/wat-zijn-psilocybine-truffels"
                className="flex items-center gap-2 text-emerald-400 font-bold text-sm"
              >
                Lees de gratis gids <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── DESKTOP: origineel 12-col grid ── */}
        <div className="hidden md:grid grid-cols-12 gap-6">
          {/* Large featured card */}
          <div className={`${frosted} col-span-8 group flex flex-col md:flex-row h-full`}>
            <div className="md:w-3/5 overflow-hidden relative h-64 md:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=800&q=80"
                alt="Microdose starter kit — Magicmushies"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
            </div>
            <div className="p-8 md:w-2/5 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-emerald-400/20 text-emerald-300 border-emerald-400/30 text-[10px] uppercase tracking-widest">
                    Starter Kit
                  </Badge>
                  <span className="text-white font-bold text-lg">{formatPrice(3495)}</span>
                </div>
                <h3 className="font-display text-2xl font-bold mb-3 text-white">Microdose Starter Kit</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  Meer focus en een betere stemming in 30 dagen. Alles inbegrepen:
                  capsules, protocol en dagboek. Lab-getest en direct klaar voor gebruik.
                </p>
              </div>
              <Button asChild className="w-full bg-emerald-500/80 hover:bg-emerald-500 text-white rounded-xl border border-emerald-400/30 backdrop-blur-sm transition-all">
                <Link href="/products/microdose-starter-kit">Bekijk product</Link>
              </Button>
            </div>
          </div>

          {/* Small card 1 — Atlantis */}
          <Link href="/products/atlantis-truffels" className={`${frosted} col-span-4 group block`}>
            <div className="aspect-square overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=500&q=80"
                alt="Atlantis Truffels"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-display text-lg font-bold text-white">Atlantis Truffels</h3>
                <span className="text-white/70 text-xs">Euforisch & Visueel</span>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <span className="text-white font-bold">{formatPrice(1795)}</span>
              <span className="text-xs text-white/50 bg-white/10 px-2 py-1 rounded-full">Sterkte ●●●○○</span>
            </div>
          </Link>

          {/* Small card 2 — Golden Teacher */}
          <Link href="/products/golden-teacher-growkit" className={`${frosted} col-span-4 group block`}>
            <div className="aspect-square overflow-hidden relative">
              <Image
                src="/images/products/growkits/golden-teacher.jpg"
                alt="Golden Teacher Growkit"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-display text-lg font-bold text-white">Golden Teacher</h3>
                <span className="text-white/70 text-xs">Growkit — Thuis kweken</span>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <span className="text-white font-bold">{formatPrice(2995)}</span>
              <span className="text-xs text-emerald-300 font-medium bg-emerald-400/15 px-2 py-1 rounded-full">Bestseller</span>
            </div>
          </Link>

          {/* Editorial guide card */}
          <div className={`${frosted} col-span-8 flex flex-col md:flex-row items-stretch`}>
            <div className="flex-1 p-8 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-400 font-medium mb-2 block">
                Educatieve Gids
              </span>
              <h3 className="font-display text-2xl font-bold mb-4 text-white">Eerste keer? Begin hier.</h3>
              <p className="text-white/60 mb-6 leading-relaxed text-sm">
                Onze gratis beginnersgids legt alles uit: dosering, veiligheid,
                set & setting en hoe je het Fadiman microdoseer protocol volgt.
              </p>
              <Link
                href="/blog/wat-zijn-psilocybine-truffels"
                className="flex items-center gap-2 text-emerald-400 font-bold text-sm group w-fit hover:text-emerald-300 transition-colors"
              >
                Lees de gratis gids
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="md:w-2/5 relative h-48 md:h-auto">
              <Image
                src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80"
                alt="Educatieve kennisbank Magicmushies"
                fill
                className="object-cover"
                sizes="30vw"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
