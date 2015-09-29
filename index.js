var eslint = require('eslint'),
	extend = require('extend'),
	commonConfig = require('./common-config');

var recommendedConfig = eslint.linter.defaults();

module.exports = extend(true, recommendedConfig, commonConfig);
