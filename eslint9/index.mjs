import js from '@eslint/js';
import oldConfig from '../index.js';

export default [js.configs.recommended, {
    rules: oldConfig.rules,
}];
