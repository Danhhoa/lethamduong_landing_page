import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC } from "react";

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

    return (
        <div className={cn("flex justify-center items-center gap-1 rounded-lg bg-gray-100", className)}>
            <Image
                src={type === "driver" ? `/qr-ios-driver.png` : `/qr-ios.png`}
                alt="qr"
                width={width}
                height={height}
                className="rounded-lg"
            />
            <div className="flex items-center h-full px-3">Quét mã để tải ứng dụng cho iOS & Android</div>
        </div>
    );
};
