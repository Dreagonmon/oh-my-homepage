import { h } from "preact";
import { useEffect, useMemo } from "preact/hooks";
import { getModalUniqueID, hideModalElements, showModalElements } from "./container.jsx";
import { SIZE_FULL } from "../styles/index.js";
import { FLEX_V_CENTER } from "../styles/index.js";

/** @type {import("preact").h.JSX.CSSProperties} */
const MODAL_INNER_STYLE = {
    ...SIZE_FULL,
    ...FLEX_V_CENTER,
    position: "fixed",
    top: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.3)",
    overflowX: "hidden",
    overflowY: "auto",
};

/**
 * @param {h.JSX.Element["props"]} props
 * @returns {h.JSX.Element}
 */
const ModalInner = (props) => {
    const style = {};
    return <div id={props.id} style={MODAL_INNER_STYLE}>
        {props.children}
    </div>;
};

/**
 * @param {import("./type.d.ts").ModalProps} props
 * @returns {h.JSX.Element}
 */
export const Modal = (props) => {
    const id = useMemo(() => getModalUniqueID(), []);
    const content = useMemo(() => <ModalInner id={id}>{props.children}</ModalInner>, [ props.children ]);
    useEffect(() => {
        if (props.isOpen) {
            showModalElements(content);
        } else {
            hideModalElements(content);
        }
        return () => {
            hideModalElements(content);
        };
    }, [ props.isOpen, content ]);
    return null;
};
