"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from "lucide-react"
import { useCartStore } from "@/lib/store/cartStore"
import { formatPrice } from "@/lib/utils"

interface CartDrawerProps {
  open: boolean
  onClose: () => void
}

export function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, removeItem, updateQuantity, getTotal, getItemCount } = useCartStore()

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-foreground/10">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-primary" />
                <span className="font-display font-bold text-primary">
                  Winkelwagen ({getItemCount()})
                </span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-foreground/5 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-4xl mb-3">🛒</div>
                  <p className="text-foreground/60 text-sm">Je winkelwagen is leeg</p>
                  <button
                    onClick={onClose}
                    className="mt-4 text-primary text-sm font-medium underline-offset-2 hover:underline"
                  >
                    Bekijk producten
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 bg-surface-low rounded-xl p-3">
                    <div className="w-14 h-14 rounded-lg bg-primary/5 flex items-center justify-center text-2xl flex-shrink-0">
                      {item.image}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-primary truncate">{item.name}</p>
                      <p className="text-xs text-foreground/60">{formatPrice(item.price)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 rounded-lg border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 rounded-lg border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-colors text-foreground/30"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-foreground/10 space-y-3">
                <div className="flex items-center justify-between text-sm text-foreground/60">
                  <span>Verzending</span>
                  <span className="text-primary font-medium">
                    {getTotal() >= 5000 ? "Gratis" : formatPrice(450)}
                  </span>
                </div>
                <div className="flex items-center justify-between font-bold text-primary">
                  <span>Totaal</span>
                  <span className="text-xl">
                    {formatPrice(getTotal() >= 5000 ? getTotal() : getTotal() + 450)}
                  </span>
                </div>
                {getTotal() < 5000 && (
                  <p className="text-xs text-foreground/40 text-center">
                    Nog {formatPrice(5000 - getTotal())} voor gratis verzending
                  </p>
                )}
                <Link href="/checkout" onClick={onClose}>
                  <button className="w-full bg-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors mt-2">
                    Afrekenen
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/cart" onClick={onClose}>
                  <button className="w-full border border-primary/20 text-primary font-medium py-3 rounded-xl hover:bg-primary/5 transition-colors text-sm">
                    Winkelwagen bekijken
                  </button>
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
