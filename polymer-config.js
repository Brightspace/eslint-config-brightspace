const { polymerSortMemberRules } = require('./polymer-sort-member-config');

module.exports = {
	"extends": "./browser-config.js",
	"plugins": [
		"sort-class-members"
	],
	"rules": {
		"strict": 0,
		...polymerSortMemberRules
	}
};
