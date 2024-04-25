"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";
import { QRCodeCanvas } from "qrcode.react";

type QrType = "customer" | "driver";

interface Props {
    width: number;
    height: number;
    type?: QrType;
    text?: string;
    className?: string;
}

export const ScanToDownload: FC<Props> = ({ type = "customer", className, width, height }) => {
    // const [device, setDevice] = useState<Device>("ios");
    // useEffect(() => {
    //     setDevice(detectDevice());
    // }, []);

    const iconSize = width / 4;
    const iconSrc = type === "driver" ? "/app-icon-driver.jpg" : "/app-icon.jpg";
    return (
        <div className={cn("flex justify-center items-center gap-1 rounded-lg bg-gray-100", className)}>
            {/* <Image
                src={type === "driver" ? `/qrcode-all.png` : `/qrcode-all.png`}
                alt="qr"
                width={width}
                height={height}
                className="rounded-lg"
            /> */}
            <QRCodeCanvas
                value={`${process.env.NEXT_PUBLIC_BASE_URL}/download`}
                imageSettings={{ src: iconSrc, width: iconSize, height: iconSize, excavate: true }}
                level={"Q"}
                size={width}
                className="rounded-lg"
            />
            <div className="flex items-center h-full px-3">Quét mã để tải ứng dụng cho iOS & Android</div>
        </div>
    );
};
