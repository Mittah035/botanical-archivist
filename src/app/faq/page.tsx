"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { FadeIn } from "@/components/animations/FadeIn"

const faqs = [
  {
    category: "Producten & Kwaliteit",
    items: [
      {
        q: "Zijn psilocybine truffels legaal in Nederland?",
        a: "Ja. Verse psilocybine truffels (sclerotia) zijn volledig legaal in Nederland en vallen niet onder de Opiumwet. Gedroogde paddenstoelen zijn echter verboden. Wij verkopen uitsluitend vers product.",
      },
      {
        q: "Hoe worden jullie producten getest?",
        a: "Elk product wordt door gecertificeerde Europese laboratoria getest op psilocybine-concentratie, zuiverheid en de afwezigheid van schadelijke stoffen. Batch-certificaten zijn beschikbaar op aanvraag.",
      },
      {
        q: "Wat is het verschil tussen truffelsoorten?",
        a: "Truffels variëren in potentie (sterkte) en effect. Mexicana is mild en geschikt voor beginners. Atlantis is medium. Hollandia en Valhalla zijn de krachtigste soorten. Bekijk onze producten voor gedetailleerde beschrijvingen.",
      },
      {
        q: "Hoe lang zijn truffels houdbaar?",
        a: "Verse truffels zijn ongeopend 2-3 maanden houdbaar in de koelkast (2-4°C). Na opening consumeer je ze het beste binnen 1-2 maanden.",
      },
    ],
  },
  {
    category: "Bestellen & Bezorging",
    items: [
      {
        q: "Hoe snel ontvang ik mijn bestelling?",
        a: "Bestellingen geplaatst voor 14:00 worden dezelfde dag verwerkt en bezorgd binnen 1-3 werkdagen via PostNL.",
      },
      {
        q: "Is de verpakking discreet?",
        a: "Absoluut. Wij verzenden in neutraal bruine kartonnen dozen zonder vermelding van de inhoud. De afzender op het pakket is een neutrale code — niet herkenbaar als drugswinkel.",
      },
      {
        q: "Kan ik ook afhalen?",
        a: "Wij zijn uitsluitend een online webshop en bieden geen afhaalopties aan.",
      },
      {
        q: "Wat zijn de verzendkosten?",
        a: "€4,50 standaard. Gratis bij bestellingen boven €50,00. Bezorging alleen in Nederland en België.",
      },
    ],
  },
  {
    category: "Veiligheid & Gebruik",
    items: [
      {
        q: "Mag ik truffels gebruiken als ik antidepressiva neem?",
        a: "Nee. Psilocybine combineren met SSRI's, MAOI's of lithium is gevaarlijk. Raadpleeg altijd een arts. SSRI's verminderen ook de werking van psilocybine significant.",
      },
      {
        q: "Wat is een veilige startdosis?",
        a: "Voor beginners: 5-7g truffels in een vertrouwde omgeving. Microdosering: 0.1-0.3g. Begin altijd laag en verhoog pas bij een volgende ervaring.",
      },
      {
        q: "Kan ik verslaafd raken aan psilocybine?",
        a: "Psilocybine heeft een laag verslavingspotentieel en creëert geen fysieke afhankelijkheid. Tolerantie bouwt snel op, waardoor dagelijks gebruik zichzelf 'bestraft'. Psychologische afhankelijkheid is theoretisch mogelijk maar zeldzaam.",
      },
      {
        q: "Wat doe ik bij een moeilijke ervaring?",
        a: "Verplaats je naar een veilige, rustige omgeving. Lig down, haal diep adem, en vertrouw dat de effecten voorbijgaan. Heb een nuchter vertrouwenspersoon beschikbaar. Bel 112 bij medische nood.",
      },
    ],
  },
  {
    category: "Betaling & Account",
    items: [
      {
        q: "Welke betaalmethoden accepteren jullie?",
        a: "iDEAL en creditcard (Visa/Mastercard) via Mollie. Alle betalingen zijn beveiligd met SSL en PCI DSS compliant.",
      },
      {
        q: "Kan ik een bestelling annuleren?",
        a: "Bestellingen kunnen worden geannuleerd zolang ze nog niet zijn verzonden. Neem direct contact op via info@botanical-archivist.nl met je ordernummer.",
      },
      {
        q: "Hebben jullie een loyaliteitsprogramma?",
        a: "Nog niet, maar het staat op de roadmap. Meld je aan voor onze nieuwsbrief om als eerste op de hoogte te zijn.",
      },
    ],
  },
]

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <main className="min-h-screen bg-surface-low pt-24">
      <section className="bg-primary text-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c1ecd4] mb-3 block font-medium">Support</span>
            <h1 className="font-display text-4xl font-extrabold mb-3">Veelgestelde Vragen</h1>
            <p className="text-white/60">Alle antwoorden op je vragen over producten, bestellen, veiligheid en meer.</p>
          </FadeIn>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 md:px-20 py-16 space-y-12">
        {faqs.map((section) => (
          <FadeIn key={section.category}>
            <h2 className="font-display text-xl font-bold text-primary mb-4">{section.category}</h2>
            <div className="space-y-2">
              {section.items.map((item) => {
                const id = `${section.category}-${item.q}`
                const isOpen = open === id
                return (
                  <div key={item.q} className="bg-white rounded-xl overflow-hidden shadow-card">
                    <button
                      onClick={() => setOpen(isOpen ? null : id)}
                      className="w-full flex items-center justify-between p-5 text-left gap-4"
                    >
                      <span className="font-medium text-sm text-primary">{item.q}</span>
                      <ChevronDown className={`w-4 h-4 text-foreground/40 flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5">
                        <p className="text-sm text-foreground/60 leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </FadeIn>
        ))}
      </section>
    </main>
  )
}
