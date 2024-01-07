---
outline: deep
prev:
    text: 'Control Groups'
    link: '/packages/forms/group-controls'
next:
    text: 'Directives'
    link: '/packages/forms/directives'
---

<!-- @format -->

# Control Lists

`Control Lists` in `@grainular/nord-forms` are designed to manage collections of controls, facilitating interactions with them as a cohesive list. This is especially useful for dynamic forms where the number of controls can vary.

## Creating a Control List

`Control Lists` are created using the `createControlList` function. This function returns a `ControlList` object that represents a collection of controls, allowing for dynamic management and interaction.

**Type**: `createControlList<ControlSchema extends ControlGroup<any>>(initial: ControlSchema[] | never[] = [],validators?: Validator<any[]>[]): ControlList<ControlSchema>`

**Parameters**:

-   `ControlSchema`: The schema of controls within the list.
-   `initial`: An optional initial array of control schemas to initialize the list.
-   `[validators]`: An optional array of `Validator<any[]>` to apply to the control list.

## Using a Control List

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

In this example, a control list is created and manipulated, demonstrating how to add controls dynamically.

## Control List API

### `id`

**Type**: `string`  
The unique identifier of the `ControlList`. This ID is typically set during creation.

### `value`

**Type**: `ReadonlyGrain<ControlValues<Controls>[]>`  
A reactive grain representing the values of all controls within the `ControlList`.

### `rawValue`

**Type**: `ControlValues<Controls>[]`  
The current raw values of all controls within the `ControlList`.

### `list`

**Type**: `(run: (item: ControlSchema, index: number) => NodeList) => Directive<Text>`  
A method to define how the items within the ControlList should be rendered.

### `reset`

**Type**: `() => void`  
Resets all controls within the ControlList to their initial state.

### `touched`

**Type**: `ReadonlyGrain<boolean>`  
Indicates whether any of the controls within the ControlList have been touched.

### `isTouched`

**Type**: `boolean`  
Indicates whether any of the controls within the ControlList are currently touched.

### `focused`

**Type**: `ReadonlyGrain<boolean>`  
Indicates whether any of the controls within the ControlList are focused.

### `isFocused`

**Type**: `boolean`  
Indicates whether any of the controls within the ControlList are currently focused.

### `valid`

**Type**: `ReadonlyGrain<boolean>`  
Indicates whether all controls within the ControlList are valid.

### `isValid`

**Type**: `boolean`  
Indicates whether all controls within the ControlList are currently valid.

### `validators`

**Type**: `Validator<any[]>[]`  
An array of validators associated with the ControlList.

### `addValidator`

**Type**: `(...validator: Validator<any[]>[]) => void`  
Adds one or more validators to the ControlList.

### `removeValidator`

**Type**: `(validator: Validator<any[]>) => void`  
Removes a validator from the ControlList.

### `errors`

**Type**: `ReadonlyGrain<ControlError>`  
An object containing errors associated with the ControlList.

### `add`

**Type**: `(...items: ControlSchema[]) => void`  
Adds one or more control items to the ControlList.

### `set`

**Type**: `(index: number, item: ControlSchema) => void`  
Sets a control item at a specific index within the ControlList.

### `remove`

**Type**: `(item: ControlSchema) => void`  
Removes a control item from the ControlList.

### `removeAt`

**Type**: `(index: number) => void`  
Removes a control item at a specific index within the ControlList.

### `at`

**Type**: `(index: number) => ControlSchema | undefined`  
Retrieves a control item at a specific index within the ControlList.

### `entries`

**Type**: `() => ControlSchema[]`  
Retrieves an array of all control items within the ControlList.
