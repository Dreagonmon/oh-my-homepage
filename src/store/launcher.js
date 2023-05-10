import { atom, computed, action } from "nanostores";
import { launcher, PERMISSION_LAUNCHER } from "android-web-launcher";
import { debugAtom } from "./debug.js";

if (debugAtom.get() && !launcher.isRunningInLauncher()) {
    launcher.startDebugSession();
    console.log("Start Launcher Debug.");
}

export const launcherAtom = atom(launcher);
export const launcherAvailableAtom = computed([ debugAtom, launcherAtom ], (isDebug, launcherObject) => {
    if (isDebug && !launcher.isRunningInLauncher()) {
        launcher.startDebugSession();
        return true;
    }
    return launcherObject.isRunningInLauncher();
});
export const launcherHasLauncherPermission = atom(false);

export const requestLauncherPermission = action(launcherHasLauncherPermission, "",
    async (store) => {
        if (launcherAvailableAtom.get()) {
            const launcher = launcherAtom.get();
            try {
                const success = await launcher.requestPermission(PERMISSION_LAUNCHER);
                if (success) {
                    store.set(true);
                }
                return success;
            } catch (e) {
                console.error(e);
            }
        }
        return false;
    },
);

/**
 * Open URL in new window
 * @param {string} targetURL 
 * @returns {Promise<void>}
 */
export const openURL = async (targetURL) => {
    if (launcherAvailableAtom.get()) {
        if (!launcherHasLauncherPermission.get()) {
            await requestLauncherPermission();
        }
        if (launcherHasLauncherPermission.get()) {
            await requestLauncherPermission();
            await launcherAtom.get().openWebpage(targetURL);
        }
    } else {
        window.open(targetURL, "_blank");
    }
};
