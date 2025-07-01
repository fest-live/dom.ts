const OWNER = "DOM", styleElement = document.createElement("style"); document.querySelector("head")?.appendChild?.(styleElement); styleElement.dataset.owner = OWNER;
export type  StyleTuple    = [selector: string, sheet: object];
export const setStyleURL   = (base: [any, any], url: string, layer: string = "")=>{ base[0][base[1]] = (base[1] == "innerHTML") ? `@import url("${url}") ${layer && (typeof layer == "string") ? `layer(${layer})` : ""};` : url; };
export const setStyleRules = (classes: StyleTuple[]) => { return classes?.map?.((args) => setStyleRule(...args)); };
export const camelToKebab  = (str) => { return str?.replace?.(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(); }
export const kebabToCamel  = (str) => { return str?.replace?.(/-([a-z])/g, (_, char) => char.toUpperCase()); }
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
export const getStyleRule = (selector, sheet?, layerName: string|null = "ux-query", basis = null) => {
    // Определяем корень (ShadowRoot или document)
    // @ts-ignore
    const root = basis?.getRootNode ? basis.getRootNode() : document;

    //
    let $styleElement: any;// = styleElement;
    if (root instanceof ShadowRoot) {
        // Ищем style внутри ShadowRoot
        if (!($styleElement = root.querySelector('style[data-ux-query]'))) {
            $styleElement = document.createElement('style');
            $styleElement.setAttribute('data-ux-query', '');
            root.appendChild($styleElement);
        }
    } else { $styleElement = styleElement; }

    //
    sheet ||= $styleElement?.sheet || sheet;

    // Если не указан слой — работаем как раньше
    if (!layerName) {
        let ruleId = Array.from(sheet?.cssRules || []).findIndex((rule) => rule instanceof CSSStyleRule && rule.selectorText === selector);
        if (ruleId === -1 && sheet) { ruleId = sheet?.insertRule?.(`${selector} {}`); }
        return sheet?.cssRules?.[ruleId];
    }

    //
    return getStyleRule(selector, getStyleLayer(layerName, sheet), null, basis);
};

//
export const setStyleProperty = (element, name, value: any)=>{
    if (!element) return element;
    // custom properties currently doesn't supports Typed OM
    if (name?.trim?.()?.startsWith?.("--")) {
        const old = element.style?.getPropertyValue?.(name);
        const val = (value?.value ?? value);
        value = (value instanceof CSSStyleValue ? value.toString() : val);
        if (old !== value) { element.style?.setProperty?.(name, value, ""); };
    } else
    if (value instanceof CSSStyleValue) {
        const kebab = camelToKebab(name);
        if (element.attributeStyleMap != null) {
            const old = element.attributeStyleMap?.get?.(kebab);
            if (old !== value) {
                // CSSStyleValue is internally reactive itself!
                element.attributeStyleMap?.set?.(kebab, value);

                // bred, changing `.value` in CSSStyleValue isn't change value again
                /*if (value instanceof CSSUnitValue) {
                    if (old != null && value.unit && value.unit !== old?.unit) {
                        element.attributeStyleMap.set(kebab, value);
                    } else { old.value = value.value; }
                } else {
                    element.attributeStyleMap.set(kebab, value);
                }*/
            }
        } else {
            element?.style?.setProperty(kebab, value.toString(), "");
        }
    } else // very specific case if number and unit value can be changed directly
    if (!Number.isNaN(value?.value ?? value) && element.attributeStyleMap != null) {
        const numeric = value?.value ?? value;
        const kebab = camelToKebab(name);
        const old = element.attributeStyleMap?.get?.(kebab);
        if (old instanceof CSSUnitValue) { old.value = numeric; } else
        {   // hard-case
            const computed = element?.computedStyleMap?.();
            const oldCmVal = computed?.get?.(kebab);
            if (oldCmVal instanceof CSSUnitValue) {
                if (oldCmVal.value != numeric) {
                    oldCmVal.value = numeric;
                    element.attributeStyleMap?.set?.(kebab, oldCmVal);
                }
            } else {
                element.style?.setProperty?.(kebab, numeric);
            }
        }
    } else
    if (element.style) {
        const camel = kebabToCamel(name), val = value?.value ?? value;
        if (element.style[camel] != val || !element.style[camel]) {
            element.style[camel] = val;
        }
    }
    return element;
}

//
/*
export const getStyleRule = (selector: string) => {
    const styleRules = styleElement.sheet;
    let ruleId = Array.from(styleRules?.cssRules || []).findIndex((rule) => (rule instanceof CSSStyleRule ? (selector == rule?.selectorText) : false));
    if (ruleId <= -1) {ruleId = styleRules?.insertRule(`${selector} {}`) as number;}
    return styleElement?.sheet?.cssRules[ruleId];
};*/

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
    const load = fetch(url, {priority: "high"});
    if (base && url) setStyleURL(base, url, layer);
    if (base?.[0] && (!URL.canParse(inline as string) || integrity) && base?.[0] instanceof HTMLLinkElement) {
        const I: any = (integrity ?? (typeof inline == "string" ? hash(inline) : null));
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

