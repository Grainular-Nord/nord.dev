---
outline: false
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

Type: `when<T>(value: T | ReadonlyGrain<T>, run: (value: T) => NodeList): Directive<Text>`

::: info
`when` is a pure `Text` directive.
:::

## Using `when`

To use when, include inside a template and pass a value (reactive or static). Then provide a callback that, depending on the value, returns different `NodeList`s:

```ts
import { grain, when, createComponent } from '@grainular/nord';

const component = createComponent((html) => {
    const isLoggedIn = grain(false);

    return html`<div>
        ${when(isLoggedIn, (state) => (state ? html`<span>Not logged in.</span>` : html`<span>Not logged in.</span>`))}
    </div>`;
});
```

Depending on which state the `isLoggedIn` `Grain` has, the different templates are shown. Each template is created and destroyed accordingly.

::: info In The Code:
You can see the function signature & implementation here: [when.ts](https://github.com/IamSebastianDev/nord/blob/main/src/lib/directives/when.ts)
:::
