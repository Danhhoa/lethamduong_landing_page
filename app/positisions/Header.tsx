"use client";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MobileMenu } from "../components/MobileMenu";

export const Header = () => {
    const [openPop, setOpenPop] = useState(false);

    const trainingCalendar = [
        {
            href: "",
            title: "2023 - 2024",
        },
        {
            href: "",
            title: "2024 - 2025",
        },
    ];

    return (
        <nav className="fixed w-full top-0 flex justify-between items-center h-[80px] lg:px-18 md:px-10 px-5 bg-white z-10 border-b-2 border-blue-500">
            <div className="">
                <Image
                    src={"/logo/main-logo.png"}
                    alt="logo"
                    width={450}
                    height={80}
                    // fill
                    // objectFit="contain"
                    className="max-w-[450px] h-full left-0"
                />
            </div>
            <div className="lg:flex items-center font-semibold gap-8 hidden">
                <Link href={"/gioi-thieu"} aria-label="Đi đến trang giới thiệu" className="">
                    Giới Thiệu
                </Link>
                <Popover onOpenChange={() => setOpenPop(!openPop)}>
                    <PopoverTrigger className="">
                        <div className="flex justify-center items-center gap-3">
                            <p className="lg:block hidden">Lịch Đào Tạo</p>
                            <Image
                                src={"/icons/chevron-down-black.svg"}
                                alt=""
                                width={16}
                                height={16}
                                className={cn("transition ease-in-out ", { "rotate-180": openPop })}
                            />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="bg-white border rounded shadow-lg">
                        <div className="flex flex-col font-normal first:pt-3 last:pb-3">
                            {trainingCalendar.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="px-5 py-2 hover:bg-blue-400 hover:text-white"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </PopoverContent>
                </Popover>
                <Link href={"/gioi-thieu"} aria-label="Đi đến trang liên hệ" className="">
                    Liên Hệ
                </Link>
            </div>
            <div className="ml-4 lg:hidden cursor-pointer">
                <MobileMenu />
            </div>
        </nav>
    );
};
