"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ShoppingBag, Plus, Minus, Trash2, ArrowRight, Shield, Truck, ChevronLeft } from "lucide-react"
import { useCartStore } from "@/lib/store/cartStore"
import { formatPrice } from "@/lib/utils"
import { FadeIn } from "@/components/animations/FadeIn"

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal, clearCart } = useCartStore()
  const total = getTotal()
  const shipping = total >= 5000 ? 0 : 450
  const grandTotal = total + shipping

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-surface-low pt-24 flex items-center justify-center">
        <FadeIn className="text-center py-20">
          <div className="text-6xl mb-4">🛒</div>
          <h1 className="font-display text-2xl font-bold text-primary mb-2">
            Je winkelwagen is leeg
          </h1>
          <p className="text-foreground/60 mb-8">
            Ontdek ons archief van premium psychedelische producten.
          </p>
          <Link href="/products">
            <button className="bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors">
              Bekijk producten
            </button>
          </Link>
        </FadeIn>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-surface-low pt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-10">
        <FadeIn className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-primary mb-4 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Verder winkelen
          </Link>
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-primary" />
            <h1 className="font-display text-3xl font-bold text-primary">Winkelwagen</h1>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-2xl p-4 shadow-card flex items-center gap-4"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/5 flex items-center justify-center text-3xl flex-shrink-0">
                  {item.image}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-primary text-sm truncate">{item.name}</p>
                  <p className="text-sm text-foreground/60">{formatPrice(item.price)} per stuk</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-lg border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-sm font-bold w-6 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-lg border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                <div className="text-right min-w-[70px]">
                  <p className="font-bold text-primary">{formatPrice(item.price * item.quantity)}</p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-red-50 hover:text-red-500 transition-colors text-foreground/30"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </motion.div>
            ))}

            <button
              onClick={clearCart}
              className="text-xs text-foreground/40 hover:text-red-500 transition-colors underline-offset-2 hover:underline"
            >
              Winkelwagen leegmaken
            </button>
          </div>

          {/* Summary */}
          <div>
            <div className="bg-white rounded-2xl p-6 shadow-card sticky top-24">
              <h2 className="font-display font-bold text-primary text-lg mb-6">Overzicht</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">Subtotaal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-foreground/60">Verzending</span>
                  <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>
                    {shipping === 0 ? "Gratis" : formatPrice(shipping)}
                  </span>
                </div>
                {total < 5000 && (
                  <p className="text-xs text-foreground/40 bg-primary/5 rounded-lg px-3 py-2">
                    Nog {formatPrice(5000 - total)} voor gratis verzending
                  </p>
                )}
                <div className="border-t border-foreground/10 pt-3 flex justify-between font-bold text-primary">
                  <span>Totaal (incl. BTW)</span>
                  <span className="text-xl">{formatPrice(grandTotal)}</span>
                </div>
              </div>

              <Link href="/checkout">
                <button className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors mb-4">
                  Afrekenen
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>

              {/* Trust */}
              <div className="space-y-2">
                {[
                  { icon: Shield, text: "Veilig betalen via iDEAL & creditcard" },
                  { icon: Truck, text: "Discreet bezorgd binnen 1-3 werkdagen" },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-xs text-foreground/50">
                    <Icon className="w-3.5 h-3.5 text-primary" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
