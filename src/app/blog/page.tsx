import Image from "next/image"
import Link from "next/link"
import { Clock, ArrowRight } from "lucide-react"
import { FadeIn } from "@/components/animations/FadeIn"
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren"
import { blogPosts } from "@/lib/data/blog"

export const metadata = {
  title: "Blog & Kennisbank — Botanical Archivist",
  description: "Educatieve artikelen over psilocybine, microdosering, kweek en harm reduction.",
}

export default function BlogPage() {
  const featured = blogPosts[0]
  const rest = blogPosts.slice(1)

  return (
    <main className="min-h-screen bg-surface-low pt-24">
      <section className="bg-primary text-white py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#c1ecd4] mb-3 block font-medium">
              Kennisbank
            </span>
            <h1 className="font-display text-4xl font-extrabold mb-3">Blog & Educatie</h1>
            <p className="text-white/60 max-w-xl">
              Evidence-based informatie over psilocybine, microdosering, kweek en
              verantwoord gebruik — samengesteld door ons team.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 md:px-20 py-16">
        {/* Featured post */}
        <FadeIn className="mb-12">
          <Link href={`/blog/${featured.slug}`}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow group">
              <div className="aspect-[2/1] relative overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&q=80"
                  alt={featured.title}
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                <div className="absolute bottom-4 left-4 text-4xl">{featured.emoji}</div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs uppercase tracking-wider text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                    {featured.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-foreground/40">
                    <Clock className="w-3 h-3" />
                    {featured.readTime} min lezen
                  </div>
                </div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-foreground/60 leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm">
                  Lees meer
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </FadeIn>

        {/* Post grid */}
        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <StaggerItem key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow group h-full flex flex-col">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={`https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=75`}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-primary/20" />
                    <div className="absolute bottom-3 left-3 text-2xl">{post.emoji}</div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[10px] uppercase tracking-wider text-primary font-medium bg-primary/10 px-2 py-0.5 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-foreground/40">{post.readTime} min</span>
                    </div>
                    <h3 className="font-display font-bold text-primary mb-2 text-sm leading-snug group-hover:text-primary/80 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-xs text-foreground/60 leading-relaxed flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-primary text-xs font-medium mt-3">
                      Lees meer <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </section>
    </main>
  )
}
