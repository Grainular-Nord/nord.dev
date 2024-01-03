---
outline: deep
next: false
prev:
    text: 'combined'
    link: '/grain/combined'
---

<!-- @format -->

# Get

The `get` function is a special form of the `derived` function, mostly used inside of templates to reactively extract a property from a object `Grain`.

Type: `get<T extends Record<PropertyKey, unknown>, P extends keyof T>(grain: ReadonlyGrain<T>, property: P): ReadonlyGrain<T[P]>`

## Using the `get` Function

Whenever you deal with object `Grains`, you need to derive the values of the contained properties somehow. The `get` function makes it easy to do so declarative without using a derived `Grain`:

```ts
import { createComponent, grain, get } from '@grainular/nord';

type User = { name: string; age: number };

export const App = createComponent((html) => {
    const user = grain<User>({ name: 'Nørd', age: 0 });

    return html`<div>Name: ${get(user, 'name')}, Age: ${get(user, 'age')}</div>`;
});
```

This way, whenever the value of `user` changes, the properties inside the template are correctly updated.

<CodeLink name="get.ts" link="https://github.com/IamSebastianDev/nord/blob/main/src/lib/grains/get.ts"></CodeLink>
