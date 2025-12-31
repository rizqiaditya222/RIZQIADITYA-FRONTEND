/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        myblack: '#111111',
        mybasegray: '#1C1C1C',
        mylightgray: '#7B7B7B',
        mydarkgray: '#6D6D6D',
        mywhite: '#FAFAFA',
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
