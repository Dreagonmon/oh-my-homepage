import { h, createRef } from "preact";
import { Modal } from "./index.jsx";
import { useState } from "preact/hooks";

/**
 * @typedef {Object} DialogState
 * @property {string} type
 * @property {string} message
 * @property {function} resolver
 */

const NOP = () => { };
/** @type {import("preact").RefObject<import("preact/hooks").StateUpdater<DialogState>} */
const setDialogState = createRef();
setDialogState.current = NOP;

/**
 * Alert
 * @param {string} message 
 * @returns {Promise<void>}
 */
export const alert = (message) => {
    return new Promise(resolve => {
        setDialogState.current({
            type: "alert",
            message,
            resolver: resolve,
        });
    });
};

/** @type {DialogState} */
const INIT_STATE = {
    type: "",
    message: "",
    resolver: NOP,
};

/**
 * @param {DialogState} state 
 * @returns {h.JSX.Element}
 */
const renderDialog = (state) => {
    switch (state.type) {
        case "alert":
            return <div>alert!</div>;
        case "confirm":
            return <div>confirm!</div>;
        case "prompt":
            return <div>prompt!</div>;

        default:
            break;
    }
    return undefined;
};

export const DialogImplement = () => {
    const [ dialog, setDialogStateInstance ] = useState(INIT_STATE);
    setDialogState.current = setDialogStateInstance;
    return <Modal isOpen={dialog.type !== ""}>
        {renderDialog(dialog)}
    </Modal>;
};
