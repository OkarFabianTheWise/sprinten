/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-clash)"],
        body: ["var(--font-inter)"],
        mono: ["var(--font-plex)"],
        'poly-sans': ["var(--font-poly-sans)", 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: "#E5F9E0",
          100: "#C8F1D0",
          300: "#A2F7B4",
          500: "#2F9C96",
          700: "#0D4C47",
          900: "#021514"
        },
        secondary: {
          100: "#D7DBFF",
          300: "#858BE3",
          500: "#5C63D4"
        },
        surface: {
          light: "#F9FBFA",
          DEFAULT: "#081110",
          dark: "#030908"
        }
      },
      backgroundImage: {
        "grid-radial":
          "radial-gradient(circle at top left, rgba(162,247,180,0.35), transparent 55%), radial-gradient(circle at top right, rgba(134,107,255,0.25), transparent 45%)"
      },
      boxShadow: {
        "glow-green": "0 20px 120px rgba(162, 247, 180, 0.18)",
        "glow-purple": "0 20px 120px rgba(133, 139, 227, 0.18)"
      },
      keyframes: {
        shine: {
          "0%": { transform: "translateX(-60%)" },
          "50%": { transform: "translateX(120%)" },
          "100%": { transform: "translateX(120%)" }
        }
      },
      animation: {
        shine: "shine 6s linear infinite"
      }
    }
  },
  plugins: []
};
