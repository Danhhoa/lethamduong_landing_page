"use client";

import Image from "next/image";
import Link from "next/link";
import { ScanToDownload } from "./ScanToDownload";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const MobileMenu = () => {
    //transition-all duration-500 transform -translate-x-full
    const [openMennu, setOpenMenu] = useState(false);

    const toggleMobileMenu = () => {
        setOpenMenu(!openMennu);
    };
    return (
        <>
            <Image src="/icons/hambuger.png" alt="" width={32} height={32} onClick={toggleMobileMenu} />
            <div
                className={cn(
                    "fixed top-0 left-0 md:w-[70%] w-full z-30 backdrop-sepia-0 bg-white/[97%] py-5 h-full overflow-y-scroll ease-in-out duration-300",
                    { "translate-x-0": openMennu, "translate-x-full": !openMennu }
                )}
            >
                <div className="flex justify-end mb-5 mr-5 flex-1">
                    <Image src={"/icons/cross.png"} alt="" width={32} height={32} onClick={toggleMobileMenu} />
                </div>
                <div className="flex flex-col justify-center items-center text-xl text-gray-700 gap-5">
                    <Link href={"#services"} className="">
                        Dịch vụ
                    </Link>
                    <Link href={"#whyChoose"} className="">
                        Tại sao chọn VieNam Moving
                    </Link>
                    <Link href={"#fetures"} className="">
                        Tính năng
                    </Link>
                    <Link href={"#feedback"} className="">
                        Khách hàng & cảm nhận
                    </Link>
                    <Link href={"#blog"} className="">
                        Blog
                    </Link>
                    <p className="text-base text-gray-400 mt-3">Tổng đài hỗ trợ (miễn phí)</p>
                    <p className="text">Hotline: 1800 7011 (8h - 21h30)</p>
                    <p className="text-base text-gray-400 mt-3">Kết nối với chúng tôi</p>
                    <div className="flex gap-5 justify-center items-center">
                        <Image src={"/icons/x.png"} alt="x-icon" width={30} height={30} />
                        <Image src={"/icons/facebook.png"} alt="facebook-icon" width={30} height={30} />
                        <Image src={"/icons/instagram.png"} alt="instagram-icon" width={30} height={30} />
                        <Image src={"/icons/m.png"} alt="m-icon" width={30} height={30} />
                        <Image src={"/icons/youtube.png"} alt="youtube-icon" width={30} height={30} />
                        <Image src={"/icons/pinterest.png"} alt="pinterest-icon" width={30} height={30} />
                    </div>
                    <p className="text-base text-gray-400 mt-5">Tải ứng dụng dành cho khách hàng</p>
                    <ScanToDownload className="bg-[#24263C] text-white" />
                    <p className="text-base text-gray-400 mt-5">Tải ứng dụng dành cho tài xế</p>
                    <ScanToDownload className="bg-[#24263C] text-white" />
                </div>
            </div>
        </>
    );
};
