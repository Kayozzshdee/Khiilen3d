// types.ts

// --- ENUM TYPES ---

// Represents user roles defined in the "user_role" enum
export type UserRole = "admin" | "customer";

// Represents product attribute types defined in the "product_attribute_type" enum
export type ProductAttributeType = "color" | "size";

// Represents payment statuses defined in the "payment_status" enum
export type PaymentStatus = "pending" | "completed" | "failed" | "refunded";

// --- INTERFACES FOR DATABASE TABLES ---

// users table
export interface User {
  id: string; // UUID
  avatar?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  username: string;
  email: string;
  birth_date?: string | null; // ISO date string
  phone_number?: string | null;
  role: UserRole;
  created_at: string; // ISO timestamp string
  deleted_at?: string | null;
}

// addresses table
export interface Address {
  id: number; // serial
  user_id: string; // UUID (foreign key to users)
  title: string;
  address_line_1: string;
  address_line_2?: string | null;
  country: string;
  city: string;
  postal_code: string;
  landmark?: string | null;
  phone_number: string;
  created_at: string; // ISO timestamp string
  deleted_at?: string | null;
}

// categories table
export interface Category {
  id: number; // serial
  name: string;
  description?: string | null;
  created_at: string; // ISO timestamp string
  deleted_at?: string | null;
}

// sub_categories table
export interface SubCategory {
  id: number; // serial
  parent_id: number; // foreign key to categories
  name: string;
  description?: string | null;
  created_at: string; // ISO timestamp string
  deleted_at?: string | null;
}

// products table
export interface Product {
  id: number; // serial
  name: string;
  description: string;
  summary?: string | null;
  cover?: string | null;
  category_id: number; // foreign key to sub_categories
  created_at: string; // ISO timestamp string
  deleted_at?: string | null;
}

// product_attributes table
export interface ProductAttribute {
  id: number; // serial
  type: ProductAttributeType;
  value: string;
  created_at: string; // ISO timestamp string
  deleted_at?: string | null;
}

// products_skus table
export interface ProductSKU {
  id: number; // serial
  product_id: number; // foreign key to products
  size_attribute_id?: number | null; // foreign key to product_attributes
  color_attribute_id?: number | null; // foreign key to product_attributes
  sku: string;
  price: number; // numeric(10,2)
  quantity: number;
  discount: number; // numeric(10,2), added via ALTER TABLE, default 0
  created_at: string; // ISO timestamp string
  deleted_at?: string | null;
}

// wishlist table
export interface Wishlist {
  id: number; // serial
  user_id: string; // UUID, foreign key to users
  product_id: number; // foreign key to products
  created_at: string; // ISO timestamp string
  deleted_at?: string | null;
}

// cart table
export interface Cart {
  id: number; // serial
  user_id: string; // UUID, foreign key to users
  total: number; // numeric(10,2)
  discount: number; // numeric(10,2)
  created_at: string; // ISO timestamp string
  updated_at: string; // ISO timestamp string
}

// cart_item table
export interface CartItem {
  id: number; // serial
  cart_id: number; // foreign key to cart
  product_id: number; // foreign key to products
  products_sku_id: number; // foreign key to products_skus
  quantity: number;
  created_at: string; // ISO timestamp string
  updated_at: string; // ISO timestamp string
}

// order_details table
export interface OrderDetail {
  id: number; // serial
  user_id: string; // UUID, foreign key to users
  payment_id?: number | null; // optional payment reference
  total: number; // numeric(10,2)
  discount: number; // numeric(10,2)
  created_at: string; // ISO timestamp string
  updated_at: string; // ISO timestamp string
}

// order_item table
export interface OrderItem {
  id: number; // serial
  order_id: number; // foreign key to order_details
  product_id: number; // foreign key to products
  products_sku_id: number; // foreign key to products_skus
  quantity: number;
  created_at: string; // ISO timestamp string
  updated_at: string; // ISO timestamp string
}

// payment_details table
export interface PaymentDetail {
  id: number; // serial
  order_id: number; // foreign key to order_details
  amount: number; // numeric(10,2)
  provider: string;
  status: PaymentStatus;
  created_at: string; // ISO timestamp string
  updated_at: string; // ISO timestamp string
}
