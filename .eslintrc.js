module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native', '@typescript-eslint'],
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'import/extensions': [
      0,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [1, { devDependencies: ['**/*.test.ts', '**/*.spec.tsx'] }],
    'no-use-before-define': 0,
    'react/style-prop-object': 0,
  },
}
