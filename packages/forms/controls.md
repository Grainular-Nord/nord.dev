---
outline: deep
prev:
    text: 'Overview'
    link: '/packages/forms/overview'
next:
    text: 'Control Groups'
    link: '/packages/forms/group-controls'
---

<!-- @format -->

# Controls

Controls in `@grainular/nord-forms` are fundamental building blocks for managing form input elements. They provide a robust interface for state management, validation, and interaction with various HTML input elements.

## Creating a Control

A Control is created using the `createControl` function. This function generates a Control instance that manages the state, validation, and behavior of an associated form input element.

type: `createControl<Type extends ControlTypes>(init: ControlInit<Type>, validators?: Validator<Type | null>[]): Control<Type>`

Parameters

-   `Type`: The data type of the Control's value.
-   `init`: An object of type `ControlInit<Type>`, providing initial configuration.
-   `[validators]`: An optional array of `Validator<Type | null>` for applying validation rules.

## Using the Control

```ts
import { createControl, createControlGroup } from '@grainular/nord-forms';

// Create a control within a ControlGroup
const form = createControlGroup({
    name: createControl<string>({
        value: null, // Set initial value
    }),
});

return html` <form>
    ...
    <!-- Connect the form input element to the control -->
    <input ${form.name.control} type="text" />
</form>`;
```

In this example, the `name` field of the form is bound to a Control. Any changes in the input element are synchronized with the Control, and vice versa.

::: tip
`Nørd-Forms` uses the `type` of the Control to infer the correct data type for the control and parses it accordingly.
:::

## Control API

### `control`

**Type**: `Directive<Element>`

The control Directive of the `Control`. It is used to connect the control to a HTMLInputElement, creating a two-way binding between the input element and the control.

### `id`

**Type**: `string`

The unique identifier of the `Control`. This ID is set during control creation and is used to uniquely identify the control.

### `parentGroup`

**Type**: `ControlGroup<any> | undefined`

The ControlGroup to which the Control belongs, if it is used within one. This property links the control to its parent group, enabling group-level operations and state management.

### `controlName`

**Type**: `string | undefined`

The propertyName of the Control when used inside a ControlGroup. It represents the name of the control within the group context.

### `name`

**Type**: `string | undefined`

The `name` attribute of the `Control`, which is set on the HTMLInputElement. It corresponds to the HTML attribute name of the input element.

### `type`

**Type**: `string | undefined`

The type attribute of the `Control`, which is set on the HTMLInputElement. It reflects the HTML attribute type of the input element.

### `value`

**Type**: `ReadonlyGrain<Type | null>`

The value of the `Control`, accessible as a `ReadonlyGrain<Type | null>`. This allows for tracking changes in the control's value via the subscribe method.

### `rawValue`

**Type**: `Type | null`

The raw value of the `Control` at the current moment. This provides direct access to the control's current value without the need for subscription.

### `setValue`

**Type**: `(value: Type | null) => void`

A method to set the value of the `Control`. It allows for programmatic updates of the control's value.

### `touched`

**Type**: `ReadonlyGrain<boolean>`

Indicates whether the `Control` has been touched (interacted with by the user). Changes can be observed via the subscribe method.

### `isTouched`

**Type**: `boolean`

Indicates whether the `Control` is currently touched (interacted with by the user).

### `disabled`

**Type**: `ReadonlyGrain<boolean>`

Indicates whether the `Control` is disabled. The status can be observed for changes using the subscribe method.

### `isDisabled`

**Type**: `boolean`

Indicates whether the `Control` is currently disabled.

### `disable`

**Type**: `() => void`

A method to disable the `Control`.

### `enable`

**Type**: `() => void`

A method to enable the `Control`.

### `focused`

**Type**: `ReadonlyGrain<boolean>`

Indicates whether the `Control` is focused (has user focus). The status can be observed for changes using the subscribe method.

### `isFocused`

**Type**: `boolean`

Indicates whether the `Control` is currently focused.

### `registerOnFocus`

**Type**: `(handler: (event: FocusEvent) => void) => void`

Registers a callback function to be executed when the `Control` gains focus.

### `registerOnBlur`

**Type**: `(handler: (event: FocusEvent) => void) => void`

Registers a callback function to be executed when the `Control` loses focus.

### `valid`

**Type**: `ReadonlyGrain<boolean>`

Indicates whether the `Control` is valid (passes all validation checks). Changes can be observed via the subscribe method.

### `isValid`

**Type**: `boolean`

Indicates whether the `Control` is currently valid (passes all validation checks).

### `validators`

**Type**: `Validator<Type>[]`

An array of validators associated with the `Control`.

### `addValidator`

**Type**: `(...validator: Validator<Type>[]) => void`

Adds one or more validators to the `Control`.

### `removeValidator`

**Type**: `(validator: Validator<Type>) => void`

Removes a validator from the `Control`.

### `errors`

**Type**: `ReadonlyGrain<ControlError>`

An object containing errors associated with the `Control`. The status can be observed for changes using the subscribe method.

### `reset`

**Type**: `() => void`

Resets the `Control` to its initial state, clearing errors and values.

### `nativeElement`

**Type**: `HTMLInputElement | null`

The native HTMLInputElement associated with the `Control`.

<CodeLink name="create-control.ts" link="https://github.com/Grainular-Nord/nord-forms/blob/main/src/lib/controls/create-control.ts"></CodeLink>
