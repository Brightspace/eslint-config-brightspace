import globals from 'globals';

import index from './index.mjs';
import oldConfig from '../react-config.js';
import react from 'eslint-plugin-react'

export default [
	...index,
	{
		'languageOptions': {
			'parserOptions': oldConfig.parserOptions,
			'globals': {
				...globals.browser,
				...globals.es2015,
				...globals.jest,
				...globals.node,
			},
			'ecmaVersion': 6,
		},
		'plugins': {react}
	}
];
