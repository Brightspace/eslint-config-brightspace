// nr = not as per eslint:recommended
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

export default [js.configs.recommended, {
	'plugins': {
		'@stylistic': stylistic
	},
	'rules': {
		'eqeqeq': [2, 'always', { 'null': 'ignore' }], // nr
		'no-debugger': 2,
		'no-dupe-args': 2,
		'no-dupe-keys': 2,
		'no-duplicate-case': 2,
		'no-ex-assign': 2,
		'no-fallthrough': 2,
		'no-invalid-this': 2, // nr
		'no-new-wrappers': 2, // nr
		'no-undef': 2,
		'no-unneeded-ternary': 2, // nr
		'no-unreachable': 2,
		'no-unused-vars': [2, {
			'vars': 'all',
			'args': 'after-used',
			'ignoreRestSiblings': true,
			'destructuredArrayIgnorePattern': 'gc|^_'
		}],
		'no-use-before-define': [2, 'nofunc'], // nr
		'no-var': 2, // nr
		'prefer-const': 2, // nr
		'strict': [2, 'global'], // nr
		'valid-typeof': 2,
		'@stylistic/comma-spacing': 2, // nr
		'@stylistic/eol-last': 2, // nr
		'@stylistic/indent': [2, 'tab', { 'SwitchCase': 1 }], // nr
		'@stylistic/keyword-spacing': 2,
		'@stylistic/linebreak-style': ['error', 'unix'], // nr
		'@stylistic/new-parens': 2, // nr
		'@stylistic/no-multi-spaces': 2, // nr
		'@stylistic/no-multiple-empty-lines': [2, { 'max': 1 }], // nr
		'@stylistic/no-trailing-spaces': 2, // nr
		'@stylistic/object-curly-spacing': [2, 'always'],
		'@stylistic/quotes': [2, 'single', { 'avoidEscape': true }], // nr
		'@stylistic/semi': 2, // nr
		'@stylistic/space-before-blocks': [2, 'always'], // nr
		'@stylistic/space-before-function-paren': [2, {
			"anonymous": "never",
			"named": "never",
			"asyncArrow": "never",
			"catch": "always"
		}], //nr
		'@stylistic/space-in-parens': [2, 'never'],
		'@stylistic/space-infix-ops': 2 // nr
	}
}];
