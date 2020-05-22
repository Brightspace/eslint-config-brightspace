module.exports.sortMemberRules = {
	"sort-class-members/sort-class-members": [2, {
		"order": [
			"[static-properties]",
			"[static-methods]",
			"[properties]",
			"constructor",
			"[accessor-pairs]",
			"[methods]",
			"[conventional-private-properties]",
			"[conventional-private-methods]"
		],
		"groups": {
			"accessor-pairs": [{ "accessorPair": true, "sort": "alphabetical" }],
			"methods": [{ "type": "method", "sort": "alphabetical"}],
			"conventional-private-methods": [{ "name": "/_.+/", "type": "method", "sort": "alphabetical"}],
			"conventional-private-properties": [{ "name": "/_.+/", "type": "property", "sort": "alphabetical"}],
			"properties": [{ "type": "property", "sort": "alphabetical"}],
			"static-methods": [{ "type": "method", "sort": "alphabetical", "static": true }],
			"static-properties": [{ "type": "property", "sort": "alphabetical", "static": true }]
		},
		"accessorPairPositioning": "getThenSet"
	}]
};
