/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          500: '#FF6B35',
        },
        blue: {
          500: '#007BFF',
        },
        yellow: {
          400: '#FFD700',
        },
      },
    },
  },
  plugins: [],
}

