import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/components/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accenture: {
          secondary: '#8000c3',
          primary: '#3b006f',
          'dark-purple': '#3b006f',
          'light-purple': '#f4daff',
          'stage-dark': '#161022',
          footer: '#1f003f',
          'bullet-gray': '#4b4451',
          'stat-border': '#cdc3d2',
          'stage-tint': '#2b2438',
          'stage-light': '#f5f5f5',
          'body-muted': '#b7b2c1',
          'dark-gray': '#333333',
          page: '#fcf8f9',
        },
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
