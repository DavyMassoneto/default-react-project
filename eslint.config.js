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
    },
  },
  {
    files: ['src/ui/**/*.{ts,tsx}', '!src/ui/**/interfaces.ts', '!src/ui/**/enums.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSInterfaceDeclaration',
          message: 'Interfaces must be defined em interfaces.ts, não em arquivos comuns.',
        },
        {
          selector: 'TSTypeAliasDeclaration',
          message: 'Type aliases devem ser definidos em interfaces.ts, não em arquivos comuns.',
        },
        {
          selector: 'TSEnumDeclaration',
          message: 'Enums devem ser definidos em enums.ts, não em arquivos comuns.',
        },
        {
          selector: 'TSDeclareFunction',
          message: 'Function declarations devem ser definidas em interfaces.ts, não em arquivos comuns.',
        },
      ],
    },
  },
  {
    files: ['src/ui/**/interfaces.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSEnumDeclaration',
          message: 'Enums devem ser definidos em enums.ts, não em interfaces.ts.',
        },
      ],
    },
  },
  {
    files: ['src/ui/**/enums.ts'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSInterfaceDeclaration',
          message: 'Interfaces devem ser definidas em interfaces.ts, não em enums.ts.',
        },
        {
          selector: 'TSTypeAliasDeclaration',
          message: 'Type aliases devem ser definidos em interfaces.ts, não em enums.ts.',
        },
        {
          selector: 'TSDeclareFunction',
          message: 'Function declarations devem ser definidas em interfaces.ts, não em enums.ts.',
        },
      ],
    },
  },
)
