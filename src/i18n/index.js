import { langAtom } from "../store/lang.js";
import { useStore } from "@nanostores/preact";
import { LANG_DEFAULT, LANG_MAP } from "./const.js";

/**
 * @typedef {Object} TranslateItemObject
 * @property {string} [one]
 * @property {string} [many]
 * */
/**
 * @typedef {(TranslateItemObject | string)} TranslateItem
 * @typedef {(number | string)} TranslateParameter
 */

/**
 * @param {object} obj
 * @param {string} key
 * @returns {boolean}
 */
const objectHasKey = (obj, key) => {
    if (typeof obj === "object") {
        return Object.prototype.hasOwnProperty.call(obj, key);
    }
    return false;
};

/**
 * @param {Array<string>} textPath 
 * @param {object} obj 
 * @returns {TranslateItem | undefined}
 */
const findPathInObject = (textPath, obj) => {
    let current = obj;
    for (const part of textPath) {
        if (objectHasKey(current, part)) {
            current = current[ part ];
        } else {
            return undefined;
        }
    }
    if (typeof current === "string" || objectHasKey(current, "one")) {
        return current;
    }
    return undefined;
};

/**
 * @param {string} fmt 
 * @param {Array<TranslateParameter>} params 
 * @returns {string}
 */
const formatText = (fmt, params) => {
    let text = fmt;
    params.forEach((value, index) => {
        const placeHolder = `{${index}}`;
        text = text.replaceAll(placeHolder, value.toString());
    });
    return text;
};

/**
 * translate text, if params[0]
 * @param {string} lang 
 * @param {Array<string>} textPath 
 * @param  {...TranslateParameter} params 
 */
export const getTranslatedText = (lang, textPath, ...params) => {
    const translateDatabase = LANG_MAP[ lang ] ?? LANG_MAP[ LANG_DEFAULT ];
    const translateItem = findPathInObject(textPath, translateDatabase) ?? findPathInObject(textPath, LANG_MAP[ LANG_DEFAULT ]);
    if (typeof translateItem === "string") {
        return formatText(translateItem, params);
    } else if (objectHasKey(translateItem, "one")) {
        if (
            // translate item support many
            objectHasKey(translateItem, "many")
            && (
                // have params
                params.length > 0
                // params 0 is number
                && typeof params[ 0 ] === "number"
                // number > 1
                && params[ 0 ] > 1
            )
        ) {
            return formatText(translateItem.many, params);
        }
        return formatText(translateItem.one, params);
    } else {
        console.trace(`[Not a translate item: ${textPath.join(".")}]`);
        return "[No Text]";
    }
};

export const useTranslate = () => {
    const lang = useStore(langAtom);
    /**
     * Get translated text.
     * @param {Array<string>} textPath text path, e.g. [ "index", "title" ]
     * @param {TranslateParameter[]} params  replace "{0}", "{1}", "{2}", ... in the translated text.
     * @returns {string}
     */
    return (textPath, ...params) => {
        return getTranslatedText(lang, textPath, ...params);
    };
};
