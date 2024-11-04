import { cn } from "@/lib/utils";
import { FC } from "react";
import { ClassNameValue } from "tailwind-merge";

interface props {
    className?: ClassNameValue;
}

export const CrossSVG: FC<props> = ({ className }) => {
    return (
        <svg
            className={cn(`p-2`, className)}
            fill="#ffffff"
            width="34"
            height="35"
            viewBox="0 0 19 19"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.1923882 8.39339828l7.7781745-7.7781746 1.4142136 1.41421357-7.7781746 7.77817459 7.7781746 7.77817456L16.9705627 19l-7.7781745-7.7781746L1.41421356 19 0 17.5857864l7.7781746-7.77817456L0 2.02943725 1.41421356.61522369 9.1923882 8.39339828z"
                fill-rule="evenodd"
            ></path>
        </svg>
    );
};
