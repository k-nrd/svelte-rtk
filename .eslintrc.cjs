module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.svelte']
  },
  env: {
    es6: true,
    node: true, // for config files
    jest: true
  },
	plugins: [
    '@typescript-eslint',
    'jest-dom'
  ],
  extends: [
    'standard-with-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:jest-dom/recommended'
  ],
	rules: {
    'indent': 'off',
		'comma-dangle': 'off',
		'func-call-spacing': 'off',
		'space-before-function-paren': ['error', 'always'],
		'@typescript-eslint/indent': ['error', 2],
		'@typescript-eslint/func-call-spacing': ['error', 'always'],
		'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
	},
  overrides: [
    {
      files: ['*.svelte'],
      parser: 'svelte-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
      env: { browser: true, node: false },
    },
    {
      files: ['src/**/*.ts', 'src/**/*.js'],
      env: { browser: true, node: false },
    },
    {
      files: ['*.ts', '*.js'],
      env: { browser: false, node: true },
    },
    {
      files: ['tests/**/*.ts', 'tests/**/*.js'],
      env: { browser: false, node: true, jest: true },
    },
  ],
}
