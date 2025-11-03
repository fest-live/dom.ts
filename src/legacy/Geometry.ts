import { isNearlyIdentity, getOffsetParentChain } from "../agate/Utils";
import { getElementZoom, getTransform, getTransformOrigin } from "../mixin/Style";

//
export type Point = { x: number; y: number; };

//
export const transformationMatrixCache = new WeakMap<Element, DOMMatrix>();
export function convertPointFromPageToNode(element: Element, pageX: number, pageY: number): Point { return (getNodeFullTransform(element).inverse()).transformPoint(new DOMPoint(pageX, pageY)); }
export function convertPointFromNodeToPage(element: Element, nodeX: number, nodeY: number): Point { return getNodeFullTransform(element).transformPoint(new DOMPoint(nodeX, nodeY)); }
export function getNodeFullTransform(element: Element): DOMMatrix {
    let matrix = new DOMMatrix(), chain = [element, ...getOffsetParentChain(element)];
    for (const el of chain) {
        let elementMatrix = getTransform(el);
        if (!isNearlyIdentity(elementMatrix)) {
            const originPoint = getTransformOrigin(el);
            const originMatrix = new DOMMatrix().translate(originPoint.x, originPoint.y);
            const inverseOriginMatrix = new DOMMatrix().translate(-originPoint.x, -originPoint.y);
            elementMatrix = originMatrix.multiply(elementMatrix).multiply(inverseOriginMatrix);
        }

        //
        let positionMatrix = new DOMMatrix();
        if (el instanceof HTMLElement) {
            const {offsetLeft, offsetTop} = el;
            let parentScrollLeft = 0, parentScrollTop = 0;
            if (el.offsetParent instanceof HTMLElement) {
                parentScrollLeft = el?.offsetParent?.scrollLeft || 0;
                parentScrollTop  = el?.offsetParent?.scrollTop  || 0;
            }

            //
            const diffLeft = (offsetLeft - parentScrollLeft) || 0;
            const diffTop  = (offsetTop  - parentScrollTop ) || 0;
            if (Math.abs(diffTop) >= 0.001 || Math.abs(diffLeft) >= 0.001) {
                positionMatrix = new DOMMatrix().translate(diffLeft, diffTop);
            }
        }

        //
        const zoomMatrix  = new DOMMatrix().scale(getElementZoom(el));
        const totalMatrix = positionMatrix.multiply(zoomMatrix).multiply(elementMatrix);
        matrix = totalMatrix.multiply(matrix);
    }

    //
    transformationMatrixCache.set(element, matrix);
    return matrix;
}
