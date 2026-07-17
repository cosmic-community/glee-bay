import type { MetadataRoute } from 'next'
import { getProducts, getCategories, getSellers } from '@/lib/cosmic'

// Base URL for the site. Falls back to the production URL.
const BASE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://glee-bay.cosmic.site'
).replace(/\/$/, '')

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  // Static, top-level routes.
  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/products',
    '/categories',
    '/sellers',
    '/reviews',
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'daily',
    priority: path === '' ? 1 : 0.8,
  }))

  // Dynamic routes pulled from Cosmic content.
  const [products, categories, sellers] = await Promise.all([
    getProducts(),
    getCategories(),
    getSellers(),
  ])

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${BASE_URL}/products/${product.slug}`,
    lastModified: product.modified_at ? new Date(product.modified_at) : now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }))

  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/categories/${category.slug}`,
    lastModified: category.modified_at ? new Date(category.modified_at) : now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  const sellerRoutes: MetadataRoute.Sitemap = sellers.map((seller) => ({
    url: `${BASE_URL}/sellers/${seller.slug}`,
    lastModified: seller.modified_at ? new Date(seller.modified_at) : now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }))

  return [
    ...staticRoutes,
    ...productRoutes,
    ...categoryRoutes,
    ...sellerRoutes,
  ]
}
