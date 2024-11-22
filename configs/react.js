import globals from 'globals';
import baseConfig from './base.js';
import react from 'eslint-plugin-react';

export default [
	...baseConfig,
	{
		'languageOptions': {
			'parserOptions': {
				'ecmaFeatures': {
					'jsx': true
				},
				'sourceType': 'module'
			},
			'globals': {
				...globals.browser,
				...globals.es2015,
				...globals.jest,
				...globals.node,
			},
			'ecmaVersion': 6,
		},
		'plugins': { react }
	}
];
