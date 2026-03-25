import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { AgeVerification } from "@/components/ui/age-verification"
import { FloatingWidget } from "@/components/ui/floating-widget"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Botanical Archivist — Premium Mycologische Webshop",
    template: "%s | Botanical Archivist",
  },
  description:
    "Premium truffels, growkits en microdosering producten. Wetenschap-gedreven, aarde-gegroeid, discreet bezorgd. Alleen voor 18+.",
  keywords: [
    "truffels kopen",
    "growkits paddenstoelen",
    "microdosering",
    "psilocybine truffels",
    "magic truffels",
  ],
  openGraph: {
    siteName: "Botanical Archivist",
    type: "website",
    locale: "nl_NL",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="nl"
      className={`${inter.variable} ${manrope.variable}`}
    >
      <body
        className="min-h-full flex flex-col bg-background text-foreground antialiased"
        style={{
          fontFamily: "var(--font-inter), sans-serif",
        }}
      >
        <AgeVerification />
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <FloatingWidget />
      </body>
    </html>
  )
}
