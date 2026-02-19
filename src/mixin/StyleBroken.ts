import { camelToKebab, hasValue, isValidNumber, tryStringAsNumber } from "fest/core";

//
const OWNER = "DOM",
    styleElement = typeof document != "undefined" ? document.createElement("style") : null;

//
if (styleElement) {
    typeof document != "undefined" ? document.querySelector("head")?.appendChild?.(styleElement) : null; styleElement.dataset.owner = OWNER;
}

//
export type  StyleTuple    = [selector: string, sheet: object];
export const setStyleURL   = (base: [any, any], url: string, layer: string = "")=>{ base[0][base[1]] = (base[1] == "innerHTML") ? `@import url("${url}") ${layer && (typeof layer == "string") ? `layer(${layer})` : ""};` : url; };
export const setStyleRules = (classes: StyleTuple[]) => { return classes?.map?.((args) => setStyleRule(...args)); };
export const getStyleLayer = (layerName, sheet?)=>{
    sheet ||= styleElement?.sheet;

    // Ищем или создаём @layer
    let layerRuleIndex = Array.from(sheet?.cssRules || []).findIndex((rule) => (rule instanceof CSSLayerBlockRule) && rule?.name === layerName);
    let layerRule;

    // Создаём пустой слой
    if (layerRuleIndex === -1 && sheet)
        { layerRule = sheet?.cssRules?.[layerRuleIndex = sheet.insertRule(`@layer ${layerName} {}`)]; } else
        { layerRule = sheet?.cssRules?.[layerRuleIndex]; }

    //
    return layerRule;
}

//
export const getStyleRule = (selector, sheet?, layerName: string|null = "ux-query", basis: any = null) => {
    const root = basis instanceof ShadowRoot ? basis : (basis?.getRootNode ? basis.getRootNode({ composed: true }) : typeof document != "undefined" ? document.documentElement : null);

    // Making element defined for CSS query
    const uqid = (root instanceof ShadowRoot || root instanceof HTMLDocument) ? "" : (basis?.getAttribute?.("data-style-id") || (typeof crypto != "undefined" ? crypto?.randomUUID?.() : ""));
    const usel = root instanceof HTMLDocument ? ":root" : (root instanceof ShadowRoot ? ":host" : `[data-style-id="${uqid}"]`);
    basis?.setAttribute?.("data-style-id", uqid);

    //
    let $styleElement: any;// = styleElement;
    if (root instanceof ShadowRoot) {
        if (!($styleElement = root.querySelector('style'))) {
            $styleElement = typeof document != "undefined" ? document.createElement('style[data-ux-query]') : null;
            $styleElement.setAttribute('data-ux-query', '');
            root.appendChild($styleElement);
        }
    } else { $styleElement = styleElement; }

    //
    sheet ||= $styleElement?.sheet || sheet;

    //
    if (!layerName) {
        let ruleId = Array.from(sheet?.cssRules || []).findIndex((rule) => rule instanceof CSSStyleRule && rule.selectorText?.trim?.()?.endsWith?.(selector?.trim?.() ?? ""));
        if (ruleId === -1 && sheet) { ruleId = sheet?.insertRule?.(`${usel || ""} ${selector}`?.trim?.() + " {}"); }
        return sheet?.cssRules?.[ruleId];
    }

    //
    return getStyleRule(selector, getStyleLayer(layerName, sheet), null, basis);
};

//
const isStyleValue = (val: any) => (typeof CSSStyleValue !== "undefined" && val instanceof CSSStyleValue);
const isUnitValue = (val: any) => (typeof CSSUnitValue !== "undefined" && val instanceof CSSUnitValue);

//
const setPropertyIfNotEqual = (styleRef?: any | null, kebab?: string, value?: any, importance = "") => {
    if (!styleRef || !kebab) return styleRef;
    if (value != null) {
        const old = styleRef?.getPropertyValue?.(kebab);
        if (old == null || old !== value || old == "") {
            styleRef?.setProperty?.(kebab, value, importance);
        }
    } else if (styleRef?.getPropertyValue?.(kebab) != null) {
        styleRef?.removeProperty?.(kebab);
    }
    return styleRef;
}

