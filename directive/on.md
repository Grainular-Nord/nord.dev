---
outline: deep
next:
    text: 'when'
    link: '/directive/when'
prev: false
---

<!-- @format -->

# On

The `on` directive factory is used to add a `eventListener` to a `Element` node. It is a simple abstraction for `element.addEventListener`.

Type: `on<EventType extends Event = Event>(event: keyof HTMLElementEventMap, listener: (event: EventType) => void, [options]: AddEventListenerOptions): Directive<Element>`

::: info
`on` is a pure `Element` directive.
:::

## Using `on`

To use `on`, include in the template within a `Element` tag.

```ts
import { on, createComponent } from '@grainular/nord';

const button = createComponent((html) => {
    const handleButtonClick = (ev) => {
        console.log(ev);
    };

    return html` <button ${on('click', (ev) => handleButtonClick(ev))}>Click me!</button>`;
});
```

Whenever the button is clicked, the event will be logged to the console.

<script setup>
import CodeLink from '../components/CodeLink.vue'
</script>

<CodeLink name="on.ts" link="https://github.com/IamSebastianDev/nord/blob/main/src/lib/directives/on.ts"></CodeLink>
