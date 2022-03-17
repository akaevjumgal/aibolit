module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  extends: ['airbnb', 'react-app'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'linebreak-style': 'off',
  },
  plugins: ['only-warn'],
};
