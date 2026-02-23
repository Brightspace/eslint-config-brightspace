import { litConfig, nodeConfig, setDirectoryConfigs, testingConfig } from './index.js';

export default [
	...setDirectoryConfigs(
		nodeConfig,
		{
			'test/lit':litConfig,
			'test/testing':testingConfig,
			'test/node': nodeConfig,
		}
	)
];
