---
outline: deep
prev:
    text: 'Router'
    link: '/packages/router/router'
next:
    text: 'Router Link'
    link: '/packages/router/router-link'
---

<!-- @format -->

# `ActivatedRoute`

`ActivatedRoute` in `@grainular/nord-router` is an essential part of the routing system. It represents the state of the currently active route in the application, providing access to route parameters, query parameters, and the current URL path.

## Understanding `ActivatedRoute`

`ActivatedRoute` is automatically updated by the Router whenever the route changes. It contains details about the current route, such as the path, dynamic route parameters, and query parameters. This allows components to reactively respond to changes in the route.

### Properties

-   **`path`**: A `string` representing the current route path.
-   **`current`**: A `ReadonlyGrain<string>` that holds the current URL as a string. It updates reactively to route changes.
-   **`params`**: A `ReadonlyGrain<Params>` containing the route parameters. This is useful for accessing dynamic segments of the URL.
-   **`searchParams`**: A `ReadonlyGrain<Params>` containing the search parameters (query string) of the URL.

## Using `ActivatedRoute`

You can access `ActivatedRoute` properties to dynamically update your component based on the current route. This is particularly useful for fetching data based on route parameters or updating the UI in response to route changes.

```ts
import { router } from './routes';

// Accessing route parameters and query string parameters reactively
createComponent((html) => {
    const userId = router.activatedRoute.params().userId; // Access route parameter
    const searchQuery = router.activatedRoute.searchParams().q; // Access query parameter

    // Component logic and template here...
    return html`<div>
        <h1>User ID: ${userId}</h1>
        <p>Search Query: ${searchQuery}</p>
    </div>`;
});
```

In this example, we access the `userId` parameter and `q` query parameter from the `ActivatedRoute`. These values can be used to fetch data, display information, or trigger other actions in response to route changes.

## Reacting to Route Changes

The `ActivatedRoute` is reactive, meaning you can subscribe to its properties to respond to route changes:

```ts
router.activatedRoute.params.subscribe((params) => {
    console.log('Route parameters changed:', params);
});

router.activatedRoute.searchParams.subscribe((searchParams) => {
    console.log('Query parameters changed:', searchParams);
});
```

This feature allows for dynamic and responsive behavior in components that need to react to navigation within the application.

## API

### `path`

**Type**: `string`

Description: The path of the current route. It's a reactive property that updates as the route changes.

### `current`

**Type**: `ReadonlyGrain<string>`

Description: A reactive property that contains the current URL string. Useful for tracking the entire URL path.

### `params`

**Type**: `ReadonlyGrain<Params>`

Description: A reactive data structure containing the dynamic segments of the route's URL, useful for accessing route-specific data like user IDs or product slugs.

### `searchParams`

**Type**: `ReadonlyGrain<Params>`

Description: A reactive data structure that holds the search parameters (query string) of the URL, allowing for easy access and reactivity to query string changes.
