import globals from 'globals';
import baseConfig from './base.js';

export default [
	...baseConfig,
	{
		'languageOptions': {
			'parserOptions': {
				'sourceType': 'module'
			},
			'globals': {
				...globals.node,
				...globals.es2024
			},
		},
		'rules': {
			'no-console':0
		}
	}
];
