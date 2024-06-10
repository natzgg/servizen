/** @type {import('tailwindcss').Config} */
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
        baselight: "#8180b2",
        basenormal: "#565595",
        basedark: "#1b1a59",
        basedarker: "#161618",
        basetext: "#c0c0c8",
        baseblue: "#3b82f6",
      },
    },
  },
  plugins: [],
};
