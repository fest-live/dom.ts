import { setStyleProperty } from "./Style";
import { camelToKebab, DatasetValue, hasValue, isVal, isValueUnit, kebabToCamel, normalizePrimitive, $avoidTrigger } from "fest/core";

//
export const handleHidden = (element, _, visible) => {
    const $ref: any = visible;
    if (hasValue(visible)) { visible = visible.value };
    const isVisible = (visible = normalizePrimitive(visible)) != null && visible !== false;

    //
    $avoidTrigger($ref, ()=>{
        if (element instanceof HTMLInputElement) { element.hidden = !isVisible; } else
            { if (isVisible) { element?.removeAttribute?.("data-hidden"); } else { element?.setAttribute?.("data-hidden", ""); } }
    });

    //
    return element;
}

//
export const handleProperty = (el?: HTMLElement|null, prop?: string|null, val?: any)=>{
    if (!(prop = typeof prop == "string" ? kebabToCamel(prop) : prop) || !el || ["style", "dataset", "attributeStyleMap", "styleMap", "computedStyleMap"].indexOf(prop || "") != -1) return el;
    const $ref: any = val;

    //
    if (hasValue(val)) { val = val.value; };

    //
    if (el?.[prop] === val) { return el; };
    if (el?.[prop] !== val) {
        $avoidTrigger($ref, ()=>{
            if (val != null) { el[prop] = val; } else { delete el[prop]; };
        })
    }
    return el;
}

//
export const handleDataset = (el?: HTMLElement|null, prop?: string, val?: DatasetValue) => {
    const datasetRef = el?.dataset; if (!prop || !el || !datasetRef) return el;
    const $ref: any = val;  // @ts-ignore
    if (hasValue(val)) val = val?.value; prop = kebabToCamel(prop);
    if (datasetRef?.[prop] === (val = normalizePrimitive(val))) return el;
    if (val == null || val === false) { delete datasetRef[prop]; } else {
        $avoidTrigger($ref, ()=>{
            if (typeof val != "object" && typeof val != "function") {
                datasetRef[prop] = String(val);
            } else {
                delete datasetRef[prop];
            }
        });
    }
    return el;
};

//
export const deleteStyleProperty = (el: HTMLElement, name: string) => el.style.removeProperty(camelToKebab(name));

//
export const handleStyleChange = (el?: HTMLElement | null, prop?: string, val?: any) => {
    const styleRef = el?.style;
    if (!prop || typeof prop != "string" || !el || !styleRef) return el;
    //if (hasValue(val) && !isValueUnit(val)) val = val.value;

    //
    const $ref: any = val;
    $avoidTrigger($ref, ()=>{
        //if (val == null) { deleteStyleProperty(el, prop); } else
        if (isVal(val) || hasValue(val) || isValueUnit(val))
            { setStyleProperty(el, prop, val); } else if (val == null)
            { deleteStyleProperty(el, prop); }
    });

    //
    return el;
};

//
export const handleAttribute = (el?: HTMLElement | null, prop?: string, val?: any) => {
    if (!prop || !el) return el;

    //
    const $ref: any = val;
    if (hasValue(val)) val = val.value; prop = camelToKebab(prop);
    if (el?.getAttribute?.(prop) === (val = normalizePrimitive(val))) {
        return el;
    }

    //
    $avoidTrigger($ref, ()=>{
        if (typeof val != "object" && typeof val != "function" && val != null) {
            el?.setAttribute?.(prop, String(val));
        } else
        if (val == null) {
            el?.removeAttribute?.(prop);
        }
    });

    //
    return el;
};
