import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface Props {
    text?: string;
    className?: string;
}

export const ScanToDownload: FC<Props> = ({ text, className }) => {
    return (
        <div className={cn("flex justify-center items-center gap-1 rounded-lg bg-gray-100 h-[110px]", className)}>
            <Image src="/qr.png" alt="" width={110} height={110} className="w-1/3 m-1 place-self-stretch" />
            <div className="flex items-center h-full px-3">Quét mã để tải ứng dụng cho iOS & Android</div>
        </div>
    );
};
