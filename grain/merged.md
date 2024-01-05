---
outline: deep
next:
    text: 'get'
    link: '/grain/get'
prev:
    text: 'mapped'
    link: '/grain/mapped'
---

<!-- @format -->

# Merged

The `merged` function is used to merge a deeply nested `ReadonlyGrain` into a single `ReadonlyGrain`. It takes a `ReadonlyGrain` with nested `Grain` instances and returns a new `ReadonlyGrain` containing the flattened values.

Type: `merged<T>(deepGrain: ReadonlyGrain<ReadonlyGrain<T>>): ReadonlyGrain<T>`

## Creating a Merged Grain

To create a merged `Grain`, use the `merged` function and provide a `ReadonlyGrain` with nested `Grain` instances. The resulting `ReadonlyGrain` will contain the flattened values.

```ts
import { grain, merged, ReadonlyGrain } from '@grainular/nord';

const innerGrain = grain(42);
const deepGrain = grain(innerGrain);

// Merge the deeply nested grain to create a new `ReadonlyGrain`.
const mergedGrain = merged(deepGrain);
// Returns a `ReadonlyGrain` with the value `42`.
```

The `merged` function is useful when you have a deeply nested `ReadonlyGrain`, and you want to extract and flatten the innermost value into a single `ReadonlyGrain`.

<CodeLink name="merged.ts" link="https://github.com/Grainular-Nord/nord/blob/main/src/lib/grains/merged.ts"></CodeLink>
