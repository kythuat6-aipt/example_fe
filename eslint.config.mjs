import { defineConfig } from 'eslint-define-config';

export default defineConfig({
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended'
  ],
  rules: {
    'react-hooks/exhaustive-deps': 'off' 
  }
});
