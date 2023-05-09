import { h, Fragment } from "preact";
import { useStore } from "@nanostores/preact";
import { backgroundStyleTextAtom } from "../store/background.js";
import { themeColorStyleTextAtom } from "../store/theme.js";
import { useTranslate } from "../i18n/index.js";

export const App = () => {
    const t = useTranslate();
    const backgroundStyleText = useStore(backgroundStyleTextAtom);
    const colorStyleText = useStore(themeColorStyleTextAtom);
    const bodyStyle = `width: 100%; height: 100%; overflow: hidden; ${backgroundStyleText} ${colorStyleText}`;
    return <div style={bodyStyle}>
        <h1 class="text-shadow">{t([ "index", "title" ])}</h1>
    </div>;
};
