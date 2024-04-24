"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const PhoneContact = () => {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen((prev) => !prev);
    return (
        <div className="absolute w-full flex justify-end">
            <Image
                src={!open ? "/icons/phone.png" : "/icons/close.png"}
                alt=""
                width={88}
                height={88}
                onClick={toggleOpen}
                className="hover:transition ease-in-out hover:scale-110 duration-300 cursor-pointer"
            />
            {/* chilld items */}
            <div className={cn("absolute flex flex-col-reverse top-[-280px] justify-end items-end transition-opacity")}>
                <div
                    className={cn(
                        "flex items-center transition ease-in-out opacity-70 hover:transition  hover:scale-110 duration-300 cursor-pointer",
                        { "opacity-100": open, "opacity-0": !open }
                    )}
                >
                    <div className="rounded-3xl text-white bg-[#444444] py-2 px-5"> Trò chuyện bằng Messenger</div>
                    <Link href={"https://www.messenger.com/t/VietnamMoving"} aria-label="Chat with me">
                        <Image src={"/icons/messenger.png"} alt="" width={88} height={88} onClick={toggleOpen} />
                    </Link>
                </div>
                <div
                    className={cn(
                        "flex items-center hover:transition ease-in-out hover:scale-110 delay-100 duration-300 cursor-pointer",
                        { "opacity-100": open, "opacity-0": !open }
                    )}
                >
                    <div className="rounded-3xl text-white bg-[#444444] py-2 px-5">Trò chuyện bằng Zalo</div>
                    <Link href={"https://zalo.me/3434631582640982814"} aria-label="Chat with me">
                        <Image src={"/icons/zalo.png"} alt="" width={88} height={88} onClick={toggleOpen} />
                    </Link>
                </div>
                <div
                    className={cn(
                        "flex items-center hover:transition ease-in-out hover:scale-110 delay-200 duration-300 cursor-pointer",
                        { "opacity-100": open, "opacity-0": !open }
                    )}
                >
                    <div className="rounded-3xl text-white bg-[#444444] py-2 px-5">
                        Hotline:&nbsp;
                        <Link href={"tel:18007011"} className="hover:text-primary">
                            1800 7011
                        </Link>
                        &nbsp; - &nbsp;
                        <Link href={"tel:0902823212"} className="hover:text-primary">
                            0902 823 212
                        </Link>
                    </div>
                    <Link href={"tel:0902823212"} aria-label="Call with me">
                        <Image src={"/icons/phone-2.png"} alt="" width={88} height={88} onClick={toggleOpen} />
                    </Link>
                </div>
            </div>
        </div>
    );
};
