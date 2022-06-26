module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  // extends: [
  //   'eslint:recommended',
  //   'plugin:node/recommended',
  //   'plugin:@typescript-eslint/recommended'
  // ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {}
}
