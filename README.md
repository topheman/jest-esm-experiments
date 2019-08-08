# jest-esm-experiments

This project is a minimal reproducible bug of the [problem I encountered in my other project topheman/webrtc-experiments](https://github.com/topheman/webrtc-experiments/blob/master/NOTES.md).

```
git clone
```

## 1) Due to following error:

```
TypeError: Jest: a transform must export a `process` function.
```

**Downgrading to esm@3.1.0** - [source](https://github.com/kenotron/esm-jest/issues/5#issuecomment-503016224)

## 2) Not working even with esm setup as loader for jest

Basic [`jest.config.js`](jest.config.js):

```js
module.exports = {
  transform: {
    "\\.m?jsx?$": "esm"
  },
  moduleNameMapper: {
    "^anotherRoot/(.*)$": "<rootDir>/lib/anotherRoot/$1"
  },
  transformIgnorePatterns: []
};
```

When you run `npm test`, you fill get the following error:

```
 PASS  src/common.test.js
 FAIL  src/string.test.js
  ● Test suite failed to run

    TypeError: Cannot read property 'next' of undefined

      at Object.n.(anonymous function) (node_modules/esm/esm.js:1:1796)

 FAIL  src/math.test.js
  ● Test suite failed to run

    TypeError: Cannot read property 'next' of undefined

      at Object.n.(anonymous function) (node_modules/esm/esm.js:1:1796)

Test Suites: 2 failed, 1 passed, 3 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.457s
Ran all test suites
```

This might be due to the fact that `src/common.js` file is being imported:

- directly in one of the tests
- indirectly by the components I'm testing in the 2 other tests
