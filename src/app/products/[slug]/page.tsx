import { notFound } from "next/navigation"
import { getProductBySlug, getRelatedProducts, products } from "@/lib/data/products"
import { ProductDetailClient } from "./ProductDetailClient"

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) return {}
  return {
    title: `${product.name} — Magicmushies`,
    description: product.description,
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProductBySlug(slug)
  if (!product) notFound()

  const related = getRelatedProducts(product!, 4)

  return <ProductDetailClient product={product!} related={related} />
}
