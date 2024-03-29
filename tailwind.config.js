/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        heading: ['Open-Sans', 'sans-serif'],
        body: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#59a5d8',
        secondary: '#133c55',
        light: '#91e5f6',
        dark: {
          1: '#121212',
          2: '#171717',
          3: '#1C1C1C',
          4: '#212121',
          5: '#262626',
          6: '#2C2C2C',
        },
        twitter: {
          blue: '#1DA1F2',
          white: '#f5f8fa',
        },
        github: {
          white: '#fafafa',
          dark: '#333',
        },
      },
      inset: {
        '1/2': '50%',
      },
    },
  },
  plugins: [],
};
