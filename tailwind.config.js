/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0a0f1d',
          card: '#111827',
          surface: '#1e293b',
          border: '#334155'
        },
        brand: {
          primary: '#06b6d4', // cyan-500
          secondary: '#3b82f6', // blue-500
          accent: '#10b981', // emerald-500
          purple: '#8b5cf6'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        code: ['Fira Code', 'monospace']
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
