module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/prettier'
  ],

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },

  env: {
    es6: true,
    browser: true,
    node: true,
  },

  plugins: [
    'vue',
  ],

  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'brace-style': ['error', '1tbs'],
    'class-methods-use-this': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-style': ['error', 'last'],
    'eqeqeq': ['error', 'always'],
    'indent': ['error', 2, {
      'SwitchCase': 1
    }],
    'keyword-spacing': 'error',
    'linebreak-style': ['error', 'unix'],
    'prefer-const': 'error',
    'new-parens': 'error',
    'no-case-declarations': 'off',
    'no-const-assign': 'error',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': ['error', { 'args': 'none' }],
    'no-whitespace-before-property': 'error',
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never' }],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'strict': ['error', 'never'],
    'vue/no-v-html': 'off',
  },

  'overrides': [
    {
      'files': ['*.vue', '**/*.vue'],
    }
  ],
};
