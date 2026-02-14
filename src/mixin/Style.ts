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
const hasTypedOM =
    typeof CSSStyleValue !== "undefined" &&
    typeof CSSUnitValue !== "undefined";

const isStyleValue = (val: any): val is CSSStyleValue =>
    hasTypedOM && val instanceof CSSStyleValue;

const isUnitValue = (val: any): val is CSSUnitValue =>
    hasTypedOM && val instanceof CSSUnitValue;

const setPropertyIfNotEqual = (
    styleRef: CSSStyleDeclaration,
    kebab: string,
    value: string | null,
    importance = ""
) => {
    if (!styleRef || !kebab) return;

    if (value == null) {
        if (styleRef.getPropertyValue(kebab) !== "") {
        styleRef.removeProperty(kebab);
        }
        return;
    }

    const old = styleRef.getPropertyValue(kebab);
    if (old !== value) {
        styleRef.setProperty(kebab, value, importance);
    }
};

//
export const setStylePropertyTyped = (
    element?: HTMLElement | null,
    name?: string,
    value?: any,
    importance = ""
) => {
    if (!element || !name) return element;

    const kebab = camelToKebab(name);
    const styleRef = element.style;
    const styleMapRef: StylePropertyMap | undefined =
        (element as any).attributeStyleMap ?? (element as any).styleMap;

    // если нет Typed OM или styleMap — уходим в обычный путь
    if (!hasTypedOM || !styleMapRef) {
        return setStylePropertyFallback(element, name, value, importance);
    }

    // распаковываем ref
    let val: any = hasValue(value) && !(isStyleValue(value) || isUnitValue(value)) ? value?.value : value;

    // null/undefined -> удалить свойство
    if (val == null) {
        styleMapRef.delete?.(kebab);
        // для синхронизации лучше тоже подчистить обычный style
        if (styleRef) {
            setPropertyIfNotEqual(styleRef, kebab, null, importance);
        }
        return element;
    }

    // уже CSSStyleValue
    if (isStyleValue(val)) {
        const old = styleMapRef.get(kebab);
        // сравниваем по value/unit, но НЕ мутируем старый
        if (isUnitValue(val) && isUnitValue(old)) {
            if (old.value === val.value && old.unit === val.unit) {
                return element; // без изменений
            }
        } else if (old === val) {
            return element; // тот же объект, ничего не делаем
        }
        styleMapRef.set(kebab, val); // просто ставим новое значение
        return element;
    }

    // число -> CSSUnitValue('number') или обычная строка
    if (typeof val === "number") {
        // здесь два варианта:
        // 1) использовать CSS.px / CSS.number, если хочешь Typed OM полноценно
        // 2) оставить как string, чтобы не плодить CSSUnitValue без нужды
        //
        // Пример с CSS.number (если поддерживается):
        if ((CSS as any)?.number && !kebab.startsWith("--")) {
            const newVal: CSSUnitValue = (CSS as any).number(val);
            const old = styleMapRef.get(kebab);
            if (isUnitValue(old) && old.value === newVal.value && old.unit === newVal.unit) {
                return element;
            }
            styleMapRef.set(kebab, newVal);
            return element;
        } else {
            // fallback в обычный стиль
            setPropertyIfNotEqual(styleRef, kebab, String(val), importance);
            return element;
        }
    }

    // строки и всё остальное: попытка Typed OM -> fallback в строку
    if (typeof val === "string" && !isStyleValue(val)) {
        const maybeNum = tryStringAsNumber(val);
        if (typeof maybeNum === "number" && (CSS as any)?.number && !kebab.startsWith("--")) {
            const newVal: CSSUnitValue = (CSS as any).number(maybeNum);
            const old = styleMapRef.get(kebab);
            if (isUnitValue(old) && old.value === newVal.value && old.unit === newVal.unit) {
                return element;
            }
            styleMapRef.set(kebab, newVal);
            return element;
        } else {
            // обычное строковое значение
            setPropertyIfNotEqual(styleRef, kebab, val, importance);
            return element;
        }
    }

    // любой другой тип -> строка
    setPropertyIfNotEqual(styleRef, kebab, String(val), importance);
    return element;
};

