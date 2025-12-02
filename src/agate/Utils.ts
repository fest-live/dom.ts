import { isArrayOrIterable } from "fest/core";

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
    if (value != null && input.checked != value) {
        if (
            (input?.['type'] == "checkbox") ||
            (input?.['type'] == "radio" && !input?.checked)
        ) { input?.click?.(); ev?.preventDefault?.(); } else {
            input.checked = !!value;
            input?.dispatchEvent?.(new Event("change", { bubbles: true, cancelable: true, }));
        }
    }
}



//
export const isValidParent = (parent: Node | null) => {
    return (parent != null && parent instanceof HTMLElement && !(parent instanceof DocumentFragment || parent instanceof HTMLBodyElement)) ? parent : null;
}

//
export const indexOf = (element: Node | null, node: Node | null) => {
    if (element == null || node == null) return -1;
    return Array.from(element?.childNodes ?? [])?.indexOf?.((node as ChildNode)) ?? -1;
}

//
export const
    MATCH = '(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)',
    REGEX = '^(?:' + MATCH + ')|^#' + MATCH + '|^\\.' + MATCH + '|^\\[' + MATCH + '(?:([*$|~^]?=)(["\'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]';

//
export const createElementVanilla = (selector): HTMLElement | DocumentFragment => {
    if (selector == ":fragment:") return document.createDocumentFragment();
    const create = document.createElement.bind(document);
    for (var node: any = create('div'), match, className = ''; selector && (match = selector.match(REGEX));) {
        if (match[1]) node = create(match[1]);
        if (match[2]) node.id = match[2];
        if (match[3]) className += ' ' + match[3];
        if (match[4]) node.setAttribute(match[4], match[7] || '');
        selector = selector.slice(match[0].length);
    }
    if (className) node.className = className.slice(1);
    return node;
};

//
export const isElement = (el: any) => { return el != null && (el instanceof Node || el instanceof Text || el instanceof Element || el instanceof Comment || el instanceof HTMLElement || el instanceof DocumentFragment) ? el : null; }
export const includeSelf = (target: HTMLElement, selector: string) => { return (target.querySelector(selector) ?? (target.matches(selector) ? target : null)); }
export const hasParent = (current: any, parent: any) => { while (current) { if (!(current?.element ?? current)) { return false; }; if ((current?.element ?? current) === (parent?.element ?? parent)) return true; current = current.parentElement ?? (current.parentNode == current?.getRootNode?.({ composed: true }) ? current?.getRootNode?.({ composed: true })?.host : current?.parentNode); } }
export const passiveOpts = {};

//
export function addEvent(target, type, cb, opts: any = passiveOpts): any {
    target?.addEventListener?.(type, cb, opts);
    const wr = (typeof target == "object" || typeof target == "function" && !target?.deref) ? new WeakRef(target) : target;
    return () => wr?.deref?.()?.removeEventListener?.(type, cb, opts);
    //return () => target?.removeEventListener?.(type, cb, opts);
}

//
export function removeEvent(target, type, cb, opts: any = passiveOpts): any {
    target?.removeEventListener?.(type, cb, opts);
}

// add events by map of [name, cb] in 'handlers'
// where cb is Function or [Function, options]
export const addEvents = (root, handlers) => {
    root = (root instanceof WeakRef ? root.deref() : root); // @ts-ignore
    return [...Object.entries(handlers)]?.map?.(([name, cb]) => (Array.isArray(cb) ? addEvent(root, name, ...cb as any) : addEvent(root, name, cb)));
}

// add events by map of [name, cbs[]] in 'events'
// where cb of cbs[] is Function or [Function, options]
// however, [Function, options] not implemented yet
export const addEventsList = (el, events) => {
    if (events) {
        let entries: any[] = events;
        if (events instanceof Map) {
            entries = [...events.entries()];
        } else {
            entries = [...Object.entries(events)];
        }
        return entries.map(([name, list]) => ((isArrayOrIterable(list) ? [...list as any] : list) ?? [])?.map?.((cbs)=>{
            return addEvent(el, name, cbs)
        }));
    }
}

//
export const removeEvents = (root, handlers) => {
    root = (root instanceof WeakRef ? root.deref() : root); // @ts-ignore
    return [...Object.entries(handlers)]?.map?.(([name, cb]) => (Array.isArray(cb) ? removeEvent(root, name, ...cb as any) : removeEvent(root, name, cb)));
}

