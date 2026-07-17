/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#05060f',
        surface: '#0b0e1e',
        panel: 'rgba(16, 20, 40, 0.6)',
        neon: {
          cyan: '#00f0ff',
          magenta: '#ff2fd0',
          purple: '#9b5cff',
          green: '#39ff14',
          yellow: '#ffe600',
        },
      },
      fontFamily: {
        sans: ['Rajdhani', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.5)',
        'neon-magenta': '0 0 20px rgba(255, 47, 208, 0.5)',
        'neon-purple': '0 0 20px rgba(155, 92, 255, 0.5)',
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(0,240,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.06) 1px, transparent 1px)',
        'neon-gradient':
          'linear-gradient(135deg, #00f0ff 0%, #9b5cff 50%, #ff2fd0 100%)',
      },
      keyframes: {
        pulseglow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      },
      animation: {
        pulseglow: 'pulseglow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}