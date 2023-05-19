import { h, Fragment, createRef } from "preact";
import { useState } from "preact/hooks";

/** @typedef {Array<import("preact").ComponentChildren>} ModalContentArray */

/** @type {import("preact").RefObject<import("preact/hooks").StateUpdater<ModalContentArray>>} */
const updateModalChildren = createRef();
updateModalChildren.current = () => { };
/** @type {import("preact").RefObject<ModalContentArray>} */
const modalContent = createRef();
modalContent.current = [];
/**
 * @param {import("preact").ComponentChildren} children
 */
export const showModalElements = (children) => {
    const content = modalContent.current;
    const index = content.indexOf(children);
    if (index >= 0) {
        content.splice(index, 1);
    }
    content.push(children);
    updateModalChildren.current([ ...content ]);
};
/**
 * @param {import("preact").ComponentChildren} children
 */
export const hideModalElements = (children) => {
    const content = modalContent.current;
    const index = content.indexOf(children);
    if (index >= 0) {
        content.splice(index, 1);
        updateModalChildren.current([ ...content ]);
    }
};

/** @type {import("preact").RefObject<number>} */
const globalModalID = createRef();
globalModalID.current = 0;
export const getModalUniqueID = () => {
    const id = globalModalID.current;
    globalModalID.current = id + 1;
    return "modal" + id.toString();
};

/**
 * @returns {h.JSX.Element}
 */
export const ModalContainer = () => {
    /** @type {[ModalContentArray, import("preact/hooks").StateUpdater<ModalContentArray>]} */
    const [ content, setContent ] = useState([]);
    updateModalChildren.current = setContent;
    modalContent.current = content;
    return <>
        {...content}
    </>;
};
