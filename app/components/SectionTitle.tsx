import { cn } from "@/lib/utils";
import { FC } from "react";

interface Props {
    title: string;
    className?: string;
}

export const SectionTitle: FC<Props> = ({ title, className }) => {
    return <h2 className={`font-semibold text-4xl ${className}`}>{title}</h2>;
};
