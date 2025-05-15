//
export const isMobile = ()=>{
    const f1 = matchMedia("(hover: none) and (pointer: coarse) and (display-mode: fullscreen)").matches;
    const f2 = 'ontouchstart' in window || 'onmsgesturechange' in window;
    return f1 && f2;
};

//
export const detectMobile = () => {
    //
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    return toMatch.some(navigator.userAgent.match.bind(navigator.userAgent)) && (navigator.maxTouchPoints || 'ontouchstart' in document.documentElement) && window.matchMedia("(pointer: coarse)").matches;
};
