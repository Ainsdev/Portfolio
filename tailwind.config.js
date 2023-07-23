const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "3xl": "1720px",
        "4xl": "1800px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-300%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-200%)" },
        },
        "wobble-ver-left": {
          "0%,to": {
            transform: "translateY(0) rotate(0)",
            "transform-origin": "50% 50%",
          },
          "15%": {
            transform: "translateY(-30px) rotate(-6deg)",
          },
          "30%": {
            transform: "translateY(15px) rotate(6deg)",
          },
          "45%": {
            transform: "translateY(-15px) rotate(-3.6deg)",
          },
          "60%": {
            transform: "translateY(9px) rotate(2.4deg)",
          },
          "75%": {
            transform: "translateY(-6px) rotate(-1.2deg)",
          },
        },
        "bounce-in-right": {
          "0%": {
            transform: "translateX(600px)",
            "animation-timing-function": "ease-in",
            opacity: "0",
          },
          "38%": {
            transform: "translateX(0)",
            "animation-timing-function": "ease-out",
            opacity: "1",
          },
          "55%": {
            transform: "translateX(68px)",
            "animation-timing-function": "ease-in",
          },
          "72%,90%,to": {
            transform: "translateX(0)",
            "animation-timing-function": "ease-out",
          },
          "81%": {
            transform: "translateX(32px)",
            "animation-timing-function": "ease-in",
          },
          "95%": {
            transform: "translateX(8px)",
            "animation-timing-function": "ease-in",
          },
        },
        "background-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 12s linear 2s infinite",
        marquee2: "marquee2 15s linear 2s infinite",
        "wobble-ver-left": "wobble-ver-left 0.9s ease 3s 4 both",
        "bounce-in-right": "bounce-in-right 1.6s ease-in   both",
        "background-shine": "background-shine 2s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
