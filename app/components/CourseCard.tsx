import Image from "next/image";
import { FC } from "react";

interface Props {
    src: string;
    title: string;
    cardDetailedText: string[];
    cardDetail?: {
        hanoi_t_s?: string;
        hanoi_t_e?: string;
        hcm_t_s?: string;
        hcm_t_e?: string;
    };
}

export const CourseCard: FC<Props> = ({ src, title, cardDetailedText, cardDetail }) => {
    return (
        <div key={title} className="flex flex-col">
            <Image
                src={src}
                alt={title}
                width={500}
                height={500}
                loading="lazy"
                className="h-full object-cover rounded-lg"
            />
            <h4 className="text-blue-500 py-2 font-semibold">{title}</h4>
            <div className="flex flex-col gap-2 mt-4">
                {cardDetailedText && cardDetailedText?.map((text) => <p>{text}</p>)}
            </div>
        </div>
    );
};