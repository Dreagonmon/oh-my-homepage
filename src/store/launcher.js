import { atom, computed, action } from "nanostores";
import { launcher, PERMISSION_LAUNCHER } from "android-web-launcher";

export const launcherAtom = atom(launcher);
export const launcherAvailableAtom = computed([ launcherAtom ], (launcherObject) => {
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
