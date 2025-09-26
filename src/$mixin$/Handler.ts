import { setStyleProperty } from "./Style";
import { camelToKebab, kebabToCamel } from "../$agate$/Utils";

//
const isVal = (v: any) => v != null && v !== false && (typeof v != "object" && typeof v != "function");
type DatasetValue = string | number | boolean | null | undefined | { value?: string | number | boolean | null | undefined };

//
export const deleteStyleProperty = (el: HTMLElement, name: string) => el.style.removeProperty(camelToKebab(name));

//
export const handleHidden = (element, _, visible) => {
    if (visible != null && typeof visible == "object" && ("value" in visible || visible?.value != null)) { visible = visible.value };
    const isVisible = (typeof visible == "boolean") ? visible : (visible == null ? false : ((visible || visible == "" || visible == 0) ? true : false));
    if (element instanceof HTMLInputElement) { element.hidden = !isVisible; } else
        { if (isVisible) { element?.removeAttribute?.("data-hidden"); } else { element?.setAttribute?.("data-hidden", ""); } }
    return element;
}

//
export const handleProperty = (el?: HTMLElement|null, prop?: string, val?: any)=>{
    if (!prop || !el) return; prop = kebabToCamel(prop);

    /*if (
        (typeof val == "object" && val != null) &&
        ("value" in val || val?.value != null)
    ) { val = val.value ?? val; };*/

    //
    if (el?.[prop] === val) return el;
    if (el && el?.[prop] !== val) {
        if (val != null) { el[prop] = val; };
        if (val == undefined) { delete el[prop]; };
    }
    return el;
}

//
export const handleDataset = (el?: HTMLElement|null, prop?: string, val?: DatasetValue) => {
    if (!prop || !el) return; prop = kebabToCamel(prop)!; // @ts-ignore
    if (el.dataset[prop] === val) return; // @ts-ignore
    if (typeof val == "object" && val != null && ("value" in val || val?.value != null)) val = val.value; // @ts-ignore
    if (val == null || val === false) delete el.dataset[prop]; else // @ts-ignore
    if (typeof val != "object" && typeof val != "function") el.dataset[prop] = String(val); else
        { delete el.dataset[prop]; console.warn(`Invalid type of attribute value "${prop}":`, val); }
};

//
export const handleStyleChange = (el?: HTMLElement|null, prop?: string, val?: any) => {
    if (!prop || typeof prop != "string" || !el || val === undefined || typeof val == "undefined") return;
    if (typeof val == "object" && val != null && ("value" in val || val?.value != null) && !(typeof CSSStyleValue !== "undefined" && val instanceof CSSStyleValue)) val = val.value;
    if (val == null) deleteStyleProperty(el, prop); else
    if (isVal(val) || (typeof CSSStyleValue !== "undefined" && val instanceof CSSStyleValue)) { setStyleProperty(el, prop, val); } else
        { deleteStyleProperty(el, prop); if (val !== false) console.warn(`Invalid value for style property "${prop}":`, val); }
};

//
/*  // needs rework with AI
    if (
        (initial != null && element?.getAttribute?.(attribute) == null) &&
        (typeof val.value != "object" && typeof val.value != "function") &&
        (val.value != null && val.value !== false)
    ) { element?.setAttribute?.(attribute, val.value); };

    usb = subscribe([val, "value"], (v) => {
        if (v !== element?.getAttribute?.(attribute)) {
            if (v == null || v === false || typeof v == "object" || typeof v == "function") { element?.removeAttribute?.(attribute); } else { element?.setAttribute?.(attribute, v); }
        } });
*/

//
export const handleAttribute = (el?: HTMLElement|null, prop?: string, val?: any) => {
    if (!prop || !el) return; prop = camelToKebab(prop)!;
    if (el.getAttribute?.(prop) === val || val === undefined || typeof val == "undefined") return;
    if (typeof val == "object" && ("value" in val || val?.value != null)) val = val.value;
    if (val == null || val === false) el.removeAttribute(prop); else
    if (typeof val != "object" && typeof val != "function") el.setAttribute(prop, String(val)); else { el.removeAttribute(prop);
    if (val !== false) console.warn(`Invalid type of attribute value "${prop}":`, val); }
};
