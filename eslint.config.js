import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
  { ignores: ['dist', 'node_modules'] },
  eslintPluginPrettierRecommended,
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    settings: {
      'import/resolver': { typescript: true },
      'import/internal-regex': '^@/',
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': 'error',
      'import/order': [
        'error',
        {
          groups: [['builtin', 'external'], ['internal'], ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSInterfaceDeclaration',
          message: 'Interfaces must be defined in interfaces.ts, not in .ts/.tsx files.',
        },
        {
          selector: 'TSTypeAliasDeclaration',
          message: 'Type aliases must be defined in interfaces.ts, not in .ts/.tsx files.',
        },
        {
          selector: 'TSEnumDeclaration',
          message: 'Enums must be defined in enums.ts, not in .ts/.tsx files.',
        },
        {
          selector: 'TSDeclareFunction',
          message: 'Function declarations must be defined in interfaces.ts, not in .ts/.tsx files.',
        },
      ],
    },
  },
  {
    files: ['**/interfaces.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSEnumDeclaration',
          message: 'Enums must be defined in enums.ts, not in interfaces.ts.',
        },
      ],
    },
  },
  {
    files: ['**/enums.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSInterfaceDeclaration',
          message: 'Interfaces must be defined in interfaces.ts, not in enums.ts.',
        },
        {
          selector: 'TSTypeAliasDeclaration',
          message: 'Type aliases must be defined in interfaces.ts, not in enums.ts.',
        },
        {
          selector: 'TSDeclareFunction',
          message: 'Function declarations must be defined in interfaces.ts, not in enums.ts.',
        },
      ],
    },
  },
)
