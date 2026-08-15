/*
 * Filename: Observer.ts
 * FullPath: modules/projects/dom.ts/src/mixin/Observer.ts
 * Change date and time: 20.41.00_15.08.2026
 * Reason for changes: Guard empty CSS selectors — querySelectorAll("") throws
 * "The provided selector is empty" during MutationObserver unwrap.
 */
const onBorderObserveSymbol = Symbol.for("dom.ts@onBorderObserve");
const onBorderObserve = globalThis[onBorderObserveSymbol] ??= new WeakMap<HTMLElement, Function[]>();
const onContentObserveSymbol = Symbol.for("dom.ts@onContentObserve");
const onContentObserve = globalThis[onContentObserveSymbol] ??= new WeakMap<HTMLElement, Function[]>();

//
const unwrapFromQuery = (element: any) => { if (typeof element?.current == "object") { element = element?.element ?? element?.current ?? (typeof element?.self == "object" ? element?.self : null) ?? element; }; return element; }

/** INVARIANT: `querySelectorAll` / `matches` reject "" — normalize before DOM APIs. */
const normalizeSelector = (selector: any, fallback = "*"): string => {
    if (typeof selector !== "string") return fallback;
    const trimmed = selector.trim();
    return trimmed || fallback;
};

const safeQuerySelectorAll = (el: any, selector: string): Element[] => {
    if (!el || typeof el.querySelectorAll !== "function") return [];
    const sel = normalizeSelector(selector, "");
    if (!sel) return [];
    try {
        return Array.from(el.querySelectorAll(sel) || []) as Element[];
    } catch {
        return [];
    }
};

const safeMatches = (el: any, selector: string): boolean => {
    if (!el || typeof el.matches !== "function") return false;
    const sel = normalizeSelector(selector, "");
    if (!sel) return false;
    try {
        return !!el.matches(sel);
    } catch {
        return false;
    }
};

//
export const observeContentBox = (element, cb) => {
    if (!onContentObserve.has(element = unwrapFromQuery(element))) {
        const callbacks: Function[] = [];
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.contentBoxSize) {
                    const contentBoxSize = entry.contentBoxSize[0];
                    if (contentBoxSize) {
                        callbacks.forEach((cb) => cb?.(contentBoxSize, observer));
                    }
                }
            }
        });

        //
        cb?.({
            inlineSize: element.clientWidth/* - (getPxValue(element, "padding-left") + getPxValue(element, "padding-right"))*/,
            blockSize: element.clientHeight/* - (getPxValue(element, "padding-top") + getPxValue(element, "padding-bottom"))*/,
        }, observer);

        //
        onContentObserve.set(element, callbacks);
        if ((element?.element ?? element) instanceof Node) {
            observer.observe(element?.element ?? element, {box: "content-box"});
        }
    }

    //
    onContentObserve.get(element)?.push?.(cb);
    return { disconnect: ()=>(onContentObserve.get(element)?.splice?.(onContentObserve.get(element)?.indexOf(cb) || -1, 1)) };
};

//
export const observeBorderBox = (element, cb) => {
    if (!onBorderObserve.has(element = unwrapFromQuery(element))) {
        const callbacks: Function[] = [];
        const observer = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.borderBoxSize) {
                    const borderBoxSize = entry.borderBoxSize[0];
                    if (borderBoxSize) {
                        callbacks.forEach((cb) => cb?.(borderBoxSize, observer));
                    }
                }
            }
        });

        //
        cb?.({
            inlineSize: element.offsetWidth,
            blockSize: element.offsetHeight,
        }, observer);

        //
        onBorderObserve.set(element, callbacks);
        if ((element?.element ?? element) instanceof Node) {
            observer.observe(element?.element ?? element, {box: "border-box"});
        }
    }

    //
    onBorderObserve.get(element)?.push?.(cb);
    return { disconnect: ()=>(onBorderObserve.get(element)?.splice?.(onBorderObserve.get(element)?.indexOf(cb) || -1, 1)) };
}

