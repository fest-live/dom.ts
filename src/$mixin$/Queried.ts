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

        //
        if (typeof this.selector == "string") {
            if (this.direction === "children") {
                return target?.matches?.(this.selector) ? target : target?.querySelector?.(this.selector);
            } else if (this.direction === "parent") {
                return target?.matches?.(this.selector) ? target : target?.closest?.(this.selector);
            }
        }
        return this.selector;
    }

    //
    get(target, name, ctx) {
        const array = this._getArray(target);
        const selected = array.length > 0 ? array[this.index] : this._getSelected(target);

        // Extensions
        if (name in extensions) {
            return extensions[name].bind(null, target, this);
        }

        // Индексация: el[0], el[1] и т.д.
        if (typeof name === "string" && /^\d+$/.test(name)) {
            return array[parseInt(name)];
        }

        // Длина коллекции
        if (name === "length") { return array.length; }

        //
        if (["style", "attributeStyleMap"].indexOf(name) >= 0) {
            const basis = this.selector ? (typeof this.selector == "string" ? getStyleRule(this.selector) : (selected?.dataset?.id ? getStyleRule(`[data-id="${selected?.dataset?.id}"]`) : selected)) : (selected ?? target);
            if (basis?.[name] != null) { return basis?.[name]; }
        }

        // Свойства первого найденного элемента
        if (selected && selected[name] != null) {
            return typeof selected[name] === "function"
                ? selected[name].bind(selected)
                : selected[name];
        }

        // Методы коллекции (например, forEach, map)
        if (array[name] != null) {
            return typeof array[name] === "function"
                ? array[name].bind(array)
                : array[name];
        }

        // Специальные свойства
        if (name === "self") return target;
        if (name === "selector") return this.selector;
        if (name === "current") return selected;
        if (name === "observeAttr") return (name, cb)=>this._observeAttributes(target, name, cb);

        // for BLU.E
        if (name === "element") {
            const fragment = document.createDocumentFragment();
            fragment.append(...this._getArray(target));
            return fragment;
        }
        return;
    }

    set(target, name, value) {
        const array = this._getArray(target);
        const selected = array.length > 0 ? array[this.index] : this._getSelected(target);

        // Индексация запрещена (можно реализовать если нужно)
        if (typeof name === "string" && /^\d+$/.test(name)) {
            return false;
        }

        // Свойства коллекции не изменяемы
        if (array[name] != null) {
            return false;
        }

        // Устанавливаем свойство на выбранный элемент
        if (selected) {
            selected[name] = value;
            return true;
        }
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
        if (selected && name in selected) {
            delete selected[name];
            return true;
        }
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
        if (selected) {
            Object.defineProperty(selected, name, desc);
            return true;
        }
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
