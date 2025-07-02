/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
    "./src/**/*.component.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1978e5',
        border: '#e7edf3',
        'text-primary': '#0e141b',
        'text-secondary': '#4e7097',
      },
      fontFamily: {
        sans: ['Inter', '"Noto Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 