import { h } from "preact";
import { BORDER_NONE, BORDER_RADIUS, CONTENT_PADDING2 } from "../styles/index.js";

/**
 * @param {import("./type.d.ts").ButtonProps} props
 * @returns {h.JSX.Element}
 */
export const Button = (props) => {
    const { theme, ...buttonProps } = props;
    /** @type {import("preact").h.JSX.CSSProperties} */
    const buttonStyle = {
        ...BORDER_RADIUS,
        ...BORDER_NONE,
        ...CONTENT_PADDING2,
        cursor: "pointer",
        color: "var(--var-button-text-color)",
        backgroundColor: "var(--var-prime-color)",
    };
    switch (theme) {
        case "prime": buttonStyle.backgroundColor = "var(--var-prime-color)"; break;
        case "second": buttonStyle.backgroundColor = "var(--var-second-color)"; break;
        case "error": buttonStyle.backgroundColor = "var(--var-error-color)"; break;
        case "warning": buttonStyle.backgroundColor = "var(--var-warning-color)"; break;
        case "success": buttonStyle.backgroundColor = "var(--var-success-color)"; break;
        default: break;
    }
    const disabled = buttonProps.disabled;
    if (
        disabled !== undefined && disabled !== null
        && (
            (typeof disabled === "boolean" && disabled)
            // @ts-ignore
            || (Object.prototype.hasOwnProperty.call(disabled, "value") && disabled.value)
        )
    ) {
        buttonStyle.backgroundColor = "var(--var-disable-color)";
        buttonStyle.cursor = "not-allowed";
    }
    return <button style={buttonStyle} {...buttonProps} >{props.children}</button>;
};
