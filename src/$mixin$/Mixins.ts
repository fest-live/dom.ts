import { observeAttributeBySelector, observeBySelector } from "./Observer";
import { getStoresOfElement, namedStoreMaps } from "./Store";
import { boundBehaviors } from "./Behavior";

// mixin { connect: (element, { ... })=>{},  disconnect: (element, { ... }): ()=>{}}
export const reflectMixins = (element, mixins)=>{
    if (!element) return;
    if (mixins) {
        const mixinSet = boundMixinSet?.get?.(element) ?? new WeakSet();
        if (!boundMixinSet?.has?.(element)) { boundMixinSet?.set?.(element, mixinSet); }
        [...(mixins?.values?.() || [])].map((e)=>bindMixins(element, e, mixinSet));
    }
    return element;
}

//
export const getElementRelated = (element)=>{
    return {
        storeSet: getStoresOfElement(namedStoreMaps, element),
        mixinSet: boundMixinSet?.get?.(element),
        behaviorSet: boundBehaviors?.get?.(element)
    }
}

//
export const bindMixins = (element, mixin, mixSet?)=>{
    const wel = new WeakRef(element); mixSet ||= boundMixinSet?.get?.(element);
    if (!mixSet?.has?.(mixin)) { mixSet?.add?.(mixin); mixinElements?.get?.(mixin)?.add?.(element);
        if (mixin.name) { element?.setAttribute?.("data-mixin", [...(element?.getAttribute?.("data-mixin")?.split?.(" ") || []), mixin.name].filter((n)=>!!n).join(" ")); }
        mixin?.connect?.(wel, mixin, getElementRelated(element));
    }
    return element;
}

// element <--> mixin-set
export const boundMixinSet  = new WeakMap<any, WeakSet<any>>();
export const mixinElements  = new WeakMap<any, any>();

// mixin-set <--> naming
export const mixinRegistry  = new Map<string, any>();
export const mixinNamespace = new WeakMap<any, string>;

//
export const updateMixinAttributes = (element, mixin)=>{
    if (typeof mixin == "string") { mixin = mixinRegistry?.get?.(mixin); }
    const names  = new Set([...(element?.getAttribute?.("data-mixin")?.split?.(" ") || [])]);
    const mixins = new Set([...names].map((n)=>mixinRegistry?.get?.(n)).filter((m)=>!!m));
    const mixinSet = boundMixinSet?.get?.(element) ?? new WeakSet();

    //
    if (!mixinElements?.has?.(mixin)) { mixinElements?.set?.(mixin, new WeakSet()); }
    if (!boundMixinSet?.has?.(element)) { boundMixinSet?.set?.(element, mixinSet); }

    //
    const wel = new WeakRef(element);
    if (!mixinSet?.has?.(mixin)) {
        if (!mixins.has(mixin)) { mixin?.disconnect?.(wel, mixin, getElementRelated(element)); }
        if ( mixins.has(mixin) || !mixinElements?.get?.(mixin)?.has?.(element)) { mixin?.connect?.(wel, mixin, getElementRelated(element));
            names.add(mixinNamespace?.get?.(mixin)); mixinSet?.add?.(mixin);
            element?.setAttribute?.("data-mixin", [...names].filter((n)=>!!n).join(" "));
        }
        mixinElements?.get?.(mixin)?.add?.(element);
    }
    if (mixinSet?.has?.(mixin)) {
        if (!mixins.has(mixin)) { mixinSet?.delete?.(mixin); mixin?.disconnect?.(wel, mixin, getElementRelated(element)); }
    }
}

//
export const roots   = new Set<any>();
export const addRoot = (root: any = typeof document != "undefined" ? document : null) => {
    if (!root) return;
    if (!roots?.has?.(root)) {
        roots?.add?.(root);

        // as attribute (reacts on attribute changes)
        observeAttributeBySelector(root, "*", "data-mixin", (mutation) => updateAllMixins(mutation.target));

        // as DOM nodes (reacts on DOM changes)
        observeBySelector(root, "[data-mixin]", (mutation) => {
            for (const element of mutation.addedNodes) {
                if (element instanceof HTMLElement) {
                    updateAllMixins(element);
                }
            }
        });
    }
    return root;
};

//
export const updateAllMixins = (element)=>{
    const names  = new Set([...(element?.getAttribute?.("data-mixin")?.split?.(" ") || [])]);
    const mixins = new Set([...names].map((n)=>mixinRegistry?.get?.(n)).filter((m)=>!!m));
    [...mixins]?.map?.((m)=>updateMixinAttributes(element, m));
}

//
export const updateMixinAttributesAll = (elements, mixin)=>{ elements.forEach((e)=>(mixin ? updateMixinAttributes(e, mixin) : updateAllMixins(e))) }
export const updateMixinAttributesAllInRoots = (mixin) => {
    for (const root of roots) { updateMixinAttributesAll(root?.querySelectorAll?.("[data-mixin]"), mixin); }
}

//
export const nameRegistryF = new FinalizationRegistry((key: any)=>{ mixinRegistry?.delete?.(key); });
export const registerMixin = (name, mixin) => {
    if (!mixinNamespace?.has?.(mixin)) {
        const key = name?.trim?.();
        if (key) {
            mixinNamespace?.set?.(mixin, key);
            mixinRegistry?.set?.(key, mixin);
            nameRegistryF?.register?.(mixin, key);
            updateMixinAttributesAllInRoots(mixin);
        }
    }
};

//
addRoot(typeof document != "undefined" ? document : null);

//
export class DOMMixin {
    constructor(name: string|null = null) { if (name) { registerMixin(name, this); } }

    //
    public connect(wElement, wSelf, related) { return this; }
    public disconnect(wElement, wSelf, related) { return this; }

    //
    public storeForElement(element) { return namedStoreMaps.get(this.name || "")?.get?.(element); };
    public relatedForElement(element) { return getElementRelated(element); }

    //
    get elements() { return mixinElements?.get?.(this); }
    get storage() { return namedStoreMaps?.get?.(this.name || ""); }
    get name() { return mixinNamespace?.get?.(this); }
}
