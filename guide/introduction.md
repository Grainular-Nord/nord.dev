---
outline: deep
next:
    text: 'Getting started'
    link: '/guide/getting-started'
---

<!-- @format -->

# What is Nørd?

Nørd is a modern JavaScript framework that enables developers to build web applications with fine-grained reactivity and a component-based architecture. It uses [tagged templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) for HTML rendering and Grains as primary reactive primitive. Nørd is [TypeScript](https://www.typescriptlang.org/)-centric, offering fully typed components and templates.

::: tip
Just looking on how to get started? Check out the [Getting started](./getting-started) section.
:::

## Basic example

```ts
// app.ts
import { createComponent, render } from '@grainular/nord';

const App = createComponent((html) => html`<h1>Hello, Nørd!</h1>`);

render(App, { target: document.querySelector('#app') });
```

## Concepts

Nørd was developed with a set of core concepts in mind.

### No JSX

Nørd takes a unique approach by avoiding JSX. Instead, it uses tagged template literals to define templates and components. This approach provides a clean and intuitive way to describe the structure of components without introducing JSX syntax. This also means that Nørd can stay dependency free and be included in basic web applications without the need to compile JSX. When writing in Nørd, you write actual HTML, like in [Svelte](https://svelte.dev/) or [Angular](https://angular.dev/).

### Grains

One of Nørd's key features is it's inbuilt reactivity system. Instead of rerendering a DOM tree or diffing using a Virtual DOM, values are connected to their respective Text or Attribute node. When the value changes, only those nodes change, and they only change when the value actually changes. There are no rerenders of any component. `Grains` can also exist outside a component, and can be used to represent global state. This means that a single `grain` can be updated from anywhere, affecting all it's associated nodes, independent of component scope.

```ts
// counter.component.ts
import { createComponent, grain, on } from '@grainular/nord';

export const Counter = createComponent((html) => {
    const count = grain(0); // If you're using typescript, the type of grain will correctly be inferred here

    const increment = () => {
        // you can access the grains value at any time by calling it. Similar to the way Signals handle their state
        count.set(count() + 1);
    };

    return html`<button ${on('click', () => increment())}>${count}</button>`;
});
```

Whenever the button is clicked, the count `grain` is set to the new value, which then in turn sets the text-content of the button. The `HTMLButtonElement` will not change at all.

### Components

Nørd encourages a component-based architecture. Components are defined using a function that returns a template defined with tagged template literals. This approach makes it easy to create reusable and composable UI elements, that can be composed at will. Components are inserted into Templates as functions, providing an api to pass props and children into the component.

```ts
// Greeting.component.ts
import { createComponent } from '@grainular/nord';

export const Greeting = createComponent<{ phrase: string }>((html, { phrase }) => html`<h1>Hello, ${phrase}</h1>`);
```

```ts
// app.ts
import { createComponent, render } from '@grainular/nord';
import { Greeting } from './components/greeting.component';

const App = createComponent((html) => {
    return html`<main>${Greeting({ phrase: 'World' })}</main>`;
});
```

### Directives

Directives are functions that can be inserted into your template. Most of the time you will want to use a [factory function](<https://en.wikipedia.org/wiki/Factory_(object-oriented_programming)>) to create directives that can be dynamically configured. Nørd provides and used a set of predefined directives to control templates.

```ts
// app.ts
import { render, createComponent, createDirective } from '@grainular/nord';

// create a directive that when inserted into the template, will log it's corresponding node.
const logElement = createDirective((node: Element) => console.log({ node }));

const App = createComponent((html) => html`<div ${logElement}>Hello World!</div>`);

// The directive will log `{node: HTMLDivElement}` once when the component is instantiated.

render(App, { target: document.querySelector('#app') });
```

Directives are intended to provide declarative access to the dom. Custom directives or abstracting logic into directives are a large part of Nørd's API.

## Why Nørd?

There are many frameworks that already do what Nørd offers, and they probably do it better. Its origins trace back to a time before SolidJS and React hooks were available, and now it has evolved to fulfil its potential. Nørd doesn't seek to replace established frontend frameworks but rather aims to complement them. It serves as a valuable option for developers who appreciate the idea of avoiding JSX while still benefiting from a reactive framework.
