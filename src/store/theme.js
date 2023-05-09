import { computed, action } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";
import { parseColorVariableStyle } from "../objects/theme/index.js";


const themeConfigSavedAtom = persistentAtom("_app_thm_", "{}");
/** @type {import("nanostores").ReadableAtom<import("../objects/theme/index.js").ThemeConfig>} */
export const themeConfigAtom = computed([ themeConfigSavedAtom ], (value) => {
    try {
        return JSON.parse(value);
    } catch (e) {
        console.error(e);
        return {};
    }
});
/** @type {import("nanostores").ReadableAtom<string>} */
export const themeColorStyleTextAtom = computed([ themeConfigAtom ], (value) => {
    return parseColorVariableStyle(value);
});

export const setThemeConfig = action(themeConfigSavedAtom, "setThemeConfig",
    /**
     * @param {import("nanostores").WritableAtom<string>} store
     * @param {import("../objects/theme/index.js").ThemeConfig} config
     */
    (store, config) => {
        store.set(JSON.stringify(config));
    },
);
