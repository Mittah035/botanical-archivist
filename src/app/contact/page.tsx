"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MessageSquare, Clock, Shield, Send, CheckCircle } from "lucide-react"
import { FadeIn } from "@/components/animations/FadeIn"

const contactInfo = [
  {
    icon: Mail,
    title: "E-mail",
    value: "info@magicmushies.nl",
    desc: "Reactie binnen 1 werkdag",
  },
  {
    icon: Clock,
    title: "Openingstijden",
    value: "Ma–Vr 09:00–17:00",
    desc: "Gesloten op feestdagen",
  },
  {
    icon: Shield,
    title: "Veilig & Discreet",
    value: "Vertrouwelijk contact",
    desc: "Wij behandelen uw vragen met respect",
  },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })

  function update(k: string, v: string) {
    setForm((f) => ({ ...f, [k]: v }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSent(true)
  }

  return (
    <main className="min-h-screen bg-surface-low pt-24">
      {/* Hero */}
      <section className="bg-primary text-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c1ecd4] mb-3 block font-medium">
              Contact
            </span>
            <h1 className="font-display text-4xl font-extrabold mb-3">Neem Contact Op</h1>
            <p className="text-white/60 max-w-xl">
              Vragen over producten, bestellingen of veilig gebruik? Ons team staat
              klaar om je te helpen.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <FadeIn key={info.title} delay={0.1}>
                <div className="bg-white rounded-2xl p-5 shadow-card">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs uppercase tracking-wider text-foreground/40 mb-1">{info.title}</p>
                  <p className="font-bold text-primary text-sm">{info.value}</p>
                  <p className="text-xs text-foreground/50 mt-0.5">{info.desc}</p>
                </div>
              </FadeIn>
            ))}

            <FadeIn delay={0.3}>
              <div className="bg-primary/5 rounded-2xl p-5 border border-primary/10">
                <MessageSquare className="w-5 h-5 text-primary mb-2" />
                <p className="text-sm font-bold text-primary mb-1">Harm Reduction</p>
                <p className="text-xs text-foreground/60 leading-relaxed">
                  Heb je een moeilijke ervaring of vragen over veilig gebruik? We
                  verbinden je met erkende harm reduction professionals.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-card">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h2 className="font-display text-xl font-bold text-primary mb-2">
                    Bericht verstuurd!
                  </h2>
                  <p className="text-foreground/60 text-sm">
                    We reageren binnen 1 werkdag op je bericht.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="font-display font-bold text-primary text-lg mb-4">
                    Stuur een bericht
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider">
                        Naam *
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => update("name", e.target.value)}
                        placeholder="Jouw naam"
                        className="w-full px-4 py-3 rounded-xl border border-foreground/15 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider">
                        E-mail *
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        placeholder="jouw@email.nl"
                        className="w-full px-4 py-3 rounded-xl border border-foreground/15 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider">
                      Onderwerp
                    </label>
                    <select
                      value={form.subject}
                      onChange={(e) => update("subject", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-foreground/15 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Selecteer onderwerp</option>
                      <option>Vraag over product</option>
                      <option>Status bestelling</option>
                      <option>Retour & restitutie</option>
                      <option>Veilig gebruik / harm reduction</option>
                      <option>Samenwerking / wholesale</option>
                      <option>Anders</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider">
                      Bericht *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="Beschrijf je vraag of opmerking..."
                      className="w-full px-4 py-3 rounded-xl border border-foreground/15 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 bg-primary text-white font-bold px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {loading ? "Versturen..." : "Verstuur bericht"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
