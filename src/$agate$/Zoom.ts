import { cvt_cs_to_os } from "fest/core";
import { borderBoxHeight, borderBoxWidth, contentBoxHeight, contentBoxWidth } from "./Utils";

//
export const getZoom = ()=>{
    const zoomSupport = "currentCSSZoom" in document.documentElement;
    // @ts-ignore
    if (zoomSupport) { return ((document.documentElement.currentCSSZoom as number) || 1); }
    return parseFloat(document.documentElement.style.getPropertyValue("--scaling") || "1") || 1;
}

//
const zoomValues = new WeakMap<HTMLElement, number>();

//
export const zoomOf = (element = document.documentElement) => {
    // @ts-ignore
    return zoomValues.getOrInsertComputed(element, ()=>{
        // getting zoom performance broken...
        const container: any = ((element?.matches?.(".ui-orientbox") ? element : null) || element?.closest?.(".ui-orientbox") || document.body) as HTMLElement;

        // get software zoom value
        if (container?.zoom) {
            return (container?.zoom || 1);
        }

        // get and cache zoom value
        // @ts-ignore
        if (element?.currentCSSZoom) {
            // @ts-ignore
            return element?.currentCSSZoom || 1;
        }
    });
}

//
export const changeZoom = (scale = 1) => {
    document.documentElement.style.setProperty("--scaling", scale as unknown as string);
    document.documentElement.dispatchEvent(new CustomEvent("scaling", {
        detail: {zoom: scale},
        bubbles: true,
        cancelable: true
    }));
    return scale;
}

//
export const fixedClientZoom = (element = document.documentElement)=>{
    // @ts-ignore
    return ((element?.currentCSSZoom != null ? 1 : zoomOf(element))) || 1;
}

//
export const unfixedClientZoom = (element = document.documentElement)=>{
    // @ts-ignore
    return ((element?.currentCSSZoom == null ? 1 : element?.currentCSSZoom)) || 1;
}

//
export const orientOf = (element = document.documentElement) => {
    // legacy browser
    const container: any = ((element?.matches?.("[orient]") ? element : null) || element?.closest?.("[orient]") || element);
    if (container?.hasAttribute?.("orient")) return parseInt(container?.getAttribute?.("orient") || "0") || 0;
    return (container?.orient || 0);
}

//
export const getBoundingOrientRect = (element, orient: number|null|undefined = null)=>{
    const zoom = unfixedClientZoom(element) || 1;
    const box = element?.getBoundingClientRect?.();
    const nbx = {
        left: box?.left / zoom,
        right: box?.right / zoom,
        top: box?.top / zoom,
        bottom: box?.bottom / zoom,
        width: box?.width / zoom,
        height: box?.height / zoom,
    };

    //
    const or_i: number = orient ?? (orientOf(element) || 0);
    const size: [number, number] = [document.body.clientWidth / zoom, document.body.clientHeight / zoom];
    const [left_, top_] = cvt_cs_to_os([nbx.left, nbx.top], size, or_i);
    const [right_, bottom_] = cvt_cs_to_os([nbx.right, nbx.bottom], size, or_i);

    //
    const [left, right] = (or_i==0 || or_i==3) ? [left_, right_] : [right_, left_];
    const [top, bottom] = (or_i==0 || or_i==1) ? [top_, bottom_] : [bottom_, top_];

    //
    const [width, height] = (or_i%2) ? [nbx.height, nbx.width] : [nbx.width, nbx.height];
    return { left, top, right, bottom, width, height };
}

//
export const bbw    = (el, orient = null)=> ((orient??orientOf(el))%2 ? (el[borderBoxHeight] ?? el?.clientHeight) : (el[borderBoxWidth] ?? el?.clientWidth));
export const bbh    = (el, orient = null)=> ((orient??orientOf(el))%2 ? (el[borderBoxWidth] ?? el?.clientWidth) : (el[borderBoxHeight] ?? el?.clientHeight));
export const cbw    = (el, orient = null)=> ((orient??orientOf(el))%2 ? (el[contentBoxHeight] ?? el?.clientHeight) : (el[contentBoxWidth] ?? el?.clientWidth));
export const cbh    = (el, orient = null)=> ((orient??orientOf(el))%2 ? (el[contentBoxWidth] ?? el?.clientWidth) : (el[contentBoxHeight] ?? el?.clientHeight));
