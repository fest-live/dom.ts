import { observeAttribute, observeAttributeBySelector } from "./Observer";
import { getStyleRule } from "./Style";

//
export const queryExtensions = { logAll(element) { console.log("attributes:", [...element?.attributes].map(x => ({ name: x.name, value: x.value })) ); } };

//
export class UniversalElementHandler {
    direction: "children" | "parent" = "children";
    selector: string | HTMLElement;
    index: number = 0;

    //
    constructor(selector, index = 0, direction: "children" | "parent" = "children") {
        this.index     = index;
        this.selector  = selector;
        this.direction = direction;
    }

    //
    //_getArray   (target) { return (typeof this.selector == "string") ? Array.from(target?.querySelectorAll?.(this.selector) ?? []) : (Array.isArray(this.selector) ? this.selector : [this.selector]); }
    //_getSelected(target) { return (typeof this.selector == "string") ? (target?.matches?.(this.selector) ? target : target?.querySelector?.(this.selector)) : this.selector; }
    //_getWClosest(target) { return (typeof this.selector == "string") ? (target?.matches?.(this.selector) ? target : target?.closest?.(this.selector)) : this.selector; }

    //
    _observeAttributes(target, attribute, cb) {
        return (typeof this.selector == "string" ? observeAttributeBySelector(target, this.selector, attribute, cb) : observeAttribute(target ?? this.selector, attribute, cb));
    }

    //
    _getArray(target) {
        if (typeof target == "function") { target = (target?.() || this.selector) || target; };
        if (!this.selector) return [target];

        //
        if (typeof this.selector == "string") {
            const inclusion = target?.matches?.(this.selector) ? [target] : [];
            if (this.direction === "children") {
                const list = target?.querySelectorAll?.(this.selector);
                return list?.length >= 1 ? [...list] : inclusion;
            } else if (this.direction === "parent") {
                // closest возвращает только первый найденный элемент, обернём в массив для совместимости
                const closest = target?.closest?.(this.selector);
                return closest ? [closest] : inclusion;
            }
        }
        return Array.isArray(this.selector) ? this.selector : [this.selector];
    }

    //
    _getSelected(target) {
        if (typeof target == "function") { target = (target?.() || this.selector) || target; };
        if (!this.selector) return target;
        if (typeof this.selector == "string") {
            if (this.direction === "children") { return target?.matches?.(this.selector) ? target : target?.querySelector?.(this.selector); } else
            if (this.direction === "parent"  ) { return target?.matches?.(this.selector) ? target : target?.closest?.(this.selector);}
        }
        return this.selector;
    }

    //
    _redirectToBubble(eventName) {
        return {
            ["pointerenter"]: "pointerover",
            ["pointerleave"]: "pointerout",
            ["mouseenter"]: "mouseover",
            ["mouseleave"]: "mouseout",
            ["focus"]: "focusin",
            ["blur"]: "focusout",
        }?.[eventName] || eventName;
    }

    //
    _addEventListener(target, name, cb, option?) {
        // TODO: use wrap-map
        const wrap = (ev) => { if (typeof this.selector == "string" ? ev.target.matches(this.selector) : ev.target === this.selector)
            { cb?.call?.(ev.target ?? target, ev); } };
        target?.addEventListener?.(this._redirectToBubble(name), wrap, option); return wrap;
    }

