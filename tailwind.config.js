/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fbfcff",
        secondary: "#FF5C00",
        dark: "#011736",
        // lightPrimary: "#4f86d3",
      },
    },
    screens: {
      lg: { max: "1023px" },
      sm: { max: "909px" },
    },
  },
  plugins: [],
};
