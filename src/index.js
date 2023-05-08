import { render, h } from "preact";
import { App } from "./route/app.jsx";
// register sw
if (self.navigator?.serviceWorker) {
    self.navigator.serviceWorker.register("sw.js").then((result) => {
        if (result) {
            console.log("Service Worker Registed.");
        }
    });
}

window.addEventListener("load", () => {
    render(h(App, {}), document.querySelector("#app"));
});
