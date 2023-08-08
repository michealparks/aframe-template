module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:svelte/recommended',
		'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:unicorn/recommended',
	],
	plugins: [
		'@typescript-eslint',
		'unicorn',
	],
	ignorePatterns: ['*.cjs'],
	rules: {
		'@typescript-eslint/no-non-null-assertion': 'off',
		'unicorn/consistent-destructuring': 'off',
		'unicorn/prefer-math-trunc': 'off',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 'latest',
    project: './tsconfig.json',
		extraFileExtensions: [".svelte"],
	},
	overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
	env: {
		browser: true,
		es2020: true
	}
};
