import globals from 'globals';

import litConfig from './lit-config.mjs';
import oldConfig from '../testing-config.js';

export default [
	...litConfig,
	{
		'languageOptions': {
			'globals': {
				...globals.mocha,
			}
		},
		'rules': oldConfig.rules
	}
];
