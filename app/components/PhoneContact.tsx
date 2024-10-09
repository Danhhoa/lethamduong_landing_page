"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const PhoneContact = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen((prev) => !prev);
    return (
        <div className="absolute w-full flex items-center justify-center">
            <Image
                src={!open ? "/icons/contact.gif" : "/icons/close.png"}
                alt="contact"
                width={90}
                height={90}
                onClick={toggleOpen}
                className="hover:transition ease-in-out hover:scale-110 duration-300 cursor-pointer lg:w-full w-2/3"
            />
            {/* chilld items */}
            <div
                className={cn(
                    "absolute flex flex-col-reverse top-[-160px] justify-end items-end gap-5 transition-opacity"
                )}
            >
                <div
                    className={cn(
                        "flex items-center transition ease-in-out opacity-70 hover:transition  hover:scale-110 duration-300 cursor-pointer",
                        { "opacity-100": open, "opacity-0": !open }
                    )}
                >
                    <Link href={"tel:0981405186"} target="_blank" aria-label="Lien he voi TS Le Tham Duong">
                        <Image src={"/icons/phone-fixed.png"} alt="" width={50} height={50} onClick={toggleOpen} />
                    </Link>
                </div>
                <div
                    className={cn(
                        "flex items-center hover:transition ease-in-out hover:scale-110 delay-100 duration-300 cursor-pointer",
                        { "opacity-100": open, "opacity-0": !open }
                    )}
                >
                    <Link href={"https://zalo.me/0981405186"} target="_blank" aria-label="Lien he voi TS Le Tham Duong">
                        <Image src={"/icons/zalo-icon.png"} alt="" width={50} height={50} onClick={toggleOpen} />
                    </Link>
                </div>
                <div
                    className={cn(
                        "flex items-center hover:transition ease-in-out hover:scale-110 delay-200 duration-300 cursor-pointer",
                        { "opacity-100": open, "opacity-0": !open }
                    )}
                ></div>
            </div>
        </div>
    );
};
