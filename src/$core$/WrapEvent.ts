import { cvt_cs_to_os } from "../$agate$/_Utils.js";
import { getBoundingOrientRect, orientOf, zoomOf } from "../$agate$/_Zoom.js";

//
export const elementPointerMap = new WeakMap<any>()

//
const withCtx = (target, got)=>{
    if (typeof got == "function") { return got?.bind?.(target) ?? got; };
    return got;
}

//
export class DecorWith {
    #addition: any;

    // needs prototype extends with Reflect
    constructor(addition) {
        this.#addition = addition;
    }

    //
    get(target, name, rec) {
        return withCtx(target, target?.[name]) ?? withCtx(this.#addition, this.#addition?.[name]);
    }

    //
    set(target, name, val) {
        if (!Reflect.set(target, name, val)) {
            this.#addition[name] = val;
        }
        return true;
    }
}

//
export const agWrapEvent = (cb)=>{

    //
    const wpb = (ev: any)=>{
        const el = (ev?.target?.matches?.("ui-orientbox") ? ev.target : null) || ev?.target?.closest?.("ui-orientbox");
        if (!el) { return cb(ev); }; //

        //
        let {pointerCache, pointerMap} = elementPointerMap?.get?.(el) || { pointerCache: new Map<number, any>(), pointerMap: new Map<number, any>() };

        //
        const zoom: number = zoomOf(ev?.target || el) || 1;
        const coord: [number, number] = [(ev?.clientX || 0) / zoom, (ev?.clientY || 0) / zoom];
        const cache: any = pointerCache?.get?.(ev?.pointerId || 0) || {
            client: coord,
            orient: null,
            boundingBox: null,
            movement: [0, 0]
        };

        //
        if (!elementPointerMap?.get?.(el)) {
            elementPointerMap?.set?.(el, { pointerMap, pointerCache });
        }

        //
        cache.delta = [cache.client[0], cache.client[1]];
        cache.orient = null;
        cache.client = coord;

        //
        const pointer = pointerMap?.get?.(ev?.pointerId || 0) || {
            type: (ev?.type||"pointer"),
            event: ev,
            target: ev?.target || el,
            cs_box: el?.size,
            cap_element: null,
            pointerType: ev?.pointerType || "mouse",
            pointerId: ev?.pointerId || 0,

            //
            get client() { return cache.client; },
            get orient() { return cache.orient ??= cvt_cs_to_os([...pointer.client] as [number, number], el?.size, orientOf(ev.target || el) || 0); },
            //get movement() { return cvt_rel_cs_to_os([cache.client[0] - cache.delta[0], cache.client[1] - cache.delta[1]], orientOf(ev.target || el) || 0); },
            get movement() { return [cache.client[0] - cache.delta[0], cache.client[1] - cache.delta[1]]; },
            get boundingBox() { return (cache.boundingBox ??= getBoundingOrientRect(ev?.target || el, orientOf(ev.target || el) || 0)); },

            //
            capture(element = ev?.target || el) { return (pointer.cap_element = element?.setPointerCapture?.(ev?.pointerId || 0)); },
            release(element = null) {
                (element || pointer.cap_element || ev?.target || el)?.releasePointerCapture?.(ev?.pointerId || 0);
                pointer.cap_element = null;
            },
        };

        //
        Object.assign(pointer, {
            type: (ev?.type||"pointer"),
            event: ev,
            target: ev?.target || el,
            cs_box: el?.size,
            pointerId: ev?.pointerId || 0
        });

        //
        if (!pointerMap?.has?.(ev?.pointerId || 0)) {
            pointerMap?.set?.(ev?.pointerId || 0, pointer);
            pointerCache?.set?.(ev?.pointerId || 0, cache);
        };

        //
        if (ev?.type == "contextmenu" || ev?.type == "click" || ev?.type == "pointerup" || ev?.type == "pointercancel") {
            pointerMap?.delete?.(ev?.pointerId || 0);
            pointerCache?.delete?.(ev?.pointerId || 0);
            if (ev?.type == "pointercancel") {
                pointer?.release?.();
            }
        };

        //
        if (pointer && ev) { return cb(new Proxy(ev, new DecorWith(pointer))); };
    }

    //
    return wpb;
};
