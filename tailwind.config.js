/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      height: {
        input: '2.5rem',
      },
      colors: {
        text: '#ffffff',
        primary: {
          DEFAULT: '#24ffbc',
          800: 'rgba(27, 48, 49, 0.9)'
        },
        gray: {
          100: '#f5f5f5',
          200: 'rgba(255, 255, 255, 0.7)',
          300: '#83838d',
          600: '#211a1a',
          700: '#1b1e22',
          800: '#212127',
          900: '#0b0b0f',
        },
        dark: {
        },
      },
      fontSize: {
        base: '0.875rem',
        h1: '2rem',
      },
      borderRadius: {
        DEFAULT: '0.625rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
