import { action } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";
import { LANG_DEFAULT, LANG_MAP } from "../i18n/const.js";

const getFirstLanguage = () => {
    try {
        for (const bLang of navigator.languages) {
            if (Object.prototype.hasOwnProperty.call(LANG_MAP, bLang)) {
                return bLang;
            }
        }
    } catch (e) {
        console.error(e);
    }
    return LANG_DEFAULT;
};

export const langAtom = persistentAtom("_app_lang_", getFirstLanguage());

export const setLang = action(langAtom, "setLang", (store, newLang) => {
    if (Object.prototype.hasOwnProperty.call(LANG_MAP, newLang)) {
        store.set(newLang);
    } else {
        store.set(LANG_DEFAULT);
    }
});
