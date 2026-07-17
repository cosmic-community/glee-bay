import Link from 'next/link'
import type { Seller } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface SellerCardProps {
  seller: Seller
}

export default function SellerCard({ seller }: SellerCardProps) {
  const avatar = seller.metadata?.avatar
  const name = getMetafieldValue(seller.metadata?.name) || seller.title
  const location = getMetafieldValue(seller.metadata?.location)
  const verified = seller.metadata?.verified === true
  const bio = getMetafieldValue(seller.metadata?.bio)

  return (
    <Link
      href={`/sellers/${seller.slug}`}
      className="group glass-panel rounded-xl p-5 hover:shadow-neon-purple transition-all duration-300 hover:-translate-y-1 flex items-center gap-4"
    >
      <div className="relative flex-shrink-0">
        {avatar ? (
          <img
            src={`${avatar.imgix_url}?w=160&h=160&fit=crop&auto=format,compress`}
            alt={name}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full object-cover neon-border"
          />
        ) : (
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl neon-border bg-surface">
            👤
          </div>
        )}
      </div>
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-display font-bold text-gray-100 group-hover:text-neon-purple transition-colors truncate">
            {name}
          </h3>
          {verified && (
            <span className="text-neon-cyan" title="Verified seller">
              ✔
            </span>
          )}
        </div>
        {location && <p className="text-sm text-gray-400">{location}</p>}
        {bio && <p className="text-xs text-gray-500 mt-1 line-clamp-2">{bio}</p>}
      </div>
    </Link>
  )
}