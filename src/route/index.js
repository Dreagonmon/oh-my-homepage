import { h } from "preact";
import { Page404 } from "./page404.jsx";
import { PageHome } from "./home/index.jsx";
import { PageTest } from "./test/index.jsx";

const ROUTE = {
    "home": PageHome,
    "test": PageTest,
};

/**
 * @param {import("../store/router.js").RouterInfo} routerInfo
 * @returns {import("preact").VNode}
 */
export const routeElement = (routerInfo) => {
    if (Object.prototype.hasOwnProperty.call(ROUTE, routerInfo.name)) {
        return h(ROUTE[ routerInfo.name ], routerInfo.props);
    }
    console.error("Route Not Found:", routerInfo.name);
    return h(Page404, routerInfo.props);
};