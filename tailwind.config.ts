import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      
      screens: {
        xs: "320px",
        ms: "390px",
        sm: "375px",
        xsm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
        xxxl: "1484px",
        xxl: "1512px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        lato: ["lato", "sans"],
        playfair:["Playfair Display", "sans", "cursive"],
        greatvibes:["Great Vibes","sans", "cursive"],
         },
    },
  },
  plugins: [],
};
export default config;