/*
    const config = {
        attributeFilter: [attribute],
        attributeOldValue: true,
        attributes: true,
        childList: false,
        subtree: false,
    };
*/

//
export const observeAttribute = (element, attribute, cb) => {
    if (typeof element?.selector == "string") { return observeAttributeBySelector(element, element?.selector, attribute, cb); };

    //
    const attributeList = new Set<string>((attribute.split(",") || [attribute]).map((s) => s.trim()));
    const observer = new MutationObserver((mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.attributeName && attributeList.has(mutation.attributeName))
                { cb(mutation, observer); }
        }
    });

    //
    if ((element?.element ?? element) instanceof Node) {
        observer.observe(element = unwrapFromQuery(element), { attributes: true, attributeOldValue: true, attributeFilter: [...attributeList] });
    }
    attributeList.forEach((attribute)=>cb({ target: element, type: "attributes", attributeName: attribute, oldValue: (element as HTMLElement)?.getAttribute?.(attribute) }, observer));
    return observer;
};

//
export const observeAttributeBySelector = (element, selector, attribute, cb) => {
    const sel = normalizeSelector(selector);
    const attributeList = new Set<string>([...(attribute.split(",") || [attribute])].map((s) => s.trim()));
    const observer = new MutationObserver((mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type == "childList") {
                const addedNodes   = Array.from(mutation.addedNodes)   || [];
                const removedNodes = Array.from(mutation.removedNodes) || [];

                //
                addedNodes.push(...Array.from(mutation.addedNodes || []).flatMap((el)=> safeQuerySelectorAll(el, sel)));
                removedNodes.push(...Array.from(mutation.removedNodes || []).flatMap((el)=> safeQuerySelectorAll(el, sel)));

                //
                [...new Set(addedNodes)]?.filter((el: any)=> safeMatches(el, sel))?.map?.((target)=>{
                    attributeList.forEach((attribute)=>{
                        cb({ target, type: "attributes", attributeName: attribute, oldValue: (target as HTMLElement)?.getAttribute?.(attribute) }, observer);
                    });
                });
            } else
            if (safeMatches(mutation.target, sel) && (mutation.attributeName && attributeList.has(mutation.attributeName))) {
                cb(mutation, observer);
            }
        }
    });

    //
    observer.observe(element = unwrapFromQuery(element), {
        attributeOldValue: true,
        attributes: true,
        attributeFilter: [...attributeList],
        childList: true,
        subtree: true,
        characterData: true
    });

    //
    safeQuerySelectorAll(element, sel).map((target)=>attributeList.forEach((attribute)=>cb({ target, type: "attributes", attributeName: attribute, oldValue: (target as HTMLElement)?.getAttribute?.(attribute) }, observer)));
    return observer;
};

