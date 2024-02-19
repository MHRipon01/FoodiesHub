/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sushi: {
          50: '#f5f9ec',
          100: '#e8f1d6',
          200: '#d3e4b2',
          300: '#b5d284',
          400: '#98be5d',
          500: '#7da640',
          600: '#5e812f',
          700: '#4a6427',
          800: '#3d5024',
          900: '#354522',
          950: '#1a250e',
        },
        california: {
          50: '#fffaea',
          100: '#fff2c5',
          200: '#ffe686',
          300: '#ffd246',
          400: '#ffbd1c',
          500: '#fe9f10',
          600: '#e17200',
          700: '#bb4d02',
          800: '#973b09',
          900: '#7c310b',
          950: '#481700',
        },
      },
    },
  },
  plugins: [],
};
