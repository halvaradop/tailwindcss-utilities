# @halvaradop/tailwindcss-animations

A utility package for TailwindCSS that provides predefined animation classes and keyframes, enabling you to easily animate your application with minimal effort.

## Installation

Ensure you have `TailwindCSS@v4` installed and configured. If not, refer to the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation). Once ready, install the package:

```bash
npm install -D @halvaradop/tailwindcss-animations
# or
pnpm add -D @halvaradop/tailwindcss-animations
```

## Configuration

To enable the utility classes, integrate the package into your Tailwind CSS setup. Follow these steps:

1. Ensure Tailwind CSS is imported in your global `.css` file using the `@import` directive.
2. Include the utilities CSS file provided by the package.

Example configuration:

```css
@import "tailwindcss";
@import "../node_modules/@halvaradop/tailwindcss-animations/dist/plugin.css";
```

This setup ensures that the animation utilities are available throughout your project.

## Usage

This package provides utility classes for animations with the following prefixes:

- `animate-{animation-name}`
- `animation-count-{count}`
- `animation-fill-mode-{mode}`
- `animation-range-{range}`
- `animation-timeline-{timeline}`
- `ease-{timing-function-name}`

### Example

```html
<div>
  <span class="size-10 block rounded hover:animate-pulse"></span>
</div>
```

### Adding Custom Values

To define custom animation values, use the `@theme` directive in your `.css` file. Add CSS variables following the required prefixes. For example:

```css
@theme {
  --animation-count-5: 5;
  --animation-range-xs: normal 25%;
  --animation-timeline-axis: scroll(scroller axis);
  --animation-fill-mode-revert: revert;
  --ease-circ: cubic-bezier(0.075, 0.82, 0.165, 1);
  --animate-pulse: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

With these configurations, you can extend and customize animations to suit your application's needs.

## Breaking Changes

The latest version of the package introduces the following changes:

- The plugin is no longer exported. Instead, a CSS file containing utility classes is provided for direct use in your project.

## Contributing

We welcome contributions to `@halvaradop/tailwindcss` ecosystem! If you have an idea for a new type or find an improvement to an existing one, please feel free to open an issue or create a pull request. We offer a guide on how to contribute to the project and the necessary steps to do so. Here's how you can contribute, Read our [Contributing Guidelines](https://github.com/halvaradop/.github/blob/master/.github/CONTRIBUTING.md).

## Code of Conduct

Please be aware that this project has a code of conduct, and we expect all contributors to follow these guidelines in their interactions. For more information, please read our [Code of Conduct](https://github.com/halvaradop/.github/blob/master/.github/CODE_OF_CONDUCT.md).
