import { convertPointFromNodeToPage, convertPointFromPageToNode } from "../dist/dom.js";

//
const element = document.querySelector(".r1");
const cx = document.querySelector(".coordinate .x");
const cy = document.querySelector(".coordinate .y");

// @ts-ignore
document.documentElement?.addEventListener("pointermove", (ev: PointerEvent)=>{
    if (element) {
        const coord = convertPointFromPageToNode(element, ev.pageX, ev.pageY);
        if (cx) { cx.innerHTML = `X: ${coord.x.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2})}`; }
        if (cy) { cy.innerHTML = `Y: ${coord.y.toLocaleString(undefined, {minimumFractionDigits: 0, maximumFractionDigits: 2})}`; }
    }
});
