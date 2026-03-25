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
        a: "Ja, volledig legaal. Verse psilocybine truffels (ook wel sclerotia) vallen niet onder de Opiumwet en zijn vrij te kopen en te gebruiken in Nederland. Let op: gedroogde paddenstoelen zijn wél verboden. Wij verkopen uitsluitend vers product.",
      },
      {
        q: "Hoe weet ik dat jullie producten veilig zijn?",
        a: "Elk product wordt getest door onafhankelijke, gecertificeerde Europese laboratoria op psilocybine-gehalte, zuiverheid en eventuele schadelijke stoffen. Je kunt het batch-certificaat van je product altijd opvragen via info@magicmushies.nl.",
      },
      {
        q: "Wat is het verschil tussen de truffelsoorten?",
        a: "De soorten verschillen in sterkte (potentie) en effect. Mexicana is de mildste soort — ideaal als je voor het eerst truffels probeert. Atlantis zit in het midden. Hollandia en Valhalla zijn de sterkste soorten en alleen geschikt voor mensen met ervaring. Op elke productpagina vind je een duidelijke sterktemeter.",
      },
      {
        q: "Hoe lang zijn truffels houdbaar?",
        a: "Ongeopend zijn verse truffels 2 tot 3 maanden houdbaar in de koelkast (2–4°C). Eenmaal geopend kun je ze het beste binnen 1 à 2 maanden opgebruiken.",
      },
    ],
  },
  {
    category: "Bestellen & Bezorging",
    items: [
      {
        q: "Wanneer ontvang ik mijn bestelling?",
        a: "Bestel je voor 14:00 uur? Dan wordt je pakket dezelfde dag verzonden via PostNL en ontvang je het binnen 1 tot 3 werkdagen. Je ontvangt een track & trace code zodra je pakket onderweg is.",
      },
      {
        q: "Is de verpakking echt discreet?",
        a: "Ja, altijd. We verzenden in neutrale bruine dozen zonder enige vermelding van de inhoud. De afzender op het pakket is een anonieme code — er staat niets op wat verwijst naar onze winkel of het product.",
      },
      {
        q: "Kan ik ook afhalen?",
        a: "Nee, wij zijn een puur online winkel en bieden geen afhaaloptie aan.",
      },
      {
        q: "Wat zijn de verzendkosten?",
        a: "De standaard verzendkosten zijn €4,50. Bij bestellingen van €50 of meer is de verzending gratis. We bezorgen in Nederland en België.",
      },
    ],
  },
  {
    category: "Veiligheid & Gebruik",
    items: [
      {
        q: "Kan ik truffels gebruiken als ik antidepressiva slik?",
        a: "Nee. Het combineren van psilocybine met SSRI's, MAOI's of lithium is gevaarlijk en kan ernstige bijwerkingen veroorzaken. Raadpleeg altijd een arts als je medicijnen gebruikt. Houd er ook rekening mee dat SSRI's de werking van psilocybine sterk verminderen.",
      },
      {
        q: "Hoeveel moet ik nemen als beginner?",
        a: "Begin laag. Voor een lichte eerste ervaring: 5–7g truffels in een veilige, bekende omgeving. Voor microdosering: start met 0.1g. Verhoog de dosis nooit tijdens dezelfde sessie — probeer een hogere dosis pas bij een volgende keer.",
      },
      {
        q: "Kan ik verslaafd raken aan psilocybine?",
        a: "Nee, psilocybine veroorzaakt geen fysieke afhankelijkheid. Je bouwt ook snel tolerantie op, waardoor dagelijks gebruik geen zin heeft. Psychologische afhankelijkheid is theoretisch mogelijk maar wordt in de praktijk zelden gerapporteerd.",
      },
      {
        q: "Wat doe ik als de ervaring te intensief wordt?",
        a: "Ga naar een rustige, veilige plek en ga liggen. Haal langzaam en diep adem. Onthoud: de effecten zijn tijdelijk en gaan vanzelf over. Zorg altijd voor een nuchter iemand die je vertrouwt in de buurt. Bij een medische noodsituatie bel je 112.",
      },
    ],
  },
  {
    category: "Betaling & Retour",
    items: [
      {
        q: "Welke betaalmethoden accepteren jullie?",
        a: "Je kunt betalen via iDEAL of creditcard (Visa / Mastercard) via ons betaalplatform Mollie. Alle betalingen zijn SSL-beveiligd en PCI DSS-gecertificeerd.",
      },
      {
        q: "Kan ik mijn bestelling annuleren of retourneren?",
        a: "Je kunt een bestelling annuleren zolang die nog niet is verzonden. Stuur ons zo snel mogelijk een bericht via info@magicmushies.nl met je ordernummer. Vanwege de versheid van de producten accepteren we geen retourzendingen na levering.",
      },
      {
        q: "Hebben jullie een loyaliteitsprogramma?",
        a: "Nog niet, maar we werken eraan. Schrijf je in voor onze nieuwsbrief en je bent de eerste die het weet zodra we iets lanceeren.",
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
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c1ecd4] mb-3 block font-medium">Hulp nodig?</span>
            <h1 className="font-display text-4xl font-extrabold mb-3">Veelgestelde vragen</h1>
            <p className="text-white/60">Snel antwoord op vragen over onze producten, bezorging, veilig gebruik en betaling. Staat jouw vraag er niet bij? Mail ons via info@magicmushies.nl.</p>
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
