import parser from '@babel/eslint-parser';
import globals from 'globals';
import baseConfig from './base.js';
import html from 'eslint-plugin-html';
import importPlugin from 'eslint-plugin-import';
import sortClassMembersPlugin from 'eslint-plugin-sort-class-members';
import { getSortMemberRules } from '../utils.js';

export default [
	...baseConfig,
	{
		plugins: {
			html,
			'import': importPlugin,
			'sort-class-members': sortClassMembersPlugin
		},
		languageOptions: {
			parser,
			parserOptions: {
				'requireConfigFile': false
			},
			globals: {
				...globals.browser,
				'D2L': false
			},
		},
		rules: {
			'arrow-spacing': 2,
			'no-confusing-arrow': 2,
			'no-duplicate-imports': 2,
			'no-useless-constructor': 2,
			'prefer-arrow-callback': 2,
			'prefer-spread': 2,
			'prefer-template': 2,
			'sort-imports': [2, { 'ignoreCase': true }],
			'strict': [2, 'never'],
			'import/extensions': ['error', 'ignorePackages'],
			'import/no-absolute-path': 2,
			'no-console': ['error', { 'allow': ['warn', 'error'] }],
			...getSortMemberRules()
		}
	}
];
