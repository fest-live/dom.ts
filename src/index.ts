// @ts-ignore
import styles from "./index.scss?inline&compress";

//
import { initVisibility } from "./$decor$/Appear";
import { loadInlineStyle, preloadStyle } from "./$mixin$/Style";
import { updateVP, whenAnyScreenChanges } from "./$agate$/Viewport";

//
export * from "./$agate$/Convert";
export * from "./$agate$/Detect";
export * from "./$agate$/Zoom";
export * from "./$agate$/Utils";
export * from "./$agate$/Viewport";
export * from "./$agate$/Measure";
export * from "./$agate$/PointerAPI";

//
export * from "./$decor$/Animation";
export * from "./$decor$/Appear";
export * from "./$decor$/Canvas";
export * from "./$decor$/Shape";

//
export * from "./$mixin$/Observer";
export * from "./$mixin$/Style";
export * from "./$mixin$/Behavior";
export * from "./$mixin$/Mixins";
export * from "./$mixin$/Store";
export * from "./$mixin$/Handler";

//
export * from "./$grid$/GridItemUtils";

//@ts-ignore
import $fonts from "fonts/inter.css?inline";
loadInlineStyle($fonts);

//
const styled = preloadStyle(styles);

//
export const initialize = async (ROOT: any = document.body)=>{
    initVisibility(ROOT);
    const styleElement = styled?.cloneNode?.(true);
    if (ROOT?.closest?.("html")) {
        whenAnyScreenChanges(updateVP);
        document?.head?.append(styleElement);
    }
    return styleElement;
}

//
export default initialize;
