/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'pink',
        secondary: 'salmon'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}