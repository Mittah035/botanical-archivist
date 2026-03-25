import { MetadataRoute } from "next"
import { products } from "@/lib/data/products"
import { blogPosts } from "@/lib/data/blog"

const BASE_URL = "https://magicmushies.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  const blogUrls = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const staticPages = [
    { url: BASE_URL, priority: 1.0, changeFrequency: "daily" as const },
    { url: `${BASE_URL}/products`, priority: 0.9, changeFrequency: "daily" as const },
    { url: `${BASE_URL}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/blog`, priority: 0.7, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/contact`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/faq`, priority: 0.6, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/privacy`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/terms`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/disclaimer`, priority: 0.3, changeFrequency: "yearly" as const },
    { url: `${BASE_URL}/cookies`, priority: 0.3, changeFrequency: "yearly" as const },
  ].map((p) => ({ ...p, lastModified: new Date() }))

  return [...staticPages, ...productUrls, ...blogUrls]
}
