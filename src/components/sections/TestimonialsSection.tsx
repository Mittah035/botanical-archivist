import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Marielle V.",
    location: "Amsterdam",
    rating: 5,
    text: "Hollandia truffels zijn echt de beste die ik ooit heb gehad. Super snelle levering, discreet verpakt. Het team denkt ook mee over dosering — topservice.",
    product: "Hollandia Truffels",
  },
  {
    name: "Thomas B.",
    location: "Rotterdam",
    rating: 5,
    text: "Microdose Starter Kit is een gamechanger. Volg nu 3 weken het Fadiman protocol en merk duidelijk verschil in focus en stemming. De dagboekpagina's helpen enorm.",
    product: "Microdose Starter Kit",
  },
  {
    name: "Sarah K.",
    location: "Utrecht",
    rating: 5,
    text: "Eerste keer growkit geprobeerd — Golden Teacher. Instructies waren helder, eerste flush na 8 dagen. Ongelooflijk om je eigen te kweken. Bestel nooit meer ergens anders.",
    product: "Golden Teacher Growkit",
  },
  {
    name: "Daan M.",
    location: "Den Haag",
    rating: 5,
    text: "Atlantis was perfect als eerste kennismaking. Magicmushies staat er ook op dat je de educatieve content leest. Voelt veiliger dan andere winkels.",
    product: "Atlantis Truffels",
  },
  {
    name: "Lisa R.",
    location: "Eindhoven",
    rating: 5,
    text: "Precisie weegschaal is perfect. 0.01g nauwkeurig — ideaal voor microdosering. Snel geleverd en goede kwaliteit voor de prijs.",
    product: "Precisie Weegschaal",
  },
  {
    name: "Pieter W.",
    location: "Groningen",
    rating: 5,
    text: "Heb de veiligheid gids ook gelezen — top geschreven, eerlijk over risico's. Dat vertrouwen is waarom ik hier blijf kopen. Professioneel op alle fronten.",
    product: "Integratie Gids NL",
  },
]

const stats = [
  { value: "4.9/5", label: "Gemiddelde beoordeling" },
  { value: "2.400+", label: "Tevreden klanten" },
  { value: "98%", label: "Zou ons aanbevelen" },
  { value: "1-3 dagen", label: "Bezorgd in Nederland" },
]

export function TestimonialsSection() {
  return (
    <section className="py-10 px-4 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-6">
          <h2 className="font-display text-xl font-bold text-gray-900">
            Dit zeggen onze klanten
          </h2>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-gray-100 p-4 text-center">
              <p className="font-display text-2xl font-extrabold text-primary mb-0.5">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Reviews — mobile scroll / desktop grid */}
        <div
          className="flex gap-4 overflow-x-auto pb-3 -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-3 snap-x snap-mandatory lg:snap-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="snap-start shrink-0 w-[82vw] lg:w-auto bg-white rounded-xl border border-gray-100 p-5 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-4">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-3">
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-400">{t.location} · {t.product}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
