// @ts-ignore
import styles from "./$scss$/_Main.scss?inline&compress";
export const preInit = URL.createObjectURL(new Blob([styles], {type: "text/css"}));

//
import { updateVP, whenAnyScreenChanges } from "./$core$/Viewport";
import run from "./$core$/Appear";
const  initialize = async ()=>{
    // @ts-ignore
    loadBlobStyle(preInit);
    whenAnyScreenChanges(updateVP);
    run();
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
