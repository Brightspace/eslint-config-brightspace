var baseConfig = require('./index'),
	extend = require('extend');

var polymerConfig = {
  "env": {
    "browser": true
  },
  "plugins": [
    "html"
  ],
  "globals": {
    "D2L": false,
    "Polymer": false
  },
  "rules": {
    "strict": 0
  }
};

module.exports = extend(true, baseConfig, polymerConfig);
