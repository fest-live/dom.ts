//
/*export const orientationNumberMap = {
    "portrait-primary": 0, // as 0deg, aka. 360deg
    "landscape-primary": 1, // as -90deg, aka. 270deg
    "portrait-secondary": 2, // as -180deg, aka. 180deg
    "landscape-secondary": 3 // as -270deg, aka. 90deg
}*/

//
export const orientationNumberMap = {
    "landscape-primary": 0, // as 0deg, aka. 360deg
    "portrait-primary": 1, // as -90deg, aka. 270deg
    "landscape-secondary": 2, // as -180deg, aka. 180deg
    "portrait-secondary": 3, // as -270deg, aka. 90deg
}

//
const delayed = new Map<number, Function | null>([]);
requestIdleCallback(async ()=>{
    while(true) {
        for (const dl of delayed.entries()) {
            dl[1]?.(); delayed.delete(dl[0]);
        }

        //
        try { await (new Promise((rs)=>requestAnimationFrame(rs))); } catch(e) { break; };
    }
}, {timeout: 100});

//
export const callByFrame = (pointerId, cb)=>{
    delayed.set(pointerId, cb);
}

//
export const cover = (ctx, img, scale = 1, port, orient = 0) => {
    const canvas = ctx.canvas;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((orient || 0) * (Math.PI * 0.5));
    ctx.rotate(port * -(Math.PI / 2));
    ctx.translate(-(img.width / 2) * scale, -(img.height / 2) * scale);
};

//
const blobImageMap = new WeakMap();
export const createImageBitmapCache = (blob)=>{
    if (!blobImageMap.has(blob) && (blob instanceof Blob || blob instanceof File || blob instanceof OffscreenCanvas || blob instanceof ImageBitmap || blob instanceof Image)) {
        blobImageMap.set(blob, createImageBitmap(blob));
    }
    return blobImageMap.get(blob);
}
