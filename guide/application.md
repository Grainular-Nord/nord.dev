<!-- @format -->

# The Nørd Application

A Nørd application consists of at least two things. A [Component](./components.md) and an entry point. The component is the same component that will be rendered to the entry point, and serves as the root for all other components. This component is usually called `App`.

::: tip
Nørd component names are usually written in [Pascal Case](https://en.wikipedia.org/wiki/Camel_case) to mark them as components, even though they are not classes.
:::

```ts
// main.js
import { createComponent } from '@grainular/nord';

const App = createComponent((html) => {
    return html`<h1>Hello World</h1>`;
});
```

After creating the root component, it needs to be attached to the DOM. This is done using the [`render`](../api/render.md) function, that can be imported just like the [`createComponent`](../api/create-component.md) function.

```ts
import { createComponent, render } from '@grainular/nord';

const App = createComponent((html) => {
    return html`<h1>Hello World</h1>`;
});

render(App, { target: document.querySelector('#app') });
```

The `render` function takes two arguments, a `Component` and a object used to configure aspects of the Application to render. The object contains the `target` property, which is a `Element` into which the root component is inserted. It will also take a optional `hydrate` property, that will optionally take all props that the provided root component receives and relay them to that component upon instantiation.
