// @ts-ignore /* @vite-ignore */
import {importCdn} from "/externals/modules/cdnImport.mjs";
export {importCdn};

//
export * from "./$agate$/_Utils";
export * from "./$agate$/_Detect";
export * from "./$agate$/_Zoom";

//
export * from "./$grid$/GridItemUtils";

// @ts-ignore
import styles from "./$scss$/_Module.scss?inline&compress";

// @ts-ignore
export const preInit = URL.createObjectURL(new Blob([styles], {type: "text/css"}));

//
import { updateVP, whenAnyScreenChanges } from "./$core$/Viewport";
import run from "./$core$/Appear";
export * from "./$core$/Appear";
export * from "./$core$/Canvas";
export * from "./$core$/PointerAPI";
export * from "./$core$/FieldSet";
export * from "./$core$/Observer";
export * from "./$core$/Utils";
export * from "./$core$/Style";

//
const initialize = async ()=>{
    // @ts-ignore
    loadBlobStyle(styles);
    whenAnyScreenChanges(updateVP);
    run();
}
export default initialize;
