import { getSellers } from '@/lib/cosmic'
import SellerCard from '@/components/SellerCard'

export const metadata = {
  title: 'Sellers — Glee Bay',
}

export default async function SellersPage() {
  const sellers = await getSellers()

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-display text-3xl font-bold tracking-wider neon-text mb-8">
        Sellers
      </h1>
      {sellers.length === 0 ? (
        <p className="text-gray-400">No sellers found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sellers.map((seller) => (
            <SellerCard key={seller.id} seller={seller} />
          ))}
        </div>
      )}
    </div>
  )
}