//
export const getOffsetParent = (element: Element): Element | null => { return (element as HTMLElement)?.offsetParent ?? (element as any)?.host; }
export const getOffsetParentChain = (element: Element): Element[] => {
    const parents: Element[] = []; let current: Element | null = element;
    while (current) {
        const parent = getOffsetParent(current);
        if (parent && (parent instanceof HTMLHtmlElement)) { break; }
        if (current = parent) { parents.push(current); }
    }
    return parents;
}

//
export const handleListeners = (root, fn, handlers) => { root = (root instanceof WeakRef ? root.deref() : root); Object.entries(handlers).forEach(([name, cb]) => root?.[fn]?.call?.(root, name, cb)); }
export const isNearlyIdentity = (matrix: DOMMatrix, epsilon: number = 1e-6): boolean => {
    return (
        Math.abs(matrix.a - 1) < epsilon &&
        Math.abs(matrix.b) < epsilon &&
        Math.abs(matrix.c) < epsilon &&
        Math.abs(matrix.d - 1) < epsilon &&
        Math.abs(matrix.e) < epsilon &&
        Math.abs(matrix.f) < epsilon
    );
}

/**
 * Starts/stops a requestAnimationFrame async scheduler loop.
 * All scheduled cbs will be run after each rAF.
 * @returns {{
 *     canceled: boolean,
 *     rAFs: Set<Function>,
 *     last: any,
 *     cancel: () => any,
 *     shedule: (cb: Function) => any
 * }}
 */
export const makeRAFCycle = () => {
    const control: any = {
        canceled: false,
        rAFs: new Set<any>(),
        last: null,
        cancel() { this.canceled = true; cancelAnimationFrame(this.last); return this; },
        shedule(cb: any) { this.rAFs.add(cb); return this; }
    };
    (async () => {
        while (!control?.canceled) { // @ts-ignore
            await Promise.all((control?.rAFs?.values?.() ?? [])?.map?.((rAF) => Promise.try(rAF)?.catch?.(console.warn.bind(console)))); control.rAFs?.clear?.();
            await new Promise((res) => { control.last = requestAnimationFrame(res); });
        }
    })();
    return control;
};

/**
 * Produces a "rAF behavior" callback, which defers calls via requestAnimationFrame cycle
 * @param {Function} cb function to call
 * @param {ReturnType<typeof makeRAFCycle>} [shed]
 * @returns {Function}
 */
export const RAFBehavior = (shed = makeRAFCycle()) => {
    return (cb)=>shed.shedule(cb);
}

//
export interface InteractStatus { pointerId?: number; };
export const ROOT = document.documentElement;
export const setAttributesIfNull = (element, attrs = {})=>{
    return Array.from(Object.entries(attrs)).map(([name, value])=>{
        const old = element.getAttribute(name);
        if (value == null) {
            element.removeAttribute(name);
        } else {
            element.setAttribute(name, old == "" ? (value ?? old) : (old ?? value));
        }
    });
}

//
export const setAttributes = (element, attrs = {})=>{
    return Array.from(Object.entries(attrs)).map(([name, value])=>{
        if (value == null) {
            element.removeAttribute(name);
        } else {
            element.setAttribute(name, value ?? element.getAttribute(name));
        }
    });
}

//
export const throttleMap = new Map<string, any>();
export const setIdleInterval = (cb, timeout = 1000, ...args)=>{
    requestIdleCallback(async ()=>{
        if (!cb || (typeof cb != "function")) return;
        while (true) {
            // @ts-ignore
            await Promise.try(cb, ...args);
            await new Promise((r)=>setTimeout(r, timeout));
            await new Promise((r)=>requestIdleCallback(r, {timeout: 100}));
            await new Promise((r)=>requestAnimationFrame(r));
        }
    }, {timeout: 1000});
}

//
requestIdleCallback(async ()=>{
    while (true) {
        throttleMap.forEach((cb)=>cb?.());
        await new Promise((r)=>requestIdleCallback(r));
    }
}, {timeout: 1000});

