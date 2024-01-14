---
outline: deep
prev:
    text: 'linkData'
    link: '/packages/router/link-data'
next: false
---

<!-- @format -->

# Advanced Routing Concepts

In `@grainular/nord-router`, advanced routing concepts provide powerful tools for handling complex navigation patterns, optimizing application performance, and enhancing user experience.

## 404 Fallback

A 404 fallback route is essential for handling situations where a user navigates to a route that doesn't exist in your application. In `@grainular/nord-router`, this is configured using the `RouterInit` object passed to `createRouter`.

### Implementing a 404 Fallback

When creating your router, you can specify a `notFound` property in the `RouterInit` object. This property should be the path to your 404 component, which will be displayed when no other routes match.

```ts
const router = createRouter(routes, { notFound: '/404' });
```

In this setup, when a user navigates to an undefined route, they are redirected to the '/404' path, where you can render a custom 404 Not Found page.

## Lazy Loading Routes

Lazy loading routes is a technique to optimize your application by loading components only when they are needed. This is particularly useful for large applications with many routes, as it reduces the initial load time and resource consumption.

### Implementing Lazy Loading

In `@grainular/nord-router`, you can define a route with a component that is loaded lazily using dynamic `import` statements. When the route is accessed, the component is loaded on-demand.

```ts
const routes: Route[] = [
    {
        path: '/some-path',
        component: () => import('./path/to/YourComponent').then((mod) => mod.YourComponent),
    },
    // ... other routes ...
];
```

With this approach, `YourComponent` is only loaded when the user navigates to '/some-path', improving performance for initial page loads.

:::tip
When used in combination with a build tool like **`Vite`**, lazy loading routes can be used to optimize bundle size using **Code-Splitting**.
:::

## Redirects

Redirects are a way to navigate the user from one route to another automatically. This can be useful for handling legacy routes, simplifying navigation, or enforcing certain navigation flows.

### Setting up Redirects

In `@grainular/nord-router`, you can set up redirects by defining routes with a `redirect` property. This property specifies the path to redirect to.

```ts
const routes: Route;
[] = [
    {
        path: '/old-path',
        redirect: '/new-path',
    },
    {
        path: '/new-path',
        component: NewComponent,
    },
    // ... other routes ...
];
```

In this example, any navigation to `/old-path` automatically redirects the user to `/new-path`. This feature is particularly useful for maintaining backward compatibility with older URLs or restructuring the navigation flow without breaking existing links.

## Route Guards

Route Guards in `@grainular/nord-router` provide a versatile mechanism for controlling access to routes, ensuring that certain conditions are met before a route is activated or deactivated. This feature is essential for scenarios like protecting sensitive routes, managing user sessions, or handling unsaved changes on forms. With the combination of `onActivate` and `onDeactivate` guards, you gain fine-grained control over the navigation flow in your Nørd applications.

**`Type`**: `(route: string, redirect: Navigator) => ReturnType<Navigator> | boolean`

### `onActivate`

The `onActivate` guards are invoked when navigating to a route. They determine whether the navigation should proceed based on the logic defined in each guard.

To implement an `onActivate` guard, create a function that returns a boolean value or a promise that resolves to a boolean. If any guard returns false or resolves to false, the navigation is cancelled.

```ts
const authGuard: RouteGuard = (route, redirect) => {
    if (!isLoggedIn()) {
        redirect('/login');
        return false;
    }
    return true;
};
```

### `onDeactivate`

The `onDeactivate` guards are similar to `onActivate` but are used when leaving a route. They are useful for scenarios like confirming navigation away from a form with unsaved changes.

`onDeactivate` guards follow the same pattern as `onActivate` guards. They can prevent navigation away from a route based on specific conditions.

```ts
const unsavedChanges: RouteGuard = (route, redirect) => {
    if (hasUnsavedChanges()) {
        // prompt user if he want to leave or not
        const decision = promptUser();

        // return the boolean indicating if he wants to leave or not
        return decision;
    }
    return true;
};
```

### Using a Guard

Route guards are defined in the `Route` object under the `onActivate` and `onDeactivate` properties.

```ts
const myRoute: Route = {
    path: '/protected',
    component: ProtectedComponent,
    onActivate: [authGuard],
};
```

In this setup, `authGuard` is called when navigating to `/protected`.
