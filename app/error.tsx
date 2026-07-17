'use client'

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
      <h2 className="font-display text-2xl text-neon-magenta">
        System Malfunction
      </h2>
      <p className="text-gray-400">Something went wrong loading this page.</p>
      <button
        onClick={reset}
        className="neon-border px-6 py-2 rounded-lg font-semibold text-neon-cyan hover:bg-neon-cyan/10 transition-colors"
      >
        Retry
      </button>
    </div>
  )
}