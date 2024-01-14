---
outline: deep
next:
    text: 'Router'
    link: '/packages/router/router'
---

<!-- @format -->

# What is Nørd-Router?

Nørd-Router is a client-side routing library designed for Nørd applications. It provides a powerful yet flexible way to handle navigation and routing in modern web applications, integrating seamlessly with Nørd's reactive and component-based architecture.

## Installation

You can install `@grainular/nord-router` using npm or yarn:

```bash
# Using yarn
yarn add @grainular/nord-router

# Using npm
npm install @grainular/nord-router
```

:::info
`@grainular/nord-router` requires `@grainular/nord` to be installed as a dependency.
:::

## Features

-   **Declarative Routing**: Easily define routes in your application using a simple and intuitive API.
-   **Reactive Route Management**: Leverage Nørd's granular reactivity system for handling route changes and state.
-   **Dynamic Route Matching**: Support for dynamic route segments, nested routes, and route guards for advanced routing scenarios.
-   **Programmatic Navigation**: Navigate between routes programmatically with powerful navigation functions.

## Basic Usage

Setting up routing in a Nørd application is straightforward. Here's an example of a basic routing setup:

```ts
import { createComponent, render } from '@grainular/nord';
import { createRouter, Route } from '@grainular/nord-router';
import { Home, Overview } from './pages';

const routes: Route[] = [
    { path: '/home', component: Home },
    { path: '/overview', component: Overview },
    // ... more routes ...
];

const router = createRouter(routes, { notFound: '/404' });

const App = createComponent((html) => {
    return html`<div>
        <nav>
            <!-- Navigation Links -->
            <a href="/home" ${router.link}>Home</a>
        </nav>
        ${router.outlet}
    </div>`;
});

render(App, { target: document.querySelector('#app') });
```

In this example, we define a set of routes, create a router, and set up an outlet for rendering the components associated with each route.

:::info
To read more about advanced routing, check out the [`Advanced Routing`](./advanced-routing.md) section.
:::
