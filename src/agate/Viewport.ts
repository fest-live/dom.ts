/*
 * FIND:virtual-keyboard
 * TAG:native-display,screen-viewport
 * WHY: Work Center composer and markdown raw read `--virtual-keyboard-height`.
 * Capacitor Android has no Virtual Keyboard API; IME height comes from
 * visualViewport overlap, layout shrink, or Capacitor Keyboard.
 * INVARIANT: IME must not shift shell / `--lv-height`. Capacitor uses Keyboard
 * plugin height only — visualViewport shrink (Select All, handles) is not IME.
 * Capacitor screen CSS-px / density / DPI come from CwsBridge (FIND:native-display).
 */
import type { StyleTuple } from "@fest-lib/style-lib";
import { addEvent } from "./Utils";

const runWhenIdle = (cb: IdleRequestCallback, timeout = 100) => {
    if (typeof globalThis.requestIdleCallback === "function") {
        return globalThis.requestIdleCallback(cb, { timeout });
    }
    return setTimeout(() => cb({ didTimeout: false, timeRemaining: () => 0 } as IdleDeadline), 0);
};

const KEYBOARD_OVERLAY_PX = 80;

type VirtualKeyboardLike = {
    overlaysContent?: boolean;
    boundingBox?: { height?: number };
};

type CapacitorKeyboardLike = {
    addListener?: (name: string, cb: (info?: { keyboardHeight?: number }) => void) => void;
    setScroll?: (opts: { isDisabled: boolean }) => Promise<void> | void;
    setResizeMode?: (opts: { mode: string }) => Promise<void> | void;
};

type CwsBridgeDisplayLike = {
    getDisplayMetrics?: () => Promise<Record<string, unknown>>;
    getShellInfo?: () => Promise<Record<string, unknown>>;
};

type NativeDisplayMetrics = {
    windowWidthCss: number;
    windowHeightCss: number;
    displayWidthCss: number;
    displayHeightCss: number;
    density: number;
    densityDpi: number;
    xdpi: number;
    ydpi: number;
    ppi: number;
    scaledDensity: number;
    fontScale: number;
};

let capacitorKeyboardHeight = 0;
let capacitorKeyboardBound = false;
let windowKeyboardBound = false;
let viewportTrackingStarted = false;
let nativeDisplay: NativeDisplayMetrics | null = null;
let nativeDisplayBound = false;
let nativeDisplayRefreshQueued = false;

