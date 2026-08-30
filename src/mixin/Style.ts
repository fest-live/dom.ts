import { camelToKebab, getOrInsertComputed, hasValue, isValidNumber, tryStringAsNumber } from "@fest-lib/core";

//
const OWNER = "DOM";
const styleElement = typeof document != "undefined" ? document.createElement("style") : null;

if (styleElement) {
    document.querySelector("head")?.appendChild?.(styleElement);
    styleElement.dataset.owner = OWNER;
}

const supportsConstructableStylesheet = (): boolean =>
    typeof globalThis !== "undefined" &&
    typeof (globalThis as unknown as { CSSStyleSheet?: unknown }).CSSStyleSheet === "function";

const cssTextRequiresInlineStyleElement = (css: string): boolean =>
    typeof css === "string" && /@import\b/i.test(css);

const isLayerBlockRule = (rule: CSSRule | undefined): rule is CSSLayerBlockRule =>
    typeof CSSLayerBlockRule !== "undefined" && rule instanceof CSSLayerBlockRule;

const getOrCreateLayerRule = (sheet: any, layerName: string): CSSLayerBlockRule | undefined => {
    if (!sheet || !layerName) return undefined;

    const rules = Array.from(sheet.cssRules || []) as CSSRule[];
    const existing = rules.find((rule) => isLayerBlockRule(rule) && rule.name === layerName);
    if (existing) return existing;

    try {
        const ruleIndex = sheet.insertRule(`@layer ${layerName} {}`, rules.length);
        const created = sheet.cssRules?.[ruleIndex];
        return isLayerBlockRule(created) ? created : undefined;
    } catch {
        return undefined;
    }
};

//
export type  StyleTuple    = [selector: string, sheet: object];
export const setStyleURL   = (base: [any, any], url: string, layer: string = "")=>{ base[0][base[1]] = (base[1] == "innerHTML") ? `@import url("${url}") ${layer && (typeof layer == "string") ? `layer(${layer})` : ""};` : url; };
export const setStyleRules = (classes: StyleTuple[]) => { return classes?.map?.((args) => setStyleRule(...args)); };
export const getStyleLayer = (layerName: string, sheet?: any)=>{
    sheet ||= styleElement?.sheet;
    return getOrCreateLayerRule(sheet, layerName);
};




let styleIdCounter = 0;

const isShadowRoot = (value: any): value is ShadowRoot =>
    typeof ShadowRoot !== "undefined" &&
    value instanceof ShadowRoot;

const isDocument = (value: any): value is Document =>
    typeof Document !== "undefined" &&
    value instanceof Document;

const isElement = (value: any): value is Element =>
    typeof Element !== "undefined" &&
    value instanceof Element;

/**
 * CSS.escape() должен существовать в браузерах с CSSOM.
 * Fallback экранирует каждый code point и потому безопасен для ID.
 */
const escapeCSSIdentifier = (value: string): string => {
    if (
        typeof CSS !== "undefined" &&
        typeof CSS.escape === "function"
    ) {
        return CSS.escape(value);
    }

    return Array
        .from(value)
        .map(char => `\\${char.codePointAt(0)!.toString(16)} `)
        .join("");
};

const createStyleId = (): string => {
    if (
        typeof crypto !== "undefined" &&
        typeof crypto.randomUUID === "function"
    ) {
        return crypto.randomUUID();
    }

    return `ux-${Date.now().toString(36)}-${(++styleIdCounter).toString(36)}`;
};

/**
 * ::before должен присоединяться к basis непосредственно:
 *
 *   #element::before
 *
 * Обычный selector остаётся descendant-селектором:
 *
 *   #element .child
 */
const joinScopedSelector = (
    scope: string,
    selector: string,
): string => {
    selector = selector.trim();

    if (!scope) return selector;
    if (!selector) return scope;

    if (selector.startsWith("::")) {
        return `${scope}${selector}`;
    }

    return `${scope} ${selector}`;
};

const findStyleRule = (
    sheet: any,
    fullSelector: string,
    scope: string,
    selector: string,
): number => {
    const rules = Array.from(sheet?.cssRules || []) as CSSRule[];

    const expected = fullSelector.trim();
    const requested = selector.trim();

    return rules.findIndex(rule => {
        if (!(rule instanceof CSSStyleRule)) {
            return false;
        }

        const actual = rule.selectorText?.trim?.() ?? "";

        // Основное строгое сравнение.
        if (actual === expected) {
            return true;
        }

        /*
         * Ограниченный fallback для CSSOM-сериализации.
         *
         * В отличие от обычного endsWith() проверяется также scope.
         * Поэтому запрос ".item" не захватит правило "#app .item",
         * если ожидаемый scope, например, равен ":root".
         */
        if (requested && actual.endsWith(requested)) {
            const actualScope = actual
                .slice(0, actual.length - requested.length)
                .trim();

            return actualScope === scope;
        }

        return false;
    });
};

