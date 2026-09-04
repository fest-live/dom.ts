/*
 * FIND:virtual-keyboard
 * WHY: Work Center composer reads `--virtual-keyboard-height`. Capacitor Android
 * has no Virtual Keyboard API; IME height comes from visualViewport overlap,
 * layout shrink, or Capacitor Keyboard.
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

let capacitorKeyboardHeight = 0;
let capacitorKeyboardBound = false;
let viewportTrackingStarted = false;

const virtualKeyboard = (): VirtualKeyboardLike | null => {
    try {
        return (globalThis.navigator as Navigator & { virtualKeyboard?: VirtualKeyboardLike })?.virtualKeyboard ?? null;
    } catch {
        return null;
    }
};

/* WHY: PWA + Android WebView otherwise resize the layout viewport under the IME. */
export const ensureVirtualKeyboardOverlay = (): void => {
    const vk = virtualKeyboard();
    if (!vk) return;
    try {
        if (vk.overlaysContent !== true) vk.overlaysContent = true;
    } catch {
        /* older WebView */
    }
};

const isImeTarget = (el: Element | null): boolean => {
    if (!el || !(el instanceof HTMLElement)) return false;
    if (el.isContentEditable) return true;
    const tag = el.tagName;
    if (tag === "TEXTAREA" || tag === "SELECT") return true;
    if (tag !== "INPUT") return false;
    const type = String((el as HTMLInputElement).type || "text").toLowerCase();
    return !["button", "checkbox", "radio", "file", "submit", "reset", "image", "range", "color", "hidden"].includes(type);
};

let layoutLockOrient = "";
let layoutLockW = 0;
let layoutLockH = 0;

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
    let keyboard =
        capH >= KEYBOARD_OVERLAY_PX
            ? capH
            : vkH >= KEYBOARD_OVERLAY_PX
              ? vkH
              : vvOverlap >= KEYBOARD_OVERLAY_PX
                ? vvOverlap
                : 0;
    const candidateW = Math.max(innerW, vvW);
    const candidateH = Math.max(innerH, vvH + vvTop, keyboard > 0 ? vvH + keyboard : 0);
    const orient = typeof matchMedia !== "undefined" && matchMedia("(orientation: landscape)")?.matches ? "l" : "p";
    if (orient !== layoutLockOrient) {
        layoutLockOrient = orient;
        layoutLockW = 0;
        layoutLockH = 0;
    }
    /* WHY: Android often resizes the WebView before `focusin`; a sudden height drop
     * is the IME even when `innerHeight` and `visualViewport` shrink together. */
    const suddenShrink = layoutLockH > 0 && layoutLockH - candidateH >= KEYBOARD_OVERLAY_PX;
    if (keyboard < KEYBOARD_OVERLAY_PX && suddenShrink) {
        const shrink = Math.max(0, layoutLockH - candidateH, layoutLockH - (vvH + vvTop));
        if (shrink >= KEYBOARD_OVERLAY_PX) keyboard = shrink;
    }
    const imeOpen = keyboard > 0 || isImeTarget(document.activeElement) || suddenShrink;
    if (!imeOpen) {
        layoutLockW = candidateW;
        layoutLockH = candidateH;
    } else {
        layoutLockW = Math.max(candidateW, layoutLockW);
        layoutLockH = Math.max(candidateH, layoutLockH);
    }
    return {
        width: layoutLockW || candidateW,
        height: layoutLockH || candidateH,
        keyboard
    };
};

const pinOverlayScroll = (): void => {
    if (typeof window === "undefined") return;
    if (readLayoutViewport().keyboard <= 0 && !isImeTarget(document.activeElement)) return;
    if (window.scrollY || document.documentElement.scrollTop || document.body?.scrollTop) {
        window.scrollTo(0, 0);
    }
};

//
export const getAvailSize = () => {
    ensureVirtualKeyboardOverlay();
    const l = typeof matchMedia != "undefined" ? matchMedia("(orientation: landscape)")?.matches : false;
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
        document.documentElement.toggleAttribute("data-vk-open", layout.keyboard > 0);
    }
    if (typeof screen != "undefined") {
        const aw = screen?.availWidth + "px";
        const ah = screen?.availHeight + "px";
        return {
            "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
            "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
            "--avail-width": l ? ah : aw,
            "--avail-height": l ? aw : ah,
            "--view-height": `${layout.height || Math.min(screen?.availHeight, window?.innerHeight) || 0}px`,
            "--pixel-ratio": String(devicePixelRatio || 1),
            ...vvBlock
        };
    };
    return {
        "--screen-width": 0 + "px",
        "--screen-height": 0 + "px",
        "--avail-width": 0 + "px",
        "--avail-height": 0 + "px",
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
const bindCapacitorKeyboard = (): void => {
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
    const onShow = (info?: { keyboardHeight?: number }): void => {
        const next = Number(info?.keyboardHeight) || 0;
        if (next > 0) capacitorKeyboardHeight = next;
        updateVP();
    };
    const onHide = (): void => {
        capacitorKeyboardHeight = 0;
        updateVP();
    };
    Keyboard.addListener("keyboardWillShow", onShow);
    Keyboard.addListener("keyboardDidShow", onShow);
    Keyboard.addListener("keyboardWillHide", onHide);
    Keyboard.addListener("keyboardDidHide", onHide);
};

/** Start IME / visualViewport listeners once (Process Capacitor has no SpeedDial). */
export const ensureViewportTracking = (): void => {
    if (viewportTrackingStarted || typeof window === "undefined") return;
    viewportTrackingStarted = true;
    bindCapacitorKeyboard();
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
    // @ts-ignore
    unsubscribers.push(addEvent(navigator?.virtualKeyboard, "geometrychange", update, passiveOpts));
    unsubscribers.push(addEvent(window?.visualViewport, "scroll", () => {
        pinOverlayScroll();
        update();
    }, passiveOpts));
    unsubscribers.push(addEvent(window?.visualViewport, "resize", update, passiveOpts));
    unsubscribers.push(addEvent(screen?.orientation, "change", update));
    unsubscribers.push(addEvent(window, "resize", update));
    unsubscribers.push(addEvent(document?.documentElement, "fullscreenchange", update));
    unsubscribers.push(addEvent(document, "DOMContentLoaded", update));
    unsubscribers.push(addEvent(matchMedia("(orientation: portrait)"), "change", update));
    unsubscribers.push(addEvent(matchMedia("(orientation: landscape)"), "change", update));
    unsubscribers.push(addEvent(document, "focusin", () => {
        bindCapacitorKeyboard();
        ensureVirtualKeyboardOverlay();
        if (isImeTarget(document.activeElement)) {
            layoutLockW = Math.max(layoutLockW, Number(window.innerWidth) || 0, Number(window.visualViewport?.width) || 0);
            layoutLockH = Math.max(layoutLockH, Number(window.innerHeight) || 0, Number(window.visualViewport?.height) || 0);
        }
        pinOverlayScroll();
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
