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
      padding: "25px",
      screens: {
        xl: "1440px",
        lg: "1025px",
        md: "992px",
        sm: "768px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#059669', // emerald-600
          light: '#10B981',   // emerald-500
          dark: '#047857',    // emerald-700
        },
        secondary: {
          DEFAULT: '#0F172A', // slate-900
          light: '#1E293B',   // slate-800
        },
        accent: {
          DEFAULT: '#A3E635', // lime-400
        },
        neutral: {
          DEFAULT: '#E5E7EB', // gray-200
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #059669, #A3E635)', // emerald → lime
        'gradient-secondary': 'linear-gradient(135deg, #0F172A, #1E293B)', // dark slate shades
      },
      textColor: {
        'gradient-primary': 'linear-gradient(135deg, #059669, #A3E635)',
        'gradient-secondary': 'linear-gradient(135deg, #0F172A, #1E293B)',
      },
      fontFamily: {
        primary: ["var(--font-primary)", "sans-serif"],
        secondary: ["var(--font-secondary)", "sans-serif"],
      },
      width: {
        "right-clamp": "clamp(300px, 20.917vw, 536px)",
      },
      boxShadow: {
        service: "0 0 20px rgba(163, 230, 53, 0.15)",
        'glow-primary': "0 0 20px rgba(5, 150, 105, 0.3)",
        'glow-accent': "0 0 20px rgba(163, 230, 53, 0.3)",
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(163, 230, 53, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(163, 230, 53, 0.5)' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }: any) {
      const newUtilities = {
        '.text-gradient-primary': {
          background: 'linear-gradient(135deg, #059669, #A3E635)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-secondary': {
          background: 'linear-gradient(135deg, #0F172A, #1E293B)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
} satisfies Config;
