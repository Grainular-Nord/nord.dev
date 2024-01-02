---
outline: deep
next:
    text: 'Custom Directives'
    link: '/directive/custom-directives'
prev:
    text: 'unsafeHtml'
    link: '/directive/unsafe-html'
---

<!-- @format -->

# Reactive

The `reactive` directive is a bridge between any `Observable` value and a Nørd template. This allows hooking up practically any kind of `Observable` into Nørd's reactivity model. Under the hood, Nørd uses the `reactive` directive to connect `Grains` to the template.

::: info
`reactive` is a combined `Text` & `Element` directive.
:::

## Using `reactive`

To use the `reactive` directive, you can use any kind of `Observable`, as long as it has a `Subscribe` method receiving the value, emitting on subscription, and returning a function to unsubscribe.

```ts
import { createComponent, grain, reactive } from '@grainular/nord';

const component = createComponent((html) => {
    const count = grain(0);

    return html`<div>Count: ${reactive(count)}</div>`;
});
```

The directive will automatically subscribe to the `Observable`, keep track of it's subscription status and ensure that the corresponding `Node` is kept updated.

::: tip
You can take advantage of named imports to shorten the name if you want. Simply import `{ reactive as $ }` and then use `$` in the template instead of the `reactive` name.
:::

::: info
If you would like [RxJS](https://rxjs.dev) as your state-management reactive primitive, you can do so with the `reactive` directive and the [@grainular/nord-rxjs](https://github.com/Grainular-Nord/nord-rxjs) package.
:::

<script setup>
import CodeLink from '../components/CodeLink.vue'
</script>

<CodeLink name="reactive.ts" link="https://github.com/IamSebastianDev/nord/blob/main/src/lib/directives/reactive.ts"></CodeLink>
