---
outline: deep
next:
    text: 'What is Nørd?'
    link: '/guide/introduction'
---

<!-- @format -->

# Getting started

## Try Nørd in your Browser

There are several ways to try out Nørd online, without ever opening a code editor.

-   To try out Nørd in a plain, HTML based setup, you can use this [JSFiddle](https://jsfiddle.net/iamsebastiandev/ctnm8yw9)
-   You can check out a more elaborate example based on Vite + TS in this [StackBlitz](https://stackblitz.com/edit/nord?file=src%2Fmain.ts) project.
-   Check out the simple [Codesandbox](https://codesandbox.io/p/devbox/grainular-nord-v67284) example below:

<iframe src="https://codesandbox.io/p/devbox/grainular-nord-v67284?embed=1&file=%2Fsrc%2Fmain.ts"
     style="width:100%; height: 500px; border:0; border-radius: 4px; overflow:hidden;"
     title="@grainular/nord"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Creating a Nørd Application

::: info
You need to have [Node.js](https://nodejs.org/en/download/current) version 18.0 or higher installed to use the scaffolder.
:::

::: code-group

```sh [yarn]
# Scaffold a project using yarn
$ yarn create @grainular/nord
```

```sh [npm]
# Scaffold a project using npm
$ npm create @grainular/nord
```

:::

The command will install and execute [`@grainular/create-nord`](https://github.com/Grainular-Nord/create-nord), the official Nørd scaffolding tool. Follow the presented prompts and select a template to scaffold a project in the selected directory.

-   `Nørd Web`: A basic html based setup without any build tools.
-   `Nørd Web (modules)`: A html based application utilising JavaScript modules.
-   `Nørd Vite`: A modern, Vite based template.
-   `Nørd Vite TypeScript`: A modern, Vite based template using TypeScript.

::: tip
The `Nørd Vite TypeScript` template is the recommended way to develop a Nørd application. To learn more about Vite, check out the [Vite docs](https://vite.dev)
:::

Follow the instructions provided by the CLI to start developing your Application.

## Rolling your own Nørd

There are generally two different ways to use Nørd in an application. Using the npm package or including the script via CDN.

### Using the npm package

You can install the `@grainular/nord` package via yarn or npm:

::: code-group

```sh [yarn]
# Install the package using yarn
$ yarn add @grainular/nord
```

```sh [npm]
# Install the package using npm
$ npm install @grainular/nord
```

:::

Depending on your application setup, you can use the `require` or `import` syntax to import the package contents into your application.

::: warning
Nørd is a **browser only framework** and will not run in a pure node environment. The npm package must always be used with a build tool like, vite, rollup or webpack.
:::

```js
// main.js

import { createComponent, render } from '@grainular/nord';

const App = createComponent((html) => {
    // ...rest of the component
});

render(App, { target: document.querySelector('#app') });
```

### Using a CDN

If you would like to forego the build setup, you can use Nørd without any kind of builder in a pure browser environment. Nørd is available using the [unpkg](https://www.unpkg.com/) CDN. Depending on your style of application, there are two different ways to setup an CDN based Nørd app.

::: code-group

```html [iife]
<main id="app"></main>
<script src="http://unpkg.com/@grainular/nord"></script>
<!-- You can then access the Nørd namespace from the global window object -->
<script>
    const { render, createComponent } = window.nord;

    const App = createComponent((html) => {
        // ... rest of your component
    });
    render(App, { target: document.querySelector('#app') });
</script>
```

```ts [modules]
// main.ts
import * as nord from 'http://unpkg.com/@grainular/nord/dist/index.mjs';

const App = nord.createComponent((html) => {
    // ... rest of your component
});

nord.render(App, { target: document.querySelector('#app') });
```

:::

## Next Steps

Now that you are able to create and setup your Nørd application, take a look at how a [Application](./application.md) works, how the [Component](./components.md) syntax works, or how to create [Grains](./grains.md), the reactive primitive of Nørd
