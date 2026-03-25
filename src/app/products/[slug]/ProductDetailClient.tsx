"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Star, ShoppingCart, ChevronLeft, Shield, Truck, Leaf, Info, ChevronDown, Zap, FlaskConical, Sprout } from "lucide-react"
import { type Product } from "@/lib/data/products"
import { ProductCard } from "@/components/ui/product-card"
import { useCartStore } from "@/lib/store/cartStore"
import { formatPrice } from "@/lib/utils"

const strengthLabels = ["", "Mild", "Licht", "Gemiddeld", "Krachtig", "Extreem"]

// Unieke afbeeldingen per slug
const productImages: Record<string, string> = {
  "hollandia-truffels": "https://images.unsplash.com/photo-1598030473978-2e7e40e82bf7?w=900&q=85",
  "atlantis-truffels": "https://images.unsplash.com/photo-1560343776-97e7d202ff0e?w=900&q=85",
  "valhalla-truffels": "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=900&q=85",
  "mokum-truffels": "https://images.unsplash.com/photo-1444492417251-9c84a5fa18e0?w=900&q=85",
  "tampanensis-truffels": "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=900&q=85",
  "mexicana-truffels": "https://images.unsplash.com/photo-1448375240586-882707db888b?w=900&q=85",
  "golden-teacher-growkit": "/images/products/growkits/golden-teacher.jpg",
  "b-plus-growkit": "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=900&q=85",
  "ecuador-growkit": "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=900&q=85",
  "mckennaii-growkit": "https://images.unsplash.com/photo-1542601906897-edc9d08c7283?w=900&q=85",
  "microdose-starter-kit": "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900&q=85",
  "microdose-focus-blend": "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=900&q=85",
  "microdose-evening-blend": "https://images.unsplash.com/photo-1476136236990-838240be4859?w=900&q=85",
  "microdose-journal": "https://images.unsplash.com/photo-1517842645767-c639042777db?w=900&q=85",
  "precision-scale": "https://images.unsplash.com/photo-1585670286880-4e6f78e7d8a0?w=900&q=85",
  "capsule-machine": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=900&q=85",
  "integration-guide-nl": "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=900&q=85",
  "mushroom-supplement-pack": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85",
}

// Categorie-specifieke fallbacks
const categoryFallback: Record<string, string> = {
  truffels: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=900&q=85",
  growkits: "https://images.unsplash.com/photo-1630563451961-ac2ff27616ab?w=900&q=85",
  microdosering: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900&q=85",
  accessoires: "https://images.unsplash.com/photo-1585670286880-4e6f78e7d8a0?w=900&q=85",
}

// Categorie-specifieke stijlen en teksten
const categoryConfig = {
  truffels: {
    accent: "from-emerald-900 to-primary",
    badge: "text-[#c1ecd4] bg-white/10",
    icon: Sprout,
    tagline: "Vers geoogst & lab-getest",
    bgOverlay: "from-primary/80 via-primary/40 to-transparent",
  },
  growkits: {
    accent: "from-amber-900 to-amber-700",
    badge: "text-amber-200 bg-amber-900/30",
    icon: Leaf,
    tagline: "Zelf kweken thuis — complete kit",
    bgOverlay: "from-amber-900/70 via-amber-800/30 to-transparent",
  },
  microdosering: {
    accent: "from-indigo-900 to-indigo-700",
    badge: "text-indigo-200 bg-indigo-900/30",
    icon: FlaskConical,
    tagline: "Wetenschappelijk onderbouwd protocol",
    bgOverlay: "from-indigo-900/70 via-indigo-800/30 to-transparent",
  },
  accessoires: {
    accent: "from-stone-800 to-stone-600",
    badge: "text-stone-200 bg-stone-800/30",
    icon: Zap,
    tagline: "Premium tools voor serieuze gebruikers",
    bgOverlay: "from-stone-900/70 via-stone-800/30 to-transparent",
  },
}

