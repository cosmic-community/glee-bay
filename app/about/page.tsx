import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Glee Bay',
  description: 'Learn about Glee Bay, the futuristic cyberpunk marketplace.',
}

const values = [
  { icon: '⚡', title: 'Speed', description: 'Lightning-fast transactions powered by next-generation infrastructure.' },
  { icon: '🔒', title: 'Trust', description: 'Every seller is verified. Every transaction is secured end-to-end.' },
  { icon: '🌐', title: 'Community', description: 'A thriving network of buyers and sellers from every corner of the grid.' },
  { icon: '🚀', title: 'Innovation', description: 'We push the boundaries of what a marketplace can be — constantly.' },
]

const stats = [
  { value: '50K+', label: 'Products Listed' },
  { value: '12K+', label: 'Active Sellers' },
  { value: '200K+', label: 'Happy Buyers' },
  { value: '99.9%', label: 'Uptime' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-neon-cyan font-display text-sm tracking-widest uppercase mb-4">Our Story</p>
          <h1 className="font-display text-5xl md:text-6xl font-black tracking-widest neon-text mb-6">ABOUT GLEE BAY</h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Glee Bay is the futuristic marketplace where cutting-edge products meet a community of passionate sellers.
            Born in the neon-lit corridors of the digital frontier, we exist to make commerce faster, fairer, and a whole lot more fun.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto glass-panel rounded-xl p-10 border border-neon-cyan/20">
          <h2 className="font-display text-3xl font-bold tracking-widest text-neon-cyan mb-4">OUR MISSION</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            We believe buying and selling should feel effortless — even exhilarating. Glee Bay connects people with the
            products they love while giving sellers the tools they need to thrive. No friction. No fine print. Just commerce at the speed of light.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl font-bold tracking-widest text-center neon-text mb-12">WHAT WE STAND FOR</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="glass-panel rounded-xl p-6 border border-neon-purple/20 hover:border-neon-cyan/40 transition-colors text-center">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-display text-lg font-bold tracking-widest text-neon-cyan mb-2">{v.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="glass-panel rounded-xl p-6 border border-neon-magenta/20 text-center">
              <p className="font-display text-4xl font-black neon-text mb-1">{s.value}</p>
              <p className="text-gray-400 text-sm uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4 text-center">
        <h2 className="font-display text-3xl font-bold tracking-widest neon-text mb-6">READY TO JOIN THE GRID?</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/products" className="px-8 py-3 bg-neon-cyan text-black font-display font-bold tracking-widest rounded-lg hover:bg-neon-cyan/80 transition-colors">
            Browse Products
          </Link>
          <Link href="/sellers" className="px-8 py-3 border border-neon-magenta text-neon-magenta font-display font-bold tracking-widest rounded-lg hover:bg-neon-magenta/10 transition-colors">
            Meet Sellers
          </Link>
        </div>
      </section>
    </div>
  )
}
