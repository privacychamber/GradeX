/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#020617', // Slate 950
        surface: '#0f172a', // Slate 900
        surfaceHover: '#1e293b', // Slate 800
        primary: '#10b981', // Emerald 500 (Neon Green)
        primaryGlow: '#34d399', // Emerald 400
        secondary: '#059669', // Emerald 600
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        glow: {
          '0%': { opacity: 0.5, boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)' },
          '100%': { opacity: 1, boxShadow: '0 0 40px rgba(16, 185, 129, 0.8)' },
        }
      }
    },
  },
  plugins: [],
}
