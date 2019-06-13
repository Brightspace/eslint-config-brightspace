module.exports.sortMemberRules = {
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
			"[conventional-private-methods]",
		],
		"groups": {
			"accessor-pairs": [{ "accessorPair": true, "sort": "alphabetical" }],
			"methods": [{ "type": "method", "sort": "alphabetical"}],
			"conventional-private-methods": [{ "type": "method", "sort": "alphabetical"}],
			"conventional-private-properties": [{ "type": "property", "sort": "alphabetical"}],
			"properties": [{ "type": "property", "sort": "alphabetical"}],
			"static-methods": [{ "type": "method", "sort": "alphabetical", "static": true }],
			"static-properties": [{ "type": "property", "sort": "alphabetical", "static": true }],
			"static-property-is": [{ "name": "is", "static": true }],
			"static-property-properties": [{ "name": "properties", "static": true }],
			"static-property-styles":  [{ "name": "styles", "static": true }]
		},
		"accessorPairPositioning": "getThenSet",
	}]
}
