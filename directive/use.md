---
outline: deep
next:
    text: 'ref'
    link: '/directive/ref'
prev:
    text: 'forEach'
    link: '/directive/for-each'
---

<!-- @format -->

# Use

The `use` directive is Nørd most direct access to the DOM, and is useful to apply arbitrary behaviour to DOM elements without creating custom directive.

Type: `use(handler: (element: Element) => void): Directive<Element>`

::: info
`use` is a pure `Element` directive.
:::

## Using `use`

To use the `use` directive, include in a template.

```ts
import { createComponent, use } from '@grainular/nord';

// Use the `use` directive to log the element.
const component = createComponent((html) => {
    return html`<div ${use((e) => console.log({ e }))}></div>`;
});
```

The directive will log the `Node` to the console when the template is evaluated.

<CodeLink name="use.ts" link="https://github.com/Grainular-Nord/nord/blob/main/src/lib/directives/use.ts"></CodeLink>
