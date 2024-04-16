import Image from "next/image";
import { FC } from "react";

interface Props {
    img: string;
    text: string;
}

export const BlogCard: FC<Props> = ({ img, text }) => {
    return (
        <div className="flex lg:basis-1/2 mt-5  border rounded-lg hover:shadow-lg cursor-pointer">
            <Image src={img} alt="" width={200} height={100} className="min-w-[200px]" />
            <div className="p-5 flex flex-col justify-between">
                <div className="font-bold text-gray-500">{text}</div>
                <span className="text-primary font-bold">Chi tiết</span>
            </div>
        </div>
    );
};
