/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        academic: {
          background: '#F9F8F3',
          ivory: '#F1EFE8',
          blush: '#FFDCC1',
          pastel: '#C0DDDA',
          rose: '#D3C4B9',
          'deep-rose': '#775537',
          ink: '#5D3E22',
          muted: '#50453C',
          border: '#7755371A',
          card: '#F9F9F9',
          sidebar: '#5D3E22',
          'sidebar-border': '#D3C4B9',
          navy: '#5D3E22',
          'hero-blue': '#2F4947',
          blue: '#46615F',
          cyan: '#CBE8E5',
          'blue-light': '#AFCCC9',
          warning: '#6E5D25',
          yellow: '#FAE19C',
          lavender: '#CBE8E5',
          magenta: '#7A5739',
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Arial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Times New Roman"', 'Georgia', 'ui-serif', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 44px rgba(119, 85, 55, 0.06)',
        glass: '0 24px 70px rgba(119, 85, 55, 0.08)',
      },
    },
  },
  plugins: [],
};
