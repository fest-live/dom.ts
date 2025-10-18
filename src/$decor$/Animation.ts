import { setProperty } from "../$mixin$/Style";
import { isMobile } from "../$agate$/Detect";
import { addEvents } from "fest/core";

//
//const computed = Symbol("@computed");
const depAxis  = (axis: string = "x")=>{ const m = /*matchMedia("(orientation: portrait)").matches*/true; return {["x"]: m?"c":"r", ["y"]: m?"r":"c"}[axis]; }
const swapped  = (axis: string = "x")=>{ const m = matchMedia("(orientation: portrait)").matches; return {["x"]: m?"x":"y", ["y"]: m?"y":"x"}[axis]; }

//
export const animationSequence = (DragCoord = 0, ValStart: any = null, ValEnd: any = null, axis = "x") => {
    const drag = "--drag-" + swapped(axis);
    return [
        { [drag]: DragCoord || 0, ["--grid-" + depAxis(axis)]: ValStart != null ? (ValStart+1) : "var(--fp-cell-"+axis+")", }, // starting...
        { [drag]:              0, ["--grid-" + depAxis(axis)]: ValEnd   != null ? (ValEnd  +1) : "var(--fc-cell-"+axis+")" }];
};

//
export const doAnimate = async (newItem, val: number, axis: any = "x", animate = false, signal?: AbortSignal)=>{
    const swp = swapped(axis);
    const oldValue = parseInt(newItem.style.getPropertyValue("--cell-" + axis)) || 0,
          dragName = "--drag-" + swapped(axis),
          oldDrag  = parseFloat(newItem.style.getPropertyValue(dragName)) || 0;

    //
    //setProperty(newItem, "--cs-p-offset-" + swp, `${newItem?.[{"x": "offsetLeft", "y": "offsetTop"}[swp as any]] || 0}px`);
    //const oldOffset = `${newItem?.[{"x": "offsetLeft", "y": "offsetTop"}[swp as any]] || 0}px`;
    setProperty(newItem, "--p-cell-" + swp, oldValue);
    await new Promise((r)=>requestAnimationFrame(r));
    //setProperty(newItem, "--cs-p-offset-" + swp, oldOffset);

    //
    const animation = animate && !matchMedia("(prefers-reduced-motion: reduce)")?.matches ? newItem.animate(animationSequence(
        oldDrag,
        oldValue,
        val,
        axis
    ), {
        fill: "none",
        duration: 150,
        easing: "linear"
    }) : null;

    //
    let shifted = false;
    const onShift: [any, any] = [(ev)=>{
        if (!shifted) {
            shifted = true;
            //animation?.commitStyles?.();
            animation?.finish?.();
        }

        //
        newItem?.removeEventListener?.("m-dragstart", ...onShift);
        signal?.removeEventListener?.("abort", ...onShift);
    }, {once: true}];

    // not fact, but for animation
    signal?.addEventListener?.("abort", ...onShift);
    newItem?.addEventListener?.("m-dragstart", ...onShift);
    //await new Promise((r)=>requestAnimationFrame(r));
    await animation?.finished?.catch?.(console.warn.bind(console));
    delete newItem.dataset.dragging;

    //
    if (!shifted) { onShift?.[0]?.(); } // commit dragging result
    setProperty(newItem, "--p-cell-" + axis, val);
    //setProperty(newItem, "--cs-p-offset-" + swp, `${newItem?.[{"x": "offsetLeft", "y": "offsetTop"}[swp as any]] || 0}px`);
    setProperty(newItem, dragName, 0);
}

