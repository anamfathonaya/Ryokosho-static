/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#ca1f1f',
        secondary: '#2ECCB2',
        background: '#fde9cd',
        hitam: '#050505',
        accent: '#ff560e',
      }
    },
  },
  plugins: [],
}

