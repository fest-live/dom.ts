<h1 align="center">🏠 DOM.ts 🏠</h1>

<p align="center">
  <b>Powerful DOM management & manipulation library pack</b>
</p>
<p align="center">
  <a href="https://github.com/unite-2-re/dom.ts"><img src="https://img.shields.io/github/stars/unite-2-re/dom.ts?style=flat-square" alt="GitHub stars"></a>
  <a href="https://github.com/unite-2-re/dom.ts/actions"><img src="https://img.shields.io/github/workflow/status/unite-2-re/dom.ts/CI?style=flat-square" alt="Build Status"></a>
  <a href="https://www.npmjs.com/package/dom.ts"><img src="https://img.shields.io/npm/v/dom.ts?style=flat-square" alt="NPM version"></a>
  <a href="https://github.com/unite-2-re/dom.ts/blob/main/LICENSE"><img src="https://img.shields.io/github/license/unite-2-re/dom.ts?style=flat-square" alt="License"></a>
</p>

---

## 🚀 Features

- ⚡️ **Ultra-fast** DOM manipulation
- 🧩 **Modular** architecture
- 🏙️ **Agate.UX**: advanced UX/interaction sub-component
- 🧰 **Generic API** for flexible usage
- 🎨 **Virtual UI/UX scaling & orientation**
- 🖱️ **Pointer events** with virtual coordinates
- 🛠️ **Custom CSS properties** for advanced layouts

---

## 📦 Installation

```bash
npm install dom.ts
# or
yarn add dom.ts
```

---

## 🔌 Generic API

> _API documentation coming soon!_

- [ ] **Comprehensive API Reference**
- [ ] **Usage Examples**
- [ ] **TypeScript Support**

---

## 🏙️ Agate.UX — Multi-dimensional UX/Interaction

> **Agate.UX** is a next-gen sub-component for advanced UI/UX, designed for the "2REmembrance" generation (2025+).

### 🧩 Key Concepts

- **Orientation-based transforms:**
  `calc(var(--orient, 0) * <A>)` where `<A>` can be `100grad`, `0.25turn`, `90deg`, etc.
- **Self-centering elements:**
  `translate(-50%, -50%)` with `transform-origin: 0px 0px;`
- **Drag & center combined:**
  `translate(calc(var(--drag-x, 0px) - 50%), calc(var(--drag-y, 0px) - 50%))`

<details>
<summary>How it works?</summary>

#### Coordinate Spaces

- <kbd>Client-Space</kbd>: page coordinate system
- <kbd>Oriented-Space</kbd>: virtual screen
- <kbd>Algorithm-Space</kbd>: internal logic

#### Degree Types

- <span style="background:#eee; border-radius:4px; padding:2px 6px;">90deg-based</span> (0°, 90°, 180°, 270°)
- <span style="background:#eee; border-radius:4px; padding:2px 6px;">Variable/Matrix-based</span>

#### Event Pre-computation

- Client-Space Pointer Position
- Oriented-Space Pointer Position
- Algorithm-Space Pointer Position

</details>

---

## 🌟 Roadmap & Future Features

- [ ] Virtual UI/UX scaling
- [ ] Virtual screen orientation
- [ ] Pointer events adapted to virtual coordinates
- [ ] New and improved CSS rules
- [ ] API for fixed/independent oriented UI

---

## 📏 Scaling

Special versions of `getBoundingClientRect`, `clientX`, and `clientY` with virtual scaling support.

**Scaling methods:**
- CSS `zoom` (recommended)
- CSS `scale` (legacy)
- `rem`/`em` units

---

## 🖱️ Events

Custom `ag-pointer*` event wrappers with enhancements for virtualized UIs.

---

## 🎨 Custom CSS Properties

| Oriented-Space | Client-Space | Implementation-Dependent |
|:--------------:|:------------:|:------------------------:|
| `--os-inset-x` | `--cs-inset-x` | `--im-inset-x` |
| `--os-inset-y` | `--cs-inset-y` | `--im-inset-y` |
| `--os-drag-x`  | `--cs-drag-x`  | `--im-drag-x`  |
| `--os-drag-y`  | `--cs-drag-y`  | `--im-drag-y`  |
| `--os-size-x`  | `--cs-size-x`  | `--im-size-x`  |
| `--os-size-y`  | `--cs-size-y`  | `--im-size-y`  |
| `--os-self-size-x` | `--cs-self-size-x` | `--im-self-size-x` |
| `--os-self-size-y` | `--cs-self-size-y` | `--im-self-size-y` |
| `--os-offset-x` | `--cs-offset-x` | `--im-offset-x` |
| `--os-offset-y` | `--cs-offset-y` | `--im-offset-y` |

---

## 🛠️ Implementation Details

- **Transforms:** `self-size-x`/`self-size-y` = `100%` (client-space)
- **Insets/Sizing:** `self-size-x`/`self-size-y` = offset parent size
- **Transforms:** default to client-space unless transformed
- **Inline/Block:** sizes/insets may swap in different writing modes

---

## 🏗️ Potential Implementations

- **By layout:**
  - Fixed/absolute (insets)
  - CSS Houdini (layout worklets)
- **By orientation:**
  - `inline`/`block` with `writing-mode`/`direction`
  - `transform`-based (`rotate`)
  - Mixed/combined approaches

---

## 🧭 Policy Concepts

- Use `inset` for semi-static, `translate` for dynamic (drag/animation) positioning.

---

## 🤝 Contributing

Pull requests, issues, and suggestions are welcome!
See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

---

## 📄 License

[MIT](./LICENSE)

---

<p align="center">
  <a href="https://github.com/unite-2-re/dom.ts">
    <img src="https://img.shields.io/badge/Star%20on-GitHub-24292f?logo=github&style=for-the-badge" alt="Star on GitHub"/>
  </a>
  <a href="https://www.npmjs.com/package/dom.ts">
    <img src="https://img.shields.io/badge/View%20on-npm-cc3534?logo=npm&style=for-the-badge" alt="View on npm"/>
  </a>
</p>

