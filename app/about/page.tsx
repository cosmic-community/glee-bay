import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About — Glee Bay',
  description: 'Learn about Glee Bay, the futuristic cyberpunk marketplace connecting buyers and sellers across the galaxy.',
}

const stats = [
  { label: 'Products Listed', value: '10,000+' },
  { label: 'Active Sellers', value: '500+' },
  { label: 'Happy Buyers', value: '25,000+' },
  { label: 'Categories', value: '50+' },
]

const values = [
  {
    icon: '⚡',
    title: 'Speed',
    description: 'Transactions at the speed of light. No waiting, no delays — just instant commerce.',
  },
  {
    icon: '🔒',
    title: 'Trust',
    description: 'Every seller is verified. Every product is reviewed. Your security is our protocol.',
  },
  {
    icon: '🌐',
    title: 'Community',
    description: 'A thriving network of buyers and sellers united by a passion for the extraordinary.',
  },
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'We push the boundaries of what a marketplace can be — always evolving, always ahead.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#9b5cff]/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#00f0ff] mb-4">
            Our Story
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-black tracking-widest mb-6 neon-text">
            ABOUT GLEE BAY
          </h1>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Glee Bay is a next-generation marketplace built for explorers, creators, and dreamers.
            We connect visionary sellers with curious buyers in a cyberpunk universe where commerce
            meets culture.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto glass-panel rounded-2xl p-10 md:p-16 neon-border">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-widest neon-text mb-6">
            OUR MISSION
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            We believe buying and selling should feel like an adventure. Glee Bay was built to tear
            down the walls of traditional e-commerce — replacing them with neon-lit corridors of
            discovery, trust, and community.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            From rare collectibles to cutting-edge tech, every listing on Glee Bay is a portal to
            something new. Our mission is to make every transaction feel extraordinary.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-panel rounded-xl p-6 text-center neon-border hover:border-[#00f0ff]/60 transition-all"
            >
              <p className="font-display text-3xl md:text-4xl font-black neon-text mb-2">
                {stat.value}
              </p>
              <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-widest neon-text mb-10 text-center">
            WHAT WE STAND FOR
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="glass-panel rounded-xl p-8 neon-border hover:border-[#9b5cff]/60 transition-all"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display text-xl font-bold tracking-widest text-[#00f0ff] mb-2">
                  {v.title.toUpperCase()}
                </h3>
                <p className="text-gray-300 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-widest neon-text mb-6">
            READY TO EXPLORE?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Join thousands of buyers and sellers already navigating the Glee Bay universe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-block px-8 py-3 rounded-lg font-semibold uppercase tracking-wider text-[#05060f] bg-[#00f0ff] hover:bg-[#00f0ff]/80 transition-colors"
            >
              Browse Products
            </Link>
            <Link
              href="/sellers"
              className="inline-block px-8 py-3 rounded-lg font-semibold uppercase tracking-wider text-[#00f0ff] border border-[#00f0ff]/50 hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 transition-colors"
            >
              Meet the Sellers
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
