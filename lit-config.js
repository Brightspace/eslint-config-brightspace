const { getSortMemberRules } = require('./sort-member-config');

const sortMemberRules = getSortMemberRules([
	"[lit-static-properties]",
	"[static-properties]",
	"[static-methods]",
	"[properties]",
	"constructor",
	"[accessor-pairs]",
	"[accessors]",
	"[lit-methods]",
	"[methods]",
	"[private-accessor-pairs]",
	"[private-accessors]",
	"[private-properties]",
	"[private-methods]"
], {
	"lit-methods": [
		{ "name": "attributeChangedCallback", "type": "method" },
		{ "name": "connectedCallback", "type": "method" },
		{ "name": "disconnectedCallback", "type": "method" },
		{ "name": "firstUpdated", "type": "method" },
		{ "name": "performUpdate", "type": "method" },
		{ "name": "render", "type": "method" },
		{ "name": "shouldUpdate", "type": "method" },
		{ "name": "update", "type": "method" },
		{ "name": "updated", "type": "method" }
	],
	"lit-static-properties": [
		{ "name": "properties", "static": true },
		{ "name": "styles", "static": true }
	]
});

module.exports = {
	"extends": "./browser-config.js",
	"env": {
		"es6": true
	},
	"plugins": [
		"import",
		"lit",
		"sort-class-members"
	],
	"rules": {
		"arrow-spacing": 2,
		"no-confusing-arrow": 2,
		"no-duplicate-imports": 2,
		"no-restricted-syntax": ["error", "CatchClause[param=null]"],
		"no-useless-constructor": 2,
		"no-var": 2,
		"prefer-arrow-callback": 2,
		"prefer-const": 2,
		"prefer-spread": 2,
		"prefer-template": 2,
		"sort-imports": [2, { "ignoreCase": true }],
		"strict": [2, "never"],
		"import/extensions": ["error", "ignorePackages"],
		"lit/attribute-value-entities": 2,
		"lit/binding-positions": 2,
		"lit/no-duplicate-template-bindings": 2,
		"lit/no-invalid-escape-sequences": 2,
		"lit/no-invalid-html": 2,
		"lit/no-legacy-template-syntax": 2,
		"lit/no-private-properties": [2, { "private": "^(__|_)" }],
		"lit/no-property-change-update": 2,
		"lit/no-template-arrow": 2,
		"lit/no-template-bind": 2,
		"lit/no-template-map": 0,
		"lit/no-useless-template-literals": 2,
		"lit/no-value-attribute": 2,
		...sortMemberRules
	}
};
