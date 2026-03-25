"use client"

import { Star } from "lucide-react"
import { FadeIn } from "@/components/animations/FadeIn"
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren"

const testimonials = [
  {
    name: "Marielle V.",
    location: "Amsterdam",
    rating: 5,
    text: "Hollandia truffels zijn echt de beste die ik ooit heb gehad. Super snelle levering, discreet verpakt. Het team denkt ook mee over dosering — topservice.",
    product: "Hollandia Truffels",
  },
  {
    name: "Thomas B.",
    location: "Rotterdam",
    rating: 5,
    text: "Microdose Starter Kit is een gamechanger. Volg nu 3 weken het Fadiman protocol en merk duidelijk verschil in focus en stemming. De dagboekpagina's helpen enorm.",
    product: "Microdose Starter Kit",
  },
  {
    name: "Sarah K.",
    location: "Utrecht",
    rating: 5,
    text: "Eerste keer growkit geprobeerd — Golden Teacher. Instructies waren helder, eerste flush na 8 dagen. Ongelooflijk om je eigen te kweken. Bestel nooit meer ergens anders.",
    product: "Golden Teacher Growkit",
  },
  {
    name: "Daan M.",
    location: "Den Haag",
    rating: 5,
    text: "Atlantis was perfect als eerste kennismaking. Magicmushies staat er ook op dat je de educatieve content leest. Voelt veiliger dan andere winkels.",
    product: "Atlantis Truffels",
  },
  {
    name: "Lisa R.",
    location: "Eindhoven",
    rating: 5,
    text: "Precisie weegschaal is perfect. 0.01g nauwkeurig — ideaal voor microdosering. Snel geleverd en goede kwaliteit voor de prijs.",
    product: "Precisie Weegschaal",
  },
  {
    name: "Pieter W.",
    location: "Groningen",
    rating: 5,
    text: "Heb de veiligheid gids ook gelezen — top geschreven, eerlijk over risico's. Dat vertrouwen is waarom ik hier blijf kopen. Professioneel op alle fronten.",
    product: "Integratie Gids NL",
  },
]

const frosted = "bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl"

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-10">
          <span className="text-[10px] uppercase tracking-[0.25em] text-emerald-400 font-medium mb-2 block">
            Ervaringen
          </span>
          <h2 className="font-display text-3xl font-bold text-white">
            Dit zeggen onze klanten
          </h2>
        </FadeIn>

        {/* ── MOBIEL: carousel ── */}
        <div
          className="md:hidden flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {testimonials.map((t) => (
            <div key={t.name} className={`${frosted} snap-start shrink-0 w-[82vw] p-6 flex flex-col`}>
              <div className="flex gap-0.5 mb-3">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-sm text-white/70 leading-relaxed flex-1 mb-4">&ldquo;{t.text}&rdquo;</p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-xs font-bold text-white">{t.name}</p>
                <p className="text-xs text-white/40">{t.location} · {t.product}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── DESKTOP: 3-kolom grid ── */}
        <StaggerChildren className="hidden md:grid grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className={`${frosted} p-6 h-full flex flex-col`}>
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-white/70 leading-relaxed flex-1 mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="border-t border-white/10 pt-4">
                  <p className="text-xs font-bold text-white">{t.name}</p>
                  <p className="text-xs text-white/40">{t.location} · {t.product}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Stats bar */}
        <FadeIn delay={0.3}>
          <div className="mt-12 bg-primary/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "4.9/5", label: "Gemiddelde beoordeling" },
              { value: "2.400+", label: "Tevreden klanten" },
              { value: "98%", label: "Zou ons aanbevelen" },
              { value: "1-3 dagen", label: "Bezorgd in Nederland" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-extrabold text-emerald-300 mb-1">{stat.value}</p>
                <p className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
