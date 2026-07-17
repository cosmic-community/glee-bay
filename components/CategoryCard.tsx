import Link from 'next/link'
import type { Category } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  const image = category.metadata?.category_image
  const accent = getMetafieldValue(category.metadata?.accent_color) || '#00f0ff'
  const name = getMetafieldValue(category.metadata?.name) || category.title
  const description = getMetafieldValue(category.metadata?.description)

  return (
    <Link
      href={`/categories/${category.slug}`}
      className="group relative rounded-xl overflow-hidden glass-panel hover:-translate-y-1 transition-all duration-300 flex flex-col"
      style={{ boxShadow: `0 0 0 1px ${accent}33` }}
    >
      <div className="relative aspect-video overflow-hidden bg-surface">
        {image ? (
          <img
            src={`${image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
            alt={name}
            width={400}
            height={225}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl">
            🏷️
          </div>
        )}
        <div
          className="absolute inset-0 opacity-40 mix-blend-overlay"
          style={{
            background: `linear-gradient(135deg, ${accent}00, ${accent})`,
          }}
        />
      </div>
      <div className="p-4">
        <h3
          className="font-display font-bold text-lg group-hover:opacity-90 transition-opacity"
          style={{ color: accent }}
        >
          {name}
        </h3>
        {description && (
          <p className="text-sm text-gray-400 mt-1 line-clamp-2">{description}</p>
        )}
      </div>
    </Link>
  )
}