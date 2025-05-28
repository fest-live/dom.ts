//
export const namedStoreMaps = new Map(); // Map<name, WeakMap<element, obj>>

//
export const getStoresOfElement = ( map: Map<any, WeakMap<any, any>>, element: any): Map<any, any> => {
    const E = [...map.entries()||[]] as [any, any][];
    return new Map<any, any>((E?.map?.(([n,m])=>[n,m?.get?.(element)])?.filter?.(([n,e])=>!!e)||[]) as any);;
}

//
export const bindStore = (element, name, obj) => {
    let weakMap = namedStoreMaps.get(name);
    if (!weakMap) {
        weakMap = new WeakMap();
        namedStoreMaps.set(name, weakMap);
    }
    if (!weakMap.has(element)) {
        weakMap.set(element, obj);
        //if (obj?.behavior) bindBeh(new WeakRef(element), [name, obj], obj?.behavior);
    }
    return element;
};

//
export const reflectStores = (element, stores) => {
    if (!element || !stores) return;
    for (const [name, obj] of stores.entries()) {
        bindStore(element, name, obj);
    }
    return element;
};
