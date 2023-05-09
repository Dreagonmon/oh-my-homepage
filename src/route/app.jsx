import { h, Fragment } from "preact";
import { setLang } from "../store/lang.js";
import { useTranslate } from "../i18n/index.js";
import { useStore } from "@nanostores/preact";
import { backgroundStyleTextAtom } from "../store/background.js";
import { themeColorStyleTextAtom } from "../store/theme.js";

export const App = () => {
    const t = useTranslate();
    const backgroundStyleText = useStore(backgroundStyleTextAtom);
    const colorStyleText = useStore(themeColorStyleTextAtom);
    const bodyStyle = `width: 100%; height: 100%; overflow: hidden; ${backgroundStyleText} ${colorStyleText}`;
    return <div style={bodyStyle}>
        <h1 class="text-shadow">{t([ "index", "title" ])}</h1>
        <button onClick={() => { setLang("en"); }}>SetToEN</button>
        <button onClick={() => { setLang("zh"); }}>SetToZH</button>
    </div>;
};
