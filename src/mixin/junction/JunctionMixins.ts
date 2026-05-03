/**
 * Junction-based DOM mixins: selection (A/B), drag, resize.
 */
import { addEvent, DOMMixin, setStyleProperty } from "fest/dom";
import type { JunctionPoint2D } from "./types";
import {
    junctionToBox,
    JUNCTION_DRAG_EVENTS,
    JUNCTION_RESIZE_EVENTS,
    JUNCTION_SELECT_EVENTS
} from "./types";

const mixinDisposers = new WeakMap<HTMLElement, Map<string, Array<() => void>>>();

const pushDisposable = (host: HTMLElement, mixinName: string, fn: () => void): void => {
    const map = mixinDisposers.get(host) ?? new Map();
    const list = map.get(mixinName) ?? [];
    list.push(fn);
    map.set(mixinName, list);
    mixinDisposers.set(host, map);
};

const runDisposers = (host: HTMLElement, mixinName: string): void => {
    const map = mixinDisposers.get(host);
    const list = map?.get(mixinName);
    if (!list) return;
    for (const fn of list) {
        try {
            fn();
        } catch {
            /* noop */
        }
    }
    map!.delete(mixinName);
    if (map!.size === 0) mixinDisposers.delete(host);
};

const parsePxVar = (host: HTMLElement, name: string): number => {
    const raw = globalThis.getComputedStyle?.(host)?.getPropertyValue?.(name)?.trim?.() ?? "";
    const n = parseFloat(raw);
    return Number.isFinite(n) ? n : 0;
};

const queryHandle = (host: HTMLElement, attr: string, fallback: HTMLElement): HTMLElement => {
    const sel = host.getAttribute(attr)?.trim();
    if (!sel) return fallback;
    const found = host.querySelector(sel);
    return found instanceof HTMLElement ? found : fallback;
};

export class JunctionSelectMixin extends DOMMixin {
    constructor() {
        super("ui-junction-select");
    }

    connect(wEl: WeakRef<HTMLElement>): this {
        const host = wEl?.deref?.();
        if (!host) return this;

        const overlay = document.createElement("div");
        overlay.className = "ui-junction-select-overlay";
        overlay.setAttribute("data-junction-overlay", "");
        overlay.style.cssText =
            "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;" +
            "border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);" +
            "background:color-mix(in oklab, #3794ff 14%, transparent);display:none;" +
            "inset:auto;min-width:0;min-height:0;";

        const ensurePositioned = (): void => {
            const cs = globalThis.getComputedStyle?.(host);
            if (cs?.position === "static") {
                host.style.position = "relative";
            }
        };
        ensurePositioned();
        host.appendChild(overlay);

        let active = false;
        let a: JunctionPoint2D = { x: 0, y: 0 };
        let b: JunctionPoint2D = { x: 0, y: 0 };

        const localPoint = (ev: PointerEvent): JunctionPoint2D => {
            const r = host.getBoundingClientRect();
            return { x: ev.clientX - r.left, y: ev.clientY - r.top };
        };

        const applyOverlay = (): void => {
            const box = junctionToBox(a, b);
            if (box.width < 1 && box.height < 1) {
                overlay.style.display = "none";
                return;
            }
            overlay.style.display = "block";
            overlay.style.left = `${box.left}px`;
            overlay.style.top = `${box.top}px`;
            overlay.style.width = `${box.width}px`;
            overlay.style.height = `${box.height}px`;
        };

        const onDown = (ev: PointerEvent): void => {
            if (ev.button !== 0) return;
            const t = ev.target as Element | null;
            if (
                t?.closest?.(
                    "[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select"
                )
            ) {
                return;
            }
            if (!(ev.target === host || host.contains(ev.target as Node))) return;
            active = true;
            a = localPoint(ev);
            b = { ...a };
            host.setPointerCapture(ev.pointerId);
            host.dispatchEvent(
                new CustomEvent(JUNCTION_SELECT_EVENTS.start, {
                    bubbles: true,
                    detail: { a: { ...a }, b: { ...b }, host }
                })
            );
            applyOverlay();
        };

        const onMove = (ev: PointerEvent): void => {
            if (!active) return;
            b = localPoint(ev);
            applyOverlay();
            const box = junctionToBox(a, b);
            host.dispatchEvent(
                new CustomEvent(JUNCTION_SELECT_EVENTS.move, {
                    bubbles: true,
                    detail: { a: { ...a }, b: { ...b }, box, host }
                })
            );
        };

        const end = (ev: PointerEvent): void => {
            if (!active) return;
            active = false;
            try {
                host.releasePointerCapture(ev.pointerId);
            } catch {
                /* ignore */
            }
            const box = junctionToBox(a, b);
            host.dispatchEvent(
                new CustomEvent(JUNCTION_SELECT_EVENTS.end, {
                    bubbles: true,
                    detail: { a: { ...a }, b: { ...b }, box, host }
                })
            );
        };

        const onUp = (ev: PointerEvent): void => {
            if (!active) return;
            end(ev);
        };

        const onCancel = (ev: PointerEvent): void => {
            if (!active) return;
            active = false;
            overlay.style.display = "none";
            try {
                host.releasePointerCapture(ev.pointerId);
            } catch {
                /* ignore */
            }
            host.dispatchEvent(new CustomEvent(JUNCTION_SELECT_EVENTS.cancel, { bubbles: true, detail: { host } }));
        };

        pushDisposable(host, "ui-junction-select", () => {
            overlay.remove();
        });
        pushDisposable(host, "ui-junction-select", addEvent(host, "pointerdown", onDown));
        pushDisposable(host, "ui-junction-select", addEvent(host, "pointermove", onMove));
        pushDisposable(host, "ui-junction-select", addEvent(host, "pointerup", onUp));
        pushDisposable(host, "ui-junction-select", addEvent(host, "pointercancel", onCancel));

        return this;
    }

