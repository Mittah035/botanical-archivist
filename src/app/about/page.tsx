import Image from "next/image"
import { FadeIn } from "@/components/animations/FadeIn"
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren"
import { Leaf, Shield, FlaskConical, Heart } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "100% Legaal & Natuurlijk",
    desc: "Wij werken uitsluitend met verse, onverwerkte psilocybine truffels — legaal in Nederland onder de huidige wetgeving. Geen gedroogde producten, geen extracten.",
  },
  {
    icon: FlaskConical,
    title: "Lab-getest & Gekalibreerd",
    desc: "Elk product wordt getest door gecertificeerde Europese laboratoria op potentie, zuiverheid en veiligheid. Batch-certificaten beschikbaar op aanvraag.",
  },
  {
    icon: Shield,
    title: "Veiligheid Voorop",
    desc: "Wij informeren klanten over veilig gebruik, set & setting, en integratie. Ons team staat klaar met evidence-based harm reduction informatie.",
  },
  {
    icon: Heart,
    title: "Community & Educatie",
    desc: "Magicmushies is meer dan een webshop. We bouwen een educatieve community rond verantwoord psychedelisch gebruik en persoonlijke groei.",
  },
]

const team = [
  { name: "Archivaris", role: "Mycologie & Kwaliteitscontrole", emoji: "🍄" },
  { name: "Alchemist", role: "Lab & Productontwikkeling", emoji: "⚗️" },
  { name: "Gids", role: "Harm Reduction & Educatie", emoji: "🧭" },
]

export const metadata = {
  title: "Over Ons — Magicmushies",
  description: "Leer meer over Magicmushies — ons verhaal, onze waarden en onze toewijding aan veilige, legale en kwalitatieve psilocybine producten.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface-low pt-24">
      {/* Hero */}
      <section className="bg-primary text-white py-24 px-6 md:px-20 overflow-hidden relative">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-container/20 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto relative">
          <FadeIn>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c1ecd4] mb-4 block font-medium">
              Ons Verhaal
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-6 italic leading-tight">
              Het Archief van de Natuur
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Magicmushies werd geboren uit een eenvoudige overtuiging: dat de
              krachtigste medicinale stoffen die de natuur ons geeft, toegankelijk
              moeten zijn op een veilige, educatieve en legale manier.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <Image
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
                  alt="Botanisch bos — het verhaal van Magicmushies"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <h2 className="font-display text-2xl font-bold text-primary mb-4">
                  Waarom Magicmushies?
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  In een markt vol anonieme webshops misten wij iets: een merk dat serieus
                  omgaat met educatie, kwaliteit en de unieke wetgeving in Nederland.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Psilocybine truffels zijn legaal in Nederland en wetenschappelijk steeds
                  beter onderbouwd als middel voor mentale gezondheid. Toch ontbreekt
                  vaak kwalitatieve informatie en betrouwbare producten.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Wij archiveren de beste soorten, protocollen en kennis — voor de
                  recreatieve gebruiker én de serieuze onderzoeker.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-primary">Onze Waarden</h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="bg-surface-low rounded-2xl p-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <v.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-primary mb-2">{v.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <FadeIn className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-primary mb-2">Het Team</h2>
            <p className="text-foreground/60">Gedreven door nieuwsgierigheid, kennis en verantwoordelijkheid.</p>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((member) => (
              <StaggerItem key={member.name}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-card">
                  <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    {member.emoji}
                  </div>
                  <h3 className="font-display font-bold text-primary">{member.name}</h3>
                  <p className="text-xs text-foreground/50 mt-1">{member.role}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Legal disclaimer */}
      <section className="py-10 px-6 md:px-20 bg-amber-50 border-t border-amber-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-4 items-start">
            <Shield className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-amber-800 mb-1">Wettelijke Verklaring</p>
              <p className="text-xs text-amber-700 leading-relaxed">
                Magicmushies verkoopt uitsluitend verse psilocybine truffels die legaal zijn
                in Nederland. Verkoop is voorbehouden aan personen van 18+. Wij verkopen niet aan
                personen in landen waar het bezit strafbaar is. Lees onze volledige disclaimer voor meer informatie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
