export const passiveOpts = {};

//
export function addEvent(target, type, cb, opts: any = passiveOpts): any {
    target?.addEventListener?.(type, cb, opts);
    const wr = (typeof target == "object" || typeof target == "function" && !target?.deref) ? new WeakRef(target) : target;
    return () => wr?.deref?.()?.removeEventListener?.(type, cb, opts);
    //return () => target?.removeEventListener?.(type, cb, opts);
}

//
export function removeEvent(target, type, cb, opts: any = passiveOpts): any {
    target?.removeEventListener?.(type, cb, opts);
}

//
export const addEvents = (root, handlers) => {
    root = (root instanceof WeakRef ? root.deref() : root); // @ts-ignore
    return [...Object.entries(handlers)]?.map?.(([name, cb]) => (Array.isArray(cb) ? addEvent(root, name, ...cb as any) : addEvent(root, name, cb)));
}

//
export const removeEvents = (root, handlers) => {
    root = (root instanceof WeakRef ? root.deref() : root); // @ts-ignore
    return [...Object.entries(handlers)]?.map?.(([name, cb]) => (Array.isArray(cb) ? removeEvent(root, name, ...cb as any) : removeEvent(root, name, cb)));
}
