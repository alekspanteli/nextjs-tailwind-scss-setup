/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  // blocklist: [
  //   'container',
  // ],
  plugins: [],
  corePlugins: {
    preflight: true,
    container: false
  }
}