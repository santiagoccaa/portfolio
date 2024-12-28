/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    fontFamily: {
      primary: "var(--font-jetbarinsMono)",
    },
    extend: {
      backgroundImage: {
        "gradient-header": "radial-gradient(circle, #2a2a32, #24242c, #1C1C22)",
      },

      colors: {
        primary: "#1C1C22",
        accent: {
          DEFAULT: "#FF4D4D",
          hover: "#00E187",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
