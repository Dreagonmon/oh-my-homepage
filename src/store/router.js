import { atom } from "nanostores";

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