//
export const observeBySelector = (element, selector = "*", cb = (mut, obs)=>{}) => {
    // WHY: `""` is a string so it bypasses the default `"*"` and throws in querySelectorAll.
    const sel = normalizeSelector(selector);

    const unwrapNodesBySelector = (nodes: NodeListOf<Element>): Element[]=>{
        const $nodes = Array.from(nodes || []) || [];
        $nodes.push(...Array.from(nodes || []).flatMap((el)=> safeQuerySelectorAll(el, sel)));
        return [...Array.from((new Set($nodes)).values())].filter((el) => safeMatches(el, sel));
    }

    //
    let obRef: WeakRef<MutationObserver> | null = null;
    const handleMutation = (mutation)=>{
        const observer     = obRef?.deref?.();
        const addedNodes   = unwrapNodesBySelector(mutation.addedNodes);
        const removedNodes = unwrapNodesBySelector(mutation.removedNodes);

        //
        if (addedNodes.length > 0 || removedNodes.length > 0) {
            cb?.({
                type: mutation.type,
                target: mutation.target,
                attributeName: mutation.attributeName,
                attributeNamespace: mutation.attributeNamespace,
                nextSibling: mutation.nextSibling,
                oldValue: mutation.oldValue,
                previousSibling: mutation.previousSibling,
                addedNodes, removedNodes,
            }, observer);
        }
    }

    //
    const handleCome = (ev)=>{
        handleMutation({
            addedNodes: [ev?.target].filter((el)=>!!el),
            removedNodes: [ev?.relatedTarget].filter((el)=>!!el),
            type: "childList",
            target: ev?.currentTarget,
        });
    }

    //
    const handleOutCome = (ev)=>{
        handleMutation({
            addedNodes: [ev?.relatedTarget].filter((el)=>!!el),
            removedNodes: [ev?.target].filter((el)=>!!el),
            type: "childList",
            target: ev?.currentTarget,
        });
    }

    //
    const handleFocusClick = (ev)=>{
        handleMutation({
            addedNodes: [ev?.target].filter((el)=>!!el),
            removedNodes: [ev?.relatedTarget || document?.activeElement].filter((el)=>!!el),
            type: "childList",
            target: ev?.currentTarget,
        });
    }

    // capture: false - from parents to children, true - from children to parents
    // passive: true - optimal for selector events
    const factors = {
        passive: true,
        capture: false,
    };

    //
    if (sel?.includes?.(":hover") && sel?.includes?.(":active")) {
        element.addEventListener("pointerover", handleCome, factors);
        element.addEventListener("pointerout", handleOutCome, factors);
        element.addEventListener("pointerdown", handleCome, factors);
        element.addEventListener("pointerup", handleOutCome, factors);
        element.addEventListener("pointercancel", handleOutCome, factors);
        return { disconnect: ()=>{
            element.removeEventListener("pointerover", handleCome, factors);
            element.removeEventListener("pointerout", handleOutCome, factors);
            element.removeEventListener("pointerdown", handleCome, factors);
            element.removeEventListener("pointerup", handleOutCome, factors);
            element.removeEventListener("pointercancel", handleOutCome, factors);
        } };
    }

    //
    if (sel?.includes?.(":hover")) {
        element.addEventListener("pointerover", handleCome, factors);
        element.addEventListener("pointerout", handleOutCome, factors);
        return { disconnect: ()=>{
            element.removeEventListener("pointerover", handleCome, factors);
            element.removeEventListener("pointerout", handleOutCome, factors);
        } };
    }

    //
    if (sel?.includes?.(":active")) {
        element.addEventListener("pointerdown", handleCome, factors);
        element.addEventListener("pointerup", handleOutCome, factors);
        element.addEventListener("pointercancel", handleOutCome, factors);
        return { disconnect: ()=>{
            element.removeEventListener("pointerdown", handleCome, factors);
            element.removeEventListener("pointerup", handleOutCome, factors);
            element.removeEventListener("pointercancel", handleOutCome, factors);
        } };
    }

    //
    if (sel?.includes?.(":focus") && sel?.includes?.(":focus-within") && sel?.includes?.(":focus-visible")) {
        element.addEventListener("focusin", handleCome, factors);
        element.addEventListener("focusout", handleOutCome, factors);
        element.addEventListener("click", handleFocusClick, factors);
        return { disconnect: ()=>{
            element.removeEventListener("focusin", handleCome, factors);
            element.removeEventListener("focusout", handleOutCome, factors);
            element.removeEventListener("click", handleFocusClick, factors);
        } };
    }

    //
    const observer = new MutationObserver((mutationList, observer) => {
        for (const mutation of mutationList) {
            if (mutation.type == "childList") {
                handleMutation(mutation);
            }
        }
    });

    //
    obRef = new WeakRef(observer);
    if ((element?.element ?? element) instanceof Node) {
        observer.observe(element = unwrapFromQuery(element), { childList: true, subtree : true });
    }
    const selected = safeQuerySelectorAll(element, sel);
    if (selected.length > 0) { cb?.({ addedNodes: selected, removedNodes: [] }, observer); };
    return observer;
};
