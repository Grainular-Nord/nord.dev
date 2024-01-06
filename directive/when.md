---
outline: deep
next:
    text: 'forEach'
    link: '/directive/for-each'
prev:
    text: 'on'
    link: '/directive/on'
---

<!-- @format -->

# When

The `when` directive is used to conditionally render content into a template. As templates are evaluated only once, it is not possible to reactively use pure javascript conditionals to render content depending on conditional values. The `when` directive solves this issue.

Type: `when<T>(value: T | ReadonlyGrain<T>, [evaluate]: (value: T) => boolean): then: (thenNodes: NodeList) => Directive<Text> & { else(elseNodes: NodeList): Directive<Text> } };`

::: info
`when` is a pure `Text` directive.
:::

## Using `when`

The `when` directive allows you to conditionally render content based on the provided value or grain, making dynamic rendering in your templates a breeze. To use the `when` directive, follow these steps:

-   Include the `when` directive inside your template.

-   Pass a value (either reactive or static) to the `when` directive. Optionally, you can also provide a function to evaluate the value and coerce it into a boolean.

-   Use the .then property to provide a callback that returns the desired NodeList when the condition is met.

-   If desired, use the .else property to provide an alternative template to render when the condition is not met.

Here's an example of how to use the `when` directive in a component template:

```ts
import { grain, when, createComponent } from '@grainular/nord';

const component = createComponent((html) => {
    const isLoggedIn = grain(false);

    return html`<div>
        ${when(isLoggedIn)
            .then(html`<div>Logged In!</div>`)
            .else(html`<div>Logged Out!</div>`)}
    </div>`;
});
```

Depending on the state of the `isLoggedIn` grain, either the "Logged In!" or "Logged Out!" template will be displayed. The `when` directive takes care of creating and destroying the templates as needed, ensuring a seamless user experience.

<CodeLink name="when.ts" link="https://github.com/Grainular-Nord/nord/blob/main/src/lib/directives/when.ts"></CodeLink>
