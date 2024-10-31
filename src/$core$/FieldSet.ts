import { observeBySelector } from "./Observer";

//
export const updateInput = (state, target)=>{
    const input = target.querySelector("input:where([type=\"text\"], [type=\"number\"], [type=\"range\"])");
    if (state && input) {
        input.value = state[target?.dataset?.name];
        input.dispatchEvent(new Event("change", { bubbles: false, cancelable: true, }))
    }

    // setup radio boxes
    if (state) {
        const radio = target.querySelector("input:where([type=\"radio\"][name=\""+target?.dataset?.name+"\"][value=\""+state[target?.dataset?.name]+"\"])");
        if (state && radio && !radio?.checked) { radio?.click?.(); };
    }

    // setup check boxes
    const checkbox = target.querySelector("input:where([type=\"checkbox\"])");
    if (state && checkbox) {
        checkbox.checked = !!state[target?.dataset?.name];
        checkbox.dispatchEvent(new Event("change", { bubbles: false, cancelable: true, }))
    }
}

//
export const synchronizeInputs = (state, fields = document.documentElement, wrapper = ".u2-input")=>{

    //
    const onChange = (ev)=>{
        const input  = ev.target;
        const target = input.closest(wrapper);

        //
        if (state) {
            if (input.matches("input:where([type=\"text\"], [type=\"number\"], [type=\"range\"])")) {
                state[target.dataset.name] = (input.valueAsNumber != null && !isNaN(input.valueAsNumber)) ? input.valueAsNumber : input.value;
            }

            // any radio-box
            if (input?.matches("input[type=\"radio\"]:checked")) {
                state[target.dataset.name] = input.value;
            }

            // any check-box
            if (input?.matches("input[type=\"checkbox\"]")) {
                state[target.dataset.name] = input.checked;
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
