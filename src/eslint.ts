import { Linter } from 'eslint';

const config: Linter.Config = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    'shared-node-browser': true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'node',
    'plugin:node/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'import/no-mutable-exports': 'off'
  }
};

module.exports = config;
export default config;
