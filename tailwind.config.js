/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#0a0e1a',
          100: '#1a1f2e',
          200: '#2a3441',
          300: '#3b4954',
          400: '#4c5e68',
          500: '#5d737b',
          600: '#6e888f',
          700: '#7f9da2',
          800: '#90b2b6',
          900: '#a1c7c9',
        },
        secondary: {
          50: '#0f1419',
          100: '#1e2832',
          200: '#2d3c4b',
          300: '#3c5064',
          400: '#4b647d',
          500: '#5a7896',
          600: '#698caf',
          700: '#78a0c8',
          800: '#87b4e1',
          900: '#96c8fa',
        },
        accent: {
          50: '#1a0f0a',
          100: '#331e14',
          200: '#4d2d1e',
          300: '#663c28',
          400: '#804b32',
          500: '#995a3c',
          600: '#b36946',
          700: '#cc7850',
          800: '#e6875a',
          900: '#ff9664',
        },
        industrial: {
          50: '#0a0a0b',
          100: '#141416',
          200: '#1e1e21',
          300: '#28282c',
          400: '#323237',
          500: '#3c3c42',
          600: '#46464d',
          700: '#505058',
          800: '#5a5a63',
          900: '#64646e',
        },
        tech: {
          50: '#0d1117',
          100: '#161b22',
          200: '#21262d',
          300: '#30363d',
          400: '#484f58',
          500: '#6e7681',
          600: '#8b949e',
          700: '#b1bac4',
          800: '#c9d1d9',
          900: '#f0f6fc',
        },
        electric: {
          50: '#001122',
          100: '#002244',
          200: '#003366',
          300: '#004488',
          400: '#0055aa',
          500: '#0066cc',
          600: '#1177dd',
          700: '#2288ee',
          800: '#3399ff',
          900: '#44aaff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
        'circuit-pattern': 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.2) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)',
      },
      backgroundSize: {
        'grid': '20px 20px',
        'circuit': '100px 100px, 80px 80px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 30px rgba(59, 130, 246, 0.6)' },
        }
      }
    },
  },
  plugins: [],
};