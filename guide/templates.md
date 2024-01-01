---
outline: deep
next:
    text: 'Grains'
    link: '/guide/templates'
prev:
    text: 'Components'
    link: '/guide/components'
---

<!-- @format -->

# Templates

Templates are one of the key aspects of Nørd and what allows the creation of declarative code, instead of imperatively creating `Elements` and adding properties to them. Templates consist of a [`tagged template`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates) function that receives a html string. Different values can be inserted into the string, to perform different actions.

## Parsing a template string

To parse a template string, use one of the template parser functions provided as first argument in any [`createComponent`](./components.md) function. The parser is instanced per `Component`, so that every parser has a reference to it's component. The parser will parse the template string and construct the `NodeList`, that will then be inserted into the DOM.

```js
import { createComponent } from '@grainular/nord';

const App = createComponent((html) => {
    // Use the provided html parser to parse your template string
    return html`<div>Hello, ${'Nørd'}</div>`;
});
```

## Template Values

In general, there are 4 different types of template values that can be inserted into a template.

-   `NodeList`: Those are generally returned by component functions.
-   `Directives`: [`Directives`](./directives.md) are functions that can be inserted into the DOM to manipulate it.
-   `Grains`: [`Grains`](./grains.md) are the reactive primitive used by Nørd to ensure reactivity.
-   `ToStringTypes`: Any other value, that can be parsed to a string by JavaScript can be inserted and will be inserted as is. `null` & `undefined` will lead to empty an empty `Text` node.

::: tip
As templates are evaluated only once, values & properties changing after the parsing will have no effect. For this, `Grains` are used, to ensure granular reactivity on a node by node base.
:::
