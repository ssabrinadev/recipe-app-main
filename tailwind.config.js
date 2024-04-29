/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        primary: {
          DEFAULT: '#F29C33',
          100: '#EE6352',
        },
        light: {
          DEFAULT: '#FFFBF2',
          100: '#C0BBB3',
          200: '#E0DBD2',
        },
        'light-blue': {
          DEFAULT: '#C4E5FC',
        },
        dark: {
          DEFAULT: '#262522'
        }
      },
      animation: {
        'spin': 'spin 0.3s linear infinite',
        'spin-slow': 'spin 1s linear infinite',
      }
    },
  },
  plugins: [],
}