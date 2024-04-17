import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface Props {
    imageUrl: string;
    title: string;
    subTitle: string;
    theme?: "light" | "dark";
    className?: string;
}

export const CardService: FC<Props> = ({ imageUrl, title, subTitle, theme = "light", className }) => {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            <Image src={imageUrl} alt={title} width={125} height={125} className="min-w-[125px]" />
            <div className="flex flex-col gap-3">
                <p className={`lg:text-3xl text-2xl ${theme == "dark" ? "text-secondary" : "text-blue-800"}`}>
                    {title}
                </p>
                <p className={`text-sm font-normal ${theme == "dark" ? "text-white" : "text-gray-600 "}`}>{subTitle}</p>
            </div>
        </div>
    );
};
