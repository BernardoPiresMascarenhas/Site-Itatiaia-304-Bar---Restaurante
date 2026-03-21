/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bar: {
          black: '#0a0a0a',
          wood: '#8B4513',
          woodLight: '#D2B48C',
          gold: '#D4AF37',
          orange: '#FF7A00',
          white: '#F8F9FA',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      }
    },
  },
  plugins: [],
}