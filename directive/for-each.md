---
outline: deep
next:
    text: 'use'
    link: '/directive/use'
prev:
    text: 'when'
    link: '/directive/when'
---

<!-- @format -->

# ForEach

The `forEach` directive is used to reactively render elements based on iterables, like arrays. Similar to `when`, the component template being evaluated once means, that adding or removing elements after the initialization would not lead to the DOM changing.

Type: `forEach<T>(value: T[] | ReadonlyGrain<T[]>, run: (elem: T, index: number) => NodeList): Directive<Text>`

::: info
`when` is a pure `Text` directive.
:::

## Using `forEach`

To use forEach, include inside a template and pass a value (reactive or static). Then provide a callback that, depending on the value, returns different `NodeList`s:

::: warning
While Nørd usually handles `NodeList`s with multiple elements by default, the `forEach` directive needs to always return a `NodeList` of length 1.
:::

```ts
import { grain, forEach, createComponent } from '@grainular/nord';

const component = createComponent((html) => {
    const characters = grain(['a', 'b', 'c']);

    return html`<div>
        ${forEach(characters, (char, index) => html`<div key="${index}">Characters: ${char}</div>`)}
    </div>`;
});
```

This will return a `HTMLDivElement` for each character in the `Grain`. Whenever the `Grain` updates, the provided `run` function will be evaluated again, and the result compared to the current DOM tree. Nodes will then be replaces accordingly.

## The `key` Attribute

To track changes of the Elements, especially when inserting not in the start or end of the iterable, the `key` attribute can be used to give each element a unique id to compare to when updating.

<CodeLink name="for-each.ts" link="https://github.com/Grainular-Nord/nord/blob/main/src/lib/directives/for-each.ts"></CodeLink>
