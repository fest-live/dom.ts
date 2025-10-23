import type { StyleTuple } from "../$mixin$/Style";
import { addEvent } from "./Utils";

//
export const getAvailSize = () => {
    const l = typeof matchMedia != "undefined" ? matchMedia("(orientation: landscape)")?.matches : false;
    if (typeof screen != "undefined") {
        const aw = screen?.availWidth + "px";
        const ah = screen?.availHeight + "px";
        return {
            "--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
            "--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
            "--avail-width": l ? ah : aw,
            "--avail-height": l ? aw : ah,
            "--view-height": (Math.min(screen?.availHeight, window?.innerHeight) + "px"),
            "--pixel-ratio": devicePixelRatio || 1,
        };
    };
    return {
        "--screen-width": 0 + "px",
        "--screen-height": 0 + "px",
        "--avail-width": 0 + "px",
        "--avail-height": 0 + "px",
        "--view-height": 0 + "px",
        "--pixel-ratio": 1,
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
    document.documentElement.style.setProperty("--secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}

//
export const getCorrectOrientation = () => {
    let orientationType: string = screen.orientation.type;
    if (!window.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches) {
        if (matchMedia("(orientation: portrait)").matches) {orientationType = orientationType.replace("landscape", "portrait");} else
            if (matchMedia("(orientation: landscape)").matches) {orientationType = orientationType.replace("portrait", "landscape");};
    }
    return orientationType;
};

//
const passiveOpts = { passive: true };

//
export const whenAnyScreenChanges = (cb) => {
    const unsubscribers: any[] = [];

    // @ts-ignore
    unsubscribers.push(addEvent(navigator?.virtualKeyboard, "geometrychange", cb, passiveOpts));
    unsubscribers.push(addEvent(window?.visualViewport, "scroll", cb, passiveOpts));
    unsubscribers.push(addEvent(window?.visualViewport, "resize", cb, passiveOpts));
    unsubscribers.push(addEvent(screen?.orientation, "change", cb));
    unsubscribers.push(addEvent(window, "resize", cb));
    unsubscribers.push(addEvent(document?.documentElement, "fullscreenchange", cb));
    unsubscribers.push(addEvent(document, "DOMContentLoaded", cb));
    unsubscribers.push(addEvent(matchMedia("(orientation: portrait)"), "change", cb));

    //
    requestAnimationFrame(cb);
    requestIdleCallback(cb, { timeout: 100 });
    return () => unsubscribers.forEach((unsub) => unsub());
};

//
export const fixOrientToScreen = (element)=>{
    if (!element?.classList?.contains?.("native-portrait-optimized")) {
        element?.classList?.add?.("native-portrait-optimized");
        return whenAnyScreenChanges(()=>{
            element.orient = orientationNumberMap?.[getCorrectOrientation()] || 0;
        });
    }
}
