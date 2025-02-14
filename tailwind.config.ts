import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: "#2852A7",
        red: "#C21020",
        white: "#FAFAFA",
        black: "#000000",
      },
    },
  },
  plugins: [],
} satisfies Config;
