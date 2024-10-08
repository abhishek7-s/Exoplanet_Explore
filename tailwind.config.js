/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotateOnce: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'rotate-once': 'rotateOnce 2s ease-in-out', // Define the animation (2 seconds, ease in-out)
      },
      animation1: {
        'fade-in-up': 'fadeInUp 0.5s ease-in-out forwards', // Fade-in animation lasting 0.5 seconds
      },
    },
  },
  plugins: [],
}

