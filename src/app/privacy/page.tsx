export const metadata = {
  title: "Privacybeleid — Magicmushies",
  description: "Ons privacybeleid beschrijft hoe wij uw persoonsgegevens verzamelen, verwerken en beschermen.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-surface-low pt-24">
      <div className="max-w-3xl mx-auto px-6 md:px-20 py-16">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card">
          <h1 className="font-display text-3xl font-bold text-primary mb-2">Privacybeleid</h1>
          <p className="text-sm text-foreground/40 mb-8">Laatst bijgewerkt: 1 januari 2025</p>

          <div className="prose prose-sm max-w-none space-y-6">
            <Section title="1. Verantwoordelijke">
              <p>Magicmushies, gevestigd in Nederland, is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in dit privacybeleid.</p>
              <p><strong>Contactgegevens:</strong> info@magicmushies.nl</p>
            </Section>

            <Section title="2. Welke gegevens verzamelen wij?">
              <ul>
                <li>Naam en adresgegevens (voor bezorging)</li>
                <li>E-mailadres (voor orderbevestiging en communicatie)</li>
                <li>Telefoonnummer (optioneel, voor bezorging)</li>
                <li>Betalingsgegevens (verwerkt via Mollie — wij slaan geen betalingsgegevens op)</li>
                <li>IP-adres en browserinformatie (analytisch, geanonimiseerd)</li>
                <li>Leeftijdsverificatie (ja/nee, lokaal opgeslagen in browser)</li>
              </ul>
            </Section>

            <Section title="3. Waarom verwerken wij uw gegevens?">
              <ul>
                <li><strong>Uitvoering van de overeenkomst:</strong> verwerking en bezorging van uw bestelling</li>
                <li><strong>Wettelijke verplichting:</strong> belastingadministratie en boekhouding</li>
                <li><strong>Gerechtvaardigd belang:</strong> fraudepreventie en kwaliteitsverbetering</li>
                <li><strong>Toestemming:</strong> nieuwsbrief (alleen na expliciete aanmelding)</li>
              </ul>
            </Section>

            <Section title="4. Bewaartermijnen">
              <p>Klantgegevens worden bewaard zolang als noodzakelijk voor de bovengenoemde doeleinden, maar maximaal 7 jaar (fiscale bewaarplicht). Analytische gegevens worden na 26 maanden verwijderd.</p>
            </Section>

            <Section title="5. Derde partijen">
              <p>Wij delen uw gegevens alleen met:</p>
              <ul>
                <li><strong>Mollie B.V.</strong> — betalingsverwerking (PCI DSS gecertificeerd)</li>
                <li><strong>PostNL / DPD</strong> — pakketbezorging (naam en adres)</li>
                <li><strong>Supabase</strong> — databasehosting (EU-datacenters)</li>
                <li><strong>Resend</strong> — e-mailbezorging (transactioneel)</li>
              </ul>
              <p>Wij verkopen uw gegevens nooit aan derden voor marketingdoeleinden.</p>
            </Section>

            <Section title="6. Uw rechten (AVG/GDPR)">
              <ul>
                <li>Recht op inzage van uw persoonsgegevens</li>
                <li>Recht op rectificatie van onjuiste gegevens</li>
                <li>Recht op verwijdering (&ldquo;recht op vergetelheid&rdquo;)</li>
                <li>Recht op beperking van de verwerking</li>
                <li>Recht op gegevensoverdraagbaarheid</li>
                <li>Recht op bezwaar</li>
              </ul>
              <p>Stuur uw verzoek naar: info@magicmushies.nl. Wij reageren binnen 30 dagen.</p>
            </Section>

            <Section title="7. Cookies">
              <p>Zie ons <a href="/cookies" className="text-primary hover:underline">cookiebeleid</a> voor meer informatie.</p>
            </Section>

            <Section title="8. Beveiliging">
              <p>Wij nemen passende technische en organisatorische maatregelen ter beveiliging van uw persoonsgegevens, waaronder SSL-versleuteling, twee-factor authenticatie en toegangsbeperking.</p>
            </Section>

            <Section title="9. Klachten">
              <p>U heeft het recht een klacht in te dienen bij de Autoriteit Persoonsgegevens (AP): <strong>www.autoriteitpersoonsgegevens.nl</strong></p>
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