//
export const setStylePropertyFallback = (
    element?: HTMLElement | null,
    name?: string,
    value?: any,
    importance = ""
) => {
    if (!element || !name) return element;

    const kebab = camelToKebab(name);
    const styleRef = element.style;
    if (!styleRef) return element;

    // распаковываем ref, если нужно
    let val: any = (hasValue(value) && !(isStyleValue(value) || isUnitValue(value))) ? value?.value : value;

    // пробуем число из строки
    if (typeof val === "string" && !isStyleValue(val)) {
        val = tryStringAsNumber(val) ?? val;
    }

    // null/undefined — убрать
    if (val == null) {
        setPropertyIfNotEqual(styleRef, kebab, null, importance);
        return element;
    }

    // CSSStyleValue -> строка
    if (isStyleValue(val)) {
        setPropertyIfNotEqual(styleRef, kebab, String(val), importance);
        return element;
    }

    // число -> строка (на твой вкус можно добавить 'px' для некоторых свойств)
    if (typeof val === "number") {
        setPropertyIfNotEqual(styleRef, kebab, String(val), importance);
        return element;
    }

    // всё остальное -> строка
    setPropertyIfNotEqual(styleRef, kebab, String(val), importance);
    return element;
};

//
const promiseOrDirect = (promise: any|Promise<any>, cb: (...args: any[]) => any) => {
    if (typeof promise?.then == "function") { return promise?.then?.(cb); }
    return cb(promise);
}

//
const blobURLMap = new WeakMap<Blob | File, string | Promise<string>>();
const cacheMap = new Map<string, string | Promise<string>>();

//
export const fetchAndCache = (url: string | Blob | File): any => {
    if (!url) return null;

    //
    if (cacheMap.has(url as string)) { return cacheMap.get(url as string); }

    //
    if (url instanceof Blob || (url as any) instanceof File) {
        if (blobURLMap.has(url as Blob | File)) { return blobURLMap.get(url as Blob | File); }
        const burl = URL.createObjectURL(url as Blob | File);
        blobURLMap.set(url as Blob | File, burl);
        cacheMap.set(burl as string, burl);
        return burl;
    }

    //
    if (URL.canParse(url as string) || url?.trim?.()?.startsWith?.("./")) {
        const promised = fetch(url?.replace?.("?url", "?raw"), {
            cache: "force-cache",
            mode: "same-origin",
            priority: "high",

        })?.then?.(async (res: Response) => {
            const blob = await res.blob();
            const burl = URL.createObjectURL(blob);
            blobURLMap.set(blob as Blob | File, burl);
            cacheMap.set(url as string, burl);
            cacheMap.set(burl as string, burl);
            return burl;
        });

        //
        cacheMap.set(url as string, promised as Promise<string>);
        return promised;
    }

    //
    if (typeof url == "string") {
        const blob = new Blob([url], { type: "text/css" });
        const burl = URL.createObjectURL(blob);
        blobURLMap.set(blob as Blob | File, burl);
        //cacheMap.set(url as string, burl);
        cacheMap.set(burl as string, burl);
        return burl;
    }

    //
    return url as string;
}

//
const cacheContentMap = new Map<string, string | Promise<string>>();
const cacheBlobContentMap = new WeakMap<Blob | File, string | Promise<string>>();
export const fetchAsInline = (url: string | Blob | File): Promise<string>|string => {
    if (!url) return "";

    //
    if (cacheContentMap.has(url as string)) { return cacheContentMap.get(url as string) ?? ""; }

    //
    if (url instanceof Blob || (url as any) instanceof File) {
        if (cacheBlobContentMap.has(url as Blob | File)) { return cacheBlobContentMap.get(url as Blob | File) ?? ""; }

        //
        const promised = (url as any)?.text?.()?.then?.(text => {
            cacheBlobContentMap.set(url as Blob | File, text);
            return text;
        });
        cacheBlobContentMap.set(url as Blob | File, promised);
        return promised;
    }

    //
    if (URL.canParse(url as string) || url?.trim?.()?.startsWith?.("./")) {
        const promised = fetch(url?.replace?.("?url", "?raw"), {
            cache: "force-cache",
            mode: "same-origin",
            priority: "high",

        })?.then?.(async (res: Response) => {
            const text = await res.text();
            cacheContentMap.set(url as string, text);
            return text;
        });
        cacheContentMap.set(url as string, promised);
        return promised;
    }

    //
    if (typeof url == "string") {
        cacheContentMap.set(url as string, url);
        return url;
    }

    //
    return url as string;
}

//
const adoptedSelectorMap = new Map<string, CSSStyleSheet>();
const adoptedShadowSelectorMap = new WeakMap<ShadowRoot, Map<string, CSSStyleSheet>>();
const adoptedLayerMap = new Map<string, CSSLayerBlockRule>();
const adoptedShadowLayerMap = new WeakMap<ShadowRoot, Map<string, CSSLayerBlockRule>>();

