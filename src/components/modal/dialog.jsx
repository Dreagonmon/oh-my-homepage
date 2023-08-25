import { h, createRef } from "preact";
import { Modal } from "./index.jsx";
import { useState } from "preact/hooks";
import { useTranslate } from "../../i18n/index.js";

/**
 * @typedef {Object} DialogState
 * @property {string} type
 * @property {string} message
 * @property {function} resolver
 */

const NOP = () => { };
/** @type {import("preact").RefObject<import("preact/hooks").StateUpdater<DialogState>>} */
const setDialogState = createRef();
setDialogState.current = NOP;
const translator = createRef();
translator.current = NOP;

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

const closeDialog = () => {
    setDialogState.current(INIT_STATE);
};

/**
 * Get translated text.
 * @param {Array<string>} textPath text path, e.g. [ "index", "title" ]
 * @param {...import("../../i18n/index.js").TranslateParameter} params  replace "{0}", "{1}", "{2}", ... in the translated text.
 * @returns {string}
 */
const t = (textPath, ...params) => {
    return translator.current(textPath, ...params);
};

/**
 * @param {h.JSX.Element} content 
 * @param {...h.JSX.Element} buttons 
 * @returns {h.JSX.Element}
 */
const renderDialogGeneral = (content, ...buttons) => {
    return <div>
        <div>{content}</div>
        <div>{...buttons}</div>
    </div>;
};

/**
 * @param {DialogState} state 
 * @returns {h.JSX.Element}
 */
const renderDialog = (state) => {
    switch (state.type) {
        case "alert":
            return renderDialogGeneral(
                <div>{state.message}</div>,
                <button onClick={closeDialog}>{t([ "dialog", "confirm" ])}</button>
            );
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
    const t = useTranslate();
    const [ dialog, setDialogStateInstance ] = useState(INIT_STATE);
    setDialogState.current = setDialogStateInstance;
    translator.current = t;
    return <Modal isOpen={dialog.type !== ""}>
        {renderDialog(dialog)}
    </Modal>;
};
