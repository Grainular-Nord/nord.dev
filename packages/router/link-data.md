---
outline: deep
prev:
    text: 'Router Link'
    link: '/packages/router/router-link'
next:
    text: 'Advanced Routing'
    link: '/packages/router/advanced-routing'
---

<!-- @format -->

# `linkData`

`linkData` in `@grainular/nord-router` is a utility `Granular Directive` for managing link parameters in a reactive way. It allows you to attach dynamic query parameters to your router links, making them more versatile and adaptable to application state changes.

**`Type`**: `<T extends Params>(initial: T) => Grain<T> & { data: Directive<Element> }`

## Understanding `linkData`

`linkData` is particularly useful for creating links that include dynamic query parameters. The function returns a `Grain` object, which is reactive and can be updated programmatically.

### Creating `linkData`

Create a reactive params object using the `linkData` function, that will return the `Grain` with the attached `data` directive.

```ts
// app.component.ts
import { createComponent, render } from '@grainular/nord';
import { linkData } from '@grainular/router';
import { router } from './app.router.ts';

export const App = createComponent((html) => {
    const params = linkData({ id: 1 });

    return html`<div>
        <!-- Layout -->
        <nav>
            <a ${router.link} ${params.data} href="/">Home</a>
        </nav>
        <!-- Outlet -->
        ${router.outlet}
    </div>`;
});
```

<CodeLink name="link-data.ts" link="https://github.com/Grainular-Nord/nord-router/blob/main/src/lib/directives/link-data.ts"></CodeLink>