//
export const MOCElement = (element: HTMLElement | null, selector: string): HTMLElement | null => { return ((!!element?.matches?.(selector) ? element : null) || element?.closest?.(selector)) as HTMLElement | null; };
export const MOC  = (element: HTMLElement | null, selector: string): boolean => { return (!!element?.matches?.(selector) || !!element?.closest?.(selector)); };

//
export const clamp  = (min, val, max) => Math.max(min, Math.min(val, max));
export const UUIDv4 = () => { return crypto?.randomUUID ? crypto?.randomUUID() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c => (+c ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))).toString(16)); };
export const includeSelf = (target, selector)=>{ return (target.querySelector(selector) ?? (target.matches(selector) ? target : null)); };

//
export const borderBoxWidth   = Symbol("@border-box-width") , borderBoxHeight  = Symbol("@border-box-height");
export const contentBoxWidth  = Symbol("@content-box-width"), contentBoxHeight = Symbol("@content-box-height");
export const onBorderObserve  = new WeakMap<HTMLElement, ResizeObserver>();
export const onContentObserve = new WeakMap<HTMLElement, ResizeObserver>();
export const doContentObserve = (element, cb: any = ()=>{}) => {
    if (!(element instanceof HTMLElement)) return;
    if (!onContentObserve.has(element)) {
        element[contentBoxWidth]  = (element.clientWidth );
        element[contentBoxHeight] = (element.clientHeight);

        //
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.contentBoxSize) {
                    const contentBoxSize = entry.contentBoxSize[0];
                    if (contentBoxSize) {
                        element[contentBoxWidth]  = Math.min(contentBoxSize.inlineSize, element.clientWidth);
                        element[contentBoxHeight] = Math.min(contentBoxSize.blockSize, element.clientHeight);
                        cb?.(element);
                    }
                }
            }
        });

        //
        onContentObserve.set(element, observer);
        observer.observe((element as any)?.element ?? element, {box: "content-box"});
    }
};

//
export const doBorderObserve = (element, cb: any = ()=>{}) => {
    if (!(element instanceof HTMLElement)) return;
    if (!onBorderObserve.has(element)) {
        element[borderBoxWidth]  = element.offsetWidth;
        element[borderBoxHeight] = element.offsetHeight;
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.borderBoxSize) {
                    const borderBoxSize = entry.borderBoxSize[0];
                    if (borderBoxSize) {
                        element[borderBoxWidth]  = Math.min(borderBoxSize.inlineSize, element.offsetWidth);
                        element[borderBoxHeight] = Math.min(borderBoxSize.blockSize, element.offsetHeight);
                        cb?.(element);
                    }
                }
            }
        });

        //
        onBorderObserve.set(element, observer);
        observer.observe((element as any)?.element ?? element, {box: "border-box"});
    }
}

//
export const blockClickTrigger = (_: MouseEvent | PointerEvent | TouchEvent | null = null)=>{
    const blocker = (ev)=>{
        ev.preventDefault();
        ev.stopPropagation();
        ev.stopImmediatePropagation();

        //
        ROOT.removeEventListener("click", blocker, options);
        ROOT.removeEventListener("contextmenu", blocker, options);
    };

    //
    const options = { once: true, capture: true };
    ROOT.addEventListener("click", blocker, options);
    ROOT.addEventListener("contextmenu", blocker, options);

    //
    setTimeout(()=>{
        ROOT.removeEventListener("click", blocker, options);
        ROOT.removeEventListener("contextmenu", blocker, options);
    }, 100);
}

//
export const camelToKebab = (str: string) => { return str?.replace?.(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(); }
export const kebabToCamel = (str: string) => { return str?.replace?.(/-([a-z])/g, (_, char) => char.toUpperCase()); }

//
export const url  = (type: string, ...source: any[]) => { return URL.createObjectURL(new Blob(source, {type})); };
export const html = (source: string, type: DOMParserSupportedType = 'text/html') => {
    const parsed  = (new DOMParser()).parseFromString(source, type);
    return parsed.querySelector('template') ?? parsed.querySelector("*");
};
