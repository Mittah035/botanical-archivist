import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    slug: "truffels",
    name: "Truffels",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=400&q=80",
  },
  {
    slug: "growkits",
    name: "Growkits",
    image: "https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=400&q=80",
  },
  {
    slug: "microdosering",
    name: "Microdosering",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?w=400&q=80",
  },
  {
    slug: "accessoires",
    name: "Accessoires",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80",
  },
  {
    slug: "bundels",
    name: "Bundels",
    image: "https://images.unsplash.com/photo-1509664389894-0d7b2f54e1d3?w=400&q=80",
  },
  {
    slug: "nieuw",
    name: "Nieuw",
    image: "https://images.unsplash.com/photo-1508873696983-2dfd5898f08b?w=400&q=80",
  },
]

export function FeaturedCategories() {
  return (
    <section className="py-8 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-xl font-bold text-gray-900 mb-5">
          Shop per categorie
        </h2>

        {/* Mobile: horizontal scroll / Desktop: grid */}
        <div
          className="flex gap-4 overflow-x-auto pb-3 -mx-4 px-4 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-6 snap-x snap-mandatory lg:snap-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/products?category=${cat.slug}`}
              className="snap-start shrink-0 w-[110px] lg:w-auto group"
            >
              <div className="rounded-xl overflow-hidden aspect-square relative bg-gray-100 border border-gray-100">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 110px, 16vw"
                />
              </div>
              <p className="mt-2 text-sm font-medium text-gray-800 text-center truncate">
                {cat.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
