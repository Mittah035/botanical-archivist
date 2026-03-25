"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLSpanElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const scrollVideoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current
      const video = videoRef.current
      const scrollVideo = scrollVideoRef.current

      if (!container) return

      // ── Entrance animaties ──────────────────────────────
      gsap.set([badgeRef.current, headingRef.current, subRef.current, ctaRef.current], {
        opacity: 0, y: 40
      })

      const tl = gsap.timeline({ delay: 0.2 })
      tl.to(badgeRef.current,   { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
        .to(headingRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3")
        .to(subRef.current,     { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.4")
        .to(ctaRef.current,     { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")

      // ── GSAP ScrollTrigger — pin + scroll video ─────────
      // Scroll-driven video scrubbing over 2.5 viewports
      if (scrollVideo) {
        scrollVideo.pause()
        scrollVideo.currentTime = 0

        ScrollTrigger.create({
          trigger: container,
          start: "top top",
          end: "+=250%",   // 2.5 viewports
          pin: true,
          pinSpacing: true,
          scrub: 1,
          onUpdate: (self) => {
            if (!scrollVideo.duration) return
            scrollVideo.currentTime = self.progress * scrollVideo.duration
          },
        })

        // Content fade-out terwijl je scrollt
        gsap.to(contentRef.current, {
          opacity: 0,
          y: -60,
          scale: 0.97,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=80%",
            scrub: true,
          },
        })

        // Overlay darkens tijdens scroll
        gsap.fromTo(overlayRef.current,
          { opacity: 0.4 },
          {
            opacity: 0.75,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "+=150%",
              scrub: true,
            },
          }
        )

        // Scroll video fade-in
        gsap.fromTo(scrollVideo,
          { opacity: 0 },
          {
            opacity: 1,
            ease: "power1.in",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "+=30%",
              scrub: true,
            },
          }
        )

        // Hero video fade-out
        if (video) {
          gsap.to(video, {
            opacity: 0,
            ease: "power1.in",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "+=30%",
              scrub: true,
            },
          })
        }
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      {/* ── Achtergrond: loop video (zichtbaar bij load) ── */}
      <video
        ref={videoRef}
        src="/videos/hero/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* ── Scroll-driven video (scrubbed via GSAP) ── */}
      <video
        ref={scrollVideoRef}
        src="/videos/hero/scroll-source.mp4"
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-0"
      />

      {/* ── Overlay ── */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/15" />

      {/* ── Content ── */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex items-center px-6 lg:px-20"
      >
        <div className="max-w-2xl">
          <span
            ref={badgeRef}
            className="text-xs uppercase tracking-[0.25em] text-emerald-400 font-medium mb-6 block"
          >
            🇳🇱 100% Legaal · EU Lab-getest · Discreet bezorgd
          </span>

          <h1
            ref={headingRef}
            className="font-display text-5xl md:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-8"
          >
            Voel je beter,{" "}
            <br />
            <span className="text-emerald-400">denk helderder.</span>
          </h1>

          <p
            ref={subRef}
            className="text-white/80 text-lg md:text-xl mb-10 max-w-lg leading-relaxed"
          >
            Premium truffels, growkits en microdoseer producten — veilig, legaal en
            getest in gecertificeerde Europese laboratoria. Voor beginners én
            gevorderden. Gratis verzending boven €50.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 rounded-xl px-8 py-4 font-bold transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <Link href="/products">
                Bekijk alle producten
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 rounded-xl px-8 py-4 font-semibold backdrop-blur-sm"
            >
              <Link href="/blog">Kennisbank & Gidsen</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </div>
  )
}
