/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B00', // Brighter orange for REPO theme
        secondary: '#9333EA', // Purple accent
        accent: '#00FFFF', // Cyan accent for highlights
        dark: {
          100: '#0A0A0A', // Almost black background
          200: '#121212', // Slightly lighter dark
          300: '#1E1E1E', // Card backgrounds
          400: '#2D2D2D', // Lighter elements
        },
        danger: '#FF3333', // For high danger entities
        warning: '#FFCC00', // For medium danger
        safe: '#33CC66', // For low danger
      },
      fontFamily: {
        display: ['var(--font-orbitron)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        'horror': ['"Creepster"', 'cursive'], // Horror-themed font
      },
      boxShadow: {
        'neon': '0 0 5px theme(colors.primary), 0 0 20px rgba(255, 107, 0, 0.3)',
        'neon-cyan': '0 0 5px theme(colors.accent), 0 0 20px rgba(0, 255, 255, 0.3)',
        'neon-purple': '0 0 5px theme(colors.secondary), 0 0 20px rgba(147, 51, 234, 0.3)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(26, 26, 26, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 26, 26, 0.5) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '30px 30px',
      },
    },
  },
  plugins: [],
}