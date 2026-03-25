"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function AgeVerification() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (process.env.NODE_ENV === "development") return
    const verified = localStorage.getItem("age-verified")
    if (!verified) {
      setShow(true)
    }
  }, [])

  function handleAccept() {
    localStorage.setItem("age-verified", "true")
    setShow(false)
  }

  function handleDecline() {
    window.location.href = "https://www.google.com"
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: "rgba(1,45,29,0.97)" }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", damping: 20 }}
            className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl"
          >
            <div className="text-5xl mb-4">🍄</div>
            <h2 className="font-display text-2xl font-bold text-primary mb-2">
              Leeftijdsverificatie
            </h2>
            <p className="text-foreground/60 text-sm mb-6">
              Magicmushies verkoopt uitsluitend aan personen van{" "}
              <strong>18 jaar of ouder</strong>. Truffels zijn een legaal psychoactief product.
              Gebruik verantwoordelijk.
            </p>
            <div className="bg-primary/5 rounded-xl p-4 mb-6 text-left">
              <p className="text-xs text-foreground/60 leading-relaxed">
                Door verder te gaan bevestig je dat je <strong>18 jaar of ouder</strong> bent,
                en dat je op de hoogte bent van de risico's en lokale wetgeving omtrent
                psilocybine truffels.
              </p>
            </div>
            <button
              onClick={handleAccept}
              className="w-full bg-primary text-white font-bold py-3.5 rounded-xl mb-3 hover:bg-primary/90 transition-colors"
            >
              Ja, ik ben 18 jaar of ouder
            </button>
            <button
              onClick={handleDecline}
              className="w-full text-foreground/40 text-sm hover:text-foreground/60 transition-colors"
            >
              Nee, ik ben jonger dan 18
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
