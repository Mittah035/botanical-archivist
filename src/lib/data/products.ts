export interface Product {
  id: string
  slug: string
  name: string
  category: "truffels" | "growkits" | "microdosering" | "accessoires"
  price: number
  originalPrice?: number
  description: string
  longDescription: string
  emoji: string
  badge?: "bestseller" | "nieuw" | "sale" | "uitverkocht"
  strength?: 1 | 2 | 3 | 4 | 5
  weight?: string
  effects?: string[]
  contents?: string[]
  usage?: string
  inStock: boolean
  rating: number
  reviews: number
  featured?: boolean
}

export const products: Product[] = [
  // TRUFFELS
  {
    id: "p1",
    slug: "hollandia-truffels",
    name: "Hollandia Truffels",
    category: "truffels",
    price: 1995,
    description: "De krachtigste truffel die we hebben. Alleen voor wie al ervaring heeft.",
    longDescription:
      "Hollandia is een van de sterkste psilocybine truffels op de markt. Door het hoge psilocybine-gehalte kun je diepe visuele ervaringen en intens introspectieve momenten verwachten. Niet geschikt voor beginners — aanbevolen voor mensen die al meerdere truffervaringen hebben.",
    emoji: "🍄",
    badge: "bestseller",
    strength: 5,
    weight: "15g",
    effects: ["Intensieve visuals", "Diepe introspectie", "Verhoogde creativiteit", "Euforie"],
    usage: "Beginners: 5–10g. Volledige ervaring: 10–15g. Gebruik altijd op nuchtere maag.",
    inStock: true,
    rating: 4.9,
    reviews: 312,
    featured: true,
  },
  {
    id: "p2",
    slug: "atlantis-truffels",
    name: "Atlantis Truffels",
    category: "truffels",
    price: 1795,
    description: "Niet te zwaar, niet te licht. De ideale keuze als je voor het eerst truffels probeert.",
    longDescription:
      "Atlantis truffels zijn populair bij zowel beginners als mensen met wat meer ervaring. Ze geven een prettige, opbeurende ervaring met zachte visuals en een positieve stemming — krachtig genoeg om te voelen, mild genoeg om te genieten. Een uitstekende eerste kennismaking.",
    emoji: "🌊",
    strength: 3,
    weight: "15g",
    effects: ["Zachte visuals", "Positieve stemming", "Lichte introspectie", "Creatieve flow"],
    usage: "Beginners: 7–10g. Gebruik in een rustige, vertrouwde omgeving.",
    inStock: true,
    rating: 4.7,
    reviews: 189,
    featured: true,
  },
  {
    id: "p3",
    slug: "valhalla-truffels",
    name: "Valhalla Truffels",
    category: "truffels",
    price: 1895,
    description: "Sterk en cerebraal — populair bij creatievelingen, muzikanten en kunstenaars.",
    longDescription:
      "Valhalla truffels staan bekend om hun heldere, creatieve werking. Ze stimuleren origineel denken en artistieke expressie. Populair bij mensen die creatieve doorbraken zoeken. Geschikt voor gebruikers met enige ervaring.",
    emoji: "⚡",
    badge: "nieuw",
    strength: 4,
    weight: "15g",
    effects: ["Verhoogde creativiteit", "Cerebrale helderheid", "Muzikale verdieping", "Inspiratie"],
    usage: "7–12g voor optimaal effect. Gebruik in een bekende, comfortabele omgeving.",
    inStock: true,
    rating: 4.8,
    reviews: 145,
    featured: true,
  },
  {
    id: "p4",
    slug: "mokum-truffels",
    name: "Mokum Truffels",
    category: "truffels",
    price: 1695,
    description: "Licht, sociaal en gezellig — perfect voor een avond met vrienden.",
    longDescription:
      "Mokum truffels zijn vernoemd naar Amsterdam en zijn de meest sociaalvriendelijke truffels in ons assortiment. Ze versterken verbinding, empathie en een warme sfeer. Geschikt voor beginners en ideaal voor groepsgebruik of een festival.",
    emoji: "🌿",
    strength: 2,
    weight: "15g",
    effects: ["Sociale verbinding", "Empathie", "Geluk", "Licht en ontspannen"],
    usage: "5–10g. Veilig voor beginners. Ideaal in een sociale setting.",
    inStock: true,
    rating: 4.6,
    reviews: 98,
  },
  {
    id: "p5",
    slug: "tampanensis-truffels",
    name: "Tampanensis Truffels",
    category: "truffels",
    price: 1595,
    description: "Rustig en meditatief. Perfect voor zelfreflectie en innerlijke rust.",
    longDescription:
      "Tampanensis — ook bekend als de Philosopher's Stone — zijn de meest meditatieve truffels die we aanbieden. Ze geven een kalme, introspectieve ervaring zonder overweldigende visuals. Ideaal als je wilt nadenken, ontspannen of mediteren.",
    emoji: "🪨",
    strength: 2,
    weight: "15g",
    effects: ["Diepe ontspanning", "Spirituele inzichten", "Rustige introspectie", "Mentale helderheid"],
    usage: "5–10g. Aanbevolen in een stille, comfortabele omgeving.",
    inStock: true,
    rating: 4.5,
    reviews: 76,
  },
  {
    id: "p6",
    slug: "mexicana-truffels",
    name: "Mexicana Truffels",
    category: "truffels",
    price: 1495,
    description: "De mildste soort die we hebben. Ideaal als je nog nooit truffels hebt geprobeerd.",
    longDescription:
      "Mexicana truffels zijn de klassieke instapper voor absolute beginners. Ze bieden een lichte, vrolijke ervaring met zachte visuals en een prettig gevoel. Weinig kans op overweldigende effecten — perfect om rustig kennis te maken met psilocybine.",
    emoji: "🌺",
    strength: 1,
    weight: "15g",
    effects: ["Lichte euforie", "Vrolijkheid", "Zachte visuals", "Ontspanning"],
    usage: "5–10g. Ideaal als eerste kennismaking of voor microdoseren.",
    inStock: true,
    rating: 4.4,
    reviews: 234,
  },

  // GROWKITS
  {
    id: "g1",
    slug: "golden-teacher-growkit",
    name: "Golden Teacher Growkit",
    category: "growkits",
    price: 2995,
    description: "De meest verkochte growkit. Hoge opbrengst, makkelijk te kweken, meerdere oogsten.",
    longDescription:
      "De Golden Teacher is veruit de populairste growkit — en dat is niet zonder reden. De kit is simpel in gebruik, geeft hoge opbrengsten en levert meerdere oogsten (flushes). Het volledig gekoloniseerde substraat is kant-en-klaar. Inclusief duidelijke instructies.",
    emoji: "🧫",
    badge: "bestseller",
    weight: "1200ml substraat",
    contents: ["1200ml gekoloniseerd substraat", "Grow bag", "Paperclips", "Instructiekaart"],
    usage: "Volg de bijgeleverde stap-voor-stap instructies. Verwachte opbrengst: 200–400g per oogst.",
    inStock: true,
    rating: 4.8,
    reviews: 267,
    featured: true,
  },
  {
    id: "g2",
    slug: "b-plus-growkit",
    name: "B+ Growkit",
    category: "growkits",
    price: 2795,
    description: "Groot, robuust en vergevingsgezind. Ideaal voor beginners die indrukwekkende resultaten willen.",
    longDescription:
      "De B+ soort produceert grote, vlezige paddenstoelen en is bijzonder tolerant voor kleine fouten. Heb je nog niet veel kweekervaring? Dan is de B+ een uitstekende keuze. Meerdere oogsten mogelijk.",
    emoji: "🍄",
    weight: "1200ml substraat",
    contents: ["1200ml gekoloniseerd substraat", "Grow bag", "Paperclips", "Instructiekaart"],
    usage: "Ideaal voor beginners. Verwachte opbrengst: 150–350g per oogst. Meerdere flushes mogelijk.",
    inStock: true,
    rating: 4.7,
    reviews: 134,
  },
  {
    id: "g3",
    slug: "ecuador-growkit",
    name: "Ecuador Growkit",
    category: "growkits",
    price: 2795,
    description: "Snel groeiend en krachtig — verwacht je eerste oogst al binnen 1 tot 2 weken.",
    longDescription:
      "Ecuador paddenstoelen staan bekend om hun snelle groei en bovengemiddelde potentie. Ze zijn geadapteerd aan ruige omstandigheden en groeien daardoor voorspoedig. Geschikt voor iedereen die snel resultaat wil.",
    emoji: "🏔️",
    badge: "nieuw",
    weight: "1200ml substraat",
    contents: ["1200ml gekoloniseerd substraat", "Grow bag", "Paperclips", "Instructiekaart"],
    usage: "Eerste oogst verwacht binnen 7–14 dagen. Volg de bijgeleverde instructies.",
    inStock: true,
    rating: 4.6,
    reviews: 89,
  },
  {
    id: "g4",
    slug: "mckennaii-growkit",
    name: "McKennaii Growkit",
    category: "growkits",
    price: 3295,
    description: "Maximale potentie. Aanbevolen voor gevorderde kwekers met ervaring.",
    longDescription:
      "De McKennaii is een krachtige hybride soort met een hoog psilocybine-gehalte. Vernoemd naar filosoof en psychedelica-pionier Terence McKenna. Geschikt voor gevorderde kwekers die het maximale uit hun kit willen halen. Let op de hogere potentie bij gebruik.",
    emoji: "🧬",
    weight: "1200ml substraat",
    contents: ["1200ml gekoloniseerd substraat", "Grow bag", "Paperclips", "Instructiekaart"],
    usage: "Alleen aanbevolen voor ervaren kwekers. Hoge potentie — doseer voorzichtig.",
    inStock: true,
    rating: 4.9,
    reviews: 56,
  },

  // MICRODOSERING
  {
    id: "m1",
    slug: "microdose-starter-kit",
    name: "Microdose Starter Kit",
    category: "microdosering",
    price: 3495,
    description: "Alles wat je nodig hebt om te starten met microdoseren. Inclusief capsules, protocol en dagboek.",
    longDescription:
      "Onze Microdose Starter Kit is ontworpen voor iedereen die wil beginnen met microdoseren, maar niet weet waar te starten. De kit bevat gecalibreerde capsules van 0.1g, een helder Fadiman protocol (dag 1 nemen, dag 2–3 rust), een bijhoud-dagboek en een instructiegids. Alles direct klaar voor gebruik.",
    emoji: "⚗️",
    badge: "bestseller",
    weight: "0.1g per capsule",
    contents: ["30 capsules (0.1g elk)", "Fadiman protocol gids", "Dagboek voor tracking", "Instructiekaart"],
    usage: "Dag 1: 1 capsule 's ochtends op nuchtere maag. Dag 2 en 3: rust. Herhaal gedurende 30 dagen.",
    inStock: true,
    rating: 4.9,
    reviews: 412,
    featured: true,
  },
  {
    id: "m2",
    slug: "microdose-focus-blend",
    name: "Focus Blend Capsules",
    category: "microdosering",
    price: 2895,
    description: "Psilocybine + Lion's Mane + Niacine — het Stamets stack-protocol voor focus en herstel.",
    longDescription:
      "De Focus Blend combineert psilocybine (0.1g) met Lion's Mane extract (200mg) en niacine (100mg) — precies zoals beschreven door mycologiepionier Paul Stamets. Deze combinatie ondersteunt neuroplasticiteit, cognitief herstel en langdurige focus. Populair bij mensen die hun prestaties willen verbeteren.",
    emoji: "🧠",
    badge: "nieuw",
    contents: ["30 capsules", "Psilocybine 0.1g", "Lion's Mane 200mg", "Niacine 100mg"],
    usage: "1 capsule per dag. Schema: 4 dagen aan, 3 dagen rust (Stamets stack-protocol).",
    inStock: true,
    rating: 4.8,
    reviews: 187,
    featured: true,
  },
  {
    id: "m3",
    slug: "microdose-evening-blend",
    name: "Evening Calm Blend",
    category: "microdosering",
    price: 2695,
    description: "Zachte avonddosering voor ontspanning, verwerking en een betere nachtrust.",
    longDescription:
      "De Evening Calm Blend is speciaal ontwikkeld voor gebruik voor het slapengaan. De lage dosering van 0.05g helpt je ontspannen, de dag te verwerken en rustiger te slapen — zonder psychedelische effecten. Maximaal 3 avonden per week.",
    emoji: "🌙",
    weight: "0.05g per capsule",
    contents: ["30 capsules (0.05g elk)", "Slaap & rust protocol gids"],
    usage: "1 capsule 1–2 uur voor het slapengaan. Maximaal 3 avonden per week.",
    inStock: true,
    rating: 4.6,
    reviews: 98,
  },
  {
    id: "m4",
    slug: "microdose-journal",
    name: "Microdoseer Dagboek",
    category: "microdosering",
    price: 1495,
    description: "Houd je voortgang bij en zie zelf wanneer en hoe je je beter voelt.",
    longDescription:
      "Ons gebonden dagboek is specifiek ontworpen voor microdoseerders. Dagelijkse pagina's voor stemming, energie, focus en creativiteit. Wekelijkse en maandelijkse evaluatieformulieren. Handig als je systematisch wilt bijhouden wat microdoseren voor jou doet.",
    emoji: "📓",
    contents: ["120 pagina's", "Wekelijkse evaluatieformulieren", "Maandelijkse analyse pagina's", "Instructiegids"],
    inStock: true,
    rating: 4.7,
    reviews: 234,
  },

  // ACCESSOIRES
  {
    id: "a1",
    slug: "precision-scale",
    name: "Precisie Weegschaal 0.01g",
    category: "accessoires",
    price: 1995,
    description: "Nauwkeurig tot op 0.01g. Onmisbaar voor veilig doseren.",
    longDescription:
      "Voor verantwoord doseren heb je een nauwkeurige weegschaal nodig. Onze precisieweegschaal meet tot op 0.01g nauwkeurig en heeft een capaciteit van 200g. Inclusief kalibratigewicht, beschermhoes en batterijen. Direct klaar voor gebruik.",
    emoji: "⚖️",
    contents: ["Weegschaal", "Kalibratie gewicht", "Beschermende koffer", "Batterijen"],
    inStock: true,
    rating: 4.8,
    reviews: 156,
    featured: true,
  },
  {
    id: "a2",
    slug: "capsule-machine",
    name: "Capsule Vulmachine",
    category: "accessoires",
    price: 2495,
    description: "Maak zelf je microdoseer capsules — snel, precies en hygiënisch.",
    longDescription:
      "Met onze capsule vulmachine maak je 24 capsules tegelijk — snel, schoon en consistent. Ideaal als je zelf je eigen microdoseer capsules wilt samenstellen. Inclusief 100 capsules in maat 0 en 100 in maat 00.",
    emoji: "💊",
    contents: ["Capsule vulmachine", "100 capsules maat 0", "100 capsules maat 00", "Schoonmaakborstel"],
    inStock: true,
    rating: 4.6,
    reviews: 89,
  },
  {
    id: "a3",
    slug: "integration-guide-nl",
    name: "Integratie Gids NL",
    category: "accessoires",
    price: 1995,
    description: "De meest complete Nederlandstalige gids over veilig gebruik en integratie.",
    longDescription:
      "Deze uitgebreide gids (180 pagina's) is geschreven door Nederlandse therapeuten en ervaringsdeskundigen. Hij behandelt alles wat je moet weten: set & setting, dosering, veiligheid, hoe je moeilijke momenten aanpakt en hoe je ervaringen integreert in je dagelijks leven. Inclusief contactlijst van professionals in Nederland.",
    emoji: "📚",
    contents: ["180 pagina's", "Veiligheidsprotocollen", "Integratie oefeningen", "Contactlijst professionals NL"],
    inStock: true,
    rating: 4.9,
    reviews: 267,
  },
  {
    id: "a4",
    slug: "mushroom-supplement-pack",
    name: "Adaptogene Paddenstoel Pack",
    category: "accessoires",
    price: 3495,
    originalPrice: 4500,
    description: "Lion's Mane, Reishi en Chaga in één pakket. Nu 22% korting.",
    longDescription:
      "Dit voordeelpakket combineert drie krachtige medicinale paddenstoelen. Lion's Mane ondersteunt geheugen en cognitief herstel. Reishi helpt het immuunsysteem en vermindert stress. Chaga is een krachtige antioxidant. Samen een complete dagelijkse suppletie.",
    emoji: "🌱",
    badge: "sale",
    contents: ["Lion's Mane 60 capsules", "Reishi 60 capsules", "Chaga 60 capsules", "Combinatiegids"],
    inStock: true,
    rating: 4.7,
    reviews: 145,
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured)
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, limit)
}
