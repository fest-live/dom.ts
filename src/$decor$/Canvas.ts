import { makeRAFCycle } from "../$agate$/Utils";

//
const blobImageMap = new WeakMap(), delayed = new Map<number, Function | null>([]);
const sheduler = makeRAFCycle();

//
const getImgWidth = (img)=>{
    return img?.naturalWidth || img?.width || 1;
}

//
const getImgHeight = (img)=>{
    return img?.naturalHeight || img?.height || 1;
}

//
export const callByFrame = (pointerId, cb)=>{ delayed.set(pointerId, cb); }
export const cover = (ctx, img, scale = 1, port, orient = 0) => {
    const canvas = ctx.canvas;
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((orient || 0) * (Math.PI * 0.5));
    ctx.rotate((1 - port) * -(Math.PI / 2));
    ctx.translate(-(getImgWidth(img) / 2) * scale, -(getImgHeight(img) / 2) * scale);
};

//
export const createImageBitmapCache = (blob)=>{
    if (!blobImageMap.has(blob) && (blob instanceof Blob || blob instanceof File || blob instanceof OffscreenCanvas || blob instanceof ImageBitmap || blob instanceof Image)) {
        blobImageMap.set(blob, createImageBitmap(blob));
    }
    return blobImageMap.get(blob);
}

//
const bindCache = new WeakMap();
const bindCached = (cb, ctx)=>{
    // @ts-ignore
    return bindCache?.getOrInsertComputed?.(cb, ()=> cb?.bind?.(ctx));
}

