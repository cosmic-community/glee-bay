import Link from 'next/link'
import type { Review } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'
import StarRating from '@/components/StarRating'

interface ReviewCardProps {
  review: Review
  showProduct?: boolean
}

export default function ReviewCard({ review, showProduct = true }: ReviewCardProps) {
  const reviewer = getMetafieldValue(review.metadata?.reviewer_name) || 'Anonymous'
  const rating = review.metadata?.rating ?? 0
  const text = getMetafieldValue(review.metadata?.review_text)
  const product = review.metadata?.product

  return (
    <div className="glass-panel rounded-xl p-5 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <span className="font-display font-bold text-gray-100">{reviewer}</span>
        <StarRating rating={rating} />
      </div>
      {text && <p className="text-gray-300 text-sm leading-relaxed">{text}</p>}
      {showProduct && product && (
        <Link
          href={`/products/${product.slug}`}
          className="mt-3 text-xs uppercase tracking-widest text-neon-cyan hover:underline"
        >
          on {product.title} →
        </Link>
      )}
    </div>
  )
}