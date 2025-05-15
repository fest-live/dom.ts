//
export const properties = [
    {
        name: "--screen-width",
        syntax: "<length-percentage>",
        inherits: true,
        initialValue: "0px",
    },
    {
        name: "--screen-height",
        syntax: "<length-percentage>",
        inherits: true,
        initialValue: "0px",
    },
    {
        name: "--visual-width",
        syntax: "<length-percentage>",
        inherits: true,
        initialValue: "0px",
    },
    {
        name: "--visual-height",
        syntax: "<length-percentage>",
        inherits: true,
        initialValue: "0px",
    },
    {
        name: "--clip-ampl",
        syntax: "<number>",
        inherits: true,
        initialValue: "0",
    },
    {
        name: "--clip-freq",
        syntax: "<number>",
        inherits: true,
        initialValue: "0",
    },
    {
        name: "--avail-width",
        syntax: "<length-percentage>",
        inherits: true,
        initialValue: "0px",
    },
    {
        name: "--avail-height",
        syntax: "<length-percentage>",
        inherits: true,
        initialValue: "0px",
    },
    {
        name: "--pixel-ratio",
        syntax: "<number>",
        inherits: true,
        initialValue: "1",
    },
    {
        name: "--percent",
        syntax: "<number>",
        inherits: true,
        initialValue: "0",
    },
    {
        name: "--percent-y",
        syntax: "<number>",
        inherits: true,
        initialValue: "0",
    },
    {
        name: "--percent-x",
        syntax: "<number>",
        inherits: true,
        initialValue: "0",
    },
    {
        name: "--scroll-left",
        syntax: "<number>",
        inherits: true,
        initialValue: "0",
    },
    {
        name: "--scroll-top",
        syntax: "<number>",
        inherits: true,
        initialValue: "0",
    },
    {
        name: "--drag-x",
        syntax: "<number>",
        inherits: true,
        initialValue: "0",
    },
    {
        name: "--drag-y",
        syntax: "<number>",
        inherits: true,
        initialValue: "0",
    },

    {
        name: "--grid-r",
        syntax: "<number>",
        inherits: true,
        initialValue: "0",
    },
    {
        name: "--grid-c",
        syntax: "<number>",
        inherits: true,
        initialValue: "0",
    }
];

//
export const setProperty = (target, name, value, importance = "")=>{
    if (!target) return;
    if ("attributeStyleMap" in target) {
        const raw = target.attributeStyleMap.get(name);
        const prop = raw?.[0] ?? raw?.value;
        if (prop != value || prop == null) {
            if (raw?.value != null && !(raw instanceof CSSKeywordValue)) { raw.value = value; } else
            { target.attributeStyleMap.set(name, value); };
        }
    } else {
        const prop = target?.style?.getPropertyValue?.(name);
        if (prop != value || prop == null) {
            target?.style?.setProperty?.(name, value, importance);
        }
    }
}

// define properties
properties.forEach((o) => {
    try {
        CSS?.registerProperty?.(o)
    } catch(e) {
        console.warn(e);
    }
});
