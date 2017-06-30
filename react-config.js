module.exports = {
  "extends": "./index.js",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "node": true
  },
  "plugins": [
    "react"
  ]
};
