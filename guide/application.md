---
outline: deep
next:
    text: 'Components'
    link: '/guide/components'
---

<!-- @format -->

# The Nørd Application

A Nørd application comprises two key elements: a root [Component](./components.md) and an entry point. The root component plays a pivotal role in rendering the user interface and serves as the initial point of your application. Conventionally, it is named App. The entry point, on the other hand, is the location where the root component is attached to the DOM, initiating the rendering process.

## The App component

::: tip
Nørd component names are usually written in [Pascal Case](https://en.wikipedia.org/wiki/Camel_case) to mark them as components, even though they are not classes.
:::

```js
// main.js
import { createComponent } from '@grainular/nord';

const App = createComponent((html) => {
    return html`<h1>Hello World</h1>`;
});
```

After creating the root component, it needs to be attached to the DOM. This is done using the [`render`](./application.md#api) function, that can be imported just like the [`createComponent`](./components.md#api) function.

```js
import { createComponent, render } from '@grainular/nord';

const App = createComponent((html) => {
    return html`<h1>Hello World</h1>`;
});

render(App, { target: document.querySelector('#app') });
```

The `render` function takes two arguments, a `Component` and a object used to configure aspects of the Application to render. The object contains the `target` property, which is a `Element` into which the root component is inserted.

## Optional Hydration

The config object can also have a optional `hydrate` property, to pass props to the root component if necessary.

```js
import { render, createComponent } from '@grainular/nord';

const App = createComponent((html, { name }) => {
    return html`<h1>Hello ${name}</h1>`;
});

const options = {
    // Specify a HTMLElement that the application will be rendered onto
    target: document.querySelector('#app'),
    // Properties to pass to the Root component
    hydrate: {
        name: 'Nørd',
    },
};

render(App, options);
```

## API

The `render` function is responsible for mounting a Nørd component into the DOM, making it visible to the user.

### Type

`render<Props extends Record<PropertyKey, unknown>>(component: Component<Props>, options: NørdInit<Props>): void`

### Template

-   `Props` (Type: `ComponentProps`, Optional): A generic parameter that specifies the type of properties that the Nørd component accepts. This allows for fully typed components and templates.

### Parameters

-   `component` (Type: `Component<Props>`): The Nørd component to be rendered. This should be a function returned by the `createComponent` function.

-   `options` (Type: `NordInit<Props>`): An object containing options for rendering the component.
    -   `target` (Type: `Element`): The DOM element where the component should be rendered. This property is mandatory.
    -   `hydrate` (Type: `object`, Optional): An optional object that provides initial state or properties for hydration. These properties should match the expected props of the component.
