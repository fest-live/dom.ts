import { setProperty } from "../mixin/Style";
import { isMobile } from "../agate/Detect";
import { addEvents } from "../agate/Utils";

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
