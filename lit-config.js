module.exports = {
  "extends": "./index.js",
  "parser": "babel-eslint",
  "env": {
    "browser": true
  },
  "plugins": [
    "lit", "html"
  ],
  "globals": {
    "D2L": false,
    "Promise": false
  },
  "rules": {
    "no-var": 2,
    "prefer-const": 2,
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
    "lit/no-value-attribute": 2
  }
};
