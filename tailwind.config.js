/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        'spin-slow': 'spin 4s linear infinite',
      },
      height: {
        'wishlist-item': '132px',
      },
      backgroundColor: {
        'neutral': '#f5f6f8',
        'dark': '#333',
        'dark-hover': '#454545',
      },
      borderWidth: {
        '3': '3px',
      },
      borderColor: {
        'dark': '#333',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
