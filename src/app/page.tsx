import { HeroSection } from "@/components/sections/HeroSection"
import { TrustBadges } from "@/components/sections/TrustBadges"
import { BestsellersGrid } from "@/components/sections/BestsellersGrid"
import { FeaturedCategories } from "@/components/sections/FeaturedCategories"
import { MicrodoseSection } from "@/components/sections/MicrodoseSection"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { NewsletterSection } from "@/components/sections/NewsletterSection"

export default function HomePage() {
  return (
    <>
      {/* Hero: sticky z-0, video scrubbet terwijl site eroverheen scrollt */}
      <HeroSection />

      {/* Transparant — hero-video zichtbaar achter secties */}
      <div className="relative z-10">
        <TrustBadges />
        <BestsellersGrid />
        <TestimonialsSection />
      </div>

      {/* Solid achtergrond vanaf hier */}
      <div className="relative z-10 bg-background">
        <FeaturedCategories />
        <MicrodoseSection />
        <NewsletterSection />
      </div>
    </>
  )
}
