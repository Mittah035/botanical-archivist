export type ProductCategory = "truffels" | "growkits" | "microdosering" | "accessoires"

export interface Product {
  id: string
  slug: string
  name: string
  category: ProductCategory
  price: number // eurocenten
  compareAtPrice?: number
  images: string[]
  description: string
  shortDescription: string
  stock: number
  ageRestricted: boolean
  featured: boolean
  tags: string[]
  weight?: number // gram
  strain?: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
  itemCount: number
}

export interface Order {
  id: string
  items: CartItem[]
  total: number
  status: "pending" | "paid" | "shipped" | "delivered" | "cancelled"
  shippingAddress: ShippingAddress
  createdAt: string
  paymentMethod: string
}

export interface ShippingAddress {
  firstName: string
  lastName: string
  email: string
  phone: string
  street: string
  houseNumber: string
  postalCode: string
  city: string
  country: string
}
