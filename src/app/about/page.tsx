import Image from "next/image"
import { FadeIn } from "@/components/animations/FadeIn"
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren"
import { Leaf, Shield, FlaskConical, Heart } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "100% Legaal & Vers",
    desc: "Wij verkopen uitsluitend verse psilocybine truffels — volledig legaal in Nederland. Geen gedroogde producten, geen extracten. Altijd vers, altijd betrouwbaar.",
  },
  {
    icon: FlaskConical,
    title: "Getest door onafhankelijke laboratoria",
    desc: "Elk product wordt door gecertificeerde Europese laboratoria gecontroleerd op psilocybine-gehalte, zuiverheid en veiligheid. Batch-certificaten zijn beschikbaar op aanvraag.",
  },
  {
    icon: Shield,
    title: "Jouw veiligheid staat voorop",
    desc: "We geven je eerlijke informatie over veilig gebruik, dosering en set & setting. Ons team staat klaar om je te helpen — ook bij twijfel.",
  },
  {
    icon: Heart,
    title: "Educatie, niet alleen verkoop",
    desc: "We helpen je begrijpen wat je koopt en hoe je het verantwoord gebruikt. Onze kennisbank, gidsen en FAQ zijn gratis beschikbaar voor iedereen.",
  },
]

const team = [
  { name: "Kwaliteitscontrole", role: "Mycologie & productselectie", emoji: "🍄" },
  { name: "Laboratorium", role: "Testing & productontwikkeling", emoji: "⚗️" },
  { name: "Klantbegeleiding", role: "Veilig gebruik & harm reduction", emoji: "🧭" },
]

export const metadata = {
  title: "Over Ons — Magicmushies",
  description: "Wie zijn wij? Lees ons verhaal, onze waarden en waarom meer dan 2.400 klanten bij ons bestellen.",
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
            <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Wie zijn wij?
            </h1>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
              Magicmushies is opgericht vanuit één doel: mensen toegang geven tot
              veilige, legale en hoogwaardige psilocybine producten — met de
              informatie die je nodig hebt om ze verantwoord te gebruiken.
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
                  Waarom kiezen klanten voor Magicmushies?
                </h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  In de meeste webshops bestel je anoniem — zonder te weten wat je
                  precies krijgt, en zonder hulp als je vragen hebt. Wij doen het anders.
                </p>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Psilocybine truffels zijn volledig legaal in Nederland en worden steeds
                  meer erkend als middel voor mentale gezondheid. Toch is goede informatie
                  schaars. Wij vullen die gap: eerlijk, duidelijk en veilig.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  Van beginners tot gevorderden — we helpen je het goede product te kiezen
                  en zorgen dat je weet hoe je het veilig en verantwoord gebruikt.
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
            <h2 className="font-display text-3xl font-bold text-primary mb-2">Ons Team</h2>
            <p className="text-foreground/60">Gedreven door kennis, nieuwsgierigheid en verantwoordelijkheid.</p>
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
                Magicmushies verkoopt uitsluitend verse psilocybine truffels die volledig legaal zijn in Nederland.
                Onze producten zijn alleen bestemd voor personen van 18 jaar en ouder. Wij leveren niet aan
                landen waar het bezit van psilocybine strafbaar is. Raadpleeg altijd onze <a href="/disclaimer" className="underline">volledige disclaimer</a> voor meer informatie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
