const __registeredCssProperties = new Set<string>();

[   // @ts-ignore
    { name: "--screen-width", syntax: "<length-percentage>", inherits: true, initialValue: "0px" },
    { name: "--screen-height", syntax: "<length-percentage>", inherits: true, initialValue: "0px" },
    { name: "--visual-width", syntax: "<length-percentage>", inherits: true, initialValue: "0px" },
    { name: "--visual-height", syntax: "<length-percentage>", inherits: true, initialValue: "0px" },
    { name: "--clip-ampl", syntax: "<number>", inherits: true, initialValue: "0" },
    { name: "--clip-freq", syntax: "<number>", inherits: true, initialValue: "0" },
    { name: "--avail-width", syntax: "<length-percentage>", inherits: true, initialValue: "0px" },
    { name: "--avail-height", syntax: "<length-percentage>", inherits: true, initialValue: "0px" },
    { name: "--pixel-ratio", syntax: "<number>", inherits: true, initialValue: "1" },
    { name: "--percent", syntax: "<number>", inherits: true, initialValue: "0" },
    { name: "--percent-x", syntax: "<number>", inherits: true, initialValue: "0" },
    { name: "--percent-y", syntax: "<number>", inherits: true, initialValue: "0" },
    { name: "--scroll-left", syntax: "<number>", inherits: true, initialValue: "0" },
    { name: "--scroll-top", syntax: "<number>", inherits: true, initialValue: "0" },
    { name: "--drag-x", syntax: "<length>", inherits: false, initialValue: "0px" },
    { name: "--drag-y", syntax: "<length>", inherits: false, initialValue: "0px" },
    { name: "--grid-r", syntax: "<number>", inherits: false, initialValue: "0" },
    { name: "--grid-c", syntax: "<number>", inherits: false, initialValue: "0" },
    { name: "--resize-x", syntax: "<length>", inherits: false, initialValue: "0px" },
    { name: "--resize-y", syntax: "<length>", inherits: false, initialValue: "0px" },
    { name: "--shift-x", syntax: "<length>", inherits: false, initialValue: "0px" },
    { name: "--shift-y", syntax: "<length>", inherits: false, initialValue: "0px" },
    { name: "--cs-grid-r", syntax: "<number>", inherits: false, initialValue: "0" },
    { name: "--cs-grid-c", syntax: "<number>", inherits: false, initialValue: "0" },
    { name: "--cs-p-grid-r", syntax: "<number>", inherits: false, initialValue: "0" },
    { name: "--cs-p-grid-c", syntax: "<number>", inherits: false, initialValue: "0" },
    { name: "--os-grid-r", syntax: "<number>", inherits: false, initialValue: "0" },
    { name: "--os-grid-c", syntax: "<number>", inherits: false, initialValue: "0" },
    { name: "--rv-grid-r", syntax: "<number>", inherits: false, initialValue: "0" },
    { name: "--rv-grid-c", syntax: "<number>", inherits: false, initialValue: "0" },
    { name: "--cell-x", syntax: "<number>", inherits: false, initialValue: "0" },
    { name: "--cell-y", syntax: "<number>", inherits: false, initialValue: "0" },
].forEach((options: any) => {
    if (typeof CSS == "undefined" || typeof CSS?.registerProperty != "function") return;
    const name = String(options?.name || "").trim();
    if (!name || __registeredCssProperties.has(name)) return;
    try {
        CSS.registerProperty(options);
    } catch (e: any) {
        const maybeDuplicate = String(e?.name || "").toLowerCase() === "invalidmodificationerror";
        if (!maybeDuplicate) {
            console.warn(e);
        }
    } finally {
        __registeredCssProperties.add(name);
    }
});

//
export const __exportProperties = ()=>{

}
