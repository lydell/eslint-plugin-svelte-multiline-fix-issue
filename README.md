# eslint-plugin-svelte multiline fix issue

1. Clone this repo
2. `npm ci`
3. `npx eslint . --fix`

Result: All `*-singleline.svelte` files are correctly fixed, while all `*-multiline.svelte` files end up with syntax errors.
