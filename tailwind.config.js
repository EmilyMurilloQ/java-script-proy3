/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',
        dark: '#333',
        light: '#f9f9f9',
        border: '#ddd',
      },
    },
  },
  plugins: [],
}
