# @halvaradop/tailwindcss-core

This is the core package of the `@halvaradop/tailwindcss` ecosystem, containing essential plugins and utilities for TailwindCSS. It includes core configurations and files that can be shared across projects, ensuring consistency and reusability.

> [!WARNING]
> This package is not published on npm as it is intended solely for internal use within the `@halvaradop/tailwindcss` ecosystem in the `0.x.y` old versions. It provides shared configurations for internal packages. With the introduction of TailwindCSS v4, the way to create and define variants has changed, and the plugin API has been removed. As a result, this package may be deprecated in the future.

## Installation

To install the package using either npm or pnpm, execute one of the following commands:

```bash
npm install -D @halvaradop/tailwindcss-core
# or
pnpm add -D @halvaradop/tailwindcss-core
```

## Usage

### Tsup Configuration

The `tsupConfig` object provides the base configuration for building a package using the `tsup` dependency. It is exported from the index entry point or the `/tsup.config.base` dedicated export. Below is an example of how to use this configuration in a `tsup.config.ts` file:

```ts
import { tsupConfig } from "@halvaradop/tailwindcss-core/tsup.config.base"
import { defineConfig } from "tsup"

export default defineConfig(tsupConfig)
```

## Breaking Changes

The latest version of the package introduces the following breaking changes:

- The `merge` function is no longer exported.
- The `extractClasses` function is no longer exported.

## Contributing

We welcome contributions to `@halvaradop/tailwindcss` ecosystem! If you have an idea for a new type or find an improvement to an existing one, please feel free to open an issue or create a pull request. We offer a guide on how to contribute to the project and the necessary steps to do so. Here's how you can contribute, Read our [Contributing Guidelines](https://github.com/halvaradop/.github/blob/master/.github/CONTRIBUTING.md).

## Code of Conduct

Please be aware that this project has a code of conduct, and we expect all contributors to follow these guidelines in their interactions. For more information, please read our [Code of Conduct](https://github.com/halvaradop/.github/blob/master/.github/CODE_OF_CONDUCT.md).
