import globals from 'globals';

import index from './index.mjs';
import oldConfig from '../node-config.js';
export default [
	...index,
	{
		'languageOptions': {
			'parserOptions': oldConfig.parserOptions,
			'globals': {
				...globals.node,
				...globals.es2024
			},
		},
		'rules': oldConfig.rules
	}
];
