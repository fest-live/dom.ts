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

//
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
            if (typeof requestAnimationFrame != "undefined") {
                await new Promise((res) => { control.last = requestAnimationFrame(res); });
            } else {
                await new Promise((res) => { setTimeout(res, 16); });
            }
        }
    })();
    return control;
};

//
export const RAFBehavior = (shed = makeRAFCycle()) => {
    return (cb)=>shed.shedule(cb);
}

//
export interface InteractStatus { pointerId?: number; };
export const ROOT = typeof document != "undefined" ? document?.documentElement : null;
export const setAttributesIfNull = (element, attrs = {})=>{
    if (!attrs || (typeof attrs != "object") || !element) return;
    return Array.from(Object.entries(attrs)).map(([name, value])=>{
        const old = element.getAttribute(name);
        if (value == null) {
            element.removeAttribute(name);
        } else
        if (value != old) {
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
    const status = { running: true, cancel: ()=>{ status.running = false; } };
    requestIdleCallback(async ()=>{
        if (!cb || (typeof cb != "function")) return;
        while (status.running) {
            await Promise.all([ // @ts-ignore
                Promise.try(cb, ...args),
                new Promise((r)=>setTimeout(r, timeout))
            ]).catch?.(console.warn.bind(console));

            //
            await Promise.any([
                new Promise((r)=>requestIdleCallback(r, { timeout })),
                new Promise((r)=>setTimeout(r, timeout))
                //new Promise((r)=>requestAnimationFrame(r))
            ]);
        }
        status.cancel = ()=>{};
    }, {timeout});
    return status?.cancel;
}

//
if (typeof requestAnimationFrame != "undefined") {
    requestAnimationFrame(async () => {
        while (true) {
            throttleMap.forEach((cb) => cb?.());
            await new Promise((r) => requestAnimationFrame(r));
        }
    });
}

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
export const url  = (type: string, ...source: any[]) => { return URL.createObjectURL(new Blob(source, {type})); };
export const html = (source: string, type: DOMParserSupportedType = 'text/html') => {
    const parsed  = (new DOMParser()).parseFromString(source, type);
    return parsed.querySelector('template') ?? parsed.querySelector("*");
};

//
export const setChecked = (input: HTMLInputElement, value: boolean, ev?: any)=>{
    if (value && input.checked != value) {
        if (input?.['type'] == "checkbox" || (input?.['type'] == "radio" && !input?.checked)) { input?.click?.(); ev?.preventDefault?.(); } else {
            input.checked = !!value;
            input?.dispatchEvent?.(new Event("change", { bubbles: true, cancelable: true, }));
        }
    }
}
