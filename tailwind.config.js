/** @type {import('tailwindcss').Config} */
export default {
  content: [   "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      animation: {
        slide: 'slide 35s linear infinite',
        'slide-paused': 'slide 5s linear infinite paused',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backgroundImage: theme => ({
        'left-gradient': 'linear-gradient(to left, rgba(255, 255, 255, 0), white)',
        'right-gradient': 'linear-gradient(to right, rgba(255, 255, 255, 0), white)',
      }),
    },
  },
  plugins: [],
}



