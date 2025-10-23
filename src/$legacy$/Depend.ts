export const stateOf = (prop, cond, attr = "id") => { return (el, v, p, o)=>{ if (p == prop) { cond?.[el.dataset[attr] == v ? 0 : 1]?.(el); }; } }
export const visibleBy = (prop, attr = "id") => { return stateOf(prop, [(el)=>(delete el.dataset.hidden), (el)=>(el.dataset.hidden = "true")], attr); }
export const dependState = (state, selector, cb, subscribe: any = null) => {
    subscribe?.(state, (val, prop, old)=>document.querySelectorAll(selector).forEach((el)=>cb(el, val, prop, old)));
}
