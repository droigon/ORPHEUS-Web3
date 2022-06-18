const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,png}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      back:{1:'#050607'},
      ashs:{1:'#EFF3FB'},
      grad:{1:'#090B0E'},
      oph_black:{1:'#0A0D11'},
      gold: {
        1: '#FFE5A1',
        2: '#BF841A',
        3: '#FFCD74',
      },
    },
  },
  plugins: [],
}
