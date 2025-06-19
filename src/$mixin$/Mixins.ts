import { observeAttributeBySelector } from "./Observer";
import { getStoresOfElement, namedStoreMaps } from "./Store";
import { boundBehaviors } from "./Behavior";
import { WRef } from "./WRef";

// mixin { connect: (element, { ... })=>{},  disconnect: (element, { ... }): ()=>{}}
export const reflectMixins = (element, mixins)=>{
    if (!element) return;
    if (mixins) {
        const mixinSet = boundMixinSet.get(element) ?? new Set();
        if (!boundMixinSet.has(element)) { boundMixinSet.set(element, mixinSet); }
        [...(mixins?.values?.() || [])].map((e)=>bindMixins(element, e, mixinSet));
    }
    return element;
}

//
export const getElementRelated = (element)=>{
    return {
        storeSet: getStoresOfElement(namedStoreMaps, element),
        mixinSet: boundMixinSet.get(element),
        behaviorSet: boundBehaviors.get(element)
    }
}

//
export const bindMixins = (element, mixin, mixSet?)=>{
    const weak = WRef(element); mixSet ||= boundMixinSet.get(element);
    if (!mixSet.has(mixin)) { mixSet.add(mixin); mixinElements.get(mixin)?.add?.(WRef(element));
        if (mixin.name) { element.dataset.mixin += " " + mixin.name; }
        mixin?.connect?.(weak, WRef(mixin), getElementRelated(element));
    }
    return element;
}

// element <--> mixin-set
export const boundMixinSet  = new WeakMap();
export const mixinElements  = new WeakMap<any, any>();

// mixin-set <--> naming
export const mixinRegistry  = new Map<string, any>;
export const mixinNamespace = new WeakMap<any, string>;

//
export const updateMixinAttributes = (element, mixin)=>{
    if (typeof mixin == "string") { mixin = mixinRegistry.get(mixin)?.deref?.(); }
    const names  = new Set([...(element.dataset.mixin?.split?.(" ") || [])]);
    const mixins = new Set([...names].map((n)=>mixinRegistry.get(n)?.deref?.()).filter((m)=>!!m));
    const mixinSet = boundMixinSet.get(element) ?? new Set();

    //
    if (!mixinElements.has(mixin = mixin?.deref?.() ?? mixin)) { mixinElements.set(mixin, new Set()); }
    if (!boundMixinSet.has(element)) { boundMixinSet.set(element, mixinSet); }

    //
    if (!mixinSet.has(mixin)) {
        mixinElements.get(mixin)?.add?.(WRef(element));
        if (!mixins.has(mixin)) { mixin?.disconnect?.(WRef(element), WRef(mixin), getElementRelated(element)); }
        if ( mixins.has(mixin)) { mixin?.connect?.(WRef(element), WRef(mixin), getElementRelated(element));
            names.add(mixinNamespace.get(mixin)); mixinSet.add(mixin);
            element.dataset.mixin = [...names].filter((n)=>!!n).join(" ");
        }
    }
    if (mixinSet.has(mixin)) {
        if (!mixins.has(mixin)) { mixinSet?.delete?.(mixin); mixin?.disconnect?.(WRef(element), WRef(mixin), getElementRelated(element)); }
    }
}

//
export const roots   = new Set<any>([]);
export const addRoot = (root: any = document) => {
    if (!roots.has(root)) {
        roots.add(root);
        observeAttributeBySelector(root, "*", "data-mixin", (mutation) => updateAllMixins(mutation.target));
    }
    return root;
};

//
export const updateAllMixins = (element)=>{
    const names  = new Set([...(element.dataset.mixin?.split?.(" ") || [])]);
    const mixins = new Set([...names].map((n)=>mixinRegistry.get(n)).filter((m)=>!!m));
    [...mixins].map((m)=>updateMixinAttributes(element, m));
}

//
export const updateMixinAttributesAll = (elements, mixin)=>{ elements.forEach((e)=>updateMixinAttributes(e, mixin)) }
export const updateMixinAttributesAllInRoots = (mixin) => {
    for (const root of roots) { updateMixinAttributesAll(root.querySelectorAll("[data-mixin]"), mixin); }
}

//
export const nameRegistryF = new FinalizationRegistry((key: any)=>{ mixinRegistry.delete(key); });
export const registerMixin = (name, mixin) => {
    if (!mixinNamespace.has(mixin)) {
        const key = name?.trim?.();
        if (key) {
            mixinNamespace.set(mixin, key);
            mixinRegistry.set(key, WRef(mixin));
            nameRegistryF.register(mixin, key);
            updateMixinAttributesAllInRoots(mixin);
        }
    }
};

//
addRoot(document);

//
export class DOMMixin {
    constructor(name) { if (name) { registerMixin(name, this); } }

    //
    public connect(wElement, wSelf, related) { return this; }
    public disconnect(wElement, wSelf, related) { return this; }

    //
    public storeForElement(element) { return namedStoreMaps.get(this.name)?.get?.(element); };
    public relatedForElement(element) { return getElementRelated(element); }

    //
    get elements() { return mixinElements.get(this); }
    get storage() { return namedStoreMaps.get(this.name); }
    get name() { return mixinNamespace.get(this); }
}