//
export const getStyleRule = (
    selector: string,
    sheet?: any,
    layerName: string | null = "ux-query",
    basis: any = null,
) => {
    /*
     * composed:true использовать здесь нельзя:
     * для элемента внутри ShadowRoot он вернёт Document,
     * и правило будет добавлено не в тот stylesheet.
     */
    const root =
        isShadowRoot(basis) || isDocument(basis)
            ? basis
            : basis?.getRootNode?.() ??
              (typeof document !== "undefined" ? document : null);

    const basisElement: Element | null =
        isElement(basis) ? basis : null;

    let scope = "";

    /*
     * Главное исключение:
     * явный ID имеет приоритет перед data-style-id.
     */
    if (basisElement?.id) {
        scope = `#${escapeCSSIdentifier(basisElement.id)}`;
    } else if (basisElement) {
        let styleId = basisElement.getAttribute("data-style-id");

        if (!styleId) {
            styleId = createStyleId();
            basisElement.setAttribute("data-style-id", styleId);
        }

        scope =
            `[data-style-id="${escapeCSSIdentifier(styleId)}"]`;
    } else if (isShadowRoot(root)) {
        scope = ":host";
    } else if (isDocument(root)) {
        scope = ":root";
    }

    let styleElement: HTMLStyleElement | null = null;

    if (isShadowRoot(root)) {
        styleElement =
            root.querySelector<HTMLStyleElement>(
                "style[data-ux-query]",
            );

        if (!styleElement && typeof document !== "undefined") {
            /*
             * createElement("style[data-ux-query]") некорректен:
             * createElement принимает имя тега, а не selector.
             */
            styleElement = document.createElement("style");
            styleElement.setAttribute("data-ux-query", "");
            root.appendChild(styleElement);
        }
    } else {
        styleElement = styleElementGlobal();
    }

    sheet ||= styleElement?.sheet;

    if (!sheet) {
        return undefined;
    }

    if (layerName) {
        return getStyleRule(
            selector,
            getStyleLayer(layerName, sheet),
            null,
            basis,
        );
    }

    const fullSelector = joinScopedSelector(scope, selector);

    let ruleId = findStyleRule(
        sheet,
        fullSelector,
        scope,
        selector,
    );

    if (ruleId === -1) {
        ruleId = sheet.insertRule(`${fullSelector} {}`);
    }

    return sheet.cssRules?.[ruleId] as CSSStyleRule | undefined;
};

/**
 * Замените реализацией получения вашего глобального <style>.
 * Нужна только для устранения конфликта имени локальной переменной
 * с существующим styleElement.
 */
function styleElementGlobal(): HTMLStyleElement | null {
    return styleElement ?? null;
}

//
const promiseOrDirect = (promise: any|Promise<any>, cb: (...args: any[]) => any) => {
    if (typeof promise?.then == "function") { return promise?.then?.(cb); }
    return cb(promise);
}

//
const blobURLMapSymbol = Symbol.for("dom.ts@blobURLMap");
const blobURLMap = globalThis[blobURLMapSymbol] ??= new WeakMap<Blob | File, string | Promise<string>>();
const cacheMapSymbol = Symbol.for("dom.ts@cacheMap");
const cacheMap = globalThis[cacheMapSymbol] ??= new Map<string, string | Promise<string>>();
export { blobURLMap, cacheMap };
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
const adoptedSelectorMapSymbol = Symbol.for("dom.ts@adoptedSelectorMap");
const adoptedSelectorMap = globalThis[adoptedSelectorMapSymbol] ??= new Map<string, CSSStyleSheet>();
const adoptedShadowSelectorMapSymbol = Symbol.for("dom.ts@adoptedShadowSelectorMap");
const adoptedShadowSelectorMap = globalThis[adoptedShadowSelectorMapSymbol] ??= new WeakMap<ShadowRoot, Map<string, CSSStyleSheet>>();
const adoptedLayerMapSymbol = Symbol.for("dom.ts@adoptedLayerMap");
const adoptedLayerMap = globalThis[adoptedLayerMapSymbol] ??= new Map<string, CSSLayerBlockRule>();
const adoptedShadowLayerMapSymbol = Symbol.for("dom.ts@adoptedShadowLayerMap");
const adoptedShadowLayerMap = globalThis[adoptedShadowLayerMapSymbol] ??= new WeakMap<ShadowRoot, Map<string, CSSLayerBlockRule>>();
export { adoptedSelectorMap, adoptedShadowSelectorMap, adoptedLayerMap, adoptedShadowLayerMap };