const isNativeCapacitorHost = (): boolean => {
    try {
        if (typeof document !== "undefined" && document.documentElement.dataset.cwspNativeShell === "capacitor") {
            return true;
        }
        const cap = (globalThis as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor;
        return typeof cap?.isNativePlatform === "function" && Boolean(cap.isNativePlatform());
    } catch {
        return false;
    }
};

const readCwsBridge = (): CwsBridgeDisplayLike | null => {
    try {
        const cap = (
            globalThis as { Capacitor?: { Plugins?: { CwsBridge?: CwsBridgeDisplayLike } } }
        ).Capacitor;
        return cap?.Plugins?.CwsBridge ?? null;
    } catch {
        return null;
    }
};

const parseNativeDisplay = (info: Record<string, unknown> | null | undefined): NativeDisplayMetrics | null => {
    if (!info) return null;
    const windowW = Number(info.windowWidthCss) || 0;
    const windowH = Number(info.windowHeightCss) || 0;
    const displayW = Number(info.displayWidthCss) || windowW;
    const displayH = Number(info.displayHeightCss) || windowH;
    const w = windowW || displayW;
    const h = windowH || displayH;
    if (w <= 0 || h <= 0) return null;
    const density = Number(info.density) || 0;
    return {
        windowWidthCss: w,
        windowHeightCss: h,
        displayWidthCss: displayW || w,
        displayHeightCss: displayH || h,
        density,
        densityDpi: Number(info.densityDpi) || 0,
        xdpi: Number(info.xdpi) || 0,
        ydpi: Number(info.ydpi) || 0,
        ppi: Number(info.ppi) || 0,
        scaledDensity: Number(info.scaledDensity) || density,
        fontScale: Number(info.fontScale) || (density > 0 ? (Number(info.scaledDensity) || density) / density : 1),
    };
};

const applyNativeDisplay = (info: Record<string, unknown> | null | undefined): void => {
    const next = parseNativeDisplay(info);
    if (!next) return;
    const prev = nativeDisplay;
    const same = Boolean(
        prev
        && prev.windowWidthCss === next.windowWidthCss
        && prev.windowHeightCss === next.windowHeightCss
        && prev.displayWidthCss === next.displayWidthCss
        && prev.displayHeightCss === next.displayHeightCss
        && prev.density === next.density
        && prev.densityDpi === next.densityDpi
        && prev.ppi === next.ppi
        && prev.fontScale === next.fontScale
    );
    nativeDisplay = next;
    if (!same) updateVP();
};

const refreshNativeDisplay = (): void => {
    if (!isNativeCapacitorHost()) return;
    const Bridge = readCwsBridge();
    if (!Bridge) return;
    const req = typeof Bridge.getDisplayMetrics === "function"
        ? Bridge.getDisplayMetrics()
        : Bridge.getShellInfo?.();
    void req?.then((info) => applyNativeDisplay(info)).catch(() => { /* plugin optional */ });
};

const queueNativeDisplayRefresh = (): void => {
    if (!isNativeCapacitorHost() || nativeDisplayRefreshQueued) return;
    nativeDisplayRefreshQueued = true;
    runWhenIdle(() => {
        nativeDisplayRefreshQueued = false;
        bindNativeDisplay();
        refreshNativeDisplay();
    }, 80);
};

const bindNativeDisplay = (): void => {
    if (nativeDisplayBound || typeof globalThis === "undefined") return;
    if (!isNativeCapacitorHost()) return;
    if (!readCwsBridge()) return;
    nativeDisplayBound = true;
    try {
        const cached = (
            globalThis as { window?: { __CWS_SHELL_INFO__?: Record<string, unknown> } }
        ).window?.__CWS_SHELL_INFO__;
        if (cached) applyNativeDisplay(cached);
    } catch {
        /* optional */
    }
    refreshNativeDisplay();
};

const virtualKeyboard = (): VirtualKeyboardLike | null => {
    try {
        return (globalThis.navigator as Navigator & { virtualKeyboard?: VirtualKeyboardLike })?.virtualKeyboard ?? null;
    } catch {
        return null;
    }
};

const INTERACTIVE_WIDGET = "interactive-widget=overlays-content";
const VIEWPORT_FIT = "viewport-fit=cover";

/** Stamp overlay IME + `viewport-fit=cover` ([MDN viewport](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/meta/name/viewport)). */
export const ensureViewportInteractiveWidgetOverlay = (): void => {
    if (typeof document === "undefined") return;
    const head = document.head || document.documentElement;
    if (!head) return;
    let meta = document.querySelector('meta[name="viewport"]') as HTMLMetaElement | null;
    if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "viewport");
        meta.content = `width=device-width, initial-scale=1.0, ${VIEWPORT_FIT}, ${INTERACTIVE_WIDGET}`;
        head.insertBefore(meta, head.firstChild);
        return;
    }
    let content = String(meta.content || "").trim();
    if (!/interactive-widget\s*=\s*overlays-content/i.test(content)) {
        if (/interactive-widget\s*=/i.test(content)) {
            content = content.replace(/interactive-widget\s*=\s*[a-z-]+/i, INTERACTIVE_WIDGET);
        } else {
            content = content ? `${content.replace(/,\s*$/, "")}, ${INTERACTIVE_WIDGET}` : INTERACTIVE_WIDGET;
        }
    }
    if (!/viewport-fit\s*=\s*cover/i.test(content)) {
        if (/viewport-fit\s*=/i.test(content)) {
            content = content.replace(/viewport-fit\s*=\s*[a-z-]+/i, VIEWPORT_FIT);
        } else {
            content = content ? `${content.replace(/,\s*$/, "")}, ${VIEWPORT_FIT}` : VIEWPORT_FIT;
        }
    }
    if (content !== String(meta.content || "").trim()) meta.content = content;
};

/* WHY: VirtualKeyboard API overlaysContent + viewport interactive-widget=overlays-content
 * so IME does not resize layout / visual viewport ([MDN VirtualKeyboard](https://developer.mozilla.org/en-US/docs/Web/API/VirtualKeyboard_API)). */
export const ensureVirtualKeyboardOverlay = (): void => {
    ensureViewportInteractiveWidgetOverlay();
    const vk = virtualKeyboard();
    if (!vk) return;
    try {
        if (vk.overlaysContent !== true) vk.overlaysContent = true;
    } catch {
        /* older WebView */
    }
};

const deepActiveElement = (): Element | null => {
    let el: Element | null = typeof document !== "undefined" ? document.activeElement : null;
    while (el instanceof HTMLElement && el.shadowRoot?.activeElement) {
        el = el.shadowRoot.activeElement;
    }
    return el;
};

const isImeTarget = (el: Element | null): boolean => {
    if (!el || !(el instanceof HTMLElement)) return false;
    if (el.localName === "cw-raw-editor") return true;
    if (el.isContentEditable) return true;
    const tag = el.tagName;
    if (tag === "TEXTAREA" || tag === "SELECT") return true;
    if (tag !== "INPUT") return false;
    const type = String((el as HTMLInputElement).type || "text").toLowerCase();
    return !["button", "checkbox", "radio", "file", "submit", "reset", "image", "range", "color", "hidden"].includes(type);
};

