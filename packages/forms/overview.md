---
outline: deep
next:
    text: 'Controls'
    link: '/packages/forms/controls'
---

<!-- @format -->

# What is Nørd-Forms?

Nørd-Forms aims to simplify and enhance form handling in Nørd applications. It provides a set of utilities and functions to streamline form creation, validation, and submission, making it easier to build interactive and user-friendly forms.

## Installation

You can install `@grainular/nord-forms` using npm or yarn:

```bash
# Using yarn
yarn add @grainular/nord-forms

# Using npm
npm install @grainular/nord-forms
```

:::info
`@grainular/nord-forms` requires `@grainular/nord` to be installed as a dependency.
:::

## Features

-   `Declarative Form Building`: Forms are built using predefined, abstract building blocks that all represent a certain type of data structure.
-   `Reactive`: Using `Nørds` granular reactivity system, controls are full reactive.
-   `Template driven`: Every control hooks directly into the template using predefined control directives.
-   `Strongly typed`: All controls are strongly typed.

## Basic usage

To create a form using `@grainular/nord-forms`, you can import the necessary components and utilities. Here's an example of how to create a simple form:

```ts
import { createComponent, render } from '@grainular/nord';
import { createControl, createControlGroup } from '@grainular/nord-forms';

const App = createComponent((html) => {
    const form = createControlGroup({
        name: createControl<string>({ value: null }),
    });

    const onSubmit = () => {
        console.log({ value: form.rawValue });
    };

    return html`<form ${form.handle({ onSubmit })}>
        <label>
            Name:
            <input ${form.name.control} type="text" placeholder="Name..." />
        </label>
        <button>Submit</button>
    </form>`;
});

render(App, { target: document.querySelector('#app') });
```

In this example, we import `createControl` and `createControlGroup` from `@grainular/nord-forms` to create a form with a single "name" field. The form handles the submission and logs the form data when the "Submit" button is clicked.

### Controls

A `Control` is an input component within a form. It can represent various input types and be linked to `HTMLInputElement`, `HTMLSelectElement`, or `HTMLTextAreaElement`. `Controls` function both independently and as part of a `Control Group`. However, in a `Control Group` context, they offer additional properties.

```ts
import { createControl } from '@grainular/nord-forms';

// Create a custom control with a initial value of null.
const searchControl = createControl<string>({ value: null });

// Attach it to a input element
return html`<div>
    <input type="text" ${searchControl.control} />
</div>`;
```

The `value` of the input updates the `searchControl` automatically. Access the control's value using `value` or `rawValue`. Controls offer these properties directly and as `Grains` for more reactive approaches.

> [Read more about Controls](./controls.md)

### Control Groups

A `Control Group` aggregates multiple `Controls`, forming a composite value. It resembles an object containing key-value pairs, where each key-value pair is a `Control`.

```ts
import { createControl, createControlGroup } from '@grainular/nord-forms';

// Create a control group with a name control and a age control
const form = createControlGroup({
    name: createControl<string>({
        value: null,
    }),
    age: createControl<number>({
        value: null,
    }),
});

// Create a submit handler
const onSubmit = () => {
    if (form.isValid) {
        console.log(form.rawValue);
    }
};

return html` <!-- Add the submit handler to the form element -->
    <form ${form.handle({ onSubmit })}>
        <!-- Add both inputs to the form -->
        <label>
            Name:
            <input ${form.name.control} type="text" />
        </label>
        <label>
            Age:
            <input ${form.age.control} type="number" />
        </label>
        <button type="submit">Submit</button>
    </form>`;
```

Whenever the `submit` button is used, the validity of the form is used to decide if the form value should be logged to the console or not.

> [Read more about Control Groups](./group-controls.md)

### Control Lists

`Control List` is a dynamic array-like structure of `Control Groups`, ideal for handling varying quantities of similar `Controls`. It organizes controls into an array format.

```ts
import { createControl, createControlGroup, createControlList } from '@grainular/nord-forms';

// Create a control group with a name control and a age control
const form = createControlGroup({
    items: createControlList([
        // Create the first, empty entry
        createControlGroup({
            name: createControl<string>({ value: null }),
        }),
    ]),
});

// Create a function to add a additional control
const addControl = () => {
    form.items.add(
        createControlGroup({
            name: createControl<string>({ value: null }),
        })
    );
};

// Create a submit handler
const onSubmit = () => {
    if (form.isValid) {
        console.log(form.rawValue);
    }
};

return html` <!-- Add the submit handler to the form element -->
    <form ${form.handle({ onSubmit })}>
        <div>
            ${form.items.list(
                (entry) => html` <!-- Add a key to the returned element -->
                    <label key="${entry.id}">
                        <input type="text" ${entry.name.control} />
                    </label>`
            )}
        </div>
        <!-- Add the button to create a new control -->
        <button ${on('click', () => addControl())} type="button">Add field</button>
        <button type="submit">Submit</button>
    </form>`;
```

Adding a control to the `Control List` updates the list and adjusts the templates accordingly. The `Control List` value comprises an array of the individual `Control Groups` values.

> [Read more about Control Lists](./list-controls.md)
