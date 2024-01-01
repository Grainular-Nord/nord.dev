---
outline: deep
next:
    text: 'readonly'
    link: '/grain/readonly'
prev: false
---

<!-- @format -->

# Grain

A `Grain` is Nørd primary reactive primitive. They are created using the `grain` function, which returns a `Grain`.

Type: `<V>grain(initial: V, [comparisonFunc]: ComparisionFunc<V>): Grain<V>`

## Creating a Grain

To create a `Grain`, use the `grain` function.

```ts
// count.grain.ts
import { grain } from '@grainular/nord';

export const grain(0); // Will create a Grain<number> with a value of 0.
```

### Custom comparison function

By default, `Grain`'s only update when the new value is different then the current value. This is done using the strict inequality operator `!==`. You can provide your own, custom equality comparator.

```ts
// check a object grain for equality
import { grain } from '@grainular/nord';

type User = { name: string; age: number };

// Create the `User` grain and provide a custom comparison function
// that returns true when the values differ
const user = grain<User>({ name: 'Nørd', age: 1 }, (prev, cur) => {
    return JSON.stringify(prev) !== JSON.stringify(cur);
});
```

## Accessing a Grain's current Value

To access a `Grain`'s current value, call it as a function.

```ts
import { grain } from '@grainular/nord';

const count = grain(0);
console.log(count()); // logs 0;
```

::: info
When accessing a `Grain`'s value, you will always receive it's current value.
:::

## Subscribing to a Grain

To be notified when a `Grain` receives a new value, you can subscribe to it:

```ts
import { grain } from '@grainular/nord';

const count = grain(0);
count.subscribe((value) => console.log({ value }));
```

A subscription will trigger immediately, unless the second (`seed`) parameter of the `subscribe` function is set to false. Setting it to false will skip the first emission.

::: tip
Be wary of subscribing to a `Grain` inside another `Grain`'s subscription. This will lead to creating a new inner subscription any time the outer subscription is executed. If you need to combine multiple `Grain`'s, take a look at the [`combined`](./combined.md) operator.
:::

A subscription will return a `Unsubscriber`, which is a function that can be called to unsubscribe from the `Grain`.

```ts
import { grain } from '@grainular/nord';

const count = grain(0);
const unsubscribe = count.subscribe((value) => console.log({ value }));

// Do some logic here, then unsubscribe:
unsubscribe();
```

::: tip
Subscriptions in templates are automatically unsubscribed when the associated `Node` is no longer connected.
:::

## Setting a Grain's value

To update a `Grain`'s value, you can use either it's `set` or `update` method. Both result in all `Subscribers` being notified of the change, if the comparison function shows that the values are sufficiently distinct.

```ts
import { grain } from '@grainular/nord';

const count = grain(0);

// Set the value to '1'
count.set(1);
console.log(count()); // Logs 1

// To update the count based on it's current value, use `update`
count.update((cur) => cur + 1);
console.log(count()); // Logs 2

// The update method is the same as calling set with the current's grain value
count.set(count() + 1);
console.log(count()); // Logs 3
```

::: tip
`update` comes especially in handy, when updating single properties of objects.
:::

::: info In The Code:
You can see the function signature & implementation here: [grain.ts](https://github.com/IamSebastianDev/nord/blob/main/src/lib/grains/grain.ts)
:::
