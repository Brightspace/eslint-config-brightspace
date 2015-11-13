var baseConfig = require('./index'),
	extend = require('extend');

var browserConfig = {
  "env": {
    "browser": true
  }
};

module.exports = extend(true, baseConfig, browserConfig);
