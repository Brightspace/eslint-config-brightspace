# eslint-config-brightspace

[![NPM version](https://img.shields.io/npm/v/eslint-config-brightspace.svg)](https://npmjs.org/package/eslint-config-brightspace-url)

Common Brightspace eslint configs.

## Installation

```shell
npm install eslint-config-brightspace
```

## Usage

Shared configuration, they need to exported from the `eslint.config.js` file on the root directory.
```js
export { nodeConfig as default } from 'eslint-config-brightspace/index.js';
```

They can also be included as part of a custom configuration.
```js
import { nodeConfig } from 'eslint-config-brightspace';

export default [
	...nodeConfig,
	// Custom configuration
];
```

### Additional File Extensions

Include extensions beyond `.js` files using the `addExtenstion` helper function:
```js
import { addExtensions, nodeConfig } from 'eslint-config-brightspace';
export default addExtensions(nodeConfig, ['.js','.html']);
```

### Different Configurations for Different Directories

To include different configurations for specific directories, use the `setDirectoryConfigs` helper function. This replaces the [configuration hierarchy](https://eslint.org/docs/v8.x/use/configure/configuration-files#cascading-and-hierarchy) from `eslint8`. To use it, include the global configuration and specify the directory configurations, these will apply to all files inside the directory and recursively to any of its subdirectories.
```js
import { litConfig, nodeConfig, setDirectoryConfigs, testingConfig } from 'eslint-config-brightspace';

export default setDirectoryConfigs(
	litConfig,
	{
		'test': testingConfig,
		'test/cli': nodeConfig
	}
);
```
Note that each set configuration will force all prior configurations to ignore it. For example, for the above configuration, `litConfig` will ignore any files in the `test` directory; and `testingConfig` will ignore any files in the `test/cli` directory.

### Environment Specific Configs

| Environment | Description |
|--|--|
| `browserConfig` | use with code that runs in a browser |
| `litConfig` | use with [Lit](https://lit.dev/) projects |
| `testingConfig` | use with [@brightspace-ui/testing](https://github.com/BrightspaceUI/testing) test code |
| `nodeConfig` | use with [Node.js](https://nodejs.org) projects |
| `reactConfig` | use with [React](https://react.dev/) projects |

Example:

```js
export { nodeConfig as default } from 'eslint-config-brightspace/index.js';
```

See the [eslint rules](https://eslint.org/docs/latest/rules/) for more details on rule configuration.  See the [eslint shareable configs](https://eslint.org/docs/latest/extend/shareable-configs.html) for more details on creating configs.

## Developing and Contributing

After cloning the repo, run `npm install` to install dependencies.

### Versioning and Releasing

This repo is configured to use `semantic-release`. Commits prefixed with `fix:` and `feat:` will trigger patch and minor releases when merged to `main`.

To learn how to create major releases and release from maintenance branches, refer to the [semantic-release GitHub Action](https://github.com/BrightspaceUI/actions/tree/main/semantic-release) documentation.
