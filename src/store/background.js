import { atom, task, action, onMount } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";
import { BG_TYPE_EMPTY } from "../objects/background/const.js";
import { updateBackgroundStyle } from "../objects/background/index.js";

/**
 * @typedef {Object} BackgroundConfig
 * @property {number} bgType
 */

export const backgroundConfigTypeAtom = persistentAtom("_app_bgt_", BG_TYPE_EMPTY);
export const backgroundConfigParametersAtom = persistentAtom("_app_bgp_", "");
export const backgroundStyleTextAtom = atom("");

export const setBackground = action(backgroundStyleTextAtom, "setBackground",
    /**
     * @param {import("nanostores").WritableAtom<string>} store 
     * @param {string} bgType
     * @param {string} bgParam
     * @returns {Promise<void>}
     */
    async (store, bgType, bgParam) => {
        const styleText = await updateBackgroundStyle(
            bgType,
            bgParam,
        );
        store.set(styleText);
    },
);

/* Events */
let styleInited = false;
onMount(backgroundStyleTextAtom, (payload) => {
    // Process background config
    if (styleInited) {
        return;
    }
    task(async () => {
        const styleText = await updateBackgroundStyle(
            backgroundConfigTypeAtom.get(),
            backgroundConfigParametersAtom.get(),
        );
        styleInited = true;
        if (styleText !== backgroundStyleTextAtom.get()) {
            backgroundStyleTextAtom.set(styleText);
        }
    });
});
