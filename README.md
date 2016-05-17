# eslint-config-brightspace
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

Common Brightspace eslint configs.

## Installation

```shell
npm install eslint-config-brightspace
```

## Usage

Simply specify the `extends` property in the `.eslintrc` file as shown below. **Note:** omit the "eslint-config" when specifying the module, since eslint assumes it.

### Default Config

Specify the `extends` property in the `.eslintrc` file:

```json
{
  "extends": "brightspace"
}
```

### Environment Specific Configs

Specify the desired config for the `extends` property:

* `browser-config` : sets up browser globals
* `node-config` : sets up node globals including es6 env features
* `react-config` : sets up env for jsx and es6, including globals for jest
* `polymer-config` : sets up env for browser globals and polymer web components

```json
{
  "extends": "brightspace/react-config"
}
```

To use `react-config`, consumers should install the [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) plugin to enable use of the rules it provides.

To use `polymer-config`, consumers should install the [eslint-plugin-html](https://github.com/BenoitZugmeyer/eslint-plugin-html) plugin to extract and lint JavaScript contained in `.html` web component files.

See the [eslint rules](http://eslint.org/docs/rules/) for more details on rule configuration.  See the [eslint shareable configs](http://eslint.org/docs/developer-guide/shareable-configs.html) for more details on creating configs.

## Contributing

Contributions are welcome, please submit a pull request!

### Code Style

This repository is configured with [EditorConfig](http://editorconfig.org) rules and contributions should make use of them.

[npm-url]: https://npmjs.org/package/eslint-config-brightspace
[npm-image]: https://img.shields.io/npm/v/eslint-config-brightspace.svg
[ci-image]: https://travis-ci.org/Brightspace/eslint-config-brightspace.svg?branch=master
[ci-url]: https://travis-ci.org/Brightspace/eslint-config-brightspace
[dependencies-url]: https://david-dm.org/brightspace/eslint-config-brightspace
[dependencies-image]: https://img.shields.io/david/Brightspace/eslint-config-brightspace.svg