//
let UICanvas: any = null;
if (typeof HTMLCanvasElement != "undefined") {
    UICanvas = class UICanvas extends HTMLCanvasElement {
        static observedAttributes = ["data-src", "data-orient"];

        //
        ctx: CanvasRenderingContext2D | null = null;
        image: ImageBitmap | null = null;
        #size: [number, number] = [1, 1];
        #loading: string | Blob | File = "";
        #ready: string | Blob | File = "";

        //
        get #orient() { return parseInt(this.getAttribute("data-orient") || "0") || 0; }
        set #orient(value: number) { this.setAttribute("data-orient", value.toString()); }

        //
        attributeChangedCallback(name, _, newValue) {
            if (name == "data-src") { this.#preload(newValue); };
            if (name == "data-orient") { this.#render(this.#ready); };
        }

        //
        connectedCallback() {
            const parent: HTMLElement = this.parentNode as HTMLElement;
            this.#size = [ // @ts-ignore
                Math.min(Math.min(Math.max(this.clientWidth || parent?.clientWidth || 1, 1), parent?.clientWidth || 1) * (this.currentCSSZoom || 1), screen?.width || 1) * (devicePixelRatio || 1), // @ts-ignore
                Math.min(Math.min(Math.max(this.clientHeight || parent?.clientHeight || 1, 1), parent?.clientHeight || 1) * (this.currentCSSZoom || 1), screen?.height || 1) * (devicePixelRatio || 1)
            ];
            this.#preload(this.#loading = this.dataset.src || this.#loading);
        }

        //
        constructor() {
            super();

            //
            const canvas = this as HTMLCanvasElement;
            const parent = this.parentNode as HTMLElement;

            //
            const fixSize = () => {
                const old = this.#size;
                this.#size = [ // @ts-ignore
                    Math.min(Math.min(Math.max(this.clientWidth || parent?.clientWidth || 1, 1), parent?.clientWidth || 1) * (this.currentCSSZoom || 1), screen?.width || 1) * (devicePixelRatio || 1), // @ts-ignore
                    Math.min(Math.min(Math.max(this.clientHeight || parent?.clientHeight || 1, 1), parent?.clientHeight || 1) * (this.currentCSSZoom || 1), screen?.height || 1) * (devicePixelRatio || 1)
                ];

                //
                if (old?.[0] != this.#size[0] || old?.[1] != this.#size[1]) {
                    this.#render(this.#ready);
                }
            }

            //
            sheduler?.shedule?.(() => {
                this.ctx = canvas.getContext("2d", {
                    alpha: true,
                    desynchronized: true,
                    powerPreference: "high-performance",
                    preserveDrawingBuffer: true
                }) as CanvasRenderingContext2D;

                //
                this.inert = true;
                this.style.objectFit = "cover";
                this.style.objectPosition = "center";
                this.classList.add("u-canvas");
                this.classList.add("u2-canvas");
                this.classList.add("ui-canvas");

                //
                fixSize();

                //
                new ResizeObserver((entries) => {
                    for (const entry of entries) {
                        const box = entry?.devicePixelContentBoxSize?.[0];
                        if (box) {
                            const old = this.#size;
                            this.#size = [ // @ts-ignore
                                Math.max(/*contentBox.inlineSize * devicePixelRatio*/box.inlineSize || this.width, 1),
                                Math.max(/*contentBox.blockSize  * devicePixelRatio*/box.blockSize || this.height, 1)
                            ];
                            if (old?.[0] != this.#size[0] || old?.[1] != this.#size[1]) {
                                this.#render(this.#ready);
                            }
                        }
                    }
                }).observe(this, { box: "device-pixel-content-box" });

                //
                this.#preload(this.#loading = this.dataset.src || this.#loading);
            });
        }

        //
        async $useImageAsSource(blob, ready?: any | null) {
            ready ||= this.#loading;
            const img = (blob instanceof ImageBitmap) ? blob : (await createImageBitmapCache(blob).catch(console.warn.bind(console)));
            if (img && ready == this.#loading) { this.image = img; this.#render(ready); }
            return blob;
        }

        //
        $renderPass(whatIsReady?: File | Blob | string) {
            const canvas = this, ctx = this.ctx, img = this.image;
            if (img && ctx && (whatIsReady == this.#loading || !whatIsReady)) {
                if (whatIsReady) { this.#ready = whatIsReady; };
                if (this.width != this.#size[0]) { this.width = this.#size[0]; };
                if (this.height != this.#size[1]) { this.height = this.#size[1]; };
                this.style.aspectRatio = `${this.width || 1} / ${this.height || 1}`;
                //this.style.containIntrinsicInlineSize = `${this.width  || 1}px`;
                //this.style.containIntrinsicBlockSize  = `${this.height || 1}px`;

                //
                const ox = (this.#orient % 2) || 0;
                const port = getImgWidth(img) < getImgHeight(img) ? 1 : 0;
                const scale = Math.max(
                    canvas[["height", "width"][ox]] / getImgWidth(img),
                    canvas[["width", "height"][ox]] / getImgHeight(img));

                //
                ctx.save();
                ctx.clearRect(0, 0, canvas.width, canvas.height); cover(ctx, img, scale, port, this.#orient);
                ctx.drawImage(img, 0, 0, img.width * scale, img.height * scale);
                ctx.restore();
            }
        }

        //
        #preload(src) { const ready = src || this.#loading; this.#loading = ready; return fetch(src)?.then?.(async (rsp) => this.$useImageAsSource(await rsp.blob(), ready)?.catch(console.warn.bind(console)))?.catch?.(console.warn.bind(console)); }
        #render(whatIsReady?: File | Blob | string) {
            const ctx = this.ctx, img = this.image;
            if (img && ctx && (whatIsReady == this.#loading || !whatIsReady)) { sheduler?.shedule?.(bindCached(this.$renderPass, this)); }
        }
    }
} else {
    UICanvas = class UICanvas {
        constructor() { }
        $renderPass(whatIsReady?: File | Blob | string) { }
        $useImageAsSource(blob, ready?: any | null) { return blob; }
        #preload(src) { return Promise.resolve(); }
        #render(whatIsReady?: File | Blob | string) { }
        #orient: number = 0;
        #loading: string | Blob | File = "";
        #ready: string | Blob | File = "";
        #size: [number, number] = [1, 1];
        ctx: CanvasRenderingContext2D | null = null;
        image: ImageBitmap | null = null;
    }
}

//
export { UICanvas };
export default UICanvas;

//
try { customElements.define('ui-canvas', UICanvas, {extends: 'canvas'}); } catch(e) {};
