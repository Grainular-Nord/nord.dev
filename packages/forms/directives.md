---
outline: deep
prev:
    text: 'Control Lists'
    link: '/packages/forms/list-controls'
next:
    text: 'Validators'
    link: '/packages/forms/validators'
---

<!-- @format -->

# Directives

`@grainular/nord-forms` introduces specialized directives to enhance form handling in web applications. This section covers the new directives.

::: tip
Read more about Nørd Directives [here](../../guide/directives.md);
:::

## `bind`

The `bind` directive creates a two-way binding between a specified attribute of an `HTMLInputElement` and a `Grain` value. It allows for dynamic synchronization between the input element and the application state.

### Usage

```ts
import { bind } from '@grainular/nord';

const search = bind('value');
// Set up a listener to track value changes.
search.subscribe((value) => console.log(value));

return html`<div>
    <input ${search.bind} type="text" name="search" />
</div>`;
```

In this example, the `bind` directive links the 'value' attribute of an input element to a `Grain` value, enabling two-way data flow.

## `controlErrors`

The `controlErrors` function creates a directive for displaying control errors. It takes a `Grain` representing control errors, a dictionary mapping error keys to messages, and a function to render the error messages.

::: warning
The API for the controlErrors directive is not yet stable and will change soon.
:::
