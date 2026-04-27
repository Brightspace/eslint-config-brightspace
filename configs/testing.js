import litConfig from './lit.js';
import mochaPlugin from 'eslint-plugin-mocha';

export default [
	...litConfig,
	mochaPlugin.configs.recommended,
	{
		'plugins': {
			mochaPlugin
		},
		'rules': {
			'mocha/consistent-spacing-between-blocks': 'off',
			'mocha/max-top-level-suites': 'off',
			'mocha/no-exclusive-tests': 'error',
			'mocha/no-mocha-arrows': 'off',
			'mocha/no-return-from-async': 'error',
			'mocha/no-setup-in-describe': 'off',
			'no-invalid-this': 0,
		}
	}
];