    disconnect(wEl: WeakRef<HTMLElement>): this {
        const host = wEl?.deref?.();
        if (host) runDisposers(host, "ui-junction-select");
        return this;
    }
}

export class JunctionDragMixin extends DOMMixin {
    constructor() {
        super("ui-junction-drag");
    }

    connect(wEl: WeakRef<HTMLElement>): this {
        const host = wEl?.deref?.();
        if (!host) return this;

        setStyleProperty(host, "--jx-drag-x", parsePxVar(host, "--jx-drag-x"));
        setStyleProperty(host, "--jx-drag-y", parsePxVar(host, "--jx-drag-y"));

        const previousTransform = host.style.transform;
        if (!host.style.transform || host.style.transform === "none") {
            host.style.transform =
                "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)";
        }

        const handle = queryHandle(host, "data-junction-drag-handle", host);

        let dragging = false;
        let startX = 0;
        let startY = 0;
        let baseX = 0;
        let baseY = 0;

        const onDown = (ev: PointerEvent): void => {
            if (ev.button !== 0) return;
            if (ev.target !== handle && !handle.contains(ev.target as Node)) return;
            dragging = true;
            startX = ev.clientX;
            startY = ev.clientY;
            baseX = parsePxVar(host, "--jx-drag-x");
            baseY = parsePxVar(host, "--jx-drag-y");
            handle.setPointerCapture(ev.pointerId);
            host.dispatchEvent(
                new CustomEvent(JUNCTION_DRAG_EVENTS.start, {
                    bubbles: true,
                    detail: { host, clientX: ev.clientX, clientY: ev.clientY, baseX, baseY }
                })
            );
        };

        const onMove = (ev: PointerEvent): void => {
            if (!dragging) return;
            const dx = ev.clientX - startX;
            const dy = ev.clientY - startY;
            const nx = baseX + dx;
            const ny = baseY + dy;
            setStyleProperty(host, "--jx-drag-x", nx);
            setStyleProperty(host, "--jx-drag-y", ny);
            host.dispatchEvent(
                new CustomEvent(JUNCTION_DRAG_EVENTS.move, {
                    bubbles: true,
                    detail: { host, dx, dy, x: nx, y: ny }
                })
            );
        };

        const onUp = (ev: PointerEvent): void => {
            if (!dragging) return;
            dragging = false;
            try {
                handle.releasePointerCapture(ev.pointerId);
            } catch {
                /* ignore */
            }
            host.dispatchEvent(
                new CustomEvent(JUNCTION_DRAG_EVENTS.end, {
                    bubbles: true,
                    detail: {
                        host,
                        x: parsePxVar(host, "--jx-drag-x"),
                        y: parsePxVar(host, "--jx-drag-y")
                    }
                })
            );
        };

        pushDisposable(host, "ui-junction-drag", () => {
            host.style.transform = previousTransform;
        });
        pushDisposable(host, "ui-junction-drag", addEvent(handle, "pointerdown", onDown));
        pushDisposable(host, "ui-junction-drag", addEvent(handle, "pointermove", onMove));
        pushDisposable(host, "ui-junction-drag", addEvent(handle, "pointerup", onUp));
        pushDisposable(host, "ui-junction-drag", addEvent(handle, "pointercancel", onUp));

        return this;
    }

