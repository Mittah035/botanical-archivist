import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
  }).format(cents / 100)
}

// BTW tarieven conform NL wetgeving (Wet OB 1968)
// Truffels = voedingsmiddel = 9% (Tabel I, post a.1)
// Growkits, supplementen, accessoires = 21%
export function getVatRate(category: string): number {
  if (category === "truffels") return 0.09
  return 0.21
}

export function calculateVat(priceIncl: number, vatRate: number): number {
  // priceIncl = prijs inclusief BTW
  // BTW bedrag = prijs_incl * (rate / (1 + rate))
  return Math.round(priceIncl * (vatRate / (1 + vatRate)))
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export function truncate(str: string, length: number): string {
  return str.length > length ? `${str.slice(0, length)}...` : str
}
