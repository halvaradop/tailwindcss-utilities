# @halvaradop/tailwindcss-utilities

@halvaradop/tailwindcss-utilities is a Tailwind CSS plugin designed to enhance productivity in application development by providing additional utilities. These utilities optimize the workflow, making it easier and more efficient for users to access and manipulate data.

## Installation

To install the plugin using npm or pnpm, ensure that Tailwind CSS and its configuration are already set up. If not, please refer to the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation) for detailed instructions.

```bash
npm install -D @halvaradop/tailwindcss-utilities
# or
pnpm add --save-dev @halvaradop/tailwindcss-utilities
```

## Configuration

To configure the plugin, add it to the plugins array in the Tailwind CSS configuration file.

```ts
// TypeScript
import type { Config } from "tailwindcss"
import utilities from "@halvaradop/tailwindcss-utilities"

const config: Config = {
  content: [],
  theme: {},
  plugins: [utilities],
}

export default config
```

```js
// JavaScript
import utilities from "@halvaradop/tailwindcss-utilities"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {},
  plugins: [utilities],
}
```

## Utilities

### TypeScript

This package is created using TypeScript, so you can use custom types provided by the plugin to enable autocomplete and improve the experience of setting values in the different utilities provided. You don't need to import the `Config` type from `tailwindcss` as our type overrides it with new parameters. We recommend using our package's type instead of the one from `tailwindcss`.

```ts
import { Config } from "@halvaradop/tailwindcss-utilities"

const config: Config = {
  ...
}
```

### Selectors

The selectors utility offers a set of selectors that provide improved access to HTML elements. Below is an example of usage:

#### Supported Tags

Here are some of the supported tags by the plugin. For a complete list, please refer to the [selectors documentation](https://github.com/halvaradop/tailwindcss-utilities/blob/master/packages/tailwindcss-utilities/src/utilities/selector-utility.ts).

- `head`
- `body`
- `main`
- `footer`
- `section`
- `article`
- `label`
- `nav`
- `div`
- `p`
- `span`
- `h1` to `h6`
- `a`

### Override and Add New Values

You can add new HTML tags by declaring a list of new tags using the `selectors` field within the `theme` property in the Tailwind CSS configuration file. If you import the `Config` type from our package, you will have autocomplete for the HTML tags.

```ts
import { Config } from "@halvaradop/tailwindcss-utilities"

const config: Config = {
  content: ["app"],
  theme: {
    selectors: ["ul", "li"],
  },
}
```

#### Usage

```html
<section class="li:mb-5">
  <article class="my-5"></article>
  <li></li>
</section>
```

### Font Size Dynamic

The font size dynamic utility enables modern scale typographic support using the `clamp` function. This function dynamically adjusts the font size based on the viewport of the device, ensuring clear and responsive text in a linear manner.

#### Supported Utilities

- `fluency-{ xs | sm | base | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl }`

### Override and Add New Values

You can override and add new utility classes through the `fluency` field within the `theme` property in the Tailwind CSS configuration file. If you import the `Config` type from our package, you will have autocomplete for the possible values when declaring new fluency texts.

```ts
import { Config } from "@halvaradop/tailwindcss-utilities"

const config: Config = {
  content: ["app"],
  theme: {
    fluency: {
      xl: {
        fontSize: "2rem",
        lineHeight: "0.2rem",
        letterSpacing: "0.012rem",
      },
    },
  },
}
```

#### Usage

```html
<div>
  <h1 class="fluency-lg"></h1>
  <p class="fluency-sm"></p>
</div>
```

### Scrollbar

> [!WARNING]
> These utility classes aren't supported by all browsers. They use the `::-webkit` prefix but are supported by the majority of modern browsers.

The scrollbar utility provides variants for customizing the scrollbar of a component, particularly useful when a component has overflow. These utilities work with the `::-webkit` prefix.

#### Supported Utilities

- `scroll`: for styling the `::-webkit-scrollbar`
- `thumb`: for styling the `::-webkit-scrollbar-thumb`
- `track`: for styling the `::-webkit-scrollbar-track`

#### Usage

```html
<section class="overflow-y-hidden scroll:w-1 thumb:rounded-full thumb:bg-slate-400 track:my-1">
  <p></p>
</section>
```

## Contributing

We welcome contributions to `@halvaradop/tailwindcss` ecosystem! If you have an idea for a new type or find an improvement to an existing one, please feel free to open an issue or create a pull request. We offer a guide on how to contribute to the project and the necessary steps to do so. Here's how you can contribute, Read our [Contributing Guidelines](https://github.com/halvaradop/.github/blob/master/.github/CONTRIBUTING.md).

## Code of Conduct

Please be aware that this project has a code of conduct, and we expect all contributors to follow these guidelines in their interactions. For more information, please read our [Code of Conduct](https://github.com/halvaradop/.github/blob/master/.github/CODE_OF_CONDUCT.md).
