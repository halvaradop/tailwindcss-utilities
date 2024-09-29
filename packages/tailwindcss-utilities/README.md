# @halvaradop/tailwindcss-utilities

@halvaradop/tailwindcss-utilities is a Tailwind CSS plugin designed to enhance productivity in application development by providing additional utilities. These utilities optimize the workflow, making it easier and more efficient for users to access and manipulate data.

## Installation

To install the plugin using npm or pnpm, ensure that Tailwind CSS and its configuration are already set up. If not, please refer to the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation) for detailed instructions.

```bash
npm install -D @halvaradop/tailwindcss-utilities
// or
pnpm add --save-dev @halvaradop/tailwindcss-utilities
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

## Utilities

Set of utilites offer by the dependency.

### Selectors

The selectors utility offers a set of selectors that provide improved access to HTML elements. Below is an example of usage:

#### Supported Tags

#### Structural Elements

-   `head`
-   `body`
-   `main`
-   `footer`
-   `section`
-   `article`
-   `label`
-   `nav`
-   `div`

#### Text Content

-   `p`
-   `span`
-   `h1` to `h6`
-   `a`

#### List

-   `ul`
-   `ol`
-   `li`

#### Forms

-   `button`
-   `form`
-   `input`
-   `label`

#### Tables

-   `table`
-   `tr`
-   `td`

#### Media

-   `img`
-   `figure`
-   `picture`
-   `caption`
-   `figcaption`

#### Usage

```html
<section class="li:mb-5">
    <article class="my-5"></article>
    <li></li>
</section>
```

### Font size dynamic

The font size dynamic utility enables modern scale typographic support using the `clamp` function. This function dynamically adjusts the font size based on the viewport of the device, ensuring clear and responsive text in a linear manner.

#### Supported Utilities

-   `fluency-{ xs | sm | base | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl }`

#### Usage

```html
<div>
    <h1 class="fluency-lg"></h1>
    <p class="fluency-sm"></p>
</div>
```

### Scrollbar

The scrollbar utility provides variants for customizing the scrollbar of a component, particularly useful when a component presents overflow. These utilities work with the `::-webkit-` prefix.

### utilities supported

-   `scroll`: for styling the ::-webkit-scrollbar
-   `thumb`: for styling the ::-webkit-scrollbar-thumb
-   `track`: for styling the ::-webkit-scrollbar-track

## Usage

```html
<section class="overflow-y-hidden scroll:w-1 thumb:rounded-full thumb:bg-slate-400 track:my-1">
    <p></p>
</section>
```

## Contributing

Here, you will find a guide on how to contribute to the project and the necessary steps to do so. Please read our [Contributing Guidelines](https://github.com/halvaradop/.github/blob/master/.github/CONTRIBUTING.md).

## Code of Conduct

Please be aware that this project has a code of conduct, and we expect all contributors to follow these guidelines in their interactions. For more information, please read our [Code of Conduct](https://github.com/halvaradop/.github/blob/master/.github/CODE_OF_CONDUCT.md).
