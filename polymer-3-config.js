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
    "Polymer": false
  },
  "rules": {
	"strict": 0,
	"sort-class-members/sort-class-members": [2, {
		"order": [
		  "[static-properties]",
		  "[static-methods]",
		  "[properties]",
		  "constructor",
		  "[methods]",
		  "[conventional-private-properties]",
		  "[conventional-private-methods]",
		],
		"accessorPairPositioning": "getThenSet",
	  }]
  }
};
