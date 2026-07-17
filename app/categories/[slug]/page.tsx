// app/categories/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getCategory, getProductsByCategory, getMetafieldValue } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const category = await getCategory(slug)

  if (!category) {
    notFound()
  }

  const products = await getProductsByCategory(category.id)
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)
  const accent = getMetafieldValue(category.metadata?.accent_color) || '#00f0ff'
  const image = category.metadata?.category_image

  return (
    <div>
      <div className="relative overflow-hidden">
        {image && (
          <img
            src={`${image.imgix_url}?w=1600&h=500&fit=crop&auto=format,compress`}
            alt={name}
            width={1600}
            height={500}
            className="w-full h-56 sm:h-72 object-cover opacity-40"
          />
        )}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1
              className="font-display text-4xl font-black tracking-widest"
              style={{ color: accent }}
            >
              {name}
            </h1>
            {description && (
              <p className="text-gray-300 mt-2 max-w-2xl">{description}</p>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {products.length === 0 ? (
          <p className="text-gray-400">No products in this category yet.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}