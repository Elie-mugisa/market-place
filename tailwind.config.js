/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        opensans: ["'Open Sans'", "sans-serif"],
        roboto: ["Roboto mono", "monospace"],
        nunito: ["Nunito", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        darkText: "rgb(var(--darkText) / <alpha-value>)",
        lightText: "rgb(var(--lightText) / <alpha-value>)",
        mainBlog: "rgb(var(--mainBlog) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        blacko: "rgb(var(--blacko) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
