var baseConfig = require('./index'),
	extend = require('extend');

var reactConfig = {
  "ecmaFeatures": {
    "jsx": true,
    "modules": true
  },
  "env": {
    "browser": true,
    "es6": true,
    "jest": true,
    "node": true
  }
};

module.exports = extend(true, baseConfig, reactConfig);
