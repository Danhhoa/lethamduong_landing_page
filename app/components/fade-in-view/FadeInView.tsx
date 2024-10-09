"use client";
import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import "./style.css";
import { ClassNameValue } from "tailwind-merge";

export type DirAnimation = "l2r" | "r2l" | "b2t" | "t2b" | "fade-in";

interface Props {
    dir?: DirAnimation;
    className?: ClassNameValue;
    children: ReactNode;
}

export const FadeInView: FC<Props> = ({ dir = "l2r", className, children }) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true,
        rootMargin: "50px",
    });

    return (
        <div ref={ref} className={cn(`show-in-view-${dir} ${className}`, { "in-view": inView })}>
            {children}
        </div>
    );
};
