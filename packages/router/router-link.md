---
outline: deep
prev:
    text: 'Activated Route'
    link: '/packages/router/activated-route'
next:
    text: 'linkData'
    link: '/packages/router/link-data'
---

<!-- @format -->

# `RouterLink`

In `@grainular/nord-router`, `RouterLink` is a directive used to create navigable links in your application. It allows you to link to different routes declaratively in your HTML templates, enhancing navigation and improving user experience.

## Understanding `RouterLink`

`RouterLink` is designed to integrate seamlessly with the Nørd-Router's navigation system, providing a simple way to navigate between routes. When used in a template, it turns a standard HTML anchor (`<a>`) element into a router-aware link.

### Creating Router Links

`RouterLink` can be applied to `<a>` tags in your component templates. It automatically handles navigation and updates the browser's URL without a full page reload. `link` is a property of the router, but can easily be destructured to enhance usability.

```ts
const router = createRouter(/** Router definition */);
const { link, activatedRoute } = router;

const App = createComponent((html) => {
    return html`<div>
        <nav>
            <ul>
                <li><a ${link} href="/home">Home</a></li>
                <li><a ${link} href="/overview">Overview</a></li>
            </ul>
        </nav>
        ${router.outlet}
    </div>`;
});
```

In this example, `RouterLink` is used to create two navigable links, 'Home' and 'Overview', each pointing to different routes in the application.

## Active Link Styling

`RouterLink` can be configured to add a specific CSS class to the anchor tag when its route is active. This is useful for highlighting the currently active link in your navigation menu. This is done by adding the `link-active` attribute to the `<a>` tag. The value will be added and removed to the element's class list, whenever the route is selected.

## Dynamic Routing

`RouterLink` uses the `href` attribute of the `<a>` tag to perform the routing. The route can be dynamically changed using granular data, as on every click, the `href` property is parsed from the element.

```ts
const router = createRouter(/** Router definition */);
const { link, activatedRoute } = router;

const App = createComponent((html) => {
    const userId = grain(1);

    return html`<div>
        <nav>
            <a ${link} href="/used/${userId}">Home</a>
        </nav>
        ${router.outlet}
    </div>`;
});
```

## API

### `link`

**Type**: `Directive<Element>`

Description: A directive used to enhance an HTML anchor tag, making it navigate to the specified route in a router-aware manner. It supports dynamic binding to route paths and can be combined with additional attributes for more complex navigation scenarios.
