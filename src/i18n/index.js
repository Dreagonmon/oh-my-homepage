import { langAtom } from "../store/lang.js";
import { useStore } from "@nanostores/preact";
import { TRANSLATE as T_DEFAULT } from "./tDefault.js";
import { TRANSLATE as T_ZH } from "./tZh.js";

export const LANG_DEFAULT = "default";

export const LANG_MAP = {
    "zh": T_ZH,
    [LANG_DEFAULT]: T_DEFAULT,
};

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
 * @param {string} lang 
 * @param {Array<string>} textPath 
 * @param  {Array<TranslateParameter>} params 
 */
export const getTranslatedText = (lang, textPath, params) => {
    const translateDatabase = LANG_MAP[ lang ] ?? LANG_MAP[ LANG_DEFAULT ];
    const translateItem = findPathInObject(textPath, translateDatabase) ?? findPathInObject(textPath, LANG_MAP[ LANG_DEFAULT ]);
    if (typeof translateItem === "string") {
        return formatText(translateItem, params);
    } else if (objectHasKey(translateItem, "one")) {
        if (objectHasKey(translateItem, "many") && params.length > 0 && typeof params[ 0 ] === "number" && params[ 0 ] > 1) {
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
     * @param  {...Array<TranslateParameter>} params  replace "{0}", "{1}", "{2}", ... in the translated text.
     * @returns {string}
     */
    return (textPath, ...params) => {
        return getTranslatedText(lang, textPath, params);
    };
};
