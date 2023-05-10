import { h } from "preact";
import {
    SIZE_FULL,
    FLEX_H_CENTER,
    FLEX_V_CENTER,
    FLEX_AUTO,
    FLEX_FIXED,
} from "../../components/styles/index.js";
import { Icon } from "../../components/icons/index.jsx";
import { SearchBar1 } from "./searchBar1.jsx";

export const PageHome = () => {
    return <div style={{ ...FLEX_V_CENTER, ...SIZE_FULL }}>
        <div style={{ ...FLEX_AUTO, ...FLEX_H_CENTER, ...SIZE_FULL }}>
            <SearchBar1 />
        </div>
        <div style={{ ...FLEX_FIXED, ...FLEX_H_CENTER, width: "100%", padding: "0.5rem" }}>
            <span style={{ ...FLEX_AUTO }} />
            <Icon name="settings" style={{ height: "2rem", width: "2rem" }} />
        </div>
    </div>;
};