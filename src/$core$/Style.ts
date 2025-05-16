//
const OWNER = "DOM", styleElement = document.createElement("style"); document.querySelector("head")?.appendChild?.(styleElement); styleElement.dataset.owner = OWNER;
export type StyleTuple = [selector: string, sheet: object];
export const setStyleURL = (base: [any, any], url: string, layer: string = "")=>{ base[0][base[1]] = (base[1] == "innerHTML") ? `@import url("${url}") ${layer && (typeof layer == "string") ? `layer(${layer})` : ""};` : url; };
export const setStyleRules = (classes: StyleTuple[]) => { return classes?.map?.((args) => setStyleRule(...args)); };
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
export const hash = async (string: string|ArrayBuffer|Blob|File) => {
    const hashBuffer = await crypto.subtle.digest('SHA-256', typeof string == "string" ? new TextEncoder().encode(string) : (string instanceof ArrayBuffer ? string : (await ((string as any)?.arrayBuffer?.()))));
    return "sha256-" + btoa(String.fromCharCode.apply(null, new Uint8Array(hashBuffer) as unknown as number[]));
};

//
export const loadStyleSheet = async (inline: string|File|Blob, base?: [any, any], layer: string = "", integrity?: string|Promise<string>)=>{
    const url: string|null = URL.canParse(inline as string) ? (inline as string) : URL.createObjectURL((inline instanceof Blob || inline instanceof File) ? inline : new Blob([inline], {type: "text/css"}));
    if (base?.[0] && (!URL.canParse(inline as string) || integrity) && base?.[0] instanceof HTMLLinkElement) {
        const I: any = (integrity ?? (typeof inline == "string" ? hash(inline) : null));
            if (typeof I?.then == "function") { I?.then?.((H)=>base?.[0]?.setAttribute?.("integrity", H)); } else
            if (I) { base?.[0]?.setAttribute?.("integrity", I as string); }
    }
    if (base && url) setStyleURL(base, url, layer);
};

//
export const loadBlobStyle = (inline: string)=>{ const style = document.createElement("link"); Object.assign(style, {rel: "stylesheet", type: "text/css", crossOrigin: "same-origin" }); style.dataset.owner = OWNER; loadStyleSheet(inline, [style, "href"]); document.head.append(style); return style; };
export const loadInlineStyle = (inline: string, rootElement = document.head, layer: string = "")=>{
    const PLACE = (rootElement?.querySelector("head") ?? rootElement); if (PLACE instanceof HTMLHeadElement) { return loadBlobStyle(inline); }
    const style = document.createElement("style"); style.dataset.owner = OWNER; loadStyleSheet(inline, [style, "innerHTML"], layer); PLACE?.prepend?.(style); return style;
};
