import Image from "next/image";
import { FC } from "react";

interface Props {
    imageUrl: string;
    title: string;
    subTitle: string;
    theme?: "light" | "dark";
}

export const CardService: FC<Props> = ({ imageUrl, title, subTitle, theme = "light" }) => {
    return (
        <div className="flex items-center gap-3">
            <Image src={imageUrl} alt={title} width={125} height={125} />
            <div className="flex flex-col gap-3">
                <p className={`text-3xl ${theme == "dark" ? "text-secondary" : "text-blue-800"}`}>{title}</p>
                <p className={`text-sm font-normal ${theme == "dark" ? "text-white" : "text-gray-600 "}`}>{subTitle}</p>
            </div>
        </div>
    );
};
