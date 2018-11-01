module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended', 'prettier/react'],
  env: {
    jest: true,
    browser: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
  },
}
