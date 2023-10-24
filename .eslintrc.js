module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  plugins: ['prettier'],
  extends: [
    'plugin:jsx-a11y/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals',
    'plugin:prettier/recommended'
  ]
}
