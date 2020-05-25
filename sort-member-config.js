const defaultGroups = {
	"accessor-pairs": [{ "accessorPair": true, "sort": "alphabetical" }],
	"methods": [{ "type": "method", "sort": "alphabetical" }],
	"private-accessor-pairs": [{ "name": "/_.+/", "accessorPair": true, "sort": "alphabetical" }],
	"private-methods": [{ "name": "/_.+/", "type": "method", "sort": "alphabetical" }],
	"private-properties": [{ "name": "/_.+/", "type": "property", "sort": "alphabetical" }],
	"properties": [{ "type": "property", "sort": "alphabetical" }],
	"static-methods": [{ "type": "method", "sort": "alphabetical", "static": true }],
	"static-properties": [{ "type": "property", "sort": "alphabetical", "static": true }]
};

const defaultOrder = [
	"[static-properties]",
	"[static-methods]",
	"[properties]",
	"constructor",
	"[accessor-pairs]",
	"[methods]",
	"[private-properties]",
	"[private-accessor-pairs]",
	"[private-methods]"
];

module.exports.getSortMemberRules = (order, groups) => {
	return {
		"sort-class-members/sort-class-members": [2, {
			"order": order ? order : defaultOrder,
			"groups": {...defaultGroups, ...groups},
			"accessorPairPositioning": "getThenSet"
		}]
	};
};
