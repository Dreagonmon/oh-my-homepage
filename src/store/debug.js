import { persistentAtom } from "@nanostores/persistent";
import { computed, action } from "nanostores";

const TEXT_ENABLE = "enable";

/** @type {import("nanostores").WritableAtom<string>} */
const debugSavedAtom = persistentAtom("_app_debug_", "");
export const debugAtom = computed([debugSavedAtom], (debugValue) => {
    return debugValue === TEXT_ENABLE;
});

export const setDebug = action(debugSavedAtom, "setDebug",
    /**
     * @param {import("nanostores").WritableAtom<string>} store
     * @param {boolean} value
    */
    (store, value) => {
        if (value) {
            store.set(TEXT_ENABLE);
        } else {
            store.set("");
        }
    },
);
