import { notFound } from "next/navigation"
import { getProductBySlug, getRelatedProducts, products } from "@/lib/data/products"
import { ProductDetailClient } from "./ProductDetailClient"

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  if (!product) return {}
  return {
    title: `${product.name} — Magicmushies`,
    description: product.description,
  }
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const related = getRelatedProducts(product!, 4)

  return <ProductDetailClient product={product!} related={related} />
}
