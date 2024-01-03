---
outline: deep
next:
    text: 'reactive'
    link: '/directive/reactive'
prev:
    text: 'ref'
    link: '/directive/ref'
---

<!-- @format -->

# UnsafeHtml

The `unsafeHtml` directive can be used to inject arbitrary raw HTML into a template.

Type: `unsafeHtml(html: string): Directive<Text>`

::: info
`unsafeHtml` is a pure `Text` directive.
:::

## Using `unsafeHtml`

To use `unsafeHtml`, import it and insert the directive into a template.

```ts
import { createComponent, unsafeHtml } from '@grainular/nord';

const component = createComponent((html) => {
    return html`<div>${unsafeHtml(`<div>Unsanitized HTML is injected</div>`)}</div>`;
});
```

The string will be injected into the template at the specified place as innerHTML.

::: danger
Using `unsafeHTML` might introduce security vulnerabilities into your application. You should avoid whenever possible.
:::

<CodeLink name="unsafe-html.ts" link="https://github.com/IamSebastianDev/nord/blob/main/src/lib/directives/unsafe-html.ts"></CodeLink>
