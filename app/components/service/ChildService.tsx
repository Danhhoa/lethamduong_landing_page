import Image from "next/image";
import { FC } from "react";

interface Props {
    imageUrl: string;
    title: string;
    subTitle: string;
}

export const ChildService: FC<Props> = ({ imageUrl, title, subTitle }) => {
    return (
        <div className="flex items-center gap-3">
            <Image src={imageUrl} alt={title} width={125} height={125} />
            <div className="flex flex-col gap-3">
                <p className="text-blue-800">{title}</p>
                <p className="text-sm text-gray-600 font-normal">{subTitle}</p>
            </div>
        </div>
    );
};
