---
outline: deep
next:
    text: 'derived'
    link: '/grain/derived'
prev:
    text: 'grain'
    link: '/grain/grain'
---

<!-- @format -->

# Readonly

`readonly` is a function to create a `ReadonlyGrain`, which is the basic form of a `Grain`. A `ReadonlyGrain` can be subscribed to, but cannot be updated by it self.

Type: `readonly<V>(grain: Grain<V>): ReadonlyGrain<V>`

## Creating a `ReadonlyGrain`

A `ReadonlyGrain` is returned by the [`derived`](./derived.md), [`combined`](./combined.md) & [`get`](./get.md) methods. You can also use the standalone `readonly` function to create a `ReadonlyGrain`:

```ts
import { grain, readonly } from '@grainular/nord';

const _count = grain(0);
const count = readonly(_count); // Returns a `ReadonlyGrain<number>`
```

::: tip
Use a `ReadonlyGrain` if you want to prevent updates to the grain in any form.
:::

The created `ReadonlyGrain` will receive an update anytime the source `Grain` is updated.

## Accessing a `ReadonlyGrain`'s value

A `ReadonlyGrain`'s value can be accessed just like a normal `Grain`'s value. You can call it as a function or subscribe to it. To learn more about `Subscribers` and `Subscriptions`, take a look a the [corresponding section](./grain.md#accessing-a-grains-current-value) of the `grain` page.

```ts
import { grain, readonly } from '@grainular/nord';

const _count = grain(0);
const count = readonly(_count); // Returns a `ReadonlyGrain<number>`
console.log(count()); // logs 0;

// Subscribe to the readonly grain
const unsubscriber = count.subscribe((value) => console.log({ value }));
unsubscribe();
```

::: info In The Code:
You can see the function signature & implementation here: [grain.ts](https://github.com/IamSebastianDev/nord/blob/main/src/lib/grains/readonly.ts)
:::
