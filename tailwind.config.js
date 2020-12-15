const _ = require('lodash')
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
const prose = require('./src/typography')

module.exports = {
  purge: {
    content: [
      './content/**/*.md',
      './src/**/*.vue',
      './src/index.html',
    ],
    options: {
      safelist: ['emoji'],
    }
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    textStyles: { prose },
    colors: {
      gray: colors.coolGray,
      indigo: colors.indigo,
      emerald: colors.emerald,
      yellow: colors.yellow,
    },
    extend: {
      fontFamily: {
        // mono: ['Space Mono', ...defaultTheme.fontFamily.mono],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '2px': '2px',
        '18': '4.5rem',
      },
      width: { // add sizes from maxWidth
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-typography')({
      ellipsis: true,         // whether to generate ellipsis utilities
      hyphens: false,          // whether to generate hyphenation utilities
      kerning: false,          // whether to generate kerning utilities
      textUnset: false,        // whether to generate utilities to unset text properties
      componentPrefix: '',  // the prefix to use for text style classes
    }),
    require('./src/highlight'),
  ],
}

/*

 */
