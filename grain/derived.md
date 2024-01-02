---
outline: deep
next:
    text: 'combined'
    link: '/grain/combined'
prev:
    text: 'readonly'
    link: '/grain/readonly'
---

<!-- @format -->

# Derived

The `derived` function is used to derive a value from a `Grain` reactively using a transform function, meaning whenever the source `Grain` is updated, the derived `Grain` will also be updated.

Type: `derive<T, R = T>(value: ReadonlyGrain<V>, run: (value: T) => R): ReadonlyGrain<R>`

## Creating a derived Grain

To create a derived `Grain`, use the `derive` function.

```ts
import { grain, derive } from '@grainular/nord';

const count = grain(0);
const doubled = derive(count, (value) => value * 2);
// Returns a `ReadonlyGrain<number>`;
```

Whenever `count` is updated, `doubled` will be updated too.

```ts
import { grain, derived } from '@grainular/nord';

const count = grain(0);
const doubled = derived(count, (value) => value * 2);

console.log(count(), doubled()); // logs 0, 0;
count.set(1);
console.log(count(), doubled()); // logs 1, 2;
```

## Subscribing to a derived Grain

As the `derived` function creates a `ReadonlyGrain`, subscriptions are created as usual. Internal subscriptions are managed automatically by the `derived` function, meaning that when no `Subscribers` are registered on the derived `Grain`, no updates will be received.

```ts
const count = grain(0);
const doubled = derive(count, (value) => value * 2);
const unsubscribe = doubled.subscribe((val) => console.log({ val })); // Logs { val: 0 }

count.set(1); // Logs { val: 2 }
count.set(2); // Logs { val: 4 };
unsubscribe();

count.set(3); // Nothing is logged
```

<script setup>
import CodeLink from '../components/CodeLink.vue'
</script>

<CodeLink name="derived.ts" link="https://github.com/IamSebastianDev/nord/blob/main/src/lib/grains/derived.ts"></CodeLink>
