module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['prettier'],
  rules: {
    'linebreak-style': 0,
    'no-console': 0,
    'eol-last': 0,
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    semi: 'error',
  },
};
