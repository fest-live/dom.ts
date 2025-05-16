// @ts-ignore
import styles from "./$scss$/_Main.scss?inline&compress";
export const preInit = URL.createObjectURL(new Blob([styles], {type: "text/css"}));

//
import run from "./$core$/Appear";
import { updateVP, whenAnyScreenChanges } from "./$core$/Viewport";
import { loadBlobStyle } from "./$core$/Style";
const  initialize = async ()=>{
    loadBlobStyle(preInit); run();
    whenAnyScreenChanges(updateVP);
}

//
export default initialize;
export * from "./$agate$/_Utils";
export * from "./$agate$/_Detect";
export * from "./$agate$/_Zoom";
export * from "./$grid$/GridItemUtils";
export * from "./$core$/Appear";
export * from "./$core$/Canvas";
export * from "./$core$/PointerAPI";
export * from "./$core$/Observer";
export * from "./$core$/Utils";
export * from "./$core$/Style";
export * from "./$core$/Viewport";
export * from "./$core$/Measure";
export * from "./$core$/WrapEvent";
export * from "./$core$/Animation";
export * from "./$grid$/GridBox";
export * from "./$grid$/GridItemUtils";
export * from "./$grid$/Shape";