//
export const setStyleProperty = (element?: any|null, name?: string, value?: any, importance = "")=>{
    if (!element || !name) return element;

    //
    const kebab = camelToKebab(name || "");
    let val: any = (hasValue(value)) ? value?.value : value;
    if (typeof val == "string" && !isStyleValue(val)) { val = tryStringAsNumber(val) ?? val; }

    //
    const styleRef = element?.style;
    const styleMapRef = element?.attributeStyleMap ?? element?.styleMap;
    if (!(styleRef || styleMapRef)) return element;

    //
    if (isStyleValue(val)) {
        if (styleMapRef != null) {
            const old = styleMapRef?.get?.(kebab);
            if (old != val) {
                if (isUnitValue(val) && (isUnitValue(old) && val.unit !== old.unit)) {
                    if (old.value != val.value) { old.value = val.value; }
                } else {
                    styleMapRef?.set?.(kebab, val);
                }
            }
        } else {
            setPropertyIfNotEqual(styleRef, kebab, String(val), importance);
        }
    } else
        if (styleMapRef && isValidNumber(val)) {
            const old = styleMapRef?.get?.(kebab);
            if (old != null) {
                if (isUnitValue(old)) {
                    if (old?.value != val) { old.value = val; }
                } else {
                    setPropertyIfNotEqual(styleRef, kebab, String(val), importance);
                }
            } else { // hard-case
                const computed = (!kebab?.trim?.()?.startsWith?.("--")) ? element?.computedStyleMap?.() : styleMapRef;
                const oldCmVal = computed?.get?.(kebab) ?? computed?.getPropertyValue?.(kebab);
                if (isUnitValue(oldCmVal)) {
                    if (oldCmVal.value != val && oldCmVal.unit == "number") { oldCmVal.value = val; }
                    { try { styleMapRef?.set?.(kebab, oldCmVal); } catch (e) { styleMapRef?.set?.(kebab, oldCmVal?.toString?.()); } }
                } else
                { setPropertyIfNotEqual(styleRef, kebab, String(val), importance); }
            }
        } else
        {
            setPropertyIfNotEqual(styleRef, kebab, (isStyleValue(val) ? val.toString() : String(val)), importance);
        }
    return element;
}

//
export const setStyleInRule = (selector: string, name: string, value: any) => {
    return setStyleProperty(getStyleRule(selector), name, value);
};

//
export const setStyleRule = (selector: string, sheet: object) => {
    const rule = getStyleRule(selector);
    Object.entries(sheet).forEach(([propName, propValue]) => setStyleProperty(rule, propName, propValue));
    return rule;
};

//
export const hash = async (string: string|ArrayBuffer|Blob|File) => {
    const hashBuffer = await crypto?.subtle?.digest('SHA-256', typeof string == "string" ? new TextEncoder().encode(string) : (string instanceof ArrayBuffer ? string : (await ((string as any)?.arrayBuffer?.()))));
    return "sha256-" + btoa(String.fromCharCode.apply(null, new Uint8Array(hashBuffer) as unknown as number[]));
};

//
const promiseOrDirect = (promise: any|Promise<any>, cb: (...args: any[]) => any) => {
    if (typeof promise?.then == "function") { return promise?.then?.(cb); }
    return cb(promise);
}


//
const blobURLMap = new WeakMap<Blob | File, string>();
const cacheMap = new Map<string, string>();
export const fetchAndCache = (url: string | Blob | File) => {
    if (!url) return null;

    //
    if (url instanceof Blob || (url as any) instanceof File) {
        if (blobURLMap.has(url as Blob | File)) { return blobURLMap.get(url as Blob | File); }
        const blob = URL.createObjectURL(url as Blob | File);
        blobURLMap.set(url as Blob | File, blob);
        return blob;
    }

    //
    if (cacheMap.has(url as string)) { return cacheMap.get(url as string); }

    console.log(url);
    if (URL.canParse(url as string)) {
        return fetch(new URL(url as string, import.meta.url).href, { cache: "force-cache", mode: "same-origin" })?.then?.(async (res: Response) => {
            const blob = await res.blob();
            blob?.text?.()?.then?.(console.log.bind(console));

            const burl = URL.createObjectURL(blob);
            blobURLMap.set(blob as Blob | File, burl);
            cacheMap.set(url as string, burl);
            cacheMap.set(burl as string, burl);
            return burl;
        });
    }

    //
    if (typeof url == "string") {
        const blob = new Blob([url], { type: "text/css" });
        const burl = URL.createObjectURL(blob);
        blobURLMap.set(blob as Blob | File, burl);
        cacheMap.set(url as string, burl);
        cacheMap.set(burl as string, burl);
        return burl;
    }

    //
    return url as string;
}

//
export const loadStyleSheet = (inline: string | File | Blob, base?: [any, any], layer: string = "", integrity?: string | Promise<string>) => { // @ts-ignore
    const load = fetchAndCache(inline);

    //
    if (base?.[0] && typeof inline == "string" && URL.canParse(inline)) {
        setStyleURL(base, inline, layer);
        base?.[0].setAttribute("loaded", "");
        return base?.[0];
    }

    //
    if (base?.[0] && (typeof inline != "string" || integrity) && base?.[0] instanceof HTMLLinkElement) {
        const I: any = null;//(integrity ?? (typeof inline == "string" ? hash(inline) : null));
        //if (typeof I?.then == "function") { I?.then?.((H) => base?.[0]?.setAttribute?.("integrity", H)); } else
            //if (I) { base?.[0]?.setAttribute?.("integrity", I as string); }
    }

    //
    promiseOrDirect(load, (res?: any | null) => {
        if (base?.[0] && res) {
            setStyleURL(base, (res instanceof Blob || (res as any) instanceof File) ? blobURLMap.get(res as Blob | File) ?? URL.createObjectURL(res as Blob | File) : res as string, layer);
                base?.[0].setAttribute("loaded", "");
            }
        })?.catch?.((error: any) => { console.warn("Failed to load style sheet:", error); });
    return base?.[0];
};

