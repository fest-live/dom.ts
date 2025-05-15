//import {subscribe} from "./ReactiveLib.ts";

//
export class StateManager {
    elements = new WeakMap<HTMLElement, any>();
    named = new Map<string, any>();

    //
    constructor() {
    }

    //
    set(name: string, state: any, whatToDo: Function | null = null) {
        this.named.set(name, state);
        whatToDo?.(name, state);
        return this;
    }

    //
    bind(element: HTMLElement, state: any, whatToDo: Function | null = null) {
        this.elements.set(element, state);
        whatToDo?.(element, state);
        return this;
    }

    //
    get(element: HTMLElement | string) {
        return element instanceof HTMLElement ? this.elements.get(element) : this.named.get(element);
    }

    //
    /*stateBehave(element: HTMLElement | string, onChange: Function | null = null) {
        // @ts-ignore
        const state = (element instanceof HTMLElement ? this.elements : this.named).get(element);

        //
        if (element instanceof HTMLElement) {
            const ref = new WeakRef(element);
            subscribe(state, (value, prop)=>{
                onChange?.(ref.deref(), prop, value);
            });
        } else {
            subscribe(state, (value, prop)=>{
                onChange?.(element, prop, value);
            });
        }

        //
        return this;
    }*/
}

//
export default class State {
    static $story = new Array();

    //
    constructor() {}

    //
    static pushState(obj, href) {
        if (location.hash == href) return;

        //
        const prevState = this.$story.at(this.$story.length - 1) ?? null;
        const state = [obj, "", href];

        // @ts-ignore
        history.pushState(...state);
        this.$story.push(state);

        //
        window.dispatchEvent(
            new CustomEvent("u2-push-state", {
                detail: {
                    prevState,
                    state,
                },
            })
        );

        //
        window.dispatchEvent(
            new CustomEvent("u2-change-state", {
                detail: {
                    prevState,
                    state,
                },
            })
        );
    }

    //
    static replaceState(obj, href) {
        this.back();
        this.pushState(obj, href);
    }

    //
    static back() {
        const prevState = this.$story.at(this.$story.length - 1) ?? null;
        history.back();
        this.$story.pop();
        const state = this.$story.at(this.$story.length - 1) ?? null;

        //
        window.dispatchEvent(
            new CustomEvent("u2-pop-state", {
                detail: {
                    prevState,
                    state,
                },
            })
        );

        //
        window.dispatchEvent(
            new CustomEvent("u2-change-state", {
                detail: {
                    prevState,
                    state,
                },
            })
        );
    }
}

// deprecated...
export const initHistory = ()=>{
    addEventListener("popstate", _ => {
        const prevState = State.$story.at(State.$story.length - 1) ?? null;
        State.$story.pop();
        const state = State.$story.at(State.$story.length - 1) ?? null;

        window.dispatchEvent(
            new CustomEvent("u2-pop-state", {
                detail: {
                    prevState,
                    state,
                },
            })
        );

        window.dispatchEvent(
            new CustomEvent("u2-change-state", {
                detail: {
                    prevState,
                    state,
                },
            })
        );
    });
}
