import type { StyleTuple } from "../mixin/Style";
import { addEvent } from "./Utils";

const runWhenIdle = (cb: IdleRequestCallback, timeout = 100) => {
    if (typeof globalThis.requestIdleCallback === "function") {
        return globalThis.requestIdleCallback(cb, { timeout });
    }
    return setTimeout(() => cb({ didTimeout: false, timeRemaining: () => 0 } as IdleDeadline), 0);
};

//
export const getAvailSize = () => {
    const l = typeof matchMedia != "undefined" ? matchMedia("(orientation: landscape)")?.matches : false;
    const vv = typeof window !== "undefined" ? window.visualViewport : null;
    const vvBlock: Record<string, string> = vv
        ? {
            "--vv-width": `${vv.width}px`,
            "--vv-height": `${vv.height}px`,
            "--vv-offset-left": `${vv.offsetLeft}px`,
            "--vv-offset-top": `${vv.offsetTop}px`,
            "--vv-scale": String(vv.scale ?? 1)
        }
        : {
            "--vv-width": typeof window !== "undefined" ? `${window.innerWidth}px` : "0px",
            "--vv-height": typeof window !== "undefined" ? `${window.innerHeight}px` : "0px",
            "--vv-offset-left": "0px",
            "--vv-offset-top": "0px",
            "--vv-scale": "1"
        };
    if (typeof screen != "undefined") {
        const aw = screen?.availWidth + "px";
        const ah = screen?.availHeight + "px";
        return {
            "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
            "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
            "--avail-width": l ? ah : aw,
            "--avail-height": l ? aw : ah,
            "--view-height": (Math.min(screen?.availHeight, window?.innerHeight) + "px"),
            "--pixel-ratio": String(devicePixelRatio || 1),
            ...vvBlock
        };
    };
    return {
        "--screen-width": 0 + "px",
        "--screen-height": 0 + "px",
        "--avail-width": 0 + "px",
        "--avail-height": 0 + "px",
        "--view-height": 0 + "px",
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

    // @ts-ignore
    unsubscribers.push(addEvent(navigator?.virtualKeyboard, "geometrychange", update, passiveOpts));
    unsubscribers.push(addEvent(window?.visualViewport, "scroll", update, passiveOpts));
    unsubscribers.push(addEvent(window?.visualViewport, "resize", update, passiveOpts));
    unsubscribers.push(addEvent(screen?.orientation, "change", update));
    unsubscribers.push(addEvent(window, "resize", update));
    unsubscribers.push(addEvent(document?.documentElement, "fullscreenchange", update));
    unsubscribers.push(addEvent(document, "DOMContentLoaded", update));
    unsubscribers.push(addEvent(matchMedia("(orientation: portrait)"), "change", update));
    unsubscribers.push(addEvent(matchMedia("(orientation: landscape)"), "change", update));

    //
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
