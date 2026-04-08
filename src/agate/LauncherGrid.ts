/**
 * Launcher / speed-dial style grids: hit-testing in oriented space.
 * Pair with Veela `.ui-launcher-grid` + `compute_grid_item_cell` on items, and `fest/lure` `bindDraggable` / app `bindInteraction`.
 */
import type { GridArgsType, GridLayoutLike } from "fest/core";
import { normalizeGridLayout, resolveLocalPointToGridCell } from "fest/core";
import { orientOf } from "./Zoom";

/** Read `data-grid-columns` / `data-grid-rows` with optional JS override. */
export const readLauncherLayoutFromElement = (el: HTMLElement, layoutOverride?: GridLayoutLike): [number, number] => {
    const c = parseInt(el.getAttribute("data-grid-columns") || "", 10);
    const r = parseInt(el.getAttribute("data-grid-rows") || "", 10);
    const base = normalizeGridLayout(layoutOverride ?? [4, 8]);
    return [
        Number.isFinite(c) && c > 0 ? c : base[0],
        Number.isFinite(r) && r > 0 ? r : base[1]
    ];
};

/**
 * Map viewport client coordinates to grid cell `[col, row]` (collision-aware via `redirectCell`).
 * `gridSystem` should live under a `ui-orientbox` (or carry `orient`) so `orientOf` is correct.
 */
export const resolveGridCellFromClientPoint = (
    gridSystem: HTMLElement | null | undefined,
    clientPoint: [number, number],
    args?: Partial<GridArgsType> & { layout?: GridLayoutLike },
    mode: "floor" | "round" = "floor"
): [number, number] => {
    if (!gridSystem) return [0, 0];
    const rect = gridSystem.getBoundingClientRect?.();
    if (!rect) return [0, 0];

    const layout = readLauncherLayoutFromElement(gridSystem, args?.layout);
    const orient = orientOf(gridSystem);

    // Grid cells occupy the content-area (border-box minus padding).
    // Adjust both the local coordinate origin and the cell-area dimensions.
    const cs = globalThis.getComputedStyle?.(gridSystem);
    const pl = parseFloat(cs?.paddingLeft as string) || 0;
    const pt = parseFloat(cs?.paddingTop as string) || 0;
    const pr = parseFloat(cs?.paddingRight as string) || 0;
    const pb = parseFloat(cs?.paddingBottom as string) || 0;

    const contentW = Math.max(1, (rect.width || gridSystem.clientWidth || 1) - pl - pr);
    const contentH = Math.max(1, (rect.height || gridSystem.clientHeight || 1) - pt - pb);

    const csCoord: [number, number] = [
        (clientPoint?.[0] || 0) - rect.left - pl,
        (clientPoint?.[1] || 0) - rect.top - pt
    ];

    return resolveLocalPointToGridCell(csCoord, [contentW, contentH], layout, orient, {
        mode,
        redirect: {
            item: args?.item,
            list: args?.list as GridArgsType["list"] | undefined,
            items: args?.items as GridArgsType["items"] | undefined
        }
    });
};
