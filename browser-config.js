const { getSortMemberRules } = require('./sort-member-config');

module.exports = {
	"extends": "./index.js",
	"parser": "@babel/eslint-parser",
	"parserOptions": {
		"requireConfigFile": false
	},
	"env": {
		"browser": true,
		"es2024": true
	},
	"plugins": [
		"html",
		"import",
		"sort-class-members"
	],
	"globals": {
		"D2L": false
	},
	"rules": {
		"arrow-spacing": 2,
		"no-confusing-arrow": 2,
		"no-duplicate-imports": 2,
		"no-useless-constructor": 2,
		"prefer-arrow-callback": 2,
		"prefer-spread": 2,
		"prefer-template": 2,
		"sort-imports": [2, { "ignoreCase": true }],
		"strict": [2, "never"],
		"import/extensions": ["error", "ignorePackages"],
		"import/no-absolute-path": 2,
		"no-console": ["error", { "allow": ["warn", "error"] }],
		...getSortMemberRules()
	}
};
