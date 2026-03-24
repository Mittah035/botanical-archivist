"use client"

import { motion } from "framer-motion"
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
    date: "November 2024",
  },
  {
    name: "Thomas B.",
    location: "Rotterdam",
    rating: 5,
    text: "Microdose Starter Kit is een gamechanger. Volg nu 3 weken het Fadiman protocol en merk duidelijk verschil in focus en stemming. De dagboekpagina's helpen enorm.",
    product: "Microdose Starter Kit",
    date: "Oktober 2024",
  },
  {
    name: "Sarah K.",
    location: "Utrecht",
    rating: 5,
    text: "Eerste keer growkit geprobeerd — Golden Teacher. Instructies waren helder, eerste flush na 8 dagen. Ongelooflijk om je eigen te kweken. Bestel nooit meer ergens anders.",
    product: "Golden Teacher Growkit",
    date: "Oktober 2024",
  },
  {
    name: "Daan M.",
    location: "Den Haag",
    rating: 5,
    text: "Atlantis was perfect als eerste kennismaking. Botanical Archivist staat er ook op dat je de educatieve content leest. Voelt veiliger dan andere winkels.",
    product: "Atlantis Truffels",
    date: "September 2024",
  },
  {
    name: "Lisa R.",
    location: "Eindhoven",
    rating: 5,
    text: "Precisie weegschaal is perfect. 0.01g nauwkeurig — ideaal voor microdosering. Snel geleverd en goede kwaliteit voor de prijs.",
    product: "Precisie Weegschaal",
    date: "September 2024",
  },
  {
    name: "Pieter W.",
    location: "Groningen",
    rating: 5,
    text: "Heb de veiligheid gids ook gelezen — top geschreven, eerlijk over risico's. Dat vertrouwen is waarom ik hier blijf kopen. Professioneel op alle fronten.",
    product: "Integratie Gids NL",
    date: "Augustus 2024",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 md:px-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] text-secondary font-medium mb-2 block">
            Klanten Aan Het Woord
          </span>
          <h2 className="font-display text-3xl font-bold text-primary">
            Wat Onze Klanten Zeggen
          </h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <div className="bg-surface-low rounded-2xl p-6 h-full flex flex-col">
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground/70 leading-relaxed flex-1 mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-foreground/10 pt-4">
                  <p className="text-xs font-bold text-primary">{t.name}</p>
                  <p className="text-xs text-foreground/40">{t.location} &middot; {t.product}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Stats bar */}
        <FadeIn delay={0.3}>
          <div className="mt-16 bg-primary rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "4.9/5", label: "Gemiddelde beoordeling" },
              { value: "2.400+", label: "Tevreden klanten" },
              { value: "98%", label: "Zou ons aanbevelen" },
              { value: "1-3 dagen", label: "Bezorgd in Nederland" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-2xl font-extrabold text-[#c1ecd4] mb-1">{stat.value}</p>
                <p className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
