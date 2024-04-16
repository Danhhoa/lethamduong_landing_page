"use client";

import Image from "next/image";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ScanToDownload } from "./ScanToDownload";

export const Header = () => {
    return (
        <nav className="flex justify-between px-14 items-center h-[80px] bg-secondary">
            <Link href="/" className="uppercase">
                <Image src={"/logo.png"} alt="nvm-logo" width={127} height={48}></Image>
            </Link>
            <div className="flex items-center">
                <div className="lg:flex xl:gap-5 lg:gap-3 lg-text-sm text-[#5D4E00] font-semibold hidden">
                    <Link href="#" className=" ">
                        Dịch vụ
                    </Link>
                    <Link href="#">Tại sao chọn Vietnam Moving</Link>
                    <Link href="#">Tính năng</Link>
                    <Link href="#">Khách hàng & Cảm nhận</Link>
                    <Link href="#">Blog</Link>
                </div>
            </div>

            <Popover>
                <PopoverTrigger className="px-5 py-3 rounded-lg bg-primary">
                    <div className="flex justify-center items-center gap-3">
                        <Image src={"/mobile.png"} alt="" width={28} height={28} />
                        <p className="text-white font-semibold lg:block hidden">Tải Ứng Dụng</p>
                        <Image src={"/chevron-up.png"} alt="" width={16} height={16} />
                    </div>
                </PopoverTrigger>
                <PopoverContent align="end" className="rounded-lg lg:min-w-[450px] min-w-[350px]">
                    <div className="flex flex-col gap-3 text-[#545454] font-medium">
                        <p className="">Tải ứng dụng dành cho khách hàng</p>
                        <ScanToDownload text="Quét mã để tải ứng dụng cho IOS & Android" />
                        <p className="">Tải ứng dụng dành cho tài xế</p>
                        <ScanToDownload text="Quét mã để tải ứng dụng cho IOS & Android" />
                    </div>
                </PopoverContent>
            </Popover>
        </nav>
    );
};
