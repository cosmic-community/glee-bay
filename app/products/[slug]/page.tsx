// app/products/[slug]/page.tsx
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProduct, getReviewsByProduct, getMetafieldValue } from '@/lib/cosmic'
import ReviewCard from '@/components/ReviewCard'
import StarRating from '@/components/StarRating'

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  const reviews = await getReviewsByProduct(product.id)
  const gallery = product.metadata?.gallery || []
  const price = product.metadata?.price
  const condition = getMetafieldValue(product.metadata?.condition)
  const stock = product.metadata?.stock ?? 0
  const description = getMetafieldValue(product.metadata?.description)
  const category = product.metadata?.category
  const seller = product.metadata?.seller

  const avgRating =
    reviews.length > 0
      ? reviews.reduce((sum, r) => sum + (r.metadata?.rating ?? 0), 0) /
        reviews.length
      : 0

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Gallery */}
        <div>
          <div className="glass-panel rounded-xl overflow-hidden aspect-square bg-surface">
            {gallery.length > 0 ? (
              <img
                src={`${gallery[0]!.imgix_url}?w=1200&h=1200&fit=crop&auto=format,compress`}
                alt={product.title}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-6xl">
                🛸
              </div>
            )}
          </div>
          {gallery.length > 1 && (
            <div className="grid grid-cols-4 gap-3 mt-3">
              {gallery.slice(1, 5).map((img, i) => (
                <div
                  key={i}
                  className="glass-panel rounded-lg overflow-hidden aspect-square bg-surface"
                >
                  <img
                    src={`${img.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                    alt={`${product.title} ${i + 2}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div>
          {category && (
            <Link
              href={`/categories/${category.slug}`}
              className="text-sm uppercase tracking-widest text-neon-magenta hover:underline"
            >
              {getMetafieldValue(category.metadata?.name) || category.title}
            </Link>
          )}
          <h1 className="font-display text-3xl font-bold text-gray-100 mt-2 mb-4">
            {product.title}
          </h1>

          {reviews.length > 0 && (
            <div className="flex items-center gap-2 mb-4">
              <StarRating rating={avgRating} />
              <span className="text-sm text-gray-400">
                {avgRating.toFixed(1)} ({reviews.length} reviews)
              </span>
            </div>
          )}

          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-neon-green">
              {typeof price === 'number' ? `$${price.toLocaleString()}` : '—'}
            </span>
            {condition && (
              <span className="text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded neon-border text-neon-cyan">
                {condition}
              </span>
            )}
          </div>

          <p
            className={`text-sm font-semibold mb-6 ${
              stock > 0 ? 'text-gray-300' : 'text-neon-magenta'
            }`}
          >
            {stock > 0 ? `${stock} available` : 'Sold out'}
          </p>

          {description && (
            <div className="glass-panel rounded-xl p-5 mb-6">
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {description}
              </p>
            </div>
          )}

          {seller && (
            <Link
              href={`/sellers/${seller.slug}`}
              className="glass-panel rounded-xl p-4 flex items-center gap-3 hover:shadow-neon-purple transition-all"
            >
              {seller.metadata?.avatar ? (
                <img
                  src={`${seller.metadata.avatar.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
                  alt={getMetafieldValue(seller.metadata?.name) || seller.title}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center">
                  👤
                </div>
              )}
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Sold by
                </p>
                <p className="font-display font-bold text-neon-purple">
                  {getMetafieldValue(seller.metadata?.name) || seller.title}
                  {seller.metadata?.verified === true && (
                    <span className="ml-1 text-neon-cyan">✔</span>
                  )}
                </p>
              </div>
            </Link>
          )}
        </div>
      </div>

      {/* Reviews */}
      <section className="mt-14">
        <h2 className="font-display text-2xl font-bold tracking-wider text-gray-100 mb-6">
          Customer Reviews
        </h2>
        {reviews.length === 0 ? (
          <p className="text-gray-400">No reviews yet for this product.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} showProduct={false} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}