const faqs = [
  {
    q: "Is dit product legaal in Nederland?",
    a: "Ja. Verse psilocybine truffels zijn volledig legaal in Nederland. Ze vallen niet onder de Opiumwet. Growkits zijn ook legaal. Gedroogde paddenstoelen zijn NIET legaal.",
  },
  {
    q: "Wat is de minimumleeftijd?",
    a: "Wij verkopen uitsluitend aan personen van 18 jaar of ouder. Bij levering kan een leeftijdsverificatie worden gevraagd.",
  },
  {
    q: "Hoe wordt het product verzonden?",
    a: "Alle producten worden discreet verpakt. De afzender op het pakket geeft niet de inhoud aan. Verzending via PostNL, 1-3 werkdagen.",
  },
  {
    q: "Mag ik het product retourneren?",
    a: "Vanwege de aard van het product (bederfelijk / persoonlijk gebruik) is retour niet mogelijk. Bij beschadiging of fout neem contact op.",
  },
]

export function ProductDetailClient({
  product,
  related,
}: {
  product: Product
  related: Product[]
}) {
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const addItem = useCartStore((s) => s.addItem)
  const config = categoryConfig[product.category]
  const imgSrc = productImages[product.slug] || categoryFallback[product.category]

  function handleAddToCart() {
    addItem({ id: product.id, name: product.name, price: product.price, quantity: qty, image: product.emoji })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  // === TRUFFELS layout: full-width hero image + sidebar info ===
  if (product.category === "truffels") {
    return (
      <main className="min-h-screen bg-surface-low pt-16">
        {/* Full-width hero */}
        <div className="relative h-[55vh] md:h-[65vh] overflow-hidden">
          <Image src={imgSrc} alt={product.name} fill priority className="object-cover object-center" sizes="100vw" />
          <div className={`absolute inset-0 bg-gradient-to-r ${config.bgOverlay}`} />
          <div className="absolute inset-0 flex flex-col justify-end px-6 md:px-20 pb-12 max-w-7xl mx-auto">
            <Link href="/products" className="inline-flex items-center gap-1.5 text-white/60 hover:text-white mb-6 text-sm transition-colors w-fit">
              <ChevronLeft className="w-4 h-4" /> Terug
            </Link>
            <span className="text-xs uppercase tracking-widest text-[#c1ecd4] font-medium mb-2">{config.tagline}</span>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-white mb-3 leading-tight">{product.name}</h1>
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className={`w-4 h-4 ${i <= Math.round(product.rating) ? "fill-amber-400 text-amber-400" : "text-white/30"}`} />)}
              </div>
              <span className="text-white/70 text-sm">{product.rating} ({product.reviews} reviews)</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-foreground/70 text-lg leading-relaxed">{product.longDescription}</p>

            {product.strength && (
              <div>
                <p className="text-xs uppercase tracking-wider text-foreground/50 mb-3 font-medium">Sterkte: {strengthLabels[product.strength]}</p>
                <div className="flex gap-2">
                  {[1,2,3,4,5].map(i => <div key={i} className={`h-3 flex-1 rounded-full ${i <= product.strength! ? "bg-primary" : "bg-primary/10"}`} />)}
                </div>
              </div>
            )}

            {product.effects && (
              <div className="flex flex-wrap gap-2">
                {product.effects.map(e => <span key={e} className="px-3 py-1.5 bg-primary/8 text-primary text-xs rounded-full font-medium">{e}</span>)}
              </div>
            )}

            {product.usage && (
              <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl p-4">
                <Info className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">{product.usage}</p>
              </div>
            )}

            {/* FAQ */}
            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-4">Veelgestelde vragen</h2>
              <div className="space-y-2">
                {faqs.map((faq, i) => (
                  <div key={i} className="bg-white rounded-xl overflow-hidden shadow-card">
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-4 text-left">
                      <span className="font-medium text-sm text-primary">{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-foreground/40 flex-shrink-0 ml-4 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {openFaq === i && <div className="px-4 pb-4"><p className="text-sm text-foreground/60 leading-relaxed">{faq.a}</p></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-elevated sticky top-24">
              <div className="text-3xl font-display font-bold text-primary mb-1">{formatPrice(product.price)}</div>
              {product.weight && <p className="text-sm text-foreground/40 mb-4">{product.weight}</p>}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center border border-foreground/20 rounded-xl overflow-hidden">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3 hover:bg-foreground/5 font-bold">−</button>
                  <span className="px-4 py-3 font-medium text-sm">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="px-4 py-3 hover:bg-foreground/5 font-bold">+</button>
                </div>
                <button onClick={handleAddToCart} disabled={!product.inStock}
                  className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all ${added ? "bg-green-500 text-white" : "bg-primary text-white hover:bg-primary/90"} disabled:opacity-40`}>
                  <ShoppingCart className="w-4 h-4" />
                  {added ? "Toegevoegd!" : "In winkelwagen"}
                </button>
              </div>
              <div className="space-y-2 pt-4 border-t border-foreground/10">
                {[{icon: Shield, text: "100% Legaal in NL"}, {icon: Truck, text: "Discreet bezorgd"}, {icon: Leaf, text: "Lab-getest"}].map(({icon: Icon, text}) => (
                  <div key={text} className="flex items-center gap-2 text-xs text-foreground/50"><Icon className="w-3.5 h-3.5 text-primary" />{text}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="max-w-7xl mx-auto px-6 md:px-20 pb-16">
            <h2 className="font-display text-xl font-bold text-primary mb-6">Andere truffels</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </main>
    )
  }

  // === GROWKITS layout: split image/info + groene stap-voor-stap sectie ===
  if (product.category === "growkits") {
    return (
      <main className="min-h-screen bg-surface-low pt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-10">
          <Link href="/products" className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-primary mb-8 transition-colors">
            <ChevronLeft className="w-4 h-4" /> Terug naar producten
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            <motion.div initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} className="rounded-2xl overflow-hidden relative aspect-square shadow-elevated">
              <Image src={imgSrc} alt={product.name} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              {product.badge && (
                <div className="absolute top-4 left-4 bg-amber-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {product.badge}
                </div>
              )}
            </motion.div>

            <motion.div initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} className="flex flex-col justify-center">
              <span className="text-xs uppercase tracking-widest text-amber-600 font-medium mb-2">{config.tagline}</span>
              <h1 className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-3">{product.name}</h1>
              <div className="flex items-center gap-2 mb-5">
                {[1,2,3,4,5].map(i => <Star key={i} className={`w-4 h-4 ${i<=Math.round(product.rating)?"fill-amber-400 text-amber-400":"text-foreground/20"}`} />)}
                <span className="text-sm text-foreground/60">{product.rating} ({product.reviews})</span>
              </div>

              <p className="text-foreground/70 leading-relaxed mb-6">{product.longDescription}</p>

              {product.contents && (
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">Inhoud kit</p>
                  <ul className="space-y-1.5">
                    {product.contents.map(c => <li key={c} className="text-sm text-amber-900 flex items-start gap-2"><span className="text-amber-500 mt-0.5">✓</span>{c}</li>)}
                  </ul>
                </div>
              )}

              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-3xl font-display font-bold text-primary">{formatPrice(product.price)}</span>
                {product.weight && <span className="text-sm text-foreground/40">{product.weight}</span>}
              </div>

              <div className="flex gap-3">
                <div className="flex items-center border border-foreground/20 rounded-xl overflow-hidden">
                  <button onClick={() => setQty(Math.max(1,qty-1))} className="px-4 py-3 hover:bg-foreground/5 font-bold">−</button>
                  <span className="px-4 py-3 font-medium text-sm">{qty}</span>
                  <button onClick={() => setQty(qty+1)} className="px-4 py-3 hover:bg-foreground/5 font-bold">+</button>
                </div>
                <button onClick={handleAddToCart} disabled={!product.inStock}
                  className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all ${added?"bg-green-500 text-white":"bg-primary text-white hover:bg-primary/90"} disabled:opacity-40`}>
                  <ShoppingCart className="w-4 h-4" />
                  {added ? "Toegevoegd!" : "In winkelwagen"}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Stap-voor-stap sectie */}
          <div className="bg-primary text-white rounded-2xl p-8 mb-16">
            <h2 className="font-display text-2xl font-bold mb-8 text-center">Hoe werkt het?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {["Unbox & bereid voor", "Koloniseer 5-10 dagen", "Bevochtig & oogst", "Herhaal: 2-3 flushes"].map((step, i) => (
                <div key={step} className="text-center">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg font-bold mx-auto mb-3">{i+1}</div>
                  <p className="text-sm text-white/80">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {related.length > 0 && (
            <div>
              <h2 className="font-display text-xl font-bold text-primary mb-6">Andere growkits</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {related.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            </div>
          )}
        </div>
      </main>
    )
  }

  // === MICRODOSERING layout: donker/indigo thema + protocol stats ===
  if (product.category === "microdosering") {
    return (
      <main className="min-h-screen bg-surface-low pt-24">
        {/* Donkere banner */}
        <div className="bg-gradient-to-br from-indigo-950 to-primary text-white py-16 px-6 md:px-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link href="/products" className="inline-flex items-center gap-1.5 text-white/50 hover:text-white mb-6 text-sm transition-colors">
                <ChevronLeft className="w-4 h-4" /> Terug
              </Link>
              <span className="text-xs uppercase tracking-widest text-indigo-300 font-medium mb-3 block">{config.tagline}</span>
              <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4 leading-tight">{product.name}</h1>
              <div className="flex items-center gap-2 mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} className={`w-4 h-4 ${i<=Math.round(product.rating)?"fill-amber-400 text-amber-400":"text-white/30"}`} />)}
                <span className="text-white/60 text-sm">{product.rating} ({product.reviews})</span>
              </div>
              <p className="text-white/70 leading-relaxed text-lg">{product.longDescription}</p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src={imgSrc} alt={product.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-indigo-900/30" />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-20 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            {product.contents && (
              <div className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="font-bold text-primary mb-4">Wat zit er in?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.contents.map(c => (
                    <div key={c} className="flex items-center gap-3 bg-indigo-50 rounded-xl p-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 text-sm font-bold">✓</div>
                      <span className="text-sm text-foreground/70">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {product.usage && (
              <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <FlaskConical className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-indigo-900 mb-1 text-sm">Gebruiksprotocol</p>
                    <p className="text-sm text-indigo-800 leading-relaxed">{product.usage}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <p className="text-xs font-bold text-amber-800 mb-2">⚠️ Veiligheidsinformatie</p>
              <p className="text-sm text-amber-700 leading-relaxed">Niet gebruiken in combinatie met SSRI's of MAO-remmers. Raadpleeg altijd een arts bij twijfel.</p>
            </div>

            {/* FAQ */}
            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden shadow-card">
                  <button onClick={() => setOpenFaq(openFaq===i?null:i)} className="w-full flex items-center justify-between p-4 text-left">
                    <span className="font-medium text-sm text-primary">{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-foreground/40 flex-shrink-0 ml-4 transition-transform ${openFaq===i?"rotate-180":""}`} />
                  </button>
                  {openFaq===i && <div className="px-4 pb-4"><p className="text-sm text-foreground/60 leading-relaxed">{faq.a}</p></div>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-white rounded-2xl p-6 shadow-elevated sticky top-24">
              <div className="text-3xl font-display font-bold text-primary mb-1">{formatPrice(product.price)}</div>
              {product.weight && <p className="text-sm text-foreground/40 mb-4">{product.weight}</p>}
              <div className="flex gap-3 mb-4">
                <div className="flex items-center border border-foreground/20 rounded-xl overflow-hidden">
                  <button onClick={() => setQty(Math.max(1,qty-1))} className="px-4 py-3 hover:bg-foreground/5 font-bold">−</button>
                  <span className="px-4 py-3 font-medium text-sm">{qty}</span>
                  <button onClick={() => setQty(qty+1)} className="px-4 py-3 hover:bg-foreground/5 font-bold">+</button>
                </div>
                <button onClick={handleAddToCart} disabled={!product.inStock}
                  className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all ${added?"bg-green-500 text-white":"bg-indigo-800 text-white hover:bg-indigo-900"} disabled:opacity-40`}>
                  <ShoppingCart className="w-4 h-4" />
                  {added?"Toegevoegd!":"Bestel nu"}
                </button>
              </div>
              <div className="space-y-2 pt-4 border-t border-foreground/10">
                {[{icon:Shield,text:"100% Legaal in NL"},{icon:Truck,text:"Discreet bezorgd"},{icon:Leaf,text:"Lab-getest"}].map(({icon:Icon,text})=>(
                  <div key={text} className="flex items-center gap-2 text-xs text-foreground/50"><Icon className="w-3.5 h-3.5 text-indigo-600"/>{text}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="max-w-7xl mx-auto px-6 md:px-20 pb-16">
            <h2 className="font-display text-xl font-bold text-primary mb-6">Vergelijkbare producten</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </main>
    )
  }

  // === ACCESSOIRES layout: clean minimalist productpagina ===
  return (
    <main className="min-h-screen bg-surface-low pt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-20 py-10">
        <Link href="/products" className="inline-flex items-center gap-1.5 text-sm text-foreground/50 hover:text-primary mb-8 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Terug
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          <motion.div initial={{opacity:0,scale:0.97}} animate={{opacity:1,scale:1}} className="rounded-2xl overflow-hidden relative aspect-square shadow-card bg-surface-low">
            <Image src={imgSrc} alt={product.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          </motion.div>

          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.1}} className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-foreground/40 mb-2">Accessoires</span>
            <h1 className="font-display text-3xl font-extrabold text-primary mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              {[1,2,3,4,5].map(i=><Star key={i} className={`w-4 h-4 ${i<=Math.round(product.rating)?"fill-amber-400 text-amber-400":"text-foreground/20"}`} />)}
              <span className="text-sm text-foreground/50">{product.rating} ({product.reviews})</span>
            </div>
            <p className="text-foreground/70 leading-relaxed mb-6">{product.longDescription}</p>

            {product.contents && (
              <ul className="space-y-2 mb-6">
                {product.contents.map(c=><li key={c} className="flex items-center gap-2 text-sm text-foreground/70"><span className="text-primary font-bold">—</span>{c}</li>)}
              </ul>
            )}

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-3xl font-display font-bold text-primary">{formatPrice(product.price)}</span>
              {product.originalPrice && <span className="text-lg text-foreground/40 line-through">{formatPrice(product.originalPrice)}</span>}
            </div>

            <div className="flex gap-3">
              <div className="flex items-center border border-foreground/20 rounded-xl overflow-hidden">
                <button onClick={() => setQty(Math.max(1,qty-1))} className="px-4 py-3 hover:bg-foreground/5 font-bold">−</button>
                <span className="px-4 py-3 font-medium text-sm">{qty}</span>
                <button onClick={() => setQty(qty+1)} className="px-4 py-3 hover:bg-foreground/5 font-bold">+</button>
              </div>
              <button onClick={handleAddToCart} disabled={!product.inStock}
                className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all ${added?"bg-green-500 text-white":"bg-primary text-white hover:bg-primary/90"} disabled:opacity-40`}>
                <ShoppingCart className="w-4 h-4" />
                {added?"Toegevoegd!":"In winkelwagen"}
              </button>
            </div>
          </motion.div>
        </div>

        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-display text-xl font-bold text-primary mb-6">Gerelateerd</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {related.map(p=><ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
