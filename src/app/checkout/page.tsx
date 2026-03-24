"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Check, ChevronRight, Lock, CreditCard, Landmark, ShieldCheck } from "lucide-react"
import { useCartStore } from "@/lib/store/cartStore"
import { formatPrice, calculateVat } from "@/lib/utils"

type Step = "contact" | "shipping" | "payment"

const steps: { id: Step; label: string }[] = [
  { id: "contact", label: "Gegevens" },
  { id: "shipping", label: "Bezorging" },
  { id: "payment", label: "Betaling" },
]

export default function CheckoutPage() {
  const router = useRouter()
  const { items, getTotal, clearCart } = useCartStore()
  const [currentStep, setCurrentStep] = useState<Step>("contact")
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "NL",
    paymentMethod: "ideal",
  })

  const total = getTotal()
  const shipping = total >= 5000 ? 0 : 450
  const grandTotal = total + shipping
  // BTW berekening: truffels 9%, rest 21% (NL Wet OB 1968)
  const vatAmount = calculateVat(grandTotal, 0.21) // conservatief 21% voor mixed cart

  function update(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function nextStep() {
    const order: Step[] = ["contact", "shipping", "payment"]
    const idx = order.indexOf(currentStep)
    if (idx < order.length - 1) setCurrentStep(order[idx + 1])
  }

  function prevStep() {
    const order: Step[] = ["contact", "shipping", "payment"]
    const idx = order.indexOf(currentStep)
    if (idx > 0) setCurrentStep(order[idx - 1])
  }

  async function handleOrder() {
    setLoading(true)
    // Simulate Mollie payment redirect
    await new Promise((r) => setTimeout(r, 1500))
    clearCart()
    router.push("/order-success")
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-surface-low pt-24 flex items-center justify-center">
        <div className="text-center">
          <p className="text-foreground/60 mb-4">Je winkelwagen is leeg.</p>
          <Link href="/products">
            <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold">
              Terug naar producten
            </button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-surface-low pt-24">
      <div className="max-w-5xl mx-auto px-6 md:px-20 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="text-3xl mb-2">🍄</div>
          <h1 className="font-display text-2xl font-bold text-primary">Botanical Archivist</h1>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {steps.map((step, i) => {
            const done = steps.findIndex((s) => s.id === currentStep) > i
            const active = step.id === currentStep
            return (
              <div key={step.id} className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-1">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      done
                        ? "bg-green-500 text-white"
                        : active
                        ? "bg-primary text-white"
                        : "bg-foreground/10 text-foreground/40"
                    }`}
                  >
                    {done ? <Check className="w-4 h-4" /> : i + 1}
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      active ? "text-primary" : "text-foreground/40"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className={`h-0.5 w-12 -mt-4 rounded ${done ? "bg-green-400" : "bg-foreground/10"}`}
                  />
                )}
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <AnimatePresence mode="wait">
                {currentStep === "contact" && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h2 className="font-display font-bold text-primary text-lg mb-4">Contactgegevens</h2>
                    <Field label="E-mailadres *" type="email" value={form.email} onChange={(v) => update("email", v)} placeholder="jouw@email.nl" />
                    <Field label="Telefoonnummer" type="tel" value={form.phone} onChange={(v) => update("phone", v)} placeholder="+31 6 12345678" />
                    <div className="text-xs text-foreground/40 bg-primary/5 rounded-lg p-3">
                      We sturen je bestelbevestiging en track & trace naar dit e-mailadres.
                    </div>
                  </motion.div>
                )}

                {currentStep === "shipping" && (
                  <motion.div
                    key="shipping"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h2 className="font-display font-bold text-primary text-lg mb-4">Bezorgadres</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <Field label="Voornaam *" value={form.firstName} onChange={(v) => update("firstName", v)} placeholder="Jan" />
                      <Field label="Achternaam *" value={form.lastName} onChange={(v) => update("lastName", v)} placeholder="de Vries" />
                    </div>
                    <Field label="Straat + huisnummer *" value={form.address} onChange={(v) => update("address", v)} placeholder="Herengracht 1" />
                    <div className="grid grid-cols-2 gap-4">
                      <Field label="Postcode *" value={form.postalCode} onChange={(v) => update("postalCode", v)} placeholder="1234 AB" />
                      <Field label="Stad *" value={form.city} onChange={(v) => update("city", v)} placeholder="Amsterdam" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider">Land</label>
                      <select
                        value={form.country}
                        onChange={(e) => update("country", e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-foreground/15 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="NL">Nederland</option>
                        <option value="BE">België</option>
                        <option value="DE">Duitsland</option>
                      </select>
                    </div>
                    <div className="text-xs text-foreground/40 bg-primary/5 rounded-lg p-3">
                      📦 Discreet verpakt — de inhoud staat niet op de buitenkant.
                    </div>
                  </motion.div>
                )}

                {currentStep === "payment" && (
                  <motion.div
                    key="payment"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-4"
                  >
                    <h2 className="font-display font-bold text-primary text-lg mb-4">Betaalmethode</h2>
                    {[
                      { id: "ideal", icon: Landmark, label: "iDEAL", desc: "Directe bankoverschrijving" },
                      { id: "card", icon: CreditCard, label: "Creditcard / Debitcard", desc: "Visa, Mastercard" },
                    ].map((m) => (
                      <label
                        key={m.id}
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                          form.paymentMethod === m.id
                            ? "border-primary bg-primary/5"
                            : "border-foreground/10 hover:border-primary/30"
                        }`}
                      >
                        <input
                          type="radio"
                          name="payment"
                          value={m.id}
                          checked={form.paymentMethod === m.id}
                          onChange={() => update("paymentMethod", m.id)}
                          className="hidden"
                        />
                        <m.icon className={`w-5 h-5 ${form.paymentMethod === m.id ? "text-primary" : "text-foreground/40"}`} />
                        <div>
                          <p className="font-medium text-sm">{m.label}</p>
                          <p className="text-xs text-foreground/50">{m.desc}</p>
                        </div>
                        {form.paymentMethod === m.id && (
                          <Check className="w-4 h-4 text-primary ml-auto" />
                        )}
                      </label>
                    ))}

                    <div className="flex items-center gap-2 text-xs text-foreground/40 mt-4">
                      <Lock className="w-3.5 h-3.5" />
                      Beveiligde betaling via Mollie — PCI DSS compliant
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-foreground/10">
                {currentStep !== "contact" ? (
                  <button
                    onClick={prevStep}
                    className="text-sm text-foreground/60 hover:text-primary transition-colors"
                  >
                    ← Vorige stap
                  </button>
                ) : (
                  <div />
                )}

                {currentStep !== "payment" ? (
                  <button
                    onClick={nextStep}
                    className="flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
                  >
                    Volgende
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleOrder}
                    disabled={loading}
                    className="flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Betaling verwerken...
                      </>
                    ) : (
                      <>
                        <Lock className="w-4 h-4" />
                        Bestelling plaatsen
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-5 shadow-card">
              <h3 className="font-bold text-primary mb-4 text-sm uppercase tracking-wider">
                Jouw bestelling
              </h3>
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-xl flex-shrink-0">
                      {item.image}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-primary truncate">{item.name}</p>
                      <p className="text-xs text-foreground/40">× {item.quantity}</p>
                    </div>
                    <span className="text-xs font-bold text-primary">{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-foreground/10 pt-3 space-y-2 text-xs">
                <div className="flex justify-between text-foreground/60">
                  <span>Subtotaal</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-foreground/60">
                  <span>Verzending</span>
                  <span className={shipping === 0 ? "text-green-600 font-medium" : ""}>
                    {shipping === 0 ? "Gratis" : formatPrice(shipping)}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-primary pt-1 border-t border-foreground/10">
                  <span>Totaal</span>
                  <span className="text-base">{formatPrice(grandTotal)}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-4 text-xs text-foreground/40">
                <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                SSL beveiligd — uw gegevens zijn veilig
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

function Field({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  label: string
  type?: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-foreground/60 mb-1.5 uppercase tracking-wider">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 rounded-xl border border-foreground/15 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40 transition-all"
      />
    </div>
  )
}
