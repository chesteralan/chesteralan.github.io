/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9fa',
          100: '#d9f0f4',
          200: '#b3e1e9',
          300: '#80ccd9',
          400: '#4db3c6',
          500: '#00647c',
          600: '#00596e',
          700: '#004c5e',
          800: '#003f4e',
          900: '#002d38',
        },
        accent: {
          50: '#f5f0fa',
          100: '#ebe0f5',
          200: '#d6c1eb',
          300: '#bb9add',
          400: '#9f72cf',
          500: '#6b38d4',
          600: '#5e30bd',
          700: '#4f289e',
          800: '#402080',
          900: '#301860',
        },
        surface: {
          DEFAULT: '#faf8ff',
          secondary: '#f4f1f9',
          card: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 100, 124, 0.15)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 100, 124, 0.25)' },
        },
      },
    },
  },
  plugins: [],
};
