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
  },
  plugins: [],
};
export default config;


// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         'regal-blue': '#243c5a',
//       },
//       screens: {
//         'ipad-mini': '768px',      // For iPad Mini
//         'ipad-pro': '1024px',      // For iPad Pro
//         'surface-duo': '540px',    // For Surface Duo (single screen)
//         'surface-duo-expanded': '720px',  // For Surface Duo (expanded)
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;
