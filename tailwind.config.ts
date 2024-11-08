import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                    dark: "hsl(var(--primary-dark))",
                    light: "hsl(var(--primary-light))",
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
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                rotateSkew: {
                    "0%, 50%, 100%": { transform: "rotate(0deg) scale(1) skew(1deg)" },
                    "10%": { transform: "rotate(-25deg) scale(1) skew(1deg)" },
                    "20%": { transform: "rotate(25deg) scale(1) skew(1deg)" },
                    "30%": { transform: "rotate(-25deg) scale(1) skew(1deg)" },
                    "40%": { transform: "rotate(25deg) scale(1) skew(1deg)" },
                },
                pluseSmall: {
                    "0%": { transform: "scale(0)", opacity: "1" },
                    "50%": { opacity: "0.6" },
                    "100%": { transform: "scale(1.4)", opacity: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                rotateSkew: "rotateSkew 1s infinite ease-out",
                pluseSmall: "pluseSmall 2s infinite",
            },
            backgroundImage: {
                "landing-1": 'url("/banner/landing-background.png")',
                "app-3": 'url("/backgrounds/background-3.png")',
                "app-4": 'url("/backgrounds/background-4.png")',
                "simple-white": 'url("/backgrounds/white-bg.jpg")',
                "simple-white-2": 'url("/backgrounds/white-bg-2.jpg")',
                "simple-white-3": 'url("/backgrounds/white-bg-3.jpg")',
            },
            backgroundSize: {
                "80%": "80%",
            },
            backgroundColor: {
                "light-90": "#e7ebef",
                "light-80": "#d0d7e0",
                "light-70": "#b8c4d0",
                "light-60": "#a0b0c1",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
