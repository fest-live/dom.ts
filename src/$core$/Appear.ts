// @ts-ignore /* @vite-ignore */
import {importCdn} from "/externals/modules/cdnImport.mjs";
export {importCdn};

// @ts-ignore
import styles from "../$scss$/_States.scss?inline&compress";

//
const initialize = async ()=>{
    // @ts-ignore
    const {observeAttributeBySelector, loadBlobStyle} = await Promise.try(importCdn, ["/externals/lib/dom.js"]);

    //
    loadBlobStyle(styles);
    observeAttributeBySelector(document.body, "*", "data-hidden", (mutation)=>{
        if (mutation.attributeName == 'data-hidden') {
            const target = mutation.target as HTMLElement;

            // TODO? legacy "false" support
            if (target.dataset.hidden !== mutation.oldValue) {
                // @ts-ignore
                Promise?.try?.(target.dataset.hidden != null ? animateHide : animateShow, target)?.catch?.(console.warn.bind(console));
            }
        }
    });
}

//
export default initialize;
