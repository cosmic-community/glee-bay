import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Glee Bay',
  description: 'Learn about Glee Bay, the futuristic cyberpunk marketplace connecting buyers and sellers across the grid.',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <div className="mb-16 text-center">
        <span className="text-6xl mb-6 block">🛸</span>
        <h1 className="font-display text-4xl sm:text-5xl font-black tracking-widest neon-text mb-4">
          ABOUT GLEE BAY
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          The premier cyberpunk marketplace connecting buyers and sellers across the digital frontier.
        </p>
      </div>

      {/* Mission */}
      <section className="glass-panel border border-neon-cyan/20 rounded-xl p-8 mb-8">
        <h2 className="font-display text-2xl font-bold tracking-wider text-neon-cyan mb-4">
          Our Mission
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Glee Bay was built for a world where commerce moves at the speed of light. We connect
          visionary sellers with buyers who demand the extraordinary — whether that&apos;s
          cutting-edge tech, rare collectibles, or one-of-a-kind creations forged in the neon glow
          of the future.
        </p>
      </section>

      {/* Values */}
      <section className="mb-8">
        <h2 className="font-display text-2xl font-bold tracking-wider text-neon-magenta mb-6">
          What We Stand For
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: '⚡',
              title: 'Speed',
              description: 'Lightning-fast transactions and real-time inventory updates across the grid.',
            },
            {
              icon: '🔒',
              title: 'Trust',
              description: 'Verified sellers, secure payments, and buyer protection on every order.',
            },
            {
              icon: '🌐',
              title: 'Community',
              description: 'A thriving network of creators, collectors, and innovators shaping the future of trade.',
            },
          ].map((value) => (
            <div
              key={value.title}
              className="glass-panel border border-neon-purple/20 rounded-xl p-6 text-center"
            >
              <span className="text-4xl mb-3 block">{value.icon}</span>
              <h3 className="font-display text-lg font-bold tracking-wider text-neon-purple mb-2">
                {value.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="glass-panel border border-neon-yellow/20 rounded-xl p-8 mb-8">
        <h2 className="font-display text-2xl font-bold tracking-wider text-neon-yellow mb-6">
          By the Numbers
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: '10K+', label: 'Products Listed' },
            { value: '2K+', label: 'Active Sellers' },
            { value: '50K+', label: 'Happy Buyers' },
            { value: '4.9★', label: 'Avg. Rating' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-3xl font-black neon-text mb-1">{stat.value}</p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="font-display text-2xl font-bold tracking-wider text-gray-100 mb-4">
          Ready to explore the grid?
        </h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="/products"
            className="font-display text-sm font-bold tracking-widest uppercase px-8 py-3 rounded-lg bg-neon-cyan/10 border border-neon-cyan text-neon-cyan hover:bg-neon-cyan/20 transition-colors"
          >
            Browse Products
          </a>
          <a
            href="/sellers"
            className="font-display text-sm font-bold tracking-widest uppercase px-8 py-3 rounded-lg bg-neon-magenta/10 border border-neon-magenta text-neon-magenta hover:bg-neon-magenta/20 transition-colors"
          >
            Meet Sellers
          </a>
        </div>
      </section>
    </div>
  )
}
