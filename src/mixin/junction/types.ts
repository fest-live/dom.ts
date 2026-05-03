/**
 * Junction model: two binding points (A/B) — marquee, drag deltas, resize diagonal.
 * Pairs with CSS Anchor Positioning (`anchor-name` on endpoints, `anchor()` in styles).
 */

export type JunctionPoint2D = { x: number; y: number };

export function junctionToBox(a: JunctionPoint2D, b: JunctionPoint2D): {
    left: number;
    top: number;
    right: number;
    bottom: number;
    width: number;
    height: number;
} {
    const left = Math.min(a.x, b.x);
    const top = Math.min(a.y, b.y);
    const right = Math.max(a.x, b.x);
    const bottom = Math.max(a.y, b.y);
    return { left, top, right, bottom, width: right - left, height: bottom - top };
}

export const JUNCTION_SELECT_EVENTS = {
    start: "junction-select:start",
    move: "junction-select:move",
    end: "junction-select:end",
    cancel: "junction-select:cancel"
} as const;

export const JUNCTION_DRAG_EVENTS = {
    start: "junction-drag:start",
    move: "junction-drag:move",
    end: "junction-drag:end"
} as const;

export const JUNCTION_RESIZE_EVENTS = {
    start: "junction-resize:start",
    move: "junction-resize:move",
    end: "junction-resize:end"
} as const;
