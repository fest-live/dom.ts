# DOM.ts

`@fest-lib/dom` — browser DOM helpers for fest-lib. Depends on `@fest-lib/core`.

Agate measurement (viewport, zoom, launcher grid), appear/shape/animation decor, style/behavior mixins, observers, and inline stylesheet loaders used by LUR.E and FL.UI.

## Install

```bash
npm install @fest-lib/dom
```

```ts
import { loadInlineStyle } from "@fest-lib/dom";

await loadInlineStyle(cssText);
```

## Layout

| Path | Role |
| --- | --- |
| `src/agate/*` | viewport, zoom, measure, launcher grid |
| `src/decor/*` | animation, appear, shape |
| `src/mixin/*` | observer, style, behavior, store, handler |
| `src/mixin/junction/*` | pointer/junction mixins (moving toward LUR.E) |

Peer: `@fest-lib/core`. Build: `npm run build`. Publish: `npm run publish`.
