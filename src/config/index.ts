// Centrale configuratie voor de webshop

export const siteConfig = {
  name: "Magicmushies",
  url: "https://magicmushies.vercel.app",
  description: "Premium truffels, growkits en microdosering. Wetenschap-gedreven, aarde-gegroeid.",
  phone: "+31 6 12345678",
  email: "info@magicmushies.nl",
  whatsapp: "31612345678",
  kvk: "", // TODO: invullen na registratie
  btw: "", // TODO: invullen na registratie
  socials: {
    instagram: "https://instagram.com/magicmushies",
    facebook: "",
    tiktok: "",
  },
  shipping: {
    freeThreshold: 75, // gratis verzending vanaf €75
    standardCost: 4.95,
    estimatedDays: 1,
  },
} as const

export type SiteConfig = typeof siteConfig
