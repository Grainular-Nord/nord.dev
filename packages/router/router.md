---
outline: deep
prev:
    text: 'Overview'
    link: '/packages/router/overview'
next:
    text: 'Activated Route'
    link: '/packages/router/activated-route'
---

<!-- @format -->

# Router

In `@grainular/nord-router`, the Router is a fundamental component for handling client-side navigation in web applications. It enables defining, managing, and reacting to URL changes, ensuring the correct content is displayed to the user.

## Creating a Router

The Router is created using the `createRouter` function. This function generates a Router instance responsible for handling route matching, navigation, and rendering the appropriate components based on the current URL.

**Type**: `createRouter(routes: Route[], init?: RouterInit): Router`

Parameters

-   `routes`: An array of `Route` objects. Each route object specifies a path, a component, and optionally, nested routes and route guards.
-   `init`: An optional `RouterInit` object providing initialization settings, such as a not found route handler.

## Using the Router

```ts
import { createRouter, Route } from '@grainular/nord-router';
import { Home, About } from './pages';

const routes: Route[] = [
    { path: '/home', component: Home },
    { path: '/about', component: About },
    // ... more routes ...
];

const router = createRouter(routes);
```

In this example, a router is created with basic routes. Each route is mapped to a component, which will be rendered when the route is matched.

## Routes

Routes in `@grainular/nord-router` are objects that define the relationship between a URL path and the content displayed. They are the core of routing functionality.

### Creating a Route

A route is a simple object with the following properties:

-   `path`: A string defining the URL path.
-   `component`: A component to be rendered when the route is matched.
-   `children`: An optional array of nested Route objects for hierarchical routing.
-   `redirect`: An optional path to redirect to.
-   `onActivate` and `onDeactivate`: Optional arrays of RouteGuard functions for controlling route activation and deactivation.

```ts
const myRoute: Route = {
    path: '/user/:userId',
    onActivate: [userGuard],
    children: [
        {
            path: '/settings',
            component: UserSettings,
        },
    ],
};
```

This route handles a dynamic segment (:userId), includes a route guard, and defines a nested route for user settings.

## Nested Routes

Nested routes allow for the creation of a hierarchy in your application's route structure. This is useful for scenarios where a parent component wraps other views.

### Defining Nested Routes

Nested routes are defined within the `children` property of a `Route` object.

```ts
const parentRoute: Route = {
    path: '/dashboard',
    children: [
        { path: '/overview', component: DashboardOverview },
        { path: '/reports', component: DashboardReports },
    ],
};
```

In this setup, the `dashboard` route acts as a container for the `DashboardOverview` and `DashboardReports` components.

## Parameters

Parameterized routes allow for dynamic path segments, making routes more flexible and capable of handling variable inputs.

### Using Parameterized Routes

A dynamic segment in a route is specified with a colon `(:)` followed by the segment name.

```ts
const userRoute: Route = {
    path: '/user/:userId',
    component: UserPage,
};
```

In this example, :userId is a dynamic segment that can match any value, making the route adaptable to different user IDs.

## API

The Router in `@grainular/nord-router` provides a comprehensive API for managing navigation and rendering in web applications. Below is a detailed overview of its key properties and methods.

### `navigate`

**Type**: `(route: Path, state?: NavigatorState) => Promise<void>`

Initiates navigation to a specified route. This method is used to programmatically change the current route.

Parameters:

`route`: A `Path` array representing the target route.
`state`: An optional `NavigatorState` object for providing initial state to the route.

### `outlet`

**Type**: `Directive<Text>`

A directive representing the location in the DOM where the routed component will be rendered. This is typically used in the application's main template.

### `activatedRoute`

**Type**: `ActivatedRoute`

Provides information about the currently activated route, including path, parameters, and query parameters.

Properties:

**`path`**: Current route path.
**`params`**: Reactive data structure containing route parameters.
**`searchParams`**: Reactive data structure containing query string parameters.

::: tip
Read more about the `activatedRoute` in it's own [section](./activated-route.md)
:::

### `link`

**Type**: `RouterLink`

A utility for creating router links, used to generate URLs based on the route configuration.

::: tip
Read more about the `Router Link` in it's own [section](./router-link.md)
:::

<CodeLink name="create-router.ts" link="https://github.com/Grainular-Nord/nord-router/blob/main/src/lib/router/create-router.ts"></CodeLink>
