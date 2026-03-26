"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowRight, CheckCircle } from "lucide-react"

const footerLinks = {
  Shop: [
    { href: "/products?category=truffels", label: "Truffels" },
    { href: "/products?category=growkits", label: "Growkits" },
    { href: "/products?category=microdosering", label: "Microdosering" },
    { href: "/products?category=accessoires", label: "Accessoires" },
  ],
  Info: [
    { href: "/about", label: "Over Ons" },
    { href: "/blog", label: "Kennisbank" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacybeleid" },
    { href: "/terms", label: "Algemene Voorwaarden" },
    { href: "/disclaimer", label: "Disclaimer" },
    { href: "/cookies", label: "Cookiebeleid" },
  ],
}

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (res.ok) setSubscribed(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">

        {/* Newsletter banner */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 mb-10">
          <div className="max-w-xl">
            <h3 className="font-display font-bold text-lg text-gray-900 mb-1">
              Ontvang exclusieve aanbiedingen
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Nieuwe producten, kortingsacties en gidsen — max. 2 e-mails per maand.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                <CheckCircle className="w-4 h-4" />
                Gelukt! Je staat nu op de lijst.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jouw@email.nl"
                  className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-1.5 bg-primary text-white text-sm font-bold px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-60 whitespace-nowrap"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                  Aanmelden
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <p className="font-display font-black text-sm text-primary uppercase tracking-widest mb-3">
              Magicmushies
            </p>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              Veilige, legale truffels en microdoseer producten — discreet aan je deur bezorgd.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-3">
                {category}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-gray-400">
          <p>© 2026 Magicmushies. Alle rechten voorbehouden.</p>
          <p className="text-center md:text-right">
            Truffels zijn 100% legaal in Nederland. Alleen voor 18+. Niet geschikt bij zwangerschap of medicijngebruik.
          </p>
        </div>
      </div>
    </footer>
  )
}
