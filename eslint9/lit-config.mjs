import browserConfig from './browser-config.mjs';
import oldConfig from '../lit-config.js';
import lit from "eslint-plugin-lit"
export default [
	...browserConfig,
	{
		plugins: {lit}
	},
	{ rules:oldConfig.rules },
	...oldConfig["overrides"].map(c => ({...c, files:[c.files]}))
];
