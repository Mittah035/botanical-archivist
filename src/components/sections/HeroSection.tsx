"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const videoRef    = useRef<HTMLVideoElement>(null)
  const contentRef  = useRef<HTMLDivElement>(null)
  const badgeRef    = useRef<HTMLSpanElement>(null)
  const headingRef  = useRef<HTMLHeadingElement>(null)
  const subRef      = useRef<HTMLParagraphElement>(null)
  const ctaRef      = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // ── GPU layer voor butter-smooth compositing ────────────────
    gsap.set(video, { force3D: true, willChange: "transform" })

    // ── Entrance animaties ──────────────────────────────────────
    gsap.set([badgeRef.current, headingRef.current, subRef.current, ctaRef.current], {
      opacity: 0,
      y: 40,
      force3D: true,
    })

    const tl = gsap.timeline({ delay: 0.15 })
    tl.to(badgeRef.current,   { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" })
      .to(headingRef.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.3")
      .to(subRef.current,     { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" }, "-=0.4")
      .to(ctaRef.current,     { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }, "-=0.3")

    // ── Video scrub — lerp op rAF voor butter-smooth GPU playback ──
    video.pause()
    video.currentTime = 0

    let targetTime = 0
    let currentTime = 0
    let rafId: number
    const LERP = 0.08  // snelheid: lager = zachter

    const tick = () => {
      if (video.duration) {
        // smooth interpolatie naar target
        currentTime += (targetTime - currentTime) * LERP
        // alleen schrijven als er verschil is (>0.01s) — voorkomt onnodige seeks
        if (Math.abs(video.currentTime - currentTime) > 0.01) {
          video.currentTime = currentTime
        }
      }
      rafId = requestAnimationFrame(tick)
    }

    const onScroll = () => {
      if (!video.duration) return
      const progress = Math.min(window.scrollY / (window.innerHeight * 1.5), 1)
      targetTime = progress * video.duration
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    rafId = requestAnimationFrame(tick)

    // ── Content fade-out terwijl site er overheen scrollt ──────
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -50,
      ease: "power1.inOut",
      force3D: true,
      scrollTrigger: {
        start: "top top",
        end: `+=${window.innerHeight * 0.35}`,
        scrub: true,
      },
    })

    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(rafId)
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div
      className="sticky top-0 w-full h-screen overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {/* ── Scroll-driven video — GPU-geaccelereerd ── */}
      <video
        ref={videoRef}
        src="/videos/hero/scroll-source-scrub.mp4"
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

      {/* ── Hero content ── */}
      <div
        ref={contentRef}
        className="relative z-10 h-full flex items-center px-6 lg:px-20"
        style={{ willChange: "opacity, transform" }}
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
