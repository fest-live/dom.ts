import { agWrapEvent } from "./WrapEvent";

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
    propertyName?: string;
    shifting?: [number, number];
    modified?: [number, number];
    element?: WeakRef<HTMLElement>;
}

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
export const pointerMap = new Map([]);
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
    const filterStrength = 100;
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
    const hasParent = (current, parent)=>{
        while (current) {
            if (current === parent) return true;
            current = current.parentElement;
        }
    }

    //
    const moveEvent = [agWrapEvent((evc)=>{
        if (ex?.pointerId == evc?.pointerId) {
            if (evc.target != em && !hasParent(evc.target, em)) { return; };

            //
            evc?.preventDefault?.();
            evc?.stopPropagation?.();
            evc?.stopImmediatePropagation?.();

            //
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
            hm.duration = computeDuration();
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
                detail: {
                    event: (last = evc),
                    holding: hm,
                },
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
    } else {
        hm.canceled = true;
    }

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
