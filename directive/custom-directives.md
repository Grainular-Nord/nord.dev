---
outline: deep
next: false
prev:
    text: 'json'
    link: '/directive/json'
---

<!-- @format -->

# Custom Directives

Custom directives are a powerful tool in any Nørd application. They can be used to abstract recurring logic into reusable directives, making your code more modular and maintainable.

## Creating a custom directive

To create a custom directive, you can use the createDirective function exposed by Nørd. This function allows you to define a directive that can be applied to DOM elements in your component's template.

Here's an example of creating a custom directive that sets the background color of an element to Nørd's primary color:

```ts
// background.directive.ts
import { createDirective } from '@grainular/nord';

// Create a directive to set any elements background color to Nørd's primary color.
export const background = createDirective((element: Element) => {
    element.style.background = `rgba(90, 176, 166, 0.85)`;
});
```

You can then use the created `background` directive in your component's template like this:

```ts
// component.ts
import { background } from './background.directive';
import { createComponent } from '@grainular/nord';

const component = createElement((html) => html`<div ${background}>I will be recoloured</div>`);
```

This example demonstrates how to create a custom directive that sets a specific background color. However, custom directives can be much more versatile and complex, allowing you to encapsulate various behaviors and interactions.

## Creating a Directive Factory

In some cases, you may want to create a directive factory, which is a function that returns a dynamically configured directive. Directive factories are a powerful pattern that enables you to customize the behaviour of a directive based on specific parameters.

Let's modify the `background` directive to be a directive factory so that we can dynamically choose which color to apply:

```ts
// background.directive.ts
import { createDirective } from '@grainular/nord';

// Create a function that returns a directive to set any elements background color to a provided colour
export const background = (color: string) =>
    createDirective((element: Element) => {
        element.style.background = color;
    });
```

Now, you can use this directive factory to set different background colors for different elements in your component's template:

```ts
// component.ts
import { background } from './background.directive';
import { createComponent } from '@grainular/nord';

const component = createElement(
    (html) =>
        html`<div ${background('red')}>I will be red</div>
            <div ${background('blue')}>I will be blue</div>`
);
```

With directive factories, you have the flexibility to create highly configurable and reusable directives tailored to your specific application needs.
