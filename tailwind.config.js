/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          blue: '#E6F3FF',
          pink: '#FFE6F3',
          mint: '#E6FFF3',
          lavender: '#F3E6FF',
          yellow: '#FFF9E6',
          peach: '#FFEDE6',
        },
        accent: {
          blue: '#3B82F6',
          pink: '#EC4899',
          mint: '#10B981',
          lavender: '#8B5CF6',
          yellow: '#F59E0B',
          peach: '#F97316',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}
