import { HeroSection } from "@/components/sections/HeroSection"
import { TrustBadges } from "@/components/sections/TrustBadges"
import { BestsellersGrid } from "@/components/sections/BestsellersGrid"
import { MicrodoseSection } from "@/components/sections/MicrodoseSection"
import { FeaturedCategories } from "@/components/sections/FeaturedCategories"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBadges />
      <BestsellersGrid />
      <MicrodoseSection />
      <FeaturedCategories />
    </>
  )
}
