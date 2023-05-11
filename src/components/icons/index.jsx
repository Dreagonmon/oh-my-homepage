import { h } from "preact";
import { renderIconSvg } from "./icons.jsx";

/**
 * @param {import("./type.d.ts").IconProps} props
 * @returns {h.JSX.Element}
 */
export const Icon = (props) => {
    const { iconName, ...svgProps } = props;
    const svgElement = renderIconSvg(iconName, svgProps);
    if (svgElement) {
        return svgElement;
    }
    console.error(`Unknow icon: ${iconName}.`);
    return renderIconSvg("help-circle", svgProps);
};
