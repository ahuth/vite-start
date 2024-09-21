import js from '@eslint/js';
import ts from 'typescript-eslint';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import {FlatCompat} from '@eslint/eslintrc';

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
  ...compat.extends('plugin:react-hooks/recommended'),
  prettierRecommended,
];
