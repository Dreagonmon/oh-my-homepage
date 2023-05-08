import { BG_TYPE_EMBED_SVG } from "./const.js";
import { parseStyleForEmbedSvg } from "./embedSvg.js";

/**
 * @param {string} bgType 
 * @param {string} bgParam 
 * @returns {Promise<string>}
 */
export const updateBackgroundStyle = async (bgType, bgParam) => {
    try {
        if (bgType === BG_TYPE_EMBED_SVG) {
            return parseStyleForEmbedSvg(bgParam);
        }
    } catch (e) {
        console.error(e);
    }
    return "";
};
