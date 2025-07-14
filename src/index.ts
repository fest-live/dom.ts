// @ts-ignore
import styles from "./$scss$/_Main.scss?inline&compress";
export const preInit = URL.createObjectURL(new Blob([styles], {type: "text/css"}));

//
import run from "./$decor$/Appear";
import { updateVP, whenAnyScreenChanges } from "./$agate$/Viewport";
import { loadBlobStyle } from "./$mixin$/Style";

//
const initialize = async ()=>{
    loadBlobStyle(preInit); run();
    whenAnyScreenChanges(updateVP);
};

//
export default initialize;

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
export * from "./$mixin$/Queried";
export * from "./$mixin$/WRef";

//
export * from "./$grid$/GridBox";
export * from "./$grid$/GridItemUtils";