const isCollapsedCaret = (): boolean => {
    try {
        const sel = document.getSelection();
        return Boolean(sel && sel.rangeCount && sel.isCollapsed);
    } catch {
        return true;
    }
};

let layoutLockOrient = "";
let layoutLockW = 0;
let layoutLockH = 0;
let lastStableKeyboard = 0;

const isLandscape = (): boolean => {
    try {
        const type = typeof screen !== "undefined" ? String(screen.orientation?.type || "") : "";
        if (type.startsWith("landscape")) return true;
        if (type.startsWith("portrait")) return false;
        return Boolean(typeof matchMedia !== "undefined" && matchMedia("(orientation: landscape)")?.matches);
    } catch {
        return false;
    }
};

/** CSS-px box of the physical screen on the current orientation. 0 = unknown (do not clamp). */
const readPhysicalScreen = (): { width: number; height: number } => {
    /* WHY: Capacitor `screen.width` / `availHeight` skip nav/cutout or swap axes.
     * Native WindowMetrics is the activity/WebView box; DisplayMetrics is the panel. */
    let w = 0;
    let h = 0;
    if (nativeDisplay) {
        w = nativeDisplay.windowWidthCss || nativeDisplay.displayWidthCss;
        h = nativeDisplay.windowHeightCss || nativeDisplay.displayHeightCss;
    } else if (typeof screen !== "undefined") {
        const sw = Number(screen.width) || 0;
        const sh = Number(screen.height) || 0;
        const aw = Number(screen.availWidth) || 0;
        const ah = Number(screen.availHeight) || 0;
        /* WHY: `availHeight` on Android drops the nav/gesture inset; the WebView is taller.
         * `min(screen, avail)` painted a black strip. The outer box is the max. */
        w = Math.max(w, sw, aw);
        h = Math.max(h, sh, ah);
    }
    if (!w && !h) return { width: 0, height: 0 };
    const landscape = isLandscape();
    const boxLandscape = w > 0 && h > 0 && w > h;
    const boxPortrait = w > 0 && h > 0 && w < h;
    if (landscape && boxPortrait) return { width: h, height: w };
    if (!landscape && boxLandscape) return { width: h, height: w };
    return { width: w || h, height: h || w };
};

const clampToPhysical = (width: number, height: number): { width: number; height: number } => {
    const phys = readPhysicalScreen();
    const innerW = typeof window !== "undefined" ? Number(window.innerWidth) || 0 : 0;
    const innerH = typeof window !== "undefined" ? Number(window.innerHeight) || 0 : 0;
    const root = typeof document !== "undefined" ? document.documentElement : null;
    const clientW = Number(root?.clientWidth) || 0;
    const clientH = Number(root?.clientHeight) || 0;
    /* INVARIANT: never shrink below the live WebView — only cap runaway growth. */
    const capW = Math.max(phys.width, innerW, clientW);
    const capH = Math.max(phys.height, innerH, clientH);
    return {
        width: capW > 0 ? Math.min(width, capW) : width,
        height: capH > 0 ? Math.min(height, capH) : height,
    };
};

export type FixedOverlayViewport = {
    left: number;
    top: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
};

/** Build client-coordinate bounds for a fixed overlay root. */
export const createFixedOverlayViewport = (
    width: number,
    height: number,
    left = 0,
    top = 0,
): FixedOverlayViewport => {
    const safeWidth = Math.max(0, Number(width) || 0);
    const safeHeight = Math.max(0, Number(height) || 0);
    const safeLeft = Number(left) || 0;
    const safeTop = Number(top) || 0;
    return {
        left: safeLeft,
        top: safeTop,
        right: safeLeft + safeWidth,
        bottom: safeTop + safeHeight,
        width: safeWidth,
        height: safeHeight,
    };
};

/**
 * Read bounds for `position: fixed` overlays.
 * INVARIANT: use the same client-coordinate origin as PointerEvent and DOMRect;
 * layout-lock variables remain reserved for desktop/workspace sizing.
 */
export const readFixedOverlayViewport = (): FixedOverlayViewport => {
    if (typeof window === "undefined") return createFixedOverlayViewport(0, 0);
    const root = typeof document !== "undefined" ? document.documentElement : null;
    return createFixedOverlayViewport(
        Number(root?.clientWidth) || Number(window.innerWidth) || 0,
        Number(root?.clientHeight) || Number(window.innerHeight) || 0,
    );
};

