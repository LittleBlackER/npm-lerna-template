module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: ['react-app', 'plugin:prettier/recommended', 'react-app/jest'],
  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    'object-shorthand': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true,
      },
    ],
    'no-promise-executor-return': 'error',
    // eslint-config-alloy 推荐
    '@typescript-eslint/member-ordering': [
      'error',
      {
        default: [
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'static-field',
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'static-method',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'public-field',
          'protected-field',
          'private-field',
          'instance-field',
          'field',
          'constructor',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
          'public-method',
          'protected-method',
          'private-method',
          'instance-method',
          'method',
        ],
      },
    ],
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/method-signature-style': 'error',
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'import/no-cycle': 'error',
    // react 相关
    'react/jsx-key': 'error',
    // jsx-runtime 新版本支持
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    // hooks error
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
