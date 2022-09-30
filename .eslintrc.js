module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:playwright/playwright-test', 'xo'],
	overrides: [
		{
			extends: ['xo-typescript'],
			files: ['*.ts', '*.tsx'],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		indent: ['error', 'tab'],
		'object-curly-spacing': ['error', 'always'],
	},
};
