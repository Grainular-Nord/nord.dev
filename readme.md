<!-- @format -->

<p align="center">
  <img src="https://nordjs.dev/nord-logo.png" alt="Nørd Logo" width="200" height="200">
</p>

# nordjs.dev

Welcome to `nordjs.dev`, the official documentation site for the Nørd Framework. This platform provides comprehensive guides, API references, and resources to help you effectively use and understand the Nørd Framework for building reactive web applications.

`nordjs.dev` is powered by VitePress, a Vue-powered static site generator. This offers an optimized browsing experience, fast load times, and a modern development workflow.

## CLI

-   `preci`: `rm -rf node_modules`
    Removes the node_modules directory, clearing all installed dependencies. Useful for a fresh install or dependency issues.
-   `ci`: `yarn install --frozen-lockfile`
    Installs dependencies while ensuring the lockfile is not updated. Ideal for continuous integration environments to maintain consistent dependency versions.
-   `setup`: `npx husky install`
    Sets up Husky, a tool for managing Git hooks, ensuring code standards and quality checks are enforced before commits and pushes.
-   `dev`: `vitepress dev`
    Starts the VitePress development server, allowing for real-time preview and development of the documentation site.
-   `build`: `vitepress build`
    Builds the static files for the documentation site, outputting optimized files ready for deployment.
-   `preview`: `vitepress preview`
    Serves the built static site locally for previewing the final product before deployment.
-   `lint`: `alex .`
    Runs the Alex linter to catch insensitive, inconsiderate writing in the documentation.

## Contributing

We welcome contributions to `nordjs.dev`! If you're interested in contributing, please check out our [contribution guidelines](./contributing.md).

## License

`nordjs.dev` is made available under the MIT License. For more details, see the [license](./license.md) file.
