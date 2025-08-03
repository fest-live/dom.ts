import { UUIDv4, camelToKebab, kebabToCamel } from "../$agate$/Utils";

//
const OWNER = "DOM", styleElement = document.createElement("style"); document.querySelector("head")?.appendChild?.(styleElement); styleElement.dataset.owner = OWNER;
export type  StyleTuple    = [selector: string, sheet: object];
export const setStyleURL   = (base: [any, any], url: string, layer: string = "")=>{ base[0][base[1]] = (base[1] == "innerHTML") ? `@import url("${url}") ${layer && (typeof layer == "string") ? `layer(${layer})` : ""};` : url; };
export const setStyleRules = (classes: StyleTuple[]) => { return classes?.map?.((args) => setStyleRule(...args)); };
export const getStyleLayer = (layerName, sheet?)=>{
    sheet ||= styleElement.sheet;

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
    // @ts-ignore
    const root = basis?.getRootNode ? basis.getRootNode() : document;

    // Making element defined for CSS query
    const uqid = (root instanceof ShadowRoot || root instanceof Document) ? "" : (basis?.getAttribute?.("data-style-id") || UUIDv4());
    const usel = root instanceof Document ? ":root" : (root instanceof ShadowRoot ? ":host" : `[data-style-id="${uqid}"]`);
    basis?.setAttribute?.("data-style-id", uqid);

    //
    let $styleElement: any;// = styleElement;
    if (root instanceof ShadowRoot) {
        if (!($styleElement = root.querySelector('style'))) {
            $styleElement = document.createElement('style[data-ux-query]');
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
export const setStyleProperty = (element?: any|null, name?: string, value?: any)=>{
    if (!element || !name) return element;

    //
    const kebab = camelToKebab(name || "");
    if (value instanceof CSSStyleValue) {
        if (element.attributeStyleMap != null) {
            const old = element.attributeStyleMap?.get?.(kebab);
            if (old != value) {
                if (value instanceof CSSUnitValue) {
                    if (old != null && value.unit && value.unit !== old?.unit) {
                        if (old.value != value.value) { old.value = value.value; }
                    } else { element.attributeStyleMap.set(kebab, value); }
                } else {
                    element.attributeStyleMap.set(kebab, value);
                }
            }
        } else {
            element?.style?.setProperty(kebab, value.toString(), "");
        }
    } else
    if (!Number.isNaN(value?.value ?? value) && element?.attributeStyleMap) {
        const numeric = value?.value ?? value;
        const old = element.attributeStyleMap?.get?.(kebab);
        if (old) {
            if (old instanceof CSSUnitValue && old?.unit) {
                if (old?.value != numeric) { old.value = numeric; }
            } else {
                element.style?.setProperty?.(kebab, numeric);
            }
        } else
        {   // hard-case
            const computed = element?.computedStyleMap?.();
            const oldCmVal = computed?.get?.(kebab);
            if (oldCmVal instanceof CSSUnitValue && oldCmVal?.unit) {
                if (oldCmVal.value != numeric) { oldCmVal.value = numeric; }
                if (oldCmVal.unit == "number") { element.attributeStyleMap?.set?.(kebab, oldCmVal?.value); } else
                { try { element.attributeStyleMap?.set?.(kebab, oldCmVal); } catch (e) { element.attributeStyleMap?.set?.(kebab, oldCmVal?.toString?.()); } }
            } else {
                element.style?.setProperty?.(kebab, numeric);
            }
        }
    } else
    if (name?.trim?.()?.startsWith?.("--") || !element?.attributeStyleMap) {
        const old = element?.style?.getPropertyValue?.(kebab);
        const val = (value?.value ?? value);
        value = (value instanceof CSSStyleValue ? value.toString() : val);
        if (old !== value) { element.style?.setProperty?.(kebab, value, ""); };
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
    const hashBuffer = await crypto.subtle.digest('SHA-256', typeof string == "string" ? new TextEncoder().encode(string) : (string instanceof ArrayBuffer ? string : (await ((string as any)?.arrayBuffer?.()))));
    return "sha256-" + btoa(String.fromCharCode.apply(null, new Uint8Array(hashBuffer) as unknown as number[]));
};

//
export const loadStyleSheet = (inline: string|File|Blob, base?: [any, any], layer: string = "", integrity?: string|Promise<string>)=>{ // @ts-ignore
    const url: string|null = URL.canParse(inline as string) ? (inline as string) : URL.createObjectURL((inline instanceof Blob || inline instanceof File) ? inline : new Blob([inline], {type: "text/css"}));
    const load = fetch(url, {cache: "force-cache", mode: "same-origin"});
    if (base && url) setStyleURL(base, url, layer);
    if (base?.[0] && (!URL.canParse(inline as string) || integrity) && base?.[0] instanceof HTMLLinkElement) {
        const I: any = null;//(integrity ?? (typeof inline == "string" ? hash(inline) : null));
            if (typeof I?.then == "function") { I?.then?.((H)=>base?.[0]?.setAttribute?.("integrity", H)); } else
            if (I) { base?.[0]?.setAttribute?.("integrity", I as string); }
    }
    load?.then?.(()=>{if(base?.[0]) base?.[0].setAttribute("loaded", ""); });
};

//
export const loadBlobStyle   = (inline: string)=>{ const style = document.createElement("link"); Object.assign(style, {rel: "stylesheet", type: "text/css", crossOrigin: "same-origin" }); style.dataset.owner = OWNER; loadStyleSheet(inline, [style, "href"]); document.head.append(style); return style; };
export const loadInlineStyle = (inline: string, rootElement: any = document.head, layer: string = "")=>{
    const PLACE = (rootElement?.querySelector("head") ?? rootElement); if (PLACE instanceof HTMLHeadElement) { return loadBlobStyle(inline); } // @ts-ignore
    const style = document.createElement("style"); style.dataset.owner = OWNER; loadStyleSheet(inline, [style, "innerHTML"], layer); PLACE?.prepend?.(style); return style;
};

//
export const setProperty = (target, name, value, importance = "")=>{
    if (!target) return;
    if ("attributeStyleMap" in target && typeof value != "string") {
        const raw = target.attributeStyleMap.get(name), oldv = raw?.[0] ?? raw?.value;
        if (parseFloat(value) != parseFloat(oldv) || oldv !== value || !oldv) {
            if (raw?.value != null) { raw.value = value; } else { target.attributeStyleMap.set(name, value); };
        }
    } else {
        const oldv = target?.style?.getPropertyValue?.(name);
        if (parseFloat(oldv) != value || oldv !== value || !oldv) {
            target?.style?.setProperty?.(name, value, importance);
        }
    }
}

//
export const preloadStyle = (styles: string)=>{
    return loadInlineStyle(URL.createObjectURL(new Blob([styles], {type: "text/css"})), null, "ux-layer");
}


//
export type Point = DOMPoint;
export const parseOrigin = (origin: string, element: Element): Point => { const values = origin.split(' '); return new DOMPoint(parseLength(values[0], ()=>element.clientWidth), parseLength(values[1], ()=>element.clientHeight)); }
export const parseLength = (value: string, size: ()=>number): number => { if (value.endsWith('%')) { return (parseFloat(value) / 100) * size(); }; return parseFloat(value); }

//
export const getTransform = (el)=>{
    if (el?.computedStyleMap) {
        const styleMap = el.computedStyleMap(), transform = styleMap.get("transform"), matrix = transform?.toMatrix?.();
        if (matrix) return matrix;
    } else
    if (el) { const style = getComputedStyle(el); return new DOMMatrix(style?.getPropertyValue?.("transform")); }
    return new DOMMatrix();
}

//
export const getTransformOrigin = (el)=>{
    const style = getComputedStyle(el), cssOrigin = style?.getPropertyValue?.("transform-origin") || `50% 50%`;
    return parseOrigin(cssOrigin, el);
}

//
export const getPropertyValue = (src, name)=>{
    if ("computedStyleMap" in src) {
        const val = src?.computedStyleMap?.()?.get(name);
        return val instanceof CSSUnitValue ? (val?.value || 0) : val?.toString?.();
    }
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
