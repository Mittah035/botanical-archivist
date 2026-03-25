"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 lg:px-20 overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          src="/videos/hero/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-medium mb-6 block"
        >
          The Magicmushies
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-8"
        >
          Cultivating <br />
          <span className="text-emerald-400">Clarity.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white/80 text-lg md:text-xl mb-10 max-w-lg leading-relaxed"
        >
          Een gecureerd archief van premium mycologische tools en microdoseer
          kits, ontworpen voor de bewuste ontdekkingsreiziger. Geworteld in
          wetenschap, geïnspireerd door de natuur.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary text-white hover:bg-primary/90 rounded-xl px-8 py-4 font-bold transition-all hover:-translate-y-0.5 active:scale-95"
          >
            <Link href="/products">
              Verken het Archief
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-primary border-primary text-white hover:bg-primary/90 rounded-xl px-8 py-4 font-semibold"
          >
            <Link href="/blog">Educatieve Gids</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
