---
outline: deep
next:
    text: 'unsafeHtml'
    link: '/directive/unsafe-html'
prev:
    text: 'use'
    link: '/directive/use'
---

<!-- @format -->

# Ref

The `ref` directive is used to programmatically enable access to DOM elements for other parts of your application.

Type: `ref<NativeElement extends Element = Element>(): Directive<Element> & { nativeElement: NativeElement }`

::: info
`ref` is a pure `Element` directive.
:::

## Using `ref`

To use `ref` and create a reference to an `Element`, import the directive and setup a element reference to access.

```ts
import { createComponent, ref, on } from '@grainular/nord';

const component = createComponent((html) => {
    const _ref = ref<HTMLDivElement>();

    return html`<div ${_ref}>
        <button ${on('click', () => console.log(_ref.nativeElement))}></button>
    </div>`;
});
```

Clicking the button will log the `HTMLDivElement` to the console. After creating a ref instance, you can access the assigned element using the `nativeElement` property.

:::info
The `nativeElement` property will only be populated once the template is evaluated. You should account for that in your code.
:::

<CodeLink name="ref.ts" link="https://github.com/IamSebastianDev/nord/blob/main/src/lib/directives/ref.ts"></CodeLink>
