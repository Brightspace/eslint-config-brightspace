const { getSortMemberRules } = require('./sort-member-config');

module.exports.sortMemberRules = getSortMemberRules([
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
	"[private-accessors]",
	"[private-properties]",
	"[private-methods]"
], {
	"static-property-is": [{ "name": "is", "static": true }],
	"static-property-properties": [{ "name": "properties", "static": true }],
	"static-property-styles":  [{ "name": "styles", "static": true }]
});
