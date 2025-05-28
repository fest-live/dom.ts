import { observeAttributeBySelector, observeBySelector } from "../$mixin$/Observer";
import { MOCElement } from "./Utils";

//
export const $$ = (selector = "*", rootElement = document.documentElement)=>{ return new AxQuery2(selector, rootElement); }
export default class AxQuery2 {
    #rootElement: HTMLElement = document.documentElement;
    #selector: string = "*";

    //
    constructor(selector = "*", rootElement = document.documentElement) {
        this.#rootElement = rootElement;
        this.#selector = selector;
    }

    //
    observeAttribute(attribute, fx) { return observeAttributeBySelector(this.#rootElement, this.#selector, attribute, fx); }
    observeNodes(fx) { return observeBySelector(this.#rootElement, this.#selector, fx); }
    delegated(name, cb, options) {
        this.#rootElement.addEventListener(name, (ev)=>{
            if (ev.target.matches(this.#selector)) { cb(ev); };
        }, options);
    }

    // pointer events, mouse events, some touch events
    directly(name, cb: (ev: MouseEvent | PointerEvent | TouchEvent) => any, options) {
        this.#rootElement.addEventListener(name, (ev)=>{
            ev.stopPropagation();
            const element = document.elementFromPoint(ev.clientX, ev.clientY) as HTMLElement;
            const treeElement = MOCElement(element, this.#selector);
            if (treeElement && Array.from(document.elementsFromPoint(ev.clientX, ev.clientY)).indexOf(treeElement) >= 0) { return cb(ev); }
        }, options);
    }

    //
    get query() { return this.#rootElement.querySelector(this.#selector); }
    get queryAll() { return Array.from(this.#rootElement.querySelectorAll(this.#selector)); }
}