//
export const loadBlobStyle = (inline: string|Blob|File) => {
    const style = typeof document != "undefined" ? document.createElement("link") : null;
    if (style) {
        Object.assign(style, { rel: "stylesheet", type: "text/css", crossOrigin: "same-origin" });
        style.dataset.owner = OWNER;
        loadStyleSheet(
            (inline instanceof Blob || (inline as any) instanceof File) ? inline : new Blob([inline],
            { type: "text/css" }),
            [style, "href"]
        );
        typeof document != "undefined" ? document.head.append(style) : null;
        return style;
    };
    return null;
};

//
export const loadInlineStyle = (inline: string|Blob|File, rootElement: any = typeof document != "undefined" ? document?.head : null, layer: string = "") => {
    //if (!rootElement) return;
    const PLACE = (rootElement?.querySelector?.("head") ?? rootElement); if (typeof HTMLHeadElement != "undefined" && PLACE instanceof HTMLHeadElement) { return loadBlobStyle((inline instanceof Blob || (inline as any) instanceof File) ? inline : new Blob([inline], { type: "text/css" })); } // @ts-ignore
    const style = typeof document != "undefined" ? document.createElement("style") : null; if (style) {
        style.dataset.owner = OWNER;
        loadStyleSheet(inline as string | Blob | File, [style, "innerHTML"], layer);
        PLACE?.prepend?.(style); return style;
    }
    return null;
};

//
export const setProperty = (target, name, value, importance = "")=>{
    return setStyleProperty(target, name, value, importance);
}

//
export const preloadStyle = (styles: string|Blob|File)=>{
    return loadInlineStyle(styles, null, "");
};

//
export type Point = DOMPoint;
export const parseOrigin = (origin: string, element: Element): Point => { const values = origin.split(' '); return new DOMPoint(parseLength(values[0], () => element.clientWidth), parseLength(values[1], () => element.clientHeight)); } // @ts-ignore
export const parseLength = (value: string, size: ()=>number): number => { if (value.endsWith('%')) { return (parseFloat(value) / 100) * size(); }; return parseFloat(value); }

//
export const getTransform = (el)=>{
    if (el?.computedStyleMap) {
        const styleMap = el.computedStyleMap(), transform = styleMap.get("transform"), matrix = transform?.toMatrix?.();
        if (matrix) return matrix;
    } else
        // @ts-ignore
    if (el) { const style = getComputedStyle(el); return new DOMMatrix(style?.getPropertyValue?.("transform")); }
    return new DOMMatrix();
}

//
export const getTransformOrigin = (el)=>{
    // @ts-ignore
    const style = getComputedStyle(el), cssOrigin = style?.getPropertyValue?.("transform-origin") || `50% 50%`;
    return parseOrigin(cssOrigin, el);
}

//
export const getPropertyValue = (src, name)=>{
    if ("computedStyleMap" in src) {
        const val = src?.computedStyleMap?.()?.get(name);
        return val instanceof CSSUnitValue ? (val?.value || 0) : val?.toString?.();
    }
    // @ts-ignore
    if (src instanceof HTMLElement) { const cs = getComputedStyle?.(src, ""); return (parseFloat(cs?.getPropertyValue?.(name)?.replace?.("px", "")) || 0); }
    return (parseFloat((src?.style ?? src).getPropertyValue?.(name)?.replace?.("px", "")) || 0) || 0;
}

//
export const getElementZoom = (element: Element): number => {
    let zoom = 1, currentElement: Element | null = element;
    while (currentElement) {
        if ('currentCSSZoom' in (currentElement as any)) {
            const currentCSSZoom = (currentElement as any).currentCSSZoom;
            if (typeof currentCSSZoom === 'number') { return (zoom *= currentCSSZoom); }
        }

        //
        const style = getComputedStyle(currentElement); // @ts-ignore
        if  (style.zoom && style.zoom !== 'normal') { return (zoom *= parseFloat(style.zoom)); } // @ts-ignore
        if ((style.zoom && style.zoom !== 'normal') || 'currentCSSZoom' in (currentElement as any)) { return zoom; }
        currentElement = (currentElement as HTMLElement)?.offsetParent ?? currentElement?.parentElement;
    }
    return zoom;
}

//
export const getPxValue = (element, name) => { return getPropertyValue?.(element, name); }
export const getPadding = (src, axis)=>{
    if (axis == "inline") { return (getPropertyValue(src, "padding-inline-start") + getPropertyValue(src, "padding-inline-end")); };
    return (getPropertyValue(src, "padding-block-start") + getPropertyValue(src, "padding-block-end"));
}
