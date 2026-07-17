import Link from 'next/link'
import { getProducts, getCategories, getSellers } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'
import CategoryCard from '@/components/CategoryCard'

export default async function HomePage() {
  const [products, categories, sellers] = await Promise.all([
    getProducts(),
    getCategories(),
    getSellers(),
  ])

  const featuredProducts = products.slice(0, 8)
  const featuredCategories = categories.slice(0, 6)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-neon-gradient opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h1 className="font-display text-4xl sm:text-6xl font-black tracking-widest neon-text mb-6">
            GLEE BAY
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            The futuristic marketplace where buyers meet sellers across the
            neon grid. Discover cutting-edge products at electric prices.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/products"
              className="neon-border px-8 py-3 rounded-lg font-semibold uppercase tracking-wider text-neon-cyan hover:bg-neon-cyan/10 transition-colors"
            >
              Shop Now
            </Link>
            <Link
              href="/sellers"
              className="px-8 py-3 rounded-lg font-semibold uppercase tracking-wider text-gray-300 border border-gray-700 hover:border-neon-purple hover:text-neon-purple transition-colors"
            >
              Meet Sellers
            </Link>
          </div>
          <div className="mt-12 flex items-center justify-center gap-8 text-sm">
            <div>
              <span className="block font-display text-2xl font-bold text-neon-cyan">
                {products.length}
              </span>
              <span className="text-gray-400 uppercase tracking-wider">
                Products
              </span>
            </div>
            <div>
              <span className="block font-display text-2xl font-bold text-neon-magenta">
                {categories.length}
              </span>
              <span className="text-gray-400 uppercase tracking-wider">
                Categories
              </span>
            </div>
            <div>
              <span className="block font-display text-2xl font-bold text-neon-purple">
                {sellers.length}
              </span>
              <span className="text-gray-400 uppercase tracking-wider">
                Sellers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      {featuredCategories.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold tracking-wider text-gray-100">
              Explore Categories
            </h2>
            <Link
              href="/categories"
              className="text-sm uppercase tracking-wider text-neon-cyan hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
      )}

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-2xl font-bold tracking-wider text-gray-100">
              Featured Products
            </h2>
            <Link
              href="/products"
              className="text-sm uppercase tracking-wider text-neon-cyan hover:underline"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}