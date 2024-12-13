import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "16px",
      screens: {
        xl: "1440px",
        lg: "1025px",
        md: "992px",
        sm: "768px",
      },
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        quaternery: "var(--color-quaternery)",
        accent: "var(--color-accent)",
        text: "var(--color-text)",
        primary_gradient: "var(--gradient-primary)",
      },

      fontFamily: {
        primary: ["var(--font-primary)", "sans-serif"],
        secondary: ["var(--font-secondary)", "sans-serif"],
      },
      backgroundImage: {
        primary_gradient: "var(--gradient-primary)",
        secondary_graient: "var(--gradient-secondary)",
      },

      width: {
        "right-clamp": "clamp(300px, 20.917vw, 536px)",
      },
    },
  },
  plugins: [],
} satisfies Config;
