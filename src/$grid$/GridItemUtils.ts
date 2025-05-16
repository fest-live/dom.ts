import { doAnimate, setProperty } from "../$core$/Animation";
import type { GridArgsType, GridItemType } from "./Types";

//
const roundNearest = (number, N = 1)=>(Math.round(number * N) / N);
const get = (items, id)=>{
    if (typeof items?.get == "function") { const item = items?.get?.(id); if (item) { return item; }; }; // only for maps
    return Array.from(items?.values?.()||items||[])?.find?.((item: any)=>(item?.id == id || item == id));
}

//
export const redirectCell = ($preCell: [number, number], gridArgs: GridArgsType, orient: number = 0): [number, number] => {
    const preCell: [number, number] = [...$preCell]; // make non-conflict copy
    const list = Array.from(gridArgs?.list||[]);
    const icons: GridItemType[] = list?.length > 0 ? (list?.map((id) => get(gridArgs?.items, id)).filter((m) => !!m)) : Array.from(gridArgs?.items?.values());
    const item = gridArgs?.item || {};

    //
    const checkBusy = (cell): boolean => {
        return icons
            .filter((e: GridItemType) => (!(e == item || e?.id == item?.id) && (e?.pointerId == null || e?.pointerId < 0)))
            .some((one) => ((one?.cell?.[0]||0) == (cell[0]||0) && (one?.cell?.[1]||0) == (cell[1]||0)));
    };

    //
    if (!checkBusy(preCell)) {
        return [...preCell];
    }

    //
    const layout  = [...gridArgs?.layout];
    const columns = layout[0] || 4;
    const rows    = layout[1] || 8;

    //
    const variants: [number, number][] = [
        [preCell[0] + 1, preCell[1]] as [number, number],
        [preCell[0] - 1, preCell[1]] as [number, number],
        [preCell[0], preCell[1] + 1] as [number, number],
        [preCell[0], preCell[1] - 1] as [number, number],
    ].filter((v) => {
        return v[0] >= 0 && v[0] < columns && v[1] >= 0 && v[1] < rows;
    }) || [];

    //
    const suitable = variants.find((v) => !checkBusy(v));
    if (suitable) {
        return [...suitable];//makeReactive([...suitable]);
    }

    //
    let exceed = 0;
    let busy = true;
    let comp = [...preCell];
    while (busy && exceed++ < columns * rows) {
        //
        if (!(busy = checkBusy(comp))) {
            return [...comp] as [number, number];
        }

        //
        comp[0]++;
        if (comp[0] >= columns) {
            comp[0] = 0; comp[1]++;
            if (comp[1] >= rows) { comp[1] = 0; }
        }
    }

    //
    return [...preCell];
};



/* LAST GENERATION... */

//
export const convertOrientPxToCX = ($orientPx: [number, number], gridArgs: GridArgsType, orient: number = 0): [number, number] => {
    const boxInPx = [...gridArgs.size];
    const orientPx: [number, number] = [...$orientPx];
    const layout = [...gridArgs.layout];
    if (orient%2) { boxInPx.reverse(); };

    //
    const gridPxToCX = [layout[0] / boxInPx[0], layout[1] / boxInPx[1]];
    return [orientPx[0] * gridPxToCX[0], orientPx[1] * gridPxToCX[1]]
}

// should be relative from grid-box (not absolute or fixed position)
export const floorInOrientPx = ($orientPx: [number, number], gridArgs: GridArgsType, orient: number = 0) => {
    const orientPx: [number, number] = [...$orientPx];
    const boxInPx = [...gridArgs.size];
    const layout = [...gridArgs.layout];
    if (orient%2) { boxInPx.reverse(); };

    //
    const inBox = [boxInPx[0] / layout[0], boxInPx[1] / layout[1]];
    return [roundNearest(orientPx[0], inBox[0]), roundNearest(orientPx[1], inBox[1])];
};

//
export const floorInCX = ($CX: [number, number], gridArgs: GridArgsType): [number, number] => {
    const layout = gridArgs.layout;
    return [
        Math.min(Math.max(roundNearest($CX[0]), 0), layout[0]-1),
        Math.min(Math.max(roundNearest($CX[1]), 0), layout[1]-1)
    ];
};

