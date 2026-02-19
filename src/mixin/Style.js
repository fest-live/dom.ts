import { camelToKebab, hasValue, tryStringAsNumber } from "fest/core";
//
const OWNER = "DOM", styleElement = typeof document != "undefined" ? document.createElement("style") : null;
//
if (styleElement) {
    typeof document != "undefined" ? document.querySelector("head")?.appendChild?.(styleElement) : null;
    styleElement.dataset.owner = OWNER;
}
export const setStyleURL = (base, url, layer = "") => { base[0][base[1]] = (base[1] == "innerHTML") ? `@import url("${url}") ${layer && (typeof layer == "string") ? `layer(${layer})` : ""};` : url; };
export const setStyleRules = (classes) => { return classes?.map?.((args) => setStyleRule(...args)); };
export const getStyleLayer = (layerName, sheet) => {
    sheet ||= styleElement?.sheet;
    // Ищем или создаём @layer
    let layerRuleIndex = Array.from(sheet?.cssRules || []).findIndex((rule) => (rule instanceof CSSLayerBlockRule) && rule?.name === layerName);
    let layerRule;
    // Создаём пустой слой
    if (layerRuleIndex === -1 && sheet) {
        layerRule = sheet?.cssRules?.[layerRuleIndex = sheet.insertRule(`@layer ${layerName} {}`)];
    }
    else {
        layerRule = sheet?.cssRules?.[layerRuleIndex];
    }
    //
    return layerRule;
};
//
export const getStyleRule = (selector, sheet, layerName = "ux-query", basis = null) => {
    const root = basis instanceof ShadowRoot ? basis : (basis?.getRootNode ? basis.getRootNode({ composed: true }) : typeof document != "undefined" ? document.documentElement : null);
    // Making element defined for CSS query
    const uqid = (root instanceof ShadowRoot || root instanceof HTMLDocument) ? "" : (basis?.getAttribute?.("data-style-id") || (typeof crypto != "undefined" ? crypto?.randomUUID?.() : ""));
    const usel = root instanceof HTMLDocument ? ":root" : (root instanceof ShadowRoot ? ":host" : `[data-style-id="${uqid}"]`);
    basis?.setAttribute?.("data-style-id", uqid);
    //
    let $styleElement; // = styleElement;
    if (root instanceof ShadowRoot) {
        if (!($styleElement = root.querySelector('style'))) {
            $styleElement = typeof document != "undefined" ? document.createElement('style[data-ux-query]') : null;
            $styleElement.setAttribute('data-ux-query', '');
            root.appendChild($styleElement);
        }
    }
    else {
        $styleElement = styleElement;
    }
    //
    sheet ||= $styleElement?.sheet || sheet;
    //
    if (!layerName) {
        let ruleId = Array.from(sheet?.cssRules || []).findIndex((rule) => rule instanceof CSSStyleRule && rule.selectorText?.trim?.()?.endsWith?.(selector?.trim?.() ?? ""));
        if (ruleId === -1 && sheet) {
            ruleId = sheet?.insertRule?.(`${usel || ""} ${selector}`?.trim?.() + " {}");
        }
        return sheet?.cssRules?.[ruleId];
    }
    //
    return getStyleRule(selector, getStyleLayer(layerName, sheet), null, basis);
};
//
const hasTypedOM = typeof CSSStyleValue !== "undefined" &&
    typeof CSSUnitValue !== "undefined";
