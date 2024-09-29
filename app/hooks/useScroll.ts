import { useEffect, useState } from "react";

export const useScroll = () => {
    const [isScrolled, setScrolled] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Handler when page is scrolled
    const handleScroll = () => {
        setScrollY(window.scrollY);

        if (window.scrollY > 250) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    return {
        isScrolled,
        scrollY,
    };
};
