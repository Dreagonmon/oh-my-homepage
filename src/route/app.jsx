import { h, Fragment } from "preact";
import { setLang } from "../store/lang.js";
import { useTranslate } from "../i18n/index.js";
import { useStore } from "@nanostores/preact";
import { backgroundStyleTextAtom } from "../store/background.js";

export const App = () => {
    const t = useTranslate();
    const bgStyleText = useStore(backgroundStyleTextAtom);
    const bgStyle = "width: 100%; height: 100%; overflow: hidden; " + bgStyleText;
    return <div style={bgStyle}>
        <h1 class="text-shadow">{t([ "index", "title" ])}</h1>
        <button onClick={() => { setLang("en"); }}>SetToEN</button>
        <button onClick={() => { setLang("zh"); }}>SetToZH</button>
    </div>;
};
