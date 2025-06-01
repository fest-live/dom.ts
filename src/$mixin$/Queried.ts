import { observeAttribute, observeAttributeBySelector } from "./Observer";
import { getStyleRule } from "./Style";

//
export const extensions = { logAll(target, handler) { console.log(handler._getArray(target)); } };
export class UniversalElementHandler {
    direction: "children" | "parent" = "children";
    selector: string | HTMLElement;
    index: number = 0;

    //
    constructor(selector, index = 0, direction: "children" | "parent" = "children") {
        this.selector  = selector;
        this.direction = direction;
        this.index = index;
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
    get(target, name, ctx) {
        const array = this._getArray(target);
        const selected = array.length > 0 ? array[this.index] : this._getSelected(target);

        // Extensions
        if (name in extensions) { return extensions[name].bind(null, target, this); }
        if (name === "length" && array?.length) { return array?.length; }
        if (typeof name === "string" && /^\d+$/.test(name)) { return array[parseInt(name)]; }

        //
        if (["style", "attributeStyleMap"].indexOf(name) >= 0) {
            const basis = this.selector ? (typeof this.selector == "string" ? getStyleRule(this.selector) : (selected?.dataset?.id ? getStyleRule(`[data-id="${selected?.dataset?.id}"]`) : selected)) : (selected ?? target);
            if (basis?.[name] != null) { return basis?.[name]; }
        }

        //
        if (selected?.[name] != null) {
            return typeof selected[name] === "function"
                ? selected[name].bind(selected)
                : selected[name];
        }

        //
        if (array?.[name] != null) {
            return typeof array[name] === "function"
                ? array[name].bind(array)
                : array[name];
        }

        //
        if (name === "self") return target;
        if (name === "selector") return this.selector;
        if (name === "current") return selected;
        if (name === "append") return (...args)=>selected?.append?.([...(args||[])]?.map?.((e)=>e?.element??e) || args);
        if (name === "observeAttr") return (name, cb)=>this._observeAttributes(target, name, cb);

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
export const Q = (selector, host = document.documentElement, index = 0) => {
    if (typeof selector == "function") {
        return new Proxy(selector, new UniversalElementHandler("", index) as ProxyHandler<any>);
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
class WeakRefProxyHandler<T extends object> implements ProxyHandler<object> {
    // here can be only options or left params
    constructor(args?: any) {}

    private _deref(target): T | undefined { return (target instanceof WeakRef || typeof target?.deref == "function") ? (target?.deref?.()) : target; }

    get(tg: object, prop: PropertyKey, _receiver: any): any {
        const obj = this._deref(tg);
        const value = (obj as any)?.[prop];

        // libraries specific (LUR.E/object.ts)
        if ((prop === "element" || prop === "value") && obj && (!(prop in obj) || obj?.[prop] == null)) { return obj; }
        if (typeof value === 'function') {
            return (...args: any[]) => {
                const realObj = this._deref(tg);
                return (realObj as any)?.[prop]?.(...args);
            };
        }
        return value;
    }

    set(tg: object, prop: PropertyKey, value: any, _receiver: any): boolean {
        const obj = this._deref(tg); if (obj) return Reflect.set(obj, prop, value);
        return true;
    }

    has(tg: object, prop: PropertyKey): boolean {
        const obj = this._deref(tg); if (!obj) return false;
        return prop in obj;
    }

    ownKeys(tg: object): ArrayLike<string | symbol> {
        const obj = this._deref(tg); if (!obj) return [];
        return Reflect.ownKeys(obj);
    }

    getOwnPropertyDescriptor(tg: object, prop: PropertyKey): PropertyDescriptor | undefined {
        const obj = this._deref(tg); if (!obj) return undefined;
        return Object.getOwnPropertyDescriptor(obj, prop);
    }

    deleteProperty(tg: object, prop: PropertyKey): boolean {
        const obj = this._deref(tg); if (!obj) return true;
        return Reflect.deleteProperty(obj, prop);
    }

    defineProperty(tg: object, prop: PropertyKey, descriptor: PropertyDescriptor): boolean {
        const obj = this._deref(tg); if (!obj) return true;
        return Reflect.defineProperty(obj, prop, descriptor);
    }

    getPrototypeOf(tg: object): object | null {
        const obj = this._deref(tg); if (!obj) return null;
        return Object.getPrototypeOf(obj);
    }

    setPrototypeOf(tg: object, proto: any): boolean {
        const obj = this._deref(tg); if (!obj) return true;
        return Reflect.setPrototypeOf(obj, proto);
    }

    isExtensible(tg: object): boolean {
        const obj = this._deref(tg); if (!obj) return false;
        return Reflect.isExtensible(obj);
    }

    preventExtensions(tg: object): boolean {
        const obj = this._deref(tg); if (!obj) return true;
        return Reflect.preventExtensions(obj);
    }
}

//
export type WR<T> = {
    [K in keyof T]: T[K] extends (...args: infer A) => infer R
        ? (...args: A) => WR<R> | null
        : T[K] | null
};

//
const existsMap = new WeakMap<any, WR<any>>();
export function WRef<T extends object>(target: T|WeakRef<T>): WR<T> {
    if (!(typeof target == "object" || typeof target == "function")) return target;
    target = ((target instanceof WeakRef || typeof (target as any)?.deref == "function") ? (target as any)?.deref?.() : target) as unknown as T;
    if (existsMap.has(target)) return existsMap.get(target) as WR<T>;

    //
    const handler = new WeakRefProxyHandler<T>();
    const pm: WR<T> = new Proxy(new WeakRef(target), handler as ProxyHandler<WeakRef<T>>) as WR<T>;
    existsMap.set(target, pm); return pm;
}
