"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ScanToDownload } from "./ScanToDownload";

export const MobileMenu = () => {
    const [openMennu, setOpenMenu] = useState(false);

    const toggleMobileMenu = () => {
        setOpenMenu(!openMennu);
    };

    return (
        <>
            <Image src="/icons/hambuger.svg" alt="" width={32} height={32} onClick={toggleMobileMenu} />
            <div
                className={cn(
                    "fixed top-0 left-0 lg:w-[70%] w-full z-30 backdrop-sepia-0 bg-white/[97%] py-5 h-full overflow-y-scroll ease-in-out duration-300",
                    { "translate-x-0": openMennu, "translate-x-full": !openMennu }
                )}
            >
                <div className="flex justify-end mb-5 mr-5 flex-1">
                    <Image src={"/icons/cross.svg"} alt="" width={32} height={32} onClick={toggleMobileMenu} />
                </div>
                <div className="flex flex-col justify-center items-center text-xl text-gray-700 gap-5">
                    <Link href={"#dich-vu"} aria-label="Đi đến các dịch vụ" onClick={toggleMobileMenu}>
                        Dịch vụ
                    </Link>
                    <Link href={"#tai-sao-chon-vnm"} aria-label="Đi đến tại sao chọn VNM" onClick={toggleMobileMenu}>
                        Tại sao chọn VieNam Moving
                    </Link>
                    <Link href={"#tinh-nang"} aria-label="Đi đến các tính năng" onClick={toggleMobileMenu}>
                        Tính năng
                    </Link>
                    <Link href={"#danh-gia"} aria-label="Đi đến các đánh giá" onClick={toggleMobileMenu}>
                        Khách hàng & cảm nhận
                    </Link>
                    <Link href={"#blog"} aria-label="Đi đến các blog" onClick={toggleMobileMenu}>
                        Blog
                    </Link>
                    <p className="text-base text-gray-400 mt-3">Tổng đài hỗ trợ (miễn phí)</p>
                    <span>
                        Hotline:&nbsp;
                        <Link href={"tel:18007011"} className="hover:text-primary">
                            1800 7011
                        </Link>
                        &nbsp;(8h - 21h30)
                    </span>
                    <p className="text-base text-gray-400 mt-3">Kết nối với chúng tôi</p>
                    <div className="flex gap-5 justify-center items-center">
                        <Link href={"https://twitter.com/vietnam_moving"} target="_blank">
                            <Image src={"/icons/x.png"} alt="x-icon" width={30} height={30} />
                        </Link>
                        <Link href={"https://www.facebook.com/VietnamMoving/"} target="_blank">
                            <Image src={"/icons/facebook.png"} alt="facebook-icon" width={30} height={30} />
                        </Link>
                        <Link href={"https://www.instagram.com/vietnammoving/"} target="_blank">
                            <Image src={"/icons/instagram.png"} alt="instagram-icon" width={30} height={30} />
                        </Link>
                        <Link href={"#"} target="_blank">
                            <Image src={"/icons/m.png"} alt="m-icon" width={30} height={30} />
                        </Link>
                        <Link href={"https://www.youtube.com/channel/UCsaG2CpWA7BWLH66gI925vQ"} target="_blank">
                            <Image src={"/icons/youtube.png"} alt="youtube-icon" width={30} height={30} />
                        </Link>
                        <Link href={"https://www.pinterest.com/vietnammovingofficial/"} target="_blank">
                            <Image src={"/icons/pinterest.png"} alt="pinterest-icon" width={30} height={30} />
                        </Link>
                    </div>
                    <div className="px-10">
                        <p className="text-base text-center text-gray-400 mt-5 mb-3">
                            Tải ứng dụng dành cho khách hàng
                        </p>
                        <ScanToDownload
                            width={80}
                            height={80}
                            className="text-sm bg-[#24263C] text-white max-h-[80px] max-w-[300px] mx-auto"
                        />
                        <p className="text-base text-center text-gray-400 mt-5 mb-3">Tải ứng dụng dành cho tài xế</p>
                        <ScanToDownload
                            type="driver"
                            width={80}
                            height={80}
                            className="text-sm bg-[#24263C] text-white max-h-[80px] max-w-[300px] mx-auto"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
