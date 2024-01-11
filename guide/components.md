---
outline: deep
next:
    text: 'Templates'
    link: '/guide/templates'
prev:
    text: 'Creating the Application'
    link: '/guide/application'
---

<!-- @format -->

# Components

Components are at the core of Nørd's architecture. They define the structure and behaviour of user interface elements in your application. A component in Nørd is a function that returns a NodeList based on a provided template. Component functions are only ever called once. Let's explore how to create and use components.

## Creating a Component

To create a Nørd component, you can use the `createComponent` function. It enables you to define a component's structure, behaviour, and lifecycle hooks. Here's an example of creating a simple counter component:

```ts
// Import necessary functions from Nørd
import { createComponent, grain, on } from '@grainular/nord';

// Create a counter component
const Counter = createComponent((html) => {
    // Define a reactive variable 'count' with an initial value of 0
    const count = grain(0);

    // Return a template using the 'html' function
    return html` <button ${on('click', () => count.update((c) => c + 1))}>Count is: ${count}</button> `;
});
```

## Using a Component

Once you've created a component, you can use it in your application. To do this, you need to render the component using the render function. Here's an example of rendering the Counter component:

```js
// Import necessary functions from Nørd
import { createComponent, render } from '@grainular/nord';

// Create the Counter component (as shown in the previous example)

// Specify the target DOM element where the component should be rendered
const targetElement = document.querySelector('#app');

// Render the Counter component to the target element
render(Counter, { target: targetElement });
```

## Nesting Components

Nesting components is a powerful technique that allows you to build complex and reusable user interfaces by combining smaller components. This section provides a comprehensive guide on how to nest components effectively.

### Example

Let's consider a scenario where we have two components: `Parent` and `Child`. We want to nest the `Child` component inside the `Parent` component, pass custom props to it, and include additional children elements.

```js
import { createComponent } from '@grainular/nord';

// Child component
const Child = createComponent((html, { name, $children }) => {
    return html`
        <div>
            <p>Hello, ${name}</p>
            ${$children}
            <!-- Children elements will be rendered here -->
        </div>
    `;
});

// Parent component
const Parent = createComponent((html) => {
    const name = 'Nørd';

    return html`
        <div>
            <!-- Nesting the Child component -->
            ${Child({ name }, (html) => html`<div>I am a Child</div>`)}
        </div>
    `;
});
```

In this example, we have a `Parent` component that nests a `Child` component. We pass the name prop to customize the greeting message and provide additional children elements to be rendered within the `Child` component.

### Nesting the Child Component

To nest the `Child` component within the `Parent` component's template, use the following syntax:

```js
${Child({ name }, ...children)}
```

his syntax invokes the Child component function, passing the name prop as an argument, and provides children elements.

### Rendering the Children Elements

Inside the `Parent` component, provide children elements to be rendered within the Child component. In this example, we use `(html) => html<div>I am a Child</div>` to specify the children elements. These elements will replace the `${children}` placeholder in the `Child`
component's template.

Nesting components in Nørd empowers you to create modular and flexible user interfaces, simplifying the development of complex web applications.

## Component Lifecycle

Components in Nørd can have lifecycle hooks such as onMount and onDestroy. These hooks allow you to perform actions when a component is created or destroyed. You can define these hooks while creating a component by using the LifeCycle setters provided in the props:

```js
// Create a component with lifecycle hooks
const MyComponent = createComponent((html, { $onMount, $onDestroy }) => {
    // ...component template...

    // Define an 'onMount' hook
    $onMount(() => {
        // This function is called when the component is mounted
        console.log('Component mounted');
    });

    // Define an 'onDestroy' hook
    $onDestroy(() => {
        // This function is called when the component is destroyed
        console.log('Component destroyed');
    });

    // ...rest of the component...
});
```

::: tip
While the component function only being executed once means that all code running inside the component function is run when the component is created, a `onMount` function is still useful to execute code **AFTER** the component is actually inserted into the DOM.
:::

::: info
The `onMount` lifecycle hook will only be triggered once all elements that are returned in the Components NodeList are connected. Similar to this, all elements need to be removed for the `onDestroy` hook to be triggered.
:::

## Styling Components

Nørd allows you to style components in a scoped manner, ensuring that styles do not leak into other parts of your application. You can achieve this by using the `setStyle` method provided by your component function.

```js
// Create a component and set its styles
const MyComponent = createComponent((html) => {
    // ...rest of the component...
});

// Define component-specific styles using 'setStyle'
MyComponent.setStyle((css) => {
    css`
        button {
            background-color: lightblue;
            color: white;
        }
    `;
});
```

## API

The `createComponent` function in Nørd is a fundamental building block for defining custom components with customizable behaviour and structure. It enables developers to create reactive components by specifying a template and optional lifecycle methods.

### Type

`createComponent<Props extends ComponentProps = {}>(template: ComponentTemplate<Props>): Component<Props>`

### Template

-   `Props` (Type: `ComponentProps`, Optional): A generic parameter that specifies the type of properties that the Nørd component accepts. This allows for fully typed components and templates.

### Parameters

-   `template` (Type: `ComponentTemplate<Props>`): A function that defines the structure and behaviour of the component. It takes a parser function `(HtmlParserFunc)` and the component's properties as arguments.

### Returns

A function of type `Component<Props>` that represents the component. This function accepts the component's props and an optional NodeList of children elements. It returns a NodeList that represents the rendered component.
