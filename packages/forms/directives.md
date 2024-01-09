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

### Using the `bind` directive

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

The `controlErrors` directive provides a dynamic way to display validation errors for form controls. It utilizes a `Grain` that represents the current state of control errors, along with a dictionary to map error keys to user-friendly messages.

### Using the `controlErrors` directive

```ts
import { controlErrors } from '@grainular/nord';

const form = createControlGroup({
    name: createControl<string>({ value: null }, [required]),
});

const errorMessages = {
    required: 'This field is required.',
    minLength: 'Minimum length not met',
    // Add other error message mappings here
};

return html`<form>
    <label>
        Name:
        <input ${form.name.control} type="text" />
        <span ${controlErrors(form.name.errors).fromDict(errorMessages)}></span>
    </label>
    <button>Submit</button>
</form>`;
```

In this example, `controlErrors` is used to display error messages for the `name` control. The directive listens for changes in the control's error state and updates the displayed message accordingly based on the provided dictionary.

::: tip
Customize the rendering of error messages by modifying the errorMessages dictionary to suit your application's needs.
:::
