# @halvaradop/tailwindcss-utilities

@halvaradop/tailwindcss-utilities is a Tailwind CSS plugin designed to enhance productivity in application development by providing additional utilities. These utilities optimize the workflow, making it easier and more efficient for users to access and manipulate data.

## Installation

To install the plugin via npm, ensure that Tailwind CSS and its configuration are already installed. If not, refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs/installation) for instructions.

```bash
npm install -D @halvaradop/tailwindcss-utilities
```

## Configuration
To configure the plugin, add it to the plugins array in the Tailwind CSS configuration file.

```ts
// ts
import type { Config } from "tailwindcss";
import plugin from "@halvaradop/tailwindcss-utilities"

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
<section class="li:mb-5">
    <article class="my-5"></article>
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
    <h1 class="fluency-lg"></h1>
    <p class="fluency-sm"></p>
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

## Contribute
Thank you for considering contributing to our project! Contributions are welcome and help us to continuously improve.

If you're interested in contributing to the project and you find an error or problem, please open an issue in the repository, ensuring to explain with details about the problem. If you have an idea for a new feature or an enhancement, we would like to know about it. Similarly, you can open an issue with the details. And finally, if you want to contribute with code, create a pull request with the details of the changes.

Make sure to follow the following guidelines to create your branch:

- `chore`: daily changes
- `feat`: introduces a new feature to the codebase
- `fix`: used to fix an error in the code
- `refactor`: enhancements in the code or
- `docs`: changes in the documentation

### Conduct code
Please be aware that this project has a code of conduct, and we expect all contributors to follow these guidelines with their interactions.