const readLayoutViewport = (): { width: number; height: number; keyboard: number } => {
    if (typeof window === "undefined") return { width: 0, height: 0, keyboard: 0 };
    const vv = window.visualViewport;
    const innerW = Number(window.innerWidth) || 0;
    const innerH = Number(window.innerHeight) || 0;
    const vvW = Number(vv?.width) || 0;
    const vvH = Number(vv?.height) || 0;
    const vvTop = Number(vv?.offsetTop) || 0;
    const vkH = Number(virtualKeyboard()?.boundingBox?.height) || 0;
    const vvOverlap = innerH > 0 && vvH > 0 ? innerH - vvH - vvTop : 0;
    const capH = capacitorKeyboardHeight;
    /* WHY: Capacitor Select All / selection handles shrink visualViewport; that is
     * not the IME. Overlay height comes only from the Keyboard plugin (or VK API). */
    const nativeCap = isNativeCapacitorHost();
    let keyboard = capH >= KEYBOARD_OVERLAY_PX
        ? capH
        : !nativeCap && vkH >= KEYBOARD_OVERLAY_PX
          ? vkH
          : !nativeCap && vvOverlap >= KEYBOARD_OVERLAY_PX
            ? vvOverlap
            : 0;
    const candidateW = Math.max(innerW, vvW);
    const candidateH = Math.max(innerH, vvH + vvTop, keyboard > 0 ? vvH + keyboard : 0);
    const orient = isLandscape() ? "l" : "p";
    if (orient !== layoutLockOrient) {
        layoutLockOrient = orient;
        layoutLockW = 0;
        layoutLockH = 0;
    }
    /* WHY: Android Chrome resizes the viewport before `focusin`. A desktop pane
     * resize (Cursor debug) also drops height — only treat it as IME when width
     * stays put and an editor or coarse pointer is involved. Otherwise the lock
     * never shrinks and the rail / pager sit outside the squeezed window. */
    const widthStable =
        layoutLockW <= 0 || Math.abs(layoutLockW - candidateW) < 32;
    const editableFocused =
        isImeTarget(deepActiveElement()) || isImeTarget(document.activeElement);
    let coarsePointer = false;
    try {
        coarsePointer = typeof matchMedia === "function" && matchMedia("(pointer: coarse)").matches;
    } catch {
        coarsePointer = false;
    }
    const suddenShrink =
        !nativeCap &&
        widthStable &&
        (editableFocused || coarsePointer) &&
        layoutLockH > 0 &&
        layoutLockH - candidateH >= KEYBOARD_OVERLAY_PX;
    if (keyboard < KEYBOARD_OVERLAY_PX && suddenShrink) {
        const shrink = Math.max(0, layoutLockH - candidateH, layoutLockH - (vvH + vvTop));
        if (shrink >= KEYBOARD_OVERLAY_PX) keyboard = shrink;
    }
    /* WHY: Select All / handles shrink visualViewport again. That is not more IME —
     * keep the last real keyboard height so shell tokens and editor padding stay put. */
    const expandedSelection = !isCollapsedCaret();
    if (expandedSelection && lastStableKeyboard >= KEYBOARD_OVERLAY_PX) {
        keyboard = lastStableKeyboard;
    } else if (keyboard >= KEYBOARD_OVERLAY_PX) {
        lastStableKeyboard = keyboard;
    } else if (!isImeTarget(deepActiveElement()) && !isImeTarget(document.activeElement)) {
        lastStableKeyboard = 0;
    }
    const imeOpen = keyboard > 0 || isImeTarget(deepActiveElement()) || isImeTarget(document.activeElement) || suddenShrink || expandedSelection;
    if (!imeOpen) {
        layoutLockW = candidateW;
        layoutLockH = candidateH;
    } else {
        layoutLockW = Math.max(candidateW, layoutLockW);
        layoutLockH = Math.max(candidateH, layoutLockH);
    }
    /* INVARIANT: screen viewport never exceeds the physical screen (orientation-aware). */
    const locked = clampToPhysical(layoutLockW || candidateW, layoutLockH || candidateH);
    layoutLockW = locked.width;
    layoutLockH = locked.height;
    const kb = locked.height > 0 ? Math.min(keyboard, locked.height) : keyboard;
    return {
        width: locked.width,
        height: locked.height,
        keyboard: kb
    };
};