//
export const animateHide = async (target)=>{
    //
    const animationDone = ()=>{
        if (target?.hasAttribute?.("data-hidden")) {
            target?.removeAttribute?.("data-opacity-animation");
            target?.dispatchEvent?.(new CustomEvent("u2-hidden", {
                detail: {},
                bubbles: true,
                cancelable: true
            }));
        }
    }

    //
    if (target?.hasAttribute?.("data-hidden") && target?.dispatchEvent?.(new CustomEvent("u2-before-hide", {
        detail: {},
        bubbles: true,
        cancelable: true
    }))) {
        if (!matchMedia("(prefers-reduced-motion: reduce)").matches && !target.hasAttribute("data-opacity-animation") && !target.hasAttribute("data-instant")) {
            target.setAttribute("data-opacity-animation", "");
        }

        //
        if (target.hasAttribute("data-opacity-animation")) {
            const animate = target.animate([
                {
                    easing: "linear",
                    offset: 0,

                    //
                    //"--opacity": 1,
                    //"--scale": 1,
                    //display: "revert-layer",
                    pointerEvents: "none"
                },
                {
                    easing: "linear",
                    offset: 0.99,

                    //
                    "--opacity": 0,
                    "--scale": 0.8,
                    //display: "revert-layer",
                    pointerEvents: "none"
                },
                {
                    easing: "linear",
                    offset: 1,

                    //
                    "--opacity": 0,
                    "--scale": 0.8,
                    display: "none",
                    pointerEvents: "none"
                }
            ],  {
                //fill: "forwards",
                duration: 120,
                easing: "linear",
                delay: 0
                //rangeStart: "cover 0%",
                //rangeEnd: "cover 100%",
            });

            //
            let done = false;
            const endAnimation = ()=> {
                if (done) { return; }; done = true;
                events?.forEach?.((event)=>event?.());
                animate.currentTime = 1;
                animate.finish();
                animationDone?.();
            };

            //
            const abth = [endAnimation, {once: true, passive: true}];
            const abts = [endAnimation, {once: true, passive: true}];
            const events = addEvents(target, {
                "u2-before-show": abts,
                //"u2-before-hide": abth
            });

            //
            await animate.finished;
            endAnimation?.();
        } else {
            // @ts-ignore
            const {resolve, reject, promise} = Promise.withResolvers();
            const req = requestAnimationFrame(resolve);

            //
            let done = false;
            const endAnimation = ()=> {
                if (done) { return; }; done = true;
                events?.forEach?.((event)=>event?.());
                cancelAnimationFrame(req);
                resolve(performance.now());
                animationDone?.();
            };

            //
            const abth = [endAnimation, {once: true, passive: true}];
            const abts = [endAnimation, {once: true, passive: true}];
            const events = addEvents(target, { "u2-before-hide": abth, "u2-before-show": abts });

            //
            await promise;
            endAnimation?.();
        }
    }
}

//
export const animateShow = async (target)=>{
    //
    const animationDone = ()=>{
        if (!target?.hasAttribute?.("data-hidden")) {
            target?.removeAttribute?.("data-opacity-animation");
            target?.dispatchEvent?.(new CustomEvent("u2-appear", {
                detail: {},
                bubbles: true,
                cancelable: true
            }));
        }
    }

    //
    if (!target?.hasAttribute?.("data-hidden") && target?.dispatchEvent?.(new CustomEvent("u2-before-show", {
        detail: {},
        bubbles: true,
        cancelable: true
    }))) {
        //
        if (!matchMedia("(prefers-reduced-motion: reduce)").matches && !target.hasAttribute("data-opacity-animation") && !target.hasAttribute("data-instant") && target?.getAttribute?.("data-hidden") == null) {
            target.setAttribute("data-opacity-animation", "");
        }

        //
        if (target.hasAttribute("data-opacity-animation") && target?.getAttribute?.("data-hidden") == null) {
            const animate = target.animate([
                {
                    easing: "linear",
                    offset: 0,

                    //
                    "--opacity": 0,
                    "--scale": 0.8,
                    display: "none",
                    pointerEvents: "none"
                },
                {
                    easing: "linear",
                    offset: 0.01,

                    //
                    "--opacity": 0,
                    "--scale": 0.8,
                    display: "none",
                    pointerEvents: "none"
                },
                {
                    easing: "linear",
                    offset: 1,

                    //
                    "--opacity": 1,
                    "--scale": 1,
                    display: "revert-layer",
                    pointerEvents: "revert-layer"
                }
            ], {
                //fill: "forwards",
                duration: isMobile() ? 100 : 80,
                easing: "linear",
                delay: 0
                //rangeStart: "cover 0%",
                //rangeEnd: "cover 100%",
            });

            //
            let done = false;
            const endAnimation = ()=> {
                if (done) { return; }; done = true;
                events?.forEach?.((event)=>event?.());
                animate.currentTime = 1;
                animate.finish();
                animationDone?.();
            };

            //
            const abth = [endAnimation, {once: true, passive: true}];
            const abts = [endAnimation, {once: true, passive: true}];

            //
            const events = addEvents(target, {
                "u2-before-hide": abth,
                "u2-before-show": abts
            });

            //
            await animate.finished;
            endAnimation?.();
        } else {
            // @ts-ignore
            const {resolve, reject, promise} = Promise.withResolvers();
            const req = requestAnimationFrame(resolve);

            //
            let done = false;
            const endAnimation = ()=> {
                if (done) { return; }; done = true;
                events?.forEach?.((event)=>event?.());
                cancelAnimationFrame(req);
                resolve(performance.now());
                animationDone?.();
            }

            //
            const abth = [endAnimation, {once: true, passive: true}];
            const abts = [endAnimation, {once: true, passive: true}];
            const events = addEvents(target, {
                "u2-before-hide": abth,
                "u2-before-show": abts
            });

            //
            await promise;
            endAnimation?.();
        }
    }
}
