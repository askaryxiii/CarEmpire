/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        primaryBlue: "#1e56a0",
        BgGrey: "#f5f5f5",
      },
    },
  },
  plugins: [],
};
