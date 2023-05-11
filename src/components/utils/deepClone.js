import { cloneElement } from "preact";

/**
 * @param {import("preact").ComponentChild} child 
 */
const cloneChildNode = (child) => {
    if ([ "number", "string", "bigint", "boolean" ].includes(typeof child)) {
        return child;
    }
    // clone vnode
    /** @type {any} to fix type check */
    const cd = child;
    return deepCloneElement(cd);
};

/**
 * @template T
 * @param {import("preact").VNode<T>} vnode 
 * @param {any} [props] 
 * @param  {...import("preact").ComponentChildren} children 
 * @returns {import("preact").VNode<T>}
 */
export const deepCloneElement = (vnode, props = null, ...children) => {
    if (vnode?.props?.children && children.length <= 0) {
        // clone children
        if (Array.isArray(vnode.props.children)) {
            const clonedChildren = vnode.props.children.map(cloneChildNode);
            return cloneElement(vnode, props, ...clonedChildren);
        } else {
            const child = vnode.props.children;
            const clonedChildren = cloneChildNode(child);
            return cloneElement(vnode, props, clonedChildren);
        }
    }
    return cloneElement(vnode, props, ...children);
};
