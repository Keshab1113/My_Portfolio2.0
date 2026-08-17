/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Premium dark theme palette
        ink: {
          950: '#05060a',
          900: '#0a0c14',
          800: '#0f1220',
          700: '#161a2b',
          600: '#1d2238',
          500: '#262c47',
        },
        accent: {
          50:  '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        neon: {
          green: '#7CFFB2',
          cyan:   '#22d3ee',
          violet: '#a78bfa',
          pink:   '#f472b6',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-dark':
          'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'aurora':
          'radial-gradient(60% 60% at 20% 20%, rgba(139,92,246,0.25), transparent 60%), radial-gradient(50% 50% at 80% 10%, rgba(34,211,238,0.20), transparent 60%), radial-gradient(50% 50% at 60% 90%, rgba(244,114,182,0.15), transparent 60%)',
      },
      backgroundSize: {
        'grid-32': '32px 32px',
      },
      boxShadow: {
        'glow-cyan': '0 0 0 1px rgba(34,211,238,0.35), 0 10px 40px -10px rgba(34,211,238,0.45)',
        'glow-violet': '0 0 0 1px rgba(167,139,250,0.35), 0 10px 40px -10px rgba(167,139,250,0.45)',
        'card': '0 10px 30px -10px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.04)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.3333%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        'pulse-ring': 'pulse-ring 2.2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
        blink: 'blink 1s steps(1) infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [require("daisyui")],
}
