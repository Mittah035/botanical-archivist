import { HeroSection } from "@/components/sections/HeroSection"
import { NewArrivalsCarousel } from "@/components/sections/NewArrivalsCarousel"
import { FeaturedCategories } from "@/components/sections/FeaturedCategories"
import { BestsellersGrid } from "@/components/sections/BestsellersGrid"

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <NewArrivalsCarousel />
      <FeaturedCategories />
      <BestsellersGrid />
    </div>
  )
}
