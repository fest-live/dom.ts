/*
 * Made by o1-preview, with my rewriting, but who I am? I don't say...
 */

//
export type Point = DOMPoint;

//
export function parseOrigin(origin: string, element: Element): Point {
    const values = origin.split(' ');
    const x = parseLength(values[0], ()=>element.clientWidth);
    const y = parseLength(values[1], ()=>element.clientHeight);
    return new DOMPoint(x, y);
}

//
export function parseLength(value: string, size: ()=>number): number {
    if (value.endsWith('%')) {
        return (parseFloat(value) / 100) * size();
    }
    return parseFloat(value);
}

//
export function getOffsetParent(element: Element): Element | null {
    return (element as HTMLElement)?.offsetParent ?? (element as any)?.host;
}

//
export function getOffsetParentChain(element: Element): Element[] {
    const parents: Element[] = [];
    let current: Element | null = element;
    while (current) {
        const parent = getOffsetParent(current);

        //
        if (parent && (/*parent instanceof HTMLBodyElement ||*/ parent instanceof HTMLHtmlElement)) {
            break;
        }

        //
        if (current = parent) {
            parents.push(current);
        }
    }
    return parents;
}

//
export function getElementZoom(element: Element): number {
    let zoom = 1;
    let currentElement: Element | null = element;

    //
    while (currentElement) {
        if ('currentCSSZoom' in (currentElement as any)) {
            const currentCSSZoom = (currentElement as any).currentCSSZoom;
            if (typeof currentCSSZoom === 'number') {
                return (zoom *= currentCSSZoom);
            }
        }

        //
        const style = getComputedStyle(currentElement);
        if (style.zoom && style.zoom !== 'normal') {
            return (zoom *= parseFloat(style.zoom));
        }

        //
        if ((style.zoom && style.zoom !== 'normal') || 'currentCSSZoom' in (currentElement as any)) {
            return zoom;
        }

        //
        currentElement = (currentElement as HTMLElement)?.offsetParent ?? currentElement?.parentElement;
    }

    //
    return zoom;
}

//
export function isNearlyIdentity(matrix: DOMMatrix, epsilon: number = 1e-6): boolean {
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
export const getTransform = (el)=>{
    if (el?.computedStyleMap) {
        const styleMap = el.computedStyleMap();
        const transform = styleMap.get("transform");
        const matrix = transform?.toMatrix?.();
        if (matrix) return matrix;
    } else
    if (el) {
        const style = getComputedStyle(el);
        return new DOMMatrix(style?.getPropertyValue?.("transform"));
    }
    return new DOMMatrix();
}

//
export const getTransformOrigin = (el)=>{
    const style = getComputedStyle(el);
    const cssOrigin = style.getPropertyValue("transform-origin") || `50% 50%`;
    return parseOrigin(cssOrigin, el);
}

//
export const url = (type, ...source) => {
    return URL.createObjectURL(new Blob(source, {type}));
};

//
export const embedCSS = async (src, owner?: string, shadow: HTMLElement = document.head) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = URL.canParse(src) ? src : url(link.type, src);
    link.media = 'all';
    link.crossOrigin = "same-origin";
    if (owner) { link.dataset.owner = owner; };
    shadow?.appendChild?.(link);
    return link;
};

//
export const html = (source, type: DOMParserSupportedType = 'text/html') => {
    const parser = new DOMParser();
    const parsed = parser.parseFromString(source, type);
    return parsed.querySelector('template') ?? parsed.querySelector("*");
};

//
export const detectMobile = () => {
    //
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    return toMatch.some(navigator.userAgent.match.bind(navigator.userAgent)) && (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement) && window.matchMedia("(pointer: coarse)").matches;
};

//
export const getCorrectOrientation = () => {
    let orientationType: string = screen.orientation.type;
    if (!window.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches) {
        if (matchMedia("(orientation: portrait)").matches) {orientationType = orientationType.replace("landscape", "portrait");} else
            if (matchMedia("(orientation: landscape)").matches) {orientationType = orientationType.replace("portrait", "landscape");};
    }
    return orientationType;
};

//
export const MOC = (element: HTMLElement | null, selector: string): boolean => {
    return (!!element?.matches?.(selector) || !!element?.closest?.(selector));
};

//
export const MOCElement = (element: HTMLElement | null, selector: string): HTMLElement | null => {
    return ((!!element?.matches?.(selector) ? element : null) || element?.closest?.(selector)) as HTMLElement | null;
};

//
export const whenAnyScreenChanges = (cb)=>{
    //
    if ("virtualKeyboard" in navigator) {
        // @ts-ignore
        navigator?.virtualKeyboard?.addEventListener?.(
            "geometrychange",
            cb,
            {passive: true}
        );
    }

    //
    document.documentElement.addEventListener("DOMContentLoaded", cb, {
        passive: true,
    });
    screen.orientation.addEventListener("change", cb, {passive: true});
    matchMedia("(orientation: portrait)").addEventListener("change", cb, {passive: true});
    self.addEventListener("resize", cb, {passive: true});

    //
    window?.visualViewport?.addEventListener?.("scroll", cb);
    window?.visualViewport?.addEventListener?.("resize", cb);

    //
    document.documentElement.addEventListener("fullscreenchange", cb);

    //
    requestAnimationFrame(cb);
}
