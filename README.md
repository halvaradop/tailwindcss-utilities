# @halvaradop/tailwindcss-flow

@halvaradop/tailwindcss-flow is a Tailwind CSS plugin designed to enhance productivity in application development by providing additional utilities. These utilities optimize the workflow, making it easier and more efficient for users to access and manipulate data.

## Installation

To install the plugin via npm, ensure that Tailwind CSS and its configuration are already installed. If not, refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs/installation) for instructions.

```bash
npm install -D @halvaradop/tailwindcss-flow
```

## Configuration
To configure the plugin, add it to the plugins array in the Tailwind CSS configuration file.

```ts
// ts
import type { Config } from "tailwindcss";
import plugin from "@halvaradop/tailwindcss-flow"

const config: Config = {
  content: [],
  theme: {},
  plugins: [plugin],
};

export default config;
```

## Utilities
Set of utilites offer by the dependency.


### Selectors
The selectors utility offers a set of selectors that provide improved access to HTML elements. Below is an example of usage:


#### Supported Tags
- `li`
- `div`
- `span`
- `a`
- `p`
- `img`
- `h1` to `h6`
- `ul`
- `ol`
- `li`
- `table`
- `tr`
- `td`
- `form`
- `input`
- `button`
- `section`
- `main`
- `body`
- `article`
- `label`
- `img`
- `figure`
- `picture`
- `caption`
- `footer`


#### Usage
```html
<section class=`li:mb-5`>
    <article class=`my-5`></article>
    <li></li>
</section>
```

### Font size dynamic
The font size dynamic utility enables modern scale typographic support using the `clamp` function. This function dynamically adjusts the font size based on the viewport of the device, ensuring clear and responsive text in a linear manner.


#### Supported Utilities
- `fluency-{ xs | sm | base | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl }`


#### Usage
```html
<div>
    <h1 class=`fluency-lg`></h1>
    <p class=`fluency-sm`></p>
</div>
```

### Scrollbar
The scrollbar utility provides variants for customizing the scrollbar of a component, particularly useful when a component presents overflow. These utilities work with the `::-webkit-` prefix.


### utilities supported
- `scroll`: for styling the ::-webkit-scrollbar
- `thumb`: for styling the ::-webkit-scrollbar-thumb
- `track`: for styling the ::-webkit-scrollbar-track

### Usage
```html
<section class="overflow-y-hidden scroll:w-1 thumb:rounded-full thumb:bg-slate-400 track:my-1">
    <p></p>
</section>
```