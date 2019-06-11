const { sortMemberRules } = require('./sort-member-config');

module.exports = {
  "extends": "./index.js",
  "parser": "babel-eslint",
  "env": {
    "browser": true,
	"es6": true
  },
  "plugins": [
    "lit", 
	"html",
	"sort-class-members"
  ],
  "globals": {
    "D2L": false,
    "Promise": false
  },
  "rules": {
    "arrow-spacing": 2,
    "no-confusing-arrow": 2,
    "no-duplicate-imports": 2,
    "no-useless-constructor": 2,
    "no-var": 2,
    "prefer-arrow-callback": 2,
    "prefer-const": 2,
    "prefer-spread": 2,
    "prefer-template": 2,
    "sort-imports": [2, { "ignoreCase": true }],
    "strict": [2, "never"],
    "lit/no-duplicate-template-bindings": 2,
    "lit/no-legacy-template-syntax": 2,
    "lit/no-template-bind": 2,
    "lit/no-template-map": 0,
    "lit/no-useless-template-literals": 2,
    "lit/attribute-value-entities": 2,
    "lit/binding-positions": 2,
    "lit/no-property-change-update": 2,
    "lit/no-invalid-html": 2,
	"lit/no-value-attribute": 2,
	...sortMemberRules
  }
};
