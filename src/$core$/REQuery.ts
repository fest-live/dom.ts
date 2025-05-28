import { getStyleRule } from "./Style";

//
export const extensions = {
    logAll(target, handler) {
        console.log(handler._getArray(target));
    }
};

//
export class UniversalElementHandler {
    selector: string | HTMLElement;
    index: number = 0;

    //
    constructor(selector, index = 0) {
        this.selector = selector;
        this.index = index;
    }

    //
    _getArray   (target) { return (typeof this.selector == "string") ? Array.from(target?.querySelectorAll?.(this.selector) ?? []) : (Array.isArray(this.selector) ? this.selector : [this.selector]); }
    _getSelected(target) { return (typeof this.selector == "string") ? (target?.matches?.(this.selector) ? target : target?.querySelector?.(this.selector)) : this.selector; }

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
        if (name === "length") {
            return array.length;
        }

        //
        if (["style", "attributeStyleMap"].indexOf(name) >= 0) {
            const basis = typeof this.selector == "string" ? getStyleRule(this.selector) : (this.selector?.dataset?.id ? getStyleRule(`[data-id="${this.selector?.dataset?.id}"]`) : this.selector);
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
}

// Фабрика для создания прокси
export function elementProxy(host, selector, index = 0) {
    return new Proxy(host, new UniversalElementHandler(selector, index) as ProxyHandler<any>);
}

// Пример использования:
// const el = elementProxy(document, '.item'); // коллекция
// el[0].textContent = 'Hello';
// el.forEach(e => e.classList.add('active'));
// el.logAll();
// el.length;
// el.textContent; // textContent первого найденного
// el.current; // первый найденный элемент
// el.selector; // селектор
// el.self; // исходный host
