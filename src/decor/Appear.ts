import { observeAttributeBySelector } from "../mixin/Observer";
import { animateShow, animateHide } from "./Animation";

//
export const initVisibility = async (ROOT: any = document.body)=>{
    observeAttributeBySelector(ROOT, "*", "data-hidden", (mutation, observer)=>{
        if (mutation.attributeName == 'data-hidden') {
            const target = mutation.target as HTMLElement;

            // TODO? legacy "false" support
            if (target.getAttribute("data-hidden") !== mutation.oldValue) {
                // @ts-ignore
                Promise?.try?.(target.getAttribute("data-hidden") != null ? animateHide : animateShow, target, observer)?.catch?.(console.warn.bind(console));
            }
        }
    });
}

//
export default initVisibility;
