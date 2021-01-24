# [Logger enhance](https://github.com/rriosper/logger)

![validation](https://github.com/rriosper/logger/workflows/Validation/badge.svg?branch=master)
![publish](https://github.com/rriosper/logger/workflows/Publish/badge.svg?branch=master)
![npm bundle size](https://img.shields.io/bundlephobia/min/rrios-logger)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/rrios-logger)
![npm](https://img.shields.io/npm/v/rrios-logger)
![NPM](https://img.shields.io/npm/l/rrios-logger)
![GitHub last commit](https://img.shields.io/github/last-commit/rriosper/logger)

Utils to enhance the default logger provides with `console`, this enhances are available to browser and nodejs

The below methods are enhanced:

- log
- debug
- warn
- error

## How to start

### Installation
```
npm i rrios-logger
```
```
yarn add rrios-logger
```

## How to use

### Browser
```js
import { injectBrowserLogger } from 'rrios-logger';

injectBrowserLogger({ development: process.env.NODE_ENV !== 'production' });

console.log("Hello!")
console.debug("Hello!")
console.warn("Hello!")
console.error("Hello!")
```



### Node
```js
import { injectLogger } from 'rrios-logger';

injectLogger({ development: process.env.NODE_ENV !== 'production', dir: 'path/to/storage' });

console.log("Hello!")
console.debug("Hello!")
console.warn("Hello!")
console.error("Hello!")
```
___

## Author

Roberto Ríos [@rriosper](https://github.com/rriosper/)
