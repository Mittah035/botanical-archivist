export type ProductCategory = "truffels" | "growkits" | "microdosering" | "accessoires"

export interface CartItem {
  id: string
  name: string
  price: number // eurocenten
  quantity: number
  image: string // emoji
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
