export type Device = "ios" | "android" | "desktop" | "linux" | "macos";

export const detectDevice = (): Device => {
    const userAgent = window.navigator.userAgent;
    if (/android/i.test(userAgent)) {
        return "android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent)) {
        return "ios";
    }

    return "desktop";
};
