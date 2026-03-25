"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Truck, FlaskConical, Leaf } from "lucide-react"

const badges = [
  { icon: ShieldCheck, label: "EU Lab-getest & Gecertificeerd" },
  { icon: Truck, label: "Discreet bezorgd — geen herkenbare verpakking" },
  { icon: FlaskConical, label: "Elke batch getest op zuiverheid & potentie" },
  { icon: Leaf, label: "100% Vers, biologisch & natuurlijk" },
]

export function TrustBadges() {
  return (
    <section className="bg-surface-low py-12 px-6 border-y border-outline-variant">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 hover:opacity-100 transition-opacity duration-500"
        >
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-3">
              <badge.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <span className="text-xs uppercase tracking-[0.15em] font-medium text-foreground/70">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
