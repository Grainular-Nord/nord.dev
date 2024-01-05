---
outline: deep
next:
    text: 'merged'
    link: '/grain/merged'
prev:
    text: 'combined'
    link: '/grain/combined'
---

<!-- @format -->

# Mapped

The `mapped` function is used to map an array of `Grain` instances to a single `ReadonlyGrain` containing an array of values while preserving the order of types.

Type: `mapped<Dependencies extends [ReadonlyGrain<any>, ...ReadonlyGrain<any>[]]>(grains: Dependencies): ReadonlyGrain<GrainValue<Dependencies>>`

## Creating a Mapped Grain

To create a mapped `Grain`, use the `mapped` function and provide an array of source `Grains`. The resulting `ReadonlyGrain` will contain an array of values extracted from the input `Grains`, and the order of types in the input array will be preserved.

```ts
import { grain, mapped, ReadonlyGrain } from '@grainular/nord';

const numberGrain = grain(42);
const stringGrain = grain('Hello');
const booleanGrain = grain(true);

// Map the grains to create a new `ReadonlyGrain` containing an array of values.
const mappedGrain = mapped([numberGrain, stringGrain, booleanGrain]);
// Returns `ReadonlyGrain<[42, 'Hello', true]>`
```

The `mapped` function is useful when you want to consolidate multiple `Grain` instances into a single `Grain` with an array of values.

<CodeLink name="mapped.ts" link="https://github.com/Grainular-Nord/nord/blob/main/src/lib/grains/mapped.ts"></CodeLink>
