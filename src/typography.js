const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  fontSize: rem(18),
  lineHeight: defaultTheme.lineHeight.relaxed,
  // maxWidth: '65ch',
  p: {
    marginTop: em(24, 18),
    marginBottom: em(24, 18),
  },
  '[class~="lead"]': {
    fontSize: em(22, 18),
    lineHeight: round(32 / 22),
    marginTop: em(24, 22),
    marginBottom: em(24, 22),
  },
  a: {
    fontWeight: 500,
    textDecoration: 'none',
  },
  strong: {
    fontWeight: '500',
  },
  ol: {
    counterReset: 'list-counter',
    marginTop: em(24, 18),
    marginBottom: em(24, 18),
  },
  'ol li': {
    position: 'relative',
    counterIncrement: 'list-counter',
    paddingLeft: em(30, 18),
  },
  'ol li::before': {
    content: 'counter(list-counter) "."',
    position: 'absolute',
    fontWeight: '400',
    left: '0',
  },
  'ul li': {
    position: 'relative',
    paddingLeft: em(30, 18),
  },
  'ul li::before': {
    content: '""',
    position: 'absolute',
    backgroundColor: defaultTheme.colors.gray[500],
    borderRadius: '50%',

    // color: colors.gray[300],
    // content: '"•"',
    width: em(6, 18),
    height: em(6, 18),
    top: `calc(${em(32 / 2, 18)} - ${em(3, 18)})`,
    left: em(4, 18),
  },
  ul: {
    marginTop: em(24, 18),
    marginBottom: em(24, 18),
  },
  li: {
    marginTop: em(8, 20),
    marginBottom: em(8, 20),
  },
  hr: {
    borderColor: colors.gray[200],
    borderTopWidth: 1,
    marginTop: em(56, 18),
    marginBottom: em(56, 18),
  },
  'hr + *': {
    marginTop: '0',
  },
  blockquote: {
    fontWeight: '500',
    fontStyle: 'italic',
    color: colors.gray[900],
    borderLeftWidth: '0.25rem',
    borderLeftColor: colors.gray[200],
    quotes: '"\\201C""\\201D""\\2018""\\2019"',
    marginTop: em(40, 24),
    marginBottom: em(40, 24),
    paddingLeft: em(24, 24),
  },
  'blockquote p:first-of-type::before': {
    content: 'open-quote',
  },
  'blockquote p:last-of-type::after': {
    content: 'close-quote',
  },
  h1: {
    fontWeight: '500',
    fontSize: em(48, 18),
    marginTop: '0',
    marginBottom: em(40, 48),
    lineHeight: round(48 / 48),
  },
  h2: {
    fontWeight: '475',
    fontSize: em(30, 18),
    marginTop: em(56, 30),
    // marginBottom: em(32, 30),
    marginBottom: defaultTheme.spacing[4],
    lineHeight: round(40 / 30),
  },
  h3: {
    fontWeight: '450',
    fontSize: em(24, 18),
    marginTop: em(40, 24),
    marginBottom: em(16, 24),
    lineHeight: round(36 / 24),
  },
  h4: {
    fontWeight: '450',
    marginTop: em(32, 18),
    marginBottom: em(8, 18),
    lineHeight: round(28 / 18),
  },
  'h2 + *': {
    marginTop: '0',
  },
  'h3 + *': {
    marginTop: '0',
  },
  'h4 + *': {
    marginTop: '0',
  },
  code: {
    backgroundColor: colors.gray[100],
    borderRadius: defaultTheme.borderRadius.sm,
    color: colors.indigo[700],
    paddingLeft: defaultTheme.spacing[1],
    paddingRight: defaultTheme.spacing[1],
    fontWeight: '600',
    fontSize: em(16, 18),
  },
  'code::before': {
    content: '"`"',
  },
  'code::after': {
    content: '"`"',
  },
  pre: {
    overflowX: 'auto',
  },
  'pre code': {
    backgroundColor: 'transparent',
    borderWidth: '0',
    borderRadius: '0',
    padding: '0',
    fontWeight: '400',
    color: 'inherit',
    fontSize: 'inherit',
    fontFamily: 'inherit',
    lineHeight: 'inherit',
  },
  'pre code::before': {
    content: '""',
  },
  'pre code::after': {
    content: '""',
  },
  table: {
    width: '100%',
    tableLayout: 'auto',
    textAlign: 'left',
    marginTop: em(32, 16),
    marginBottom: em(32, 16),
    fontSize: em(16, 18),
    lineHeight: round(24 / 16),
  },
  thead: {
    color: colors.gray[900],
    fontWeight: '600',
    borderBottomWidth: '1px',
    borderBottomColor: colors.gray[300],
  },
  'thead th': {
    verticalAlign: 'bottom',
    paddingRight: em(12, 16),
    paddingBottom: em(12, 16),
    paddingLeft: em(12, 16),
  },
  'tbody tr': {
    borderBottomWidth: '1px',
    borderBottomColor: colors.gray[200],
  },
  'tbody tr:last-child': {
    borderBottomWidth: '0',
  },
  'tbody td': {
    verticalAlign: 'top',
    paddingTop: em(12, 16),
    paddingRight: em(12, 16),
    paddingBottom: em(12, 16),
    paddingLeft: em(12, 16),
  },
  'thead th:first-child': {
    paddingLeft: '0',
  },
  'thead th:last-child': {
    paddingRight: '0',
  },
  'tbody td:first-child': {
    paddingLeft: '0',
  },
  'tbody td:last-child': {
    paddingRight: '0',
  },
  'img:not(\'.emoji\')': {
    marginTop: em(32, 18),
    marginBottom: em(32, 18),
  },
  video: {
    marginTop: em(32, 18),
    marginBottom: em(32, 18),
  },
  figure: {
    marginTop: em(32, 18),
    marginBottom: em(32, 18),
  },
  'figure > *': {
    marginTop: '0',
    marginBottom: '0',
  },
  'figure figcaption': {
    fontSize: em(16, 18),
    lineHeight: round(24 / 16),
    marginTop: em(16, 16),
    color: colors.gray[500],
  },
  'abbr[title]': {
    cursor: 'help',
    textDecoration: 'none',
    borderBottomColor: colors.gray[400],
    borderBottomWidth: '1px',
    borderBottomStyle: 'dotted',
  },
  '> :first-child': {
    marginTop: '0',
  },
  '> :last-child': {
    marginBottom: '0',
  },
  dd: {
    '> p:first-child': {
      marginTop: 0,
    },
    '> p:last-child': {
      marginBottom: 0,
    }
  },
}



