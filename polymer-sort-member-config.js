const { sortMemberRules } = require('./sort-member-config');

module.exports.polymerSortMemberRules = {
	"sort-class-members/sort-class-members": [2, {
		"order": [
			"[static-property-is]",
			"[static-property-properties]",
			"[static-property-styles]",
			"[static-properties]",
			"[static-methods]",
			"[properties]",
			"constructor",
			"[accessor-pairs]",
			"[methods]",
			"[conventional-private-properties]",
			"[conventional-private-methods]"
		],
		"groups": { ...sortMemberRules.groups,
			"static-property-is": [{ "name": "is", "static": true }],
			"static-property-properties": [{ "name": "properties", "static": true }],
			"static-property-styles":  [{ "name": "styles", "static": true }]
		},
		"accessorPairPositioning": "getThenSet"
	}]
};
