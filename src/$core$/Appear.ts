import { observeAttributeBySelector } from "./Observer";
import { animateShow, animateHide } from "./Animation";

//
export const initialize = async ()=>{
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
