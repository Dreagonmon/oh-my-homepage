import { h } from "preact";
import { useStore } from "@nanostores/preact";
import { backgroundStyleTextAtom } from "../store/background.js";
import { themeColorStyleTextAtom, themeConfigAtom } from "../store/theme.js";
import { useTranslate } from "../i18n/index.js";
import { useEffect, useMemo } from "preact/hooks";
import { routerInfoAtom } from "../store/router.js";
import { routeElement } from "./index.js";
import { ModalContainer } from "../components/modal/container.jsx";

export const App = () => {
    const t = useTranslate();
    const backgroundStyleText = useStore(backgroundStyleTextAtom);
    const colorStyleText = useStore(themeColorStyleTextAtom);
    const themeConfig = useStore(themeConfigAtom);
    const routerInfo = useStore(routerInfoAtom);

    /* cache page content */
    const page = useMemo(() => {
        return routeElement(routerInfo);
    }, [routerInfo]);

    /* update title */
    useEffect(() => {
        if (themeConfig.pageTitle) {
            document.title = themeConfig.pageTitle;
        } else {
            document.title = t([ "index", "title" ]);
        }
    }, [ themeConfig, t ]);

    const bodyStyle = `width: 100%; height: 100%; overflow: hidden; ${backgroundStyleText} ${colorStyleText}`;
    return <div style={bodyStyle}>
        {page}
        <ModalContainer />
    </div>;
};
