/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#2f2f2f',
        'secondary-color': '#D9D9D9',
        'dark-color': '#202020',
        'yellow': '#E9F555'
      }
    },
  },
  plugins: [
    typography
  ],
}
