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
    'no-unused-vars': 'warn',
    'no-console': 0,
    'no-unexpected-multiline': 'warn',
    'eol-last': 1,
    semi: 0,
  },
};
