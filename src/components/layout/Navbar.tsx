"use client"

import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Search, ShoppingCart, Menu, X } from "lucide-react"
import { useState } from "react"
import { useCartStore } from "@/lib/store/cartStore"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/products?category=truffels", label: "Truffels" },
  { href: "/products?category=growkits", label: "Growkits" },
  { href: "/products?category=microdosering", label: "Microdosering" },
  { href: "/about", label: "Over Ons" },
  { href: "/blog", label: "Kennisbank" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const itemCount = useCartStore((s) => s.getItemCount())
  const { scrollY } = useScroll()
  const borderOpacity = useTransform(scrollY, [0, 50], [0, 1])

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-[rgba(249,249,248,0.85)] backdrop-blur-[20px]"
      style={{
        borderBottomWidth: 1,
        borderBottomStyle: "solid",
        borderBottomColor: `rgba(193,200,194,${borderOpacity.get()})`,
      }}
    >
      <div className="flex justify-between items-center px-6 lg:px-10 py-4 max-w-7xl mx-auto">
        {/* Left: Search + Mobile menu */}
        <div className="flex items-center gap-4">
          <button
            className="transition-opacity hover:opacity-70 active:scale-90 transition-transform"
            aria-label="Zoeken"
          >
            <Search className="w-5 h-5 text-primary" strokeWidth={1.5} />
          </button>
          <button
            className="lg:hidden transition-opacity hover:opacity-70"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-primary" strokeWidth={1.5} />
            ) : (
              <Menu className="w-5 h-5 text-primary" strokeWidth={1.5} />
            )}
          </button>
        </div>

        {/* Center: Logo */}
        <Link
          href="/"
          className="text-base font-black text-primary uppercase tracking-[0.2em] font-display hover:opacity-80 transition-opacity"
        >
          Botanical Archivist
        </Link>

        {/* Right: Desktop nav + Cart */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/70 hover:text-primary transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/cart"
            className="relative transition-opacity hover:opacity-70 active:scale-90 transition-transform"
            aria-label={`Winkelwagen (${itemCount} items)`}
          >
            <ShoppingCart className="w-5 h-5 text-primary" strokeWidth={1.5} />
            {itemCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center"
              >
                {itemCount}
              </motion.span>
            )}
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="overflow-hidden lg:hidden"
      >
        <div className="px-6 pb-6 flex flex-col gap-4 border-t border-outline-variant">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/70 hover:text-primary transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  )
}
