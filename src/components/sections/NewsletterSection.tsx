"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, ArrowRight, CheckCircle } from "lucide-react"
import { FadeIn } from "@/components/animations/FadeIn"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 800))
    setSubscribed(true)
    setLoading(false)
  }

  return (
    <section className="py-24 px-6 md:px-20 bg-surface-low">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-2xl mb-6">
            <Mail className="w-7 h-7 text-primary" />
          </div>
          <h2 className="font-display text-3xl font-bold text-primary mb-3">
            Het Archief Nieuwsbrief
          </h2>
          <p className="text-foreground/60 mb-8 leading-relaxed">
            Ontvang als eerste nieuwe producten, seizoensaanbiedingen, en
            educatieve guides over veilig gebruik — maximaal 2x per maand.
          </p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 text-green-600 bg-green-50 rounded-2xl p-5"
            >
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">Aangemeld! Welkom in het archief.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jouw@email.nl"
                className="flex-1 px-4 py-3.5 rounded-xl border border-foreground/15 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white"
              />
              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 bg-primary text-white font-bold px-5 py-3.5 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-60 whitespace-nowrap"
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

          <p className="text-xs text-foreground/40 mt-4">
            Geen spam. Afmelden kan altijd. Zie onze{" "}
            <a href="/privacy" className="hover:text-primary underline-offset-2 hover:underline">
              privacyverklaring
            </a>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
