export default function Footer() {
  return (
    <footer className="glass-panel border-t border-neon-cyan/20 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <p className="font-display text-lg font-bold tracking-widest neon-text mb-2">
          GLEE BAY
        </p>
        <p className="text-gray-400 text-sm">
          The futuristic marketplace &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}