"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MobileMenu } from "../components/MobileMenu";
import { ScanToDownload } from "../components/ScanToDownload";

export const Header = () => {
    const [openPop, setOpenPop] = useState(false);

    return (
        <nav className="fixed w-full top-0 flex justify-between items-center h-[80px] lg:px-12 md:px-10 px-5  bg-secondary z-10 ">
            <Link href="/" aria-label="Về trang chủ">
                <Image src={"/logo/logo.png"} alt="nvm-logo" width={127} height={48} />
            </Link>
            <div className="flex items-center">
                <div className="lg:flex xl:gap-7 gap-3 xl:text-base lg:text-sm text-[#5D4E00] font-semibold hidden">
                    <Link href="#dich-vu" aria-label="Đi đến các dịch vụ">
                        Dịch vụ
                    </Link>
                    <Link href="#tai-sao-chon-vnm" aria-label="Đi đến tại sao chọn VNM">
                        Tại sao chọn Vietnam Moving
                    </Link>
                    <Link href="#tinh-nang" aria-label="Đi đến các tính năng">
                        Tính năng
                    </Link>
                    <Link href="#danh-gia" aria-label="Đi đến các đánh giá">
                        Khách hàng & Cảm nhận
                    </Link>
                    <Link href="#blog" aria-label="Đi đến các blog">
                        Blog
                    </Link>
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
                            <ScanToDownload width={120} height={120} />
                            <p className="">Tải ứng dụng dành cho tài xế</p>
                            <ScanToDownload type="driver" width={120} height={120} />
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
            <div className="ml-4 lg:hidden cursor-pointer">
                <MobileMenu />
            </div>
        </nav>
    );
};
