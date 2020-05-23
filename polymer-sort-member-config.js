const { sortMemberGroups } = require('./sort-member-config');

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
			"[private-accessor-pairs]",
			"[private-properties]",
			"[private-methods]"
		],
		"groups": { ...sortMemberGroups,
			"static-property-is": [{ "name": "is", "static": true }],
			"static-property-properties": [{ "name": "properties", "static": true }],
			"static-property-styles":  [{ "name": "styles", "static": true }]
		},
		"accessorPairPositioning": "getThenSet"
	}]
};
