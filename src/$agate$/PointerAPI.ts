import { cvt_cs_to_os } from "./Convert.js";
import { getBoundingOrientRect, orientOf, zoomOf } from "./Zoom.js";

//
const withCtx = (target, got)=>{ if (typeof got == "function") { return got?.bind?.(target) ?? got; }; return got; }

//
export const elementPointerMap = new WeakMap<any>()
export const pointerMap = new Map([]);

//
export class DecorWith {
    #addition: any;

    // needs prototype extends with Reflect
    constructor(addition) { this.#addition = addition; }
    get(target, name, rec) { return withCtx(target, target?.[name]) ?? withCtx(this.#addition, this.#addition?.[name]); }
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

//
class PointerEdge {
    pointer: [number, number] = [0, 0];
    results: any;

    //
    constructor(pointer: [number, number] = [0, 0]) {
        this.pointer = pointer;
        this.results = { left: false, top: false, bottom: false, right: false };
    }

    //
    get left() { const current = Math.abs(this.pointer[0] - 0) < 10; return (this.results.left = current); }
    get top () { const current = Math.abs(this.pointer[1] - 0) < 10; return (this.results.top  = current); }
    get right () { const current = Math.abs(this.pointer[0] - window.innerWidth)  < 10; return (this.results.right  = current); }
    get bottom() { const current = Math.abs(this.pointer[1] - window.innerHeight) < 10; return (this.results.bottom = current); }
}

//
interface EvStub { pointerId: number; }
interface HoldingElement {
    shifting?: [number, number];
    modified?: [number, number];
    element?: WeakRef<HTMLElement>;
    result?: [any, any];
}

//
interface PointerObject {
    id: number;
    movement: [number, number];
    down?: [number, number],
    current: [number, number],
    event?: MouseEvent | PointerEvent | EvStub;
    holding?: HoldingElement[];
    edges?: PointerEdge;
};

//
const clickPrevention = (element, pointerId = 0)=>{
    //
    const preventClick = (e: PointerEvent | MouseEvent | CustomEvent | any) => {
        // @ts-ignore
        if (e?.pointerId == pointerId) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();

            //
            document.documentElement.removeEventListener("click", ...doc);
            document.documentElement.removeEventListener("contextmenu", ...doc);

            //
            element?.removeEventListener?.("click", ...emt);
            element?.removeEventListener?.("contextmenu", ...emt);
        }
    };

    //
    const emt: [(e: PointerEvent | MouseEvent | CustomEvent | any) => any, AddEventListenerOptions] = [preventClick, {once: true}];
    const doc: [(e: PointerEvent | MouseEvent | CustomEvent | any) => any, AddEventListenerOptions] = [preventClick, {once: true, capture: true}];

    //
    {
        document.documentElement.addEventListener("click", ...doc);
        document.documentElement.addEventListener("contextmenu", ...doc);
    }

    {   //
        element?.addEventListener?.("click", ...emt);
        element?.addEventListener?.("contextmenu", ...emt);
    }

    //
    setTimeout(() => {
        element?.removeEventListener?.("click", ...emt);
        element?.removeEventListener?.("contextmenu", ...emt);

        //
        document.documentElement.removeEventListener("click", ...doc);
        document.documentElement.removeEventListener("contextmenu", ...doc);
    }, 100);
}

//
export const grabForDrag = async (
    em,
    ex: any = {pointerId: 0},
    {
        shifting = [0, 0],
        result = [{value: 0}, {value: 0}]
    } = {}
) => {
    let last: any = ex?.detail || ex;
    let changed: boolean = false;
    let frameTime = 0.01, lastLoop = performance.now(), thisLoop;
    const filterStrength  = 100;
    const computeDuration = () => {
        var thisFrameTime = (thisLoop=performance.now()) - lastLoop;
        frameTime += (thisFrameTime - frameTime) / filterStrength;
        lastLoop = thisLoop;
        return frameTime;
    }

    //
    const hm: any = {
        result,
        movement: [...(ex?.movement || [0, 0])],
        shifting: [...shifting],
        modified: [...shifting],
        canceled: false,
        duration: frameTime,
        element: new WeakRef(em),
        client: null///[0, 0]
    };

    //
    const hasParent = (current, parent)=>{ while (current) { if (current === parent) return true; current = current.parentElement; } }
    const moveEvent = [agWrapEvent((evc)=>{
        if (ex?.pointerId == evc?.pointerId) {
            if (evc.target != em && !hasParent(evc.target, em)) { return; };

            //
            evc?.preventDefault?.();
            evc?.stopPropagation?.();
            evc?.stopImmediatePropagation?.();

            //
            hm.duration = computeDuration();
            hm.movement = [...(ex?.movement || (hm.client ? [evc.client[0] - hm.client[0], evc.client[1] - hm.client[1]] : hm.movement))];
            hm.client   = [...(evc?.client || [evc?.clientX || 0, evc?.clientY || 0] || [0, 0])];
            hm.shifting[0] += hm.movement[0], hm.shifting[1] += hm.movement[1];
            hm.modified[0]  = hm.shifting[0], hm.modified[1]  = hm.shifting[1];
            changed = true;

            //
            em?.dispatchEvent?.(new CustomEvent("m-dragging", {
                bubbles: true,
                detail: {
                    event: (last = evc),
                    holding: hm,
                },
            }));
        }
    }), {capture: true}];

    //
    const releaseEvent = [agWrapEvent((evc)=>{
        if (ex?.pointerId == evc?.pointerId) {
            changed = false;

            //
            if (hm.canceled) return; hm.canceled = true;
            em?.removeEventListener?.("pointermove", ...moveEvent);
            em?.removeEventListener?.("pointercancel", ...releaseEvent);
            em?.removeEventListener?.("pointerup", ...releaseEvent);
            em?.removeEventListener?.("click", ...releaseEvent);
            em?.releaseCapturePointer?.(evc?.pointerId);
            evc?.release?.(em);

            //
            if (evc.target != em && !hasParent(evc.target, em)) { return; };

            //
            clickPrevention(em, evc?.pointerId);
            em?.dispatchEvent?.(new CustomEvent("m-dragend", {
                bubbles: true,
                detail: { event: (last = evc), holding: hm },
            }));
        }
    }), {capture: true}];

    //
    if (em?.dispatchEvent?.(new CustomEvent("m-dragstart", { bubbles: true, detail: { event: last, holding: hm }}))) {
        ex?.capture?.(em);
        em?.setPointerCapture?.(ex?.pointerId);
        em?.addEventListener?.("pointermove", ...moveEvent);
        em?.addEventListener?.("pointercancel", ...releaseEvent);
        em?.addEventListener?.("pointerup", ...releaseEvent);
        em?.addEventListener?.("click", ...releaseEvent);
    } else { hm.canceled = true; }

    //
    (async ()=>{
        while (!hm.canceled) {

            //
            if (changed && hm?.result) {
                changed = false;
                if (hm?.result?.[0]) hm.result[0].value = hm.modified[0] || 0;
                if (hm?.result?.[1]) hm.result[1].value = hm.modified[1] || 0;
                if (hm?.result?.[2]) hm.result[2].value = 0;
            }

            //
            await new Promise((r)=>requestAnimationFrame(r));
        }
    })();
};
