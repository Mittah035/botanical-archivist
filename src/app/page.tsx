import { HeroSection } from "@/components/sections/HeroSection"
import { TrustBadges } from "@/components/sections/TrustBadges"
import { BestsellersGrid } from "@/components/sections/BestsellersGrid"
import { MicrodoseSection } from "@/components/sections/MicrodoseSection"
import { FeaturedCategories } from "@/components/sections/FeaturedCategories"
import { TestimonialsSection } from "@/components/sections/TestimonialsSection"
import { NewsletterSection } from "@/components/sections/NewsletterSection"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <BestsellersGrid />
      <FeaturedCategories />
      <MicrodoseSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  )
}
