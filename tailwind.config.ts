import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-roboto-mono)"],
      },
      screen: {
        md: "790px",
        "3xl": "1900px",
      },
      colors: {
        primary: "#F6F4EF",
        customBlue: "#005990",
      },
    },
  },
  plugins: [
    require("tailwindcss-multi"),
    require("tailwindcss-animated"),
    require("@tailwindcss/typography"),
  ],
};
export default config;
