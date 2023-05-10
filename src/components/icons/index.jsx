import { h } from "preact";
import { FEATHER_ICONS } from "./icons.jsx";

/**
 * @typedef {Object} IconProps
 * @property {string} name
 * @property {h.JSX.CSSProperties} [style]
 */

/**
 * @param {IconProps} props
 * @returns {h.JSX.Element}
 */
export const Icon = (props) => {
    const svg = FEATHER_ICONS[ props.name ];
    if (props.style) {
        svg.props.style = props.style;
    }
    return svg;
};
