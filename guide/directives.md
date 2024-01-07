---
outline: deep
next:
    text: 'Tooling'
    link: '/guide/tooling'
prev:
    text: 'Grains'
    link: '/guide/grains'
---

<!-- @format -->

# Directives

Directives are what enables Nørd's declarative template engine. In short, directives are all functions that are inserted into the template. They all receive the node (either a `Text` or `Element` node) they are associated with. A node can have as many directives as you'd like, Nørd manages these directives independently of each other. Even things like conditionals and loops are realized with Nørd predefined directive factories.

## Accessing an Element using a Directive

The most basic form of a directive is a simple function that receives the node as an argument.

```js
<div ${(node) => console.log(node)} ></div>
```

When the component containing the template with the directive is evaluated, the directive will be passed the node and be executed only once. That means that directives are very performant, as they are never reevaluated.

## Using a inbuilt Directive Factory

Directive factories are functions that return a directive with a certain, dynamic configuration. You can use the `on` factory to dynamically add any event listener to a element.

```js
<button ${on('click', (ev) => console.log(ev))} ></button>
```

Whenever the button receives a click event, the event will be logged to the console. This enables setting handlers and other processing on element declaratively without the need to access the element using a `querySelector` or something similar.

## Creating a custom Directive

Custom directives can be created using the `createDirective` function provided by Nørd. To create a directive that would apply a certain style to a element, you could create a custom directive:

```js
// apply-color.directive.ts
import { createDirective } from '@grainular/nord';

// the following directive will apply a red background color to any element.
export const applyColor = createDirective((node) => {
    node.style.background = 'red';
});
```

The created directive could then be used like any other directly in a template:

```js
<div ${applyColor}>I have a red background</div>
```

::: info
When creating custom directive for a `Text` node, you need to manipulate the node value yourself. By default, this will be set to the token that Nørd used to track the node. You can safely remove or manipulate this value, as after the directive is applied, Nørd no longer needs to track the node.
:::

To make the directive more flexible (if necessary), you could convert it into a directive factory. A directive factory is a function that returns a directive function, and can be configured inside the template.

```js
// background.directive.js
import { createDirective } from '@grainular/nord';

export const background = (color) => {
    return createDirective((node) => {
        node.style.background = color;
    });
};
```

You can then call the created factory inside the template with the expected argument, which will return the dynamic directive.

```js
<div ${background('red')} ></div>
```

::: tip
Abstracting component logic into reusable directives is a good pattern to follow and a powerful tool in Nørd template syntax.
:::

## API

The `createDirective` function is used to create reusable directives, that apply logic to `Text` or `Element` nodes.

### Type

`createDirective<NodeType extends Text | Element>(handler: (node: NodeType) => void): Directive<NodeType>`

### Template

-   `NodeType` (Type: `Element` | `Text`): A generic parameter that specifies the type of node that the directive expects. The directive should handle it by itself if it is attached to a node it cannot work with.

### Parameters

-   `handler` (Type: `(node: NodeType) => void`): The handler to execute with the associated node. This is what makes up the core of the directive.
-   `options` (Type: `DirectiveOptions`): A optional options object to configure the created directive.
    -   `nodeType` (Type: `'Text'` | `'Element'`): Set to have the directive only accept one kind of `Node`. If set, the directive will throw when an incorrect type is received.

### Returns

A function of type `Directive<NodeType>`, that can be inserted into a component template.
