---
outline: deep
prev:
    text: 'Directives'
    link: '/guide/directives'
next: false
---

<!-- @format -->

# Context

Context in Nørd is a global, non reactive context as a way to share values like configurations, user data, or themes across different parts of your application without explicitly passing props down through the component tree. It’s ideal for global data that many components may need.

## Creating a Context Provider

A context is created using the createContext function. This function initializes the context with an object containing key-value pairs.

```js
// theme.context.ts
import { createContext } from '@grainular/nord';

export const themeContext = createContext({ theme: 'dark' });
```

::: info
The created context provider has no intrinsic association with any component or component tree. It exists on a global module space and can be used to send and retrieve data in any direction.
:::

## Setting a value on a Context

You can add or update values in the context using the `set` method. This method takes a key and a value, updating the context with these.

```js
// theme.context.ts
import { createContext } from '@grainular/nord';

export const themeContext = createContext({ theme: 'dark' });
themeContext.set('theme', 'light');
```

## Retrieving a value from a Context

To retrieve a value from the context, use the `get` method with the key as its parameter. This method returns the value associated with the given key.

```js
// theme.context.ts
import { createContext } from '@grainular/nord';

export const themeContext = createContext({ theme: 'dark' });
themeContext.set('theme', 'light');

console.log(themeContext.get('theme')); // logs 'light'
```

## API

The `createContext` function initializes a new context provider with given initial values.

### Template

-   **Ctx** (Type: `Record<PropertyKey, unknown>`): A generic parameter that specifies the type of the context object.

### Type

-   `createContext<Ctx>(initial: Ctx): Context<Ctx>`

### Parameters

-   **Initial** (Type: `Ctx`): An object containing the initial values to populate the context.

### Returns

-   `Context<Ctx>`: Returns a Context object with the following methods:

    -   `set<Key extends keyof Ctx>(key: Key, value: Ctx[Key]): void`: Method to set a value in the context.
    -   `get<Key extends keyof Ctx>(key: Key): Ctx[Key]`: Method to get a value from the context.
    -   `has(key: string): boolean`: Method to check if a key exists in the context.
