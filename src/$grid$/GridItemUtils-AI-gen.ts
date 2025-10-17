import type { GridArgsType, GridItemType } from "./Types";
import { cvt_cs_to_os, cvt_os_to_cs } from "../$agate$/Convert";

//
const roundNearest = (number: number, N = 1)=>(Math.round(number * N) / N);
const get = (items, id)=>{ if (typeof items?.get == "function") { const item = items?.get?.(id); if (item) { return item; }; }; return Array.from(items?.values?.()||items||[])?.find?.((item: any)=>(item?.id == id || item == id)); }

//
export const getSpan = (el, ax)=>{ const prop = el.style.getPropertyValue(["--ox-c-span", "--ox-r-span"][ax]), factor = ((parseFloat(prop || "1") || 1) - 1); return Math.min(Math.max(factor-1, 0), 1); }
export const redirectCell = ($preCell: [number, number], gridArgs: GridArgsType): [number, number] => {
    const icons: any = (gridArgs?.items || []);
    const item = gridArgs?.item || {};
    const checkBusy = (cell): boolean => {
        return icons
            ?.filter?.((e: GridItemType) => !(e == item || e?.id == item?.id))
            ?.some?.((one) => ((one?.cell?.[0]||0) == (cell[0]||0) && (one?.cell?.[1]||0) == (cell[1]||0)));
    };

    //
    const preCell: [number, number] = [...$preCell]; // make non-conflict copy
    if (!checkBusy(preCell)) { return [...preCell]; }
    const layout  = [...gridArgs?.layout];
    const columns = layout[0] || 4;
    const rows    = layout[1] || 8;
    const variants: [number, number][] = [
        [preCell[0] + 1, preCell[1]] as [number, number],
        [preCell[0] - 1, preCell[1]] as [number, number],
        [preCell[0], preCell[1] + 1] as [number, number],
        [preCell[0], preCell[1] - 1] as [number, number],
    ].filter((v) => { return v[0] >= 0 && v[0] < columns && v[1] >= 0 && v[1] < rows; }) || [];
    const suitable = variants.find((v) => !checkBusy(v)); if (suitable) { return [...suitable]; }

    //
    let exceed = 0, busy = true, comp = [...preCell];
    while (busy && exceed++ < columns * rows) {
        if (!(busy = checkBusy(comp))) { return [...comp] as [number, number]; }; comp[0]++;
        if (comp[0] >= columns) { comp[0] = 0; comp[1]++; if (comp[1] >= rows)  { comp[1] = 0; } }
    }
    return [...preCell];
}



/* LAST GENERATION... */
const toFiniteNumber = (value: any, fallback = 0) => {
    const number = Number(value);
    return Number.isFinite(number) ? number : fallback;
};

const clampDimension = (value: number, max: number) => {
    if (!Number.isFinite(max) || max <= 0) { return 0; }
    if (!Number.isFinite(value)) { return 0; }
    return Math.min(Math.max(value, 0), max);
};

const normalizeOrientIndex = (orient: number = 0) => (((orient ?? 0) % 4) + 4) % 4;

export const convertOrientPxToCX = (
    clientPx: [number, number],
    gridArgs: GridArgsType,
    orient: number = 0
): [number, number] => {
    const normalized = normalizeOrientIndex(orient);

    const layout: [number, number] = [
        toFiniteNumber(gridArgs?.layout?.[0], 1),
        toFiniteNumber(gridArgs?.layout?.[1], 1)
    ];

    const size: [number, number] = [
        toFiniteNumber(gridArgs?.size?.[0], 1),
        toFiniteNumber(gridArgs?.size?.[1], 1)
    ];

    if (!layout[0] || !layout[1] || !size[0] || !size[1]) {
        return [0, 0];
    }

    const orientedLayout: [number, number] = normalized % 2
        ? [layout[1], layout[0]]
        : [layout[0], layout[1]];

    const orientedSize: [number, number] = normalized % 2
        ? [size[1], size[0]]
        : [size[0], size[1]];

    const orientedCoords = cvt_cs_to_os([
        toFiniteNumber(clientPx?.[0], 0),
        toFiniteNumber(clientPx?.[1], 0)
    ], size, normalized);

    const boundedOriented: [number, number] = [
        clampDimension(orientedCoords[0], orientedSize[0]),
        clampDimension(orientedCoords[1], orientedSize[1])
    ];

    const projectedCell: [number, number] = [
        orientedSize[0] ? (boundedOriented[0] / orientedSize[0]) * orientedLayout[0] : 0,
        orientedSize[1] ? (boundedOriented[1] / orientedSize[1]) * orientedLayout[1] : 0
    ];

    const canonicalCell = cvt_os_to_cs(projectedCell, layout, normalized);

    return [
        clampDimension(canonicalCell[0], layout[0] - 1),
        clampDimension(canonicalCell[1], layout[1] - 1)
    ];
};

// should be relative from grid-box (not absolute or fixed position)
export const floorInOrientPx = ($orientPx: [number, number], gridArgs: GridArgsType, orient: number = 0) => {
    const orientPx: [number, number] = [...$orientPx];
    const boxInPx = [...gridArgs.size];
    const layout = [...gridArgs.layout];
    if (orient%2) { boxInPx.reverse(); };
    const inBox = [boxInPx[0] / layout[0], boxInPx[1] / layout[1]];
    return [roundNearest(orientPx[0], inBox[0]), roundNearest(orientPx[1], inBox[1])];
}

//
export const floorInCX = ($CX: [number, number], gridArgs: GridArgsType): [number, number] => {
    const layout = gridArgs.layout;
    return [
        Math.min(Math.max(roundNearest($CX[0]), 0), layout[0]-1),
        Math.min(Math.max(roundNearest($CX[1]), 0), layout[1]-1)
    ];
}
