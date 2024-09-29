"use client";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MobileMenu } from "../components/MobileMenu";
import { useScroll } from "../hooks/useScroll";
import { useRouter } from "next/navigation";

export const Header = () => {
    const [openPop, setOpenPop] = useState(false);
    const { isScrolled } = useScroll();
    const router = useRouter();

    const trainingCalendar = [
        {
            href: "/lich-dao-tao/2023-2024",
            title: "2023 - 2024",
        },
        {
            href: "/lich-dao-tao/2024-2025",
            title: "2024 - 2025",
        },
    ];

    return (
        <nav
            className={cn(
                "fixed w-full top-0 flex justify-between items-center h-24 lg:px-18 md:px-10 px-5 bg-white z-10 transition-all ease-linear duration-500",
                { "h-16": isScrolled }
            )}
        >
            <div className="transition-all">
                <Image
                    src={"/logo/main-logo.png"}
                    alt="logo"
                    width={450}
                    height={80}
                    // fill
                    // objectFit="contain"
                    className={cn("max-w-[450px] h-full left-0 ease-in-out duration-500 cursor-pointer", {
                        "max-w-sm": isScrolled,
                    })}
                    onClick={() => router.push("/")}
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
                <Link href={"/lien-he"} aria-label="Đi đến trang liên hệ" className="">
                    Liên Hệ
                </Link>
            </div>
            <div className="ml-4 lg:hidden cursor-pointer">
                <MobileMenu />
            </div>
        </nav>
    );
};
