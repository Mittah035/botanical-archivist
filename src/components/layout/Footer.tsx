import Link from "next/link"
import { Separator } from "@/components/ui/separator"

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
  return (
    <footer className="bg-primary text-white/80 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="col-span-3 md:col-span-1">
            <p className="text-white font-black text-sm uppercase tracking-[0.2em] font-display mb-4">
              Magicmushies
            </p>
            <p className="text-sm leading-relaxed text-white/60 max-w-xs">
              Veilige, legale truffels en microdoseer producten — getest in
              Europese laboratoria en discreet aan je deur bezorgd.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="text-white/40 text-xs uppercase tracking-[0.15em] mb-4 font-medium">
                {category}
              </p>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="bg-white/10 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2026 Magicmushies. Alle rechten voorbehouden.</p>
          <p>Verse truffels zijn 100% legaal in Nederland. Alleen voor 18+. Niet geschikt bij zwangerschap of medicijngebruik.</p>
        </div>
      </div>
    </footer>
  )
}
