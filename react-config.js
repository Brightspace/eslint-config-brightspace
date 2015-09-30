var baseConfig = require('./index'),
	extend = require('extend');

var reactConfig = {
  "ecmaFeatures": {
    "jsx": true
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

module.exports = extend(true, baseConfig, reactConfig);
