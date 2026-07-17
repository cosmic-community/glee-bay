// app/sellers/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getSeller, getProductsBySeller, getMetafieldValue } from '@/lib/cosmic'
import ProductCard from '@/components/ProductCard'

export default async function SellerPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const seller = await getSeller(slug)

  if (!seller) {
    notFound()
  }

  const products = await getProductsBySeller(seller.id)
  const name = getMetafieldValue(seller.metadata?.name) || seller.title
  const bio = getMetafieldValue(seller.metadata?.bio)
  const location = getMetafieldValue(seller.metadata?.location)
  const verified = seller.metadata?.verified === true
  const banner = seller.metadata?.storefront_banner
  const avatar = seller.metadata?.avatar

  return (
    <div>
      <div className="relative">
        <div className="h-48 sm:h-64 overflow-hidden bg-surface">
          {banner ? (
            <img
              src={`${banner.imgix_url}?w=1600&h=500&fit=crop&auto=format,compress`}
              alt={name}
              width={1600}
              height={500}
              className="w-full h-full object-cover opacity-60"
            />
          ) : (
            <div className="w-full h-full bg-neon-gradient opacity-20" />
          )}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end gap-4 -mt-12 relative">
            {avatar ? (
              <img
                src={`${avatar.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
                alt={name}
                width={100}
                height={100}
                className="w-24 h-24 rounded-full object-cover neon-border bg-surface"
              />
            ) : (
              <div className="w-24 h-24 rounded-full flex items-center justify-center text-3xl neon-border bg-surface">
                👤
              </div>
            )}
            <div className="pb-2">
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-gray-100 flex items-center gap-2">
                {name}
                {verified && <span className="text-neon-cyan text-lg">✔</span>}
              </h1>
              {location && <p className="text-gray-400 text-sm">{location}</p>}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {bio && (
          <div className="glass-panel rounded-xl p-5 mb-8">
            <p className="text-gray-300 leading-relaxed">{bio}</p>
          </div>
        )}

        <h2 className="font-display text-2xl font-bold tracking-wider text-gray-100 mb-6">
          Products from {name}
        </h2>
        {products.length === 0 ? (
          <p className="text-gray-400">This seller has no products listed.</p>
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