    disconnect(wEl: WeakRef<HTMLElement>): this {
        const host = wEl?.deref?.();
        if (host) runDisposers(host, "ui-junction-drag");
        return this;
    }
}

export class JunctionResizeMixin extends DOMMixin {
    constructor() {
        super("ui-junction-resize");
    }

    connect(wEl: WeakRef<HTMLElement>): this {
        const host = wEl?.deref?.();
        if (!host) return this;

        const handle = queryHandle(host, "data-junction-resize-handle", host);

        let resizing = false;
        let sx = 0;
        let sy = 0;
        let sw = 0;
        let sh = 0;

        const minW = Math.max(120, parseFloat(host.getAttribute("data-junction-resize-min-w") || "") || 120);
        const minH = Math.max(80, parseFloat(host.getAttribute("data-junction-resize-min-h") || "") || 80);

        const onDown = (ev: PointerEvent): void => {
            if (ev.button !== 0) return;
            if (ev.target !== handle && !handle.contains(ev.target as Node)) return;
            resizing = true;
            sx = ev.clientX;
            sy = ev.clientY;
            sw = host.offsetWidth;
            sh = host.offsetHeight;
            handle.setPointerCapture(ev.pointerId);
            host.dispatchEvent(
                new CustomEvent(JUNCTION_RESIZE_EVENTS.start, {
                    bubbles: true,
                    detail: { host, width: sw, height: sh }
                })
            );
        };

        const onMove = (ev: PointerEvent): void => {
            if (!resizing) return;
            const nw = Math.max(minW, sw + (ev.clientX - sx));
            const nh = Math.max(minH, sh + (ev.clientY - sy));
            host.style.width = `${nw}px`;
            host.style.height = `${nh}px`;
            host.dispatchEvent(
                new CustomEvent(JUNCTION_RESIZE_EVENTS.move, {
                    bubbles: true,
                    detail: { host, width: nw, height: nh }
                })
            );
        };

        const onUp = (ev: PointerEvent): void => {
            if (!resizing) return;
            resizing = false;
            try {
                handle.releasePointerCapture(ev.pointerId);
            } catch {
                /* ignore */
            }
            host.dispatchEvent(
                new CustomEvent(JUNCTION_RESIZE_EVENTS.end, {
                    bubbles: true,
                    detail: { host, width: host.offsetWidth, height: host.offsetHeight }
                })
            );
        };

        pushDisposable(host, "ui-junction-resize", addEvent(handle, "pointerdown", onDown));
        pushDisposable(host, "ui-junction-resize", addEvent(handle, "pointermove", onMove));
        pushDisposable(host, "ui-junction-resize", addEvent(handle, "pointerup", onUp));
        pushDisposable(host, "ui-junction-resize", addEvent(handle, "pointercancel", onUp));

        return this;
    }

    disconnect(wEl: WeakRef<HTMLElement>): this {
        const host = wEl?.deref?.();
        if (host) runDisposers(host, "ui-junction-resize");
        return this;
    }
}

new JunctionSelectMixin();
new JunctionDragMixin();
new JunctionResizeMixin();
