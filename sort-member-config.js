module.exports.sortMemberRules = {
	"sort-class-members/sort-class-members": [2, {
		"order": [
		  "[static-properties-getter]",
		  "[static-styles-getter]",
		  "[static-properties]",
		  "[static-methods]",
		  "[properties]",
		  "constructor",
		  "[methods]",
		  "[conventional-private-properties]",
		  "[conventional-private-methods]",
		],
		"groups": {
			"static-methods": [{ "type": "method", "sort": "alphabetical", "static": true }],
			"static-properties": [{ "type": "property", "sort": "alphabetical", "static": true }],
			"static-properties-getter": [{ "name": "properties", "static": true }],
			"static-styles-getter":  [{ "name": "styles", "static": true }],
			"methods": [{ "type": "method", "sort": "alphabetical"}],
			"properties": [{ "type": "property", "sort": "alphabetical"}],
			"conventional-private-methods": [{ "type": "method", "sort": "alphabetical"}],
			"conventional-private-properties": [{ "type": "property", "sort": "alphabetical"}],
		},
		"accessorPairPositioning": "getThenSet",
	}]
}
