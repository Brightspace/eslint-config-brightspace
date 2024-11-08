import globals from 'globals';
import litConfig from './lit.js';

export default [
	...litConfig,
	{
		'languageOptions': {
			'globals': {
				...globals.mocha,
			}
		},
		'rules': {
			'no-invalid-this': 0
		}
	}
];
