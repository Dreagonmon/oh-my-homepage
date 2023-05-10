import { h } from "preact";
import { openURL } from "../../store/launcher.js";
import { Icon } from "../../components/icons/index.jsx";
import { FLEX_AUTO, FLEX_FIXED, FLEX_H_CENTER } from "../../components/styles/index.js";
import { useCallback, useState } from "preact/hooks";

/** @type {import("preact").h.JSX.CSSProperties} */
const STYLE_CONTAINER = {
    ...FLEX_H_CENTER,
    margin: "0 1rem",
    width: "100%",
    height: "4rem",
    maxWidth: "800px",
    border: "0.2rem solid var(--var-border-color)",
    borderRadius: "2rem",
};
/** @type {import("preact").h.JSX.CSSProperties} */
const STYLE_INPUT = {
    ...FLEX_AUTO,
    width: "0",
    margin: "0.5rem 0 0.5rem 1rem",
    color: "var(--var-text-color1)",
    background: "transparent",
    border: "none",
    alignSelf: "stretch",
    fontSize: "1.2rem",
};
/** @type {import("preact").h.JSX.CSSProperties} */
const STYLE_SEARCH_BUTTON = {
    ...FLEX_FIXED,
    ...FLEX_H_CENTER,
    padding: "0 1rem",
    alignSelf: "stretch",
    cursor: "pointer",
    color: "var(--var-text-color1)"
};

export const SearchBar1 = () => {
    const [ searchText, setSearchText ] = useState("");

    const doSearch = useCallback(
        /**
         * @param {h.JSX.TargetedEvent} [e] 
         */
        (e=undefined) => {
            const url = new URL("https://cn.bing.com");
            url.searchParams.set("q", searchText);
            openURL(url.href);
            if (e) {
                e.preventDefault();
            }
            return false;
        },
        [searchText],
    );

    const onInputSearch = useCallback(
        /**
         * @param {h.JSX.TargetedEvent<HTMLInputElement, Event>} e 
         */
        (e) => {
            /** @type {HTMLInputElement} */
            // @ts-ignore
            const elem = e.target;
            setSearchText(elem.value);
        },
        [],
    );

    return <form style={STYLE_CONTAINER} onSubmit={doSearch}>
        <input style={STYLE_INPUT} value={searchText} onInput={onInputSearch} />
        <span style={STYLE_SEARCH_BUTTON} onClick={doSearch}>
            <Icon name="search" />
        </span>
    </form>;
};