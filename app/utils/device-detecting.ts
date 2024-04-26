export type Device = "ios" | "android" | "desktop" | "linux" | "macos";

export const detectDevice = (): Device => {
    const userAgent = window.navigator.userAgent;
    // platform = (window.navigator as any)?.userAgentData?.platform || window.navigator.platform,
    // macosPlatforms = ["macOS", "Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    // windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    // iosPlatforms = ["iPhone", "iPad", "iPod"];
    // let os = "desktop";

    if (/android/i.test(userAgent)) {
        return "android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent)) {
        return "ios";
    }

    return "desktop";
};
