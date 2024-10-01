"use client";
import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import "./style.css";

export type DirAnimation = "l2r" | "r2l" | "b2t" | "t2b";

interface Props {
    dir?: DirAnimation;
    children: ReactNode;
}

export const FadeInView: FC<Props> = ({ dir = "l2r", children }) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true,
    });

    console.log({ inView, entry });

    return (
        <div ref={ref} className={cn(`fade-in-view-${dir}`, { "in-view": inView })}>
            {children}
        </div>
    );
};
