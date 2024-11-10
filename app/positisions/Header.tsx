"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MobileMenu } from "../components/MobileMenu";
import { useDimension } from "../hooks/useDimension";
import { useScroll } from "../hooks/useScroll";
import useAxios from "../hooks/useAxios";
import { LoadingSpinner } from "../components/Spinner";
import { IResponseSchoolYear } from "../interfaces";

export const Header = () => {
    const [openPop, setOpenPop] = useState(false);
    const { isScrolled } = useScroll();
    const router = useRouter();
    const { isMobile } = useDimension();

    const {
        response: calendarSchoolYear,
        loading,
        error,
    } = useAxios<IResponseSchoolYear[]>({
        method: "get",
        url: "https://cus-api.biiline.com/items/school_year",
    });

    return (
        <nav
            className={cn(
                "sticky w-full top-0 flex justify-between items-center h-20 lg:px-18 md:px-10 px-5 bg-white z-50 transition-all ease-linear duration-500 shadow-md",
                { "h-16": isScrolled }
            )}
        >
            <div className="transition-all">
                <Image
                    src={isMobile ? "/logo/main-logo-mobile.png" : "/logo/main-logo.png"}
                    alt="logo"
                    width={10000}
                    height={80}
                    className={cn(
                        "md:min-w-[450px] max-w-[50px] h-full left-0 ease-in-out duration-500 cursor-pointer",
                        {
                            "md:min-w-[400px]": isScrolled,
                        }
                    )}
                    onClick={() => router.push("/")}
                />
            </div>
            <div className="lg:flex items-center font-semibold gap-8 hidden">
                <Link href={"/gioi-thieu"} aria-label="Đi đến trang giới thiệu">
                    Giới Thiệu
                </Link>
                <Popover onOpenChange={() => setOpenPop(!openPop)} open={openPop}>
                    <PopoverTrigger onMouseEnter={() => setOpenPop(true)} onMouseDown={() => setOpenPop(true)}>
                        <div className="flex justify-center items-center gap-3">
                            <p className="lg:block hidden">Lịch Đào Tạo</p>
                            <Image
                                src={"/icons/chevron-down-black.svg"}
                                alt=""
                                width={16}
                                height={16}
                                className={cn("transition ease-in-out", { "rotate-180": openPop })}
                            />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent
                        align="end"
                        className="bg-white border rounded-md shadow-lg max-w-40"
                        onMouseLeave={() => setOpenPop(false)}
                    >
                        <div className="flex flex-col font-normal divide-y-2">
                            {loading ? (
                                <LoadingSpinner />
                            ) : calendarSchoolYear?.length ? (
                                calendarSchoolYear.map((item) => (
                                    <Link
                                        key={item.id}
                                        href={`/lich-dao-tao/${item.name}`}
                                        className="px-3 py-2 hover:bg-primary-light hover:text-white rounded-md transition-all duration-150 ease-linear"
                                        onClick={() => setOpenPop(false)}
                                    >
                                        <p>{item.name.replace("-", " - ")}</p>
                                    </Link>
                                ))
                            ) : (
                                <p className="text-sm font-light text-gray-400 text-center">Chưa có lịch</p>
                            )}
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
