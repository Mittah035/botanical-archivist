import Image from "next/image"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, Clock, Calendar, User } from "lucide-react"
import { getBlogPostBySlug, blogPosts } from "@/lib/data/blog"

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) return {}
  return { title: `${post.title} — Magicmushies`, description: post.excerpt }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <main className="min-h-screen bg-surface-low pt-24">
      {/* Hero */}
      <section className="bg-primary text-white py-16 px-6 md:px-20">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/50 hover:text-white mb-6 text-sm transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Terug naar blog
          </Link>
          <span className="text-xs uppercase tracking-wider text-[#c1ecd4] font-medium bg-white/10 px-3 py-1 rounded-full mb-4 inline-block">
            {post.category}
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-extrabold mt-3 mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/50">
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              {post.author}
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(post.date).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" })}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime} min lezen
            </div>
          </div>
        </div>
      </section>

      {/* Banner image */}
      <div className="max-w-3xl mx-auto px-6 md:px-20 -mt-1">
        <div className="aspect-[3/1] rounded-b-2xl overflow-hidden relative">
          <Image
            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1200&q=80"
            alt={post.title}
            fill
            className="object-cover"
            sizes="800px"
          />
          <div className="absolute inset-0 bg-primary/30" />
          <div className="absolute inset-0 flex items-center justify-center text-7xl">
            {post.emoji}
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 md:px-20 py-12">
        <p className="text-lg text-foreground/70 leading-relaxed mb-8 font-medium">{post.excerpt}</p>
        <div
          className="prose prose-green max-w-none prose-headings:font-display prose-headings:text-primary prose-p:text-foreground/70 prose-p:leading-relaxed prose-li:text-foreground/70 prose-strong:text-primary prose-h2:text-xl prose-h3:text-base"
          dangerouslySetInnerHTML={{
            __html: post.content
              .replace(/## (.*)/g, '<h2 class="font-display text-xl font-bold text-primary mt-8 mb-3">$1</h2>')
              .replace(/### (.*)/g, '<h3 class="font-bold text-primary mt-5 mb-2">$1</h3>')
              .replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary">$1</strong>')
              .replace(/- (.*)/g, '<li class="text-foreground/70 mb-1">$1</li>')
              .replace(/\n\n/g, '</p><p class="text-foreground/70 leading-relaxed mb-4">')
              .replace(/^/, '<p class="text-foreground/70 leading-relaxed mb-4">')
              .replace(/$/, '</p>'),
          }}
        />

        {/* Disclaimer */}
        <div className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-5">
          <p className="text-xs text-amber-700 leading-relaxed">
            <strong>Disclaimer:</strong> De informatie op deze pagina is uitsluitend voor educatieve doeleinden.
            Dit is geen medisch advies. Raadpleeg een arts als je medicijnen gebruikt of psychische klachten hebt.
            Psilocybine is een psychoactieve stof — gebruik altijd verantwoordelijk en wees je bewust van risico&apos;s.
          </p>
        </div>
      </article>
    </main>
  )
}
