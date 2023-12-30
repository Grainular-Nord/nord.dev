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

Grains are a core concept in Nørd, offering a reactive approach to state management within your components, enabling dynamic and responsive web applications. Grains are first-class members in Nørd, and are provided with an higher abstraction level then other reactive primitives.

::: tip
You can read more about the different functions provided by Nørd in the [`Grain`](../grain/grain.md) section.
:::

## Creating a Grain

To create a grain, you can use the `grain` function, which initializes a new reactive variable with an initial value.

```js
// count.grain.js
import { grain } from '@grainular/nord';

const count = grain(0); // Creates a grain with an initial value of 0
```

::: tip
`Grains` are normal JavaScript functions, and can be created and accessed anywhere.
:::

## Accessing a Grain's value

To access the `grain`'s current value, call it as a function.

```js
import { count } from '../count.grain.js';

console.log(count()); // logs 0
```

## Subscribing to a Grain

To be notified of changes in the `Grain`'s value, you can subscribe to it. The `subscribe` function returns a `unsubscriber` function.

```js
import { count } from '../count.grain.js';

const unsubscribe = count.subscribe((value) => console.log(value)); // logs 0 immediately
unsubscribe(); // No changes will be logged now
```

## Setting a Grain's value

To set a `grain`'s value, call it's `set` method.

```js
import { count } from '../count.grain.js';

count.set(1);
console.log(count()); // logs 1
```

## Updating a Grain's value

To update a `grain`'s value, call it's `update` method with a updater callback provided.

```js
import { count } from '../count.grain.js';

count.update((count) => count + 1);
console.log(count()); // logs 1
```

## Using a Grain inside a Component's template

When using a `grain` inside a component template, the template will automatically subscribe to the `grain` and update the node's value whenever the `grain`'s value changes. Unsubscription is handled automatically.

```js
const App = createComponent((html) => {
    const name = grain('Nørd');

    // The whole grain is passed here, not it's current value.
    return html`<h1>Hello, ${name}</h1>`;
});
```
