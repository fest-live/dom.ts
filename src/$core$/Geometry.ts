/*
 * Made by o1-preview, with my rewriting, but who I am? I don't say...
 */

//
import { isNearlyIdentity, parseOrigin, getElementZoom, getOffsetParentChain, type Point, getTransform, getTransformOrigin } from "./Utils";

//
export const transformationMatrixCache = new WeakMap<Element, DOMMatrix>();
export function getNodeFullTransform(element: Element): DOMMatrix {
    let matrix = new DOMMatrix();
    let chain = [element, ...getOffsetParentChain(element)];
    for (const el of chain) {
        let elementMatrix = getTransform(el);//new DOMMatrix(transform);
        if (!isNearlyIdentity(elementMatrix)) {
            const originPoint = getTransformOrigin(el);//computedStyle.transformOrigin || computedStyle.webkitTransformOrigin || `${((el as HTMLElement)?.clientWidth||0)*0.5}px ${((el as HTMLElement)?.clientHeight || 0)*0.5}px`;
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
        const zoom = getElementZoom(el);
        const zoomMatrix = new DOMMatrix().scale(zoom);

        //
        const totalMatrix = positionMatrix.multiply(zoomMatrix).multiply(elementMatrix);
        matrix = totalMatrix.multiply(matrix);
    }

    //
    transformationMatrixCache.set(element, matrix);
    return matrix;
}

//
export function convertPointFromPageToNode(element: Element, pageX: number, pageY: number): Point {
    const inverseMatrix = getNodeFullTransform(element).inverse();
    return inverseMatrix.transformPoint(new DOMPoint(pageX, pageY));
}

//
export function convertPointFromNodeToPage(element: Element, nodeX: number, nodeY: number): Point {
    const matrix = getNodeFullTransform(element);
    return matrix.transformPoint(new DOMPoint(nodeX, nodeY));
}
