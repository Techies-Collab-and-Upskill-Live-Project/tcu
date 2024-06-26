/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-green": "var(--primary-green)",
      },
      fontFamily: {
        satoshi: "'Satoshi', sans-serif",
        geologica: '"Geologica", sans-serif'
      },
      animation: {
        'spin-slow':'spin 10s linear infinite',
      }
    },
  },
  plugins: [],
};
