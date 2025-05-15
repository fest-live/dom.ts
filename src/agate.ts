//
export type StyleTuple = [selector: string, sheet: object];

// @ts-ignore /* @vite-ignore */
import {importCdn} from "/externals/modules/cdnImport.mjs";
export {importCdn};

//
import { updateVP } from "./$core$/Viewport";
import { availSize } from "./$core$/Viewport";
import { agWrapEvent } from "./$agate$/sw/WrapEvent";
export * from "./$core$/PointerAPI";

//
export const classes: StyleTuple[] = [
    [":root, :host, :scope", availSize]
];

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
export const whenAnyScreenChanges = (cb)=>{
    //
    if ("virtualKeyboard" in navigator) {
        // @ts-ignore
        navigator?.virtualKeyboard?.addEventListener?.(
            "geometrychange",
            cb,
            {passive: true}
        );
    }

    //
    self?.addEventListener("resize", cb, { passive: true });
    window?.visualViewport?.addEventListener?.("scroll", cb);
    window?.visualViewport?.addEventListener?.("resize", cb);
    screen?.orientation.addEventListener("change", cb, { passive: true });
    document?.documentElement.addEventListener("DOMContentLoaded", cb, {passive: true });
    document?.documentElement.addEventListener("fullscreenchange", cb, {passive: true });
    matchMedia("(orientation: portrait)").addEventListener("change", cb, {passive: true });
    requestIdleCallback(cb, {timeout: 100});
    requestAnimationFrame(cb);
    //cb();
};

// @ts-ignore
import styles from "./scss/_Main.scss?inline&compress";
export const preInit = URL.createObjectURL(new Blob([styles], {type: "text/css"}));

//
const initialize = async ()=>{
    // @ts-ignore
    const {loadBlobStyle} = await Promise.try(importCdn, ["/externals/lib/dom.js"]);

    //
    loadBlobStyle(preInit);
    whenAnyScreenChanges(updateVP);
};

//
//export { UIOrientBox, UIGridBoxElement };
export default initialize;

//
export const orientationNumberMap = {
    "portrait-primary": 0, // as 0deg, aka. 360deg
    "landscape-primary": 1, // as -90deg, aka. 270deg
    "portrait-secondary": 2, // as -180deg, aka. 180deg
    "landscape-secondary": 3 // as -270deg, aka. 90deg
}

//
export const fixOrientToScreen = (element)=>{
    if (!element?.classList?.contains?.("native-portrait-optimized")) {
        element?.classList?.add?.("native-portrait-optimized");
        whenAnyScreenChanges(()=>{
            const orient = orientationNumberMap?.[getCorrectOrientation()] || 0;
            element.orient = orient;
        });
    }
}

//
export * from "./$agate$/_Utils";
export * from "./$agate$/_Detect";
export * from "./$agate$/_Zoom";

//
export * from "../../ui.system/src/$ext$/gridbox/TrackingSystem";
export * from "../../ui.system/src/$ext$/gridbox/GridItemUtils";

//
export {agWrapEvent};
