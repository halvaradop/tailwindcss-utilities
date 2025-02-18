# @halvaradop/tailwindcss-core

This is the core package of the `@halvaradop/tailwindcss` ecosystem, containing essential plugins and utilities for TailwindCSS. It includes core configurations and files that can be shared across projects, ensuring consistency and reusability.

> [!NOTE]
> This package is not published on npm as it is intended solely for internal use within the `@halvaradop/tailwindcss` ecosystem. It provides shared configurations and utilities necessary for building and maintaining the internal packages.

## Installation

To install the package using either npm or pnpm, execute one of the following commands:

```bash
npm install -D @halvaradop/tailwindcss-core
# or
pnpm add -D @halvaradop/tailwindcss-core
```

## Usage

### Merge Function

The `merge` function allows you to combine two objects, merging their properties and ensuring that the resulting object contains all unique keys from both input objects.

```ts
import { merge } from "@halvaradop/tailwindcss-core"

const obj1 = {
  foo: "foobar",
  bar: {
    foobar: {
      barfoo: 2,
    },
  },
}

const obj2 = {
  barfoo: false,
}

/**
 * Expected result:
 * {
 *   foo: "foobar",
 *   bar: {
 *     foobar: {
 *       barfoo: 2
 *     }
 *   },
 *   barfoo: false
 * }
 */
const deepMerge = merge(obj1, obj2)
```

### ExtractClasses Function

The `extractClasses` function retrieves the classes within the provided HTML, returning a list of the values by the classes. This function is useful for testing the generated classes by the plugins in the `@halvaradop/tailwindcss` ecosystem.

```ts
import { describe, test, expect } from "vitest"
import { extractClasses } from "@halvaradop/tailwindcss-core"
import plugin from "path-to-your-plugin"

const generateClasses = extractClasses(plugin)

describe("scroll utilities", () => {
  test.concurrent("generate the CSS for scroll utilities", async ({ expect }) => {
    const html = `<div class="scroll:w-2"></div>`
    const css = await generateClasses(html)
    expect(css).toContain(".scroll\\:w-2::-webkit-scrollbar{width:0.5rem}")
  })
})
```

### Tsup Configuration

The `tsupConfig` object contains the basic configuration for building a package using the `tsup` dependency. It is exported from the index entry point or the `/tsup.config.base` dedicated export. The following code shows how components use this configuration in their `tsup.config.ts` file:

```ts
import { tsupConfig } from "@halvaradop/tailwindcss-core/tsup.config.base"
import { defineConfig } from "tsup"

export default defineConfig(tsupConfig)
```

## Contributing

We welcome contributions to `@halvaradop/tailwindcss` ecosystem! If you have an idea for a new type or find an improvement to an existing one, please feel free to open an issue or create a pull request. We offer a guide on how to contribute to the project and the necessary steps to do so. Here's how you can contribute, Read our [Contributing Guidelines](https://github.com/halvaradop/.github/blob/master/.github/CONTRIBUTING.md).

## Code of Conduct

Please be aware that this project has a code of conduct, and we expect all contributors to follow these guidelines in their interactions. For more information, please read our [Code of Conduct](https://github.com/halvaradop/.github/blob/master/.github/CODE_OF_CONDUCT.md).
