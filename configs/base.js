// nr = not as per eslint:recommended
import js from '@eslint/js';

export default [js.configs.recommended, {
	'rules': {
		'comma-spacing': 2, // nr
		'eol-last': 2, // nr
		'eqeqeq': [2, 'always', { 'null': 'ignore' }], // nr
		'indent': [2, 'tab', { 'SwitchCase': 1 }], // nr
		'keyword-spacing': 2,
		'linebreak-style': ['error', 'unix'], // nr
		'new-parens': 2, // nr
		'no-debugger': 2,
		'no-dupe-args': 2,
		'no-dupe-keys': 2,
		'no-duplicate-case': 2,
		'no-ex-assign': 2,
		'no-fallthrough': 2,
		'no-invalid-this': 2, // nr
		'no-multiple-empty-lines': [2, { 'max': 1 }], // nr
		'no-multi-spaces': 2, // nr
		'no-new-wrappers': 2, // nr
		'no-trailing-spaces': 2, // nr
		'no-undef': 2,
		'no-unneeded-ternary': 2, // nr
		'no-unreachable': 2,
		'no-unused-vars': [2, {
			'vars': 'all',
			'args': 'after-used',
			'ignoreRestSiblings': true
		}],
		'no-use-before-define': [2, 'nofunc'], // nr
		'no-var': 2, // nr
		'object-curly-spacing': [2, 'always'],
		'prefer-const': 2, // nr
		'quotes': [2, 'single', 'avoid-escape'], // nr
		'semi': 2, // nr
		'space-before-blocks': [2, 'always'], // nr
		'space-before-function-paren': [2, 'never'], //nr
		'space-in-parens': [2, 'never'],
		'space-infix-ops': 2, // nr
		'strict': [2, 'global'], // nr
		'valid-typeof': 2
	}
}];
