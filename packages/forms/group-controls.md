---
outline: deep
prev:
    text: 'Controls'
    link: '/packages/forms/controls'
next:
    text: 'Control Lists'
    link: '/packages/forms/list-controls'
---

<!-- @format -->

# Control Groups

`Control Groups` in `@grainular/nord-forms` allow for managing a collection of related controls as a single entity. This enables complex forms to be broken down into more manageable and logical segments, enhancing form functionality and user interaction.

## Creating a Control Group

A `Control Group` is created using the `createControlGroup` function. This function constructs a `ControlGroup` instance that encapsulates a specified set of controls.

**Type**: `createControlGroup<Controls extends GroupControls>(controls: Controls, validators?: Validator<any>[]): ControlGroup<Controls>`

**Parameters**:

-   `Controls`: The schema of controls within the group.
-   `controls`: An object containing the controls to be included in the group.
-   `[validators]`: An optional array of `Validator<any>[]` to apply to the control group.

## Using a Control Group

```ts
import { createControl, createControlGroup } from '@grainular/nord-forms';

// Create a control group with a name control and a age control
const form = createControlGroup({
    username: createControl<string>({
        value: null,
    }),
    email: createControl<string>({
        value: null,
    }),
});

// Create a submit handler
const onSubmit = () => {
    if (form.isValid) {
        console.log(form.rawValue);
    }
};

return html`<form ${form.handle({ onSubmit })}>
    <!-- Add both inputs to the form -->
    <label>
        Username:
        <input ${form.username.control} type="text" />
    </label>
    <label>
        Email:
        <input ${form.email.control} type="text" />
    </label>
    <button type="submit">Submit</button>
</form>`;
```

In this example, a control group is created with two controls: username and email. The group's validity and individual control values can be accessed and manipulated, providing a powerful and flexible way to manage form state.

## Control Group API

### `id`

**Type**: `string`  
The unique identifier of the `ControlGroup`. This ID is set during the creation of the ControlGroup and can be used to uniquely identify it.

### `value`

**Type**: `ReadonlyGrain<ControlValues<Controls>>`  
A reactive grain representing the values of all controls within the `ControlGroup`. Changes in the values of controls are reflected in this grain.

### `rawValue`

**Type**: `ControlValues<Controls>`  
The current raw values of all controls within the `ControlGroup`.

### `parentGroup`

**Type**: `ControlGroup<any> | undefined`  
The parent `ControlGroup` of the `ControlGroup`, if nested within another `ControlGroup`.

### `controlName`

**Type**: `string | undefined`  
The control name associated with the `ControlGroup`, if used within a `ControlGroup`.

### `setValue`

**Type**: `(values: Partial<ControlValues<Controls>>) => void`  
A method to set the values of controls within the `ControlGroup`. You can provide partial values to update specific controls.

### `touched`

**Type**: `ReadonlyGrain<boolean>`  
Indicates whether any of the controls within the `ControlGroup` have been touched (interacted with by the user). Can be observed for changes using the `subscribe` method.

### `isTouched`

**Type**: `boolean`  
Indicates whether any of the controls within the `ControlGroup` are currently touched (interacted with by the user).

### `focused`

**Type**: `ReadonlyGrain<boolean>`  
Indicates whether any of the controls within the `ControlGroup` are focused (have user focus). Can be observed for changes using the `subscribe` method.

### `isFocused`

**Type**: `boolean`  
Indicates whether any of the controls within the `ControlGroup` are currently focused.

### `reset`

**Type**: `() => void`  
Resets all controls within the `ControlGroup` to their initial state, clearing errors and values.

### `handle`

**Type**: `(formActions: FormActions) => Directive<Element>`  
A method to handle form actions for the `ControlGroup`, such as submitting or resetting the form. It returns a directive that defines how form actions should be handled.

### `valid`

**Type**: `ReadonlyGrain<boolean>`  
Indicates whether all controls within the `ControlGroup` are valid (pass all validation checks). Can be observed for changes using the `subscribe` method.

### `isValid`

**Type**: `boolean`  
Indicates whether all controls within the `ControlGroup` are currently valid (pass all validation checks).

### `validators`

**Type**: `Validator<any[]>[]`  
An array of validators associated with the `ControlGroup` as a whole.

### `addValidator`

**Type**: `(...validator: Validator<any[]>) => void`  
Adds one or more validators to the `ControlGroup`.

### `removeValidator`

**Type**: `(validator: Validator<any[]>) => void`  
Removes a validator from the `ControlGroup`.

### `errors`

**Type**: `ReadonlyGrain<ControlError>`  
An object containing errors associated with the `ControlGroup`. Can be observed for changes using the `subscribe` method.

**Each property in the Control Group schema:**  
Each property of the `Controls` schema is also directly accessible on the `ControlGroup` instance, allowing for easy interaction with individual controls.

<CodeLink name="create-control-group.ts" link="https://github.com/Grainular-Nord/nord-forms/blob/main/src/lib/controls/create-control-group.ts"></CodeLink>
