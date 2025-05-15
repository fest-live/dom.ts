import { callByFrame, cover, createImageBitmapCache, orientationNumberMap } from "./Utils.js"

// @ts-ignore /* @vite-ignore */
import {importCdn} from "/externals/modules/cdnImport.mjs";
export {importCdn};

// @ts-ignore
const { whenAnyScreenChanges, getCorrectOrientation } = await Promise.try(importCdn, ["/externals/core/agate.js"]);

//
export default class UICanvas extends HTMLCanvasElement {
    static observedAttributes = ["data-src"];

    //
    ctx: CanvasRenderingContext2D | null = null;
    image: ImageBitmap | null = null;
    #size: [number, number] = [1, 1];
    #orient: number = 0;
    #loading: string|Blob|File = "";
    #ready: string|Blob|File = "";

    //
    connectedCallback() {
        const parent: HTMLElement = this.parentNode as HTMLElement;
        this.#size = [
            Math.min(Math.min(Math.max(this.clientWidth  || parent?.clientWidth  || 1, 1), parent?.clientWidth  || 1) * (this.currentCSSZoom || 1), screen?.width  || 1) * (devicePixelRatio || 1),
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
            this.#orient = orientationNumberMap[getCorrectOrientation() || ""] || 0;

            //
            const old = this.#size;
            this.#size = [
                Math.min(Math.min(Math.max(this.clientWidth  || parent?.clientWidth  || 1, 1), parent?.clientWidth  || 1) * (this.currentCSSZoom || 1), screen?.width  || 1) * (devicePixelRatio || 1),
                Math.min(Math.min(Math.max(this.clientHeight || parent?.clientHeight || 1, 1), parent?.clientHeight || 1) * (this.currentCSSZoom || 1), screen?.height || 1) * (devicePixelRatio || 1)
            ];

            //
            if (old?.[0] != this.#size[0] || old?.[1] != this.#size[1]) {
                this.#render(this.#ready);
            }
        }

        //
        requestAnimationFrame(()=>{
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
            whenAnyScreenChanges(()=>this.#render(this.#ready));

            // TODO! Safari backward compatible
            new ResizeObserver((entries) => {
                for (const entry of entries) {
                    const box = entry?.devicePixelContentBoxSize?.[0];
                    if (box) {
                        this.#orient = orientationNumberMap[getCorrectOrientation() || ""] || 0;
                        const old = this.#size;
                        this.#size  = [
                            Math.max(/*contentBox.inlineSize * devicePixelRatio*/box.inlineSize || this.width, 1),
                            Math.max(/*contentBox.blockSize  * devicePixelRatio*/box.blockSize  || this.height, 1)
                        ];
                        if (old?.[0] != this.#size[0] || old?.[1] != this.#size[1]) {
                            this.#render(this.#ready);
                        }
                    }
                }
            }).observe(this, {box: "device-pixel-content-box"});

            //
            this.#preload(this.#loading = this.dataset.src || this.#loading);
        });
    }

    //
    #render(whatIsReady?: File|Blob|string) {
        const canvas = this;
        const ctx = this.ctx;
        const img = this.image;

        //
        if (img && ctx && (whatIsReady == this.#loading || !whatIsReady)) {

            // TODO! multiple canvas support
            callByFrame(0, ()=>{
                if (whatIsReady) { this.#ready = whatIsReady; };
                if (this.width  != this.#size[0]) { this.width  = this.#size[0]; };
                if (this.height != this.#size[1]) { this.height = this.#size[1]; };
                this.style.aspectRatio = `${this.width || 1} / ${this.height || 1}`;
                //this.style.containIntrinsicInlineSize = `${this.width  || 1}px`;
                //this.style.containIntrinsicBlockSize  = `${this.height || 1}px`;

                //
                const ox = (this.#orient%2) || 0;
                const port = img.width < img.height ? 1 : 0;
                const scale = Math.max(
                    canvas[["width", "height"][ox]] / img[["width", "height"][port]],
                    canvas[["height", "width"][ox]] / img[["height", "width"][port]]);

                //
                ctx.save();
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                cover(ctx, img, scale, port, this.#orient);
                ctx.drawImage(img, 0, 0, img.width * scale, img.height * scale);
                ctx.restore();
            });
        }
    }

    //
    async $useImageAsSource(blob, ready?: any|null) {
        ready ||= this.#loading;
        const img = (blob instanceof ImageBitmap) ? blob : (await createImageBitmapCache(blob).catch(console.warn.bind(console)));
        if (img && ready == this.#loading) { this.image = img; this.#render(ready);}
        return blob;
    }

    //
    #preload(src) {
        const ready = src || this.#loading; this.#loading = ready;
        return fetch(src)?.then?.(async (rsp)=> this.$useImageAsSource(await rsp.blob(), ready)?.catch(console.warn.bind(console)))?.catch?.(console.warn.bind(console));;
    }

    //
    attributeChangedCallback(name, _, newValue) {
        if (name == "data-src") {
            this.#preload(newValue);
        };
    }
}

//
customElements.define('ui-canvas', UICanvas, {extends: 'canvas'});
