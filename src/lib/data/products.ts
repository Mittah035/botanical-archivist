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
    description: "De sterkste truffel in ons archief. Voor de ervaren reiziger.",
    longDescription:
      "Hollandia staat bekend als een van de krachtigste psilocybe truffels beschikbaar. Met een hoge psilocybine concentratie biedt deze soort diepe visuele en filosofische ervaringen. Aanbevolen voor de ervaren gebruiker die op zoek is naar transformatieve inzichten.",
    emoji: "🍄",
    badge: "bestseller",
    strength: 5,
    weight: "15g",
    effects: ["Intensieve visuals", "Diepe introspectie", "Verhoogde creativiteit", "Euforie"],
    usage: "Neem 5–10g voor een beginnerservaring, 10–15g voor een volledige reis. Gebruik op nuchtere maag.",
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
    description: "Balans tussen kracht en toegankelijkheid. Perfect als instap.",
    longDescription:
      "Atlantis truffels zijn ideaal voor beginners en gevorderde gebruikers. Ze bieden een zachte maar betekenisvolle ervaring met mooie visuele effecten en een positieve stemming. De perfecte introductie tot de wereld van psilocybine.",
    emoji: "🌊",
    strength: 3,
    weight: "15g",
    effects: ["Zachte visuals", "Positieve stemming", "Lichte introspectie", "Creatieve flow"],
    usage: "Neem 7–10g voor een beginnerservaring. Ideaal voor eerste keer gebruikers.",
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
    description: "Krachtig en cerebraal. Populair bij creatieve zielen.",
    longDescription:
      "Valhalla truffels staan bekend om hun cerebrale en creatieve effecten. Ze stimuleren origineel denken en artistieke expressie. Een favoriet onder kunstenaars, muzikanten en iedereen die op zoek is naar creatieve doorbraken.",
    emoji: "⚡",
    badge: "nieuw",
    strength: 4,
    weight: "15g",
    effects: ["Cerebrale stimulatie", "Verhoogde creativiteit", "Muzikale verdieping", "Helderheid"],
    usage: "Neem 7–12g voor optimale creatieve effecten. Ideaal in een vertrouwde omgeving.",
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
    description: "Amsterdamse trots. Vriendelijk, sociaal en gezellig.",
    longDescription:
      "Vernoemd naar Amsterdam, zijn Mokum truffels perfect voor sociale settings. Ze verbeteren de communicatie, versterken verbinding en zorgen voor een warme, gezellige sfeer. Ideaal voor festivals, bijeenkomsten of een avond met vrienden.",
    emoji: "🌿",
    strength: 2,
    weight: "15g",
    effects: ["Sociale verbinding", "Empathie", "Geluk", "Licht en vrolijk"],
    usage: "Neem 5–10g voor sociale activiteiten. Veilig voor beginners.",
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
    description: "De Philosopher's Stone. Rustig, meditatief, verhelderend.",
    longDescription:
      "Tampanensis, ook bekend als Philosopher's Stones, zijn de meest meditatieve truffels in ons archief. Ze bevorderen diepe contemplatie en spirituele inzichten zonder overweldigende visuals. Ideaal voor meditatie en zelfreflectie.",
    emoji: "🪨",
    strength: 2,
    weight: "15g",
    effects: ["Meditatie", "Spirituele inzichten", "Kalme introspectie", "Mentale helderheid"],
    usage: "Neem 5–10g voor meditatie sessies. Aanbevolen voor rustige omgevingen.",
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
    description: "De originele ervaringssoort. Licht, vrolijk, perfect voor beginners.",
    longDescription:
      "Mexicana truffels zijn de klassieke entree in de wereld van psychedelica. Ze bieden een lichte, vrolijke ervaring met milde visuals. Perfect als eerste kennismaking voor absolute beginners.",
    emoji: "🌺",
    strength: 1,
    weight: "15g",
    effects: ["Lichte euforie", "Vrolijkheid", "Milde visuals", "Ontspanning"],
    usage: "Neem 5–10g. Ideaal voor eerste keer gebruikers of dagelijks microdoseren.",
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
    description: "De klassieker. Hoge opbrengst, makkelijk te kweken, meerdere flushes.",
    longDescription:
      "De Golden Teacher is de meest populaire groeikit voor beginners en gevorderden. Met een gemakkelijke kweek, hoge opbrengsten en meerdere flushes is dit de ideale kit om thuis te kweken. Bevat volledig gekoloniseerd substraat.",
    emoji: "🧫",
    badge: "bestseller",
    weight: "1200ml substraat",
    contents: ["1200ml gekoloniseerd substraat", "Grow bag", "Paperclips", "Instructiekaart"],
    usage: "Volg de bijgeleverde instructies. Opbrengst: 200-400g verse paddenstoelen per flush.",
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
    description: "Grote, dikke paddenstoelen. Robuust en foutbestendig.",
    longDescription:
      "De B+ soort staat bekend om zijn grote, vlezige paddenstoelen en robuuste kweekkarakter. Hij is tolerant voor kleine fouten in het kweekproces, waardoor hij ideaal is voor beginners die indrukwekkende resultaten willen.",
    emoji: "🍄",
    weight: "1200ml substraat",
    contents: ["1200ml gekoloniseerd substraat", "Grow bag", "Paperclips", "Instructiekaart"],
    usage: "Ideaal voor beginners. Meerdere flushes mogelijk. Opbrengst: 150-350g vers.",
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
    description: "Sterke en snelle groeier. Rijke vluchten en hoge potentie.",
    longDescription:
      "Ecuador paddenstoelen groeien snel en krachtig. Afkomstig van de Andes bergen, zijn ze geadapteerd aan zware omstandigheden en produceren paddenstoelen met een bovengemiddelde potentie.",
    emoji: "🏔️",
    badge: "nieuw",
    weight: "1200ml substraat",
    contents: ["1200ml gekoloniseerd substraat", "Grow bag", "Paperclips", "Instructiekaart"],
    usage: "Snelle groei, verwacht uw eerste flush binnen 7-14 dagen.",
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
    description: "Vernoemd naar Terence McKenna. Krachtig en philosophisch.",
    longDescription:
      "De McKennaii is een hybride soort ontwikkeld voor maximale potentie en diepgang. Vernoemd naar de legendarische psychonautische filosoof Terence McKenna. Voor de gevorderde kweker die het maximale uit zijn groeikit wil halen.",
    emoji: "🧬",
    weight: "1200ml substraat",
    contents: ["1200ml gekoloniseerd substraat", "Grow bag", "Paperclips", "Instructiekaart"],
    usage: "Aanbevolen voor gevorderde kwekers. Hoge potentie - doseer voorzichtig.",
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
    description: "30-daagse Fadiman cyclus. Alles wat je nodig hebt om te beginnen.",
    longDescription:
      "Onze Microdose Starter Kit bevat alles wat je nodig hebt voor een volledige 30-daagse microdoseer cyclus volgens het Fadiman protocol. Inclusief gecalibreerde capsules, dagboek en gids.",
    emoji: "⚗️",
    badge: "bestseller",
    weight: "0.1g per capsule",
    contents: ["30 capsules (0.1g elk)", "Fadiman protocol gids", "Dagboek voor tracking", "Instructiekaart"],
    usage: "Dag 1: neem, Dag 2-3: rust. Herhaal 30 dagen. Ideaal 's ochtends op nuchtere maag.",
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
    description: "Psilocybine + Lion's Mane + Niacine. Het Stamets protocol.",
    longDescription:
      "Onze Focus Blend combineert psilocybine met Lion's Mane paddenstoel extract en niacine (vitamine B3), precies zoals beschreven door mycologiepionier Paul Stamets. Deze combinatie ondersteunt neuroplasticiteit en cognitief herstel.",
    emoji: "🧠",
    badge: "nieuw",
    contents: ["30 capsules", "Psilocybine 0.1g", "Lion's Mane 200mg", "Niacine 100mg"],
    usage: "1 capsule per dag, 4 dagen aan, 3 dagen rust. Stack protocol.",
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
    description: "Zachte avonddosering voor beter slapen en verwerken.",
    longDescription:
      "Speciaal geformuleerd voor avondgebruik. Deze lagere dosering (0.05g) ondersteunt ontspanning, verwerking van de dag en een rustigere slaap zonder overweldigende effecten.",
    emoji: "🌙",
    weight: "0.05g per capsule",
    contents: ["30 capsules (0.05g elk)", "Slaap & rust protocol gids"],
    usage: "1 capsule 1-2 uur voor het slapengaan. Niet elke avond - max 3x per week.",
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
    description: "Gestructureerd dagboek voor het bijhouden van je microdoseer protocol.",
    longDescription:
      "Ons premium gebonden dagboek is specifiek ontworpen voor microdoseerders. Met dagelijkse tracking pagina's voor stemming, energie, focus en creativiteit, plus ruimte voor persoonlijke reflecties.",
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
    description: "Lab-grade precisie voor nauwkeurige doseringen. 0.01g nauwkeurigheid.",
    longDescription:
      "Onze lab-grade precisieweegschaal is onmisbaar voor het nauwkeurig doseren van psilocybine. Met een nauwkeurigheid van 0.01g en een capaciteit van 200g is dit de meest betrouwbare weegschaal in zijn klasse.",
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
    description: "Vul 24 capsules tegelijk. Maat 0 & 00 capsules inbegrepen.",
    longDescription:
      "Onze professionele capsule vulmachine maakt het eenvoudig om je eigen microdoseer capsules te maken. Vul 24 capsules tegelijk met precisie en consistentie.",
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
    description: "Complete Nederlandstalige gids voor veilig gebruik en integratie.",
    longDescription:
      "Onze uitgebreide Nederlandstalige gids behandelt alles: set & setting, dosering, veiligheid, integratie van ervaringen, en het omgaan met moeilijke momenten. Geschreven door Nederlandse therapeuten en psychonauten.",
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
    description: "Lion's Mane + Reishi + Chaga. Premium functionele paddenstoelen.",
    longDescription:
      "Ons premium supplement pakket combineert drie van de krachtigste medicinale paddenstoelen. Lion's Mane voor cognitief herstel, Reishi voor immuniteitsondersteuning en Chaga als anti-oxidant krachtpatser.",
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
