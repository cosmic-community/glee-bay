// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Category extends CosmicObject {
  type: 'categories';
  metadata: {
    name?: string;
    description?: string;
    category_image?: CosmicImage;
    accent_color?: string;
  };
}

export interface Seller extends CosmicObject {
  type: 'sellers';
  metadata: {
    name?: string;
    bio?: string;
    avatar?: CosmicImage;
    storefront_banner?: CosmicImage;
    location?: string;
    verified?: boolean;
  };
}

export type ProductCondition = 'New' | 'Like New' | 'Used' | 'Refurbished';

export interface Product extends CosmicObject {
  type: 'products';
  metadata: {
    title?: string;
    description?: string;
    price?: number;
    condition?: string | { key: string; value: string };
    stock?: number;
    gallery?: CosmicImage[];
    category?: Category;
    seller?: Seller;
  };
}

export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    reviewer_name?: string;
    rating?: number;
    review_text?: string;
    product?: Product;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Type guards
export function isProduct(obj: CosmicObject): obj is Product {
  return obj.type === 'products';
}

export function isCategory(obj: CosmicObject): obj is Category {
  return obj.type === 'categories';
}