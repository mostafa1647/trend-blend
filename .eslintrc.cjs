module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier', 'eslint-plugin-prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
        amd: true,
      },
    ],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'import/named': 0,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/newline-after-import': [
      'error',
      {
        count: 1,
      },
    ],
    'import/order': [
      'error',
      {
        // Always insert nl between groups
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc' /* sort in ascending order */,
          caseInsensitive: true /* ignore case */,
        },
        // We want to import react before the other externals
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        groups: [
          // Built-in modules first (fs, path, etc)
          'builtin',
          // Externals are next (react, redux, etc)
          'external',
          // Internals are next (@/**/*, etc)
          'internal',
          // Parent directories imports are the next (../**/*)
          'parent',
          // Same directory imports are the next (./foo)
          'sibling',
          // And the index is the final one ('./')
          'index',
        ],
      },
    ],
    'padding-line-between-statements': [
      2,
      // Always require blank lines after import, except between imports
      {
        blankLine: 'always',
        prev: 'import',
        next: '*',
      },
      {
        blankLine: 'any',
        prev: 'import',
        next: 'import',
      },
      // Always require blank lines before and after every sequence of variable declarations and export
      {
        blankLine: 'always',
        prev: '*',
        next: ['const', 'let', 'var', 'export'],
      },
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var', 'export'],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['const', 'let', 'var', 'export'],
        next: ['const', 'let', 'var', 'export'],
      },
      // Always require blank lines before and after class declaration, if, do/while, switch, try
      {
        blankLine: 'always',
        prev: '*',
        next: ['if', 'class', 'export', 'for', 'do', 'while', 'switch', 'try'],
      },
      {
        blankLine: 'always',
        prev: ['if', 'class', 'for', 'do', 'while', 'switch', 'try'],
        next: '*',
      },
      // Always require blank lines before return statements
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
    ],
    // we want to avoid extraneous spaces
    'no-multi-spaces': ['error'],
    // we want to avoid trailing spaces
    'no-trailing-spaces': ['error'],
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/no-rest-destructuring': 'warn',
    '@tanstack/query/stable-query-client': 'error',
  },
};
