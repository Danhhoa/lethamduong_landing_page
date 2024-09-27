import { useState, useEffect } from "react";

export const useDimension = () => {
    const [windowWidth, setWindowWidth] = useState<any>(null);

    const isWindow = typeof window !== "undefined";

    const getWidth = () => (isWindow ? window.innerWidth : windowWidth);

    const resize = () => setWindowWidth(getWidth());

    useEffect(() => {
        if (isWindow) {
            setWindowWidth(getWidth());

            window.addEventListener("resize", resize);

            return () => window.removeEventListener("resize", resize);
        }
        //eslint-disable-next-line
    }, [isWindow]);

    return { isMobile: windowWidth < 768 };
};
