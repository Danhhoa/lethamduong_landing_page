import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

interface Props {
    width: number;
    height: number;
    text?: string;
    className?: string;
}

export const ScanToDownload: FC<Props> = ({ text, className, width, height }) => {
    return (
        <div className={cn("flex justify-center items-center gap-1 rounded-lg bg-gray-100", className)}>
            <Image src="/qr.png" alt="" width={width} height={height} className="p-1" />
            <div className="flex items-center h-full px-3">Quét mã để tải ứng dụng cho iOS & Android</div>
        </div>
    );
};
