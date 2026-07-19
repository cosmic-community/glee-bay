import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 glass-panel border-b border-neon-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🛸</span>
            <span className="font-display text-xl font-bold tracking-widest neon-text group-hover:animate-pulseglow">
              GLEE BAY
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm font-semibold uppercase tracking-wider">
            <Link
              href="/products"
              className="text-gray-300 hover:text-neon-cyan transition-colors"
            >
              Products
            </Link>
            <Link
              href="/categories"
              className="text-gray-300 hover:text-neon-magenta transition-colors"
            >
              Categories
            </Link>
            <Link
              href="/sellers"
              className="text-gray-300 hover:text-neon-purple transition-colors"
            >
              Sellers
            </Link>
            <Link
              href="/reviews"
              className="text-gray-300 hover:text-neon-yellow transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-neon-cyan transition-colors"
            >
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