//
export const getAdoptedStyleRule = (selector: string, layerName: string | null = "ux-query", basis: any = null) => {
    if (!selector) return null;

    const root = basis instanceof ShadowRoot ? basis : (basis?.getRootNode ? basis.getRootNode({ composed: true }) : null);
    const isShadowRoot = root instanceof ShadowRoot;
    const targetAdoptedSheets = isShadowRoot ? root.adoptedStyleSheets : (typeof document != "undefined" ? document.adoptedStyleSheets : null);

    if (!targetAdoptedSheets) return null;

    const selectorKey = `${layerName || ""}:${selector}`;
    let sheet: CSSStyleSheet | undefined;

    if (isShadowRoot) {
        let shadowMap = adoptedShadowSelectorMap.get(root);
        if (!shadowMap) {
            shadowMap = new Map();
            adoptedShadowSelectorMap.set(root, shadowMap);
        }
        sheet = shadowMap.get(selectorKey);

        if (!sheet) {
            sheet = new CSSStyleSheet();
            shadowMap.set(selectorKey, sheet);

            if (!targetAdoptedSheets.includes(sheet)) {
                targetAdoptedSheets.push(sheet);
            }
        }
    } else {
        sheet = adoptedSelectorMap.get(selectorKey);

        if (!sheet) {
            sheet = new CSSStyleSheet();
            adoptedSelectorMap.set(selectorKey, sheet);

            if (!targetAdoptedSheets.includes(sheet)) {
                targetAdoptedSheets.push(sheet);
            }
        }
    }

    if (layerName) {
        let layerRule: CSSLayerBlockRule | undefined;

        if (isShadowRoot) {
            let shadowLayerMap = adoptedShadowLayerMap.get(root);
            if (!shadowLayerMap) {
                shadowLayerMap = new Map();
                adoptedShadowLayerMap.set(root, shadowLayerMap);
            }
            layerRule = shadowLayerMap.get(layerName);
        } else {
            layerRule = adoptedLayerMap.get(layerName);
        }

        if (!layerRule) {
            const rules = Array.from(sheet.cssRules || []);
            const layerIndex = rules.findIndex((rule) =>
                rule instanceof CSSLayerBlockRule && rule.name === layerName
            );
            if (layerIndex === -1) {
                try {
                    sheet.insertRule(`@layer ${layerName} {}`, sheet.cssRules.length);
                    const newRule = sheet.cssRules[sheet.cssRules.length - 1];
                    if (newRule instanceof CSSLayerBlockRule) {
                        layerRule = newRule;
                    }
                } catch (e) {
                    layerRule = undefined;
                }
            } else {
                layerRule = rules[layerIndex] as CSSLayerBlockRule;
            }
            if (layerRule) {
                if (isShadowRoot) {
                    let shadowLayerMap = adoptedShadowLayerMap.get(root);
                    if (!shadowLayerMap) {
                        shadowLayerMap = new Map();
                        adoptedShadowLayerMap.set(root, shadowLayerMap);
                    }
                    shadowLayerMap.set(layerName, layerRule);
                } else {
                    adoptedLayerMap.set(layerName, layerRule);
                }
            }
        }

        if (layerRule) {
            const layerRules = Array.from(layerRule.cssRules || []);
            let layerRuleIndex = layerRules.findIndex((r) =>
                r instanceof CSSStyleRule && r.selectorText?.trim?.() === selector?.trim?.()
            );
            if (layerRuleIndex === -1) {
                try {
                    layerRuleIndex = layerRule.insertRule(`${selector} {}`, layerRule.cssRules.length);
                } catch (e) {
                    return null;
                }
            }
            return layerRule.cssRules[layerRuleIndex] as CSSStyleRule;
        }
    }

    const rules = Array.from(sheet.cssRules || []);
    let ruleIndex = rules.findIndex((rule) =>
        rule instanceof CSSStyleRule && rule.selectorText?.trim?.() === selector?.trim?.()
    );

    if (ruleIndex === -1) {
        try {
            ruleIndex = sheet.insertRule(`${selector} {}`, sheet.cssRules.length);
        } catch (e) {
            return null;
        }
    }

    const rule = sheet.cssRules[ruleIndex];
    if (rule instanceof CSSStyleRule) {
        return rule;
    }

    return null;
};

