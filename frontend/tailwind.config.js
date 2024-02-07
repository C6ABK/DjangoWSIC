/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {
        keyframes: {
            wiggle: {
              '0%, 100%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.05)' },
            }
        },
        animation: {
            wiggle: 'wiggle 2s ease-in-out infinite',
        }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

