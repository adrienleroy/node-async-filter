# node-async-filter

Filter array in an async way written in TypeScript.

### Installation

```bash
npm i node-async-filter
```

## Usage

### API

```javascript
asyncFilter<T>(
  // The array to be filtered.
  array: T[],
  // The async filter callback.
  callback: (value: T, index: number) => Promise<boolean>,
): Promise<T[]>;
```

Example:

```js
import { asyncFilter } from "node-async-filter ";

(async () => {
  const results = await asyncFilter(someArray, async (value, index) => {
    return (await asyncFunc(value)) === 'myCheckingValue';
  });
})();
```