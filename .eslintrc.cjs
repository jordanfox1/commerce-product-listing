module.exports = {
    env: {
        browser: true,
        es2020: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        'no-console': 'warn',
        'no-unused-vars': 'warn',
        'no-undef': 'error',
        'semi': 'error',
        'indent': ['error', 2],
    },
};