/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0fa',
          100: '#cce0f5',
          200: '#99c2eb',
          300: '#66a3e0',
          400: '#3385d6',
          500: '#0066cc',
          600: '#0052a3',
          700: '#003d7a',
          800: '#002952',
          900: '#001429',
        },
        secondary: {
          50: '#e6f7fa',
          100: '#cceff5',
          200: '#99dfeb',
          300: '#66cfe0',
          400: '#33bfd6',
          500: '#00afcc',
          600: '#008ca3',
          700: '#00697a',
          800: '#004652',
          900: '#002329',
        },
        accent: {
          50: '#f0f9e6',
          100: '#e0f3cc',
          200: '#c2e799',
          300: '#a3db66',
          400: '#85cf33',
          500: '#66c300',
          600: '#529c00',
          700: '#3d7500',
          800: '#294e00',
          900: '#142700',
        },
        success: '#4CB944',
        warning: '#F9A825',
        error: '#E53935',
        whatsapp: '#25D366',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 15px rgba(0, 102, 204, 0.15)',
      },
    },
  },
  plugins: [],
};