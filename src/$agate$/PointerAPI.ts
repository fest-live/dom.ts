import { cvt_cs_to_os } from "./Convert";
import { getBoundingOrientRect, orientOf } from "./Zoom";

//
const withCtx = (target, got)=>{ if (typeof got == "function") { return got?.bind?.(target) ?? got; }; return got; }

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
export const elementPointerMap = new WeakMap<any, any>();
export const agWrapEvent = (cb)=>{

    //
    const wpb = (ev: any)=>{
        const el = (ev?.target?.matches?.(".ui-orientbox") ? ev?.target : null) || ev?.target?.closest?.(".ui-orientbox");
        if (!el) { return cb(ev); }; //

        // @ts-ignore
        let {pointerCache, pointerMap} = elementPointerMap?.getOrInsert?.(el, { pointerCache: new Map<number, any>(), pointerMap: new Map<number, any>() });

        //const zoom: number = zoomOf(ev?.target || el) || 1;
        const coord: [number, number] = [(ev?.layerX || 0), (ev?.layerY || 0)];
        const cache: any = pointerCache?.getOrInsert?.(ev?.pointerId || 0, {
            client: coord,
            orient: null,
            boundingBox: null,
            movement: [0, 0]
        });

        //
        cache.delta  = [coord[0] - cache.client[0], coord[1] - cache.client[1]];
        cache.orient = null, cache.client = coord;

        //
        const pointer = pointerMap?.getOrInsert?.(ev?.pointerId || 0, {
            type: (ev?.type||"pointer"),
            event: ev,
            target: ev?.target || el,
            cs_box: [el?.offsetWidth || 1, el?.offsetHeight || 1],
            cap_element: null,
            pointerType: ev?.pointerType || "mouse",
            pointerId: ev?.pointerId || 0,

            //
            get client() { return cache.client; },
            get orient() { return cache.orient ??= cvt_cs_to_os([...(pointer.client || cache.client)] as [number, number], [el?.offsetWidth || 1, el?.offsetHeight || 1], orientOf(ev.target || el) || 0); },
            get movement() { return [cache.delta[0] || 0, cache.delta[1] || 0]; },
            get boundingBox() { return (cache.boundingBox ??= getBoundingOrientRect(ev?.target || el, orientOf(ev.target || el) || 0)); },

            //
            capture(element = ev?.target || el) { return (pointer.cap_element = element?.setPointerCapture?.(ev?.pointerId || 0)); },
            release(element = null) {
                (element || pointer.cap_element || ev?.target || el)?.releasePointerCapture?.(ev?.pointerId || 0);
                pointer.cap_element = null;
            },
        });

        //
        Object.assign(pointer, {
            type: (ev?.type||"pointer"),
            event: ev,
            target: ev?.target || el,
            cs_box: [el?.offsetWidth || 1, el?.offsetHeight || 1],
            pointerId: ev?.pointerId || 0
        });

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
    down?: [number, number],
    event?: MouseEvent | PointerEvent | EvStub;
    edges?: PointerEdge;
    current: [number, number],
    holding?: HoldingElement[];
    movement: [number, number];
};

//
const clickPrevention = (element, pointerId = 0)=>{
    const removeEvents = ()=>{
        document.documentElement.removeEventListener("click", ...doc);
        document.documentElement.removeEventListener("pointerdown", ...doc);
        document.documentElement.removeEventListener("contextmenu", ...doc);

        //
        element?.removeEventListener?.("click", ...emt);
        element?.removeEventListener?.("contextmenu", ...emt);
        element?.removeEventListener?.("pointerdown", ...emt);
    }

    //
    const preventClick = (e: PointerEvent | MouseEvent | CustomEvent | any) => {
        if (e?.pointerId == pointerId || e?.pointerId == null || pointerId == null || pointerId < 0) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault();
            removeEvents();
        }
    };

    //
    const emt: [(e: PointerEvent | MouseEvent | CustomEvent | any) => any, AddEventListenerOptions] = [preventClick, {once: true}];
    const doc: [(e: PointerEvent | MouseEvent | CustomEvent | any) => any, AddEventListenerOptions] = [preventClick, {once: true, capture: true}];

    //
    document.documentElement.addEventListener("click"      , ...doc); element?.addEventListener?.("click"      , ...emt);
    document.documentElement.addEventListener("pointerdown", ...doc); element?.addEventListener?.("pointerdown", ...emt);
    document.documentElement.addEventListener("contextmenu", ...doc); element?.addEventListener?.("contextmenu", ...emt);
    setTimeout(removeEvents, 100);
}



