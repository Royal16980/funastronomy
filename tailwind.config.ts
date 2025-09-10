import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./content/**/*.{md,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0b1b3f",
          accent: "#4bb3fd"
        }
      }
    }
  },
  plugins: []
};
export default config;
