const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    boxShadow: {
      DEFAULT: '0 0 10px 0 rgb(0 0 0 / 10%)',
    },
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1200px',
      '2xl': '1300px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
    },
    extend: {
      fontFamily: {
        'noto-sans': ['Noto Sans TC', 'monospace'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
