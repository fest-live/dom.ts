# 💎 DOM.ts 💎

🧰 Powerful DOM managment and manipulation library pack. 🧰

---

## 🔌 Generic API 🔌

TODO!

---

## 🏙️ Agate.UX 🏙️

**Agate.UX** - multi-dimensional UX/interaction sub-component.

### 🧩 Concepts 🧩

> Concepts for 2025 "2REmembrance" generation.

1. Rotate by orientation index: `calc(var(--orient, 0) * <A>)`, where `<A>` is: `100grad`, `0.25turn` or `90deg`...
2. Centering element relative by-self: `translate(-50%, -50%)`, where `transform-origin: 0px 0px;`.
3. Combined centered element with drag: `translate(calc(var(--drag-x, 0px) - 50%), calc(var(--drag-y, 0px) - 50%))`.

#### How is works?

**We have two or three versions of coordinates:**

- Client-Space coordinates (i.e. page coordinate system)
- Oriented-Space coordinates (aka. virtual screen)
- Algorithm-Space coordinates (mostly, internal)

**Also we have two types of degrees:**

- 90deg based (0deg, 90deg, 180deg, 270deg, etc.)
- Variable degrees or angle (used matrices)

**Also, events will pre-computed these values:**

- Client-Space Pointer Position
- Oriented-Space Pointer Position
- Algorithm-Space Pointer Position (specific cases)

#### Future Features

- Virtual UI/UX scaling
- Virtual screen orientation
- Pointer events adapted to virtual coordinates
- New and improved CSS rules
- API for fixed/independent oriented UI

#### Scaling

Will be made special version of getBoundingClientRect, clientX and clientY with software or virtual scaling accounting. Also, will recomputed view-ports size values.

**For scaling may be used:**

- CSS `zoom` (recommended)
- CSS `scale` (legacy)
- Using `rem`/`em` units

#### Events

Will be made `ag-pointer*` events wrappers as base prior, with enchantments.

#### CSS properties

Planned to made those CSS properties.

**Oriented-Space:**

- `--os-inset-x`, `--os-inset-y`
- `--os-drag-x`, `--os-drag-y`
- `--os-size-x`, `--os-size-y`
- `--os-self-size-x`, `--os-self-size-y`
- `--os-offset-x`, `--os-offset-y` (relative of offsetParent)

**Client-Space:**

- `--cs-inset-x`, `--cs-inset-y`
- `--cs-drag-x`, `--cs-drag-y`
- `--cs-size-x`, `--cs-size-y`
- `--cs-self-size-x`, `--cs-self-size-y`
- `--cs-offset-x`, `--cs-offset-y` (relative of offsetParent)

**Implementation-Dependent:**

- `--im-inset-x`, `--im-inset-y`
- `--im-drag-x`, `--im-drag-y`
- `--im-size-x`, `--im-size-y`
- `--im-self-size-x`, `--im-self-size-y`
- `--im-offset-x`, `--im-offset-y` (relative of offsetParent)

#### Some details

- In transforms, `self-size-x` and `self-size-y` also equals to `100%` (if use client-space).
- In insets or sizing, `self-size-x` and `self-size-y` is offset parent size.
- Transforms always uses client-space if not transformed before.
- Sizes and insets may be swapped in `inline` and `block` units.

#### Potential implementation

May have those types.

**By layout:**

- Fixed/absolute position based (insets)
- CSS Houdini (layout work-lets)

**By orientation:**

- `inline`/`block` with `writing-mode` and `direction`.
- `transform`-based (aka. `rotate`).
- In some cases may be mixed or combined.

#### New policy concepts

Currently we using more stable `inset` position for semi-static, and `translate` for dynamics, such as dragging or animations.