//
export const getAdoptedStyleRule = (selector: string, layerName: string | null = "ux-query", basis: any = null) => {
    if (!selector) return null;
    if (!supportsConstructableStylesheet()) return null;

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
            layerRule = getOrCreateLayerRule(sheet, layerName);
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

// ===== Типы и константы из style.ts =====

type ReactiveStyleSlot = {
    marker: string;
    value: any;
    multipliedByUnit?: string;
};

type TypedStyleSlot = {
    marker: string;
    value: any;
    multipliedByUnit?: string;
};

type TypedOMLeaf = {
    slot: ReactiveStyleSlot;
    value: any;
};

type NumericTreeResult = {
    root: any;
    leaves: TypedOMLeaf[];
};

type NumericToken =
    | { kind: "number"; value: number; unit: string | null }
    | { kind: "variable"; marker: string }
    | { kind: "identifier"; value: string }
    | { kind: "symbol"; value: "+" | "-" | "*" | "/" | "(" | ")" | "," };

//
const CSS_DIMENSION_UNITS = new Set([
    "%", "px", "cm", "mm", "q", "in", "pc", "pt",
    "em", "ex", "ch", "cap", "ic", "lh",
    "rem", "rex", "rch", "rcap", "ric", "rlh",
    "vw", "vh", "vi", "vb", "vmin", "vmax",
    "svw", "svh", "svi", "svb", "svmin", "svmax",
    "lvw", "lvh", "lvi", "lvb", "lvmin", "lvmax",
    "dvw", "dvh", "dvi", "dvb", "dvmin", "dvmax",
    "cqw", "cqh", "cqi", "cqb", "cqmin", "cqmax",
    "deg", "grad", "rad", "turn",
    "s", "ms",
    "hz", "khz",
    "dpi", "dpcm", "dppx", "x",
    "fr",
]);

// ===== Детекторы =====

/**
 * Определяет нативные CSS Typed OM значения (CSSUnitValue, CSSMathValue, etc.)
 */
export const isNativeCSSStyleValue = (value: any): boolean => {
    if (value == null || typeof value !== "object") return false;

    try {
        const CSSStyleValueCtor = (globalThis as any).CSSStyleValue;
        if (typeof CSSStyleValueCtor === "function" && value instanceof CSSStyleValueCtor) {
            return true;
        }

        for (let prototype = value; prototype; prototype = Object.getPrototypeOf(prototype)) {
            if (prototype?.constructor?.name === "CSSStyleValue") {
                return true;
            }
        }
    } catch {}

    return false;
};

/**
 * Определяет реактивные значения { value: ... }
 */
export const isReactiveStyleValue = (value: any): boolean => {
    if (value == null || typeof value !== "object" || isNativeCSSStyleValue(value)) {
        return false;
    }

    try {
        return "value" in value;
    } catch {
        return false;
    }
};

// ===== Вспомогательные функции для Typed OM =====

const getWindowConstructor = (win: any, name: string): any => {
    return win?.[name] ?? (globalThis as any)?.[name];
};

const getCSSUnitFactoryName = (unit: string): string => {
    switch (unit.toLowerCase()) {
        case "%": return "percent";
        case "q": return "Q";
        case "hz": return "Hz";
        case "khz": return "kHz";
        case "fr": return "flex";
        default: return unit.toLowerCase();
    }
};

//
const getCSSUnitConstructorName = (unit: string): string => {
    return unit.toLowerCase() === "%" ? "percent" : unit.toLowerCase();
};

/**
 * Создает CSS.px(value), CSS.deg(value), CSS.number(value), etc.
 */
export const createTypedUnitValue = (win: any, unit: string, value: number): any => {
    const CSSNamespace = win?.CSS;
    const factoryName = getCSSUnitFactoryName(unit);
    const factory = CSSNamespace?.[factoryName];

    if (typeof factory === "function") {
        return factory.call(CSSNamespace, value);
    }

    const CSSUnitValueCtor = getWindowConstructor(win, "CSSUnitValue");
    if (typeof CSSUnitValueCtor !== "function") {
        throw new TypeError(`Typed OM does not support CSS unit "${unit}"`);
    }

    return new CSSUnitValueCtor(value, getCSSUnitConstructorName(unit));
};

/**
 * Токенизация CSS-выражений для парсинга calc(), min(), max(), clamp()
 */
const tokenizeNumericCSS = (source: string): NumericToken[] => {
    const tokens: NumericToken[] = [];
    let cursor = 0;

    while (cursor < source.length) {
        const rest = source.slice(cursor);
        const whitespace = /^\s+/.exec(rest);

        if (whitespace) {
            cursor += whitespace[0].length;
            continue;
        }

        const number = /^(?:\d*\.\d+|\d+\.?\d*)(?:[eE][+-]?\d+)?/.exec(rest);
        if (number) {
            cursor += number[0].length;
            const unitMatch = /^(%|[a-zA-Z]+)/.exec(source.slice(cursor));
            const unit = unitMatch?.[0] ?? null;

            if (unitMatch) cursor += unitMatch[0].length;

            tokens.push({
                kind: "number",
                value: Number(number[0]),
                unit: unit == null ? null : unit.toLowerCase(),
            });
            continue;
        }

        const identifier = /^[a-zA-Z_][a-zA-Z0-9_-]*/.exec(rest);
        if (identifier) {
            tokens.push({ kind: "identifier", value: identifier[0].toLowerCase() });
            cursor += identifier[0].length;
            continue;
        }

        const symbol = rest[0] as "+" | "-" | "*" | "/" | "(" | ")" | ",";
        if (["+", "-", "*", "/", "(", ")", ","].includes(symbol)) {
            tokens.push({ kind: "symbol", value: symbol });
            cursor++;
            continue;
        }

        throw new SyntaxError(`Unsupported token near "${rest}"`);
    }

    return tokens;
};

/**
 * Парсер Typed OM математических выражений
 */
class NumericTypedOMParser {
    private index = 0;

    constructor(
        private readonly tokens: NumericToken[],
        private readonly win: any,
    ) {}

    parse(): any {
        const root = this.parseSum();
        if (this.index !== this.tokens.length) {
            throw new SyntaxError("Unexpected trailing expression");
        }
        return root;
    }

    private current(): NumericToken | undefined {
        return this.tokens[this.index];
    }

    private consume(): NumericToken {
        const token = this.tokens[this.index];
        if (!token) throw new SyntaxError("Unexpected end of expression");
        this.index++;
        return token;
    }

    private consumeSymbol(symbol: "+" | "-" | "*" | "/" | "(" | ")" | ","): void {
        const token = this.consume();
        if (token.kind !== "symbol" || token.value !== symbol) {
            throw new SyntaxError(`Expected "${symbol}"`);
        }
    }

    private matchesSymbol(symbol: "+" | "-" | "*" | "/" | "(" | ")" | ","): boolean {
        const token = this.current();
        return token?.kind === "symbol" && token.value === symbol;
    }

    private createMath(name: string, ...values: any[]): any {
        const Constructor = getWindowConstructor(this.win, name);
        if (typeof Constructor !== "function") {
            throw new TypeError(`${name} is not supported`);
        }
        return new Constructor(...values);
    }

    private parseSum(): any {
        let value = this.parseProduct();

        while (this.matchesSymbol("+") || this.matchesSymbol("-")) {
            const operator = this.consume();
            const right = this.parseProduct();

            if (operator.kind !== "symbol") {
                throw new SyntaxError("Expected sum operator");
            }

            if (operator.value === "+") {
                value = this.createMath("CSSMathSum", value, right);
            } else {
                value = this.createMath("CSSMathSum", value, this.createMath("CSSMathNegate", right));
            }
        }

        return value;
    }

    private parseProduct(): any {
        let value = this.parseUnary();

        while (this.matchesSymbol("*") || this.matchesSymbol("/")) {
            const operator = this.consume();
            const right = this.parseUnary();

            if (operator.kind !== "symbol") {
                throw new SyntaxError("Expected product operator");
            }

            if (operator.value === "*") {
                value = this.createMath("CSSMathProduct", value, right);
            } else {
                value = this.createMath("CSSMathProduct", value, this.createMath("CSSMathInvert", right));
            }
        }

        return value;
    }

    private parseUnary(): any {
        if (this.matchesSymbol("+")) {
            this.consume();
            return this.parseUnary();
        }

        if (this.matchesSymbol("-")) {
            this.consume();
            return this.createMath("CSSMathNegate", this.parseUnary());
        }

        return this.parsePrimary();
    }

    private parsePrimary(): any {
        const token = this.consume();

        if (token.kind === "number") {
            return createTypedUnitValue(this.win, token.unit ?? "number", token.value);
        }

        if (token.kind === "symbol" && token.value === "(") {
            const value = this.parseSum();
            this.consumeSymbol(")");
            return value;
        }

        if (token.kind === "identifier") {
            return this.parseFunction(token.value);
        }

        throw new SyntaxError("Expected a numeric value");
    }

    private parseFunction(name: string): any {
        this.consumeSymbol("(");

        if (name === "calc") {
            const value = this.parseSum();
            this.consumeSymbol(")");
            return value;
        }

        const values: any[] = [];
        if (!this.matchesSymbol(")")) {
            values.push(this.parseSum());
            while (this.matchesSymbol(",")) {
                this.consume();
                values.push(this.parseSum());
            }
        }

        this.consumeSymbol(")");

        if (name === "min") {
            if (values.length === 0) throw new SyntaxError("min() requires a value");
            return this.createMath("CSSMathMin", ...values);
        }

        if (name === "max") {
            if (values.length === 0) throw new SyntaxError("max() requires a value");
            return this.createMath("CSSMathMax", ...values);
        }

        if (name === "clamp") {
            if (values.length !== 3) throw new SyntaxError("clamp() requires three values");
            return this.createMath("CSSMathClamp", values[0], values[1], values[2]);
        }

        throw new SyntaxError(`Unsupported function "${name}"`);
    }
}

/**
 * Парсит строку CSS-выражения в Typed OM дерево
 */
const parseToTypedOM = (cssValue: string, win: any): any => {
    try {
        const tokens = tokenizeNumericCSS(cssValue);
        const parser = new NumericTypedOMParser(tokens, win);
        return parser.parse();
    } catch {
        return null;
    }
};

// ... (весь остальной код из dom.ts остается без изменений до setStyleProperty)
const hasTypedOM =
    typeof CSSStyleValue !== "undefined" &&
    typeof CSSUnitValue !== "undefined";

//
const isStyleValue = (val: any): val is CSSStyleValue =>
    hasTypedOM && val instanceof CSSStyleValue;

//
const isUnitValue = (val: any): val is CSSUnitValue =>
    hasTypedOM && val instanceof CSSUnitValue;

//
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

/**
 * Улучшенная версия с парсингом Typed OM выражений
 */
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

    if (!hasTypedOM || !styleMapRef) {
        return setStylePropertyFallback(element, name, value, importance);
    }

    const win: any = element.ownerDocument?.defaultView ?? globalThis;

    // Распаковываем реактивное значение
    let val: any = hasValue(value) && isReactiveStyleValue(value) 
        ? value.value 
        : value;

    // null/undefined -> удалить
    if (val == null) {
        styleMapRef.delete?.(kebab);
        if (styleRef) {
            setPropertyIfNotEqual(styleRef, kebab, null, importance);
        }
        return element;
    }

    // Уже CSSStyleValue -> установить напрямую
    if (isNativeCSSStyleValue(val)) {
        const old = styleMapRef.get(kebab);
        if (isUnitValue(val) && isUnitValue(old)) {
            if (old.value === val.value && old.unit === val.unit) {
                return element;
            }
        } else if (old === val) {
            return element;
        }
        styleMapRef.set(kebab, val);
        return element;
    }

    // Число -> CSS.number() или строка
    if (typeof val === "number") {
        if ((CSS as any)?.number && !kebab.startsWith("--")) {
            const newVal: CSSUnitValue = (CSS as any).number(val);
            const old = styleMapRef.get(kebab);
            if (isUnitValue(old) && old.value === newVal.value && old.unit === newVal.unit) {
                return element;
            }
            styleMapRef.set(kebab, newVal);
            return element;
        } else {
            setPropertyIfNotEqual(styleRef, kebab, String(val), importance);
            return element;
        }
    }

    // Строка -> попытка парсинга или обычная установка
    if (typeof val === "string") {
        // Попытка распарсить calc()/min()/max()/clamp()
        if (/\b(calc|min|max|clamp)\s*\(/.test(val)) {
            const parsed = parseToTypedOM(val, win);
            if (parsed) {
                try {
                    styleMapRef.set(kebab, parsed);
                    return element;
                } catch {
                    // Fallback на строку
                }
            }
        }

        // Попытка конвертировать в число
        const maybeNum = tryStringAsNumber(val);
        if (typeof maybeNum === "number" && (CSS as any)?.number && !kebab.startsWith("--")) {
            const newVal: CSSUnitValue = (CSS as any).number(maybeNum);
            const old = styleMapRef.get(kebab);
            if (isUnitValue(old) && old.value === newVal.value && old.unit === newVal.unit) {
                return element;
            }
            styleMapRef.set(kebab, newVal);
            return element;
        }

        // Обычное строковое значение
        setPropertyIfNotEqual(styleRef, kebab, val, importance);
        return element;
    }

    // Любой другой тип -> строка
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

    let val: any = (hasValue(value) && isReactiveStyleValue(value)) 
        ? value.value 
        : value;

    if (typeof val === "string" && !isNativeCSSStyleValue(val)) {
        val = tryStringAsNumber(val) ?? val;
    }

    if (val == null) {
        setPropertyIfNotEqual(styleRef, kebab, null, importance);
        return element;
    }

    if (isNativeCSSStyleValue(val)) {
        setPropertyIfNotEqual(styleRef, kebab, String(val), importance);
        return element;
    }

    if (typeof val === "number") {
        setPropertyIfNotEqual(styleRef, kebab, String(val), importance);
        return element;
    }

    setPropertyIfNotEqual(styleRef, kebab, String(val), importance);
    return element;
};

//
export const setStyleProperty = (
    element?: HTMLElement | null,
    name?: string,
    value?: any,
    importance = ""
) => {
    return hasTypedOM 
        ? setStylePropertyTyped(element, name, value, importance) 
        : setStylePropertyFallback(element, name, value, importance);
};

// Остальной код dom.ts без изменений...

export const setStyleInRule = (selector: string, name: string, value: any) => {
    return setStyleProperty(getStyleRule(selector) as any, name, value);
};

export const setStyleRule = (selector: string, sheet: object) => {
    const rule = getStyleRule(selector);
    Object.entries(sheet).forEach(([propName, propValue]) => 
        setStyleProperty(rule as any, propName, propValue)
    );
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
const adoptedMapSymbol = Symbol.for("dom.ts@adoptedMap");
const adoptedMap = globalThis[adoptedMapSymbol] ??= new Map<string, CSSStyleSheet>();
const adoptedBlobMapSymbol = Symbol.for("dom.ts@adoptedBlobMap");
const adoptedBlobMap = globalThis[adoptedBlobMapSymbol] ??= new WeakMap<Blob | File, CSSStyleSheet>();
const adoptedAppliedTextSymbol = Symbol.for("dom.ts@adoptedAppliedText");
const adoptedAppliedText = globalThis[adoptedAppliedTextSymbol] ??= new WeakMap<CSSStyleSheet, string>();
const adoptedFilledSymbol = Symbol.for("dom.ts@adoptedFilled");
const adoptedFilled = globalThis[adoptedFilledSymbol] ??= new WeakSet<CSSStyleSheet>();
export { adoptedMap, adoptedBlobMap };

const wrapAdoptedLayer = (cssText: string, layerName: string | null): string =>
    layerName ? `@layer ${layerName} { ${cssText} }` : cssText;

const readSheetRuleCount = (sheet: CSSStyleSheet): number | null => {
    try {
        return sheet.cssRules.length;
    } catch {
        return null;
    }
};

const rememberAdoptedText = (sheet: CSSStyleSheet, cssText: string): void => {
    adoptedAppliedText.set(sheet, cssText);
    adoptedFilled.add(sheet);
};

/** INVARIANT: cache hits must refill emptied constructable sheets from the source CSS.
 * FIND:adopted-sheets */
export const cssTextForAdoptedSheet = (sheet: CSSStyleSheet | null | undefined): string | null => {
    if (!sheet) return null;
    const stored = adoptedAppliedText.get(sheet);
    if (stored) return stored;
    for (const [key, mapped] of adoptedMap) {
        if (mapped === sheet && typeof key === "string") return key;
    }
    return null;
};

export const isAdoptedSheetEmpty = (sheet: CSSStyleSheet | null | undefined): boolean => {
    if (!sheet) return true;
    const count = readSheetRuleCount(sheet);
    // COMPAT: some WebViews throw on live constructable cssRules — treat as present, do not refill.
    if (count === null) return false;
    return count === 0;
};

export const ensureAdoptedSheetContent = (
    sheet: CSSStyleSheet | null | undefined,
    cssText?: string | null,
): boolean => {
    if (!sheet) return false;
    const text = cssText || cssTextForAdoptedSheet(sheet);
    const count = readSheetRuleCount(sheet);
    if (count === null) return false;
    if (count > 0) {
        adoptedFilled.add(sheet);
        if (text && !adoptedAppliedText.has(sheet)) adoptedAppliedText.set(sheet, text);
        return true;
    }
    if (!text) return false;
    if (applyAdoptedStyleText(sheet, text)) {
        rememberAdoptedText(sheet, text);
        return true;
    }
    return false;
};

//
const layerCounterSymbol = Symbol.for("dom.ts@layerCounter");
const layerCounter = globalThis[layerCounterSymbol] ??= 0;
export { layerCounter };

//
const applyAdoptedStyleText = (sheet: CSSStyleSheet, cssText: string): boolean => {
    if (!sheet || !cssText) return false;
    try {
        // Constructable sheets must not use replace() fire-and-forget: failures would leave a broken adopted sheet.
        sheet.replaceSync(cssText);
        return true;
    } catch (error: any) {
        const message = String(error?.message || "").toLowerCase();
        const isImportConstraint =
            message.includes("@import rules are not allowed") ||
            (message.includes("@import") && message.includes("not allowed"));
        if (!isImportConstraint) {
            console.warn("[DOM] Failed to apply adopted stylesheet:", error);
        }
        return false;
    }
};

//
const urlCanParse = (value: string): boolean => {
    try {
        return typeof URL !== "undefined" && typeof URL.canParse === "function" && URL.canParse(value);
    } catch {
        return false;
    }
};

const sheetForBlob = (blob: Blob | File): CSSStyleSheet => {
    let sheet = adoptedBlobMap.get(blob);
    if (!sheet) {
        sheet = new CSSStyleSheet();
        adoptedBlobMap.set(blob, sheet);
    }
    return sheet;
};

export const loadAsAdopted = (styles: string | Blob | File, layerName: string | null = null) => {
    try {
        return loadAsAdoptedUnsafe(styles, layerName);
    } catch (error) {
        console.warn("[DOM] loadAsAdopted failed", error);
        if (typeof styles === "string") loadInlineStyle(styles, undefined, layerName || "");
        return null;
    }
};

const loadAsAdoptedUnsafe = (styles: string | Blob | File, layerName: string | null = null) => {
    if (!supportsConstructableStylesheet()) {
        if (typeof styles === "string") {
            loadInlineStyle(styles, undefined, layerName || "");
        }
        return null;
    }

    if (typeof styles === "string" && cssTextRequiresInlineStyleElement(styles)) {
        loadInlineStyle(styles, undefined, layerName || "");
        return null;
    }

    if (typeof styles == "string" && adoptedMap?.has?.(styles)) {
        const cached = adoptedMap.get(styles)!;
        const applied = adoptedAppliedText.get(cached) || wrapAdoptedLayer(styles, layerName);
        ensureAdoptedSheetContent(cached, applied);
        if (typeof document !== "undefined" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(cached)) {
            document.adoptedStyleSheets.push(cached);
        }
        return cached;
    }
    if ((styles instanceof Blob || (styles as any) instanceof File) && adoptedBlobMap?.has?.(styles as Blob | File)) {
        const cached = adoptedBlobMap.get(styles as Blob | File)!;
        ensureAdoptedSheetContent(cached);
        if (typeof document !== "undefined" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(cached)) {
            document.adoptedStyleSheets.push(cached);
        }
        return cached;
    }

    if (!styles) return null;
    const sheet = typeof styles == "string"
        ? getOrInsertComputed(adoptedMap, styles, () => new CSSStyleSheet() as CSSStyleSheet)
        : sheetForBlob(styles as Blob | File);

    //
    //if (!layerName) { layerName = `ux-layer-${layerCounter++}`; }
    if (typeof document != "undefined" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(sheet as unknown as CSSStyleSheet)) {
    document.adoptedStyleSheets.push(sheet as unknown as CSSStyleSheet);
    }

    //
    if (typeof styles == "string" && !urlCanParse(styles)) {
        const layerWrapped = wrapAdoptedLayer(styles, layerName);
        adoptedMap.set(styles, sheet);
        if (!applyAdoptedStyleText(sheet as CSSStyleSheet, layerWrapped)) {
            removeAdopted(sheet);
            adoptedMap.delete(styles);
            loadInlineStyle(styles);
        } else {
            rememberAdoptedText(sheet as CSSStyleSheet, layerWrapped);
        }
        return sheet;
    } else {
        promiseOrDirect(fetchAsInline(styles), (cached: string) => {
            adoptedMap.set(cached, sheet);
            if (cached) {
                if (cssTextRequiresInlineStyleElement(cached)) {
                    removeAdopted(sheet);
                    adoptedMap.delete(cached);
                    adoptedBlobMap.delete(styles as Blob | File);
                    loadInlineStyle(cached, undefined, layerName || "");
                    return sheet;
                }
                const layerWrapped = wrapAdoptedLayer(cached, layerName);
                if (!applyAdoptedStyleText(sheet as CSSStyleSheet, layerWrapped)) {
                    removeAdopted(sheet);
                    adoptedMap.delete(cached);
                    adoptedBlobMap.delete(styles as Blob | File);
                    loadInlineStyle(cached, undefined, layerName || "");
                } else {
                    rememberAdoptedText(sheet as CSSStyleSheet, layerWrapped);
                }
                return sheet;
            };
        });
    }

    //
    return sheet as CSSStyleSheet;
}

//
const styleTreeHookSymbol = Symbol.for("dom.ts@styleTreeHooks");
const styleTreeHooks: Set<(el: Element, reason: string) => void> =
    globalThis[styleTreeHookSymbol] ??= new Set();
const styleTreeObserved = new WeakSet<object>();
const styleTreeRoots = new Set<any>();

const STYLE_TREE_ATTRS = [
    "data-theme",
    "data-explorer-color-scheme",
    "data-color-scheme",
    "theme",
    "color-scheme",
] as const;

/** INVARIANT: hyphenated / shadowed hosts are the only nodes that own adopted CSS. */
export const isStyleHost = (node: any): node is HTMLElement => {
    if (!node || node.nodeType !== 1) return false;
    const name = String(node.localName || "");
    if (name.includes("-")) return true;
    if (node.shadowRoot) return true;
    if (node.styles != null) return true;
    return false;
};

const collectStyleHosts = (node: any, into: Set<Element>): void => {
    if (!node || node.nodeType === 3) return;
    if (node.nodeType === 11) {
        for (const child of node.childNodes || []) collectStyleHosts(child, into);
        return;
    }
    if (isStyleHost(node)) into.add(node);
    if (typeof node.querySelectorAll !== "function") return;
    try {
        for (const el of node.querySelectorAll("*")) {
            if (isStyleHost(el)) into.add(el);
        }
    } catch {
        /* ignore */
    }
};

export const notifyStyleTreeHosts = (hosts: Iterable<any>, reason = "tree"): void => {
    for (const el of hosts) {
        if (!isStyleHost(el)) continue;
        for (const fn of styleTreeHooks) fn(el, reason);
    }
};

export const registerStyleTreeHook = (fn: (el: Element, reason: string) => void): void => {
    if (typeof fn !== "function") return;
    styleTreeHooks.add(fn);
};

/**
 * WHY: hosts often enter via innerHTML / H`` / upgrade after first connectedCallback;
 * childList + theme attrs must re-apply CSS without waiting for resume.
 * FIND:style-tree
 */
export const observeStyleTree = (root: any): any => {
    if (!root || typeof MutationObserver === "undefined") return root;
    if (styleTreeObserved.has(root)) return root;
    styleTreeObserved.add(root);
    styleTreeRoots.add(root);

    const observer = new MutationObserver((records) => {
        const hosts = new Set<Element>();
        for (const rec of records) {
            if (rec.type === "childList") {
                for (const node of rec.addedNodes) collectStyleHosts(node, hosts);
                const scope = (rec.target as any)?.getRootNode?.();
                if (scope instanceof ShadowRoot && isStyleHost(scope.host)) {
                    const sheets = scope.adoptedStyleSheets;
                    if (!sheets || sheets.length === 0) hosts.add(scope.host);
                }
            } else if (rec.type === "attributes" && rec.target) {
                // WHY: `html[data-theme]` at boot must not walk the whole tree (replaceSync wipe).
                if (isStyleHost(rec.target)) hosts.add(rec.target as Element);
            }
        }
        notifyStyleTreeHosts(hosts, "mutation");
    });

    try {
        observer.observe(root, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: [...STYLE_TREE_ATTRS],
        });
    } catch {
        styleTreeObserved.delete(root);
        return root;
    }
    return root;
};

/** WHY: Android WebView pause can empty constructable `cssRules`; restore the last applied text. */
export const rehydrateConstructableSheets = (): void => {
    if (typeof document === "undefined") return;
    const canParse = typeof URL !== "undefined" && typeof URL.canParse === "function";
    for (const [key, sheet] of adoptedMap) {
        if (!sheet || typeof key !== "string") continue;
        if (canParse && URL.canParse(key)) continue;
        const text = adoptedAppliedText.get(sheet) || key;
        ensureAdoptedSheetContent(sheet, text);
        if (document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(sheet)) {
            document.adoptedStyleSheets.push(sheet);
        }
    }
};

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
