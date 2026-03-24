-- Botanical Archivist -- Supabase Database Schema
-- Run this in Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =============================================
-- PRODUCTS
-- =============================================
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL CHECK (category IN ('truffels', 'growkits', 'microdosering', 'accessoires')),
  price INTEGER NOT NULL, -- in eurocenten
  original_price INTEGER,
  description TEXT NOT NULL,
  long_description TEXT NOT NULL,
  emoji TEXT NOT NULL,
  badge TEXT CHECK (badge IN ('bestseller', 'nieuw', 'sale', 'uitverkocht')),
  strength INTEGER CHECK (strength BETWEEN 1 AND 5),
  weight TEXT,
  effects TEXT[] DEFAULT '{}',
  contents TEXT[] DEFAULT '{}',
  usage TEXT,
  in_stock BOOLEAN DEFAULT TRUE,
  stock_count INTEGER DEFAULT 100,
  rating DECIMAL(3,2) DEFAULT 0,
  review_count INTEGER DEFAULT 0,
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- CUSTOMERS
-- =============================================
CREATE TABLE IF NOT EXISTS customers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  auth_id UUID UNIQUE, -- Supabase auth.users id
  email TEXT UNIQUE NOT NULL,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  date_of_birth DATE,
  age_verified BOOLEAN DEFAULT FALSE,
  marketing_opt_in BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- ADDRESSES
-- =============================================
CREATE TABLE IF NOT EXISTS addresses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  street TEXT NOT NULL,
  house_number TEXT NOT NULL,
  postal_code TEXT NOT NULL,
  city TEXT NOT NULL,
  country TEXT DEFAULT 'NL',
  is_default BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- ORDERS
-- =============================================
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number TEXT UNIQUE NOT NULL,
  customer_id UUID REFERENCES customers(id),
  customer_email TEXT NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN (
    'pending', 'payment_pending', 'paid', 'processing',
    'shipped', 'delivered', 'cancelled', 'refunded'
  )),
  subtotal INTEGER NOT NULL, -- eurocenten
  shipping_cost INTEGER DEFAULT 450, -- eurocenten
  discount INTEGER DEFAULT 0, -- eurocenten
  total INTEGER NOT NULL, -- eurocenten
  vat_amount INTEGER NOT NULL, -- eurocenten (21%)
  payment_method TEXT,
  payment_id TEXT, -- Mollie payment ID
  shipping_address JSONB NOT NULL,
  notes TEXT,
  age_verified_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- ORDER ITEMS
-- =============================================
CREATE TABLE IF NOT EXISTS order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  product_id UUID REFERENCES products(id),
  product_name TEXT NOT NULL,
  product_emoji TEXT NOT NULL,
  price INTEGER NOT NULL, -- eurocenten op moment van bestellen
  quantity INTEGER NOT NULL,
  subtotal INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- REVIEWS
-- =============================================
CREATE TABLE IF NOT EXISTS reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  product_id UUID REFERENCES products(id) ON DELETE CASCADE,
  customer_id UUID REFERENCES customers(id),
  order_id UUID REFERENCES orders(id),
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  title TEXT,
  body TEXT,
  verified_purchase BOOLEAN DEFAULT FALSE,
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- NEWSLETTER SUBSCRIBERS
-- =============================================
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  first_name TEXT,
  subscribed BOOLEAN DEFAULT TRUE,
  source TEXT DEFAULT 'website',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- COUPONS
-- =============================================
CREATE TABLE IF NOT EXISTS coupons (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  code TEXT UNIQUE NOT NULL,
  description TEXT,
  discount_type TEXT NOT NULL CHECK (discount_type IN ('percentage', 'fixed')),
  discount_value INTEGER NOT NULL, -- percentage (1-100) or eurocenten
  minimum_order INTEGER DEFAULT 0,
  max_uses INTEGER,
  uses_count INTEGER DEFAULT 0,
  valid_from TIMESTAMPTZ DEFAULT NOW(),
  valid_until TIMESTAMPTZ,
  active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- =============================================
-- ROW LEVEL SECURITY
-- =============================================

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE addresses ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Products: public read
CREATE POLICY "Products are publicly readable" ON products FOR SELECT TO anon, authenticated USING (true);

-- Customers: own data only
CREATE POLICY "Customers can read own data" ON customers FOR SELECT TO authenticated USING (auth.uid() = auth_id);
CREATE POLICY "Customers can update own data" ON customers FOR UPDATE TO authenticated USING (auth.uid() = auth_id);

-- Orders: own orders only
CREATE POLICY "Customers can view own orders" ON orders FOR SELECT TO authenticated
  USING (customer_id IN (SELECT id FROM customers WHERE auth_id = auth.uid()));

-- Reviews: public read, own create
CREATE POLICY "Reviews are publicly readable" ON reviews FOR SELECT TO anon, authenticated USING (published = true);
CREATE POLICY "Customers can create reviews" ON reviews FOR INSERT TO authenticated WITH CHECK (
  customer_id IN (SELECT id FROM customers WHERE auth_id = auth.uid())
);

-- =============================================
-- INDEXES
-- =============================================
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_slug ON products(slug);
CREATE INDEX IF NOT EXISTS idx_products_featured ON products(featured);
CREATE INDEX IF NOT EXISTS idx_orders_customer_id ON orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_order_items_order_id ON order_items(order_id);
CREATE INDEX IF NOT EXISTS idx_reviews_product_id ON reviews(product_id);

-- =============================================
-- FUNCTIONS
-- =============================================

-- Auto-generate order number
CREATE OR REPLACE FUNCTION generate_order_number()
RETURNS TEXT AS $$
BEGIN
  RETURN 'BA-' || TO_CHAR(NOW(), 'YYYY') || '-' || LPAD(nextval('order_number_seq')::TEXT, 5, '0');
END;
$$ LANGUAGE plpgsql;

CREATE SEQUENCE IF NOT EXISTS order_number_seq START 1000;

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON products FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON orders FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON customers FOR EACH ROW EXECUTE FUNCTION update_updated_at();
