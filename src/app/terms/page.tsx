export const metadata = {
  title: "Algemene Voorwaarden — Botanical Archivist",
  description: "De algemene voorwaarden van Botanical Archivist voor aankopen en gebruik van onze website.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-surface-low pt-24">
      <div className="max-w-3xl mx-auto px-6 md:px-20 py-16">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card">
          <h1 className="font-display text-3xl font-bold text-primary mb-2">Algemene Voorwaarden</h1>
          <p className="text-sm text-foreground/40 mb-8">Versie 1.0 — Geldig vanaf 1 januari 2025</p>

          <div className="space-y-6">
            <Section title="Artikel 1 — Definities">
              <ul>
                <li><strong>Botanical Archivist:</strong> de webshop, gevestigd in Nederland</li>
                <li><strong>Klant:</strong> iedere meerderjarige (18+) persoon die een bestelling plaatst</li>
                <li><strong>Overeenkomst:</strong> de koopovereenkomst tussen Botanical Archivist en de klant</li>
                <li><strong>Producten:</strong> verse psilocybine truffels, growkits, microdoseer producten en accessoires</li>
              </ul>
            </Section>

            <Section title="Artikel 2 — Toepasselijkheid">
              <p>Deze voorwaarden zijn van toepassing op alle aanbiedingen en overeenkomsten van Botanical Archivist. Afwijkingen zijn alleen geldig indien schriftelijk overeengekomen.</p>
            </Section>

            <Section title="Artikel 3 — Leeftijdsverificatie">
              <p>Botanical Archivist verkoopt uitsluitend aan personen van 18 jaar of ouder. Door een bestelling te plaatsen bevestigt de klant meerderjarig te zijn. Botanical Archivist behoudt het recht een bestelling te annuleren bij gegronde twijfel over de leeftijd.</p>
            </Section>

            <Section title="Artikel 4 — Totstandkoming Overeenkomst">
              <p>Een overeenkomst komt tot stand op het moment dat de klant een bevestigingsmail ontvangt na het plaatsen van een bestelling. Botanical Archivist behoudt het recht bestellingen te weigeren zonder opgave van reden.</p>
            </Section>

            <Section title="Artikel 5 — Prijzen & Betaling">
              <ul>
                <li>Alle prijzen zijn inclusief 21% BTW, exclusief verzendkosten</li>
                <li>Verzending: €4,50 — gratis bij bestelling boven €50,00</li>
                <li>Betaling via iDEAL, Creditcard (Mollie B.V.)</li>
                <li>Betaling dient te geschieden voorafgaand aan verzending</li>
              </ul>
            </Section>

            <Section title="Artikel 6 — Levering">
              <p>Levering vindt plaats binnen 1-3 werkdagen na betalingsontvangst, via PostNL of DPD. Pakketten worden discreet verpakt. Bij niet-thuis worden ze naar een afhaalpunt gestuurd.</p>
            </Section>

            <Section title="Artikel 7 — Retourbeleid">
              <p>Vanwege de aard van de producten (bederfelijk, consumeerbaar) is retour niet mogelijk. Beschadigd of verkeerd geleverd product? Neem binnen 48 uur na ontvangst contact op met foto bewijs.</p>
            </Section>

            <Section title="Artikel 8 — Aansprakelijkheid">
              <p>Botanical Archivist is niet aansprakelijk voor schade als gevolg van onjuist gebruik van producten. De klant is verantwoordelijk voor het naleven van de lokale wetgeving. Onze aansprakelijkheid is in alle gevallen beperkt tot de orderwaarde.</p>
            </Section>

            <Section title="Artikel 9 — Legale Status">
              <p>Verse psilocybine truffels zijn legaal in Nederland. De klant is verantwoordelijk voor het naleven van de wetgeving in zijn/haar land of regio. Export naar landen waar psilocybine illegaal is, is niet toegestaan.</p>
            </Section>

            <Section title="Artikel 10 — Toepasselijk Recht">
              <p>Op alle overeenkomsten is Nederlands recht van toepassing. Geschillen worden voorgelegd aan de bevoegde rechter in Amsterdam.</p>
            </Section>

            <Section title="Artikel 11 — Contact">
              <p>Botanical Archivist, Nederland<br />E-mail: info@botanical-archivist.nl</p>
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
      <div className="text-sm text-foreground/70 leading-relaxed space-y-2 [&_ul]:list-disc [&_ul]:pl-4 [&_li]:mb-1">
        {children}
      </div>
    </div>
  )
}
