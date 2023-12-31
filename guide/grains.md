---
outline: deep
next:
    text: 'Directives'
    link: '/guide/directives'
prev:
    text: 'Components'
    link: '/guide/components'
---

<!-- @format -->

# Grains

`Grain`'s are a core concept in Nørd, offering a reactive approach to state management within your components, enabling dynamic and responsive web applications. Grains are first-class members in Nørd, and are provided with an higher abstraction level then other reactive primitives.

::: tip
You can read more about the different functions provided by Nørd in the [`Grain`](../grain/grain.md) section.
:::

## Creating a Grain

To create a `Grain`, you can use the `grain()` function, which initializes a new reactive variable with an initial value.

```js
// count.grain.js
import { grain } from '@grainular/nord';

const count = grain(0); // Creates a grain with an initial value of 0
```

::: tip
`Grains` are normal JavaScript functions, and can be created and accessed anywhere. They not only serve as reactive primitive, but will do the heavy lifting of your application's state management.
:::

## Accessing a Grain's value

To access the `Grain`'s current value, call it as a function.

```js
import { count } from '../count.grain.js';

console.log(count()); // logs 0
```

## Subscribing to a Grain

To receive notifications about changes in a `Grain`'s value, you can `subscribe` to it. The `subscribe` function returns an `unsubscriber` function that can be used to stop receiving updates.

```js
import { count } from '../count.grain.js';

const unsubscribe = count.subscribe((value) => console.log(value)); // logs 0 immediately
unsubscribe(); // No changes will be logged now
```

## Setting a Grain's value

To set a `Grain`'s value, call it's `set` method.

```js
import { count } from '../count.grain.js';

count.set(1);
console.log(count()); // logs 1
```

## Updating a Grain's value

To update a `Grain`'s value, use its `update` method and provide a callback to update the value.

```js
import { count } from '../count.grain.js';

count.update((count) => count + 1);
console.log(count()); // logs 1
```

## Using a Grain inside a Component's template

When you use a `Grain` inside a component's template, the template automatically subscribes to the `Grain`. It updates the node's value whenever the `Grain`'s value changes, and unsubscription is handled automatically.

```js
const App = createComponent((html) => {
    const name = grain('Nørd');

    // The whole grain is passed here, not it's current value.
    return html`<h1>Hello, ${name}</h1>`;
});
```
