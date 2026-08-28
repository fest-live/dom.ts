<p align="center">
  <strong>@fest-lib/dom</strong><br>
  Level 1 — Agate measure, decor, mixins, and inline stylesheets for LUR.E / FL.UI.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@fest-lib/dom"><img src="https://img.shields.io/npm/v/@fest-lib/dom?style=flat-square" alt="npm"></a>
  <a href="LICENSE"><img src="https://img.shields.io/npm/l/@fest-lib/dom?style=flat-square" alt="MIT"></a>
  <a href="https://github.com/fest-live/dom.ts"><img src="https://img.shields.io/github/stars/fest-live/dom.ts?style=flat-square" alt="stars"></a>
</p>

Browser DOM helpers: viewport / zoom / launcher grid (Agate), appear / shape / animation decor, style and behavior mixins, observers, and loaders that inject CSS without a bundler plugin.

```text
core
 └── fest/dom        ← you are here
      └── lure · veela · icon · image · fl-ui
```

## Install

```bash
npm install @fest-lib/core @fest-lib/dom
```

Peer: `@fest-lib/core` `>=0.1.0`. ESM, Node **20+**, `sideEffects: true`.

```ts
import { loadInlineStyle, loadStyleSheet } from "@fest-lib/dom";

await loadInlineStyle(".panel { padding: 1rem; }");
loadStyleSheet(cssTextOrBlob);   // <link> or adopted sheet
```

`loadInlineStyle(css, root?, layer?)` prepends a `<style>` (default: `document.head`). Optional `layer` wraps the text in `@layer`.

## Layout

| Path | Role |
| --- | --- |
| `src/agate/*` | viewport, zoom, measure, launcher grid |
| `src/decor/*` | animation, appear, shape |
| `src/mixin/*` | observer, style, behavior, store, handler |
| `src/mixin/junction/*` | pointer / junction (moving toward LUR.E) |

Agate numbers are the same coordinate story as Veela’s oriented-space tokens: client vs oriented vs algorithm space. Measure here; paint tokens in `@fest-lib/veela`.

## Workspace

```bash
cd modules/projects/dom.ts
npm run dev
npm run build
npm run publish
```

License: [MIT](LICENSE).
