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
                "flex justify-between px-4 py-2 rounded-lg bg-[linear-gradient(90deg,_#005BEA_0%,_#00C6FB_100%)] lg:max-w-[50%] md:max-w-[470px]",
                className
            )}
        >
            <p className="self-end font-bold xl:text-2xl lg:text-xl text-white ">{text}</p>
            <Image src={imageUrl} alt="" width={150} height={150} className="self-start" />
        </div>
    );
};
