export const installation = `
npm install -D @halvaradop/tailwindcss-utilities
# or
pnpm add -D @halvaradop/tailwindcss-utilities                  
`

export const setupPlugins = `
import type { Config } from "tailwindcss"
import utilities from "@halvaradop/tailwindcss-utilities"
import animations from "@halvaradop/tailwindcss-animations"

const config: Config = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {},
    plugins: [
        utilities,
        animations,
    ],
}

export default config
`

export const features = `
<section class="scroll:w-2 track:my-2 thumb:rounded thumb:bg-black">
  <h2 class="fluency-2xl">Subtitle</h2>
  <ul class="li:text-slate-500">
    <li>...</li>
    <li>...</li>
  </ul>
  <div class="size-20 rounded fade-in-up" />
</section>
`

export const pseudoClassesUtility = `
has-[]:
is-[]:
not-[]:
`

export const selectorsUtilities = `
<section class="div:w-3/4">
  <div>...</div>
  <article>
    <p>...</p>
  </article>
</section>
`

export const scrollUtilities = `
scroll:
thumb:
track:
`
