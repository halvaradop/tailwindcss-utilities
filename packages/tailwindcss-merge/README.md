# @halvaradop/tailwindcss-merge

> [!WARNING]
> This package is currently unstable. We recommend waiting for a more stable release before using it in production.

This package provides utilities for merging TailwindCSS classes, ensuring that the resulting classes are optimized and conflict-free. It includes functions for parsing and merging CSS classes, making it easier to manage TailwindCSS classes in your projects.

## Installation

To install the package using npm or pnpm, run one of the following commands:

```bash
npm install -D @halvaradop/tailwindcss-merge
# or
pnpm add -D @halvaradop/tailwindcss-merge
```

## Usage

The `merge` function allows you to combine multiple TailwindCSS classes, keeping the last class that defines a property. This ensures that the resulting classes are optimized and conflict-free.

```ts
import { merge } from "@halvaradop/tailwindcss-merge"

// Expected: "bg-blue-700"
const mergedClasses = merge("red-500 blue-500 bg-green-500", "bg-blue-700")
```

## Contributing

For guidelines on how to contribute to the project, please read our [Contributing Guidelines](https://github.com/halvaradop/.github/blob/master/.github/CONTRIBUTING.md).

## Code of Conduct

Please be aware that this project has a code of conduct, and we expect all contributors to follow these guidelines in their interactions. For more information, please read our [Code of Conduct](https://github.com/halvaradop/.github/blob/master/.github/CODE_OF_CONDUCT.md).
