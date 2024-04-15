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
                "flex justify-between p-4 rounded-lg bg-[linear-gradient(90deg,_#005BEA_0%,_#00C6FB_100%)]",
                className
            )}
        >
            <p className="self-end text-bold text-4xl text-white">{text}</p>
            <Image src={imageUrl} alt="" width={150} height={150} />
        </div>
    );
};
