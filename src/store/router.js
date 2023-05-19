import { atom, action } from "nanostores";

/**
 * @typedef {Object} RouterInfo
 * @property {string} name
 * @property {Record<string, any>} props
 */

/** @type {import("nanostores").WritableAtom<RouterInfo>} */
export const routerInfoAtom = atom({
    name: "home",
    props: {},
});

export const goto = action(routerInfoAtom, "goto",
    /**
     * @param {import("nanostores").WritableAtom<RouterInfo>} store 
     * @param {string} name 
     * @param {Record<string, any>} props 
     */
    (store, name, props = {}) => {
        store.set({ name, props });
    }
);

window[ "_goto" ] = goto;
