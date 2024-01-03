---
outline: deep
next:
    text: 'get'
    link: '/grain/get'
prev:
    text: 'derived'
    link: '/grain/derived'
---

<!-- @format -->

# Combined

The `combined` function is similar to the `derived` function used to derive values from multiple `Grain`'s reactively. Meaning that whenever one of the dependencies change, the transform function is applied and the resulting `Grain` is updated.

Type: `combined<D extends [ReadonlyGrain<any>, ...ReadonlyGrain<any>[]], R>(deps: D, fn: (values: GrainValue<D>, [initial]: R) => R): ReadonlyGrain<R>`

## Creating a combined Grain

To create a combined `Grain`, use the `combined` function and provide a list of source `Grains`, a transform function and a optional start value:

```ts
import { grain, combined } from '@grainular/nord';

const count = grain(0);
const name = grain('Nørd');

// combine the grains to create a new `ReadonlyGrain<string>`;
const greeting = combined([count, name], ([countVal, nameVal]) => `${nameVal}: ${countVal}`);
```

Whenever one of the source `Grains` is updated, `greeting` will be set to the newly calculated value.

## Subscribing to a combined Grain

As the `combined` function creates a `ReadonlyGrain`, subscriptions are created as usual. Internal subscriptions are managed automatically by the `combined` function, meaning that when no `Subscribers` are registered on the combined `Grain`, no updates will be received.

```ts
import { grain, combined } from '@grainular/nord';

const count = grain(0);
const name = grain('Nørd');

// combine the grains to create a new `ReadonlyGrain<string>`;
const greeting = combined([count, name], ([countVal, nameVal]) => `${nameVal}: ${countVal}`);
const unsubscribe = greeting.subscribe((value) => console.log(value)); // Logs 'Nørd: 0'
count.set(1); // Logs 'Nørd: 1';
name.set('Hello'); // Logs 'Hello: 1';

unsubscribe(); // Any further updates will not trigger the subscriber again.
```

<CodeLink name="combined.ts" link="https://github.com/IamSebastianDev/nord/blob/main/src/lib/grains/combined.ts"></CodeLink>
