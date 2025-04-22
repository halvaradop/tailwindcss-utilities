# @halvaradop/tailwindcss-utilities

A utility package for TailwindCSS that provides predefined utilities designed to enhance productivity in application development. These utilities streamline workflows, making it easier and more efficient for developers to access and manipulate data.

## Installation

Ensure you have `TailwindCSS@v4` installed and configured. If not, refer to the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation). Once ready, install the package:

```bash
npm install -D @halvaradop/tailwindcss-utilities
# or
pnpm add -D @halvaradop/tailwindcss-utilities
```

## Configuration

To enable the utility classes, integrate the package into your Tailwind CSS setup. Follow these steps:

1. Ensure Tailwind CSS is imported in your global `.css` file using the `@import` directive.
2. Include the utilities CSS file provided by the package.

Example configuration:

```css
@import "tailwindcss";
@import "../node_modules/@halvaradop/tailwindcss-utilities/dist/plugin.css";
```

This setup ensures that the utility classes are available throughout your project.

## Usage

This package provides utility classes for enhanced access to HTML elements, fluid typography, minimum widths, and custom scrollbars.

### Selectors

The selectors utility offers a set of predefined selectors for improved access to HTML elements. Below is an example of usage:

Supported tags include, but are not limited to:

- `header`
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

> **Note:** Currently, it is not possible to extend or add new selectors using CSS variables. This feature is planned for future releases.

#### Example Usage

The `w-full` class is applied only to `li` elements within the `section` element:

```html
<section class="li:w-full">
  <article></article>
  <li></li>
</section>
```

### Fluid Typography

The fluid typography utility enables modern, responsive typography using the `clamp` function. This ensures text scales dynamically based on the viewport size.

#### Supported Utilities

- `text-fluid-{ xs | sm | base | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl }`

### Customizing Values

You can override or add new utility classes using CSS variables prefixed with `--text-fluid-`. Additionally, you can define `line-height` and `letter-spacing` for new or existing utilities.

```css
@theme {
  /* Override the `font-size` */
  --text-fluid-3xl: clamp(2.25rem, 6vw, 3rem);
  /* Override the `line-height` */
  --text-fluid-3xl--line-height: 2.6rem;
  /* Override the `letter-spacing` */
  --text-fluid-3xl--letter-spacing: -0.03em;

  /* Add a new utility */
  --text-fluid-8xl: clamp(5.15rem, 10vw, 5.1rem);
}
```

#### Example Usage

```html
<div>
  <h1 class="text-fluid-lg"></h1>
  <p class="text-fluid-sm"></p>
</div>
```

### Scrollbar Customization

> **Warning:** These utility classes rely on the `::-webkit` prefix and may not be supported by all browsers. They are compatible with most modern browsers.

The scrollbar utility provides variants for customizing scrollbars, particularly useful for components with overflow.

#### Supported Utilities

- `scroll`: Styles the `::-webkit-scrollbar`
- `thumb`: Styles the `::-webkit-scrollbar-thumb`
- `track`: Styles the `::-webkit-scrollbar-track`

#### Example Usage

```html
<section class="overflow-y-hidden scroll:w-1 thumb:rounded-full thumb:bg-slate-400 track:my-1">
  <p></p>
</section>
```

## Breaking Changes

The latest version of the package introduces the following changes:

- The plugin is no longer exported. Instead, a CSS file containing utility classes is provided for direct use in your project.
- The `fluency` utility classes have been renamed to `text-fluid-` for better clarity and alignment with TailwindCSS v4.

## Contributing

We welcome contributions to `@halvaradop/tailwindcss` ecosystem! If you have an idea for a new type or find an improvement to an existing one, please feel free to open an issue or create a pull request. We offer a guide on how to contribute to the project and the necessary steps to do so. Here's how you can contribute, Read our [Contributing Guidelines](https://github.com/halvaradop/.github/blob/master/.github/CONTRIBUTING.md).

## Code of Conduct

Please be aware that this project has a code of conduct, and we expect all contributors to follow these guidelines in their interactions. For more information, please read our [Code of Conduct](https://github.com/halvaradop/.github/blob/master/.github/CODE_OF_CONDUCT.md).
