"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/FadeIn"

const stats = [
  { value: "0.1g", label: "Standaard Dosis" },
  { value: "Fadiman", label: "Goud Protocol" },
  { value: "30 Dagen", label: "Starter Cyclus" },
  { value: "EU Lab", label: "Gecertificeerd" },
]

export function MicrodoseSection() {
  return (
    <section className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <FadeIn direction="right">
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl" aria-hidden />
            <div className="relative z-10 rounded-2xl w-full aspect-[4/5] overflow-hidden border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800&q=85"
                alt="Microdosering capsules en weegschaal"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
          </div>
        </FadeIn>

        {/* Content */}
        <FadeIn direction="left" delay={0.2}>
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c1ecd4] mb-6 block font-medium">
            Het Protocol
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-8 leading-tight italic">
            Voorbij het Oppervlak.
          </h2>
          <div className="space-y-4 text-white/70 text-base md:text-lg leading-relaxed">
            <p>
              Microdoseren is het innemen van sub-perceptuele doses psilocybine.
              Het doel is niet om te &ldquo;trippen&rdquo;, maar om cognitieve
              functies, emotioneel evenwicht en creatieve flow te verbeteren
              terwijl je je dagelijkse routine bijhoudt.
            </p>
            <p>
              Ons archief biedt de meest stabiele, lab-geteste substraten in
              Europa — wetenschappelijke precisie ontmoet eeuwenoude wijsheid.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="text-3xl font-display font-bold text-[#c1ecd4] block mb-1">
                  {stat.value}
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/40">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/products?category=microdosering"
            className="mt-10 inline-flex items-center gap-2 text-[#c1ecd4] font-bold text-sm group"
          >
            Ontdek Microdosering
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
