import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        bg1: "#1E212D",
        bg2: "#FAF3E0",
        bg3: "#F8F8F8",
        bgbottom: "#E7E4DA",
        toptext: "#747474",
        box1: "#E7E4DA",
        box2: "#CFC9B5",
        subtext: "#2C312B"
     },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        rubik: ['var(--font-rubik)', 'serif'],
        bebas: ['var(--font-bebas)', 'serif']
      },
      screens: {
        'xsm': '485px',
        'custom-lg': '980px',
        'custom-lg2': '1150px',
        'custom-sm': '600px',
        
      },
    },
  },
  plugins: [],
};
export default config;