const isImeChromeLock = (el: HTMLElement): boolean => {
    const tag = el.tagName;
    if (tag === "HTML" || tag === "BODY") return true;
    if (
        tag === "CW-RAW-EDITOR"
        || tag === "CW-VIEW-VIEWER"
        || tag === "CW-MARKDOWN-VIEW-FRAME"
        || tag === "CW-MARKDOWN-TOOLBAR-FRAME"
    ) return true;
    const cls = el.classList;
    return (
        cls.contains("app-shell") ||
        cls.contains("app-shell__viewport") ||
        cls.contains("app-shell__nav") ||
        cls.contains("env-shell-root") ||
        cls.contains("env-shell-workspace") ||
        cls.contains("env-shell-chrome") ||
        cls.contains("env-ui-window") ||
        cls.contains("env-ui-window__body") ||
        cls.contains("wf-frame") ||
        cls.contains("ui-window") ||
        cls.contains("view-viewer") ||
        cls.contains("view-viewer__toolbar") ||
        cls.contains("view-viewer__chrome") ||
        cls.contains("view-viewer__content") ||
        cls.contains("cw-view-viewer-shell") ||
        cls.contains("cw-markdown-view-frame") ||
        cls.contains("cw-view-viewer__slot-raw")
    );
};

const parentOf = (el: Element | null): Element | null => {
    if (!el) return null;
    if (el.parentElement) return el.parentElement;
    const root = el.getRootNode();
    return root instanceof ShadowRoot ? root.host : null;
};

const isScrollport = (el: HTMLElement): boolean => {
    if (isImeChromeLock(el)) return false;
    const style = getComputedStyle(el);
    const oy = style.overflowY || style.overflowBlock;
    if (oy !== "auto" && oy !== "scroll") return false;
    return el.scrollHeight > el.clientHeight + 1;
};

const findRawEditorScrollport = (start: Element | null): HTMLElement | null => {
    let node: Element | null = start;
    while (node) {
        if (node instanceof HTMLElement && node.classList.contains("cw-raw-editor__scroll")) return node;
        if (node instanceof HTMLElement && node.localName === "cw-raw-editor") {
            const inner = node.shadowRoot?.querySelector(".cw-raw-editor__scroll");
            if (inner instanceof HTMLElement) return inner;
        }
        const root = node.getRootNode();
        if (root instanceof ShadowRoot) {
            const inner = root.querySelector(".cw-raw-editor__scroll");
            if (inner instanceof HTMLElement) return inner;
        }
        node = parentOf(node);
    }
    return null;
};

const findImeScrollport = (start: Element | null): HTMLElement | null => {
    const raw = findRawEditorScrollport(start);
    if (raw) return raw;
    let node: Element | null = start;
    while (node) {
        if (node instanceof HTMLElement && isScrollport(node)) return node;
        node = parentOf(node);
    }
    return null;
};

const readCaretRect = (): DOMRect | null => {
    try {
        const sel = document.getSelection();
        if (sel?.rangeCount) {
            const range = sel.getRangeAt(0);
            const rects = range.getClientRects();
            const rect = rects.length ? rects[rects.length - 1] : range.getBoundingClientRect();
            if (rect && (rect.height || rect.width || rect.top || rect.bottom)) return rect;
        }
    } catch {
        /* no selection */
    }
    const el = document.activeElement;
    return el instanceof HTMLElement ? el.getBoundingClientRect() : null;
};

const pinImeCaretInScrollport = (): void => {
    const active = deepActiveElement();
    if (!isImeTarget(active) && !isImeTarget(document.activeElement)) return;
    /* WHY: Select All's range box is the whole document — scrolling it shifts every surface. */
    if (!isCollapsedCaret()) return;
    const keyboard = readLayoutViewport().keyboard;
    const vv = window.visualViewport;
    const visibleBottom = (Number(vv?.height) || Number(window.innerHeight) || 0) - Math.max(8, keyboard ? 12 : 0);
    if (visibleBottom <= 0) return;
    const rect = readCaretRect();
    if (!rect) return;
    const overflow = rect.bottom - visibleBottom;
    if (overflow <= 1) return;
    const port = findImeScrollport(active) || findImeScrollport(document.activeElement);
    if (port) port.scrollTop += overflow;
};

const pinVisualViewport = (): void => {
    const vv = window.visualViewport;
    if (!vv) return;
    const top = Number(vv.offsetTop) || 0;
    const left = Number(vv.offsetLeft) || 0;
    if (!top && !left) return;
    try {
        vv.scrollTo({ left: 0, top: 0, behavior: "instant" as ScrollBehavior });
    } catch {
        try {
            (vv as { scrollTo?: (x: number, y: number) => void }).scrollTo?.(0, 0);
        } catch {
            /* older WebView */
        }
    }
};

let overlayPinning = false;

const resetChromeScroll = (start: Element | null): void => {
    const port = findImeScrollport(start);
    let node: Element | null = start;
    while (node) {
        if (node instanceof HTMLElement && node !== port && isImeChromeLock(node)) {
            if (node.scrollTop || node.scrollLeft) {
                node.scrollTop = 0;
                node.scrollLeft = 0;
            }
        }
        node = parentOf(node);
    }
};

