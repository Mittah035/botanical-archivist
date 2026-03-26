"use client"

import Link from "next/link"
import { Search, ShoppingCart, Menu, X, User } from "lucide-react"
import { useState } from "react"
import { useCartStore } from "@/lib/store/cartStore"
import { CartDrawer } from "@/components/ui/cart-drawer"
import { SearchOverlay } from "@/components/ui/search-overlay"

const navLinks = [
  { href: "/products?category=truffels", label: "Truffels" },
  { href: "/products?category=growkits", label: "Growkits" },
  { href: "/products?category=microdosering", label: "Microdosering" },
  { href: "/about", label: "Over Ons" },
  { href: "/blog", label: "Kennisbank" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const itemCount = useCartStore((s) => s.getItemCount())

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3 px-4 lg:px-8 h-16 max-w-7xl mx-auto">

          {/* Hamburger */}
          <button
            className="p-1 hover:opacity-70 transition-opacity"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-gray-800" />
            ) : (
              <Menu className="w-5 h-5 text-gray-800" />
            )}
          </button>

          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            }}
            className="font-display font-black text-base text-primary uppercase tracking-widest shrink-0 hover:opacity-80 transition-opacity"
          >
            Magicmushies
          </Link>

          {/* Warning text — center */}
          <div className="flex-1 hidden md:flex justify-center px-4">
            <p className="text-xs text-gray-500 text-center">
              LET OP: Psilocybine truffels zijn psychedelisch. Niet geschikt voor personen onder de 18 jaar.
            </p>
          </div>

          {/* Right: Desktop nav + icons */}
          <div className="flex items-center gap-3 ml-auto">
            <div className="hidden lg:flex items-center gap-5 mr-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-600 hover:text-primary transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <button
              aria-label="Zoeken"
              onClick={() => setSearchOpen(true)}
              className="p-1 hover:opacity-70 transition-opacity"
            >
              <Search className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
            </button>

            <Link href="/account" className="p-1 hover:opacity-70 transition-opacity" aria-label="Account">
              <User className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
            </Link>

            <button
              onClick={() => setCartOpen(true)}
              className="relative p-1 hover:opacity-70 transition-opacity"
              aria-label={`Winkelwagen (${itemCount} items)`}
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {itemCount > 9 ? "9+" : itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-gray-100 bg-white">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-6 py-4 text-sm text-gray-700 hover:bg-gray-50 border-b border-gray-100 last:border-0 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-6 py-4 border-t border-gray-100">
              <p className="text-xs text-gray-400">
                LET OP: Psilocybine truffels zijn psychedelisch. Niet geschikt voor personen onder de 18 jaar.
              </p>
            </div>
          </div>
        )}
      </nav>

      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}
