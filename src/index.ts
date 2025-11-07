// @ts-ignore
import styles from "fest/veela";

//
import { initVisibility } from "./decor/Appear";
import { loadInlineStyle, preloadStyle } from "./mixin/Style";
import { updateVP, whenAnyScreenChanges } from "./agate/Viewport";

//
export * from "./agate/Detect";
export * from "./agate/Zoom";
export * from "./agate/Utils";
export * from "./agate/Viewport";
export * from "./agate/Measure";

//
export * from "./decor/Animation";
export * from "./decor/Appear";
export * from "./decor/Canvas";
export * from "./decor/Shape";

//
export * from "./mixin/Observer";
export * from "./mixin/Style";
export * from "./mixin/Behavior";
export * from "./mixin/Mixins";
export * from "./mixin/Store";
export * from "./mixin/Handler";

//
/**
 * Initialize `@fest/dom` runtime behaviors and inject styles.
 *
 * - Preloads and clones project styles from `fest/veela` and appends them to `document.head` when attached to an HTML root.
 * - Sets up visibility decorators and viewport observers to react on screen changes.
 *
 * @param ROOT The root element to initialize against. Defaults to `document.body`.
 * @returns A promise that resolves to the appended style element (or its clone).
 */
export const initialize = async (ROOT: any = document.body)=>{
    initVisibility(ROOT);
    if (ROOT?.closest?.("html")) {
        whenAnyScreenChanges(updateVP);
    }
    return loadInlineStyle(styles);
}

//
export default initialize;
