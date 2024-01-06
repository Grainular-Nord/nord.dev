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

# each

The `each` directive is used to reactively render elements based on iterables, like arrays. Similar to `when`, the component template being evaluated once means, that adding or removing elements after the initialization would not lead to the DOM changing.

Type: `each<T>(value: T[] | ReadonlyGrain<T[]>): { as: ( run: (elem: T, index: number) => NodeList) => Directive<Text> & {else: (nodes: NodeList) => Directive<Text>}}`

::: info
`each` is a pure `Text` directive.
:::

## Using `each`

To use each, include inside a template and pass a value (reactive or static). Use the returned `as` property to define the iterative template used. Optionally, use the `else` property to define a callback template to use when there are no element in the passed array.

::: warning
While Nørd usually handles `NodeList`s with multiple elements by default, the `forEach` directive needs to always return a `NodeList` of length 1, to ensure that the replacement of Nodes works correctly.
:::

```ts
import { grain, each, createComponent } from '@grainular/nord';

const component = createComponent((html) => {
    const characters = grain(['a', 'b', 'c']);

    return html`<div>
        ${each(characters).as((char, index) => html`<div key="${index}">Characters: ${char}</div>`)}
    </div>`;
});
```

This will return a `HTMLDivElement` for each character in the `Grain`. Whenever the `Grain` updates, the function provided to `as` function will be evaluated again, and the result compared to the current DOM tree. Nodes will then be replaced accordingly.

## The `key` Attribute

To track changes of the Elements, especially when inserting not in the start or end of the iterable, the `key` attribute can be used to give each element a unique id to compare to when updating.

<CodeLink name="each.ts" link="https://github.com/Grainular-Nord/nord/blob/main/src/lib/directives/each.ts"></CodeLink>
