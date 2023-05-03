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
        blue: "#2464e5",
        orange: "#fd8b00",
        green: "#01b761",
        red: "#f15342",
        gray: "#9d9d9d",
      },
    },
  },
  plugins: [],
};