const isStyleValue = (val) => hasTypedOM && val instanceof CSSStyleValue;
const isUnitValue = (val) => hasTypedOM && val instanceof CSSUnitValue;
const setPropertyIfNotEqual = (styleRef, kebab, value, importance = "") => {
    if (!styleRef || !kebab)
        return;
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
export const setStylePropertyTyped = (element, name, value, importance = "") => {
    if (!element || !name)
        return element;
    const kebab = camelToKebab(name);
    const styleRef = element.style;
    const styleMapRef = element.attributeStyleMap ?? element.styleMap;
    // если нет Typed OM или styleMap — уходим в обычный путь
    if (!hasTypedOM || !styleMapRef) {
        return setStylePropertyFallback(element, name, value, importance);
    }
    // распаковываем ref
    let val = hasValue(value) && !(isStyleValue(value) || isUnitValue(value)) ? value?.value : value;
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
        }
        else if (old === val) {
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
        if (CSS?.number && !kebab.startsWith("--")) {
            const newVal = CSS.number(val);
            const old = styleMapRef.get(kebab);
            if (isUnitValue(old) && old.value === newVal.value && old.unit === newVal.unit) {
                return element;
            }
            styleMapRef.set(kebab, newVal);
            return element;
        }
        else {
            // fallback в обычный стиль
            setPropertyIfNotEqual(styleRef, kebab, String(val), importance);
            return element;
        }
    }
    // строки и всё остальное: попытка Typed OM -> fallback в строку
    if (typeof val === "string" && !isStyleValue(val)) {
        const maybeNum = tryStringAsNumber(val);
        if (typeof maybeNum === "number" && CSS?.number && !kebab.startsWith("--")) {
            const newVal = CSS.number(maybeNum);
            const old = styleMapRef.get(kebab);
            if (isUnitValue(old) && old.value === newVal.value && old.unit === newVal.unit) {
                return element;
            }
            styleMapRef.set(kebab, newVal);
            return element;
        }
        else {
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
export const setStylePropertyFallback = (element, name, value, importance = "") => {
    if (!element || !name)
        return element;
    const kebab = camelToKebab(name);
    const styleRef = element.style;
    if (!styleRef)
        return element;
    // распаковываем ref, если нужно
    let val = (hasValue(value) && !(isStyleValue(value) || isUnitValue(value))) ? value?.value : value;
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
const promiseOrDirect = (promise, cb) => {
    if (typeof promise?.then == "function") {
        return promise?.then?.(cb);
    }
    return cb(promise);
};
//
const blobURLMap = new WeakMap();
const cacheMap = new Map();
//
export const fetchAndCache = (url) => {
    if (!url)
        return null;
    //
    if (cacheMap.has(url)) {
        return cacheMap.get(url);
    }
    //
    if (url instanceof Blob || url instanceof File) {
        if (blobURLMap.has(url)) {
            return blobURLMap.get(url);
        }
        const burl = URL.createObjectURL(url);
        blobURLMap.set(url, burl);
        cacheMap.set(burl, burl);
        return burl;
    }
    //
    if (URL.canParse(url) || url?.trim?.()?.startsWith?.("./")) {
        const promised = fetch(url?.replace?.("?url", "?raw"), {
            cache: "force-cache",
            mode: "same-origin",
            priority: "high",
        })?.then?.(async (res) => {
            const blob = await res.blob();
            const burl = URL.createObjectURL(blob);
            blobURLMap.set(blob, burl);
            cacheMap.set(url, burl);
            cacheMap.set(burl, burl);
            return burl;
        });
        //
        cacheMap.set(url, promised);
        return promised;
    }
    //
    if (typeof url == "string") {
        const blob = new Blob([url], { type: "text/css" });
        const burl = URL.createObjectURL(blob);
        blobURLMap.set(blob, burl);
        //cacheMap.set(url as string, burl);
        cacheMap.set(burl, burl);
        return burl;
    }
    //
    return url;
};
//
const cacheContentMap = new Map();
const cacheBlobContentMap = new WeakMap();
export const fetchAsInline = (url) => {
    if (!url)
        return "";
    //
    if (cacheContentMap.has(url)) {
        return cacheContentMap.get(url) ?? "";
    }
    //
    if (url instanceof Blob || url instanceof File) {
        if (cacheBlobContentMap.has(url)) {
            return cacheBlobContentMap.get(url) ?? "";
        }
        //
        const promised = url?.text?.()?.then?.(text => {
            cacheBlobContentMap.set(url, text);
            return text;
        });
        cacheBlobContentMap.set(url, promised);
        return promised;
    }
    //
    if (URL.canParse(url) || url?.trim?.()?.startsWith?.("./")) {
        const promised = fetch(url?.replace?.("?url", "?raw"), {
            cache: "force-cache",
            mode: "same-origin",
            priority: "high",
        })?.then?.(async (res) => {
            const text = await res.text();
            cacheContentMap.set(url, text);
            return text;
        });
        cacheContentMap.set(url, promised);
        return promised;
    }
    //
    if (typeof url == "string") {
        cacheContentMap.set(url, url);
        return url;
    }
    //
    return url;
};
//
const adoptedSelectorMap = new Map();
const adoptedShadowSelectorMap = new WeakMap();
const adoptedLayerMap = new Map();
const adoptedShadowLayerMap = new WeakMap();
//
export const getAdoptedStyleRule = (selector, layerName = "ux-query", basis = null) => {
    if (!selector)
        return null;
    const root = basis instanceof ShadowRoot ? basis : (basis?.getRootNode ? basis.getRootNode({ composed: true }) : null);
    const isShadowRoot = root instanceof ShadowRoot;
    const targetAdoptedSheets = isShadowRoot ? root.adoptedStyleSheets : (typeof document != "undefined" ? document.adoptedStyleSheets : null);
    if (!targetAdoptedSheets)
        return null;
    const selectorKey = `${layerName || ""}:${selector}`;
    let sheet;
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
    }
    else {
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
        let layerRule;
        if (isShadowRoot) {
            let shadowLayerMap = adoptedShadowLayerMap.get(root);
            if (!shadowLayerMap) {
                shadowLayerMap = new Map();
                adoptedShadowLayerMap.set(root, shadowLayerMap);
            }
            layerRule = shadowLayerMap.get(layerName);
        }
        else {
            layerRule = adoptedLayerMap.get(layerName);
        }
        if (!layerRule) {
            const rules = Array.from(sheet.cssRules || []);
            const layerIndex = rules.findIndex((rule) => rule instanceof CSSLayerBlockRule && rule.name === layerName);
            if (layerIndex === -1) {
                try {
                    sheet.insertRule(`@layer ${layerName} {}`, sheet.cssRules.length);
                    const newRule = sheet.cssRules[sheet.cssRules.length - 1];
                    if (newRule instanceof CSSLayerBlockRule) {
                        layerRule = newRule;
                    }
                }
                catch (e) {
                    layerRule = undefined;
                }
            }
            else {
                layerRule = rules[layerIndex];
            }
            if (layerRule) {
                if (isShadowRoot) {
                    let shadowLayerMap = adoptedShadowLayerMap.get(root);
                    if (!shadowLayerMap) {
                        shadowLayerMap = new Map();
                        adoptedShadowLayerMap.set(root, shadowLayerMap);
                    }
                    shadowLayerMap.set(layerName, layerRule);
                }
                else {
                    adoptedLayerMap.set(layerName, layerRule);
                }
            }
        }
        if (layerRule) {
            const layerRules = Array.from(layerRule.cssRules || []);
            let layerRuleIndex = layerRules.findIndex((r) => r instanceof CSSStyleRule && r.selectorText?.trim?.() === selector?.trim?.());
            if (layerRuleIndex === -1) {
                try {
                    layerRuleIndex = layerRule.insertRule(`${selector} {}`, layerRule.cssRules.length);
                }
                catch (e) {
                    return null;
                }
            }
            return layerRule.cssRules[layerRuleIndex];
        }
    }
    const rules = Array.from(sheet.cssRules || []);
    let ruleIndex = rules.findIndex((rule) => rule instanceof CSSStyleRule && rule.selectorText?.trim?.() === selector?.trim?.());
    if (ruleIndex === -1) {
        try {
            ruleIndex = sheet.insertRule(`${selector} {}`, sheet.cssRules.length);
        }
        catch (e) {
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
export const setStyleProperty = (element, name, value, importance = "") => {
    return hasTypedOM ? setStylePropertyTyped(element, name, value, importance) : setStylePropertyFallback(element, name, value, importance);
};
//
export const setStyleInRule = (selector, name, value) => {
    return setStyleProperty(getStyleRule(selector), name, value);
};
//
export const setStyleRule = (selector, sheet) => {
    const rule = getStyleRule(selector);
    Object.entries(sheet).forEach(([propName, propValue]) => setStyleProperty(rule, propName, propValue));
    return rule;
};
//
export const hash = async (string) => {
    const hashBuffer = await crypto?.subtle?.digest('SHA-256', typeof string == "string" ? new TextEncoder().encode(string) : (string instanceof ArrayBuffer ? string : (await (string?.arrayBuffer?.()))));
    return "sha256-" + btoa(String.fromCharCode.apply(null, new Uint8Array(hashBuffer)));
};
//
export const loadStyleSheet = (inline, base, layer = "", integrity) => {
    const load = fetchAndCache(inline);
    const url = typeof inline == "string" ? (URL.canParse(inline) ? inline : load) : load;
    //
    if (base?.[0])
        base[0].fetchPriority = "high";
    if (base && url && typeof url == "string") {
        setStyleURL(base, url, layer);
    }
    ;
    if (base?.[0] && (!URL.canParse(inline) || integrity) && base?.[0] instanceof HTMLLinkElement) {
        const I = null; //(integrity ?? (typeof inline == "string" ? hash(inline) : null));
        //if (typeof I?.then == "function") { I?.then?.((H) => base?.[0]?.setAttribute?.("integrity", H)); } else
        //if (I) { base?.[0]?.setAttribute?.("integrity", I as string); }
    }
    //
    return promiseOrDirect(load, (res) => {
        if (base?.[0] && res) {
            setStyleURL(base, res, layer);
            base?.[0].setAttribute("loaded", "");
        }
    })?.catch?.((error) => { console.warn("Failed to load style sheet:", error); });
    //
    return base?.[0];
};
//
export const loadBlobStyle = (inline) => {
    const style = typeof document != "undefined" ? document.createElement("link") : null;
    if (style)
        style.fetchPriority = "high";
    if (style) {
        Object.assign(style, { rel: "stylesheet", type: "text/css", crossOrigin: "same-origin" });
        style.dataset.owner = OWNER;
        loadStyleSheet(inline, [style, "href"]);
        typeof document != "undefined" ? document.head.append(style) : null;
        return style;
    }
    ;
    return null;
};
//
export const loadInlineStyle = (inline, rootElement = typeof document != "undefined" ? document?.head : null, layer = "") => {
    //if (!rootElement) return;
    const PLACE = (rootElement?.querySelector?.("head") ?? rootElement);
    if (typeof HTMLHeadElement != "undefined" && PLACE instanceof HTMLHeadElement) {
        return loadBlobStyle(inline);
    } // @ts-ignore
    const style = typeof document != "undefined" ? document.createElement("style") : null;
    if (style) {
        style.dataset.owner = OWNER;
        loadStyleSheet(inline, [style, "innerHTML"], layer);
        PLACE?.prepend?.(style);
        return style;
    }
    return null;
};
//
export const setProperty = (target, name, value, importance = "") => {
    return setStyleProperty(target, name, value, importance);
};
//
export const preloadStyle = (styles) => {
    // @ts-ignore
    return loadAsAdopted(styles, "");
};
//
export const adoptedMap = new Map();
export const adoptedBlobMap = new WeakMap();
//
let layerCounter = 0;
export const loadAsAdopted = (styles, layerName = null) => {
    if (typeof styles == "string" && adoptedMap?.has?.(styles)) {
        return adoptedMap.get(styles);
    }
    if ((styles instanceof Blob || styles instanceof File) && adoptedBlobMap?.has?.(styles)) {
        return adoptedBlobMap.get(styles);
    }
    //
    if (!styles)
        return null; //@ts-ignore
    const sheet = (typeof styles == "string" ? //@ts-ignore
        adoptedMap.getOrInsertComputed(styles, (styles) => new CSSStyleSheet()) : //@ts-ignore
        adoptedBlobMap.getOrInsertComputed(styles, (styles) => new CSSStyleSheet()));
    //
    //if (!layerName) { layerName = `ux-layer-${layerCounter++}`; }
    if (typeof document != "undefined" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(sheet)) {
        document.adoptedStyleSheets.push(sheet);
    }
    //
    if (typeof styles == "string" && !URL.canParse(styles)) {
        const layerWrapped = layerName ? `@layer ${layerName} { ${styles} }` : styles;
        adoptedMap.set(styles, sheet);
        // Avoid blocking the main thread on huge styles (veela runtime can be big).
        if (layerWrapped.length > 50_000 && typeof sheet.replace === "function") {
            sheet.replace(layerWrapped).catch?.(() => { });
        }
        else {
            sheet.replaceSync(layerWrapped);
        }
        return sheet;
    }
    else {
        promiseOrDirect(fetchAsInline(styles), (cached) => {
            adoptedMap.set(cached, sheet);
            if (cached) {
                const layerWrapped = layerName ? `@layer ${layerName} { ${cached} }` : cached;
                if (layerWrapped.length > 50_000 && typeof sheet.replace === "function") {
                    sheet.replace(layerWrapped).catch?.(() => { });
                }
                else {
                    sheet.replaceSync(layerWrapped);
                }
                return sheet;
            }
            ;
        });
    }
    //
    return sheet;
};
//
export const removeAdopted = (sheet) => {
    if (!sheet)
        return false;
    const target = typeof sheet === "string" ? adoptedMap.get(sheet) : sheet;
    if (!target || typeof document === "undefined")
        return false;
    const sheets = document.adoptedStyleSheets;
    const idx = sheets.indexOf(target);
    if (idx !== -1) {
        sheets.splice(idx, 1);
        return true;
    }
    return false;
};
export const parseOrigin = (origin, element) => { const values = origin.split(' '); return new DOMPoint(parseLength(values[0], () => element.clientWidth), parseLength(values[1], () => element.clientHeight)); }; // @ts-ignore
export const parseLength = (value, size) => { if (value.endsWith('%')) {
    return (parseFloat(value) / 100) * size();
} ; return parseFloat(value); };
//
export const getTransform = (el) => {
    if (el?.computedStyleMap) {
        const styleMap = el.computedStyleMap(), transform = styleMap.get("transform"), matrix = transform?.toMatrix?.();
        if (matrix)
            return matrix;
    }
    else 
    // @ts-ignore
    if (el) {
        const style = getComputedStyle(el);
        return new DOMMatrix(style?.getPropertyValue?.("transform"));
    }
    return new DOMMatrix();
};
//
export const getTransformOrigin = (el) => {
    // @ts-ignore
    const style = getComputedStyle(el), cssOrigin = style?.getPropertyValue?.("transform-origin") || `50% 50%`;
    return parseOrigin(cssOrigin, el);
};
//
export const getPropertyValue = (src, name) => {
    if ("computedStyleMap" in src) {
        const val = src?.computedStyleMap?.()?.get(name);
        return val instanceof CSSUnitValue ? (val?.value || 0) : val?.toString?.();
    }
    // @ts-ignore
    if (src instanceof HTMLElement) {
        const cs = getComputedStyle?.(src, "");
        return (parseFloat(cs?.getPropertyValue?.(name)?.replace?.("px", "")) || 0);
    }
    return (parseFloat((src?.style ?? src).getPropertyValue?.(name)?.replace?.("px", "")) || 0) || 0;
};
//
export const getElementZoom = (element) => {
    let zoom = 1, currentElement = element;
    while (currentElement) {
        if ('currentCSSZoom' in currentElement) {
            const currentCSSZoom = currentElement.currentCSSZoom;
            if (typeof currentCSSZoom === 'number') {
                return (zoom *= currentCSSZoom);
            }
        }
        //
        const style = getComputedStyle(currentElement); // @ts-ignore
        if (style.zoom && style.zoom !== 'normal') {
            return (zoom *= parseFloat(style.zoom));
        } // @ts-ignore
        if ((style.zoom && style.zoom !== 'normal') || 'currentCSSZoom' in currentElement) {
            return zoom;
        }
        currentElement = currentElement?.offsetParent ?? currentElement?.parentElement;
    }
    return zoom;
};
//
export const getPxValue = (element, name) => { return getPropertyValue?.(element, name); };
export const getPadding = (src, axis) => {
    if (axis == "inline") {
        return (getPropertyValue(src, "padding-inline-start") + getPropertyValue(src, "padding-inline-end"));
    }
    ;
    return (getPropertyValue(src, "padding-block-start") + getPropertyValue(src, "padding-block-end"));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3R5bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJTdHlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBaUIsaUJBQWlCLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFFckYsRUFBRTtBQUNGLE1BQU0sS0FBSyxHQUFHLEtBQUssRUFDZixZQUFZLEdBQUcsT0FBTyxRQUFRLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFFM0YsRUFBRTtBQUNGLElBQUksWUFBWSxFQUFFLENBQUM7SUFDZixPQUFPLFFBQVEsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsV0FBVyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUM1SSxDQUFDO0FBSUQsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFLLENBQUMsSUFBZ0IsRUFBRSxHQUFXLEVBQUUsUUFBZ0IsRUFBRSxFQUFDLEVBQUUsR0FBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixHQUFHLE1BQU0sS0FBSyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcE8sTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQUMsT0FBcUIs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QUMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLHNCQUFzQixDQUFDLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQztJQUFDLENBQUM7SUFBQSxDQUFDO0lBQ2hJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUMsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0FBQ3ZHLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNhbWVsVG9LZWJhYiwgaGFzVmFsdWUsIGlzVmFsaWROdW1iZXIsIHRyeVN0cmluZ0FzTnVtYmVyIH0gZnJvbSBcImZlc3QvY29yZVwiO1xuXG4vL1xuY29uc3QgT1dORVIgPSBcIkRPTVwiLFxuICAgIHN0eWxlRWxlbWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpIDogbnVsbDtcblxuLy9cbmlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpPy5hcHBlbmRDaGlsZD8uKHN0eWxlRWxlbWVudCkgOiBudWxsOyBzdHlsZUVsZW1lbnQuZGF0YXNldC5vd25lciA9IE9XTkVSO1xufVxuXG4vL1xuZXhwb3J0IHR5cGUgIFN0eWxlVHVwbGUgICAgPSBbc2VsZWN0b3I6IHN0cmluZywgc2hlZXQ6IG9iamVjdF07XG5leHBvcnQgY29uc3Qgc2V0U3R5bGVVUkwgICA9IChiYXNlOiBbYW55LCBhbnldLCB1cmw6IHN0cmluZywgbGF5ZXI6IHN0cmluZyA9IFwiXCIpPT57IGJhc2VbMF1bYmFzZVsxXV0gPSAoYmFzZVsxXSA9PSBcImlubmVySFRNTFwiKSA/IGBAaW1wb3J0IHVybChcIiR7dXJsfVwiKSAke2xheWVyICYmICh0eXBlb2YgbGF5ZXIgPT0gXCJzdHJpbmdcIikgPyBgbGF5ZXIoJHtsYXllcn0pYCA6IFwiXCJ9O2AgOiB1cmw7IH07XG5leHBvcnQgY29uc3Qgc2V0U3R5bGVSdWxlcyA9IChjbGFzc2VzOiBTdHlsZVR1cGxlW10pID0+IHsgcmV0dXJuIGNsYXNzZXM/Lm1hcD8uKChhcmdzKSA9PiBzZXRTdHlsZVJ1bGUoLi4uYXJncykpOyB9O1xuZXhwb3J0IGNvbnN0IGdldFN0eWxlTGF5ZXIgPSAobGF5ZXJOYW1lLCBzaGVldD8pPT57XG4gICAgc2hlZXQgfHw9IHN0eWxlRWxlbWVudD8uc2hlZXQ7XG5cbiAgICAvLyDQmNGJ0LXQvCDQuNC70Lgg0YHQvtC30LTQsNGR0LwgQGxheWVyXG4gICAgbGV0IGxheWVyUnVsZUluZGV4ID0gQXJyYXkuZnJvbShzaGVldD8uY3NzUnVsZXMgfHwgW10pLmZpbmRJbmRleCgocnVsZSkgPT4gKHJ1bGUgaW5zdGFuY2VvZiBDU1NMYXllckJsb2NrUnVsZSkgJiYgcnVsZT8ubmFtZSA9PT0gbGF5ZXJOYW1lKTtcbiAgICBsZXQgbGF5ZXJSdWxlO1xuXG4gICAgLy8g0KHQvtC30LTQsNGR0Lwg0L/Rg9GB0YLQvtC5INGB0LvQvtC5XG4gICAgaWYgKGxheWVyUnVsZUluZGV4ID09PSAtMSAmJiBzaGVldClcbiAgICAgICAgeyBsYXllclJ1bGUgPSBzaGVldD8uY3NzUnVsZXM/LltsYXllclJ1bGVJbmRleCA9IHNoZWV0Lmluc2VydFJ1bGUoYEBsYXllciAke2xheWVyTmFtZX0ge31gKV07IH0gZWxzZVxuICAgICAgICB7IGxheWVyUnVsZSA9IHNoZWV0Py5jc3NSdWxlcz8uW2xheWVyUnVsZUluZGV4XTsgfVxuXG4gICAgLy9cbiAgICByZXR1cm4gbGF5ZXJSdWxlO1xufVxuXG4vL1xuZXhwb3J0IGNvbnN0IGdldFN0eWxlUnVsZSA9IChzZWxlY3Rvciwgc2hlZXQ/LCBsYXllck5hbWU6IHN0cmluZ3xudWxsID0gXCJ1eC1xdWVyeVwiLCBiYXNpczogYW55ID0gbnVsbCkgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBiYXNpcyBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyBiYXNpcyA6IChiYXNpcz8uZ2V0Um9vdE5vZGUgPyBiYXNpcy5nZXRSb290Tm9kZSh7IGNvbXBvc2VkOiB0cnVlIH0pIDogdHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgPyBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgOiBudWxsKTtcblxuICAgIC8vIE1ha2luZyBlbGVtZW50IGRlZmluZWQgZm9yIENTUyBxdWVyeVxuICAgIGNvbnN0IHVxaWQgPSAocm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgfHwgcm9vdCBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudCkgPyBcIlwiIDogKGJhc2lzPy5nZXRBdHRyaWJ1dGU/LihcImRhdGEtc3R5bGUtaWRcIikgfHwgKHR5cGVvZiBjcnlwdG8gIT0gXCJ1bmRlZmluZWRcIiA/IGNyeXB0bz8ucmFuZG9tVVVJRD8uKCkgOiBcIlwiKSk7XG4gICAgY29uc3QgdXNlbCA9IHJvb3QgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQgPyBcIjpyb290XCIgOiAocm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QgPyBcIjpob3N0XCIgOiBgW2RhdGEtc3R5bGUtaWQ9XCIke3VxaWR9XCJdYCk7XG4gICAgYmFzaXM/LnNldEF0dHJpYnV0ZT8uKFwiZGF0YS1zdHlsZS1pZFwiLCB1cWlkKTtcblxuICAgIC8vXG4gICAgbGV0ICRzdHlsZUVsZW1lbnQ6IGFueTsvLyA9IHN0eWxlRWxlbWVudDtcbiAgICBpZiAocm9vdCBpbnN0YW5jZW9mIFNoYWRvd1Jvb3QpIHtcbiAgICAgICAgaWYgKCEoJHN0eWxlRWxlbWVudCA9IHJvb3QucXVlcnlTZWxlY3Rvcignc3R5bGUnKSkpIHtcbiAgICAgICAgICAgICRzdHlsZUVsZW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlW2RhdGEtdXgtcXVlcnldJykgOiBudWxsO1xuICAgICAgICAgICAgJHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdXgtcXVlcnknLCAnJyk7XG4gICAgICAgICAgICByb290LmFwcGVuZENoaWxkKCRzdHlsZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHsgJHN0eWxlRWxlbWVudCA9IHN0eWxlRWxlbWVudDsgfVxuXG4gICAgLy9cbiAgICBzaGVldCB8fD0gJHN0eWxlRWxlbWVudD8uc2hlZXQgfHwgc2hlZXQ7XG5cbiAgICAvL1xuICAgIGlmICghbGF5ZXJOYW1lKSB7XG4gICAgICAgIGxldCBydWxlSWQgPSBBcnJheS5mcm9tKHNoZWV0Py5jc3NSdWxlcyB8fCBbXSkuZmluZEluZGV4KChydWxlKSA9PiBydWxlIGluc3RhbmNlb2YgQ1NTU3R5bGVSdWxlICYmIHJ1bGUuc2VsZWN0b3JUZXh0Py50cmltPy4oKT8uZW5kc1dpdGg/LihzZWxlY3Rvcj8udHJpbT8uKCkgPz8gXCJcIikpO1xuICAgICAgICBpZiAocnVsZUlkID09PSAtMSAmJiBzaGVldCkgeyBydWxlSWQgPSBzaGVldD8uaW5zZXJ0UnVsZT8uKGAke3VzZWwgfHwgXCJcIn0gJHtzZWxlY3Rvcn1gPy50cmltPy4oKSArIFwiIHt9XCIpOyB9XG4gICAgICAgIHJldHVybiBzaGVldD8uY3NzUnVsZXM/LltydWxlSWRdO1xuICAgIH1cblxuICAgIC8vXG4gICAgcmV0dXJuIGdldFN0eWxlUnVsZShzZWxlY3RvciwgZ2V0U3R5bGVMYXllcihsYXllck5hbWUsIHNoZWV0KSwgbnVsbCwgYmFzaXMpO1xufTtcblxuLy9cbmNvbnN0IGhhc1R5cGVkT00gPVxuICAgIHR5cGVvZiBDU1NTdHlsZVZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgdHlwZW9mIENTU1VuaXRWYWx1ZSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuY29uc3QgaXNTdHlsZVZhbHVlID0gKHZhbDogYW55KTogdmFsIGlzIENTU1N0eWxlVmFsdWUgPT5cbiAgICBoYXNUeXBlZE9NICYmIHZhbCBpbnN0YW5jZW9mIENTU1N0eWxlVmFsdWU7XG5cbmNvbnN0IGlzVW5pdFZhbHVlID0gKHZhbDogYW55KTogdmFsIGlzIENTU1VuaXRWYWx1ZSA9PlxuICAgIGhhc1R5cGVkT00gJiYgdmFsIGluc3RhbmNlb2YgQ1NTVW5pdFZhbHVlO1xuXG5jb25zdCBzZXRQcm9wZXJ0eUlmTm90RXF1YWwgPSAoXG4gICAgc3R5bGVSZWY6IENTU1N0eWxlRGVjbGFyYXRpb24sXG4gICAga2ViYWI6IHN0cmluZyxcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVsbCxcbiAgICBpbXBvcnRhbmNlID0gXCJcIlxuKSA9PiB7XG4gICAgaWYgKCFzdHlsZVJlZiB8fCAha2ViYWIpIHJldHVybjtcblxuICAgIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChzdHlsZVJlZi5nZXRQcm9wZXJ0eVZhbHVlKGtlYmFiKSAhPT0gXCJcIikge1xuICAgICAgICBzdHlsZVJlZi5yZW1vdmVQcm9wZXJ0eShrZWJhYik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9sZCA9IHN0eWxlUmVmLmdldFByb3BlcnR5VmFsdWUoa2ViYWIpO1xuICAgIGlmIChvbGQgIT09IHZhbHVlKSB7XG4gICAgICAgIHN0eWxlUmVmLnNldFByb3BlcnR5KGtlYmFiLCB2YWx1ZSwgaW1wb3J0YW5jZSk7XG4gICAgfVxufTtcblxuLy9cbmV4cG9ydCBjb25zdCBzZXRTdHlsZVByb3BlcnR5VHlwZWQgPSAoXG4gICAgZWxlbWVudD86IEhUTUxFbGVtZW50IHwgbnVsbCxcbiAgICBuYW1lPzogc3RyaW5nLFxuICAgIHZhbHVlPzogYW55LFxuICAgIGltcG9ydGFuY2UgPSBcIlwiXG4pID0+IHtcbiAgICBpZiAoIWVsZW1lbnQgfHwgIW5hbWUpIHJldHVybiBlbGVtZW50O1xuXG4gICAgY29uc3Qga2ViYWIgPSBjYW1lbFRvS2ViYWIobmFtZSk7XG4gICAgY29uc3Qgc3R5bGVSZWYgPSBlbGVtZW50LnN0eWxlO1xuICAgIGNvbnN0IHN0eWxlTWFwUmVmOiBTdHlsZVByb3BlcnR5TWFwIHwgdW5kZWZpbmVkID1cbiAgICAgICAgKGVsZW1lbnQgYXMgYW55KS5hdHRyaWJ1dGVTdHlsZU1hcCA/PyAoZWxlbWVudCBhcyBhbnkpLnN0eWxlTWFwO1xuXG4gICAgLy8g0LXRgdC70Lgg0L3QtdGCIFR5cGVkIE9NINC40LvQuCBzdHlsZU1hcCDigJQg0YPRhdC+0LTQuNC8INCyINC+0LHRi9GH0L3Ri9C5INC/0YPRgtGMXG4gICAgaWYgKCFoYXNUeXBlZE9NIHx8ICFzdHlsZU1hcFJlZikge1xuICAgICAgICByZXR1cm4gc2V0U3R5bGVQcm9wZXJ0eUZhbGxiYWNrKGVsZW1lbnQsIG5hbWUsIHZhbHVlLCBpbXBvcnRhbmNlKTtcbiAgICB9XG5cbiAgICAvLyDRgNCw0YHQv9Cw0LrQvtCy0YvQstCw0LXQvCByZWZcbiAgICBsZXQgdmFsOiBhbnkgPSBoYXNWYWx1ZSh2YWx1ZSkgJiYgIShpc1N0eWxlVmFsdWUodmFsdWUpIHx8IGlzVW5pdFZhbHVlKHZhbHVlKSkgPyB2YWx1ZT8udmFsdWUgOiB2YWx1ZTtcblxuICAgIC8vIG51bGwvdW5kZWZpbmVkIC0+INGD0LTQsNC70LjRgtGMINGB0LLQvtC50YHRgtCy0L5cbiAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgICAgc3R5bGVNYXBSZWYuZGVsZXRlPy4oa2ViYWIpO1xuICAgICAgICAvLyDQtNC70Y8g0YHQuNC90YXRgNC+0L3QuNC30LDRhtC40Lgg0LvRg9GH0YjQtSDRgtC+0LbQtSDQv9C+0LTRh9C40YHRgtC40YLRjCDQvtCx0YvRh9C90YvQuSBzdHlsZVxuICAgICAgICBpZiAoc3R5bGVSZWYpIHtcbiAgICAgICAgICAgIHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIG51bGwsIGltcG9ydGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIC8vINGD0LbQtSBDU1NTdHlsZVZhbHVlXG4gICAgaWYgKGlzU3R5bGVWYWx1ZSh2YWwpKSB7XG4gICAgICAgIGNvbnN0IG9sZCA9IHN0eWxlTWFwUmVmLmdldChrZWJhYik7XG4gICAgICAgIC8vINGB0YDQsNCy0L3QuNCy0LDQtdC8INC/0L4gdmFsdWUvdW5pdCwg0L3QviDQndCVINC80YPRgtC40YDRg9C10Lwg0YHRgtCw0YDRi9C5XG4gICAgICAgIGlmIChpc1VuaXRWYWx1ZSh2YWwpICYmIGlzVW5pdFZhbHVlKG9sZCkpIHtcbiAgICAgICAgICAgIGlmIChvbGQudmFsdWUgPT09IHZhbC52YWx1ZSAmJiBvbGQudW5pdCA9PT0gdmFsLnVuaXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDsgLy8g0LHQtdC3INC40LfQvNC10L3QtdC90LjQuVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG9sZCA9PT0gdmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDsgLy8g0YLQvtGCINC20LUg0L7QsdGK0LXQutGCLCDQvdC40YfQtdCz0L4g0L3QtSDQtNC10LvQsNC10LxcbiAgICAgICAgfVxuICAgICAgICBzdHlsZU1hcFJlZi5zZXQoa2ViYWIsIHZhbCk7IC8vINC/0YDQvtGB0YLQviDRgdGC0LDQstC40Lwg0L3QvtCy0L7QtSDQt9C90LDRh9C10L3QuNC1XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIC8vINGH0LjRgdC70L4gLT4gQ1NTVW5pdFZhbHVlKCdudW1iZXInKSDQuNC70Lgg0L7QsdGL0YfQvdCw0Y8g0YHRgtGA0L7QutCwXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgLy8g0LfQtNC10YHRjCDQtNCy0LAg0LLQsNGA0LjQsNC90YLQsDpcbiAgICAgICAgLy8gMSkg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGMIENTUy5weCAvIENTUy5udW1iZXIsINC10YHQu9C4INGF0L7Rh9C10YjRjCBUeXBlZCBPTSDQv9C+0LvQvdC+0YbQtdC90L3QvlxuICAgICAgICAvLyAyKSDQvtGB0YLQsNCy0LjRgtGMINC60LDQuiBzdHJpbmcsINGH0YLQvtCx0Ysg0L3QtSDQv9C70L7QtNC40YLRjCBDU1NVbml0VmFsdWUg0LHQtdC3INC90YPQttC00YtcbiAgICAgICAgLy9cbiAgICAgICAgLy8g0J/RgNC40LzQtdGAINGBIENTUy5udW1iZXIgKNC10YHQu9C4INC/0L7QtNC00LXRgNC20LjQstCw0LXRgtGB0Y8pOlxuICAgICAgICBpZiAoKENTUyBhcyBhbnkpPy5udW1iZXIgJiYgIWtlYmFiLnN0YXJ0c1dpdGgoXCItLVwiKSkge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsOiBDU1NVbml0VmFsdWUgPSAoQ1NTIGFzIGFueSkubnVtYmVyKHZhbCk7XG4gICAgICAgICAgICBjb25zdCBvbGQgPSBzdHlsZU1hcFJlZi5nZXQoa2ViYWIpO1xuICAgICAgICAgICAgaWYgKGlzVW5pdFZhbHVlKG9sZCkgJiYgb2xkLnZhbHVlID09PSBuZXdWYWwudmFsdWUgJiYgb2xkLnVuaXQgPT09IG5ld1ZhbC51bml0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHlsZU1hcFJlZi5zZXQoa2ViYWIsIG5ld1ZhbCk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGZhbGxiYWNrINCyINC+0LHRi9GH0L3Ri9C5INGB0YLQuNC70YxcbiAgICAgICAgICAgIHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIFN0cmluZyh2YWwpLCBpbXBvcnRhbmNlKTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g0YHRgtGA0L7QutC4INC4INCy0YHRkSDQvtGB0YLQsNC70YzQvdC+0LU6INC/0L7Qv9GL0YLQutCwIFR5cGVkIE9NIC0+IGZhbGxiYWNrINCyINGB0YLRgNC+0LrRg1xuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiICYmICFpc1N0eWxlVmFsdWUodmFsKSkge1xuICAgICAgICBjb25zdCBtYXliZU51bSA9IHRyeVN0cmluZ0FzTnVtYmVyKHZhbCk7XG4gICAgICAgIGlmICh0eXBlb2YgbWF5YmVOdW0gPT09IFwibnVtYmVyXCIgJiYgKENTUyBhcyBhbnkpPy5udW1iZXIgJiYgIWtlYmFiLnN0YXJ0c1dpdGgoXCItLVwiKSkge1xuICAgICAgICAgICAgY29uc3QgbmV3VmFsOiBDU1NVbml0VmFsdWUgPSAoQ1NTIGFzIGFueSkubnVtYmVyKG1heWJlTnVtKTtcbiAgICAgICAgICAgIGNvbnN0IG9sZCA9IHN0eWxlTWFwUmVmLmdldChrZWJhYik7XG4gICAgICAgICAgICBpZiAoaXNVbml0VmFsdWUob2xkKSAmJiBvbGQudmFsdWUgPT09IG5ld1ZhbC52YWx1ZSAmJiBvbGQudW5pdCA9PT0gbmV3VmFsLnVuaXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0eWxlTWFwUmVmLnNldChrZWJhYiwgbmV3VmFsKTtcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g0L7QsdGL0YfQvdC+0LUg0YHRgtGA0L7QutC+0LLQvtC1INC30L3QsNGH0LXQvdC40LVcbiAgICAgICAgICAgIHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIHZhbCwgaW1wb3J0YW5jZSk7XG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vINC70Y7QsdC+0Lkg0LTRgNGD0LPQvtC5INGC0LjQvyAtPiDRgdGC0YDQvtC60LBcbiAgICBzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuXG4vL1xuZXhwb3J0IGNvbnN0IHNldFN0eWxlUHJvcGVydHlGYWxsYmFjayA9IChcbiAgICBlbGVtZW50PzogSFRNTEVsZW1lbnQgfCBudWxsLFxuICAgIG5hbWU/OiBzdHJpbmcsXG4gICAgdmFsdWU/OiBhbnksXG4gICAgaW1wb3J0YW5jZSA9IFwiXCJcbikgPT4ge1xuICAgIGlmICghZWxlbWVudCB8fCAhbmFtZSkgcmV0dXJuIGVsZW1lbnQ7XG5cbiAgICBjb25zdCBrZWJhYiA9IGNhbWVsVG9LZWJhYihuYW1lKTtcbiAgICBjb25zdCBzdHlsZVJlZiA9IGVsZW1lbnQuc3R5bGU7XG4gICAgaWYgKCFzdHlsZVJlZikgcmV0dXJuIGVsZW1lbnQ7XG5cbiAgICAvLyDRgNCw0YHQv9Cw0LrQvtCy0YvQstCw0LXQvCByZWYsINC10YHQu9C4INC90YPQttC90L5cbiAgICBsZXQgdmFsOiBhbnkgPSAoaGFzVmFsdWUodmFsdWUpICYmICEoaXNTdHlsZVZhbHVlKHZhbHVlKSB8fCBpc1VuaXRWYWx1ZSh2YWx1ZSkpKSA/IHZhbHVlPy52YWx1ZSA6IHZhbHVlO1xuXG4gICAgLy8g0L/RgNC+0LHRg9C10Lwg0YfQuNGB0LvQviDQuNC3INGB0YLRgNC+0LrQuFxuICAgIGlmICh0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiICYmICFpc1N0eWxlVmFsdWUodmFsKSkge1xuICAgICAgICB2YWwgPSB0cnlTdHJpbmdBc051bWJlcih2YWwpID8/IHZhbDtcbiAgICB9XG5cbiAgICAvLyBudWxsL3VuZGVmaW5lZCDigJQg0YPQsdGA0LDRgtGMXG4gICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgIHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIG51bGwsIGltcG9ydGFuY2UpO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyBDU1NTdHlsZVZhbHVlIC0+INGB0YLRgNC+0LrQsFxuICAgIGlmIChpc1N0eWxlVmFsdWUodmFsKSkge1xuICAgICAgICBzZXRQcm9wZXJ0eUlmTm90RXF1YWwoc3R5bGVSZWYsIGtlYmFiLCBTdHJpbmcodmFsKSwgaW1wb3J0YW5jZSk7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIC8vINGH0LjRgdC70L4gLT4g0YHRgtGA0L7QutCwICjQvdCwINGC0LLQvtC5INCy0LrRg9GBINC80L7QttC90L4g0LTQvtCx0LDQstC40YLRjCAncHgnINC00LvRjyDQvdC10LrQvtGC0L7RgNGL0YUg0YHQstC+0LnRgdGC0LIpXG4gICAgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgc2V0UHJvcGVydHlJZk5vdEVxdWFsKHN0eWxlUmVmLCBrZWJhYiwgU3RyaW5nKHZhbCksIGltcG9ydGFuY2UpO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyDQstGB0ZEg0L7RgdGC0LDQu9GM0L3QvtC1IC0+INGB0YLRgNC+0LrQsFxuICAgIHNldFByb3BlcnR5SWZOb3RFcXVhbChzdHlsZVJlZiwga2ViYWIsIFN0cmluZyh2YWwpLCBpbXBvcnRhbmNlKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn07XG5cbi8vXG5jb25zdCBwcm9taXNlT3JEaXJlY3QgPSAocHJvbWlzZTogYW55fFByb21pc2U8YW55PiwgY2I6ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBwcm9taXNlPy50aGVuID09IFwiZnVuY3Rpb25cIikgeyByZXR1cm4gcHJvbWlzZT8udGhlbj8uKGNiKTsgfVxuICAgIHJldHVybiBjYihwcm9taXNlKTtcbn1cblxuLy9cbmNvbnN0IGJsb2JVUkxNYXAgPSBuZXcgV2Vha01hcDxCbG9iIHwgRmlsZSwgc3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+PigpO1xuY29uc3QgY2FjaGVNYXAgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+PigpO1xuXG4vL1xuZXhwb3J0IGNvbnN0IGZldGNoQW5kQ2FjaGUgPSAodXJsOiBzdHJpbmcgfCBCbG9iIHwgRmlsZSk6IGFueSA9PiB7XG4gICAgaWYgKCF1cmwpIHJldHVybiBudWxsO1xuXG4gICAgLy9cbiAgICBpZiAoY2FjaGVNYXAuaGFzKHVybCBhcyBzdHJpbmcpKSB7IHJldHVybiBjYWNoZU1hcC5nZXQodXJsIGFzIHN0cmluZyk7IH1cblxuICAgIC8vXG4gICAgaWYgKHVybCBpbnN0YW5jZW9mIEJsb2IgfHwgKHVybCBhcyBhbnkpIGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgICBpZiAoYmxvYlVSTE1hcC5oYXModXJsIGFzIEJsb2IgfCBGaWxlKSkgeyByZXR1cm4gYmxvYlVSTE1hcC5nZXQodXJsIGFzIEJsb2IgfCBGaWxlKTsgfVxuICAgICAgICBjb25zdCBidXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh1cmwgYXMgQmxvYiB8IEZpbGUpO1xuICAgICAgICBibG9iVVJMTWFwLnNldCh1cmwgYXMgQmxvYiB8IEZpbGUsIGJ1cmwpO1xuICAgICAgICBjYWNoZU1hcC5zZXQoYnVybCBhcyBzdHJpbmcsIGJ1cmwpO1xuICAgICAgICByZXR1cm4gYnVybDtcbiAgICB9XG5cbiAgICAvL1xuICAgIGlmIChVUkwuY2FuUGFyc2UodXJsIGFzIHN0cmluZykgfHwgdXJsPy50cmltPy4oKT8uc3RhcnRzV2l0aD8uKFwiLi9cIikpIHtcbiAgICAgICAgY29uc3QgcHJvbWlzZWQgPSBmZXRjaCh1cmw/LnJlcGxhY2U/LihcIj91cmxcIiwgXCI/cmF3XCIpLCB7XG4gICAgICAgICAgICBjYWNoZTogXCJmb3JjZS1jYWNoZVwiLFxuICAgICAgICAgICAgbW9kZTogXCJzYW1lLW9yaWdpblwiLFxuICAgICAgICAgICAgcHJpb3JpdHk6IFwiaGlnaFwiLFxuXG4gICAgICAgIH0pPy50aGVuPy4oYXN5bmMgKHJlczogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBhd2FpdCByZXMuYmxvYigpO1xuICAgICAgICAgICAgY29uc3QgYnVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgICBibG9iVVJMTWFwLnNldChibG9iIGFzIEJsb2IgfCBGaWxlLCBidXJsKTtcbiAgICAgICAgICAgIGNhY2hlTWFwLnNldCh1cmwgYXMgc3RyaW5nLCBidXJsKTtcbiAgICAgICAgICAgIGNhY2hlTWFwLnNldChidXJsIGFzIHN0cmluZywgYnVybCk7XG4gICAgICAgICAgICByZXR1cm4gYnVybDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9cbiAgICAgICAgY2FjaGVNYXAuc2V0KHVybCBhcyBzdHJpbmcsIHByb21pc2VkIGFzIFByb21pc2U8c3RyaW5nPik7XG4gICAgICAgIHJldHVybiBwcm9taXNlZDtcbiAgICB9XG5cbiAgICAvL1xuICAgIGlmICh0eXBlb2YgdXJsID09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFt1cmxdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcbiAgICAgICAgY29uc3QgYnVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgIGJsb2JVUkxNYXAuc2V0KGJsb2IgYXMgQmxvYiB8IEZpbGUsIGJ1cmwpO1xuICAgICAgICAvL2NhY2hlTWFwLnNldCh1cmwgYXMgc3RyaW5nLCBidXJsKTtcbiAgICAgICAgY2FjaGVNYXAuc2V0KGJ1cmwgYXMgc3RyaW5nLCBidXJsKTtcbiAgICAgICAgcmV0dXJuIGJ1cmw7XG4gICAgfVxuXG4gICAgLy9cbiAgICByZXR1cm4gdXJsIGFzIHN0cmluZztcbn1cblxuLy9cbmNvbnN0IGNhY2hlQ29udGVudE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4+KCk7XG5jb25zdCBjYWNoZUJsb2JDb250ZW50TWFwID0gbmV3IFdlYWtNYXA8QmxvYiB8IEZpbGUsIHN0cmluZyB8IFByb21pc2U8c3RyaW5nPj4oKTtcbmV4cG9ydCBjb25zdCBmZXRjaEFzSW5saW5lID0gKHVybDogc3RyaW5nIHwgQmxvYiB8IEZpbGUpOiBQcm9taXNlPHN0cmluZz58c3RyaW5nID0+IHtcbiAgICBpZiAoIXVybCkgcmV0dXJuIFwiXCI7XG5cbiAgICAvL1xuICAgIGlmIChjYWNoZUNvbnRlbnRNYXAuaGFzKHVybCBhcyBzdHJpbmcpKSB7IHJldHVybiBjYWNoZUNvbnRlbnRNYXAuZ2V0KHVybCBhcyBzdHJpbmcpID8/IFwiXCI7IH1cblxuICAgIC8vXG4gICAgaWYgKHVybCBpbnN0YW5jZW9mIEJsb2IgfHwgKHVybCBhcyBhbnkpIGluc3RhbmNlb2YgRmlsZSkge1xuICAgICAgICBpZiAoY2FjaGVCbG9iQ29udGVudE1hcC5oYXModXJsIGFzIEJsb2IgfCBGaWxlKSkgeyByZXR1cm4gY2FjaGVCbG9iQ29udGVudE1hcC5nZXQodXJsIGFzIEJsb2IgfCBGaWxlKSA/PyBcIlwiOyB9XG5cbiAgICAgICAgLy9cbiAgICAgICAgY29uc3QgcHJvbWlzZWQgPSAodXJsIGFzIGFueSk/LnRleHQ/LigpPy50aGVuPy4odGV4dCA9PiB7XG4gICAgICAgICAgICBjYWNoZUJsb2JDb250ZW50TWFwLnNldCh1cmwgYXMgQmxvYiB8IEZpbGUsIHRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgIH0pO1xuICAgICAgICBjYWNoZUJsb2JDb250ZW50TWFwLnNldCh1cmwgYXMgQmxvYiB8IEZpbGUsIHByb21pc2VkKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2VkO1xuICAgIH1cblxuICAgIC8vXG4gICAgaWYgKFVSTC5jYW5QYXJzZSh1cmwgYXMgc3RyaW5nKSB8fCB1cmw/LnRyaW0/LigpPy5zdGFydHNXaXRoPy4oXCIuL1wiKSkge1xuICAgICAgICBjb25zdCBwcm9taXNlZCA9IGZldGNoKHVybD8ucmVwbGFjZT8uKFwiP3VybFwiLCBcIj9yYXdcIiksIHtcbiAgICAgICAgICAgIGNhY2hlOiBcImZvcmNlLWNhY2hlXCIsXG4gICAgICAgICAgICBtb2RlOiBcInNhbWUtb3JpZ2luXCIsXG4gICAgICAgICAgICBwcmlvcml0eTogXCJoaWdoXCIsXG5cbiAgICAgICAgfSk/LnRoZW4/Lihhc3luYyAocmVzOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XG4gICAgICAgICAgICBjYWNoZUNvbnRlbnRNYXAuc2V0KHVybCBhcyBzdHJpbmcsIHRleHQpO1xuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgIH0pO1xuICAgICAgICBjYWNoZUNvbnRlbnRNYXAuc2V0KHVybCBhcyBzdHJpbmcsIHByb21pc2VkKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2VkO1xuICAgIH1cblxuICAgIC8vXG4gICAgaWYgKHR5cGVvZiB1cmwgPT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjYWNoZUNvbnRlbnRNYXAuc2V0KHVybCBhcyBzdHJpbmcsIHVybCk7XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLy9cbiAgICByZXR1cm4gdXJsIGFzIHN0cmluZztcbn1cblxuLy9cbmNvbnN0IGFkb3B0ZWRTZWxlY3Rvck1hcCA9IG5ldyBNYXA8c3RyaW5nLCBDU1NTdHlsZVNoZWV0PigpO1xuY29uc3QgYWRvcHRlZFNoYWRvd1NlbGVjdG9yTWFwID0gbmV3IFdlYWtNYXA8U2hhZG93Um9vdCwgTWFwPHN0cmluZywgQ1NTU3R5bGVTaGVldD4+KCk7XG5jb25zdCBhZG9wdGVkTGF5ZXJNYXAgPSBuZXcgTWFwPHN0cmluZywgQ1NTTGF5ZXJCbG9ja1J1bGU+KCk7XG5jb25zdCBhZG9wdGVkU2hhZG93TGF5ZXJNYXAgPSBuZXcgV2Vha01hcDxTaGFkb3dSb290LCBNYXA8c3RyaW5nLCBDU1NMYXllckJsb2NrUnVsZT4+KCk7XG5cbi8vXG5leHBvcnQgY29uc3QgZ2V0QWRvcHRlZFN0eWxlUnVsZSA9IChzZWxlY3Rvcjogc3RyaW5nLCBsYXllck5hbWU6IHN0cmluZyB8IG51bGwgPSBcInV4LXF1ZXJ5XCIsIGJhc2lzOiBhbnkgPSBudWxsKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RvcikgcmV0dXJuIG51bGw7XG5cbiAgICBjb25zdCByb290ID0gYmFzaXMgaW5zdGFuY2VvZiBTaGFkb3dSb290ID8gYmFzaXMgOiAoYmFzaXM/LmdldFJvb3ROb2RlID8gYmFzaXMuZ2V0Um9vdE5vZGUoeyBjb21wb3NlZDogdHJ1ZSB9KSA6IG51bGwpO1xuICAgIGNvbnN0IGlzU2hhZG93Um9vdCA9IHJvb3QgaW5zdGFuY2VvZiBTaGFkb3dSb290O1xuICAgIGNvbnN0IHRhcmdldEFkb3B0ZWRTaGVldHMgPSBpc1NoYWRvd1Jvb3QgPyByb290LmFkb3B0ZWRTdHlsZVNoZWV0cyA6ICh0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cyA6IG51bGwpO1xuXG4gICAgaWYgKCF0YXJnZXRBZG9wdGVkU2hlZXRzKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IHNlbGVjdG9yS2V5ID0gYCR7bGF5ZXJOYW1lIHx8IFwiXCJ9OiR7c2VsZWN0b3J9YDtcbiAgICBsZXQgc2hlZXQ6IENTU1N0eWxlU2hlZXQgfCB1bmRlZmluZWQ7XG5cbiAgICBpZiAoaXNTaGFkb3dSb290KSB7XG4gICAgICAgIGxldCBzaGFkb3dNYXAgPSBhZG9wdGVkU2hhZG93U2VsZWN0b3JNYXAuZ2V0KHJvb3QpO1xuICAgICAgICBpZiAoIXNoYWRvd01hcCkge1xuICAgICAgICAgICAgc2hhZG93TWFwID0gbmV3IE1hcCgpO1xuICAgICAgICAgICAgYWRvcHRlZFNoYWRvd1NlbGVjdG9yTWFwLnNldChyb290LCBzaGFkb3dNYXApO1xuICAgICAgICB9XG4gICAgICAgIHNoZWV0ID0gc2hhZG93TWFwLmdldChzZWxlY3RvcktleSk7XG5cbiAgICAgICAgaWYgKCFzaGVldCkge1xuICAgICAgICAgICAgc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgc2hhZG93TWFwLnNldChzZWxlY3RvcktleSwgc2hlZXQpO1xuXG4gICAgICAgICAgICBpZiAoIXRhcmdldEFkb3B0ZWRTaGVldHMuaW5jbHVkZXMoc2hlZXQpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0QWRvcHRlZFNoZWV0cy5wdXNoKHNoZWV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNoZWV0ID0gYWRvcHRlZFNlbGVjdG9yTWFwLmdldChzZWxlY3RvcktleSk7XG5cbiAgICAgICAgaWYgKCFzaGVldCkge1xuICAgICAgICAgICAgc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpO1xuICAgICAgICAgICAgYWRvcHRlZFNlbGVjdG9yTWFwLnNldChzZWxlY3RvcktleSwgc2hlZXQpO1xuXG4gICAgICAgICAgICBpZiAoIXRhcmdldEFkb3B0ZWRTaGVldHMuaW5jbHVkZXMoc2hlZXQpKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0QWRvcHRlZFNoZWV0cy5wdXNoKHNoZWV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmIChsYXllck5hbWUpIHtcbiAgICAgICAgbGV0IGxheWVyUnVsZTogQ1NTTGF5ZXJCbG9ja1J1bGUgfCB1bmRlZmluZWQ7XG5cbiAgICAgICAgaWYgKGlzU2hhZG93Um9vdCkge1xuICAgICAgICAgICAgbGV0IHNoYWRvd0xheWVyTWFwID0gYWRvcHRlZFNoYWRvd0xheWVyTWFwLmdldChyb290KTtcbiAgICAgICAgICAgIGlmICghc2hhZG93TGF5ZXJNYXApIHtcbiAgICAgICAgICAgICAgICBzaGFkb3dMYXllck1hcCA9IG5ldyBNYXAoKTtcbiAgICAgICAgICAgICAgICBhZG9wdGVkU2hhZG93TGF5ZXJNYXAuc2V0KHJvb3QsIHNoYWRvd0xheWVyTWFwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxheWVyUnVsZSA9IHNoYWRvd0xheWVyTWFwLmdldChsYXllck5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGF5ZXJSdWxlID0gYWRvcHRlZExheWVyTWFwLmdldChsYXllck5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFsYXllclJ1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJ1bGVzID0gQXJyYXkuZnJvbShzaGVldC5jc3NSdWxlcyB8fCBbXSk7XG4gICAgICAgICAgICBjb25zdCBsYXllckluZGV4ID0gcnVsZXMuZmluZEluZGV4KChydWxlKSA9PlxuICAgICAgICAgICAgICAgIHJ1bGUgaW5zdGFuY2VvZiBDU1NMYXllckJsb2NrUnVsZSAmJiBydWxlLm5hbWUgPT09IGxheWVyTmFtZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChsYXllckluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHNoZWV0Lmluc2VydFJ1bGUoYEBsYXllciAke2xheWVyTmFtZX0ge31gLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdSdWxlID0gc2hlZXQuY3NzUnVsZXNbc2hlZXQuY3NzUnVsZXMubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdSdWxlIGluc3RhbmNlb2YgQ1NTTGF5ZXJCbG9ja1J1bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyUnVsZSA9IG5ld1J1bGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxheWVyUnVsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxheWVyUnVsZSA9IHJ1bGVzW2xheWVySW5kZXhdIGFzIENTU0xheWVyQmxvY2tSdWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxheWVyUnVsZSkge1xuICAgICAgICAgICAgICAgIGlmIChpc1NoYWRvd1Jvb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNoYWRvd0xheWVyTWFwID0gYWRvcHRlZFNoYWRvd0xheWVyTWFwLmdldChyb290KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzaGFkb3dMYXllck1hcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhZG93TGF5ZXJNYXAgPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZG9wdGVkU2hhZG93TGF5ZXJNYXAuc2V0KHJvb3QsIHNoYWRvd0xheWVyTWFwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzaGFkb3dMYXllck1hcC5zZXQobGF5ZXJOYW1lLCBsYXllclJ1bGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGFkb3B0ZWRMYXllck1hcC5zZXQobGF5ZXJOYW1lLCBsYXllclJ1bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsYXllclJ1bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGxheWVyUnVsZXMgPSBBcnJheS5mcm9tKGxheWVyUnVsZS5jc3NSdWxlcyB8fCBbXSk7XG4gICAgICAgICAgICBsZXQgbGF5ZXJSdWxlSW5kZXggPSBsYXllclJ1bGVzLmZpbmRJbmRleCgocikgPT5cbiAgICAgICAgICAgICAgICByIGluc3RhbmNlb2YgQ1NTU3R5bGVSdWxlICYmIHIuc2VsZWN0b3JUZXh0Py50cmltPy4oKSA9PT0gc2VsZWN0b3I/LnRyaW0/LigpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKGxheWVyUnVsZUluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGxheWVyUnVsZUluZGV4ID0gbGF5ZXJSdWxlLmluc2VydFJ1bGUoYCR7c2VsZWN0b3J9IHt9YCwgbGF5ZXJSdWxlLmNzc1J1bGVzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbGF5ZXJSdWxlLmNzc1J1bGVzW2xheWVyUnVsZUluZGV4XSBhcyBDU1NTdHlsZVJ1bGU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBydWxlcyA9IEFycmF5LmZyb20oc2hlZXQuY3NzUnVsZXMgfHwgW10pO1xuICAgIGxldCBydWxlSW5kZXggPSBydWxlcy5maW5kSW5kZXgoKHJ1bGUpID0+XG4gICAgICAgIHJ1bGUgaW5zdGFuY2VvZiBDU1NTdHlsZVJ1bGUgJiYgcnVsZS5zZWxlY3RvclRleHQ/LnRyaW0/LigpID09PSBzZWxlY3Rvcj8udHJpbT8uKClcbiAgICApO1xuXG4gICAgaWYgKHJ1bGVJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJ1bGVJbmRleCA9IHNoZWV0Lmluc2VydFJ1bGUoYCR7c2VsZWN0b3J9IHt9YCwgc2hlZXQuY3NzUnVsZXMubGVuZ3RoKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBydWxlID0gc2hlZXQuY3NzUnVsZXNbcnVsZUluZGV4XTtcbiAgICBpZiAocnVsZSBpbnN0YW5jZW9mIENTU1N0eWxlUnVsZSkge1xuICAgICAgICByZXR1cm4gcnVsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbi8vXG5leHBvcnQgY29uc3Qgc2V0U3R5bGVQcm9wZXJ0eSA9IChlbGVtZW50PzogSFRNTEVsZW1lbnQgfCBudWxsLCBuYW1lPzogc3RyaW5nLCB2YWx1ZT86IGFueSwgaW1wb3J0YW5jZSA9IFwiXCIpID0+IHtcbiAgICByZXR1cm4gaGFzVHlwZWRPTSA/IHNldFN0eWxlUHJvcGVydHlUeXBlZChlbGVtZW50LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSkgOiBzZXRTdHlsZVByb3BlcnR5RmFsbGJhY2soZWxlbWVudCwgbmFtZSwgdmFsdWUsIGltcG9ydGFuY2UpO1xufVxuXG4vL1xuZXhwb3J0IGNvbnN0IHNldFN0eWxlSW5SdWxlID0gKHNlbGVjdG9yOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkgPT4ge1xuICAgIHJldHVybiBzZXRTdHlsZVByb3BlcnR5KGdldFN0eWxlUnVsZShzZWxlY3RvciksIG5hbWUsIHZhbHVlKTtcbn07XG5cbi8vXG5leHBvcnQgY29uc3Qgc2V0U3R5bGVSdWxlID0gKHNlbGVjdG9yOiBzdHJpbmcsIHNoZWV0OiBvYmplY3QpID0+IHtcbiAgICBjb25zdCBydWxlID0gZ2V0U3R5bGVSdWxlKHNlbGVjdG9yKTtcbiAgICBPYmplY3QuZW50cmllcyhzaGVldCkuZm9yRWFjaCgoW3Byb3BOYW1lLCBwcm9wVmFsdWVdKSA9PiBzZXRTdHlsZVByb3BlcnR5KHJ1bGUsIHByb3BOYW1lLCBwcm9wVmFsdWUpKTtcbiAgICByZXR1cm4gcnVsZTtcbn07XG5cbi8vXG5leHBvcnQgY29uc3QgaGFzaCA9IGFzeW5jIChzdHJpbmc6IHN0cmluZ3xBcnJheUJ1ZmZlcnxCbG9ifEZpbGUpID0+IHtcbiAgICBjb25zdCBoYXNoQnVmZmVyID0gYXdhaXQgY3J5cHRvPy5zdWJ0bGU/LmRpZ2VzdCgnU0hBLTI1NicsIHR5cGVvZiBzdHJpbmcgPT0gXCJzdHJpbmdcIiA/IG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZShzdHJpbmcpIDogKHN0cmluZyBpbnN0YW5jZW9mIEFycmF5QnVmZmVyID8gc3RyaW5nIDogKGF3YWl0ICgoc3RyaW5nIGFzIGFueSk/LmFycmF5QnVmZmVyPy4oKSkpKSk7XG4gICAgcmV0dXJuIFwic2hhMjU2LVwiICsgYnRvYShTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIG5ldyBVaW50OEFycmF5KGhhc2hCdWZmZXIpIGFzIHVua25vd24gYXMgbnVtYmVyW10pKTtcbn07XG5cbi8vXG5leHBvcnQgY29uc3QgbG9hZFN0eWxlU2hlZXQgPSAoaW5saW5lOiBzdHJpbmd8RmlsZXxCbG9iLCBiYXNlPzogW2FueSwgYW55XSwgbGF5ZXI6IHN0cmluZyA9IFwiXCIsIGludGVncml0eT86IHN0cmluZ3xQcm9taXNlPHN0cmluZz4pPT57IC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBsb2FkID0gZmV0Y2hBbmRDYWNoZShpbmxpbmUpO1xuICAgIGNvbnN0IHVybCA9IHR5cGVvZiBpbmxpbmUgPT0gXCJzdHJpbmdcIiA/IChVUkwuY2FuUGFyc2UoaW5saW5lKSA/IGlubGluZSA6IGxvYWQpIDogbG9hZDtcblxuICAgIC8vXG4gICAgaWYgKGJhc2U/LlswXSkgYmFzZVswXS5mZXRjaFByaW9yaXR5ID0gXCJoaWdoXCI7XG4gICAgaWYgKGJhc2UgJiYgdXJsICYmIHR5cGVvZiB1cmwgPT0gXCJzdHJpbmdcIikgeyBzZXRTdHlsZVVSTChiYXNlLCB1cmwsIGxheWVyKTsgfTtcbiAgICBpZiAoYmFzZT8uWzBdICYmICghVVJMLmNhblBhcnNlKGlubGluZSBhcyBzdHJpbmcpIHx8IGludGVncml0eSkgJiYgYmFzZT8uWzBdIGluc3RhbmNlb2YgSFRNTExpbmtFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IEk6IGFueSA9IG51bGw7Ly8oaW50ZWdyaXR5ID8/ICh0eXBlb2YgaW5saW5lID09IFwic3RyaW5nXCIgPyBoYXNoKGlubGluZSkgOiBudWxsKSk7XG4gICAgICAgIC8vaWYgKHR5cGVvZiBJPy50aGVuID09IFwiZnVuY3Rpb25cIikgeyBJPy50aGVuPy4oKEgpID0+IGJhc2U/LlswXT8uc2V0QXR0cmlidXRlPy4oXCJpbnRlZ3JpdHlcIiwgSCkpOyB9IGVsc2VcbiAgICAgICAgICAgIC8vaWYgKEkpIHsgYmFzZT8uWzBdPy5zZXRBdHRyaWJ1dGU/LihcImludGVncml0eVwiLCBJIGFzIHN0cmluZyk7IH1cbiAgICB9XG5cbiAgICAvL1xuICAgIHJldHVybiBwcm9taXNlT3JEaXJlY3QobG9hZCwgKHJlcz86IGFueSB8IG51bGwpID0+IHtcbiAgICAgICAgaWYgKGJhc2U/LlswXSAmJiByZXMpIHtcbiAgICAgICAgICAgIHNldFN0eWxlVVJMKGJhc2UsIHJlcywgbGF5ZXIpO1xuICAgICAgICAgICAgYmFzZT8uWzBdLnNldEF0dHJpYnV0ZShcImxvYWRlZFwiLCBcIlwiKTtcbiAgICAgICAgfVxuICAgIH0pPy5jYXRjaD8uKChlcnJvcjogYW55KSA9PiB7IGNvbnNvbGUud2FybihcIkZhaWxlZCB0byBsb2FkIHN0eWxlIHNoZWV0OlwiLCBlcnJvcik7IH0pO1xuXG4gICAgLy9cbiAgICByZXR1cm4gYmFzZT8uWzBdO1xufTtcblxuLy9cbmV4cG9ydCBjb25zdCBsb2FkQmxvYlN0eWxlID0gKGlubGluZTogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgc3R5bGUgPSB0eXBlb2YgZG9jdW1lbnQgIT0gXCJ1bmRlZmluZWRcIiA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpIDogbnVsbDtcbiAgICBpZiAoc3R5bGUpIHN0eWxlLmZldGNoUHJpb3JpdHkgPSBcImhpZ2hcIjtcbiAgICBpZiAoc3R5bGUpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihzdHlsZSwgeyByZWw6IFwic3R5bGVzaGVldFwiLCB0eXBlOiBcInRleHQvY3NzXCIsIGNyb3NzT3JpZ2luOiBcInNhbWUtb3JpZ2luXCIgfSk7IHN0eWxlLmRhdGFzZXQub3duZXIgPSBPV05FUjsgbG9hZFN0eWxlU2hlZXQoaW5saW5lLCBbc3R5bGUsIFwiaHJlZlwiXSk7IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuaGVhZC5hcHBlbmQoc3R5bGUpIDogbnVsbDsgcmV0dXJuIHN0eWxlO1xuICAgIH07XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG4vL1xuZXhwb3J0IGNvbnN0IGxvYWRJbmxpbmVTdHlsZSA9IChpbmxpbmU6IHN0cmluZywgcm9vdEVsZW1lbnQ6IGFueSA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQ/LmhlYWQgOiBudWxsLCBsYXllcjogc3RyaW5nID0gXCJcIikgPT4ge1xuICAgIC8vaWYgKCFyb290RWxlbWVudCkgcmV0dXJuO1xuICAgIGNvbnN0IFBMQUNFID0gKHJvb3RFbGVtZW50Py5xdWVyeVNlbGVjdG9yPy4oXCJoZWFkXCIpID8/IHJvb3RFbGVtZW50KTsgaWYgKHR5cGVvZiBIVE1MSGVhZEVsZW1lbnQgIT0gXCJ1bmRlZmluZWRcIiAmJiBQTEFDRSBpbnN0YW5jZW9mIEhUTUxIZWFkRWxlbWVudCkgeyByZXR1cm4gbG9hZEJsb2JTdHlsZShpbmxpbmUpOyB9IC8vIEB0cy1pZ25vcmVcbiAgICBjb25zdCBzdHlsZSA9IHR5cGVvZiBkb2N1bWVudCAhPSBcInVuZGVmaW5lZFwiID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpIDogbnVsbDsgaWYgKHN0eWxlKSB7IHN0eWxlLmRhdGFzZXQub3duZXIgPSBPV05FUjsgbG9hZFN0eWxlU2hlZXQoaW5saW5lLCBbc3R5bGUsIFwiaW5uZXJIVE1MXCJdLCBsYXllcik7IFBMQUNFPy5wcmVwZW5kPy4oc3R5bGUpOyByZXR1cm4gc3R5bGU7IH1cbiAgICByZXR1cm4gbnVsbDtcbn07XG5cbi8vXG5leHBvcnQgY29uc3Qgc2V0UHJvcGVydHkgPSAodGFyZ2V0LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSA9IFwiXCIpPT57XG4gICAgcmV0dXJuIHNldFN0eWxlUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB2YWx1ZSwgaW1wb3J0YW5jZSk7XG59XG5cbi8vXG5leHBvcnQgY29uc3QgcHJlbG9hZFN0eWxlID0gKHN0eWxlczogc3RyaW5nKT0+e1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gbG9hZEFzQWRvcHRlZChzdHlsZXMsIFwiXCIpO1xufVxuXG4vL1xuZXhwb3J0IGNvbnN0IGFkb3B0ZWRNYXAgPSBuZXcgTWFwPHN0cmluZywgQ1NTU3R5bGVTaGVldD4oKTtcbmV4cG9ydCBjb25zdCBhZG9wdGVkQmxvYk1hcCA9IG5ldyBXZWFrTWFwPEJsb2IgfCBGaWxlLCBDU1NTdHlsZVNoZWV0PigpO1xuXG4vL1xubGV0IGxheWVyQ291bnRlciA9IDA7XG5leHBvcnQgY29uc3QgbG9hZEFzQWRvcHRlZCA9IChzdHlsZXM6IHN0cmluZyB8IEJsb2IgfCBGaWxlLCBsYXllck5hbWU6IHN0cmluZyB8IG51bGwgPSBudWxsKSA9PiB7XG4gICAgaWYgKHR5cGVvZiBzdHlsZXMgPT0gXCJzdHJpbmdcIiAmJiBhZG9wdGVkTWFwPy5oYXM/LihzdHlsZXMpKSB7IHJldHVybiBhZG9wdGVkTWFwLmdldChzdHlsZXMpOyB9XG4gICAgaWYgKChzdHlsZXMgaW5zdGFuY2VvZiBCbG9iIHx8IChzdHlsZXMgYXMgYW55KSBpbnN0YW5jZW9mIEZpbGUpICYmIGFkb3B0ZWRCbG9iTWFwPy5oYXM/LihzdHlsZXMgYXMgQmxvYiB8IEZpbGUpKSB7IHJldHVybiBhZG9wdGVkQmxvYk1hcC5nZXQoc3R5bGVzIGFzIEJsb2IgfCBGaWxlKTsgfVxuXG4gICAgLy9cbiAgICBpZiAoIXN0eWxlcykgcmV0dXJuIG51bGw7IC8vQHRzLWlnbm9yZVxuICAgIGNvbnN0IHNoZWV0ID0gKHR5cGVvZiBzdHlsZXMgPT0gXCJzdHJpbmdcIiA/ICAvL0B0cy1pZ25vcmVcbiAgICAgICAgYWRvcHRlZE1hcC5nZXRPckluc2VydENvbXB1dGVkKHN0eWxlcywgKHN0eWxlcykgPT4gbmV3IENTU1N0eWxlU2hlZXQoKSBhcyBDU1NTdHlsZVNoZWV0KSA6ICAvL0B0cy1pZ25vcmVcbiAgICAgICAgYWRvcHRlZEJsb2JNYXAuZ2V0T3JJbnNlcnRDb21wdXRlZChzdHlsZXMgYXMgQmxvYiB8IEZpbGUsIChzdHlsZXMpID0+IG5ldyBDU1NTdHlsZVNoZWV0KCkgYXMgQ1NTU3R5bGVTaGVldCkpO1xuXG4gICAgLy9cbiAgICAvL2lmICghbGF5ZXJOYW1lKSB7IGxheWVyTmFtZSA9IGB1eC1sYXllci0ke2xheWVyQ291bnRlcisrfWA7IH1cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnQuYWRvcHRlZFN0eWxlU2hlZXRzICYmICFkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHMuaW5jbHVkZXMoc2hlZXQgYXMgdW5rbm93biBhcyBDU1NTdHlsZVNoZWV0KSkge1xuICAgIGRvY3VtZW50LmFkb3B0ZWRTdHlsZVNoZWV0cy5wdXNoKHNoZWV0IGFzIHVua25vd24gYXMgQ1NTU3R5bGVTaGVldCk7XG4gICAgfVxuXG4gICAgLy9cbiAgICBpZiAodHlwZW9mIHN0eWxlcyA9PSBcInN0cmluZ1wiICYmICFVUkwuY2FuUGFyc2Uoc3R5bGVzKSkge1xuICAgICAgICBjb25zdCBsYXllcldyYXBwZWQgPSBsYXllck5hbWUgPyBgQGxheWVyICR7bGF5ZXJOYW1lfSB7ICR7c3R5bGVzfSB9YCA6IHN0eWxlcztcbiAgICAgICAgYWRvcHRlZE1hcC5zZXQoc3R5bGVzLCBzaGVldCk7XG4gICAgICAgIC8vIEF2b2lkIGJsb2NraW5nIHRoZSBtYWluIHRocmVhZCBvbiBodWdlIHN0eWxlcyAodmVlbGEgcnVudGltZSBjYW4gYmUgYmlnKS5cbiAgICAgICAgaWYgKGxheWVyV3JhcHBlZC5sZW5ndGggPiA1MF8wMDAgJiYgdHlwZW9mIChzaGVldCBhcyBhbnkpLnJlcGxhY2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgKHNoZWV0IGFzIGFueSkucmVwbGFjZShsYXllcldyYXBwZWQpLmNhdGNoPy4oKCkgPT4ge30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICBzaGVldC5yZXBsYWNlU3luYyhsYXllcldyYXBwZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaGVldDtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlT3JEaXJlY3QoZmV0Y2hBc0lubGluZShzdHlsZXMpLCAoY2FjaGVkOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGFkb3B0ZWRNYXAuc2V0KGNhY2hlZCwgc2hlZXQpO1xuICAgICAgICAgICAgaWYgKGNhY2hlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxheWVyV3JhcHBlZCA9IGxheWVyTmFtZSA/IGBAbGF5ZXIgJHtsYXllck5hbWV9IHsgJHtjYWNoZWR9IH1gIDogY2FjaGVkO1xuICAgICAgICAgICAgICAgIGlmIChsYXllcldyYXBwZWQubGVuZ3RoID4gNTBfMDAwICYmIHR5cGVvZiAoc2hlZXQgYXMgYW55KS5yZXBsYWNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgKHNoZWV0IGFzIGFueSkucmVwbGFjZShsYXllcldyYXBwZWQpLmNhdGNoPy4oKCkgPT4ge30pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hlZXQucmVwbGFjZVN5bmMobGF5ZXJXcmFwcGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNoZWV0O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy9cbiAgICByZXR1cm4gc2hlZXQgYXMgQ1NTU3R5bGVTaGVldDtcbn1cblxuLy9cbmV4cG9ydCBjb25zdCByZW1vdmVBZG9wdGVkID0gKHNoZWV0OiBDU1NTdHlsZVNoZWV0IHwgc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCk6IGJvb2xlYW4gPT4ge1xuICAgIGlmICghc2hlZXQpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCB0YXJnZXQgPSB0eXBlb2Ygc2hlZXQgPT09IFwic3RyaW5nXCIgPyBhZG9wdGVkTWFwLmdldChzaGVldCkgOiBzaGVldDtcbiAgICBpZiAoIXRhcmdldCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBmYWxzZTtcbiAgICBjb25zdCBzaGVldHMgPSBkb2N1bWVudC5hZG9wdGVkU3R5bGVTaGVldHM7XG4gICAgY29uc3QgaWR4ID0gc2hlZXRzLmluZGV4T2YodGFyZ2V0KTtcbiAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICBzaGVldHMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG4vL1xuZXhwb3J0IHR5cGUgUG9pbnQgPSBET01Qb2ludDtcbmV4cG9ydCBjb25zdCBwYXJzZU9yaWdpbiA9IChvcmlnaW46IHN0cmluZywgZWxlbWVudDogRWxlbWVudCk6IFBvaW50ID0+IHsgY29uc3QgdmFsdWVzID0gb3JpZ2luLnNwbGl0KCcgJyk7IHJldHVybiBuZXcgRE9NUG9pbnQocGFyc2VMZW5ndGgodmFsdWVzWzBdLCAoKSA9PiBlbGVtZW50LmNsaWVudFdpZHRoKSwgcGFyc2VMZW5ndGgodmFsdWVzWzFdLCAoKSA9PiBlbGVtZW50LmNsaWVudEhlaWdodCkpOyB9IC8vIEB0cy1pZ25vcmVcbmV4cG9ydCBjb25zdCBwYXJzZUxlbmd0aCA9ICh2YWx1ZTogc3RyaW5nLCBzaXplOiAoKT0+bnVtYmVyKTogbnVtYmVyID0+IHsgaWYgKHZhbHVlLmVuZHNXaXRoKCclJykpIHsgcmV0dXJuIChwYXJzZUZsb2F0KHZhbHVlKSAvIDEwMCkgKiBzaXplKCk7IH07IHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTsgfVxuXG4vL1xuZXhwb3J0IGNvbnN0IGdldFRyYW5zZm9ybSA9IChlbCk9PntcbiAgICBpZiAoZWw/LmNvbXB1dGVkU3R5bGVNYXApIHtcbiAgICAgICAgY29uc3Qgc3R5bGVNYXAgPSBlbC5jb21wdXRlZFN0eWxlTWFwKCksIHRyYW5zZm9ybSA9IHN0eWxlTWFwLmdldChcInRyYW5zZm9ybVwiKSwgbWF0cml4ID0gdHJhbnNmb3JtPy50b01hdHJpeD8uKCk7XG4gICAgICAgIGlmIChtYXRyaXgpIHJldHVybiBtYXRyaXg7XG4gICAgfSBlbHNlXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAoZWwpIHsgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTsgcmV0dXJuIG5ldyBET01NYXRyaXgoc3R5bGU/LmdldFByb3BlcnR5VmFsdWU/LihcInRyYW5zZm9ybVwiKSk7IH1cbiAgICByZXR1cm4gbmV3IERPTU1hdHJpeCgpO1xufVxuXG4vL1xuZXhwb3J0IGNvbnN0IGdldFRyYW5zZm9ybU9yaWdpbiA9IChlbCk9PntcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKSwgY3NzT3JpZ2luID0gc3R5bGU/LmdldFByb3BlcnR5VmFsdWU/LihcInRyYW5zZm9ybS1vcmlnaW5cIikgfHwgYDUwJSA1MCVgO1xuICAgIHJldHVybiBwYXJzZU9yaWdpbihjc3NPcmlnaW4sIGVsKTtcbn1cblxuLy9cbmV4cG9ydCBjb25zdCBnZXRQcm9wZXJ0eVZhbHVlID0gKHNyYywgbmFtZSk9PntcbiAgICBpZiAoXCJjb21wdXRlZFN0eWxlTWFwXCIgaW4gc3JjKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IHNyYz8uY29tcHV0ZWRTdHlsZU1hcD8uKCk/LmdldChuYW1lKTtcbiAgICAgICAgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIENTU1VuaXRWYWx1ZSA/ICh2YWw/LnZhbHVlIHx8IDApIDogdmFsPy50b1N0cmluZz8uKCk7XG4gICAgfVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBpZiAoc3JjIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHsgY29uc3QgY3MgPSBnZXRDb21wdXRlZFN0eWxlPy4oc3JjLCBcIlwiKTsgcmV0dXJuIChwYXJzZUZsb2F0KGNzPy5nZXRQcm9wZXJ0eVZhbHVlPy4obmFtZSk/LnJlcGxhY2U/LihcInB4XCIsIFwiXCIpKSB8fCAwKTsgfVxuICAgIHJldHVybiAocGFyc2VGbG9hdCgoc3JjPy5zdHlsZSA/PyBzcmMpLmdldFByb3BlcnR5VmFsdWU/LihuYW1lKT8ucmVwbGFjZT8uKFwicHhcIiwgXCJcIikpIHx8IDApIHx8IDA7XG59XG5cbi8vXG5leHBvcnQgY29uc3QgZ2V0RWxlbWVudFpvb20gPSAoZWxlbWVudDogRWxlbWVudCk6IG51bWJlciA9PiB7XG4gICAgbGV0IHpvb20gPSAxLCBjdXJyZW50RWxlbWVudDogRWxlbWVudCB8IG51bGwgPSBlbGVtZW50O1xuICAgIHdoaWxlIChjdXJyZW50RWxlbWVudCkge1xuICAgICAgICBpZiAoJ2N1cnJlbnRDU1Nab29tJyBpbiAoY3VycmVudEVsZW1lbnQgYXMgYW55KSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudENTU1pvb20gPSAoY3VycmVudEVsZW1lbnQgYXMgYW55KS5jdXJyZW50Q1NTWm9vbTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY3VycmVudENTU1pvb20gPT09ICdudW1iZXInKSB7IHJldHVybiAoem9vbSAqPSBjdXJyZW50Q1NTWm9vbSk7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vXG4gICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50RWxlbWVudCk7IC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgIChzdHlsZS56b29tICYmIHN0eWxlLnpvb20gIT09ICdub3JtYWwnKSB7IHJldHVybiAoem9vbSAqPSBwYXJzZUZsb2F0KHN0eWxlLnpvb20pKTsgfSAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICgoc3R5bGUuem9vbSAmJiBzdHlsZS56b29tICE9PSAnbm9ybWFsJykgfHwgJ2N1cnJlbnRDU1Nab29tJyBpbiAoY3VycmVudEVsZW1lbnQgYXMgYW55KSkgeyByZXR1cm4gem9vbTsgfVxuICAgICAgICBjdXJyZW50RWxlbWVudCA9IChjdXJyZW50RWxlbWVudCBhcyBIVE1MRWxlbWVudCk/Lm9mZnNldFBhcmVudCA/PyBjdXJyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHpvb207XG59XG5cbi8vXG5leHBvcnQgY29uc3QgZ2V0UHhWYWx1ZSA9IChlbGVtZW50LCBuYW1lKSA9PiB7IHJldHVybiBnZXRQcm9wZXJ0eVZhbHVlPy4oZWxlbWVudCwgbmFtZSk7IH1cbmV4cG9ydCBjb25zdCBnZXRQYWRkaW5nID0gKHNyYywgYXhpcyk9PntcbiAgICBpZiAoYXhpcyA9PSBcImlubGluZVwiKSB7IHJldHVybiAoZ2V0UHJvcGVydHlWYWx1ZShzcmMsIFwicGFkZGluZy1pbmxpbmUtc3RhcnRcIikgKyBnZXRQcm9wZXJ0eVZhbHVlKHNyYywgXCJwYWRkaW5nLWlubGluZS1lbmRcIikpOyB9O1xuICAgIHJldHVybiAoZ2V0UHJvcGVydHlWYWx1ZShzcmMsIFwicGFkZGluZy1ibG9jay1zdGFydFwiKSArIGdldFByb3BlcnR5VmFsdWUoc3JjLCBcInBhZGRpbmctYmxvY2stZW5kXCIpKTtcbn0iXX0=