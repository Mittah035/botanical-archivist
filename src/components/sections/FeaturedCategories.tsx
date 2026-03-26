import Link from "next/link"
import Image from "next/image"

const categories = [
  {
    slug: "truffels",
    name: "Truffels",
    image: "/images/categories/cat-1.jpg",
  },
  {
    slug: "microdosering",
    name: "Microdosering",
    image: "/images/categories/cat-2.jpg",
  },
  {
    slug: "growkits",
    name: "Growkits",
    image: "/images/categories/cat-3.jpg",
  },
  {
    slug: "accessoires",
    name: "Accessoires",
    image: "/images/categories/cat-acc.jpg",
  },
  {
    slug: "bundels",
    name: "Bundels",
    image: "/images/categories/cat-bundels.jpg",
  },
  {
    slug: "nieuw",
    name: "Nieuw",
    image: "/images/categories/cat-nieuw.jpg",
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
