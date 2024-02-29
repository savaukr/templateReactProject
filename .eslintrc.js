module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['xo', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
    {
      extends: ['xo-typescript'],
      files: ['*.ts', '*.tsx'],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-indent': 'off',
    indent: 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/indent': 'off',
    'react/react-in-jsx-scope': 'off',
    'capitalized-comments': 'off',
    'import/no-unresolved': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    'object-curly-spacing': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    // '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: ['variable', 'typeLike', 'default', 'enumMember'],
            types: ['boolean'],
            format: ['PascalCase',
              'camelCase',
              'strictCamelCase',
              'PascalCase',
              'StrictPascalCase',
              'snake_case',
              'UPPER_CASE'
            ],
            prefix: ['is', 'should', 'has', 'can', 'did', 'will', '__IS_'],
          },

        ],

    '@typescript-eslint/no-floating-promises': 'off',
    // 'max-len': ['error', {ignoreComments: true}],
  },
  globals: {
    __IS_DEV__: true,
  },
};
