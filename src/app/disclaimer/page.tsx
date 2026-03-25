export const metadata = {
  title: "Disclaimer — Magicmushies",
  description: "Disclaimer van Magicmushies over het gebruik van onze website en producten.",
}

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-surface-low pt-24">
      <div className="max-w-3xl mx-auto px-6 md:px-20 py-16">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card">
          <h1 className="font-display text-3xl font-bold text-primary mb-2">Disclaimer</h1>
          <p className="text-sm text-foreground/40 mb-8">Geldig vanaf 1 januari 2025</p>

          <div className="space-y-6 text-sm text-foreground/70 leading-relaxed">
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
              <p className="font-bold text-amber-800 mb-2">⚠️ Belangrijke mededeling</p>
              <p className="text-amber-700">
                Psilocybine truffels zijn een krachtig psychoactief product. Gebruik uitsluitend als u meerderjarig
                bent, in goede mentale en fysieke gezondheid verkeert, en op de hoogte bent van de risico&apos;s.
              </p>
            </div>

            <Section title="Medisch Advies">
              <p>De informatie op deze website is uitsluitend bedoeld voor educatieve doeleinden en vormt geen medisch advies. Raadpleeg altijd een arts voordat u psilocybine producten gebruikt, zeker als u:</p>
              <ul className="list-disc pl-4 space-y-1 mt-2">
                <li>Medicijnen gebruikt, met name SSRI&apos;s, MAOI&apos;s of lithium</li>
                <li>Een (familiegeschiedenis van) psychose, schizofrenie of bipolaire stoornis heeft</li>
                <li>Zwanger bent of borstvoeding geeft</li>
                <li>Hart- of leveraandoeningen heeft</li>
              </ul>
            </Section>

            <Section title="Wetgeving">
              <p>Verse psilocybine truffels zijn legaal in Nederland. Magicmushies verkoopt uitsluitend aan Nederlandse ingezetenen van 18+. De klant is verantwoordelijk voor het naleven van de lokale wetgeving. In veel landen zijn psilocybine producten illegaal.</p>
            </Section>

            <Section title="Gebruik & Risico&apos;s">
              <p>Psychedelica kunnen angst, paranoia en psychologisch ongemak veroorzaken, met name bij:</p>
              <ul className="list-disc pl-4 space-y-1 mt-2">
                <li>Hoge doseringen</li>
                <li>Onveilige omgevingen (set & setting)</li>
                <li>Combinatie met alcohol of andere drugs</li>
                <li>Onderliggende psychische kwetsbaarheid</li>
              </ul>
            </Section>

            <Section title="Aansprakelijkheid">
              <p>Magicmushies is niet aansprakelijk voor:</p>
              <ul className="list-disc pl-4 space-y-1 mt-2">
                <li>Schade als gevolg van onjuist gebruik van producten</li>
                <li>Juridische consequenties bij gebruik buiten Nederland</li>
                <li>Psychologische effecten van het gebruik</li>
                <li>Interacties met medicijnen</li>
              </ul>
            </Section>

            <Section title="Harm Reduction">
              <p>Bij psychologisch ongemak na gebruik: zoek een rustige omgeving, haal diep adem, en vertrouw erop dat de effecten tijdelijk zijn. Bel bij ernstige nood 112 of de landelijke GGZ Crisislijn: 0900-0767.</p>
            </Section>
          </div>
        </div>
      </div>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display font-bold text-primary text-base mb-3">{title}</h2>
      <div>{children}</div>
    </div>
  )
}
