module.exports = {
	env: {
		browser: true,
		es6: true,
		jest: true,
	},
	extends: ['plugin:react/recommended', 'airbnb'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		indent: [2, 'tab'],
		'no-tabs': 0,
		'react/jsx-indent': [2, 'tab'],
		'react/require-default-props': 0,
		'react/forbid-prop-types': 0,
		'react/jsx-indent-props': [2, 'tab'],
		'object-curly-newline': 0,
		'react/jsx-one-expression-per-line': 0,
		'implicit-arrow-linebreak': 0,
		'operator-linebreak': 0,
	},
};
