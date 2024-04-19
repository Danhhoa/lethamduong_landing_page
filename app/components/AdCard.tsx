import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface Props {
    imageUrl: string;
    text: string;
    className?: string;
}
export const AdCard: FC<Props> = ({ imageUrl, text, className }) => {
    return (
        <div
            className={cn(
                "flex lg:flex-row flex-col-reverse justify-between px-4 py-2 gap-5 rounded-lg bg-[linear-gradient(90deg,_#005BEA_0%,_#00C6FB_100%)]",
                className
            )}
        >
            <p className="lg:self-end self-start font-bold text-4xl text-white lg:max-w-[70%]">{text}</p>
            <Image src={imageUrl} alt="" width={150} height={150} className="lg:self-start self-end" />
        </div>
    );
};