//
export const reflectCell = async (newItem: any, pArgs: any, withAnimate = false)=>{
    // @ts-ignore
    const { getBoundingOrientRect, agWrapEvent, orientOf, redirectCell, convertOrientPxToCX } = await Promise.try(importCdn, ["/externals/core/agate.js"]);
    // @ts-ignore
    const {subscribe, makeObjectAssignable, makeReactive } = await Promise.try(importCdn, ["/externals/lib/object.js"]);

    //
    const layout = [pArgs?.layout?.columns || pArgs?.layout?.[0] || 4, pArgs?.layout?.rows || pArgs?.layout?.[1] || 8];
    const {item, list, items} = pArgs;

    //
    await new Promise((r)=>requestAnimationFrame(r));
    subscribe?.(item, (state, property)=>{
        const gridSystem = newItem?.parentElement;
        layout[0] = parseInt(gridSystem.style.getPropertyValue("--layout-c")) || layout[0];
        layout[1] = parseInt(gridSystem.style.getPropertyValue("--layout-r")) || layout[1];

        //
        const pbox = getBoundingOrientRect(gridSystem) || gridSystem?.getBoundingClientRect?.();
        const args = {item, list, items, layout, size: [gridSystem?.clientWidth, gridSystem?.clientHeight]};
        if (item && !item?.cell) { item.cell = makeObjectAssignable(makeReactive([0, 0])); };
        if (item && args) { const nc = redirectCell(item?.cell, args); if (nc[0] != item?.cell?.[0] || nc[1] != item?.cell?.[1]) { item.cell = nc; } };
        if (property == "cell") { subscribe(state, (v,p)=>{
            doAnimate(newItem, redirectCell(item?.cell, args), withAnimate);
        }); }
    });
}

//
export const getSpan = (el, ax)=>{
    const prop = el.style.getPropertyValue(["--ox-c-span", "--ox-r-span"][ax]);
    const factor = ((parseFloat(prop || "1") || 1) - 1);
    return Math.min(Math.max(factor-1, 0), 1);
}

//
export const inflectInGrid = async (gridSystem)=>{
    // @ts-ignore
    const {observeContentBox} = await Promise.try(importCdn, ["/externals/lib/dom.js"]);
    const size = [0, 0], layout = [4, 8];

    //
    observeContentBox(gridSystem, (boxSize)=>{
        size[0] = boxSize.inlineSize;
        size[1] = boxSize.blockSize;
    });

    //
    setProperty(gridSystem, "--layout-c", layout[0] = parseInt(gridSystem.style.getPropertyValue("--layout-c") || "0") || layout[0] || 4);
    setProperty(gridSystem, "--layout-r", layout[1] = parseInt(gridSystem.style.getPropertyValue("--layout-r") || "0") || layout[1] || 8);

    //
    /*const bindInternal = async (newItem, item)=>{
        //await bindInteraction(newItem, {item, list: null, items, layout, size});
        newItem?.dispatchEvent?.(new CustomEvent("u2-item-added", {
            detail: {item},
            bubbles: true,
            cancelable: true
        }));
        return newItem;
    }*/

    //
    //const elements: HTMLElement[] = [];

    //
/*
    subscribe(items, (item, index, old)=>{
        if (item && item?.id) {
            const newItem = createItem(item, gridSystem);
            const id = item?.id; newItem.dataset.id = id;
            if (!newItem.classList.contains('u2-grid-item')) {
                newItem.classList.add('u2-grid-item');
            }

            //
            setProperty(gridSystem, "--layout-c", layout[0] = parseInt(gridSystem?.style?.getPropertyValue("--layout-c") || "0") || layout[0] || 4);
            setProperty(gridSystem, "--layout-r", layout[1] = parseInt(gridSystem?.style?.getPropertyValue("--layout-r") || "0") || layout[1] || 8);

            //
            if (!gridSystem?.contains?.(newItem)) {
                gridSystem?.appendChild?.(newItem);
                bindInternal(newItem, item);
                subscribe(item, (state, property)=>{
                    const args = {item, list: null, items, layout, size};
                    if (item && !item?.cell) { item.cell = makeObjectAssignable(makeReactive([0, 0])); };
                    if (item && args) { const nc = redirectCell(item?.cell, args); if (nc[0] != item.cell[0] || nc[1] != item.cell[1]) { item.cell = nc; } };
                    if (property == "cell") { subscribe(state, (v,p)=>setProperty(newItem, ["--cell-x","--cell-y"][parseInt(p)], v)); }
                });
            }

            //
            if (elements.indexOf(newItem) < 0) { elements.push(newItem); };
        } else {
            const oldItem = gridSystem.querySelector(`.u2-grid-item[data-id=\"${old?.id}\"]`);
            if (oldItem) {
                //
                const idx = elements.indexOf(oldItem);
                if (idx >= 0) { elements.splice(idx, 1); };

                //
                oldItem?.dispatchEvent?.(new CustomEvent("u2-item-removed", {
                    detail: {item},
                    bubbles: true,
                    cancelable: true
                }));
                oldItem.remove();
            }
        }
    });
*/

    //
    //return elements;
}
