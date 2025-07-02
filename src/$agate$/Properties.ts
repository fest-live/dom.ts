[   // @ts-ignore
    { name: "--screen-width",  syntax: "<length-percentage>", inherits: true, initialValue: "0px" },
    { name: "--screen-height", syntax: "<length-percentage>", inherits: true, initialValue: "0px" },
    { name: "--visual-width",  syntax: "<length-percentage>", inherits: true, initialValue: "0px" },
    { name: "--visual-height", syntax: "<length-percentage>", inherits: true, initialValue: "0px" },
    { name: "--clip-ampl",     syntax: "<number>",           inherits: true, initialValue: "0" },
    { name: "--clip-freq",     syntax: "<number>",           inherits: true, initialValue: "0" },
    { name: "--avail-width",   syntax: "<length-percentage>", inherits: true, initialValue: "0px" },
    { name: "--avail-height",  syntax: "<length-percentage>", inherits: true, initialValue: "0px" },
    { name: "--pixel-ratio",   syntax: "<number>",           inherits: true, initialValue: "1" },
    { name: "--percent",       syntax: "<number>",           inherits: true, initialValue: "0" },
    { name: "--percent-x",     syntax: "<number>",           inherits: true, initialValue: "0" },
    { name: "--percent-y",     syntax: "<number>",           inherits: true, initialValue: "0" },
    { name: "--scroll-left",   syntax: "<number>",           inherits: true, initialValue: "0" },
    { name: "--scroll-top",    syntax: "<number>",           inherits: true, initialValue: "0" },
    { name: "--drag-x",        syntax: "<number>",           inherits: true, initialValue: "0" },
    { name: "--drag-y",        syntax: "<number>",           inherits: true, initialValue: "0" },
    { name: "--grid-r",        syntax: "<number>",           inherits: true, initialValue: "0" },
    { name: "--grid-c",        syntax: "<number>",           inherits: true, initialValue: "0" },
    { name: "--resize-x",      syntax: "<number>",           inherits: true, initialValue: "0" },
    { name: "--resize-y",      syntax: "<number>",           inherits: true, initialValue: "0" },
    { name: "--shift-x",       syntax: "<number>",           inherits: true, initialValue: "0" },
    { name: "--shift-y",       syntax: "<number>",           inherits: true, initialValue: "0" }
].forEach((options: any) => {
    try
        { CSS?.registerProperty?.(options); } catch (e)
        { console.warn(e); }
});
