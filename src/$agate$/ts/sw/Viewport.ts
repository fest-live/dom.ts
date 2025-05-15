//
export const getAvailSize = () => {
    const l = matchMedia("(orientation: landscape)")?.matches;
    const aw = screen.availWidth  + "px";
    const ah = screen.availHeight + "px";
    return {
        "--screen-width": Math.min(screen.width, screen.availWidth) + "px",
        "--screen-height": Math.min(screen.height, screen.availHeight) + "px",
        "--avail-width" : l ? ah : aw,
        "--avail-height": l ? aw : ah,
        "--view-height": (Math.min(screen.availHeight, window.innerHeight) + "px"),
        "--pixel-ratio": devicePixelRatio || 1,
    };
}

//
export const availSize = getAvailSize();
export const updateVP = (ev?: any)=>{
    const rule = document.documentElement;
    Object.assign(availSize, getAvailSize());
    Object.entries(availSize).forEach(([propName, propValue]) => {
        const exists = rule?.style?.getPropertyValue(propName);
        if (!exists || exists != propValue) {
            rule?.style?.setProperty?.(propName, (propValue || "") as string, "");
        }
    });

    // make secondary screen orientation detectable
    document.documentElement.style.setProperty("--secondary", screen?.orientation?.type?.endsWith?.("secondary") ? "1" : "0");
}
