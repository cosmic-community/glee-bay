import Link from 'next/link'
import type { Product } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const gallery = product.metadata?.gallery
  const firstImage = gallery && gallery.length > 0 ? gallery[0] : undefined
  const price = product.metadata?.price
  const condition = getMetafieldValue(product.metadata?.condition)
  const category = product.metadata?.category
  const stock = product.metadata?.stock ?? 0

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group glass-panel rounded-xl overflow-hidden hover:shadow-neon-cyan transition-all duration-300 hover:-translate-y-1 flex flex-col"
    >
      <div className="relative aspect-square overflow-hidden bg-surface">
        {firstImage ? (
          <img
            src={`${firstImage.imgix_url}?w=600&h=600&fit=crop&auto=format,compress`}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">
            🛸
          </div>
        )}
        {condition && (
          <span className="absolute top-3 left-3 text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded neon-border bg-background/70 text-neon-cyan">
            {condition}
          </span>
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        {category && (
          <span className="text-xs uppercase tracking-widest text-neon-magenta mb-1">
            {getMetafieldValue(category.metadata?.name) || category.title}
          </span>
        )}
        <h3 className="font-display font-bold text-gray-100 group-hover:text-neon-cyan transition-colors line-clamp-2">
          {product.title}
        </h3>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="text-xl font-bold text-neon-green">
            {typeof price === 'number' ? `$${price.toLocaleString()}` : '—'}
          </span>
          <span
            className={`text-xs font-semibold ${
              stock > 0 ? 'text-gray-400' : 'text-neon-magenta'
            }`}
          >
            {stock > 0 ? `${stock} in stock` : 'Sold out'}
          </span>
        </div>
      </div>
    </Link>
  )
}