//
export const setStyleProperty = (element?: HTMLElement | null, name?: string, value?: any, importance = "") => {
    return hasTypedOM ? setStylePropertyTyped(element, name, value, importance) : setStylePropertyFallback(element, name, value, importance);
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
export const loadStyleSheet = (inline: string|File|Blob, base?: [any, any], layer: string = "", integrity?: string|Promise<string>)=>{ // @ts-ignore
    const load = fetchAndCache(inline);
    const url = typeof inline == "string" ? (URL.canParse(inline) ? inline : load) : load;

    //
    if (base?.[0]) base[0].fetchPriority = "high";
    if (base && url && typeof url == "string") { setStyleURL(base, url, layer); };
    if (base?.[0] && (!URL.canParse(inline as string) || integrity) && base?.[0] instanceof HTMLLinkElement) {
        const I: any = null;//(integrity ?? (typeof inline == "string" ? hash(inline) : null));
        //if (typeof I?.then == "function") { I?.then?.((H) => base?.[0]?.setAttribute?.("integrity", H)); } else
            //if (I) { base?.[0]?.setAttribute?.("integrity", I as string); }
    }

    //
    return promiseOrDirect(load, (res?: any | null) => {
        if (base?.[0] && res) {
            setStyleURL(base, res, layer);
            base?.[0].setAttribute("loaded", "");
        }
    })?.catch?.((error: any) => { console.warn("Failed to load style sheet:", error); });

    //
    return base?.[0];
};

//
export const loadBlobStyle = (inline: string) => {
    const style = typeof document != "undefined" ? document.createElement("link") : null;
    if (style) style.fetchPriority = "high";
    if (style) {
        Object.assign(style, { rel: "stylesheet", type: "text/css", crossOrigin: "same-origin" }); style.dataset.owner = OWNER; loadStyleSheet(inline, [style, "href"]); typeof document != "undefined" ? document.head.append(style) : null; return style;
    };
    return null;
};

//
export const loadInlineStyle = (inline: string, rootElement: any = typeof document != "undefined" ? document?.head : null, layer: string = "") => {
    //if (!rootElement) return;
    const PLACE = (rootElement?.querySelector?.("head") ?? rootElement); if (typeof HTMLHeadElement != "undefined" && PLACE instanceof HTMLHeadElement) { return loadBlobStyle(inline); } // @ts-ignore
    const style = typeof document != "undefined" ? document.createElement("style") : null; if (style) { style.dataset.owner = OWNER; loadStyleSheet(inline, [style, "innerHTML"], layer); PLACE?.prepend?.(style); return style; }
    return null;
};

//
export const setProperty = (target, name, value, importance = "")=>{
    return setStyleProperty(target, name, value, importance);
}

//
export const preloadStyle = (styles: string)=>{
    // @ts-ignore
    return loadAsAdopted(styles, "");
}

//
export const adoptedMap = new Map<string, CSSStyleSheet>();
export const adoptedBlobMap = new WeakMap<Blob | File, CSSStyleSheet>();

//
let layerCounter = 0;
export const loadAsAdopted = (styles: string | Blob | File, layerName: string | null = null) => {
    if (typeof styles == "string" && adoptedMap?.has?.(styles)) { return adoptedMap.get(styles); }
    if ((styles instanceof Blob || (styles as any) instanceof File) && adoptedBlobMap?.has?.(styles as Blob | File)) { return adoptedBlobMap.get(styles as Blob | File); }

    //
    if (!styles) return null; //@ts-ignore
    const sheet = (typeof styles == "string" ?  //@ts-ignore
        adoptedMap.getOrInsertComputed(styles, (styles) => new CSSStyleSheet() as CSSStyleSheet) :  //@ts-ignore
        adoptedBlobMap.getOrInsertComputed(styles as Blob | File, (styles) => new CSSStyleSheet() as CSSStyleSheet));

    //
    //if (!layerName) { layerName = `ux-layer-${layerCounter++}`; }
    if (typeof document != "undefined" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(sheet as unknown as CSSStyleSheet)) {
    document.adoptedStyleSheets.push(sheet as unknown as CSSStyleSheet);
    }

    //
    if (typeof styles == "string" && !URL.canParse(styles)) {
        const layerWrapped = layerName ? `@layer ${layerName} { ${styles} }` : styles;
        adoptedMap.set(styles, sheet);
        // Avoid blocking the main thread on huge styles (veela runtime can be big).
        if (layerWrapped.length > 50_000 && typeof (sheet as any).replace === "function") {
            (sheet as any).replace(layerWrapped).catch?.(() => {});
        } else {
        sheet.replaceSync(layerWrapped);
        }
        return sheet;
    } else {
        promiseOrDirect(fetchAsInline(styles), (cached: string) => {
            adoptedMap.set(cached, sheet);
            if (cached) {
                const layerWrapped = layerName ? `@layer ${layerName} { ${cached} }` : cached;
                if (layerWrapped.length > 50_000 && typeof (sheet as any).replace === "function") {
                    (sheet as any).replace(layerWrapped).catch?.(() => {});
                } else {
                sheet.replaceSync(layerWrapped);
                }
                return sheet;
            };
        });
    }

    //
    return sheet as CSSStyleSheet;
}

//
export const removeAdopted = (sheet: CSSStyleSheet | string | null | undefined): boolean => {
    if (!sheet) return false;
    const target = typeof sheet === "string" ? adoptedMap.get(sheet) : sheet;
    if (!target || typeof document === "undefined") return false;
    const sheets = document.adoptedStyleSheets;
    const idx = sheets.indexOf(target);
    if (idx !== -1) {
        sheets.splice(idx, 1);
        return true;
    }
    return false;
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