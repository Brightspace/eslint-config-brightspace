import browserConfig from './browser.js';
import * as lit from 'eslint-plugin-lit';
import { getSortMemberRules } from '../utils.js';

const sortMemberRules = getSortMemberRules([
	'[lit-static-properties]',
	'[static-properties]',
	'[static-methods]',
	'[properties]',
	'constructor',
	'[accessor-pairs]',
	'[accessors]',
	'[lit-methods]',
	'[methods]',
	'[private-accessor-pairs]',
	'[private-accessors]',
	'[private-properties]',
	'[private-methods]'
], {
	'lit-methods': [
		{ 'name': 'adoptedCallback', 'type': 'method' },
		{ 'name': 'attributeChangedCallback', 'type': 'method' },
		{ 'name': 'connectedCallback', 'type': 'method' },
		{ 'name': 'disconnectedCallback', 'type': 'method' },
		{ 'name': 'firstUpdated', 'type': 'method' },
		{ 'name': 'getUpdateComplete', 'type': 'method' },
		{ 'name': 'performUpdate', 'type': 'method' },
		{ 'name': 'render', 'type': 'method' },
		{ 'name': 'scheduleUpdate', 'type': 'method' },
		{ 'name': 'shouldUpdate', 'type': 'method' },
		{ 'name': 'update', 'type': 'method' },
		{ 'name': 'updated', 'type': 'method' },
		{ 'name': 'willUpdate', 'type': 'method' }
	],
	'lit-static-properties': [
		{ 'name': 'properties', 'static': true },
		{ 'name': 'styles', 'static': true }
	]
});

export default [
	...browserConfig,
	{
		ignores: ['.vdiff']
	},
	{
		plugins: { lit },
		rules: {
			'lit/attribute-value-entities': 2,
			'lit/binding-positions': 2,
			'lit/lifecycle-super': 2,
			'lit/no-duplicate-template-bindings': 2,
			'lit/no-invalid-escape-sequences': 2,
			'lit/no-invalid-html': 2,
			'lit/no-legacy-imports': 2,
			'lit/no-legacy-template-syntax': 2,
			'lit/no-private-properties': [2, { 'private': '^(__|_)' }],
			'lit/no-property-change-update': 2,
			'lit/no-native-attributes': 1,
			'lit/no-template-arrow': 2,
			'lit/no-template-bind': 2,
			'lit/no-template-map': 0,
			'lit/no-this-assign-in-render': 2,
			'lit/no-useless-template-literals': 2,
			'lit/no-value-attribute': 2,
			'lit/prefer-nothing': 2,
			...sortMemberRules
		}
	},
	{
		'files': ['**/lang/*.js'],
		'rules': {
			'quotes': 0,
			'no-irregular-whitespace': 0
		}
	}, {
		'files': ['**/demo/**/*.html'],
		'rules': {
			'no-console': 0
		}
	}
];