const pinOverlayScroll = (): void => {
    if (typeof window === "undefined" || overlayPinning) return;
    const active = deepActiveElement();
    const cap = isNativeCapacitorHost();
    const raw = Boolean(findRawEditorScrollport(active) || findRawEditorScrollport(document.activeElement));
    const ime = readLayoutViewport().keyboard > 0 || isImeTarget(active) || isImeTarget(document.activeElement);
    if (!ime && !cap) return;
    overlayPinning = true;
    try {
        /* INVARIANT: IME/Select All may pan visualViewport; chrome stays at layout origin.
         * Only the editor scrollport may move. Capacitor overscroll must not drag toolbars. */
        pinVisualViewport();
        if (window.scrollX || window.scrollY) window.scrollTo(0, 0);
        const root = document.documentElement;
        const body = document.body;
        if (root.scrollTop || root.scrollLeft) root.scrollTo(0, 0);
        if (body && (body.scrollTop || body.scrollLeft)) body.scrollTo(0, 0);
        if (raw || ime || !isCollapsedCaret()) {
            resetChromeScroll(active);
            resetChromeScroll(document.activeElement);
        }
        if (cap) {
            document.querySelectorAll("cw-raw-editor").forEach((host) => {
                if (host instanceof HTMLElement && !host.hidden) resetChromeScroll(host);
            });
        }
    } finally {
        overlayPinning = false;
    }
};

let scrollIntoViewPatched = false;
const patchImeScrollIntoView = (): void => {
    if (scrollIntoViewPatched || typeof Element === "undefined") return;
    scrollIntoViewPatched = true;
    const orig = Element.prototype.scrollIntoView;
    Element.prototype.scrollIntoView = function (this: Element, arg?: boolean | ScrollIntoViewOptions) {
        const active = deepActiveElement();
        const inRaw = Boolean(findRawEditorScrollport(this) || findRawEditorScrollport(active));
        if (inRaw || (isImeTarget(active) && !isCollapsedCaret())) {
            if (isNativeCapacitorHost() || !isCollapsedCaret()) {
                pinImeChrome({ caret: true });
                return;
            }
        }
        if (this instanceof HTMLElement && isImeChromeLock(this)) return;
        return orig.call(this, arg as never);
    };
};

const pinImeChrome = (opts?: { caret?: boolean }): void => {
    pinOverlayScroll();
    if (!opts?.caret) return;
    requestAnimationFrame(() => {
        pinOverlayScroll();
        pinImeCaretInScrollport();
    });
};

//
/** IME overlay height in CSS px. Capacitor: Keyboard plugin only (no `env(keyboard-inset-*)`). */
export const readVirtualKeyboardHeightPx = (): number =>
    typeof window === "undefined" ? 0 : readLayoutViewport().keyboard;

export const getAvailSize = () => {
    ensureVirtualKeyboardOverlay();
    const vv = typeof window !== "undefined" ? window.visualViewport : null;
    const layout = readLayoutViewport();
    const vvBlock: Record<string, string> = {
        "--vv-width": `${vv?.width ?? (typeof window !== "undefined" ? window.innerWidth : 0)}px`,
        "--vv-height": `${vv?.height ?? (typeof window !== "undefined" ? window.innerHeight : 0)}px`,
        "--vv-offset-left": `${vv?.offsetLeft ?? 0}px`,
        "--vv-offset-top": `${vv?.offsetTop ?? 0}px`,
        "--vv-scale": String(vv?.scale ?? 1),
        /* INVARIANT: desktop / wallpaper / Speed Dial size to layout, not the IME visual viewport. */
        "--lv-width": `${layout.width}px`,
        "--lv-height": `${layout.height}px`,
        "--keyboard-overlay-height": `${layout.keyboard}px`,
        /* INVARIANT: `.workcenter-composer` and Capacitor chat padding read this token. */
        "--virtual-keyboard-height": `${layout.keyboard}px`
    };
    if (typeof document !== "undefined") {
        /* WHY: `html[data-vk-open]` + `max-block-size: 100%` shrinks the whole shell
         * to the visual viewport (Select All / handles). IME is padding-only. */
        document.documentElement.removeAttribute("data-vk-open");
    }
    if (typeof screen != "undefined") {
        const phys = readPhysicalScreen();
        const innerW = typeof window !== "undefined" ? Number(window.innerWidth) || 0 : 0;
        const innerH = typeof window !== "undefined" ? Number(window.innerHeight) || 0 : 0;
        const paneW = Math.max(innerW, layout.width);
        const paneH = Math.max(innerH, layout.height);
        /* WHY: a restored / Cursor-debug pane is smaller than the monitor.
         * `max(screen, window)` stretched html to the panel and clipped the rail. */
        const windowedW = !nativeDisplay && paneW > 0 && phys.width > paneW + 64;
        const windowedH = !nativeDisplay && paneH > 0 && phys.height > paneH + 64;
        const capW = windowedW ? paneW : Math.max(phys.width, paneW);
        const capH = windowedH ? paneH : Math.max(phys.height, paneH);
        const screenW = capW > 0 ? `${capW}px` : "100lvi";
        const screenH = capH > 0 ? `${capH}px` : "100lvb";
        const density = nativeDisplay?.density || Number(devicePixelRatio) || 1;
        const nativeScale: Record<string, string> = nativeDisplay
            ? {
                "--native-density": String(nativeDisplay.density || density),
                "--native-dpi": String(nativeDisplay.densityDpi || 0),
                "--native-ppi": String(nativeDisplay.ppi || 0),
                "--native-xdpi": String(nativeDisplay.xdpi || 0),
                "--native-ydpi": String(nativeDisplay.ydpi || 0),
                "--native-font-scale": String(nativeDisplay.fontScale || 1),
            }
            : {};
        return {
            "--screen-width": screenW,
            "--screen-height": screenH,
            "--avail-width": screenW,
            "--avail-height": screenH,
            "--view-height": `${layout.height}px`,
            "--pixel-ratio": String(density),
            ...nativeScale,
            ...vvBlock
        };
    };
    return {
        "--screen-width": "100lvi",
        "--screen-height": "100lvb",
        "--avail-width": "100lvi",
        "--avail-height": "100lvb",
        "--view-height": `${layout.height}px`,
        "--pixel-ratio": "1",
        ...vvBlock
    };
}

