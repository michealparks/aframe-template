module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:unicorn/recommended',
	],
	plugins: [
		'svelte3',
		'@typescript-eslint',
		'unicorn',
	],
	ignorePatterns: ['*.cjs'],
	rules: {
		'@typescript-eslint/no-non-null-assertion': 'off',
  
		'unicorn/consistent-destructuring': 'off',
		'unicorn/prefer-math-trunc': 'off',
	},
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript')
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest',
    project: './tsconfig.json',
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
