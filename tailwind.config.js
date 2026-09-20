/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B132B', // Deep Navy
        surface: '#1C2541', // Lighter Navy
        surfaceHover: '#2A3B5C',
        primary: '#D4AF37', // Gold
        primaryGlow: '#F59E0B', // Amber/Gold glow
        secondary: '#3B82F6', // Cool Blue
        
        // Semantic explicit colors
        navy: '#0B132B',
        'navy-light': '#1C2541',
        'warm-white': '#FDFCF8',
        'muted-grey': '#F3F4F6',
        'dark-grey': '#4B5563',
        gold: '#D4AF37',
        'cool-blue': '#3B82F6',
        'electric-purple': '#9333EA',
        'neon-cyan': '#06B6D4',
        'vibrant-pink': '#EC4899',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
        'cyber-gradient': 'linear-gradient(to right, #06B6D4, #9333EA, #EC4899)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        glow: {
          '0%': { opacity: 0.5, boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)' },
          '100%': { opacity: 1, boxShadow: '0 0 40px rgba(212, 175, 55, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