//
export const availSize = getAvailSize();
export const classes: StyleTuple[] = [ [":root, :host, :scope", availSize] ];
export const orientationNumberMap = {
    "portrait-primary": 0, // as 0deg, aka. 360deg
    "landscape-primary": 1, // as -90deg, aka. 270deg
    "portrait-secondary": 2, // as -180deg, aka. 180deg
    "landscape-secondary": 3 // as -270deg, aka. 90deg
}

//
export const updateVP = (ev?: any)=>{
    const rule = document.documentElement;
    Object.assign(availSize, getAvailSize());
    Object.entries(availSize).forEach(([propName, propValue]) => {
        const exists = rule?.style?.getPropertyValue(propName);
        if (!exists || exists != propValue) {
            rule?.style?.setProperty?.(propName, (propValue || "") as string, "");
        }
    });

    // make secondary screen orientation detectable
    document.documentElement.style.setProperty("--orientation-secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}

//
export const getCorrectOrientation = () => {
    let orientationType: string = screen?.orientation?.type || "portrait-primary";
    if (!globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches) {
        if (matchMedia("(orientation: portrait)").matches) {orientationType = orientationType.replace("landscape", "portrait");} else
            if (matchMedia("(orientation: landscape)").matches) {orientationType = orientationType.replace("portrait", "landscape");};
    }
    return orientationType;
};

//
const passiveOpts = { passive: true };

//
const applyCapacitorKeyboardHeight = (raw: unknown): void => {
    const next = Number(raw) || 0;
    if (next > 0) capacitorKeyboardHeight = next;
    updateVP();
    pinImeChrome({ caret: true });
};

const clearCapacitorKeyboardHeight = (): void => {
    capacitorKeyboardHeight = 0;
    updateVP();
};

/* WHY: native Keyboard also dispatches window CustomEvents; plugin stub may appear after first focus. */
const bindWindowKeyboardEvents = (): void => {
    if (windowKeyboardBound || typeof window === "undefined") return;
    windowKeyboardBound = true;
    const onShow = (ev: Event): void => {
        const e = ev as Event & { keyboardHeight?: number; detail?: { keyboardHeight?: number } | string };
        const detail = e.detail;
        const fromDetail = typeof detail === "string"
            ? (() => {
                try { return JSON.parse(detail)?.keyboardHeight; } catch { return 0; }
            })()
            : detail?.keyboardHeight;
        applyCapacitorKeyboardHeight(e.keyboardHeight ?? fromDetail);
    };
    window.addEventListener("keyboardWillShow", onShow);
    window.addEventListener("keyboardDidShow", onShow);
    window.addEventListener("keyboardWillHide", clearCapacitorKeyboardHeight);
    window.addEventListener("keyboardDidHide", clearCapacitorKeyboardHeight);
};

const bindCapacitorKeyboard = (): void => {
    bindWindowKeyboardEvents();
    if (capacitorKeyboardBound || typeof globalThis === "undefined") return;
    const cap = (
        globalThis as {
            Capacitor?: {
                isNativePlatform?: () => boolean;
                Plugins?: { Keyboard?: CapacitorKeyboardLike };
            };
        }
    ).Capacitor;
    const Keyboard = cap?.Plugins?.Keyboard;
    if (!Keyboard?.addListener) return;
    if (typeof cap.isNativePlatform === "function" && !cap.isNativePlatform()) return;
    capacitorKeyboardBound = true;
    try {
        void Keyboard.setScroll?.({ isDisabled: true });
    } catch {
        /* optional */
    }
    try {
        void Keyboard.setResizeMode?.({ mode: "none" });
    } catch {
        /* optional */
    }
    Keyboard.addListener("keyboardWillShow", (info) => applyCapacitorKeyboardHeight(info?.keyboardHeight));
    Keyboard.addListener("keyboardDidShow", (info) => applyCapacitorKeyboardHeight(info?.keyboardHeight));
    Keyboard.addListener("keyboardWillHide", clearCapacitorKeyboardHeight);
    Keyboard.addListener("keyboardDidHide", clearCapacitorKeyboardHeight);
};

/** Start IME / visualViewport listeners once (Process Capacitor has no SpeedDial). */
export const ensureViewportTracking = (): void => {
    if (viewportTrackingStarted || typeof window === "undefined") return;
    viewportTrackingStarted = true;
    bindCapacitorKeyboard();
    bindNativeDisplay();
    whenAnyScreenChanges(() => {});
};

export const whenAnyScreenChanges = (cb: () => void) => {
    let ticking = false;
    const update = () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                updateVP();
                cb();
                ticking = false;
            });
            ticking = true;
        }
    };

    const unsubscribers: Array<() => void> = [];

    bindCapacitorKeyboard();
    bindNativeDisplay();
    patchImeScrollIntoView();
    // @ts-ignore
    unsubscribers.push(addEvent(navigator?.virtualKeyboard, "geometrychange", update, passiveOpts));
    unsubscribers.push(addEvent(document, "selectionchange", () => {
        pinOverlayScroll();
    }, passiveOpts));
    unsubscribers.push(addEvent(window?.visualViewport, "scroll", () => {
        pinOverlayScroll();
        update();
    }, passiveOpts));
    unsubscribers.push(addEvent(window, "scroll", () => {
        pinOverlayScroll();
    }, { capture: true, passive: true }));
    unsubscribers.push(addEvent(document, "scroll", () => {
        pinOverlayScroll();
    }, { capture: true, passive: true }));
    unsubscribers.push(addEvent(window?.visualViewport, "resize", () => {
        pinImeChrome({ caret: true });
        update();
    }, passiveOpts));
    unsubscribers.push(addEvent(screen?.orientation, "change", () => {
        queueNativeDisplayRefresh();
        update();
    }));
    unsubscribers.push(addEvent(window, "resize", () => {
        queueNativeDisplayRefresh();
        update();
    }));
    unsubscribers.push(addEvent(document?.documentElement, "fullscreenchange", () => {
        queueNativeDisplayRefresh();
        update();
    }));
    unsubscribers.push(addEvent(document, "DOMContentLoaded", update));
    unsubscribers.push(addEvent(matchMedia("(orientation: portrait)"), "change", () => {
        queueNativeDisplayRefresh();
        update();
    }));
    unsubscribers.push(addEvent(matchMedia("(orientation: landscape)"), "change", () => {
        queueNativeDisplayRefresh();
        update();
    }));
    unsubscribers.push(addEvent(document, "focusin", () => {
        bindCapacitorKeyboard();
        bindNativeDisplay();
        ensureVirtualKeyboardOverlay();
        if (isImeTarget(deepActiveElement()) || isImeTarget(document.activeElement)) {
            layoutLockW = Math.max(layoutLockW, Number(window.innerWidth) || 0, Number(window.visualViewport?.width) || 0);
            layoutLockH = Math.max(layoutLockH, Number(window.innerHeight) || 0, Number(window.visualViewport?.height) || 0);
        }
        pinImeChrome({ caret: true });
        update();
    }, { capture: true, passive: true }));
    unsubscribers.push(addEvent(document, "focusout", update, passiveOpts));

    //
    ensureVirtualKeyboardOverlay();
    update();
    runWhenIdle(() => update(), 100);
    return () => unsubscribers.forEach((unsub) => unsub());
};

//
export const fixOrientToScreen = (element: HTMLElement & { orient?: number }) => {
    if (!element?.classList?.contains?.("native-portrait-optimized")) {
        element?.classList?.add?.("native-portrait-optimized");
        return whenAnyScreenChanges(() => {
            const next = orientationNumberMap?.[getCorrectOrientation()] ?? 0;
            element.orient = next;
            element.setAttribute?.("orient", String(next));
            element.style?.setProperty?.("--orient", String(next));
        });
    }
}

if (typeof document !== "undefined") {
    ensureVirtualKeyboardOverlay();
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", () => ensureVirtualKeyboardOverlay(), { once: true });
    }
}
