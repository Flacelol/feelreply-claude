import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      colors: {
        brand: {
          primary: "#6366F1",
          secondary: "#818CF8",
          cta: "#10B981",
          bg: "#F5F3FF",
          text: "#1E1B4B",
          whatsapp: "#25D366",
        },
      },
    },
  },
  plugins: [],
};

export default config;
