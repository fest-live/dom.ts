import { observeBySelector } from "./Observer";

//
export const includeSelf = (target, selector)=>{
    return (target.querySelector(selector) ?? (target.matches(selector) ? target : null));
}

//
export const updateInput = (state, target)=>{
    const selector = "input:where([type=\"text\"], [type=\"number\"], [type=\"range\"])";
    const input    = includeSelf(target, selector);
    const name     = input?.name || target?.dataset?.name || "";

    //
    if (state?.[name] != null) { // not exists not preferred...
        if (state && input?.matches?.(selector)) {
            if (input.value != state[name]) {
                input.value = state[name];
                input.dispatchEvent(new Event("change", { bubbles: true, cancelable: true, }));
            }
        }

        // setup radio boxes (requires wrapper)
        if (state) {
            const radio = includeSelf(target, `input:where([type=\"radio\"][name=\"${name}\"][value=\"${state?.[name]}\"])`);
            if (state && radio && !radio?.checked) { radio?.click?.(); };
        }

        // setup check boxes
        const checkbox = includeSelf(target, "input:where([type=\"checkbox\"])");
        if (state && checkbox) {
            if (state[name] != checkbox.checked) {
                checkbox.checked = !!state[name];
                checkbox.dispatchEvent(new Event("change", { bubbles: true, cancelable: true, }))
            }
        }
    }
}

//
export const synchronizeInputs = (state, wrapper = ".u2-input", fields = document.documentElement, subscribe?: Function)=>{

    //
    const onChange = (ev)=>{
        const input  = ev?.target?.matches("input") ? ev?.target : ev?.target?.querySelector?.("input");
        const target = ev?.target?.matches(wrapper) ? ev?.target : input?.closest?.(wrapper);
        const name   = input?.name || target?.dataset?.name;

        //
        if (state?.[name] != null) { // not exists not preferred...
            if (input?.matches?.("input:where([type=\"text\"], [type=\"number\"], [type=\"range\"])")) {
                const value = (input.valueAsNumber != null && !isNaN(input.valueAsNumber)) ? input.valueAsNumber : input.value;
                if (state[name] != value) { state[name] = value; };
            }

            // any radio-box
            if (input?.matches?.("input[type=\"radio\"]:checked")) {
                if (state[name] != input.value) { state[name] = input.value; };
            }

            // any check-box
            if (input?.matches?.("input[type=\"checkbox\"]")) {
                if (state[name] != input.checked) { state[name] = input.checked; };
            }
        }
    };

    //
    fields.addEventListener("input", onChange);
    fields.addEventListener("change", onChange);

    //
    requestIdleCallback(()=>{
        fields.querySelectorAll(wrapper).forEach((target)=>updateInput(state, target));
    }, {timeout: 100});

    // cross-window or frame syncretism
    subscribe?.(state, (value, property)=>{
        fields.querySelectorAll(wrapper).forEach((target)=>updateInput(state, target));
    });

    //
    observeBySelector(fields, wrapper, (mutations)=>{
        mutations.addedNodes.forEach((target)=>{
            requestIdleCallback(()=>{
                updateInput(state, target);
            }, {timeout: 100});
        });
    });

    //
    fields.addEventListener("u2-appear", ()=>{
        requestIdleCallback(()=>{
            fields.querySelectorAll(wrapper).forEach((target)=>updateInput(state, target));
        }, {timeout: 100});
    });
}
