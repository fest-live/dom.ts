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
    if (state && input?.matches(selector)) {
        input.value = state[target?.dataset?.name];
        input.dispatchEvent(new Event("change", { bubbles: false, cancelable: true, }))
    }

    // setup radio boxes (requires wrapper)
    if (state) {
        const radio = includeSelf(target, "input:where([type=\"radio\"][name=\""+name+"\"][value=\""+state[name]+"\"])");
        if (state && radio && !radio?.checked) { radio?.click?.(); };
    }

    // setup check boxes
    const checkbox = includeSelf(target, "input:where([type=\"checkbox\"])");
    if (state && checkbox) {
        checkbox.checked = !!state[name];
        checkbox.dispatchEvent(new Event("change", { bubbles: false, cancelable: true, }))
    }
}

//
export const synchronizeInputs = (state, wrapper = ".u2-input", fields = document.documentElement)=>{

    //
    const onChange = (ev)=>{
        const input  = ev.target;
        const target = input.closest(wrapper);
        const name   = input.name || target?.dataset.name;

        //
        if (state) {
            if (input.matches("input:where([type=\"text\"], [type=\"number\"], [type=\"range\"])")) {
                state[name] = (input.valueAsNumber != null && !isNaN(input.valueAsNumber)) ? input.valueAsNumber : input.value;
            }

            // any radio-box
            if (input?.matches("input[type=\"radio\"]:checked")) {
                state[name] = input.value;
            }

            // any check-box
            if (input?.matches("input[type=\"checkbox\"]")) {
                state[name] = input.checked;
            }
        }
    };

    //
    fields.addEventListener("input", onChange);
    fields.addEventListener("change", onChange);

    //
    requestAnimationFrame(()=>{
        fields.querySelectorAll(wrapper).forEach((target)=>updateInput(state, target));
    });

    //
    observeBySelector(fields, wrapper, (mutations)=>{
        requestAnimationFrame(()=>{
            mutations.addedNodes.forEach((target)=>{
                updateInput(state, target);
            });
        });
    });

    //
    fields.addEventListener("u2-appear", ()=>{
        requestAnimationFrame(()=>{
            fields.querySelectorAll(wrapper).forEach((target)=>updateInput(state, target));
        });
    });
}
