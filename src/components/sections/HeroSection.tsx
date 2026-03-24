"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 lg:px-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-gradient-to-br from-primary via-primary-container to-[#2d5a3d]"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs uppercase tracking-[0.25em] text-secondary font-medium mb-6 block"
        >
          The Botanical Archivist
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display text-5xl md:text-7xl font-extrabold text-primary leading-[1.05] tracking-tight mb-8"
        >
          Cultivating <br />
          <span className="text-primary-container">Clarity.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-foreground/60 text-lg md:text-xl mb-10 max-w-lg leading-relaxed"
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
            className="bg-primary text-white hover:bg-primary-container rounded-md px-8 py-4 font-semibold transition-all hover:-translate-y-0.5 active:scale-95"
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
            className="border-primary/20 text-primary hover:bg-surface-container rounded-md px-8 py-4 font-semibold"
          >
            <Link href="/blog">Educatieve Gids</Link>
          </Button>
        </motion.div>
      </div>

      {/* Decorative circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.06, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary"
        aria-hidden
      />
    </section>
  )
}
