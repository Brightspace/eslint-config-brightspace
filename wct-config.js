var polymerConfig = require('./polymer-config'),
	extend = require('extend');

var wctConfig = {
  "env": {
    "es6": true,
    "mocha": true
  },
  "globals": {
    "a11ySuite": true,
    "fixture": true,
    "flush": true,
    "expect": true,
    "MockInteractions": true,
    "sinon": true,
    "WCT": true
  }
};

module.exports = extend(true, polymerConfig, wctConfig);
