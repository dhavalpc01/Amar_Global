/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        navy: {
          50: '#f4f5f8',
          100: '#e9ebf0',
          200: '#c8cbd9',
          300: '#a7acc1',
          400: '#646f92',
          500: '#223163',
          600: '#1e2c59',
          700: '#19254a',
          800: '#141d3b',
          900: '#0F172A', // Main deep navy/slate background
          950: '#0A192F', // Ultra deep navy background
        },
        gold: {
          50: '#fdfdf2',
          100: '#fbfbe0',
          200: '#f5f5b3',
          300: '#eeee80',
          400: '#e2e245',
          500: '#d2d21a',
          600: '#a5a50f',
          700: '#7c7c0d',
          800: '#58580b',
          900: '#3e3e09',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-delayed': 'fadeIn 0.8s ease-out 0.3s forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up-delayed': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
        'slide-up-delayed-2': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards',
        'pulse-slow': 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spinSlow 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