    //
    get(target, name, ctx) {
        const array = this._getArray(target);
        const selected = array.length > 0 ? array[this.index] : this._getSelected(target);

        // Extensions
        if (name in queryExtensions) { return queryExtensions?.[name]?.bind?.(selected); }
        if (name === "length" && array?.length) { return array?.length; }

        //
        if (["style", "attributeStyleMap"].indexOf(name) >= 0) {
            const basis = this.selector ? (typeof this.selector == "string" ? getStyleRule(this.selector) : (selected?.dataset?.id ? getStyleRule(`[data-id="${selected?.dataset?.id}"]`) : selected)) : (selected ?? target);
            if (basis?.[name] != null) { return basis?.[name]; }
        }

        //
        if (selected?.[name] != null) { return typeof selected[name] === "function" ? selected[name].bind(selected) : selected[name]; }
        if (   array?.[name] != null) { return typeof    array[name] === "function" ?    array[name].bind(array)    :    array[name]; }

        //
        if (name === "self") return target;
        if (name === "selector") return this.selector;
        if (name === "current") return selected;
        if (name === "append") return (...args)=>selected?.append?.([...(args||[])]?.map?.((e)=>e?.element??e) || args);
        if (name === "observeAttr") return (name, cb)=>this._observeAttributes(target, name, cb);
        if (name === "addEventListener") return (name, cb, opt?)=>this._addEventListener(target, name, cb, opt);

        // for BLU.E
        if (name === "element") {
            if (array?.length <= 1) return selected?.element ?? selected;
            const fragment = document.createDocumentFragment();
            fragment.append(...array); return fragment;
        }

        //
        if (name === "deref") {
            const wk = new WeakRef(selected);
            return ()=>(wk?.deref()?.element ?? wk?.deref());
        }

        //
        if (typeof name === "string" && /^\d+$/.test(name)) { return array[parseInt(name)]; }

        //
        return;
    }

    //
    set(target, name, value) {
        const array = this._getArray(target);
        const selected = array.length > 0 ? array[this.index] : this._getSelected(target);

        //
        if (typeof name === "string" && /^\d+$/.test(name)) { return false; }
        if (array[name] != null) { return false; }
        if (selected) { selected[name] = value; return true; }
        return false;
    }

    has(target, name) {
        const array = this._getArray(target);
        const selected = array.length > 0 ? array[this.index] : this._getSelected(target);
        return (
            (typeof name === "string" && /^\d+$/.test(name) && array[parseInt(name)] != null) ||
            (array[name] != null) ||
            (selected && name in selected)
        );
    }

    deleteProperty(target, name) {
        const array = this._getArray(target);
        const selected = array.length > 0 ? array[this.index] : this._getSelected(target);
        if (selected && name in selected) { delete selected[name]; return true; }
        return false;
    }

    ownKeys(target) {
        const array = this._getArray(target);
        const selected = array.length > 0 ? array[this.index] : this._getSelected(target);
        const keys = new Set();
        array.forEach((el, i) => keys.add(i.toString()));
        Object.getOwnPropertyNames(array).forEach(k => keys.add(k));
        if (selected) Object.getOwnPropertyNames(selected).forEach(k => keys.add(k));
        return Array.from(keys);
    }

    defineProperty(target, name, desc) {
        const array = this._getArray(target);
        const selected = array.length > 0 ? array[this.index] : this._getSelected(target);
        if (selected) { Object.defineProperty(selected, name, desc); return true; }
        return false;
    }

    apply(target, self, args) {
        const result = target?.apply?.(self, args); this.selector = result || this.selector;
        return new Proxy(target, this as ProxyHandler<any>);
    }
}

//
const alreadyUsed = new WeakMap();
export const Q = (selector, host = document.documentElement, index = 0) => {
    if ((selector?.element ?? selector) instanceof HTMLElement) {
        const el = selector?.element ?? selector; // @ts-ignore
        return alreadyUsed.getOrInsert(el, new Proxy(el, new UniversalElementHandler("", index) as ProxyHandler<any>));
    }
    if (typeof selector == "function") {
        const got: any = selector?.(), el = got?.element ?? got; // @ts-ignore
        return alreadyUsed.getOrInsert(el, new Proxy(el, new UniversalElementHandler("", index) as ProxyHandler<any>));
    }
    return new Proxy(host, new UniversalElementHandler(selector, index) as ProxyHandler<any>);
}

/* // WILL not be released!
const proxied = (ref)=>{
    const actual = Q((val)=>val); // или Q(()=>ref?.value)
    subscribe(ref, (value, prop)=>actual?.(value))
    return actual;
}
*/

//
export const extendQueryPrototype = (extended: any = {})=>{
    return Object.assign(queryExtensions, extended);
}
