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
        'spin-medium': 'spin 2s linear infinite',
        'slide-in': 'slide-in 3.5s ease-in-out',
      },
      width: {
        '112': '28rem',
        'about': '420px',
      },
      height: {
        '112': '28rem',
        'wishlist-item': '132px',
        'about': '450px',
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
      },
      colors: {
        'success': '#4BB543',
      },
      fontSize: {
        '10xl': '10rem',
      },
      keyframes: {
        'slide-in': {
            '0%': { transform: 'translateY(100%)' },
            '2%:': { opacity: '0', },
            '10%': {
              transform: 'translateY(0)',
              opacity: '1',
            },
            '90%': {
              transform: 'translateY(0)',
              opacity: '1',
            },
            '98%': { opacity: '0', },
            '100%': {transform: 'translateY(100%)',},
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
