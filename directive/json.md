---
outline: deep
next:
    text: 'Custom Directives'
    link: '/directive/custom-directives'
prev:
    text: 'reactive'
    link: '/directive/reactive'
---

<!-- @format -->

# Json

The `json` directive can be used to render data as JSON into a template.

Type: `json(data: any): Directive<Text>`

::: info
`json` is a pure `Text` directive.
:::

## Using `json`

To use `json`, import it and insert the directive into a template.

```ts
import { createComponent, json } from '@grainular/nord';

const component = createComponent((html) => {
    return html`<div>${json({ name: 'test' })}</div>`;
});
```

The json will be injected into the template at the specified place.

::: warning
As JSON Stringifying can fail, an error will be displayed if the value cannot be stringified.
:::

<CodeLink name="json.ts" link="https://github.com/Grainular-Nord/nord/blob/main/src/lib/directives/json.ts"></CodeLink>
