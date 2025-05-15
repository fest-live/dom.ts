import Q2 from "./$utils$/Query2";
export * from "./$utils$/FieldSet";
export * from "./$utils$/Observer";
export * from "./$utils$/Query2";
export * from "./$utils$/Utils";
export * from "./$utils$/Style";
//export default Q2;

// @ts-ignore
import styles from "./$scss$/_Module.scss?inline&compress";

// @ts-ignore /* @vite-ignore */
import {importCdn} from "/externals/modules/cdnImport.mjs";
export {importCdn};

//
const initialize = async ()=>{
    // @ts-ignore
    const {loadBlobStyle} = await Promise.try(importCdn, ["/externals/lib/dom.js"]);
    loadBlobStyle(styles);
}
export default initialize;

//
/*

export * from "./$core$/Appear";
import run from "./$core$/Appear";
export default run;
*/
//
//import "./$scss$/_States.scss";
