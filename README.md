# eslint-config-brightspace
[![NPM version][npm-image]][npm-url]
[![Dependency Status][dependencies-image]][dependencies-url]

Common Brightspace eslint configs.

## Installation

```shell
npm install eslint-config-brightspace
```

## Usage

Simply specify the `extends` property in the `.eslintrc` file as shown below. **Note:** omit the "eslint-config" when specifying the module, since eslint assumes it.

### Default Config

Specify the `extends` property in the `.eslintrc.json` file:

```json
{
  "extends": "brightspace"
}
```

### Environment Specific Configs

Specify the desired config for the `extends` property:

* `browser-config` : sets up browser globals
* `lit-config` : sets up env for browser globals and lit rules for lit elements
* `node-config` : sets up node globals including es6 env features
* `react-config` : sets up env for jsx and es6, including globals for jest
* `open-wc-testing-config` : sets up env for [@open-wc/testing](https://open-wc.org/testing)
* `polymer-config` : sets up env for browser globals and polymer web components
* `polymer-3-config` : sets up env for browser globals and polymer web components for polymer 3
* `wct-config` : sets up env for web component tester tests
* `wct-polymer-3-config` : sets up env for web component tester tests for polymer 3

```json
{
  "extends": "brightspace/react-config"
}
```

See the [eslint rules](http://eslint.org/docs/rules/) for more details on rule configuration.  See the [eslint shareable configs](http://eslint.org/docs/developer-guide/shareable-configs.html) for more details on creating configs.

## Contributing

Contributions are welcome, please submit a pull request!

### Code Style

This repository is configured with [EditorConfig](http://editorconfig.org) rules and contributions should make use of them.

## Versioning & Releasing

> TL;DR: Commits prefixed with `fix:` and `feat:` will trigger patch and minor releases when merged to `main`. Read on for more details...

The [semantic-release GitHub Action](https://github.com/BrightspaceUI/actions/tree/main/semantic-release) is called from the `release.yml` GitHub Action workflow to handle version changes and releasing.

### Version Changes

All version changes should obey [semantic versioning](https://semver.org/) rules:
1. **MAJOR** version when you make incompatible API changes,
2. **MINOR** version when you add functionality in a backwards compatible manner, and
3. **PATCH** version when you make backwards compatible bug fixes.

The next version number will be determined from the commit messages since the previous release. Our semantic-release configuration uses the [Angular convention](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular) when analyzing commits:
* Commits which are prefixed with `fix:` or `perf:` will trigger a `patch` release. Example: `fix: validate input before using`
* Commits which are prefixed with `feat:` will trigger a `minor` release. Example: `feat: add toggle() method`
* To trigger a MAJOR release, include `BREAKING CHANGE:` with a space or two newlines in the footer of the commit message
* Other suggested prefixes which will **NOT** trigger a release: `build:`, `ci:`, `docs:`, `style:`, `refactor:` and `test:`. Example: `docs: adding README for new component`

To revert a change, add the `revert:` prefix to the original commit message. This will cause the reverted change to be omitted from the release notes. Example: `revert: fix: validate input before using`.

### Releases

When a release is triggered, it will:
* Update the version in `package.json`
* Tag the commit
* Create a GitHub release (including release notes)
* Deploy a new package to NPM

### Releasing from Maintenance Branches

Occasionally you'll want to backport a feature or bug fix to an older release. `semantic-release` refers to these as [maintenance branches](https://semantic-release.gitbook.io/semantic-release/usage/workflow-configuration#maintenance-branches).

Maintenance branch names should be of the form: `+([0-9])?(.{+([0-9]),x}).x`.

Regular expressions are complicated, but this essentially means branch names should look like:
* `1.15.x` for patch releases on top of the `1.15` release (after version `1.16` exists)
* `2.x` for feature releases on top of the `2` release (after version `3` exists)

[npm-url]: https://npmjs.org/package/eslint-config-brightspace
[npm-image]: https://img.shields.io/npm/v/eslint-config-brightspace.svg
[dependencies-url]: https://david-dm.org/brightspace/eslint-config-brightspace
[dependencies-image]: https://img.shields.io/david/Brightspace/eslint-config-brightspace.svg
