# npm-check-engine

A quick way to check if the currently used engine is supported.

#### Result example

```json
 eslint-plugin-jsdoc 36.0.7 doesn't support engine 14.13.1 (^12.20 || ^14.14.0 || ^16)
 eslint-plugin-jsdoc 36.0.7 -> @es-joy/jsdoccomment 0.10.7 doesn't support engine 14.13.1 (^12.20 || ^14.14.0 || ^16)
```

## Setup

To install from [npm](https://npmjs.com) run:

```sh
npm install npm-check-engine --save-dev
```

Add a [`package.json` script](https://docs.npmjs.com/files/package.json#scripts):

```json
{
  "scripts": {
    "npm-check-engine": "npm-check-engine"
  }
}
```

Then run the script to get the install size of the packages:

```sh
npm run npm-check-engine
```

## Cli

- The `npx npm-check-engine` script is handy for finding the install size of packages.

```sh
npx npm-check-engine
```
