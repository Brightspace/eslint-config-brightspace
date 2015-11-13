var baseConfig = require('./index'),
	extend = require('extend');

var nodeConfig = {
  "env": {
    "es6": true,
    "node": true
  }
};

module.exports = extend(true, baseConfig, nodeConfig);
