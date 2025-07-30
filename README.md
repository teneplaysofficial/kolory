<div align="center">

# Kolory

_Paint your projects with vibrant Kolory_

[![npm](https://img.shields.io/npm/v/kolory.svg?style=flat-square)](https://www.npmjs.com/package/kolory)
[![npm downloads](https://img.shields.io/npm/dw/kolory?style=flat-square)](https://www.npmjs.com/package/kolory)
[![release](https://img.shields.io/github/actions/workflow/status/teneplaysofficial/kolory/release.yml?style=flat-square)](https://github.com/teneplaysofficial/kolory/actions/workflows/release.yml)
[![bundlephobia](https://img.shields.io/bundlephobia/minzip/kolory?style=flat-square)](https://github.com/teneplaysofficial/kolory)
[![license](https://img.shields.io/npm/l/kolory?style=flat-square)](./LICENSE)
[![types](https://img.shields.io/npm/types/kolory?style=flat-square)](https://github.com/teneplaysofficial/kolory)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/teneplaysofficial/kolory)
[![eslint](https://img.shields.io/badge/lint-eslint-4B32C3?style=flat-square)](https://github.com/teneplaysofficial/kolory)
[![jsDelivr](https://data.jsdelivr.com/v1/package/npm/kolory/badge?style=square)](https://github.com/teneplaysofficial/kolory)

</div>

**Kolory** is a lightweight and versatile JavaScript library for exploring and manipulating color data in various formats. Whether you're converting between HEX, RGB, HSL, or generating dynamic palettes, Kolory offers a simple and intuitive API to work with color like a pro.

## Features

- Multiple color formats: `hex`, `rgb`, `rgba`, `hsl`, `hsla`
- Ships with prebuilt distributions: ESM, CommonJS, IIFE
- Zero dependencies and tiny footprint
- First-class TypeScript support
- Works in both Node.js and the browser

## Installation

Kolory is available via all major package managers:

```bash
# npm
npm install kolory

# yarn
yarn add kolory

# pnpm
pnpm add kolory

# bun
bun add kolory
```

Or use directly in the browser via CDN:

```html
<!-- UNPKG -->
<script src="https://unpkg.com/kolory/dist/index.iife.js"></script>

<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/kolory/dist/index.iife.js"></script>

<!-- ESM (for modern browsers) -->
<script type="module">
  import kolory from 'https://esm.sh/kolory';
</script>
```

## Usage

### ESM

```ts
import kolory, { hex, rgb, rgba, hsl, hsla } from 'kolory';

console.log(kolory.hex.blue_metal);
console.log(hex.blue_metal);
console.log(rgb.blue_metal);
```

### CommonJS

```ts
const { hex, rgb } = require('kolory');

console.log(hex.sunset_orange);
```

### CDN (IIFE)

```html
<script src="https://unpkg.com/kolory/dist/index.iife.js"></script>
<script>
  console.log(kolory.hex.blue_metal);
</script>
```

## Example Color Entry

```json
{
  "blue_metal": {
    "hex": "#4A90E2",
    "rgb": "74,144,226",
    "rgba": "74,144,226,1",
    "hsl": "210,73%,58%",
    "hsla": "210,73%,58%,1"
  }
}
```

## API Reference

| Export   | Description                        |
| -------- | ---------------------------------- |
| `kolory` | All formats in a structured object |
| `hex`    | Colors in HEX format               |
| `rgb`    | Colors in RGB format               |
| `rgba`   | Colors in RGBA format              |
| `hsl`    | Colors in HSL format               |
| `hsla`   | Colors in HSLA format              |

## Contributing

Want to add a new color or improve Kolory?

- Add your color entry in [kolory.json](./kolory.json).
- Follow the structure defined in [kolory.schema.json](./kolory.schema.json).
- Each color should provide all supported formats: hex, rgb, rgba, hsl, hsla.
- Ensure the format and naming consistency across all entries.
- Run the formatter/linter before submitting a PR.

We welcome your contributions!

## License

Kolory is released under the [Apache License 2.0](./LICENSE).
