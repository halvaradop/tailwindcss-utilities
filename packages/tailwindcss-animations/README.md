# @halvaradop/tailwindcss-animations

A Tailwind CSS plugin that provides a series of utility classes to add animations to your application.

## Installation

To install the plugin using npm or pnpm, ensure that Tailwind CSS and its configuration are already set up. If not, please refer to the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation) for detailed instructions.

```bash
npm install -D @halvaradop/tailwindcss-utilities
// or
pnpm add -D @halvaradop/tailwindcss-utilities
```

## Configuration

To configure the plugin, add it to the plugins array in the Tailwind CSS configuration file.

```ts
// TypeScript
import type { Config } from "tailwindcss"
import plugin from "@halvaradop/tailwindcss-utilities"

const config: Config = {
  content: [],
  theme: {},
  plugins: [plugin],
}

export default config
```

```js
// JavaScript
import plugin from "@halvaradop/tailwindcss-utilities"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {},
  plugins: [plugin],
}
```

## Contributing

Here, you will find a guide on how to contribute to the project and the necessary steps to do so. Please read our [Contributing Guidelines](https://github.com/halvaradop/.github/blob/master/.github/CONTRIBUTING.md).

## Code of Conduct

Please be aware that this project has a code of conduct, and we expect all contributors to follow these guidelines in their interactions. For more information, please read our [Code of Conduct](https://github.com/halvaradop/.github/blob/master/.github/CODE_OF_CONDUCT.md).
