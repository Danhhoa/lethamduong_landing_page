"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ContactSVG } from "../icons/Contact";
import { CrossSVG } from "../icons/CrossSvg";
import "./style.css";

export const PhoneContact = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen((prev) => !prev);
    return (
        <div className="fixed lg:right-10 lg:bottom-5 bottom-0 right-0  flex justify-end h-[100px] w-[100px]">
            <div className="relative w-full flex items-center justify-center">
                <div
                    className="relative flex items-center justify-center bg-primary p-3 rounded-full animation-pulse-2 z-20"
                    onClick={toggleOpen}
                >
                    {!open ? <ContactSVG className="animate-rotateSkew cursor-pointer" /> : <CrossSVG />}
                </div>

                {/* chilld items */}
                <div
                    className={cn(
                        "absolute flex-col  right-16 bg-[white] shadow-lg w-[300px] rounded-lg z-0 transition-all duration-300 ease-in-out",
                        {
                            // "opacity-100": open,
                            // "opacity-0": !open,
                            "scale-100 top-[-130px]": open,
                            "scale-0 top-0 right-[-100px]": !open,
                        }
                    )}
                >
                    <div className={cn("flex flex-col divide-y items-center transition ease-in-out cursor-pointer")}>
                        <Link
                            href={"tel:0981405186"}
                            target="_blank"
                            aria-label="Lien he voi TS Le Tham Duong"
                            className="flex items-center self-start p-3 w-full"
                        >
                            <Image src={"/icons/phone1.png"} alt="" width={30} height={30} />
                            <div className="ml-5 text-sm font-light hover:text-primary">
                                Liên hệ cho TS.Lê Thẩm Dương
                            </div>
                        </Link>

                        <Link
                            href={"https://zalo.me/0981405186"}
                            target="_blank"
                            aria-label="Lien he voi TS Le Tham Duong"
                            className="flex items-center self-start p-3 w-full"
                        >
                            <Image src={"/icons/zalo-icon.png"} alt="" width={30} height={30} />
                            <div className="ml-5 text-sm font-light hover:text-primary">Chat với TS.Lê Thẩm Dương</div>
                        </Link>

                        <Link
                            href={"/lien-he"}
                            aria-label="Lien he voi TS Le Tham Duong"
                            className="flex items-center self-start p-3 w-full"
                        >
                            <Image src={"/icons/location-pin.png"} alt="" width={30} height={30} />
                            <div className="ml-5 text-sm font-light hover:text-primary">
                                Xem địa chỉ của doanh nghiệp
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
