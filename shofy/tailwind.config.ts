import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#010f1c",
        themeColor: "#0c55aa",
        themeWhite: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
