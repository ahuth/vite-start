import {FlatCompat} from '@eslint/eslintrc';
import js from '@eslint/js';
import ts from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import globals from 'globals';

const compat = new FlatCompat();

/** @type {import('@types/eslint').Linter.FlatConfig} */
export default [
  {
    files: ['**/*.{js,cjs,mjs,ts,tsx}'],
    ignores: ['dist/**'],
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    files: ['src/**/*.{jsx,tsx}'],
    ...react.configs.flat.recommended,
    ...react.configs.flat['jsx-runtime'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  ...compat.extends('plugin:react-hooks/recommended'),
  prettierRecommended,
];
