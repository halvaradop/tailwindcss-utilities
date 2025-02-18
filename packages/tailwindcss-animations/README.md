# @halvaradop/tailwindcss-animations

A Tailwind CSS plugin that provides a series of utility classes to add animations to your application.

## Installation

To install the plugin using npm or pnpm, ensure that Tailwind CSS and its configuration are already set up. If not, please refer to the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation) for detailed instructions.

```bash
npm install -D @halvaradop/tailwindcss-animations
// or
pnpm add -D @halvaradop/tailwindcss-animations
```

## Configuration

To configure the plugin, add it to the plugins array in the Tailwind CSS configuration file.

```ts
// TypeScript
import type { Config } from "tailwindcss"
import animations from "@halvaradop/tailwindcss-animations"

const config: Config = {
  content: ["./index.html"],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {},
  plugins: [animations],
}

export default config
```

```js
// JavaScript
import animations from "@halvaradop/tailwindcss-animations"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {},
  plugins: [animations],
}
```

## Usage

This package provides a set of utility classes to work with animations. These classes use the following prefixes:

- `animate-{animation-name}`
- `animation-delay-{milliseconds}`
- `animation-duration-{milliseconds}`
- `animation-steps-{steps}`
- `animation-iteration-count-{count}`
- `animation-fill-mode-{mode}`
- `animation-range-{range}`

Example usage:

```html
<div>
  <span class="size-10 block rounded hover:animate-slide-in-top"></span>
</div>
```

## Contributing

We welcome contributions to `@halvaradop/tailwindcss` ecosystem! If you have an idea for a new type or find an improvement to an existing one, please feel free to open an issue or create a pull request. We offer a guide on how to contribute to the project and the necessary steps to do so. Here's how you can contribute, Read our [Contributing Guidelines](https://github.com/halvaradop/.github/blob/master/.github/CONTRIBUTING.md).

## Code of Conduct

Please be aware that this project has a code of conduct, and we expect all contributors to follow these guidelines in their interactions. For more information, please read our [Code of Conduct](https://github.com/halvaradop/.github/blob/master/.github/CODE_OF_CONDUCT.md).