//
// Get the actual target element from an event, considering shadow DOM boundaries
export const getEventTarget = (ev: Event | any): HTMLElement | Element | null => {
    if (!ev) return null;

    // Use composedPath() for shadow DOM compatibility
    if (ev?.composedPath && typeof ev.composedPath === 'function') {
        const path = ev.composedPath();
        // Return the first element in the path (the actual target)
        for (const node of path) {
            if (node instanceof HTMLElement || node instanceof Element) {
                return node as HTMLElement;
            }
        }
    }

    // Fallback to target property
    const target = ev?.target;
    if (target instanceof HTMLElement || target instanceof Element) {
        return target;
    }

    return null;
};

//
export const containsOrSelf = (a: any, b: any, ev?: Event)=>{
    if (b == null || !(b instanceof Node) && b?.element == null) return false; // if isn't node with element or just null
    if ((a == b)  || (a?.element ?? a) == (b?.element ?? b)) return true; // wrapper or element is same

    // Use composedPath() for shadow DOM compatibility if event is provided
    if (ev?.composedPath && typeof ev.composedPath === 'function') {
        const path = ev.composedPath();
        const aEl = a?.element ?? a;
        const bEl = b?.element ?? b;
        if (path.includes(aEl) && path.includes(bEl)) {
            // Check if b appears before a in the path (b is deeper/child of a)
            const aIndex = path.indexOf(aEl);
            const bIndex = path.indexOf(bEl);
            if (bIndex >= 0 && aIndex >= 0 && bIndex < aIndex) return true;
        }
    }

    if (a?.contains?.(b?.element ?? b) || a?.getRootNode({ composed: true })?.host == (b?.element ?? b)) return true; // a contains b element
    return false;
}

// get by selector self or parent, matches by selector, include shadow DOM host
export const MOCElement = (element: HTMLElement | null, selector: string, ev?: Event): HTMLElement | null => {
    // Use composedPath() for shadow DOM compatibility if event is provided
    if (ev?.composedPath && typeof ev.composedPath === 'function') {
        const path = ev.composedPath();
        // Search through the composed path for matching elements
        for (const node of path) {
            if (node instanceof HTMLElement || node instanceof Element) {
                if ((node as HTMLElement).matches?.(selector)) {
                    return node as HTMLElement;
                }
            }
        }
    }

    const self = (element?.matches?.(selector) ? element : null);
    const host = (element?.getRootNode({ composed: true }) as any ?? element?.parentElement?.getRootNode({ composed: true}) as any)?.host;
    const hostMatched = host?.matches?.(selector) ? host : null;
    const closest = (element as any)?.closest?.(selector) ?? (self as any)?.closest?.(selector) ?? (hostMatched as any)?.closest?.(selector) ?? null;
    return (self ?? closest ?? hostMatched);
};

//
export const MOC = (element: HTMLElement | null, selector: string): boolean => { return !!MOCElement(element, selector); };

//
export const isInFocus = (element: HTMLElement | null, selectorOrElement?: string | HTMLElement, dir: "parent" | "child" = "parent"): boolean => {
    if (!element) return false;

    // Visibility Check (if supported, otherwise basic offsetParent)
    // @ts-ignore
    if (element.checkVisibility && !element.checkVisibility({ checkOpacity: true, checkVisibilityCSS: true })) return false;
    // @ts-ignore
    if (!element.checkVisibility && element.offsetParent === null && element.style.position !== 'fixed') return false;

    // Deep Active Element Resolution
    let active = document.activeElement;
    while (active && active.shadowRoot && active.shadowRoot.activeElement) {
        active = active.shadowRoot.activeElement;
    }

    // Interaction Status
    const isFocused = (active === element) || hasParent(active, element);
    const isHovered = element.matches(":hover");

    // Top-most check for hover (optional, but requested "elementFromPoint")
    // Only worth checking if hovered but not focused, to see if it's occluded?
    // Skipping expensive rect calc for now unless strictly needed, :hover is usually reliable for CSS pointer-events.

    if (!isFocused && !isHovered && !selectorOrElement) return false;

    // Constraints
    if (selectorOrElement) {
        if (typeof selectorOrElement === "string") {
            if (dir === "parent") {
                // Does the element (or its context) match the selector?
                return !!MOCElement(element, selectorOrElement);
            } else {
                // Does the interaction target inside match the selector?
                const target = isFocused ? active : (element.querySelector(":hover") || element);
                const altCnd = !!MOCElement(target as HTMLElement, selectorOrElement);
                return (element?.querySelector?.(selectorOrElement) != null || element?.matches?.(selectorOrElement) || altCnd);
            }
        } else if (selectorOrElement instanceof HTMLElement) {
             if (dir === "parent") {
                 return hasParent(element, selectorOrElement) || false;
             } else {
                 return hasParent(selectorOrElement, element) || false;
             }
        }
    }

    return true;
}
