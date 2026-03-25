export const metadata = {
  title: "Cookiebeleid — Magicmushies",
  description: "Ons cookiebeleid beschrijft welke cookies wij gebruiken en waarom.",
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-surface-low pt-24">
      <div className="max-w-3xl mx-auto px-6 md:px-20 py-16">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card">
          <h1 className="font-display text-3xl font-bold text-primary mb-2">Cookiebeleid</h1>
          <p className="text-sm text-foreground/40 mb-8">Geldig vanaf 1 januari 2025</p>

          <div className="space-y-6 text-sm text-foreground/70 leading-relaxed">
            <Section title="Wat zijn cookies?">
              <p>Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u onze website bezoekt. Ze helpen ons de website te laten functioneren en uw ervaring te verbeteren.</p>
            </Section>

            <Section title="Soorten cookies die wij gebruiken">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-foreground/10">
                      <th className="text-left py-2 pr-4 font-semibold text-primary text-xs uppercase tracking-wider">Type</th>
                      <th className="text-left py-2 pr-4 font-semibold text-primary text-xs uppercase tracking-wider">Doel</th>
                      <th className="text-left py-2 font-semibold text-primary text-xs uppercase tracking-wider">Bewaartermijn</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-foreground/5">
                    {[
                      { type: "Essentieel", doel: "Winkelwagen, sessie, leeftijdsverificatie", termijn: "Sessie / 30 dagen" },
                      { type: "Functioneel", doel: "Taalvoorkeur, onthoud gebruiker", termijn: "1 jaar" },
                      { type: "Analytisch", doel: "Anoniem gebruiksstatistieken (geen tracking)", termijn: "26 maanden" },
                      { type: "Marketing", doel: "Niet gebruikt", termijn: "n.v.t." },
                    ].map((row) => (
                      <tr key={row.type}>
                        <td className="py-2 pr-4 font-medium text-primary">{row.type}</td>
                        <td className="py-2 pr-4">{row.doel}</td>
                        <td className="py-2">{row.termijn}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            <Section title="Essentiële cookies (altijd actief)">
              <ul className="list-disc pl-4 space-y-1">
                <li><strong>cart-storage:</strong> Inhoud winkelwagen — localStorage, sessieduur</li>
                <li><strong>age-verified:</strong> Leeftijdsverificatie — localStorage, 30 dagen</li>
              </ul>
              <p className="mt-2">Essentiële cookies kunnen niet worden uitgeschakeld. Ze zijn noodzakelijk voor het functioneren van de webshop.</p>
            </Section>

            <Section title="Analytische cookies">
              <p>Wij gebruiken geanonimiseerde analytics om te begrijpen hoe bezoekers onze site gebruiken. Er worden geen persoonlijke gegevens gekoppeld. IP-adressen worden volledig geanonimiseerd.</p>
            </Section>

            <Section title="Geen marketing- of tracking cookies">
              <p>Magicmushies plaatst geen cookies van derde partijen voor advertentie- of marketingdoeleinden. Wij retargeten onze bezoekers niet via Facebook, Google Ads of vergelijkbare platformen.</p>
            </Section>

            <Section title="Uw keuzes">
              <p>U kunt cookies beheren via uw browserinstellingen. Let op: het uitschakelen van essentiële cookies kan de werking van de webshop beïnvloeden.</p>
            </Section>

            <Section title="Vragen?">
              <p>Stuur uw vragen naar: info@magicmushies.nl</p>
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
      <h2 className="font-display font-bold text-primary text-base mb-2">{title}</h2>
      <div>{children}</div>
    </div>
  )
}
