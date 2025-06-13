/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Optimus Prime Blue Palette
        optimus: {
          50: '#e6f4ff',
          100: '#b3daff',
          200: '#80bfff',
          300: '#4da3ff',
          400: '#1a88ff',
          500: '#0066cc',
          600: '#0057b4',
          700: '#004082',
          800: '#002851',
          900: '#001122',
        },
        // Electric Blue Variants
        electric: {
          blue: '#00d4ff',
          cyan: '#00ffff',
          steel: '#4682b4',
        },
        // Metallic Colors
        metallic: {
          silver: '#c0c0c0',
          chrome: '#e8e8e8',
          steel: '#708090',
        },
        // Enhanced Blue Palette
        'electric-blue': '#00d4ff',
        'electric-cyan': '#00ffff',
        'deep-blue': '#001122',
        'steel-blue': '#4682b4',
        'chrome-silver': '#e8e8e8',
        
        // Next.js default colors
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'electric-pulse': 'electric-pulse 1.5s ease-in-out infinite',
        'metal-shine': 'metal-shine 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'float': {
          '0%, 100%': { 
            transform: 'translateY(0px) rotate(0deg)',
          },
          '33%': { 
            transform: 'translateY(-20px) rotate(1deg)',
          },
          '66%': { 
            transform: 'translateY(-10px) rotate(-1deg)',
          }
        },
        'glow': {
          'from': { 
            'box-shadow': '0 0 20px rgba(0, 212, 255, 0.4)',
          },
          'to': { 
            'box-shadow': '0 0 30px rgba(0, 212, 255, 0.8), 0 0 40px rgba(0, 212, 255, 0.6)',
          }
        },
        'electric-pulse': {
          '0%, 100%': { 
            'box-shadow': '0 0 5px rgba(0, 212, 255, 0.5)',
            'border-color': 'rgba(0, 212, 255, 0.5)'
          },
          '50%': { 
            'box-shadow': '0 0 20px rgba(0, 212, 255, 0.8), 0 0 30px rgba(0, 212, 255, 0.6)',
            'border-color': 'rgba(0, 212, 255, 0.8)'
          }
        },
        'metal-shine': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'optimus-gradient': 'linear-gradient(135deg, #001122 0%, #003366 25%, #0066cc 50%, #004499 75%, #001122 100%)',
        'electric-gradient': 'linear-gradient(135deg, #00d4ff 0%, #0066cc 50%, #00aaff 100%)',
        'chrome-gradient': 'linear-gradient(135deg, #e8e8e8 0%, #c0c0c0 50%, #a8a8a8 100%)',
        'steel-gradient': 'linear-gradient(135deg, #4682b4 0%, #5f9ea0 50%, #708090 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'electric': '0 0 20px rgba(0, 212, 255, 0.4), 0 0 40px rgba(0, 212, 255, 0.2), inset 0 0 20px rgba(0, 212, 255, 0.1)',
        'optimus': '0 0 20px rgba(0, 102, 204, 0.5), 0 0 40px rgba(0, 102, 204, 0.3), inset 0 0 20px rgba(0, 102, 204, 0.1)',
        'cyber': '0 4px 15px rgba(0, 212, 255, 0.3), 0 8px 25px rgba(0, 170, 255, 0.2)',
        'glow-blue': '0 0 30px rgba(59, 130, 246, 0.5)',
        'glow-electric': '0 0 30px rgba(0, 212, 255, 0.5)',
      },
    },
  },
  plugins: [
    // Optional: Add custom plugin for additional utilities
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '0 2px 4px rgba(0,0,0,0.10)',
        },
        '.text-shadow-lg': {
          textShadow: '0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)',
        },
        '.text-shadow-electric': {
          textShadow: '0 0 10px rgba(0, 212, 255, 0.5)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
};