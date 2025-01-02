//
const OWNER = "DOM";
const styleElement = document.createElement("style");
document.querySelector("head")?.appendChild?.(styleElement);
styleElement.dataset.owner = OWNER;

//
export type StyleTuple = [selector: string, sheet: object];
export const setStyleRule = (selector: string, sheet: object) => {
    const styleRules = styleElement.sheet;
    let ruleId = Array.from(styleRules?.cssRules || []).findIndex((rule) => (rule instanceof CSSStyleRule ? (selector == rule?.selectorText) : false));
    if (ruleId <= -1) {ruleId = styleRules?.insertRule(`${selector} {}`) as number;}

    //
    const rule = styleElement?.sheet?.cssRules[ruleId];
    Object.entries(sheet).forEach(([propName, propValue]) => {
        if (rule instanceof CSSStyleRule) {
            const exists = rule?.style?.getPropertyValue(propName);
            if (!exists || exists != propValue) {
                rule?.style?.setProperty?.(propName, (propValue || "") as string, "");
            }
        }
    });
};

//
export const setStyleRules = (classes: StyleTuple[]) => {
    return classes?.map?.((args) => setStyleRule(...args));
};

//
const setStyleURL = (base: [any, any], url: string)=>{
    //
    if (base[1] == "innerHTML") {
        base[0][base[1]] = `@import url("${url}");`;
    } else {
        base[0][base[1]] = url;
    }
};

//
const hash = async (string: string) => {
    const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(string));
    return "sha256-" + btoa(String.fromCharCode.apply(null, new Uint8Array(hashBuffer) as unknown as number[]));
};

//
const loadStyleSheet = async (inline: string, base?: [any, any], integrity?: string|Promise<string>)=>{
    const url = URL.canParse(inline) ? inline : URL.createObjectURL(new Blob([inline], {type: "text/css"}));
    if (base?.[0] && (!URL.canParse(inline) || integrity) && base?.[0] instanceof HTMLLinkElement) {
        const I: any = (integrity ?? hash(inline));
        if (typeof I?.then == "function") {
            I?.then?.((H)=>base?.[0]?.setAttribute?.("integrity", H));
        } else {
            base?.[0]?.setAttribute?.("integrity", I as string);
        }
    }
    if (base) setStyleURL(base, url);
};

//
export const loadBlobStyle = (inline: string)=>{
    const style = document.createElement("link");
    style.rel = "stylesheet";
    style.type = "text/css";
    style.crossOrigin = "same-origin";
    style.dataset.owner = OWNER;
    loadStyleSheet(inline, [style, "href"]);
    document.head.appendChild(style);
    return style;
};

//
export const loadInlineStyle = (inline: string, rootElement = document.head)=>{
    const PLACE = (rootElement.querySelector("head") ?? rootElement);
    if (PLACE instanceof HTMLHeadElement) { loadBlobStyle(inline); }

    //
    const style = document.createElement("style");
    style.dataset.owner = OWNER;
    loadStyleSheet(inline, [style, "innerHTML"]);
    PLACE.appendChild(style);
};
