---
outline: deep
prev:
    text: 'Directives'
    link: '/packages/forms/directives'
next: false
---

<!-- @format -->

# Validators

Validators in `@grainular/nord-forms` play a crucial role in ensuring that data entered in forms meets specific criteria. This section provides an overview of how to use a validator with a control and how to create your own custom validator.

## Using a Validator

A validator can be attached to a control to enforce data validation rules. Here’s how you can use a predefined validator, like `required`, with a control:

```ts
import { createControl, required } from '@grainular/nord-forms';

// Create a control with the required validator
const nameControl = createControl<string>(
    {
        value: null,
    },
    [required]
);

console.log(nameControl.isValid);
// logs true or false depending on the value
```

In this example, the required `validator` is used to ensure that the `nameControl` has a non-empty value.

## Creating a custom Validator

You can create custom validators to define your own validation logic. A validator is a function that takes a value and returns either `null` (if the value passes the validation) or a `ControlError` object if the validation fails.

**Type**: `Validator<Type extends any> = (value: Type) => null | ControlError;`

### Example

Here’s an example of a custom validator that checks if a string is at least a certain length:

```ts
const minLength = (min: number): Validator<string> => {
    return (value: string) => {
        if (value.length < min) {
            return { minLength: true };
        }
        return null;
    };
};

// Use the custom validator with a control
const passwordControl = createControl<string>(
    {
        value: '',
    },
    [minLength(8)]
);
```

In this example, the `minLength` validator ensures that the `passwordControl` has a value with at least 8 characters.

## Nørd Validators

Nørd provides a set of predefined validator functions to enforce common data validation rules. These validators can be used with form controls to ensure the integrity and correctness of user input.

### `required`

The `required` validator checks if the value is not null or undefined. It's useful for ensuring that a field is filled out in forms.

**Type**: `required<T extends any>(value: T) => { required: true } | null`

```ts
const nameControl = createControl<string>(
    {
        value: '',
    },
    [required]
);
```

### `minLength`

The `minLength` validator ensures that an array has at least a specified minimum number of elements.

**Type**: `minLength<T extends any[]>(amount: number)(controls: T) => { minLength: true } | null`

```ts
const tagsControl = createControl<string[]>(
    {
        value: [],
    },
    [minLength(3)]
);
```

### `maxLength`

The `maxLength` validator checks that an array does not exceed a specified maximum number of elements.

**Type**: `maxLength<T extends any[]>(amount: number)(controls: T) => { maxLength: true } | null`

```ts
const tagsControl = createControl<string[]>(
    {
        value: [],
    },
    [maxLength(5)]
);
```

### `textLength`

The `textLength` validator is used for strings to ensure their length falls within a specified range, defined by minimum and maximum values.

**Type**: `textLength(min?: number, max?: number)(value: string) => { textLength: true } | null`

```ts
const bioControl = createControl<string>(
    {
        value: 'Bio text here...',
    },
    [textLength({ min: 10, max: 200 })]
);
```

### `isEmail`

The `isEmail` validator checks if a string is a valid email address using a regular expression.

**Type**: `isEmail(value: string) => { email: true } | null`

```ts
const emailControl = createControl<string>(
    {
        value: 'user@example.com',
    },
    [isEmail]
);
```
