module.exports = {
  parser: 'vue-eslint-parser',
  plugins: [
    'gridsome',
  ],
  extends: [
    'plugin:vue/recommended',
  ],
  rules: {
    'comma-dangle': ['warn', 'always-multiline'],
    'gridsome/format-query-block': 'error',
    'vue/attributes-order': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/order-in-components': 'off',
  },
}
