import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
    },
    // screens: {
    //   'im': '912px',
    //   'nh': '1024px',
    //   'ms': '1280px',
    //   'nhp': '1200px',
    //   'ls': '1366px',
    // },
  },
  plugins: [],
};
export default config;