//
export const draggingPointerMap = new WeakMap<any, any>();
export const grabForDrag = async (
    em,
    ex: any = {pointerId: 0},
    {
        shifting = [0, 0],
        result   = [{value: 0}, {value: 0}]
    } = {}
) => {
    let last: any = ex?.detail || ex;
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
    const hasParent = (current, parent)=>{ while (current) { if (current === parent) return true; current = current.parentElement ?? (current.parentNode == current.getRootNode() ? current.parentNode : null); } }
    const moveEvent = [agWrapEvent((evc)=>{
        if (ex?.pointerId == evc?.pointerId) {
            if (evc.target != em && !hasParent(evc?.target?.element || evc?.target, em?.element || em)) { return; };

            //
            evc?.preventDefault?.();
            evc?.stopPropagation?.();
            evc?.stopImmediatePropagation?.();

            //
            const client = [...(evc?.client  || [evc?.layerX || 0, evc?.layerY || 0] || [0, 0])]; hm.duration = computeDuration();
            hm.movement  = [...(hm.client ? [client?.[0] - (hm.client?.[0] || 0), client?.[1] - (hm.client?.[1] || 0)] : [0, 0])];
            hm.client    = client;
            hm.shifting[0] +=  hm.movement[0] || 0                   , hm.shifting[1] +=  hm.movement[1] || 0;
            hm.modified[0]  = (hm.shifting[0] ?? hm.modified[0]) || 0, hm.modified[1]  = (hm.shifting[1] ?? hm.modified[1]) | 0;

            //
            em?.dispatchEvent?.(new CustomEvent("m-dragging", {
                bubbles: true,
                detail: {
                    event: (last = evc),
                    holding: hm,
                },
            }));

            //
            if (hm?.result?.[0] != null) hm.result[0].value = hm.modified[0] || 0;
            if (hm?.result?.[1] != null) hm.result[1].value = hm.modified[1] || 0;
            if (hm?.result?.[2] != null) hm.result[2].value = 0;
        }
    }), {capture: true}];

    // @ts-ignore
    const promised = Promise.withResolvers();
    const releaseEvent = [agWrapEvent((evc)=>{
        if (ex?.pointerId == evc?.pointerId) {
            if (hm.canceled) return; hm.canceled = true;
            em?.removeEventListener?.("pointermove", ...moveEvent);
            em?.removeEventListener?.("pointercancel", ...releaseEvent);
            em?.removeEventListener?.("pointerup", ...releaseEvent);
            em?.removeEventListener?.("click", ...releaseEvent);
            em?.releaseCapturePointer?.(evc?.pointerId); //evc?.release?.(em);

            //
            if (evc.target != em && !hasParent(evc.target?.element || evc.target, em?.element || em)) { return; };

            //
            clickPrevention(em, evc?.pointerId);
            em?.dispatchEvent?.(new CustomEvent("m-dragend", {
                bubbles: true,
                detail: { event: (last = evc), holding: hm },
            }));

            //
            promised.resolve(result);
        }
    }), {capture: true}];

    //
    if (em?.dispatchEvent?.(new CustomEvent("m-dragstart", { bubbles: true, detail: { event: last, holding: hm }}))) {
        //ex?.capture?.(em);
        em?.setPointerCapture?.(ex?.pointerId);
        em?.addEventListener?.("pointermove", ...moveEvent);
        em?.addEventListener?.("pointercancel", ...releaseEvent);
        em?.addEventListener?.("pointerup", ...releaseEvent);
        em?.addEventListener?.("click", ...releaseEvent);
    } else { hm.canceled = true; }

    //
    return promised?.promise ?? result;
};

//
export const bindDraggable = (elementOrEventListener, onEnd:any = ()=>{}, draggable: any|null = [{value: 0}, {value: 0}], shifting: any = [0, 0])=>{
    if (!draggable) { return; }
    const process = (ev, el)=>grabForDrag(el ?? elementOrEventListener, ev, {result: draggable, shifting: typeof shifting == "function" ? shifting?.() : shifting})?.then?.(onEnd);

    //
    if (typeof elementOrEventListener?.addEventListener == "function") { elementOrEventListener.addEventListener("pointerdown", process); } else
    if (typeof elementOrEventListener == "function")  { elementOrEventListener(process); } else
    { throw new Error("bindDraggable: elementOrEventListener is not a function or an object with addEventListener"); }

    //
    const dispose = ()=>{ if (typeof elementOrEventListener?.removeEventListener == "function") { elementOrEventListener.removeEventListener("pointerdown", process); } };
    return { draggable, dispose, process };
}
