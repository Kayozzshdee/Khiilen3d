import { supabase } from "./supabase";
import { Product, User, Category } from "./type";
export async function getData<T>(table: string): Promise<T[] | null> {
  const { data, error } = await supabase.from(table).select("*");
  if (error) {
    console.error(`Error fetching data from ${table}:`, error);
    return null;
  }
  return data as T[];
}

/**
 * Fetch products from the "products" table.
 * @returns A promise that resolves to an array of Product objects or null if an error occurs.
 */
export async function getProducts(): Promise<Product[] | null> {
  return await getData<Product>("products");
}

/**
 * Fetch users from the "users" table.
 * @returns A promise that resolves to an array of User objects or null if an error occurs.
 */
export async function getUsers(): Promise<User[] | null> {
  return await getData<User>("users");
}

/**
 * Fetch categories from the "categories" table.
 * @returns A promise that resolves to an array of Category objects or null if an error occurs.
 */
export async function getCategories(): Promise<Category[] | null> {
  return await getData<Category>("categories");
}
