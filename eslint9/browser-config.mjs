import parser from '@babel/eslint-parser';
import globals from 'globals';

import index from './index.mjs';
import oldConfig from '../browser-config.js';
import html from 'eslint-plugin-html';
import importPlugin from 'eslint-plugin-import';
import sortClassMembersPlugin from 'eslint-plugin-sort-class-members';

export default [
	...index,
	{
		plugins: {
			html,
			'import': importPlugin,
			'sort-class-members': sortClassMembersPlugin
		},
		languageOptions: {
			parser,
			parserOptions: oldConfig.parserOptions,
			globals: {
				...globals.browser,
				...oldConfig.globals
			},
		},

		'rules': oldConfig.rules
	}
];
