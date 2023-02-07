module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:react-hooks-recommended',
    'plugin:prettier/recommended'
  ],
  globals:{
    Atomics:'readonly',
    SharedArrayBuffer:'readonly'
  },
  overrides: [
    {
      files: ['{bin,test,scripts}/**/*.js'],
      rules: {
        'no-undef': 'error',
        'no-restricted-syntax': [
          'error',
          {
            selector: 'SequenceExpression',
            message:
              'The comma operator is confusing and a common mistake. Don’t use it!'
          }
        ],
        quotes: [
          'error',
          'double',
          { avoidEscape: true, allowTemplateLiterals: false }
        ]
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react','prettier'],
  rules: {
    "react/react-in-jsx-scope":"off"
  }
}
