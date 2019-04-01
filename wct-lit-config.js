module.exports = {
  "extends": "./lit-config.js",
  "env": {
    "es6": true,
    "mocha": true,
    "node": true
  },
  "globals": {
    "assert": true,
    "fixture": true,
    "flush": true,
    "expect": true,
    "MockInteractions": true,
    "sinon": true,
    "WCT": true
  },
  "rules": {
    "no-invalid-this": 0,
    "prefer-arrow-callback": 0
  }
};
