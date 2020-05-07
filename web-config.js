const { sortMemberRules } = require('./sort-member-config');

module.exports = {
	"extends": "./index.js",
	"parser": "babel-eslint",
	"env": {
		"browser": true
	},
	"plugins": [
		"html",
		"sort-class-members"
	],
	"globals": {
		"D2L": false,
		"Promise": false
	},
	"rules": {
    "no-console": ["error", { "allow": ["warn", "error"] }],
		...sortMemberRules
	}
};
