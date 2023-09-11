/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'bg-1' : "url('/dist/assets/images/Login Page.png')"
      }
    },
  },
  plugins: [],
}