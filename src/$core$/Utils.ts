/*
 * Made by o1-preview, with my rewriting, but who I am? I don't say...
 */

//
export type Point = DOMPoint;

//
export const getPxValue = (element, name)=>{
    if ("computedStyleMap" in element) {
        const cm = element?.computedStyleMap();
        return cm.get(name)?.value || 0;
    } else {
        const cs = getComputedStyle(element, "");
        return (parseFloat(cs.getPropertyValue(name)?.replace?.("px", "")) || 0);
    }
}

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
export const MOC = (element: HTMLElement | null, selector: string): boolean => { return (!!element?.matches?.(selector) || !!element?.closest?.(selector)); };
export const MOCElement = (element: HTMLElement | null, selector: string): HTMLElement | null => { return ((!!element?.matches?.(selector) ? element : null) || element?.closest?.(selector)) as HTMLElement | null; };
export const url = (type, ...source) => { return URL.createObjectURL(new Blob(source, {type})); };
export const html = (source, type: DOMParserSupportedType = 'text/html') => {
    const parser = new DOMParser();
    const parsed = parser.parseFromString(source, type);
    return parsed.querySelector('template') ?? parsed.querySelector("*");
};
