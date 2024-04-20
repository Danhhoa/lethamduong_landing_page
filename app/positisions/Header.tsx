"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "../components/MobileMenu";
import { ScanToDownload } from "../components/ScanToDownload";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Header = () => {
    const [openPop, setOpenPop] = useState(false);
    return (
        <nav className="fixed w-full top-0 flex justify-between items-center h-[80px] lg:px-12 md:px-10 px-5  bg-secondary z-10 ">
            <Link href="/">
                <Image src={"/logo/logo.png"} alt="nvm-logo" width={127} height={48} />
            </Link>
            <div className="flex items-center">
                <div className="lg:flex xl:gap-7 lg:gap-2 lg-text-sm text-[14px] text-[#5D4E00] font-semibold hidden">
                    <Link href="#services" className="">
                        Dịch vụ
                    </Link>
                    <Link href="#why_choose">Tại sao chọn Vietnam Moving</Link>
                    <Link href="#features">Tính năng</Link>
                    <Link href="#feedback">Khách hàng & Cảm nhận</Link>
                    <Link href="#blog">Blog</Link>
                </div>
            </div>

            <div className="flex justify-end lg:ml-0 ml-auto">
                <Popover onOpenChange={() => setOpenPop(!openPop)}>
                    <PopoverTrigger className="xl:px-5 xl:py-3 px-3 py-2 rounded-lg bg-primary">
                        <div className="flex justify-center items-center gap-3">
                            <Image src={"/icons/mobile.svg"} alt="" width={28} height={28} />
                            <p className="text-white font-semibold lg:block hidden">Tải Ứng Dụng</p>
                            <Image
                                src={"/icons/chevron-down.svg"}
                                alt=""
                                width={16}
                                height={16}
                                className={cn("transition ease-in-out ", { "rotate-180": openPop })}
                            />
                        </div>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="rounded-lg lg:min-w-[450px] min-w-[350px]">
                        <div className="flex flex-col gap-3 text-[#545454] font-medium">
                            <p className="">Tải ứng dụng dành cho khách hàng</p>
                            <ScanToDownload />
                            <p className="">Tải ứng dụng dành cho tài xế</p>
                            <ScanToDownload />
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
            <div className="ml-4 lg:hidden">
                <MobileMenu />
            </div>
        </nav>
    );
};
