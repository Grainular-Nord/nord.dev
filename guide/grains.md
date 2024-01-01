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

`Grains` are Nørds reactive primitives, offering a reactive approach to state management within your components, enabling dynamic and responsive web applications. As the fundamental building blocks of the Nørd framework, Grains allow for the creation, manipulation, and observation of reactive state in a straightforward and efficient manner.

::: tip
Grains are normal JavaScript functions, and can be used inside and outside of components. This makes scoping grains to different contexts as well as sharing state between components easy.
:::

## Overview

Grains in Nørd are designed to simplify state management in web applications. They represent encapsulated units of state that emit updates whenever their state changes. This reactive nature ensures that components depending on these Grains are automatically updated, leading to a more intuitive and maintainable codebase.

## Creating a Grain

A Grain is created using the grain() function, which initializes the Grain with a value. This value can be of any type, making Grains versatile in handling various data structures.

```js
import { grain } from '@grainular/nord';

const count = grain(0); // creates a Grain<number>
```

## Accessing a Grain's value

To access a Grains value, you can either call it as a function to retrieve it's latest state, or subscribe to it and be notified of changes.

```js
import { grain } from '@grainular/nord';

const count = grain(0); // creates a Grain<number>

// Access the grains value
console.log(count()); // logs 0
count.subscribe((value) => console.log(value)); // logs 0, and will be called whenever the value changes.
```

### Updating a Grain

Grains can be updated using either the set or update methods. The set method replaces the Grain's current value, while update applies a function to the current value to produce a new one. Updating the value will notify all subscribers of that grain.

```js
// Using set
count.set(1);

// Using update
count.update((current) => current + 1);
```

### Different Grains

There are multiple different type of Grains, explained in their respective section:

-   [`readonly`](../grain/readonly.md): Allows accessing a grains value, but not changing it.
-   [`derived`](../grain/derived.md): Allows creating a readonly grain out of another grain, while providing a transform function.
-   [`combined`](../grain/combined.md): Creates a new grain out of other grains, updating every time any of the dependent grains changes.
-   [`get`](../grain/get.md): Creates a readonly grain, that can be used to access properties of a Object grain.

## API

The grain function is used to create a new Grain. It initializes the Grain with a specified value and optionally a comparison function to determine value changes.

### Type

`grain<V>(initial: V, [comparisonFunc]: (prev: V, cur: V) => boolean): Grain<V>`

### Template

-   `V` (Type: `any`): A generic parameter that specifies the type of value that the grain tracks. Can be any kind of value.

### Parameters

-   `handler` (Type: `(node: NodeType) => void`): The handler to execute with the associated node. This is what makes up the core of the directive.
-   `options` (Type: `DirectiveOptions`): A optional options object to configure the created directive.
    -   `nodeType` (Type: `'Text'` | `'Element'`): Set to have the directive only accept one kind of `Node`. If set, the directive will throw when an incorrect type is received.

### Returns

-   `Grain<V>`: Returns a Grain object of the specified type V. This object includes several methods:

    -   `(): V`: A function to get the current value of the Grain.
    -   `set(value: V): void`: A method to set a new value for the Grain.
    -   `subscribe(subscriber: Subscriber<V>, seed: boolean): Unsubscriber`: A method to subscribe to changes in the Grain's value.
    -   `update(updater: Updater<V>): void`: A method to update the value of the Grain using an updater function.
