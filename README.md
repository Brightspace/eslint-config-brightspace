# eslint-config-brightspace

[![NPM version](https://img.shields.io/npm/v/eslint-config-brightspace.svg)](https://npmjs.org/package/eslint-config-brightspace-url)

Common Brightspace eslint configs.

## Installation

```shell
npm install eslint-config-brightspace
```

## Usage

Set the `extends` property in the `.eslintrc.json` file, replacing `<environment>` with the desired environment-specific config.

```json
{
  "extends": "brightspace/<environment>"
}
```

### Environment Specific Configs

| Environment | Description |
|--|--|
| `browser-config` | use with code that runs in a browser |
| `lit-config` | use with [Lit](https://lit.dev/) projects |
| `open-wc-testing-config` | use with [@open-wc/testing](https://open-wc.org/testing) + Lit test code |
| `node-config` | use with [Node.js](https://nodejs.org) projects |
| `react-config` | use with [React](https://react.dev/) projects |

Example:

```json
{
  "extends": "brightspace/lit-config"
}
```

See the [eslint rules](https://eslint.org/docs/latest/rules/) for more details on rule configuration.  See the [eslint shareable configs](https://eslint.org/docs/latest/extend/shareable-configs.html) for more details on creating configs.

## Developing and Contributing

After cloning the repo, run `npm install` to install dependencies.

### Versioning and Releasing

This repo is configured to use `semantic-release`. Commits prefixed with `fix:` and `feat:` will trigger patch and minor releases when merged to `main`.

To learn how to create major releases and release from maintenance branches, refer to the [semantic-release GitHub Action](https://github.com/BrightspaceUI/actions/tree/main/semantic-release) documentation.
