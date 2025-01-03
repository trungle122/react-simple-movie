/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: '#f62682',
        secondary: '#6f5cf1',
      },
    },
  },
  plugins: [],
};
